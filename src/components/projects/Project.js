import "./Project.css";
import github_icon from "../../assets/github-square-brands.svg";
import heart_icon from "../../assets/heart-pulse-solid.svg";
import comment_icon from "../../assets/comment-solid.svg";
import close_icon from "../../assets/xmark-solid.svg";
import {useEffect, useRef, useState} from "react";
import MarkdownIt from "markdown-it";

function Project({projectImage, projectName, repoUrl, liveUrl, repoPath, repoBranch}) {

  const [readmeHtml, setReadmeHtml] = useState("");
  const [isReadmeVisible, setIsReadmeVisible] = useState(false);
  const textRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://raw.githubusercontent.com/${repoPath}/${repoBranch}/README.md`);
      const mdRaw = await res.text();
      setReadmeHtml(new MarkdownIt().render(mdRaw));
    }

    fetchData()
  }, [])

  function showReadme() {
    textContainerRef.current.style.display = "block";
    //const el = "<span class='read-more-text'> Read more...</span>";
    if (readmeHtml.length > 750) {
      textRef.current.innerHTML = readmeHtml.substring(0, 750);
    } else textRef.current.innerHTML = readmeHtml;
    setIsReadmeVisible(true);
  }

  function showMoreReadme() {
    textRef.current.innerHTML = readmeHtml + "<span className='read-more-text' onClick={showReadme}> Read less...</span>";
  }

  function hideReadme() {
    setIsReadmeVisible(false);
    textContainerRef.current.style.display = "none";
  }

  return (
    <div className="project">
      <div ref={textContainerRef} className="readme-container animate__animated animate__fadeInUp">
        <img className="button-close icon" src={close_icon} alt="Close" title="Close" onClick={hideReadme}/>
        <div className="readme-text" ref={textRef}>
        </div>
      </div>
      {!isReadmeVisible &&
        <div className="animate__fadeInDown animate__animated">
          <h1 className="smaller-font">{projectName}</h1>
          <a href={liveUrl}>
            <img className="preview-image" src={projectImage} alt="Live version" title="Live version"/>
          </a>
          <a href={repoUrl}>
            <img className="icon" src={github_icon} title="Github repository" alt="Github repository"/>
          </a>
          <a href={liveUrl}>
            <img className="icon" src={heart_icon} title="Live version" alt="Live version"/>
          </a>
          <img className="icon" src={comment_icon} title="Project notes"
               alt="Project notes" onClick={showReadme}/>
        </div>
      }
    </div>
  );
}

export default Project;
