import React from "react";
export default function PortfolioCard(props: any) {
  return (
    <div className="row justify-content-between align-items-center mb-5" >
      <div className="col-lg-5">
        <div className="cardd-info">
          <h3 style={{fontWeight:'bold', letterSpacing:'1px'}}>Featured project</h3>
          <a href={props.href} target="_blank" rel="noreferrer" style={{fontSize:'20px', color:'#a1a1a1', width:'100%'}}>
            {props.title}
          </a>
          <div className="desc">
            <p>{props.description}</p>
            <p className="m-0">
              <span style={{fontWeight:'bold', fontSize:'17px', color:'#868686'}}>Github: </span>
              <a href={props.github} target="_blank" rel="noreferrer" style={{fontSize:"15px",display:'inline'}}>
                {props.github}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-7" style={{width:'100%'}}>
        <div className="cardd-img" style={{width:'100%'}}>
          <a
            href={props.href}
            target="_blank"
            className="project"
            rel="noreferrer"
          >
            <div className="projectInner" style={{width:'100%'}}>
              <img src={props.src} alt="VA" style={{width:'100%'}}/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
