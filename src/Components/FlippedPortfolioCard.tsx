function FlippedPortfolio(props: any) {
  return (
    <div className="cardd">
      <div className="row">
        <div className="col-lg-7" style={{flexBasis:'content'}}>
          <div className="cardd-img">
            <a href={props.href} target="_blank" className="project projectTwo" rel="noreferrer">
              <div className="projectInner">
                <img src={props.src} alt="VA" />
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="cardd-info" style={{height:"400px" , position:"relative"}}>
            <h3>Featured project</h3>
            <a href={props.href} target="_blank" rel="noreferrer">
              {props.title}
            </a>
            <div className="desc" style={{position:"absolute", bottom:"0", left:"-90px"}}>{props.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlippedPortfolio;
