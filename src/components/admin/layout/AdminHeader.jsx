import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { toast } from "react-toastify";

export default function AdminHeader() {

    const navigate = useNavigate();

    async function logout() {
        await AuthService.logout();
        toast.success("Logged Out");
        navigate("/login");
    }

    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: "#000",
                padding: "15px 0",
                margin: 0
            }}
        >

            <div className="container-fluid px-4">

                {/* Logo */}
                <Link
                    to="/admin"
                    className="navbar-brand text-white fw-bold"
                >
                    Fashion Zone
                </Link>


                {/* Mobile Button */}
                <button
                    className="navbar-toggler bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#adminNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Menu */}
                <div
                    className="collapse navbar-collapse"
                    id="adminNavbar"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                to="/admin"
                                className="nav-link text-white px-3"
                            >
                                Dashboard
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                to="/admin/categories"
                                className="nav-link text-white px-3"
                            >
                                Categories
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                to="/admin/product"
                                className="nav-link text-white px-3"
                            >
                                Products
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                to="/admin/orders"
                                className="nav-link text-white px-3"
                            >
                                Orders
                            </Link>
                        </li>


                        <li className="nav-item">
                            <button
                                onClick={logout}
                                className="btn btn-link nav-link text-white px-3"
                            >
                                Logout
                            </button>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}