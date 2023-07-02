const skillsModel = require('../models/skillsModel');

class SkillsController {
  static async postNewSkill(req, res) {
    const reqSkills = req.body;
    const addNewSkill = new skillsModel(
                                    reqSkills.skillName,
                                    reqSkills.progress,
                                    )
        console.log("add Skill", addNewSkill)

    try {
      const savedSkill = await addNewSkill.addSkill();
      res.send(savedSkill)
    } catch (error) {
      console.log("my error = ",error);
      res.status(500).send('Error saving the skill');
    }
  }

  static async getSkills(req, res) {
    try {
        const  SkillsData = await skillsModel.getSkillsData()
        console.log("request success")
        console.log(SkillsData)
        res.send(SkillsData)
    }
    catch(err) {
        console.log(err)
    }


  }
}

module.exports = SkillsController