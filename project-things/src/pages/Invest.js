
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";


function Main(){
    return(
        <main className="site-main">
            <div className="container">
                <article className="content">
                        <section className="post-full-content">
                            <h1 className="content-title">INVEST WITH US</h1>
                            <section className="content-body load-external-scripts">
                                <p> PICTURE IT: ONE STAYSTRAIGHT lite IN EVERY BOX OF BICYCLE MADE! </p>
                                <p>That is a lot of units automatically sold! We are ACTIVELY PURSUING this GOAL. INVEST IN US and lets make it happen.</p>

                                <p>THE BICYCLE INDUSTRY IS HUGE and GROWING.</p>

                                <p>2015 saw £1.5bn spent in the bicycle industry. There are already many bicycle manufacturers springing up.
                                    We offer you a different way to get a slice of the pie. The plan is as follows:</p>

                                    <ul>
                                        <li>STEP 1: SECURE INVESTMENTS/FUNDING</li>
                                        <li>STEP 2: LICENSE/MANUFACTURE</li>
                                        <li>STEP 3: LAUNCH PRODUCT AT EVENT WITH PROMINENT INDUSTRY FIGURES</li>
                                    </ul>


                                <p>There are FOUR NEW INVENTIONS in total. All with PATENT PROTECTION (or ongoing application). Each one presents a revolutionary product with lucrative potential.
                                    Call +44 790 952 6808 to BOOK A MEETING.</p>
                               
                            </section>
                        </section>
                </article>
            </div>
        </main>
    );
}


function Invest(){
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


export default Invest;