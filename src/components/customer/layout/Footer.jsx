import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5">
                                <h3 className="footer-heading mb-4">About Fashion-Zone</h3>

                                <p>
                                    Fashion Zone is your destination for trendy, elegant, and affordable fashion.
                                    We offer a wide range of traditional and modern outfits designed with
                                    premium-quality fabrics to ensure comfort, style, and confidence for every
                                    occasion.
                                </p>
                            </div>
                            <div className="mb-5">
                                <h3>Subscribe</h3>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
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
                        
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p className="text-center mt-4">
                                Copyright © 2026 All Rights Reserved |
                                Designed & Developed by Jaspreet Kaur
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}