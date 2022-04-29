import config from '../config'
import {UserModel} from '../resources/user/model'
import jwt from 'jsonwebtoken'

const userModel = new UserModel();

export const newToken = user => {
    return jwt.sign({id: user.id}, config.secrets.jwt, {
        expiresIn: config.secrets.jwtExp
    })
}

export const verifyToken = token =>
    new Promise((resolve, reject) => {
        jwt.verify(token, config.secrets.jwt, (err, payload) => {
            if (err) return reject(err)
            resolve(payload)
        })
    })

export const signup = async (req, res) => {

    let user = req.body
    if (!user.email || !user.password)
        res.status(400).send({"message": "Problem during authentication"});
    else {
        user.id = userModel.users.length + 1;
        userModel.create(user)
        let userToken = newToken(user);
        res.status(200).send({"message": "Thanks for signing up !", "token": userToken})
    }
}

export const signin = async (req, res) => {
}

export const protect = async (req, res, next) => {
    next()
}
