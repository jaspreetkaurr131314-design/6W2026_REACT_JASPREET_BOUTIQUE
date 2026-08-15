import { useState } from "react"
import { Link } from 'react-router-dom'
import CategoryService from '../../../services/CategoryService'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CloudinaryService from '../../../services/CloudinaryService'

export default function AddCategory() {

    const nav = useNavigate()

    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);
    const [image, setImage] = useState('');

    async function addCategory(e) {
        e.preventDefault()
        console.log("Button Clicked");
        // Validation
        if (!categoryName.trim()) {
            toast.error("Category Name is Required");
            return;
        }

        if (!description.trim()) {
            toast.error("Description is Required");
            return;
        }

        let imageUrl = ""
        if (image) {
            imageUrl = await CloudinaryService.upload(image)
        }

        try {
            let payload = {
                name: categoryName,
                description: description,
                image: imageUrl,
                status: status,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            await CategoryService.add(payload)

            toast.success("Category Added")
            setCategoryName("");
            setDescription("")
            setStatus(true);
            nav('/admin/categories')
        } catch (err) {

            toast.error("Error adding category")
            console.log(" Error: ", err)
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
            <div
                className="site-blocks-cover inner-page-cover overlay"
                style={{ backgroundImage: 'url("/background.jpg")' }}
                data-aos="fade"
                data-stellar-background-ratio="0.5"
            >
            </div>
            <div className="site-section border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12  mb-5">
                            <form action="#" className="contact-form" onSubmit={addCategory}>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="fullname">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            className="form-control"
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
                                            placeholder="Description"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div> <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="desc">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            id="desc"
                                            className="form-control"
                                            placeholder="Image"
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary py-3 px-4"
                                    > Add category</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}