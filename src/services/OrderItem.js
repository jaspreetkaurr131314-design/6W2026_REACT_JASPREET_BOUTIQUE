import {addDoc,collection,getDocs,getDoc,deleteDoc,doc,updateDoc} from "firebase/firestore";

import { db } from "../firebase/FirebaseConfig";
import OrderModel from "../model/OrderModel";

class OrderService {

    // Add Order
    async add(data) {

        let newOrder = new OrderModel();

        newOrder.customerId = data.customerId;
        newOrder.totalAmount = data.totalAmount;
        newOrder.shippingAddress = data.shippingAddress;
        newOrder.paymentMethod = data.paymentMethod;
        newOrder.paymentStatus = data.paymentStatus;
        newOrder.orderStatus = data.orderStatus;
        newOrder.createdAt = data.createdAt;
        newOrder.updatedAt = data.updatedAt;

        console.log("new Order", newOrder);

        try {

            const docRef = await addDoc(
                collection(db, "orders"),
                { ...newOrder }
            );

            return docRef;

        } catch (err) {
            console.log(err.message);
        }
    }

    // Get All Orders
    async all() {

        let data = [];

        const querySnapshot = await getDocs(collection(db, "orders"));

        querySnapshot.forEach((doc) => {

            data.push({
                ...doc.data(),
                id: doc.id
            });

        });

        return data;
    }

    // Delete Order
    async deleteOrder(id) {
        await deleteDoc(doc(db, "orders", id));
    }

    // Update Order
    async update(data, id) {

        await updateDoc(doc(db, "orders", id), {

            customerId: data.customerId,
            totalAmount: data.totalAmount,
            shippingAddress: data.shippingAddress,
            paymentMethod: data.paymentMethod,
            paymentStatus: data.paymentStatus,
            orderStatus: data.orderStatus,
            updatedAt: new Date()

        });

    }

    // Get Single Order
    async single(id) {

        const docRef = doc(db, "orders", id);
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

export default new OrderService();