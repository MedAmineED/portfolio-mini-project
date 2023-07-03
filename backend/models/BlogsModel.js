const db = require("../config/db")

class BlogsModel {
    constructor (title, content, image) {
        this.title = title,
        this.content = content,
        this.image = image
    }

    async addBlog() {

        return new Promise ((resolve, reject) => {
            db.query(`INSERT INTO blogs (id, title, content, image) VALUES (NULL, '${this.title}', '${this.content}, '${this.image}')`,            
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

    static  async getBlogsData() {
        return new Promise ((resolve, reject)=> {
            db.query(`SELECT * FROM blogs WHERE 1`,
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

module.exports = BlogsModel