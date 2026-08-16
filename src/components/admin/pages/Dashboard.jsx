
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
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div
          className="col-md-7 text-center"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <h1 className="text-white">Dashboard</h1>
          <p>Welcome to your boutique administration panel</p>
        </div>
      </div>
    </div>
  </div>

       
</>
    );
}