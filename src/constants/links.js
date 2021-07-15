import React from "react"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaYoutube as YouTube,
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/",
    text: "Follow Us On",
  }
  
]

export const socialItems = [
  {
    path: "https://www.facebook.com/zillusionstudios",
    icon: <Facebook />,
  },
  {
    path: "https://twitter.com/ZillusionStudio",
    icon: <Twitter />,
  },
  {
    path: "https://www.instagram.com/zillusionstudios/",
    icon: <Instagram />,
  },
  {
    path: "https://www.linkedin.com/company/zillusion-studios/",
    icon: <Linkedin />,
  },
  {
    path: "https://www.youtube.com/channel/UC3wpfWzPzr2mCFBc8zEsPpg",
    icon: <YouTube />,
  },
  
]
// {
//   path: "/products",
//   text: "products",
// },
// {
//   path: "/blog",
//   text: "blog",
// },
// {
//   path: "/contact",
//   text: "contact",
// },