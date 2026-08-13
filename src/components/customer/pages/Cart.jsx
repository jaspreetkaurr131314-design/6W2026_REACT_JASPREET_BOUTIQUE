import { toast } from "react-toastify";
import CartService from "../../../services/CartService";
import ProductService from "../../../services/ProductService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {

    const [cart, setCart] = useState([]);
    async function fetchCart() {
        try {
            let cartData = await CartService.all();
            let finalCart = [];

            for (let item of cartData) {
                let product = await ProductService.single(item.productId);
                finalCart.push({
                    ...item,
                    name: product?.name,
                    price: product?.price,
                    image: product?.image
                });
            }
            console.log("FINAL CART:", finalCart);
            setCart(finalCart);
        } catch (err) {
            console.log("Cart error:", err);
        }
    }

    // Product remove
    async function removeItem(id) {

        await CartService.deleteCat(id);
        toast.success("Product Removed")
        fetchCart();
    }
    useEffect(() => {
        fetchCart();
    }, []);


    const increaseQuantity = async (item) => {
        await CartService.update(
            {
                quantity: item.quantity + 1,
                updatedAt: Date.now(),
            },
            item.id
        );

        toast.success("Quantity Updated")
        fetchCart(); // Reload cart
    };

    const decreaseQuantity = async (item) => {
        if (item.quantity === 1) {
            await CartService.deleteCat(item.id);
        } else {
            await CartService.update(
                {
                    quantity: item.quantity - 1,
                    updatedAt: Date.now(),
                },
                item.id
            );
        }
        toast.success("Quantity Updated")


        fetchCart(); // Reload cart
    };
    const grandTotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    console.log("Grand Total =", grandTotal);

    return (
        <>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>

                <div className="site-mobile-menu-body" />
            </div>

            <div
                className="site-blocks-cover inner-page-cover overlay"
                style={{ backgroundImage:'url("/background.jpg")'  }}
                data-aos="fade"
                data-stellar-background-ratio="0.5"
            >
                <div className="container">

                    <div className="row align-items-center justify-content-center">

                        <div
                            className="col-md-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >

                            <h1 className="text-white">
                                Checkout
                            </h1>

                        </div>

                    </div>

                </div>
            </div>
            <div className="container py-5">

                <h2 className="text-center mb-5">
                    Shopping Cart
                </h2>

                <table className="table table-bordered text-center align-middle">

                    <thead className="table-Light">

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

                                        <button
                                            className="btn btn-sm btn-secondary"
                                            onClick={() => decreaseQuantity(item)}
                                        >
                                            -
                                        </button>

                                        <span className="mx-3">
                                            {item.quantity}
                                        </span>

                                        <button
                                            className="btn btn-sm btn-secondary"
                                            onClick={() => increaseQuantity(item)}
                                        >
                                            +
                                        </button>

                                    </td>

                                    <td>
                                        ₹ {item.price * item.quantity}
                                    </td>

                                    <td>

                                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                            Remove
                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

                <div className="text-end">


                    <h3>Grand Total: ₹ {grandTotal}</h3>
                    <Link
                        to="/checkout"
                        state={{ totalAmount: grandTotal }}
                        className="btn btn-success"
                    >
                        Proceed To Checkout
                    </Link>
                    {/* <Link
                        to="/checkout"
                        className="btn btn-success"
                    >
                        Proceed To Checkout
                    </Link> */}

                </div>

            </div>

        </>
    );
}