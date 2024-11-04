import React from "react";

export default function EducationCard(props) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 educationCard">
      <div className="cardInfo">
        <div className="card-img">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="card-body">
          <h4>{props.title}</h4>
          <p>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
