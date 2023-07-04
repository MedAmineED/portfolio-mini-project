const db = require("../config/db")

class BlogsModel {
    constructor (title, content, image) {
        this.title = title,
        this.content = content,
        this.image = image
    }

    
        async addBlog() {
            return new Promise((resolve, reject) => {
              const escapedTitle = db.escape(this.title);
              const escapedContent = db.escape(this.content.replace(/'/g, "''")); // Escape single quotes by doubling them
              const escapedImage = db.escape(this.image);
          
              const sql = `INSERT INTO blogs (id, title, content, image) VALUES (NULL, ${escapedTitle}, ${escapedContent}, ${escapedImage})`;
          
              db.query(sql, (error, result) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              });
            });
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

    static async getBlogById(id) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM blogs WHERE id = '${id}'`,
                {},
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }
}

module.exports = BlogsModel