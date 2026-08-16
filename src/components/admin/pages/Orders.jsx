import { useEffect, useState } from "react";
import OrderService from "../../../services/OrderService";
import { toast } from "react-toastify";
export default function Orders() {

    const [orders, setOrders] = useState([]);

    async function fetchOrders() {

        try {

            let res = await OrderService.all();

            console.log(res);

            setOrders(res);

        } catch (err) {

            console.log(err);

        }

    }


    useEffect(() => {

        fetchOrders();

    }, []);


    async function updateStatus(order, status) {

        try {

            await OrderService.update(

                {
                    orderStatus: status,
                    paymentStatus: order.paymentStatus
                },

                order.id

            );


            alert("Order Status Updated");

            fetchOrders();

        } catch (err) {

            console.log(err);

        }

    }



    async function deleteOrder(id) {
        console.log("DELETE ID:", id);
        // if (!id) {
        //     toast.error("Order ID missing!");
        //     return;
        // }

        try {

            await OrderService.deleteOrder(id);
            console.log("DELETE SUCCESS");

            toast.success("Order Deleted Successfully!");
            fetchOrders();

        } catch (err) {

            console.log("Delete Error:", err);

            toast.error(err.message);

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
                style={{
                    backgroundImage: 'url("/background.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    minHeight: "100vh",
                    padding: "80px 30px"
                }}
            >

                <div className="container-fluid">

                    <h2 className="mb-4 text-white">
                        Customer Orders
                    </h2>

                    <div className="table-responsive">

                        {/* ETHE TUSI APNI CURRENT TABLE */}

                    </div>

                </div>

            </div>
            <div className="container-fluid py-5">

                <h2 className="mb-4">
                    Customer Orders
                </h2>


                <div className="table-responsive">

                   <table className="table table-bordered table-hover bg-white">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Customer</th>

                                <th>Phone</th>

                                <th>Address</th>

                                <th>Payment</th>

                                <th>Order Status</th>

                                <th>Action</th>

                            </tr>

                        </thead>


                        <tbody>

                            {orders.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center"
                                    >

                                        No Orders Found

                                    </td>

                                </tr>

                            ) : (

                                orders.map((order, index) => (

                                    <tr key={order.firebaseId}>

                                        <td>
                                            {index + 1}
                                        </td>


                                        <td>

                                            {order.name}

                                        </td>


                                        <td>

                                            {order.phone}

                                        </td>


                                        <td>

                                            {order.houseNo},

                                            {order.street},

                                            {order.nearPlace},

                                            {order.city},

                                            {order.state} -

                                            {order.pincode}

                                        </td>


                                        <td>

                                            {order.paymentMethod}

                                        </td>


                                        <td>

                                            <select

                                                className="form-control"

                                                value={order.orderStatus}

                                                onChange={(e) =>

                                                    updateStatus(

                                                        order,

                                                        e.target.value

                                                    )

                                                }

                                            >

                                                <option value="Pending">
                                                    Pending
                                                </option>

                                                <option value="Confirmed">
                                                    Confirmed
                                                </option>

                                                <option value="Shipped">
                                                    Shipped
                                                </option>

                                                <option value="Delivered">
                                                    Delivered
                                                </option>

                                                <option value="Cancelled">
                                                    Cancelled
                                                </option>

                                            </select>

                                        </td>


                                        <td>

                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteOrder(order.firebaseId)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}