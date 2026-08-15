import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FadeLoader, PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";
import ProductService from "../../../services/ProductService";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


export default function ManageProduct() {

    let [loading, setLoading] = useState(false);

    const [product, setProduct] = useState([])

    async function fetchProduct() {
        try {
            setLoading(true)
            let res = await ProductService.all()
            setProduct(res)
        } catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchProduct();
    }, [])


    async function deleteProduct(id) {
        try {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    ProductService.deleteCat(id)
                    fetchProduct();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

        } catch (err) {
            toast.error("Error Deleting Product")
            console.log("Error: ", err)
        }
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
            </div>{" "}
            {/* .site-mobile-menu */}
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
                            <h1 className="text-white">Product</h1>
                            <p>
                                <Link to="/admin/product/add" className="btn btn-primary px-5 py-3">
                                    Add New Product
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {loading ?
                <PacmanLoader
                    color="#81C408"
                    loading={loading}
                    cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />

                : <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No.</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">stock</th>
                                        <th scope="col">brand</th>
                                        <th scope="col">discountPrice</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.map((product, index) => (
                                        <tr key={product.id}>
                                            <td>{index + 1}</td>

                                            <td>
                                                {product.image ? (
                                                    <img
                                                        src={product.image}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                        style={{ width: "80px", height: "80px" }}
                                                    />
                                                ) : (
                                                    "-"
                                                )}
                                            </td>

                                            <td>{product.name}</td>

                                            <td>{product.price}</td>

                                            <td>{product.description}</td>

                                            <td>{product.stock}</td>

                                            <td>{product.brand}</td>

                                            <td>{product.discountPrice}</td>

                                            <td>{product.status ? "Active" : "Inactive"}</td>

                                            <td>
                                                {product.createdAt
                                                    ? new Date(product.createdAt).toLocaleDateString()
                                                    : "-"}
                                            </td>

                                            <td>
                                                <Link to={`/admin/product/edit/${product.id}`}>
                                                    <button className="btn btn-md rounded-circle bg-light border">
                                                        <i className="bi bi-pencil text-danger"></i>
                                                    </button>
                                                </Link>

                                                &nbsp;

                                                <button
                                                    onClick={() => deleteProduct(product.id)}
                                                    className="btn btn-md rounded-circle bg-light border"
                                                >
                                                    <i className="bi bi-trash text-danger"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            }

        </>
    )
}