import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FadeLoader, PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";
import CategoryService from "../../../services/CategoryService";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


export default function ManageCategory() {

    let [loading, setLoading] = useState(false);

    const [categories, setCategories] = useState([])

    async function fetchCategories() {
        try {
            setLoading(true)
            let res = await CategoryService.all()
            setCategories(res)
        } catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchCategories();
    }, [])


    async function deleteCategory(id) {
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
                    CategoryService.deleteCat(id)
                    fetchCategories();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

        } catch (err) {
            toast.error("Error Deleting Category")
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
                            <h1 className="text-white">Categories</h1>
                            <p>
                                <Link to="/admin/category/add" className="btn btn-primary px-5 py-3">
                                    Add New Category
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
                                        <th scope="col">Description</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category, index) => (
                                        <tr>
                                            <td>
                                                <p className="mb-0 mt-4">{index + 1}</p>
                                            </td>
                                            <td>
                                                <img className="img-fluid rounded-circle" style={{ width: "80px", height: "80px" }} src={category.image} alt="" />
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{category.name}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{category.description}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{category.status ? "Active" : "Inactive"}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{new Date(category.createdAt).toLocaleDateString()}</p>
                                            </td>
                                            <td>
                                                <Link to={`/admin/category/edit/${category.id}`}>
                                                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                                                        <i className="bi bi-pencil text-danger" />
                                                    </button>
                                                </Link>
                                                &nbsp;
                                                <button onClick={() => { deleteCategory(category.id) }} className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="bi bi-trash text-danger" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))

                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            }

        </>
    )
}