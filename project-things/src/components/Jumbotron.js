import { Link } from 'react-router-dom';


function Jumbotron(){
    return (
        <header className="site-head" style={{backgroundImage: "url(/images/site/Final-Page-2016.png)"}}>
            <div className="container">
                <div className="site-mast">
                    <div className="site-mast-left">
                        <a href="/" style={{textDecoration:"none"}}>
                            <h1 className="site-logo">THETHINGSWECREATE</h1>
                        </a>
                    </div>
                    <div class="site-mast-right">
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
                <nav className="site-nav">
                    <div className="site-nav-left">
                        <Link to="/"  className="site-nav-item">Home</Link>
                        <Link to="/invest"  className="site-nav-item">Invest</Link>
                        <Link to="/product"  className="site-nav-item">Product</Link>
                        <Link to="/contact"  className="site-nav-item">Contact</Link>
                    </div>
                    <div className="site-nav-right">
                        <Link to="/"  className="site-nav-button">About</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Jumbotron;