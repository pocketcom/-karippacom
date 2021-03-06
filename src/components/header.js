import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "black",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 ,textAlign:"center",paddingBottom:"10px"}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize:"20px",
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
