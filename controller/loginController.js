import loginModel from "../modal/loginSchema.js";
import generateToken from "../config/generateToken.js";

export default class LoginController{
    async signup(req,res){
        const {username,password}=req.body;

        try{

            const data=await loginModel.create({
               username,
               password
            })
            if(data){
                res.status(200).json(data);
            }else{
                res.status(403).json({success:false})
            }

        }catch(err){
            console.log(err)
            res.status(500).json(err);
        }
    }

    async authunticate(req,res){
        const {username,password}=req.body;

        try{

            const user=await loginModel.findOne({
                where:
                {username,password   
                }
            })
            console.log(user.dataValues)

            if(user.password==password){
                const token=generateToken(user.id);
                // const detailinfo=await userModel.findOne({where:{id:user.id}});
                // console.log(detailinfo);
                res.status(200).json({success:true,msg:"valid",token});
            }else{
                res.status(403).json({success:false,msg:"invalid"})
            }
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
}