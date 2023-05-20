import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./css/style.css";
import "./css/responsive.css";
import { Fade } from "react-awesome-reveal";

function Home() {

    return (
        <div className='wrapper'>
            <img src="/assets/signature.png" alt="signature" className="signatureimg" />
            <img src="/assets/signature.png" alt="signature" className="signatureimg2" />

            {/* ================ Hero Section ================  */}
            <section id="hero-section" className="text-center">
                <video autoPlay muted loop className="bgvideo">
                    <source src="assets/video1.mp4" />
                </video>
                <div className="container text-center">
                    <img src="/assets/logo.svg" alt="logo" className="logo mx-auto" />
                    <h1 className="var800"><span>NATURE IN</span> A SIP</h1>
                </div>
            </section>

            <img src="/assets/fade.png" alt="fade" className="fadeimg" />

            {/* ============== First Section ===============  */}
            <section id="first-section">
                <div className="container">
                    <div className="row">
                        <div className="col-7 first-col">
                            <h2 className="var700">GREENEST WHISKY</h2>
                            <h2 className="var700">IN THE MAKING</h2>
                            <p className="east500 pt-2 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <button className="btn east600">Explore Signature Whisky</button>
                        </div>
                        <div className="col-5 second-col">
                            <img src="/assets/img2.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================ Content Section 1 ==============  */}
            <Fade direction='left' duration={2000}>
                <section id="content-section1">
                    <div className="container">
                        <div className="row">

                            <div className="col-6 px-0 first-col">
                                <img src="/assets/img3.png" alt="img" />
                            </div>

                            <div className="col-6 second-col d-flex flex-column justify-content-center">
                                <h2 className="var700 text-uppercase">here's to</h2>
                                <h2 className="var700 text-uppercase">louise martin,</h2>
                                <h2 className="var700 text-uppercase text-white">our master blender</h2>
                                <div className="buttons">
                                    <button className="btn east600">a phenomenal blend</button>
                                    <button className="btn east600">born of masterful craft</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>

            {/* ================= Content Section 2 ==================  */}
            <Fade direction='right' duration={2000}>
                <section id="content-section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 px-0 first-col">
                                <img src="/assets/img4.png" alt="img" />
                            </div>
                            <div className="col-6 second-col d-flex flex-column justify-content-center">
                                <h2 className="var700 text-uppercase">signature</h2>
                                <h2 className="var700 text-uppercase text-white">rare aged whisky</h2>
                                <div className="east600 text-uppercase">deep & rich</div>
                                <p className="east500">An authentically rich taste, with distinct hints of sweetness and fruitiness. A
                                    medley of woody
                                    undertones brought to life reaching its crescendo
                                    to leave a deep and lasting signature.</p>
                                <div className="buttons mt-3">
                                    <button className="btn east600">explore signature whisky</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>

            {/* ================== Content Section 3 =================  */}
            <Fade direction='left' duration={2000}>
                <section id="content-section3">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 first-col d-flex flex-column justify-content-center">
                                <h2 className="var700 text-uppercase">signature</h2>
                                <h2 className="var700 text-uppercase text-white">premier whisky</h2>
                                <div className="east600 text-uppercase">smooth & creamy</div>
                                <p className="east500">Smoothness elevated to new heights, with a dash of fruitiness and a tinge of
                                    maltiness. A symphony of floral and vanillic notes. All coming to an epic conclusion in an
                                    exquisite and creamy blend.</p>
                                <div className="buttons mt-3">
                                    <button className="btn east600">explore signature whisky</button>
                                </div>
                            </div>

                            <div className="col-6 px-0 second-col">
                                <img src='assets/img5.png' alt="img" />
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>

            {/* ================ Banner Section 1 ===============  */}
            <Fade>
                <div id="banner-img">
                    <div className="container"></div>
                </div>
            </Fade>

            {/* ================= Content Section 4 ================  */}
            <Fade>
                <div id="content-section4">
                    <div className="container">
                        <video autoPlay muted loop className="mx-auto">
                            <source src="assets/video2.mp4" type="video/mp4" />
                        </video>
                        <div className="text-box">
                            <div className="clip-text var800 text-uppercase">Signature</div>
                            <div className="clip-text var800 text-uppercase">For Good</div>
                        </div>
                        <img src="/assets/img7.png" alt="img" className="bannerimg" />
                        <OwlCarousel className='owl-theme owl-carousel1' loop={false} margin={300} nav={true} items={1} navText={["<img src='assets/leftarrow.png' alt='arrow'>", "<img src='assets/rightarrow.png' alt='arrow'>"]}>
                            <div className="item text-center">
                                <img src="/assets/text.png" alt="text" />
                                <div className="content east500">EVERY SEPTEMBER, THE ZIRO FESTIVAL OF MUSIC TAKES PLACE IN THE
                                    BREATHTAKING
                                    ZIRO VALLEY OF
                                    ARUNACHAL PRADESH, INDIA. IT'S A ONE-OF-A-KIND FESTIVAL IN THE WORLD WHICH IS KNOWN FOR ITS
                                    ECO-FRIENDLY INFRASTRUCTURE AND PRACTICES. EXPERIENCE INDIA'S GREATEST MUSIC FESTIVAL THAT
                                    CELEBRATES MUSIC AND CULTURE IN THE LAP OF NATURE.</div>
                                <button className="btn east600">EXPLORE ZIRO FESTIVAL OF MUSIC</button>
                            </div>

                            <div className="item text-center">
                                <img src="/assets/text.png" alt="text" className="textimg" />
                                <div className="content east500">EVERY SEPTEMBER, THE ZIRO FESTIVAL OF MUSIC TAKES PLACE IN THE
                                    BREATHTAKING
                                    ZIRO VALLEY OF
                                    ARUNACHAL PRADESH, INDIA. IT'S A ONE-OF-A-KIND FESTIVAL IN THE WORLD WHICH IS KNOWN FOR ITS
                                    ECO-FRIENDLY INFRASTRUCTURE AND PRACTICES. EXPERIENCE INDIA'S GREATEST MUSIC FESTIVAL THAT
                                    CELEBRATES MUSIC AND CULTURE IN THE LAP OF NATURE.</div>
                                <button className="btn east600">EXPLORE ZIRO FESTIVAL OF MUSIC</button>
                            </div>

                            <div className="item text-center">
                                <img src="/assets/text.png" alt="text" className="textimg" />
                                <div className="content east500">EVERY SEPTEMBER, THE ZIRO FESTIVAL OF MUSIC TAKES PLACE IN THE
                                    BREATHTAKING
                                    ZIRO VALLEY OF
                                    ARUNACHAL PRADESH, INDIA. IT'S A ONE-OF-A-KIND FESTIVAL IN THE WORLD WHICH IS KNOWN FOR ITS
                                    ECO-FRIENDLY INFRASTRUCTURE AND PRACTICES. EXPERIENCE INDIA'S GREATEST MUSIC FESTIVAL THAT
                                    CELEBRATES MUSIC AND CULTURE IN THE LAP OF NATURE.</div>
                                <button className="btn east600">EXPLORE ZIRO FESTIVAL OF MUSIC</button>
                            </div>

                            <div className="item text-center">
                                <img src="/assets/text.png" alt="text" className="textimg" />
                                <div className="content east500">EVERY SEPTEMBER, THE ZIRO FESTIVAL OF MUSIC TAKES PLACE IN THE
                                    BREATHTAKING
                                    ZIRO VALLEY OF
                                    ARUNACHAL PRADESH, INDIA. IT'S A ONE-OF-A-KIND FESTIVAL IN THE WORLD WHICH IS KNOWN FOR ITS
                                    ECO-FRIENDLY INFRASTRUCTURE AND PRACTICES. EXPERIENCE INDIA'S GREATEST MUSIC FESTIVAL THAT
                                    CELEBRATES MUSIC AND CULTURE IN THE LAP OF NATURE.</div>
                                <button className="btn east600">EXPLORE ZIRO FESTIVAL OF MUSIC</button>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </Fade>

            {/* ==================== Banner Section 2 ==================  */}
            <div id="banner-section">
                <video autoPlay muted loop >
                    <source src="assets/video3.mp4" />
                </video>
                <div className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <h2 className='var800 text-uppercase orangetxt'>Save <div className='rotate var700 orangetxt'>the</div> <span className='whitetxt'>Mangroves</span></h2>
                    <img src="/assets/img9.png" alt="img" />
                    <button className="btn east700">plant a tree today</button>
                </div>
            </div>

            {/* ============ Signature Festival Section =============  */}
            <section id="festival-section">
                <div className="container-fluid">
                    <img src="/assets/img11.png" alt="img" className="bottleimg img-fluid" />
                    <img src="/assets/img12.png" alt="img" className="signimg img-fluid" />
                    <h3 className="var800 text-uppercase"><span className="orangetxt text-center">Happy</span> Vibes</h3>
                </div>
                <OwlCarousel className="owl-theme owl-carousel2" items={4} margin={25} loop={true} nav={false} dots={false} responsiveClass={true} mouseDrag={true} responsive={{
                    0: {
                        items: 1
                    },
                    575: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1440: {
                        items: 4
                    }

                }}>
                    <div className="item">
                        <img src="/assets/carousel/img1.png" alt="img" />
                    </div>
                    <div className="item">
                        <img src="/assets/carousel/img2.png" alt="img" />
                    </div>
                    <div className="item">
                        <img src="/assets/carousel/img3.png" alt="img" />
                    </div>
                    <div className="item">
                        <img src="/assets/carousel/img1.png" alt="img" />
                    </div>
                    <div className="item">
                        <img src="/assets/carousel/img2.png" alt="img" />
                    </div>
                    <div className="item">
                        <img src="/assets/carousel/img3.png" alt="img" />
                    </div>
                </OwlCarousel>

            </section>

            {/* ================ Footer Section ================  */}
            <footer></footer>
        </div>
    )
}

export default Home