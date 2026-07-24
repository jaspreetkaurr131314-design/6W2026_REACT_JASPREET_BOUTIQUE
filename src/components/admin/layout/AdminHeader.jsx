import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { toast } from "react-toastify";

export default function AdminHeader() {
    const nav = useNavigate()
    async function logout() {
        await AuthService.logout()
        toast.success("Logged Out");
        nav('/')
    }

    return (
        <>
            <div className="site-navbar mt-4">
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-8 col-md-8 col-lg-4">
                            <h1 className="mb-0">
                                <a href="index.html" className="text-white h2 mb-0">
                                    <strong>
                                        Admin panel<span className="text-primary">.</span>
                                    </strong>
                                </a>
                            </h1>
                        </div>
                        <div className="col-4 col-md-4 col-lg-8">
                            <nav
                                className="site-navigation text-right text-md-right"
                                role="navigation"
                            >
                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                    <a href="#" className="site-menu-toggle js-menu-toggle text-white">
                                        <span className="icon-menu h3" />
                                    </a>
                                </div>
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <Link to="/admin">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/categories">Categories</Link>
                                    </li>

                                    <li>
                                        <Link to="/admin/product">Product</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/orders">Order</Link>
                                    </li>

                                    <li>
                                        <Link to="" onClick={logout}>Logout</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}