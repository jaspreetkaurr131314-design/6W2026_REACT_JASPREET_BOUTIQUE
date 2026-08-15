import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import CloudinaryService from "../../../services/CloudinaryService";
import CategoryService from "../../../services/CategoryService";

export default function AddProduct() {

    const nav = useNavigate()

    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);
    const [price, setPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [image, setImage] = useState(0);
    const [stock, setStock] = useState(0);


     let [loading, setLoading] = useState(false);
    
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
    

    async function addProduct(e) {
        e.preventDefault()

        let imageUrl = ""
        if (image) {
            imageUrl = await CloudinaryService.upload(image)
        }

        try {
            let payload = {
                name: productName,
                description: description,
                price: price,
                discountPrice: discountPrice,
                stock: stock,
                image: imageUrl,
                status: status,
                createdAt: Date.now(),
            };

            await ProductService.add(payload)

            toast.success("Product Added")
            nav('/admin/product')
        } catch (err) {
            toast.error("Error adding product")
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
                            <h1 className="text-white">Add product</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12  mb-5">
                            <form action="#" className="contact-form" onSubmit={addProduct}>
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="fullname">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            className="form-control"
                                            value={productName}
                                            placeholder="Enter Product Name"
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="fullname">
                                            Category
                                        </label>
                                        <select
                                            type="text"
                                            id="categoryId"
                                            className="form-control"
                                            value={categoryId}
                                            placeholder="Enter Product Name"
                                            onChange={(e) => setCategoryId(e.target.value)}
                                        >

                                            <option value="" selected disabled>Select Category</option>
                                           { categories.map((c)=>(
                                            <option value={c.id}>{c.name}</option>
                                            ))}

                                        </select>


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
                                            value={description}
                                            className="form-control"
                                            placeholder="Description"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label className="font-weight-bold">
                                            Price
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Product Price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold">
                                            Discount Price
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Product Price"
                                            value={discountPrice}
                                            onChange={(e) => setDiscountPrice(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label className="font-weight-bold">
                                            Stock
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Stock"
                                            value={stock}
                                            onChange={(e) => setStock(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold">
                                            Image
                                        </label>

                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder="Enter Images"
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary py-3 px-4"
                                    > Add Product</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}