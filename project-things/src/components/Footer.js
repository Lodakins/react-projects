import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="viewport-bottom">
      <footer className="site-foot">
        <div className="site-foot-nav container">
          <div className="site-foot-nav-left">
              <Link to="/"  className="site-foot-nav-item">THETHINGSWECREATE</Link>
          </div>
          <div className="site-foot-nav-right">
            <Link to="/"  className="site-foot-nav-item">Home</Link> |{" "} 
            <Link to="/invest"  className="site-foot-nav-item">Invest</Link> |{" "} 
            <Link to="/product"  className="site-foot-nav-item">Product</Link> |{" "} 
            <Link to="/contact"  className="site-foot-nav-item">Contact</Link> |{" "}  
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
