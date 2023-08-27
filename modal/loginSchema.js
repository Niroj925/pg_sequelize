import {DataTypes} from "sequelize";
import connection from "../config/config.js";
import bcrypt from 'bcrypt';

const loginModel =connection.define('loggeduser',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"John",
        // get function 
        get(){
            const userName=this.getDataValue('username');
            return userName ? userName.toUpperCase():null;
    },
},
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        //set function to hash the password
        set(value) {
            const hashedPassword = bcrypt.hashSync(value, 10); 
            this.setDataValue('password', hashedPassword);
        }
    }   
  
},{
// freezeTableName:true,
// tableName:'UserDetail',
// timestamps:true,
// createdAt:false,
// updatedAt:'updateTimeStamp'
paranoid:true//soft deletion
})

export default loginModel;