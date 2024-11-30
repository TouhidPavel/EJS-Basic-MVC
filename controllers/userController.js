import * as path from 'path'
import {fileURLToPath} from 'url'
import userList from '../models/userModels.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const getUser = (req, res) => {
    const file = path.join(__dirname, '../views/form.html')
    res.sendFile(file)
}

export const saveUser = (req, res) => {
    const {name, email} = req.body
    const newUser = {name, email}
    userList.push(newUser)
    res.status(201).json({
        status: 'Success',
        message: 'User added successfully!',
        userList
    })
}