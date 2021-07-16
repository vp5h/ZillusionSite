import React from "react"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"

const Index = () => {
  return (
    <>
      <Seo title="Zillusion Studios" />
      <BannerModule
        // title="Zillusion Studios"
        // subTitle="As Real as It Gets!"
      />
      <BasicTextModule />
      {/* <PerksModule>
        <Perk title="The Title" content="The content" />
      </PerksModule> */}
      {/* <Features /> */}
    </>
  )
}

export default Index
