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
                                <Link to="index.html" className="text-white h2 mb-0">
                                    <strong>
                                        Admin panel<span className="text-primary">.</span>
                                    </strong>
                                </Link>
                            </h1>
                        </div>
                        <div className="col-4 col-md-4 col-lg-8">
                            <nav
                                className="navbar navbar-expand-lg navbar-dark"
                                style={{
                                    backgroundColor: "#000",
                                    minHeight: "70px",
                                    position: "relative",
                                    zIndex: 1000
                                }}
                            >
                                <div className="container-fluid">

                                    <Link
                                        className="navbar-brand text-white fw-bold"
                                        to="/admin"
                                    >
                                        Fashion Zone
                                    </Link>

                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#adminNavbar"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div
                                        className="collapse navbar-collapse"
                                        id="adminNavbar"
                                    >

                                        <ul className="navbar-nav ms-auto">

                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link text-white"
                                                    to="/admin"
                                                >
                                                    Dashboard
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link text-white"
                                                    to="/admin/categories"
                                                >
                                                    Categories
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link text-white"
                                                    to="/admin/product"
                                                >
                                                    Products
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link text-white"
                                                    to="/admin/orders"
                                                >
                                                    Orders
                                                </Link>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}