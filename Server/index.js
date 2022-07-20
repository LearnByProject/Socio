import mongoose from "mongoose";
import bodyParser from "body-parser";
import express  from "express";
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import cors from 'cors'
import uploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'
const app = express();
app.use(express.static('public'))
app.use('/images',express.static("images"))
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))
app.use(cors())
dotenv.config();
const PORT = process.env.PORT;
const CONNECTION =process.env.Mongo_Db;
mongoose.
connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

    app.use('/auth', AuthRoute)
    app.use('/user',UserRoute)
    app.use('/post', PostRoute)
    app.use('/upload',uploadRoute)
    app.use('/chat',ChatRoute)
    app.use('/message',MessageRoute)