import "./Project.css";
import github_icon from "../../assets/github-square-brands.svg";
import {useEffect, useState} from "react";

function Project({image, name, repoUrl, repoPath, repoBranch, id}) {

  // const [readmeHtml, setReadmeHtml] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://raw.githubusercontent.com/${repoPath}/${repoBranch}/README.md`);
      const mdRaw = await res.text();
      //document.getElementById(id).innerHTML = new MarkdownIt().render(mdRaw)
    }
    fetchData()
  }, [])


  return (
    <div id={id} className="project">
      <h1 className="smaller-font">{name}</h1>
      <img className="preview-image" src={image} alt=""/>
      {readmeHtml !== null && readmeHtml}
      <a href={repoUrl}>
        <img className="icon" src={github_icon} alt="github"/>
      </a>
    </div>
  );
}

export default Project;
