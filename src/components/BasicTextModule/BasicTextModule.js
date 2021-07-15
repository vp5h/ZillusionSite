import React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
         As Real As it Gets!
        </h2>
        <p style={{ marginBottom: "60px" }}>
          We are Cooking Something Great, Get On our Mail list to get all our Developments as they Happen.
        </p>
        <Button text="Get on" as={Link} to="/products" />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
