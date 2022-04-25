import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const users = []
const tweets = []


app.listen(5000, () => {
	console.log("Server is running on port 5000")
})