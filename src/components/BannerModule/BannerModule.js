import React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"
import Vid from "../assets/vid.mp4"





const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
        
          <video
          controls
          className="banner__image"   
          height="100%"
          width="100%"
         
          loop
          muted
          autoPlay>
          <source src={Vid} type="video/mp4" />
        </video>
       
          //   <div className="video-container">
          // <iframe className="banner__image" src="https://www.youtube.com/embed/xIzmlPzhWCM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          // </div>
          // <StaticImage
          //   className="banner__image"
          //   imgClassName="banner__image--content"
          //   src="../../images/macbook-color.jpg"
          //   alt="Banner Image"
          //   layout="fullWidth"
          //   placeholder="blurred"
          // />
        )}
        
        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            {enquire && <Button text="Enquire Now" as={Link} to="/contact" />}
            <button onClick={scrollToArea}>
              <Arrow />
            </button>
          </div>
        </div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
