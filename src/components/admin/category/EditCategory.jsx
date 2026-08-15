import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import CategoryService from '../../../services/CategoryService'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCategory() {

    const nav = useNavigate()
    const params = useParams()


    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);

    async function editCategory(e) {
        e.preventDefault()
        // Validation
        if (!categoryName.trim()) {
            toast.error("Category Name is Required");
            return;
        }

        if (!description.trim()) {
            toast.error("Description is Required");
            return;
        }

        try {
            let payload = {
                name: categoryName,
                description: description,
                image: "",
                status: status,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            await CategoryService.update(payload, params.id)

            toast.success("Category Updated")
            setCategoryName("");
            setDescription("")
            setStatus(true);
            nav('/admin/categories')
        } catch (err) {

            toast.error("Error updating category")
            console.log(" Error: ", err)
        }

    }


    async function getCategoryDetails() {
        const res = await CategoryService.single(params.id)
        if (res) {
            setCategoryName(res.name)
            setDescription(res.description)
        }

    }

    useEffect(() => {
        getCategoryDetails()
    }, [])


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
                            <h1 className="text-white">Add Category</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12  mb-5">
                            <form action="#" className="contact-form" onSubmit={editCategory}>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="fullname">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            className="form-control"
                                            value={categoryName}
                                            placeholder="Category Name"
                                            onChange={(e) => setCategoryName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="desc">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            id="desc"
                                            className="form-control"
                                            value={description}
                                            placeholder="Description"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary py-3 px-4"
                                    > Update category</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}