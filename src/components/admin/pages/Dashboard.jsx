// import { Link } from "react-router-dom"

// export default function Dashboard(){
//     return(
//         <>
//         <>
//   <div className="site-mobile-menu">
//     <div className="site-mobile-menu-header">
//       <div className="site-mobile-menu-close mt-3">
//         <span className="icon-close2 js-menu-toggle" />
//       </div>
//     </div>
//     <div className="site-mobile-menu-body" />
//   </div>{" "}
//   {/* .site-mobile-menu */}
//   <div
//     className="site-blocks-cover overlay"
//     style={{ backgroundImage: 'url("/background.jpg")' }}
//     data-aos="fade"
//     data-stellar-background-ratio="0.5"
//   >
//     <div className="container">
//       <div className="row align-items-center justify-content-center">
//         <div
//           className="col-md-8 text-center"
//           data-aos="fade-up"
//           data-aos-delay={400}
//         >
//           <h1 className="mb-4">Excellent Space For Your Next Home</h1>
//           <p className="mb-5">
//             1105 Madison Plaza Suite 120 Chesapeake, CA, California
//           </p>
//           <p>
//             <Link to="#" className="btn btn-primary px-5 py-3">
//               Take a Tour
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="container">
//     <div className="featured-property-half d-flex">
//       <div
//         className="image"
//         style={{ backgroundImage: 'url("images/hero_bg_1.jpg")' }}
//       />
//       <div className="text">
//         <h2>Property Information</h2>
//         <p className="mb-5">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quae
//           obcaecati doloribus distinctio, aliquam vero? Molestias, amet,
//           eveniet.
//         </p>
//         <ul className="property-list-details mb-5">
//           <li className="text-black">
//             Property Name:{" "}
//             <strong className="text-black">Marga Luxury Suite</strong>
//           </li>
//           <li>
//             Room: <strong>2</strong>
//           </li>
//           <li>
//             Total Area: <strong>482 Square Feets</strong>
//           </li>
//           <li>
//             Category: <strong>Modern House</strong>
//           </li>
//           <li>
//             Lunch Date: Jan 20, 2019
//             <strong />
//           </li>
//         </ul>
//         <p>
//           <Link to="#" className="btn btn-primary px-4 py-3">
//             Get Details
//           </Link>
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="site-section">
//     <div className="container">
//       <div className="row">
//         <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
//           <h2 className="mb-5">Browse Apartments</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
//             fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
//             ab quod?
//           </p>
//         </div>
//       </div>
//       <div className="row">
//         <div
//           className="col-md-6 col-lg-3"
//           data-aos="fade-up"
//           data-aos-delay={100}
//         >
//           <Link to="#" className="unit-9">
//             <div
//               className="image"
//               style={{ backgroundImage: 'url("images/img_1.jpg")' }}
//             />
//             <div className="unit-9-content">
//               <h2>Nashville</h2>
//               <span>$130/night</span>
//               {/* <span>with Wendy Matos</span> */}
//             </div>
//           </Link>
//         </div>
//         <div
//           className="col-md-6 col-lg-3"
//           data-aos="fade-up"
//           data-aos-delay={200}
//         >
//           <Link to="#" className="unit-9">
//             <div
//               className="image"
//               style={{ backgroundImage: 'url("images/img_2.jpg")' }}
//             />
//             <div className="unit-9-content">
//               <h2>Baltimore</h2>
//               <span>$230/night</span>
//             </div>
//           </Link>
//         </div>
//         <div
//           className="col-md-6 col-lg-3"
//           data-aos="fade-up"
//           data-aos-delay={300}
//         >
//           <Link to="#" className="unit-9">
//             <div
//               className="image"
//               style={{ backgroundImage: 'url("images/img_3.jpg")' }}
//             />
//             <div className="unit-9-content">
//               <h2>Austin</h2>
//               <span>$130/night</span>
//             </div>
//           </Link>
//         </div>
//         <div
//           className="col-md-6 col-lg-3"
//           data-aos="fade-up"
//           data-aos-delay={400}
//         >
//           <Link to="#" className="unit-9">
//             <div
//               className="image"
//               style={{ backgroundImage: 'url("images/img_4.jpg")' }}
//             />
//             <div className="unit-9-content">
//               <h2>Atlanta</h2>
//               <span>$150/night</span>
//             </div>
//           </Link>
//         </div>
//         <div className="col-md-12 text-center mt-5" data-aos="fade-up">
//           <Link to="#" className="btn btn-primary">
//             Browse All Apartments
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="site-section">
//     <div className="container">
//       <div className="row">
//         <div
//           className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
//           data-aos="fade-up"
//         >
//           <h2 className="mb-5">Featured Apartments</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
//             fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
//             ab quod?
//           </p>
//         </div>
//       </div>
//       <div className="site-block-retro d-block d-md-flex">
//         <Link
//           to="#"
//           className="col1 unit-9 no-height"
//           data-aos="fade-up"
//           data-aos-delay={100}
//         >
//           <div
//             className="image"
//             style={{ backgroundImage: 'url("images/img_2.jpg")' }}
//           />
//           <div className="unit-9-content">
//             <h2>Baltimore Apartment</h2>
//             <span>$600/night</span>
//           </div>
//         </Link>
//         <div className="col2 ml-auto">
//           <Link
//             to="#"
//             className="col2-row1 unit-9 no-height"
//             data-aos="fade-up"
//             data-aos-delay={200}
//           >
//             <div
//               className="image"
//               style={{ backgroundImage: 'url("images/img_3.jpg")' }}
//             />
//             <div className="unit-9-content">
//               <h2>Austin Apartment</h2>
//               <span>$290/night</span>
//             </div>
//           </Link>
//           <Link
//             to="#"
//             className="col2-row2 unit-9 no-height"
//             data-aos="fade-up"
//             data-aos-delay={300}
//           >
//             <div
//               className="image"
//               style={{ backgroundImage: 'url("images/img_1.jpg")' }}
//             />
//             <div className="unit-9-content">
//               <h2>Atlanta Apartment</h2>
//               <span>$1,290/night</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="site-section block-13">
//     <div className="container" data-aos="fade-up">
//       <div className="row">
//         <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
//           <h2 className="mb-5">Love By Our Customers</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
//             fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
//             ab quod?
//           </p>
//         </div>
//       </div>
//       <div className="nonloop-block-13 owl-carousel">
//         <div className="text-center p-3 p-md-5 bg-white">
//           <div className="mb-4">
//             <img
//               src="images/person_1.jpg"
//               alt="Image"
//               className="w-50 mx-auto img-fluid rounded-circle"
//             />
//           </div>
//           <div className="text-black">
//             <h3 className="font-weight-light h5">Megan Smith</h3>
//             <p className="font-italic">
//               “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
//               iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
//             </p>
//           </div>
//         </div>
//         <div className="text-center p-3 p-md-5 bg-white">
//           <div className="mb-4">
//             <img
//               src="images/person_2.jpg"
//               alt="Image"
//               className="w-50 mx-auto img-fluid rounded-circle"
//             />
//           </div>
//           <div className="text-black">
//             <h3 className="font-weight-light h5">Brooke Cagle</h3>
//             <p className="font-italic">
//               “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
//               iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
//             </p>
//           </div>
//         </div>
//         <div className="text-center p-3 p-md-5 bg-white">
//           <div className="mb-4">
//             <img
//               src="images/person_3.jpg"
//               alt="Image"
//               className="w-50 mx-auto img-fluid rounded-circle"
//             />
//           </div>
//           <div className="text-black">
//             <h3 className="font-weight-light h5">Philip Martin</h3>
//             <p className="font-italic">
//               “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
//               iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
//             </p>
//           </div>
//         </div>
//         <div className="text-center p-3 p-md-5 bg-white">
//           <div className="mb-4">
//             <img
//               src="images/person_1.jpg"
//               alt="Image"
//               className="w-50 mx-auto img-fluid rounded-circle"
//             />
//           </div>
//           <div className="text-black">
//             <h3 className="font-weight-light h5">Steven Ericson</h3>
//             <p className="font-italic">
//               “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
//               iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
//             </p>
//           </div>
//         </div>
//         <div className="text-center p-3 p-md-5 bg-white">
//           <div className="mb-4">
//             <img
//               src="images/person_2.jpg"
//               alt="Image"
//               className="w-50 mx-auto img-fluid rounded-circle"
//             />
//           </div>
//           <div className="text-black">
//             <h3 className="font-weight-light h5">Nathan Dumlao</h3>
//             <p className="font-italic">
//               “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
//               iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
//             </p>
//           </div>
//         </div>
//         <div className="text-center p-3 p-md-5 bg-white">
//           <div className="mb-4">
//             <img
//               src="images/person_4.jpg"
//               alt="Image"
//               className="w-50 mx-auto img-fluid rounded-circle"
//             />
//           </div>
//           <div className="text-black">
//             <h3 className="font-weight-light h5">Brook Smith</h3>
//             <p className="font-italic">
//               “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
//               iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="site-section bg-light">
//     <div className="container">
//       <div className="row">
//         <div
//           className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
//           data-aos="fade-up"
//         >
//           <h2 className="mb-5">News &amp; Events</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
//             fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
//             ab quod?
//           </p>
//         </div>
//       </div>
//       <div className="row">
//         <div
//           className="col-md-6 col-lg-4 mb-4 mb-lg-0"
//           data-aos="fade-up"
//           data-aos-delay={100}
//         >
//           <Link to="single.html">
//             <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
//           </Link>
//           <div className="p-4 bg-white">
//             <span className="d-block text-secondary small text-uppercase">
//               Jan 20th, 2019
//             </span>
//             <h2 className="h5 text-black mb-3">
//               <Link to="single.html">Fugit nam obcaecati fuga itaque</Link>
//             </h2>
//           </div>
//         </div>
//         <div
//           className="col-md-6 col-lg-4 mb-4 mb-lg-0"
//           data-aos="fade-up"
//           data-aos-delay={200}
//         >
//           <Link to="single.html">
//             <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
//           </Link>
//           <div className="p-4 bg-white">
//             <span className="d-block text-secondary small text-uppercase">
//               Jan 20th, 2019
//             </span>
//             <h2 className="h5 text-black mb-3">
//               <Link to="single.html">Fugit nam obcaecati fuga itaque</Link>
//             </h2>
//           </div>
//         </div>
//         <div
//           className="col-md-6 col-lg-4 mb-4 mb-lg-0"
//           data-aos="fade-up"
//           data-aos-delay={300}
//         >
//           <Link to="single.html">
//             <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
//           </Link>
//           <div className="p-4 bg-white">
//             <span className="d-block text-secondary small text-uppercase">
//               Jan 20th, 2019
//             </span>
//             <h2 className="h5 text-black mb-3">
//               <Link to="single.html">Fugit nam obcaecati fuga itaque</Link>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="bg-primary" data-aos="fade">
//     <div className="container">
//       <div className="row">
//         <Link to="#" className="col-2 text-center py-4 social-icon d-block">
//           <span className="icon-facebook text-white" />
//         </Link>
//         <Link to="#" className="col-2 text-center py-4 social-icon d-block">
//           <span className="icon-twitter text-white" />
//         </Link>
//         <Link to="#" className="col-2 text-center py-4 social-icon d-block">
//           <span className="icon-instagram text-white" />
//         </Link>
//         <Link to="#" className="col-2 text-center py-4 social-icon d-block">
//           <span className="icon-linkedin text-white" />
//         </Link>
//         <Link to="#" className="col-2 text-center py-4 social-icon d-block">
//           <span className="icon-pinterest text-white" />
//         </Link>
//         <Link to="#" className="col-2 text-center py-4 social-icon d-block">
//           <span className="icon-youtube text-white" />
//         </Link>
//       </div>
//     </div>
//   </div>
// </>

//         </>
//     )
// }
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

        <div className="container-fluid py-4">

            {/* Heading */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="mb-1">
                        Fashion Zone Dashboard
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

    );
}