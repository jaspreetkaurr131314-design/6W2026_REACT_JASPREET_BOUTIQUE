import { useState } from "react"
import { Link } from 'react-router-dom'
import CartService from '../../../services/CartService'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCart() {

    const nav = useNavigate()

    const [cartName, setCartName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);

    async function addCart(e) {
        e.preventDefault()
        console.log("Button Clicked");
        // Validation
        if (!cartName.trim()) {
            toast.error("Cart Name is Required");
            return;
        }

        if (!description.trim()) {
            toast.error("Description is Required");
            return;
        }

        try {
            let payload = {
                name: cartName,
                customerId: customerId,
                productId: productId,
                quantuity:quantuity,
            
                // description: description,
                image: "",
                status: status,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            await CartService.add(payload)

            toast.success("Cart Added")
            setCartName("");
            setDescription("")
            setStatus(true);
            nav('/admin/cart')
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
                            <h1 className="text-white">Add Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12  mb-5">
                            <form action="#" className="contact-form" onSubmit={addCart}>
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
                                            onChange={(e)=>setCartName(e.target.value)}
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
                                            onChange={(e)=>setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary py-3 px-4"
                                        > Add cart</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}