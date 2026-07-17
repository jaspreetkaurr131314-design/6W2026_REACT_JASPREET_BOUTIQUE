import { addDoc, collection, getDocs, getDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
// import CategoryModel from "../model/CategoryModel";
import ProductModel from "../model/ProductModel";

class ProductService {

    // Add Product
    async add(data) {

        let newproduct = new ProductModel();

        newproduct.name = data.name;
        newproduct.description = data.description;
        newproduct.price = data.price;
        newproduct.discountPrice = data.discountPrice;
        newproduct.stock = data.stock;
        newproduct.image = data.image;
        newproduct.createdAt = data.createdAt;

        console.log("new", newproduct)

        try {

            const docRef = await addDoc(
                collection(db, "product"),
                { ...newproduct }
            );

            return docRef;
        } catch (err) {
            console.log(err.message);

        }


    }

    // Get All Categories
    async all() {
        let data = [];

        const querySnapshot = await getDocs(collection(db, "product"));

        querySnapshot.forEach((doc) => {
            console.log(doc.id);

            data.push({
                ...doc.data(),
                id: doc.id
            });

        });

        return data;
    }
    async deleteCat(id) {
        await deleteDoc(doc(db, "product", id));

    }

    // Update Product
    async update(data, id) {
console.log(id, data);

          const docRef = doc(db, "product", id);
        await updateDoc(docRef, data);


    }
    // Get Product By ID
    async single(id) {

        const docRef = doc(db, "product", id);
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

export default new ProductService();