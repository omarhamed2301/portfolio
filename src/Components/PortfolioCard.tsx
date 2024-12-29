import React, { useState, useEffect, useRef } from "react";

export default function PortfolioCard(props: any) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInTopRight");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleLightboxOpen = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="row hidden justify-content-between align-items-center mb-5"
      >
        <div className="col-lg-5">
          <div className="cardd-info">
            <h3 style={{ fontWeight: "bold", letterSpacing: "1px" }}>Featured project</h3>
            <a
              href={props.href}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "20px", color: "#a1a1a1", width: "100%" }}
            >
              {props.title}
            </a>
            <div className="desc">
              <p>{props.description}</p>
              <p className="m-0">
                <span style={{ fontWeight: "bold", fontSize: "17px", color: "#868686" }}>
                  Github:{" "}
                </span>
                <a
                  href={props.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "15px", display: "inline" }}
                >
                  {props.github}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="cardd-img">
            <div
              className="project"
              onClick={() => handleLightboxOpen(props.src)}
              role="button"
              tabIndex={0}
            >
              <div className="projectInner">
                <img src={props.src} alt="VA" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={handleLightboxClose}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Lightbox" />
            <button className="lightbox-close" onClick={handleLightboxClose}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
