import mongoose from "mongoose";

const server = 'mongodb://localhost:27017'; //db server
const dbname = 'incubations'; // database name

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(server)
            .then(() => {
                console.log("db connection successfull");
            })
            .catch(err => {
                console.error('db connection error');
            })
    }
}

export default new Database()