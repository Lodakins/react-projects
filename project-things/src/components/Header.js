import { Link } from 'react-router-dom';


function Header(){
    return (
        <header className="site-head" style={{backgroundImage: "url(/images/site/Final-Page-2016.png)"}}>
            <div className="container">
                <div className="site-mast">
                    <div className="site-mast-left">
                        <a aria-current="page" style={{textDecoration:"none"}}  href="/">
                            <h1 className="site-logo">THETHINGSWECREATE</h1>
                        </a>
                    </div>
                    <div className="site-mast-right">
                        <a href="#" className="site-nav-item" target="_blank" rel="noopener noreferrer">
                            <img className="site-nav-icon" src="/images/twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#" className="site-nav-item" target="_blank" rel="noopener noreferrer">
                            <img className="site-nav-icon" src="/images/facebook.svg" alt="Facebook" />
                        </a>
                        <a className="site-nav-item" href="#" target="_blank" rel="noopener noreferrer">
                            <img className="site-nav-icon" src="/images/rss.svg" alt="RSS Feed" />
                        </a>
                    </div>
                </div>
                <div className="site-banner">
                    <h1 className="site-banner-title">THETHINGSWECREATE</h1>
                    {/* <p className="site-banner-desc">Thoughts, stories and JAMstack</p> */}
                    <p style={{color:"white"}}>
                        At <font style={{color:"whitesmoke", fontWeight:"bold"}}>THINGSWECREATE</font>,
                         we have invented some <strong>revolutionary tools</strong> for modern cyclists.
                       FIRST TO LAUNCH is theSTAYSTRAIGHT lite- an INGENIUS TOOL for bicycle alignment.
                    </p>
                </div>
                <nav className="site-nav">
                    <div className="site-nav-left">
                        <Link to="/"  className="site-nav-item">Home</Link>
                        <Link to="/invest"  className="site-nav-item">Product</Link>
                        <Link to="/product"  className="site-nav-item">Invest</Link>
                        <Link to="/contact"  className="site-nav-item">Contact</Link>
                        {/* <a aria-current="page" className="site-nav-item" href="/">Home</a>
                        <a className="site-nav-item" href="/tag/getting-started/">Product</a>
                        <a className="site-nav-item" href="/author/ghost/">Invest</a>
                        <a className="site-nav-item" href="https://help.ghost.org" target="_blank" rel="noopener noreferrer">Contact</a> */}
                    </div>
                    <div className="site-nav-right">
                      
                        <a className="site-nav-button" href="/about">About</a>
                    </div>
                </nav>
            </div>
        </header>

    );
};


export default Header;