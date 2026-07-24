import { signOut } from "firebase/auth"
import { auth } from "../Firebase/firebaseConfig"

class AuthService {

    setData(data) {
        localStorage.setItem("email", data.email)
        localStorage.setItem("uid", data.uid)
        localStorage.setItem("name", data.name)
        localStorage.setItem("userType", data.userType)

    }

    getEmail(){
        return localStorage.getItem("email")
    }
    getUserType(){
        return localStorage.getItem("userType")
    }

    logout(){
        localStorage.clear()
        sessionStorage.clear()
        signOut(auth)
    }
}



export default new AuthService()

