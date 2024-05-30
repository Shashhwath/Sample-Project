import express from 'express'
import cors from 'cors'
import { DataRouter } from './Router/Data.js'


const a = express()

a.use(cors(
    {
        origin : ["http://localhost:3000"],
        methods : ['GET','POST','PUT','DELETE'],
        credentials : true
    }
))

a.use(express.json())

a.use('/data',DataRouter)

a.listen((3005),() => 
{
    console.log("Server is running in 3005")
})