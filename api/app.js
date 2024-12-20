import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import organisationRouter from './routes/organisation.routes.js'
import eventRouter from './routes/event.routes.js'
// import healthcheckRouter from "./routes/healthcheck.routes.js"


//routes declaration
// app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/organisation", organisationRouter)
app.use("/api/v1/events", eventRouter)


// http://localhost:8000/api/v1/users/register

export { app }