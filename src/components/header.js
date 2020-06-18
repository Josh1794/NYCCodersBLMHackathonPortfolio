import PropTypes from "prop-types"
import React from "react"
import Image from "./logo"

const Header = ({ siteTitle }) => (
  <header className="heading">
    <div>
      <a
        target="_blank"
        href="https://www.meetup.com/nyc-coders/"
        rel="noreferrer noopener"
      >
        <Image />
      </a>
      <h1>{siteTitle}</h1>
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
