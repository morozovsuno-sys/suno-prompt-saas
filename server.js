const express = require("express")

const app = express()

app.use(express.json())
app.use(express.static("public"))

let users = {}

app.post("/api/generate",(req,res)=>{

 const { contact } = req.body

 if(!users[contact]){
  users[contact] = { prompts:0, pro:false }
 }

 if(!users[contact].pro && users[contact].prompts >= 5){
  return res.json({ paywall:true })
 }

 users[contact].prompts++

 res.json({
  prompt:"Write an emotional trap song about lost love."
 })

})

app.listen(3000,()=>{
 console.log("Server started")
})
