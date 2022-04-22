import "./Projects.css";
import LoadingSpin from "react-loading-spin";
import Project from "./Project";
import {fetchNetlifyData} from "../../api/API"
import {useEffect, useState} from "react";

function Projects() {

  const [loading, setLoading] = useState(true);
  const [responseNetlify, setResponseNetlify] = useState(null);

  useEffect(() => {
    async function setData() {
      setLoading(true);
      await fetchNetlifyData("sites").then(res => setResponseNetlify(res));
      setLoading(false);
    }
    setData()
  }, [])

  function getSites() {
    return responseNetlify.map(site => {
      const buildSettings = site.build_settings;
      return <Project
        key={site.name}
        liveUrl={`https://${site.default_domain}`}
        repoPath={buildSettings.repo_path}
        repoBranch={buildSettings.repo_branch}
        repoUrl={buildSettings.repo_url}
        projectName={site.name}/>
    })
  }

  return (
    <section className="projects-section">
      <h1 className="bigger-font">My projects</h1>
      {loading && <LoadingSpin/>}
      <div className="projects-container">
        {responseNetlify !== null && getSites()}
      </div>
    </section>
  );
}

export default Projects;
