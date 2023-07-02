const db = require("../config/db")

class MessagesModel {
    constructor (senderName, email, message) {
        this.senderName = senderName,
        this.email = email
        this.message = message
    }

    async addMessage() {
        return new Promise ((resolve, reject) => {
            db.query(`INSERT INTO messages (id, name, email, message) VALUES (NULL, '${this.senderName}', '${this.email}', '${this.message}')`,            
            {},
            (error, result)=> {
                if(error){
                    reject(error)
                }else {
                    resolve(result)
                }
            })
        })
    }

    static  async selectMessages() {
        return new Promise ((resolve, reject)=> {
            db.query(`SELECT * FROM messages WHERE 1`,
            {},
            (error, result)=> {
                if(error) {
                    reject(error)
                }
                else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = MessagesModel