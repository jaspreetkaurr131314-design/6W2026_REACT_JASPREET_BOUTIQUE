import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ProductService from '../../../services/ProductService'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {

    const nav = useNavigate()
    const params = useParams()


    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [discountprice, setDiscountPrice] = useState("");
    const[brand,setBrand]=useState("");
    async function editProduct(e) {
        e.preventDefault()
        // Validation
        if (!productName.trim()) {
            toast.error("Product Name is Required");
            return;
        }

        if (!description.trim()) {
            toast.error("Description is Required");
            return;
        }

        try {
            let payload = {
                name: productName,
                description: description,
                price: price,
                discountPrice: "",
                brand: "",
                size: [],
                color: [],
                stock: "",
                image: "",
                status: status,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            await ProductService.update(payload, params.id)

            toast.success("Product Updated")
            // setProductName("");
            // setDescription("")
            // setStatus(true);
            nav('/admin/product')
        } catch (err) {

            toast.error("Error updating product")
            console.log(" Error: ", err)
        }

    }


    async function getProductDetails() {
        const res = await ProductService.single(params.id);

        if (res) {
            setProductName(res.name || "");
            // setDescription(res.description || "");
            setPrice(res.price || "");
            setDiscountPrice(res.discountPrice || "");
            setBrand(res.brand || "");
            setStock(res.stock || "");
            setStatus(res.status);
        }
    }

    useEffect(() => {
        getProductDetails()
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
                style={{ backgroundImage: 'url("images/hero_bg_1.jpg")' }}
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
                            <h1 className="text-white">Add Product</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12  mb-5">
                            <form action="#" className="contact-form" onSubmit={editProduct}>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="fullname">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            className="form-control"
                                            value={productName}
                                            placeholder="Product Name"
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="font-weight-bold">Price</label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
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
                                    > Update Product</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}