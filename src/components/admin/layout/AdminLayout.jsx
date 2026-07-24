import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import AuthService from "../../../services/AuthService";
import { useEffect } from "react";
import { toast } from "react-toastify";

// Layout wrapper for admin pages
export default function AdminLayout() {

    const nav = useNavigate()

    function getUserType(){
        const res = AuthService.getUserType()
        return res;
    }
    function getUserEmail(){
        const res = AuthService.getEmail()
        return res;
    }

    useEffect(()=>{
        const email = getUserEmail()
        const userType = getUserType()
        if(userType !== '1' || email == null){
            toast.error("Unauthorised")
            nav('/')
        }

    }, [])


    return (
        <>
            {/* Shows the top admin header */}
            <AdminHeader />
            {/* Displays the actual admin page content (Dashboard, etc.) */}
            <Outlet />
            {/* Shows the bottom admin footer */}
            <AdminFooter />


        </>
    )
}