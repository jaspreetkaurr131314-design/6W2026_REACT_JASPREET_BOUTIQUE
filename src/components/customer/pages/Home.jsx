import CartService from "../../../services/CartService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";



export default function Home() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    try {
      const res = await ProductService.all();
      setProducts(res);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function addToCart(product) {
    // Get all cart items
    const cartItems = await CartService.all();

    // Check if product already exists in cart
    const existingItem = cartItems.find(
      (item) => item.productId === product.id
    );

    if (existingItem) {
      const updatedData = {
        quantity: existingItem.quantity + 1,
        updatedAt: Date.now(),
      };

      await CartService.update(updatedData, existingItem.id);
      toast.success("Cart quantity updated");
    } else {
      // Add new cart item
      const payload = {
        customerId: "",
        productId: product.id,
        quantity: 1,
        selectedSize: "",
        selectedColor: "",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      await CartService.add(payload);
      toast.success("Added To Cart");
    }
  }


  return (
    <>
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
          className="site-blocks-cover overlay"
          style={{ backgroundImage: 'url("photo.avif")' }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-8 text-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <h1 className="mb-4">Discover Your Perfect Style</h1>
                <p className="mb-5">
                  Welcome to Jaspreet Boutique, your one-stop destination for stylish and fashionable clothing. Explore our latest collection of trendy outfits, quality products, and beautiful designs made for every occasion.
                </p>
                <p>
                  <Link to="#" className="btn btn-primary px-5 py-3">
                    Shop Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="featured-property-half d-flex">
            <div
              className="image"
              style={{ backgroundImage: 'url("public/images/js.jpg")' }}
            />
            <div className="text">
              <h2>Product Information</h2>
              Discover elegance and comfort with our premium fashion collection. Each outfit is carefully designed using high-quality fabric to provide a stylish look and a perfect fit. Ideal for festive occasions, casual outings, and special events.

              Product Name: Traditional Wear Suit.

              <Link to="#" className="btn btn-primary px-4 py-3">
                Get Details
              </Link>

            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">

              {products.map((item) => (

                <div className="col-md-6 col-lg-3 mb-4" key={item.id}>

                  <div className="card h-100">

                    <img
                      src={item.image}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                      alt=""
                    />

                    <div className="card-body">

                      <h5>{item.name}</h5>

                      <p>{item.description}</p>

                      <h6>₹ {item.price}</h6>

                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(item)}
                      >
                        Add To Cart
                      </button>


                    </div>

                  </div>

                </div>

              ))}

            </div>
            <div className="row">
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div
                className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                data-aos="fade-up"
              >
                <h2>Featured Collection</h2>

                <p>
                  Discover our exclusive range of trendy and elegant outfits crafted with premium-quality fabrics. Whether you're looking for casual wear, festive attire, or stylish traditional dresses, our featured collection offers the perfect blend of fashion, comfort, and affordability.
                </p>
              </div>
            </div>
            <div className="site-block-retro d-block d-md-flex">
              <Link
                to="#"
                className="col1 unit-9 no-height"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div
                  className="image"
                  style={{ backgroundImage: 'url("public/images/images (2).jpg")' }}
                />
                <div className="unit-9-content">
                  {/* <h2>Baltimore Apartment</h2> */}
                  {/* <span>$600/night</span> */}
                </div>
              </Link>
              <div className="col2 ml-auto">
                <Link
                  to="#"
                  className="col2-row1 unit-9 no-height"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div
                    className="image"
                    style={{ backgroundImage: 'url("public/images/images (3).jpg")' }}
                  />
                  <div className="unit-9-content">
                    <h2>western</h2>
                    {/* <span>$290/night</span> */}
                  </div>
                </Link>
                <Link
                  to="#"
                  className="col2-row2 unit-9 no-height"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div
                    className="image"
                    style={{ backgroundImage: 'url("public/images/image 4.jpg")' }}
                  />
                  <div className="unit-9-content">
                    <h2>jacket</h2>
                    {/* <span>$1,290/night</span> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div
                className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                data-aos="fade-up"
              >
                <>
                  <h2>Fashion News &amp; Updates</h2>
                  <p>
                    Explore our newest arrivals, special discounts, festive collections, and
                    fashion updates. We keep our customers informed about the latest trends and
                    exciting events at Jaspreet Boutique.
                  </p>
                </>

              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <Link to="#">
                  <img src="public/images/images (6).jpg" alt="Fashion Trend" className="img-fluid" />
                </Link>
                <div className="p-4 bg-white">
                  <span className="d-block text-secondary small text-uppercase">
                    Aug 01, 2026
                  </span>
                  <h2 className="h5 text-black mb-3">
                    <Link to="#">Latest Summer Collection Launch</Link>
                  </h2>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <Link to="#">
                  <img src="public/images/images (7).jpg" alt="Special Offer" className="img-fluid" />
                </Link>
                <div className="p-4 bg-white">
                  <span className="d-block text-secondary small text-uppercase">
                    Aug 05, 2026
                  </span>
                  <h2 className="h5 text-black mb-3">
                    <Link to="#">Special Festive Discount Offers</Link>
                  </h2>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <Link to="#">
                  <img src="public/images/images (5).jpg" alt="New Arrivals" className="img-fluid" />
                </Link>
                <div className="p-4 bg-white">
                  <span className="d-block text-secondary small text-uppercase">
                    Aug 10, 2026
                  </span>
                  <h2 className="h5 text-black mb-3">
                    <Link to="#">New Designer Wear Arrivals</Link>
                  </h2>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-primary" data-aos="fade">
          <div className="container">
            <div className="row">
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-facebook text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-twitter text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-instagram text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-linkedin text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-pinterest text-white" />
              </Link>
              <Link to="#" className="col-2 text-center py-4 social-icon d-block">
                <span className="icon-youtube text-white" />
              </Link>
            </div>
          </div>
        </div>
      </>

    </>
  )
}