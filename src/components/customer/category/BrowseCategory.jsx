import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FadeLoader, PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";
import CategoryService from "../../../services/CategoryService";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


export default function BrowseCategory() {
    let [loading, setLoading] = useState(false);

    const [categories, setCategories] = useState([])

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
    return (



        <div className="site-section bg-light">
            <div className="container">
                <div className="row">
                    <div
                        className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                        data-aos="fade-up"
                    >
                        <h2 className="mb-5">All categories</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                            fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab
                            quod?
                        </p>
                    </div>
                </div>
                <div className="row">
                  {categories.map((category, index) => (
                       <div
                        className="col-md-6 col-lg-4 mb-4 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <Link to="single.html">
                            <img src={category.image} alt="Image" className="img-fluid" />
                        </Link>
                        <div className="p-4 bg-white">
                            <span className="d-block text-secondary small text-uppercase">
                              { category.name}
                            </span>
                            <h2 className="h5 text-black mb-3">
                                <Link to="single.html">{category.description}</Link>
                            </h2>
                        </div>
                    </div>
                    ))

                                    }
                </div>
            </div>
        </div>
    )
}

