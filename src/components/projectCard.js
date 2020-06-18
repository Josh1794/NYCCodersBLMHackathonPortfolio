import React from "react"
import "../app.scss"
import Placeholder from "./placeholder"

export default function Cards() {
  return (
    <div className="portfolioPage">
      <div className="portfolioProjects">
        <div className="projects" data-sal="fade" id="salAnimation">
          <div className="cardContent">
            <div className="projectPicture">
              <Placeholder />
            </div>
            <div className="textArea">
              <h5>Project Name</h5>
              <p>Project Description goes here</p>
              <div className="linkArea">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="githubLink"
                  href="https://github.com/thunky-monks/graceshopper"
                >
                  <h6>Github</h6>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="deployLink"
                  href="https://github.com/thunky-monks/graceshopper"
                >
                  <h6>Deployed Link</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects" data-sal="fade" id="salAnimation">
          <div className="cardContent">
            <div className="projectPicture">
              <Placeholder />
            </div>
            <div className="textArea">
              <h5>Project Name</h5>
              <p>Project Description goes here</p>
              <div className="linkArea">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="githubLink"
                  href="https://github.com/thunky-monks/graceshopper"
                >
                  <h6>Github</h6>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="deployLink"
                  href="https://github.com/thunky-monks/graceshopper"
                >
                  <h6>Deployed Link</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects" data-sal="fade" id="salAnimation">
          <div className="cardContent">
            <div className="projectPicture">
              <Placeholder />
            </div>
            <div className="textArea">
              <h5>Project Name</h5>
              <p>Project Description goes here</p>
              <div className="linkArea">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="githubLink"
                  href="https://github.com/thunky-monks/graceshopper"
                >
                  <h6>Github</h6>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="deployLink"
                  href="https://github.com/thunky-monks/graceshopper"
                >
                  <h6>Deployed Link</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
