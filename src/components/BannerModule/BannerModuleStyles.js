import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  video-container {
    overflow: hidden;
    position: relative;
    width:100%;
}

.video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 33vh;
    width: 100%;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    .price {
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: var(--bannerTitle);
      letter-spacing: -1px;
      margin-bottom: 30px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: var(--bannerSubTitle);
      letter-spacing: -0.5px;
    }

    button {
      width: 30px;
      height: 30px;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 22px;
      display: flex;
      margin-top: 30px;
    }
  }
`
