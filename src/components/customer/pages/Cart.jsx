import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Firebase ton data fetch karange
    }, []);

    return (
        <>
        
            <div className="container py-5">

                <h2 className="text-center mb-5">
                    Shopping Cart
                </h2>

                <table className="table table-bordered text-center align-middle">

                    <thead className="table-dark">

                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {cart.length === 0 ?

                            <tr>
                                <td colSpan="6">
                                    Cart is Empty
                                </td>
                            </tr>

                            :

                            cart.map((item) => (

                                <tr key={item.id}>

                                    <td>
                                        <img
                                            src={item.image}
                                            width="80"
                                            alt=""
                                        />
                                    </td>

                                    <td>{item.name}</td>

                                    <td>₹ {item.price}</td>

                                    <td>

                                        <button className="btn btn-sm btn-secondary">
                                            -
                                        </button>

                                        <span className="mx-3">
                                            {item.quantity}
                                        </span>

                                        <button className="btn btn-sm btn-secondary">
                                            +
                                        </button>

                                    </td>

                                    <td>
                                        ₹ {item.price * item.quantity}
                                    </td>

                                    <td>

                                        <button className="btn btn-danger">
                                            Remove
                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

                <div className="text-end">

                    <Link
                        to="/checkout"
                        className="btn btn-success"
                    >
                        Proceed To Checkout
                    </Link>

                </div>

            </div>

        </>
    );
}