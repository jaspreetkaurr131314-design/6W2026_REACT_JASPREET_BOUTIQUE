import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminHeader() {

    const [email, setEmail] = useState("");
    const nav = useNavigate();

    function getEmail() {
        const res = AuthService.getEmail();
        setEmail(res);
        console.log("Res: ", res);
    }

    async function logout() {
        await AuthService.logout();
        toast.success("Logged Out");
        nav("/");
    }

    useEffect(() => {
        getEmail();
    }, []);

    return (
        <>
            <div className="site-navbar mt-4">

                <div className="container py-1">

                    <div className="row align-items-center">

                        {/* Logo */}

                        <div className="col-8 col-md-8 col-lg-4">

                            <h1 className="mb-0">

                                <Link
                                    to="/admin"
                                    className="text-dark h2 mb-0"
                                >

                                    <strong>
                                        Admin panel.
                                    </strong>

                                </Link>

                            </h1>

                        </div>


                        {/* Admin Navigation */}

                        <div className="col-4 col-md-4 col-lg-8">

                            <nav
                                className="site-navigation text-right text-md-right"
                                role="navigation"
                            >

                                {/* Mobile Menu */}

                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">

                                    <Link
                                        to="#"
                                        className="site-menu-toggle js-menu-toggle text-white"
                                    >

                                        <span className="icon-menu h3" />

                                    </Link>

                                </div>


                                <ul className="site-menu js-clone-nav d-none d-lg-block">

                                    {/* Dashboard */}

                                    <li className="active">

                                        <Link to="/admin">
                                            Dashboard
                                        </Link>

                                    </li>


                                    {/* Categories */}

                                    <li>

                                        <Link to="/admin/categories">
                                            Categories
                                        </Link>

                                    </li>


                                    {/* Products */}

                                    <li>

                                        <Link to="/admin/product">
                                            Products
                                        </Link>

                                    </li>


                                    {/* Orders */}

                                    <li>

                                        <Link to="/admin/orders">
                                            Orders
                                        </Link>

                                    </li>


                                    {/* Logout */}

                                    {email && (

                                        <li>

                                            <Link
                                                to="/"
                                                onClick={logout}
                                            >
                                                Logout
                                            </Link>

                                        </li>

                                    )}

                                </ul>

                            </nav>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}