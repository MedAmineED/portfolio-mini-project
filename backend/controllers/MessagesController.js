const messageModel = require('../models/MessageModel');

class SkillsController {
  static async postNewMessage(req, res) {
    const reqMessage = req.body;
    const addNewMessage = new messageModel(
                                    reqMessage.senderName,
                                    reqMessage.email,
                                    reqMessage.message,
                                    )
        console.log("add message", addNewMessage)

    try {
      const savedMessage = await addNewMessage.addMessage();
      res.send(savedMessage)
    } catch (error) {
      console.log("my error = ",error);
      res.status(500).send('Error saving the skill');
    }
  }

//   static async getSkills(req, res) {
//     try {
//         const  SkillsData = await skillsModel.getSkillsData()
//         console.log("request success")
//         console.log(SkillsData)
//         res.send(SkillsData)
//     }
//     catch(err) {
//         console.log(err)
//     }


//   }
}

module.exports = SkillsController