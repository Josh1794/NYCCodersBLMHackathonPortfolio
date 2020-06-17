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
      <a
        target="_blank"
        href="https://www.meetup.com/nyc-coders/"
        rel="noreferrer noopener"
      >
        <Image />
      </a>
      <h1
        style={{
          margin: 0,
          paddingLeft: "20px",
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
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
