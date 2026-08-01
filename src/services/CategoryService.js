import { addDoc, collection, getDocs, getDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import CategoryModel from "../model/CategoryModel";

class CategoryService {

    // Add Category
    async add(data) {

        let newCategory = new CategoryModel();

        newCategory.name = data.name;
        newCategory.description = data.description;
        newCategory.status = data.status;
        newCategory.image = data.image;
        newCategory.createdAt = data.createdAt;
        newCategory.updatedAt = data.updatedAt;

        console.log("nmew", newCategory)

        try {

            const docRef = await addDoc(
                collection(db, "categories"),
                { ...newCategory }
            );

            return docRef;
        } catch (err) {
            console.log(err.message);

        }


    }

    // Get All Categories
    async all() {


        let data = [];

        const querySnapshot = await getDocs(collection(db, "categories"));

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
        await deleteDoc(doc(db, "categories", id));

    }

    // Update Category
    async update(data, id) {

        await updateDoc(doc(db, "categories", id), {
            name: data.name,
            description: data.description,
            image: data.image,
            status: data.status,
            updatedAt: new Date()
        });



    }
    // Get Category By ID
    async single(id) {

        const docRef = doc(db, "categories", id);
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

export default new CategoryService();