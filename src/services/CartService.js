import { addDoc, collection, getDocs, getDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import CartModel from "../model/CartModel";

class CartService {

    // Add Cart
    async add(data) {

        let newCart = new CartModel();

        // newCart.name = data.name;
        newCart.customerId = data.customerId;
        newCart.productId = data.productId;
        newCart.quantity = data.quantity;
        newCart.selectedSize = data.selectedSize;
        newCart.selectedColor = data.selectedColor;
        // newCart.status = data.status;
        // newCart.image = data.image;
        newCart.createdAt = data.createdAt;
        newCart.updatedAt = data.updatedAt;

        console.log("new", newCart)

        try {

            const docRef = await addDoc(
                collection(db, "cart"),
                { ...newCart }
            );

            return docRef;
        } catch (err) {
            console.log(err.message);

        }
    }

    // Get All Cart
    async all() {

        let data = [];

        const querySnapshot = await getDocs(collection(db, "cart"));

        querySnapshot.forEach((doc) => {
            // console.log(doc.id);

            data.push({
                ...doc.data(),
                id: doc.id
            });

        });

        return data;
    }
    async deleteCat(id) {
        await deleteDoc(doc(db, "cart", id));

    }

    // Update Cart
    async update(data, id) {
        const docRef = doc(db, "cart", id);
        await updateDoc(docRef, data);

    }

    // Get Cart By ID
    async single(id) {

        const docRef = doc(
            db,
            "cart",
            id
        );

        // const docRef = doc(db, "cart", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            };
        } else {
            return null;
        }
    }
}

export default new CartService();