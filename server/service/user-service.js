const UserModel = require('../models/user-model')

class UserService {
  async registration(email, password){
    const condidate = await  UserModel.findOne({email})
    if(condidate){
      throw new Error("user not found")
    }
    const user = await UserModel.create({email, password})
  }
}

module.exports = new UserService()