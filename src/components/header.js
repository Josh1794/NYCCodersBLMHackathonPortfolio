import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(0,0,0)`,
      borderBottomColor: "white",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image />
      <h1 style={{ margin: 0, paddingLeft: "20px" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
