import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase/FirebaseConfig"
import UserModel from "../model/UserModel"
import { doc, getDoc, setDoc } from "firebase/firestore"
import AuthService from "./AuthService"

const dbPath = "users"

class UserService {
    async register(payload) {
        const userRegister = await createUserWithEmailAndPassword(auth, payload.email, payload.password)

        let newUser = new UserModel()

        newUser.name = "";
        newUser.email = payload.email;
        newUser.phone = "";
        newUser.userType = 2;
        newUser.id = userRegister.user.uid

        console.log("NU: ", newUser);
        

        await setDoc(doc(db, dbPath, userRegister.user.uid), { ...newUser })

    }

    async login(data) {
        console.log("Data: ", data)
        let userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        const docRef = doc(db, dbPath, userCredential.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let user = docSnap.data()
            let authData = {
                name: user.name,
                email: user.email,
                uid: user.uid,
                userType: user.userType
            }
            AuthService.setData(authData)
            return user
        } else {
            console.log("No such document!");
            return false
        }
    }
}

export default new UserService