const AdminModel = require('../models/AdminModel');

class AdminController {
  static async postUpdatedAdmin(req, res) {
    const reqAdmin = req.body;
    const updatedAdmin = new AdminModel(
                                    reqAdmin.adminName,
                                    reqAdmin.adminTitle,
                                    reqAdmin.about
                                    )
        console.log("update admin", updatedAdmin)

    try {
      const savedAdmin = await updatedAdmin.addUpdatedAdmin();
      res.send(savedAdmin)
    } catch (error) {
      console.log("my error = ",error);
      res.status(500).send('Error saving the product');
    }
  }

  static async getAdmin(req, res) {
    try {
        const  adminData = await AdminModel.getAdminData()
        console.log("request success")
        console.log(adminData)
        res.send(adminData)
    }
    catch(err) {
        console.log(err)
    }


  }
}

module.exports = AdminController