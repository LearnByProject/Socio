import Usermodel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// export const registerUser = async (req, res) => {

//     const salt = await bcrypt.genSalt(10);
//     const hashedPass = await bcrypt.hash(req.body.password, salt);
//     req.body.password = hashedPass
//     const newUser = new Usermodel(req.body);
//     const {username} = req.body
//     try {
//       // addition new
//       const oldUser = await Usermodel.findOne({ username });
  
//       if (oldUser)
//         return res.status(400).json({ message: "User already exists" });
  
//       // changed
//       const user = await newUser.save();
//       const token = jwt.sign(
//         { username: user.username, id: user._id },
//         process.env.JWT_KEY,
//         { expiresIn: "1h" }
//       );
//       res.status(200).json({ user, token });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   // Login User
  
//   // Changed
//   export const loginUser = async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       const user = await Usermodel.findOne({ username: username });
  
//       if (user) {
//         const validity = await bcrypt.compare(password, user.password);
  
//         if (!validity) {
//           res.status(400).json("wrong password");
//         } else {
//           const token = jwt.sign(
//             { username: user.username, id: user._id },
//             process.env.JWT_KEY,
//             { expiresIn: "1h" }
//           );
//           res.status(200).json({ user, token });
//         }
//       } else {
//         res.status(404).json("User not found");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   };
export const registerUser = async(req,res) =>{
    
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass
    const newUser = new Usermodel(req.body)
    const {username} = req.body
    try{

        const oldUser = await Usermodel.findOne({username})
        if(oldUser)
        {
            return res.status(400).json({message:"Username Already Exist"})
        }
        const user = await newUser.save()
        const token = jwt.sign({
            username : user.username, id : user._id
        },process.env.JWT_KEY,{expiresIn:'10h'})
        res.status(200).json({user,token})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
};

export const loginUser = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await Usermodel.findOne({username: username})
        if(user)
        {
            const validity = await bcrypt.compare(password, user.password)

            if(!validity){
                res.status(400).json("Wrong Password")
            }
            else{
                const token = jwt.sign({
                    username : user.username, id : user._id
                },process.env.JWT_KEY,{expiresIn:'1h'})
                res.status(200).json({user,token})
            }
        }
        else{
            res.status(404).json("User does not exists")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}