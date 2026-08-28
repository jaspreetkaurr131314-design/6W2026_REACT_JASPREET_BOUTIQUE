
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FadeLoader, PacmanLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig";
import Swal from "sweetalert2";
import CategoryService from "../../../services/CategoryService";
import ProductService from "../../../services/ProductService";
import CartService from "../../../services/CartService";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function BrowseProduct() {
    let [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])
    async function fetchProducts() {
        try {
            setLoading(true)
            let res = await ProductService.all()
            setProducts(res)
        } catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    async function addToCart(product) {
        // Get all cart items
        const cartItems = await CartService.all();

        // Check if product already exists in cart
        const existingItem = cartItems.find(
            (item) => item.productId === product.id
        );

        if (existingItem) {
            const updatedData = {
                quantity: existingItem.quantity + 1,
                updatedAt: Date.now(),
            };

            await CartService.update(updatedData, existingItem.id);
            toast.success("Cart quantity updated");
        } else {
            // Add new cart item
            const payload = {
                customerId: "",
                productId: product.id,
                quantity: 1,
                selectedSize: "",
                selectedColor: "",
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            await CartService.add(payload);
            toast.success("Added To Cart");
        }
    }
    const navigate = useNavigate();

    function addToCart(product) {

        if (!auth.currentUser) {

            toast.warning("Please Register/Login first!");

            navigate("/login");

            return;

        }

        // hun user login aa
        console.log("Product Added To Cart", product);

        toast.success("Product Added To Cart!");

    }

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
                style={{ backgroundImage: 'url("/background.jpg")' }}
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
                                Product
                            </h1>

                        </div>

                    </div>

                </div>
            </div>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div
                            className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                            data-aos="fade-up"
                        >
                            <h2 className="mb-5">All Products</h2>

                                <p>
                                    Explore our latest collection of stylish and high-quality fashion products.
                                    From traditional suits and casual wear to party dresses and accessories,
                                    Fashion Zone has something for every occasion.
                                </p>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((product, index) => (
                            <div
                                className="col-md-6 col-lg-4 mb-4 mb-lg-0"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <Link to={`/product/${product.id}`}>

                                    <img src={product.image} alt="Image" className="img-fluid" />
                                </Link>
                                <div className="p-4 bg-white">
                                    <span className="d-block text-secondary small text-uppercase">
                                        {product.name}
                                    </span>
                                    <h2 className="h5 text-black mb-3">
                                        <Link className="text-decoration-line-through" to={`/product/${product.id}`}>{product.price}</Link> &nbsp;
                                        <Link to="single.html">{product.discountPrice}</Link>
                                    </h2>
                                    <h2 className="h5 text-black mb-3">
                                        <Link to={`/product/${product.id}`}>{product.description}</Link>
                                    </h2>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

