import User from "../modules/User.js"
import bcrypt from 'bcryptjs'

export const SignUp = async (req , res)=>{
    try{
        const {name , email , password} = req.body;
        const hashpassword = await bcrypt.hash(password , 10);
        const user = new User({
            name ,
            email,
            password : hashpassword,
        })
         await user.save()
        res.json({message : "User registered Successfully"})
        
    }catch(err){
        res.status(500).json({error : err.message});
    }
};

// Login

export const Login = async (req , res) => {
   try{ const {email , password } = req.body

    const user = await User.findOne({email})

    if(!user) return res.json({message : "USER NOT FOUND"})
         
        const isMatch = await bcrypt.compare(password , user.password)

    if(!isMatch)
        return res.status(200).json({message : "Invalid Password"})

    res.json({message : "User Login successfully"})
}catch(err){
 res.status(500).json({error : err.message })
}
}
