import express from 'express';
import bodyParser from 'body-parser';
import connection from './config/config.js';
import loginRoute from './route/loginRoute.js';
import userRoute from './route/userRoute.js';

const app=express();
app.use(bodyParser.json());


app.use('/user',loginRoute);
app.use('/usr',userRoute);

app.get('/',(req,res)=>{
   res.send({"msg":'server is working well'});
})

app.listen(8080,async()=>{
    console.log('server is running');
    try{
        await connection.authenticate();
        await connection.sync();
        console.log('successfully connected to db');
       }catch(err){
           console.log('unable to connect DB',err);
       }
})