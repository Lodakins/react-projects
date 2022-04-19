import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";


function Main(){
    return(
        <main className="site-main">
            <div className="container">
                <article className="content">
                        <section className="post-full-content">
                            <h1 className="content-title">About THINGSWECREATE</h1>
                            <section className="content-body load-external-scripts">
                                <p>
                                 We INNOVATE at <span style={{color:"#51331d",fontWeight:"600"}}>THETHINGSWECREATE</span>.
                                 </p>
                                <p>Working out of our creative space in East London, we are busy getting ready to release a revolutionary new product!
                                    "ONE IN EVERY BOX" is more than just a business goal. It represents BALANCE - a core theme in our creative and 
                                    buisiness process.
                                </p>

                                <p>We have started our CAMPAIGN to bring these products to market.</p>

                                <p>Our services include consultation and design.</p>

                                <p>There are FOUR NEW INVENTIONS in total. All with PATENT PROTECTION (or ongoing application).
                                     Each one presents a revolutionary product with lucrative potential.
                                    Call +44 790 952 6808 to BOOK A MEETING.</p>
                               
                            </section>
                        </section>
                </article>
            </div>
        </main>
    );
}


function About(){
    return(
    <div className="viewport">
            <div className="viewport-top">
                <Jumbotron />
                <Main />
            </div>
            <Footer />
        </div>
    );
}






export default About;