import {
    addDoc,
    collection,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";


import { db } from "../firebase/FirebaseConfig";

import OrderModel from "../model/OrderModel";


class OrderService {



    // Add Order
    async add(data) {

        let newOrder = new OrderModel();

        newOrder.customerId = data.customerId;

        newOrder.name = data.name;

        newOrder.phone = data.phone;

        newOrder.houseNo = data.houseNo;

        newOrder.street = data.street;

        newOrder.nearPlace = data.nearPlace;

        newOrder.city = data.city;

        newOrder.state = data.state;

        newOrder.pincode = data.pincode;

        newOrder.totalAmount = data.totalAmount;

        newOrder.paymentMethod = data.paymentMethod;

        newOrder.paymentStatus = "Pending";

        newOrder.orderStatus = "Pending";

        newOrder.createdAt = new Date();

        newOrder.updatedAt = new Date();


        const docRef = await addDoc(

            collection(db, "orders"),

            { ...newOrder }

        );


        return docRef;

    }


    // Get All Orders
    async all() {
        const querySnapshot = await getDocs(collection(db, "orders"));

        let data = [];

        querySnapshot.forEach((docSnap) => {
            data.push({
                ...docSnap.data(),
                firebaseId: docSnap.id
            });
        });

        return data;
    }
   


    // Delete Order
    async deleteOrder(id) {

        console.log("Deleting ID:", id);

        if (!id) {
            throw new Error("Order ID is missing");
        }
        const orderRef = doc(db, "orders", id);
        // await deleteDoc(
        //     doc(db, "orders", id)

    await deleteDoc(orderRef);
    

    }


    // Update Order Status
    async update(data, id) {

        await updateDoc(

            doc(db, "orders", id),

            {

                orderStatus: data.orderStatus,

                paymentStatus: data.paymentStatus,

                updatedAt: new Date()

            }

        );

    }


    // Get Single Order
    async single(id) {

        const docSnap = await getDoc(

            doc(db, "orders", id)

        );


        if (docSnap.exists()) {

            return {

                id: docSnap.id,

                ...docSnap.data()

            };

        }


        return null;

    }

}


export default new OrderService();