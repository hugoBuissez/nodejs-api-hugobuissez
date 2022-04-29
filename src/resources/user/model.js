export class UserModel {
    constructor() {
        this.users = [
            {
                "id": 1,
                "email": "test1@gmail.com",
                "password": "testpassword"
            },
            {
                "id": 2,
                "email": "test2@gmail.com",
                "password": "testpassword2"
            }
        ]
    }

    create(user) {
        this.users.push(user);
        return user;
    }

    findById(id) {
        this.users.forEach(u => {
            if (u.id === id) return u;
        })

        return null;
    }

    checkPassword(id, password) {
    } // hint: make use of bcrypt to match password i.e: bcrypt.compare

    hashPassword(password) {
    } // hint: make use of bcrypt to hash password i.e: bcrypt.hash
}
