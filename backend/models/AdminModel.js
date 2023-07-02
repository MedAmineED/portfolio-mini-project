const db = require("../config/db")

class AdminModel {
    constructor (adminName, adminTitle, about) {
        this.adminName = adminName,
        this.adminTitle = adminTitle,
        this.about = about
    }

    async addUpdatedAdmin() {

        return new Promise ((resolve, reject) => {
            db.query(`UPDATE profile SET adminName = '${this.adminName}', 
                                        adminTitle = '${this.adminTitle}', 
                                        about = '${this.about}',
                                        WHERE id = 1`,            
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

    static  async getAdminData() {
        return new Promise ((resolve, reject)=> {
            db.query(`SELECT adminName, adminTitle, about FROM profile WHERE id = 1`,
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

module.exports = AdminModel