import "./Projects.css";
import LoadingSpin from "react-loading-spin";
import {NETLIFY_API_TEMPLATE} from "../Constants";
import Project from "./Project";
import {useEffect, useState} from "react";

function Projects() {

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(NETLIFY_API_TEMPLATE + "sites");
        const json = await res.json()
        setResponse(json);
      } catch (err) {
        console.log("Error" + err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  //TODO Link current site with Github Readme
  function getSites() {
    if (response !== null) {
      return response.map(site => {
        return <Project image={site.screenshot_url}
                        name={site.name}/>
      })
    }
  }

  const sites = getSites()

  return (
    <section className="projects-section">
      <h1>My projects</h1>
      {loading && <LoadingSpin/>}
      <div className="projects-container">
        {sites}
      </div>
    </section>
  );
}

export default Projects;
