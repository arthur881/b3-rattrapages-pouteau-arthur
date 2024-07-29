import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import "./layout.css"

const Layout = ({ pageTitle, children }) => {

  return (
    <div className="pagewrapper">
      <header>
        <h1>01 - Jamstack</h1>
        <ul className='nav'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products/">Products</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </header>
      <main>
        <section className="hero">
          <h2 className="pageTitle">{pageTitle}</h2>
        </section>
        <section className="content">
          {children}
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Layout