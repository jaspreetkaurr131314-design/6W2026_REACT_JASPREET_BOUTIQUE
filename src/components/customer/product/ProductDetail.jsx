import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import CartService from "../../../services/CartService";
import { toast } from "react-toastify";
export default function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    async function fetchProduct() {

        try {

            let res = await ProductService.single(id);

            console.log(res);

            setProduct(res);

        } catch (err) {

            console.log(err);

        }

    }

    useEffect(() => {

        fetchProduct();

    }, [id]);


    if (!product) {

        return (

            <div className="container py-5 text-center">

                <h3>
                    Loading Product...
                </h3>

            </div>

        );

    }
    async function addToCart() {

        try {

            let data = {

                productId: product.id,

                customerId: "guest",

                quantity: 1,

                selectedSize: "",

                selectedColor: "",

                createdAt: new Date(),

                updatedAt: new Date()

            };

            await CartService.add(data);

            toast.success("Product Added To Cart!");

        } catch (err) {

            console.log(err);

            toast.error("Failed To Add Product!");

        }

    }


    return (

        <div className="site-section bg-light">

            <div className="container">

                <div className="row align-items-center">

                    {/* Product Image */}

                    <div className="col-md-6">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid"
                        />

                    </div>


                    {/* Product Details */}

                    <div className="col-md-6">

                        <h1 className="mb-3">

                            {product.name}

                        </h1>


                        <p className="text-muted">

                            {product.description}

                        </p>


                        <h3 className="text-success">

                            ₹ {product.discountPrice}

                        </h3>


                        <p className="text-decoration-line-through">

                            ₹ {product.price}

                        </p>


                        <p>

                            <strong>
                                Available Stock:
                            </strong>

                            {product.stock}

                        </p>

                        <button
                            className="btn btn-primary px-4 py-2"
                            onClick={addToCart}
                        >
                            Add To Cart
                        </button>


                    </div>

                </div>

            </div>

        </div>

    );

}