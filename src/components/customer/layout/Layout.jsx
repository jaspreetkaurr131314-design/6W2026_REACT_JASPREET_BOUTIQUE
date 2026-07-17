import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <div class="site-wrap">
                <Header></Header>

                <Outlet></Outlet>

                <Footer></Footer>
            </div>
        </>
    )
}