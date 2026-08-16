
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";
import ProductService from "../../../services/ProductService";
import OrderService from "../../../services/OrderService";

export default function Dashboard() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    async function fetchData() {
        try {
            const categoryData = await CategoryService.all();
            const productData = await ProductService.all();
            const orderData = await OrderService.all();

            setCategories(categoryData);
            setProducts(productData);
            setOrders(orderData);

        } catch (err) {
            console.log("Dashboard Error:", err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const totalSales = orders.reduce(
        (total, order) =>
            total + Number(order.totalAmount || 0),
        0
    );

    const pendingOrders = orders.filter(
        order => order.orderStatus === "Pending"
    ).length;

    const deliveredOrders = orders.filter(
        order => order.orderStatus === "Delivered"
    ).length;

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
    style={{ backgroundImage: 'url("/background.jpg")'}}
    data-aos="fade"
    data-stellar-background-ratio="0.5"
  >
    
  </div>

        <div className="container-fluid py-4">

            {/* Heading */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="mb-1">
                         Dashboard
                    </h2>

                    <p className="text-muted mb-0">
                        Welcome to your boutique administration panel
                    </p>
                </div>

            </div>


            {/* Statistics Cards */}

            <div className="row g-4 mb-4">

                {/* Categories */}

                <div className="col-md-6 col-xl-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Total Categories
                                    </p>

                                    <h2 className="mb-0">
                                        {categories.length}
                                    </h2>

                                </div>

                                <div className="fs-1">
                                    📂
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Products */}

                <div className="col-md-6 col-xl-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Total Products
                                    </p>

                                    <h2 className="mb-0">
                                        {products.length}
                                    </h2>

                                </div>

                                <div className="fs-1">
                                    👗
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Orders */}

                <div className="col-md-6 col-xl-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Total Orders
                                    </p>

                                    <h2 className="mb-0">
                                        {orders.length}
                                    </h2>

                                </div>

                                <div className="fs-1">
                                    🛒
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Sales */}

                <div className="col-md-6 col-xl-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Total Sales
                                    </p>

                                    <h2 className="mb-0">
                                        ₹{totalSales}
                                    </h2>

                                </div>

                                <div className="fs-1">
                                    💰
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Quick Actions */}

            <div className="row g-4 mb-4">

                <div className="col-lg-8">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <h4 className="mb-4">
                                Quick Actions
                            </h4>

                            <div className="row g-3">

                                <div className="col-md-4">

                                    <Link
                                        to="/admin/category/add"
                                        className="btn btn-primary w-100 py-3"
                                    >
                                        + Add Category
                                    </Link>

                                </div>


                                <div className="col-md-4">

                                    <Link
                                        to="/admin/product/add"
                                        className="btn btn-success w-100 py-3"
                                    >
                                        + Add Product
                                    </Link>

                                </div>


                                <div className="col-md-4">

                                    <Link
                                        to="/admin/orders"
                                        className="btn btn-dark w-100 py-3"
                                    >
                                        View Orders
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Order Summary */}

                <div className="col-lg-4">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <h4 className="mb-4">
                                Order Summary
                            </h4>

                            <div className="d-flex justify-content-between mb-3">

                                <span>
                                    Pending Orders
                                </span>

                                <strong>
                                    {pendingOrders}
                                </strong>

                            </div>


                            <div className="d-flex justify-content-between">

                                <span>
                                    Delivered Orders
                                </span>

                                <strong>
                                    {deliveredOrders}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Recent Orders */}

            <div className="card shadow-sm border-0">

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h4 className="mb-0">
                            Recent Orders
                        </h4>

                        <Link
                            to="/admin/orders"
                            className="btn btn-sm btn-outline-primary"
                        >
                            View All
                        </Link>

                    </div>


                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>#</th>

                                    <th>Customer</th>

                                    <th>Phone</th>

                                    <th>Amount</th>

                                    <th>Payment</th>

                                    <th>Status</th>

                                </tr>

                            </thead>


                            <tbody>

                                {orders.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="text-center"
                                        >
                                            No Orders Found
                                        </td>

                                    </tr>

                                ) : (

                                    orders.slice(0, 5).map((order, index) => (

                                        <tr key={order.id || index}>

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
                                                ₹{order.totalAmount}
                                            </td>

                                            <td>
                                                {order.paymentMethod}
                                            </td>

                                            <td>

                                                <span
                                                    className={
                                                        order.orderStatus === "Delivered"
                                                            ? "badge bg-success"
                                                            : order.orderStatus === "Cancelled"
                                                                ? "badge bg-danger"
                                                                : "badge bg-warning text-dark"
                                                    }
                                                >
                                                    {order.orderStatus}
                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
</>
    );
}