const db = require("../config/db")

class SkillsModel {
    constructor (skillName, progress) {
        this.skillName = skillName,
        this.progress = progress
    }

    async addSkill() {

        return new Promise ((resolve, reject) => {
            db.query(`INSERT INTO skills (id, skillName, progress) VALUES (NULL, '${this.skillName}', '${this.progress}')`,            
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

    static  async getSkillsData() {
        return new Promise ((resolve, reject)=> {
            db.query(`SELECT * FROM skills WHERE 1`,
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

module.exports = SkillsModel