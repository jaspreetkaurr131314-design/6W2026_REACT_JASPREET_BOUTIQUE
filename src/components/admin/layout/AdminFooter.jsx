import { Link } from "react-router-dom"
export default function AdminFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Apart</h3>
                <p>
                  Fashion Zone is your destination for trendy, elegant, and affordable fashion.
                  We offer a wide range of traditional and modern outfits designed with
                  premium-quality fabrics to ensure comfort, style, and confidence for every
                  occasion.
                </p>
              </div>
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Subscribe</h3>
                <form action="#" method="post" className="site-block-subscribe">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-secondary bg-transparent"
                      placeholder="Enter your email"
                      aria-label="Enter Email"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary rounded-top-right-0"
                        type="button"
                        id="button-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/category">Categories</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Membership</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Membership</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Follow Us</h3>
                  <div>
                    <Link to="#" className="pl-0 pr-3">
                      <span className="icon-facebook" />
                    </Link>
                    <Link to="#" className="pl-3 pr-3">
                      <span className="icon-twitter" />
                    </Link>
                    <Link to="#" className="pl-3 pr-3">
                      <span className="icon-instagram" />
                    </Link>
                    <Link to="#" className="pl-3 pr-3">
                      <span className="icon-linkedin" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Watch Live Streaming</h3>
                <div className="block-16">
                  <figure>
                    <img
                      src="images/img_1.jpg"
                      alt="Image placeholder"
                      className="img-fluid rounded"
                    />
                    <Link
                      to="https://vimeo.com/channels/staffpicks/93951774"
                      className="play-button popup-vimeo"
                    >
                      <span className="icon-play" />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                <Link to="https://colorlib.com" target="_blank">
                  Colorlib
                </Link>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}