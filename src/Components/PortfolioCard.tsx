import React from "react";
export default function PortfolioCard(props: any) {
  return (
    <div className="cardd">
      <div className="row">
        <div className="col-lg-5">
          <div className="cardd-info">
            <h3>Featured project</h3>
            <a
              href={props.href}
              target="_blank"
            >
             {props.title}
            </a>
            <div className="desc">
              {props.description}
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="cardd-img">
            <a
              href={props.href}
              target="_blank"
              className="project"
            >
              <div className="projectInner">
                <img src={props.src} alt="VA" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
