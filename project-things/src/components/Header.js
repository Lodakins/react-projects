
function Header(){
    return (
        <header className="site-head" style={{backgroundImage: "url(/images/site/Final-Page-2016.png)"}}>
            <div className="container">
                <div className="site-mast">
                    <div className="site-mast-left">
                        <a aria-current="page" className="" href="/">
                            <img className="site-logo" src="" alt="Ghost &amp; Gatsby" />
                        </a>
                    </div>
                    <div className="site-mast-right">
                        <a href="https://twitter.com/tryghost" className="site-nav-item" target="_blank" rel="noopener noreferrer">
                            <img className="site-nav-icon" src="/images/twitter.svg" alt="Twitter" />
                        </a>
                        <a href="https://www.facebook.com/ghost" className="site-nav-item" target="_blank" rel="noopener noreferrer">
                            <img className="site-nav-icon" src="/images/facebook.svg" alt="Facebook" />
                        </a>
                        <a className="site-nav-item" href="https://feedly.com/i/subscription/feed/http://localhost:8000/rss/" target="_blank" rel="noopener noreferrer">
                            <img className="site-nav-icon" src="/images/rss.svg" alt="RSS Feed" />
                        </a>
                    </div>
                </div>
                <div className="site-banner">
                    <h1 className="site-banner-title">Ghost &amp; Gatsby</h1>
                    <p className="site-banner-desc">Thoughts, stories and JAMstack</p>
                </div>
                <nav className="site-nav">
                    <div className="site-nav-left">
                        <a aria-current="page" className="site-nav-item" href="/">Home</a>
                        <a className="site-nav-item" href="/tag/getting-started/">Tag</a>
                        <a className="site-nav-item" href="/author/ghost/">Author</a>
                        <a className="site-nav-item" href="https://help.ghost.org" target="_blank" rel="noopener noreferrer">Help</a>
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