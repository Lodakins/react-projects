import Footer from "../components/Footer";
import Header from "../components/Header";



function Main(props){
    return(
        <main className="site-main">
        <div className="container">
          <section className="post-feed">
            <a className="post-card" href="/about/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage:"url('https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png')"}}
                ></div>
                <div className="post-card-tags"></div>
                <h2 className="post-card-title">THETHINGSWECREATE</h2>
              </header>
              <section className="post-card-excerpt">
                Build an API driven static-site with Gatsby.js and use Ghost as a
                completely decoupled headless CMS. Read more about how it works and
                how to use this starter theme here!
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>2 min read</div></div>
              </footer></a
            ><a className="post-card" href="/welcome/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage:"url('https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png')"}}
                ></div>
                <div className="post-card-tags">
                  <span className="">Getting Started</span>
                </div>
                <h2 className="post-card-title">Welcome to Ghost</h2>
              </header>
              <section className="post-card-excerpt">
                Welcome, it's great to have you here. We know that first impressions
                are important, so we've populated your new site with some initial
                getting started posts that will help you get familiar with everything
                in no time.
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>1 min read</div></div>
              </footer></a
            ><a className="post-card" href="/the-editor/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage:"url('https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png')"}}
                ></div>
                <div className="post-card-tags">
                  <span className="">Getting Started</span>
                </div>
                <h2 className="post-card-title">Writing posts with Ghost ✍️</h2>
              </header>
              <section className="post-card-excerpt">
                Discover familiar formatting options in a functional toolbar and the
                ability to add dynamic content seamlessly.
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>3 min read</div></div>
              </footer></a
            ><a className="post-card" href="/publishing-options/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage: "url('https://static.ghost.org/v3.0.0/images/publishing-options.png')"}}
                ></div>
                <div className="post-card-tags">
                  <span className="">Getting Started</span>
                </div>
                <h2 className="post-card-title">Publishing options</h2>
              </header>
              <section className="post-card-excerpt">
                The Ghost editor post settings menu has everything you need to fully
                optimise and distribute your content effectively.
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>2 min read</div></div>
              </footer></a
            ><a className="post-card" href="/admin-settings/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage:"url('https://static.ghost.org/v3.0.0/images/admin-settings.png')"}}
                ></div>
                <div className="post-card-tags">
                  <span className="">Getting Started</span>
                </div>
                <h2 className="post-card-title">Managing admin settings</h2>
              </header>
              <section className="post-card-excerpt">
                There are a couple of things to do next while you're getting set up:
                making your site private and inviting your team.
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>2 min read</div></div>
              </footer></a
            ><a className="post-card" href="/organising-content/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage: "url('https://static.ghost.org/v3.0.0/images/organising-your-content.png')"}}
                ></div>
                <div className="post-card-tags">
                  <span className="">Getting Started</span>
                </div>
                <h2 className="post-card-title">Organising your content</h2>
              </header>
              <section className="post-card-excerpt">
                Ghost has a flexible organisational taxonomy called tags and the
                ability to create custom site structures using dynamic routes.
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>2 min read</div></div>
              </footer></a
            ><a className="post-card" href="/apps-integrations/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage:"url('https://static.ghost.org/v3.0.0/images/app-integrations.png')"}}
                ></div>
                <div className="post-card-tags">
                  <span className="">Getting Started</span>
                </div>
                <h2 className="post-card-title">Apps &amp; integrations</h2>
              </header>
              <section className="post-card-excerpt">
                Work with all your favourite apps and tools or create your own custom
                integrations using the Ghost API.
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>2 min read</div></div>
              </footer></a
            ><a className="post-card" href="/themes/"
              ><header className="post-card-header">
                <div
                  className="post-card-image"
                  style={{backgroundImage: "url('https://static.ghost.org/v3.0.0/images/creating-a-custom-theme.png')"}}
                ></div>
                <div className="post-card-tags">
                  <span className="">Getting Started</span>
                </div>
                <h2 className="post-card-title">Creating a custom theme</h2>
              </header>
              <section className="post-card-excerpt">
                Ghost comes with a beautiful default theme designed for publishers
                which can easily be adapted for most purposes, or you can build a
                custom theme to suit your needs.
              </section>
              <footer className="post-card-footer">
                <div className="post-card-footer-left">
                  <div className="post-card-avatar">
                    <img
                      className="author-profile-image"
                      src="https://static.ghost.org/v2.0.0/images/ghost.png"
                      alt="Ghost"
                    />
                  </div>
                  <span>Ghost</span>
                </div>
                <div className="post-card-footer-right"><div>2 min read</div></div>
              </footer></a
            >
          </section>
          <nav className="pagination" role="navigation">
            <div></div>
            <div></div>
          </nav>
        </div>
        </main>
        );
}


function Home(props){
    return (
        <div className="viewport">
            <div className="viewport-top">
                <Header />
                <Main />
            </div>
            <Footer />
        </div>
    );
}


export default Home;