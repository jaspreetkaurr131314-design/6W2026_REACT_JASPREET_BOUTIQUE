import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Header() {

    const [email, setEmail] = useState('')
    const nav = useNavigate()

    function getEmail() {
        const res = AuthService.getEmail()
        setEmail(res)
        console.log("Res: ", res);


    }

    async function logout() {
        await AuthService.logout()
        toast.success("Logged Out");
        nav('/')
    }


    useEffect(() => {
        getEmail()
    })
    return (
        <>
            {/* <div className="site-navbar mt-4"> */}
            <div
                className="site-navbar"
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    zIndex: "99999",
                    // backgroundColor: "white"
                }}
            >
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-8 col-md-8 col-lg-4">
                            <h1 className="mb-0">
                                <Link to="" className="text-dark h2 mb-0">
                                    <strong>
                                        Fashion-Zone<span className="text-primary"></span>
                                    </strong>
                                </Link>
                            </h1>
                        </div>
                        <div className="col-4 col-md-4 col-lg-8">
                            <nav
                                className="site-navigation text-right text-md-right"
                                role="navigation"
                            >
                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                    <Link to="#" className="site-menu-toggle js-menu-toggle text-dark">
                                        <span className="icon-menu h3" />
                                    </Link>
                                </div>
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/category">Category</Link>
                                    </li>
                                    <li>
                                        <Link to="/product">Product</Link>
                                    </li>

                                    <li>
                                        <Link to="/cart">Cart</Link>
                                    </li>


                                    {email ?
                                        <li>
                                            <Link to="/" onClick={logout}>Logout</Link>
                                        </li>
                                        :
                                        <>
                                            <li>
                                                <Link to="/login">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/register">Register</Link>
                                            </li>
                                        </>
                                    }
                                    <li>
                                        <Link to="/contact">Contact</Link>
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