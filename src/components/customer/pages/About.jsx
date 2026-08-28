import { Link } from "react-router-dom"

export default function About() {
  return (
    <>

      <>
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>{" "}
        <div
          className="site-blocks-cover inner-page-cover overlay"
          style={{ backgroundImage: 'url("/background.jpg")' }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-7 text-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <h1 className="text-white">About Us</h1>
                <p>Fashion Zone is a modern online fashion boutique offering stylish,
                  comfortable, and affordable clothing for every occasion. Our collection
                  includes traditional wear, casual wear, party wear, designer suits, and
                  fashion accessories</p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                  <h2 className="mb-5">Our Office team</h2>
                    <p>
                      Our dedicated team works together to provide customers with a smooth and
                      enjoyable shopping experience. From product management to customer support,
                      we focus on quality, creativity, and customer satisfaction.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container" data-aos="fade-up">
            <div className="row">
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                  <div className="text">
                    <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                    <span className="d-block mb-2 text-white-opacity-05">
                      Co Founder
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                      reprehenderit nemo.
                    </p>
                    <p>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-facebook" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-twitter" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-linkedin" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                  <div className="text">
                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                    <span className="d-block mb-2 text-white-opacity-05">
                      Co Founder
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                      reprehenderit nemo.
                    </p>
                    <p>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-facebook" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-twitter" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-linkedin" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">
                  <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                  <div className="text">
                    <h2 className="mb-2 font-weight-light h4">Philip Martin</h2>
                    <span className="d-block mb-2 text-white-opacity-05">
                      Co Founder
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                      reprehenderit nemo.
                    </p>
                    <p>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-facebook" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-twitter" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-linkedin" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
                  <div className="text">
                    <h2 className="mb-2 font-weight-light h4">Steven Ericson</h2>
                    <span className="d-block mb-2 text-white-opacity-05">
                      Co Founder
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                      reprehenderit nemo.
                    </p>
                    <p>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-facebook" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-twitter" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-linkedin" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                  <div className="text">
                    <h2 className="mb-2 font-weight-light h4">Nathan Dumlao</h2>
                    <span className="d-block mb-2 text-white-opacity-05">
                      Co Founder
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                      reprehenderit nemo.
                    </p>
                    <p>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-facebook" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-twitter" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-linkedin" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                  <div className="text">
                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                    <span className="d-block mb-2 text-white-opacity-05">
                      Co Founder
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                      reprehenderit nemo.
                    </p>
                    <p>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-facebook" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-twitter" />
                      </Link>
                      <Link to="#" className="text-white p-2">
                        <span className="icon-linkedin" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="site-section block-13 bg-light">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5"><h2>Loved By Our Customers</h2>

                  <p>
                    Our customers trust Fashion Zone for quality, style, comfort, and affordable
                    fashion. Your satisfaction and positive experience are our greatest reward.
                  </p></h2>
              </div>
            </div>
            <div className="nonloop-block-13 owl-carousel">
              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="text-black">
                  <h3 className="font-weight-light h5">Megan Smith</h3>
                  <p className="font-italic">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                  </p>
                </div>
              </div>
              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="text-black">
                  <h3 className="font-weight-light h5">Brooke Cagle</h3>
                  <p className="font-italic">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                  </p>
                </div>
              </div>
              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_3.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="text-black">
                  <h3 className="font-weight-light h5">Philip Martin</h3>
                  <p className="font-italic">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                  </p>
                </div>
              </div>
              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="text-black">
                  <h3 className="font-weight-light h5">Steven Ericson</h3>
                  <p className="font-italic">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                  </p>
                </div>
              </div>
              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="text-black">
                  <h3 className="font-weight-light h5">Nathan Dumlao</h3>
                  <p className="font-italic">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                  </p>
                </div>
              </div>
              <div className="text-center p-3 p-md-5 bg-white">
                <div className="mb-4">
                  <img
                    src="images/person_4.jpg"
                    alt="Image"
                    className="w-50 mx-auto img-fluid rounded-circle"
                  />
                </div>
                <div className="text-black">
                  <h3 className="font-weight-light h5">Brook Smith</h3>
                  <p className="font-italic">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="bg-primary" data-aos="fade">
          <div className="container">
            <div className="row">
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-facebook text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-twitter text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-instagram text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-linkedin text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-pinterest text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-youtube text-white" />
              </Link>
            </div>
          </div>
        </div>
      </>


    </>
  )
}