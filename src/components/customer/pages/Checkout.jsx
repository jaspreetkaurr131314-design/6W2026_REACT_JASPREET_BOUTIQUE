import { useState } from "react";
import OrderService from "../../../services/OrderService";
import { useLocation } from "react-router-dom";
export default function Checkout() {

    const [name, setName] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [nearPlace, setNearPlace] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [phone, setPhone] = useState("");
    const location = useLocation();

    const totalAmount = location.state?.totalAmount || 0;
    console.log("TOTAL AMOUNT =", totalAmount);
    async function placeOrder(e) {

        e.preventDefault();

        let orderData = {

            customerId: "",
            name: name,
            phone: phone,
            houseNo: houseNo,
            street: street,
            nearPlace: nearPlace,
            city: city,
            state: state,
            pincode: pincode,

            totalAmount: totalAmount,

            paymentMethod: paymentMethod

        };

        try {

            if (paymentMethod === "Online") {

                openRazorpay(orderData);

            } else {

                await OrderService.add(orderData);

                alert("Order Placed Successfully 🎉");

            }

        } catch (err) {

            console.log(err);

            alert("Order Failed");

        }

    }

    async function openRazorpay(orderData) {
        const options = {

            key: "rzp_test_THdvTEQPCamtpB",

            amount: totalAmount * 100,// ₹100 = 10000 paise

            currency: "INR",

            name: "Jaspreet Boutique",

            description: "Order Payment",

            handler: async function (response) {



                await OrderService.add({

                    ...orderData,

                    paymentMethod: "Razorpay",

                    paymentStatus: "Paid",

                    paymentId: response.razorpay_payment_id

                });

                alert("Payment Successful 🎉");

            },
            prefill: {

                name: name,

                contact: phone

            }

        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();

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

                            <h1 className="text-white">
                                Checkout
                            </h1>

                        </div>

                    </div>

                </div>
            </div>


            <div className="site-section border-bottom">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12 mb-5">

                            <form
                                action="#"
                                className="contact-form"
                                onSubmit={placeOrder}
                            >

                                {/* Customer Name */}

                                <div className="row form-group">

                                    <div className="col-md-6 mb-3 mb-md-0">

                                        <label className="font-weight-bold">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            placeholder="Enter Your Name"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            required
                                        />

                                    </div>


                                    {/* Payment Method */}

                                    <div className="col-md-6">

                                        <label className="font-weight-bold">
                                            Payment Method
                                        </label>

                                        <select
                                            className="form-control"
                                            value={paymentMethod}
                                            onChange={(e) =>
                                                setPaymentMethod(e.target.value)
                                            }
                                            required
                                        >

                                            <option value="">
                                                Select Payment Method
                                            </option>

                                            <option value="COD">
                                                Cash On Delivery
                                            </option>

                                            <option value="Online">
                                                Online Payment
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                {/* House No and Street */}

                                <div className="row form-group">

                                    <div className="col-md-6">

                                        <label className="font-weight-bold">
                                            House No.
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter House No."
                                            value={houseNo}
                                            onChange={(e) =>
                                                setHouseNo(e.target.value)
                                            }
                                            required
                                        />

                                    </div>


                                    <div className="col-md-6">

                                        <label className="font-weight-bold">
                                            Street
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Street"
                                            value={street}
                                            onChange={(e) =>
                                                setStreet(e.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                </div>


                                {/* Near Place */}

                                <div className="row form-group">

                                    <div className="col-md-6">

                                        <label className="font-weight-bold">
                                            Near Place
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Nearby Place / Landmark"
                                            value={nearPlace}
                                            onChange={(e) =>
                                                setNearPlace(e.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                </div>
                                <div className="col-md-6">

                                    <label className="font-weight-bold">
                                        Phone No.
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />

                                </div>


                                {/* City and State */}

                                <div className="row form-group">

                                    <div className="col-md-6">

                                        <label className="font-weight-bold">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter City"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            required
                                        />

                                    </div>


                                    <div className="col-md-6">

                                        <label className="font-weight-bold">
                                            State
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter State"
                                            value={state}
                                            onChange={(e) =>
                                                setState(e.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                </div>


                                {/* Pincode */}

                                <div className="row form-group">

                                    <div className="col-md-6">

                                        <label className="font-weight-bold">
                                            Pincode
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Pincode"
                                            value={pincode}
                                            onChange={(e) =>
                                                setPincode(e.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                </div>


                                {/* Place Order */}
                                <div className="container py-5">

                                    <h3 className="mb-4">
                                        Total Amount: ₹ {totalAmount}
                                    </h3>

                                    {/* baki form */}

                                    <div className="d-flex justify-content-center">

                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                        >

                                            Place Order

                                        </button>


                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}