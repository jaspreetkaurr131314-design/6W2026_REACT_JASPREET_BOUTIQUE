export default class UserModel {
    id = ""
    name = ""
    email = ""
    phone = ""
    address = ""
    imageUrl = ""
    userType = 2 // 1 - ADMIN, 2 - CUSTOMER
    createdAt = Date.now()
    updatedAt = ''
    status = true;
}