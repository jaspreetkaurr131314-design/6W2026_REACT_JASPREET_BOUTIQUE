import { Link } from "react-router-dom";

export default function AdminHeader() {
    return (
        <div className="site-navbar mt-4">
            <div className="container py-1">

                <div className="row align-items-center">

                    {/* Logo */}
                    <div className="col-lg-4">
                        <h1 className="mb-0">
                            <Link
                                to="/admin"
                                className="text-white h2 mb-0"
                            >
                                <strong>Fashion-Zone</strong>
                            </Link>
                        </h1>
                    </div>

                    {/* Menu */}
                    <div className="col-lg-8">

                        <nav
                            className="site-navigation text-right"
                            role="navigation"
                        >

                            <ul className="site-menu js-clone-nav d-none d-lg-block">

                                <li>
                                    <Link to="/admin">
                                        Dashboard
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin/categories">
                                        Categories
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin/product">
                                        Products
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admin/orders">
                                        Orders
                                    </Link>
                                </li>

                            </ul>

                        </nav>

                    </div>

                </div>

            </div>
        </div>
    );
}