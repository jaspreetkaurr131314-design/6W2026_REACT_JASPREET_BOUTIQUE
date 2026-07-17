import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <AdminHeader></AdminHeader>

            <Outlet></Outlet>

            <AdminFooter></AdminFooter>
        </>
    )
}