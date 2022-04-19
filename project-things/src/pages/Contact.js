import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import '../styles/styles.css';


function Main(){
    return(
        <main className="site-main">
            <div className="container">
                <article className="content">
                        <section className="post-full-content">
                            <h1 className="content-title">CONTACT US</h1>
                            <section className="content-body load-external-scripts">
                                <p>Telephone:<span  style={{color:"#51331d",fontWeight:"600"}}> +44 790 952 6808</span></p>
                                <p>Email: <span  style={{color:"#51331d",fontWeight:"600"}}>info@TheThingsWeCreate.com</span></p>
                                 or use the form below
                            </section>
                            <section className="content-body load-external-scripts">
                                <form className="row mt-3">
                                  <div className="col-md-12 mt-2">
                                       <label>Name</label>
                                      <input type="text" className="form-control" required />
                                  </div>
                                  <div className="col-md-12 mt-2">
                                       <label>Email</label>
                                      <input type="text" className="form-control" required />
                                  </div>
                                  <div className="col-md-12 mt-2">
                                       <label>Subject</label>
                                      <input type="text" className="form-control" required />
                                  </div>
                                  <div className="col-md-12 mt-2">
                                       <label>Message</label>
                                      <textarea className="form-control" rows="6" >

                                      </textarea>
                                  </div>
                                  <div className="col-md-12 mt-2">
                                       <button className="btn btn-primary btn-lg"> Send Message</button>
                                  </div>
                                </form> 
                            </section>
                        </section>
                </article>
            </div>
        </main>
    );
}



function Contact(){
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


export default Contact;