import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";



function Main(){
    return(
        <main className="site-main">
            <div className="container">
                <article className="content">
                        <section className="post-full-content">
                            <h1 className="content-title">The STAYSTRAIGHT lite</h1>
                            <section className="content-body load-external-scripts">
                                                            
                                <p>This NEW INVENTION, STAYSTRAIGHT lite, makes your bicycle assembly a ride in the park.</p>

                                <p>There's NOTHING LIKE IT, nor has there EVER BEEN ANYTHING LIKE IT!
                                For use at home or in workshops, this simple addresses an age-old issue: How to align your bicycle at right angles!</p>

                                <h4 style={{color:"#51331d",fontWeight:"600"}}>Benefits include:</h4>

                                <ul>
                                    <li>Improved riding posture</li>
                                    <li>Improved aerodynamics</li>
                                    <li>Quicker bike assembly</li>
                                    <li>Resulting in improved overall bike performance.</li>
                                </ul>


                                <h4 style={{color:"#51331d",fontWeight:"600"}}>Retailers</h4>
                                <p>To stock the STAYSTRAIGHT lite, contact us on +44 790 952 6808 or Click Here for further information on purchasing</p>


                                <h4 style={{color:"#51331d",fontWeight:"600"}}>Licensors</h4>
                                <p>The STAYSTRAIGHT lite is also available to LICENSE. Contact us on +44 790 952 6808 or Click Here for further information on licensing</p>
                               
                            </section>
                        </section>
                </article>
            </div>
        </main>
    );
}




function Product(){
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


export default Product;