import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "../../services/AuthService"
import UserService from "../../services/UserService";

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function register(e) {

        e.preventDefault();

        try {

            let payload = {
                email: email,
                password: password
            }

            await UserService.register(payload);

            toast.success("Registration Successful!");

            navigate("/login");

        } catch (err) {

            console.log(err);

            toast.error(err.message);

        }

    }

    return (
        <>

        <div className="site-section bg-light">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="bg-white p-5 shadow">

                            <h2 className="text-center mb-4">
                                Create Account
                            </h2>

                            <form onSubmit={register}>

                                <div className="form-group mb-3">

                                    <label>Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                    />

                                </div>


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

                                    Register

                                </button>

                            </form>


                            <p className="text-center mt-4">

                                Already have an account?

                                <Link
                                    to="/login"
                                    className="ms-2"
                                >

                                    Login

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>

    );

}