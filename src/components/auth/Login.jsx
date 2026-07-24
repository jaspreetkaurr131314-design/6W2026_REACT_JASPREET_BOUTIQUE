import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e) {

        e.preventDefault();

        try {

            let payload = {
                email,
                password
            }
            let res = await UserService.login(payload);
            toast.success("Login Successful!");

            if(res.userType == "1"){
                navigate("/admin");
            }else{
                navigate("/");
            }

        } catch (err) {

            console.log(err);

            toast.error("Invalid Email or Password!");

        }

    }

    return (
        

        <div className="site-section bg-light">

            <div className="container">

                <div className="row justify-content-center">
                    
                    <div className="col-md-9">

                        <div className="bg-white p-5 shadow">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>

                            <form onSubmit={login}>

                                <div className="form-group mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />

                                </div>


                                <div className="form-group mb-4">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >

                                    Login

                                </button>

                            </form>


                            <p className="text-center mt-4">

                                Don't have an account?

                                <Link
                                    to="/register"
                                    className="ms-2"
                                >

                                    Register

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}