import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="viewport-bottom">
      <footer className="site-foot">
        <div className="site-foot-nav container">
          <div className="site-foot-nav-left">
            <a aria-current="page" className="" href="/">
              Ghost &amp; Gatsby
            </a>{" "}
            © 2022 — Published with{" "}
            <a
              className="site-foot-nav-item"
              href="https://ghost.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ghost
            </a>
          </div>
          <div className="site-foot-nav-right">
            <Link to="/"  className="site-foot-nav-item">Home</Link> |{" "} 
            <Link to="/invest"  className="site-foot-nav-item">Invest</Link> |{" "} 
            <Link to="/product"  className="site-foot-nav-item">Product</Link> |{" "} 
            <Link to="/contact"  className="site-foot-nav-item">Contact</Link> |{" "}  
            {/* <a aria-current="page" className="site-foot-nav-item" href="/">
              Home
            </a>
            <a className="site-foot-nav-item" href="/tag/getting-started/">
              Tag
            </a>
            <a className="site-foot-nav-item" href="/author/ghost/">
              Author
            </a>
            <a
              className="site-foot-nav-item"
              href="https://help.ghost.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
