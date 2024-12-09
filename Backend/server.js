const express = require ('express')
const mysql = require ('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:"208.91.198.106",
    user:"lotusbat_user-churchquest-db",
    password: "drw)$},VtTD-",
    database: "lotusbat_churchquest"
})

db.connect((err)=>{
    if(err){
        console.log('Database connection failed:', err)
        return;
    }
    console.log('connected to the database')
})
 
app.post('/register', (req, res)=>{
   
    const checkEmailQuery="SELECT * FROM users WHERE churchName = ? OR email= ?  "

  db.query(checkEmailQuery,[req.body.churchName, req.body.email], (err, data)=>{
   
    if(err){
       return res.json("Error while checking user details")
    }
    if(data.length > 0){
        //User already existed
        return res.json("User already registered with this Name or email")
    } else
         {
         const registerQuery="INSERT INTO users(`churchName`,`churchSize` ,`address`, `email`,`password`) VALUES (?)"         
        const userData=[
            req.body.churchName,
            req.body.churchSize,
            req.body.address,
            req.body.email,
            req.body.password
        ]
        db.query(registerQuery, [userData], (err , data) =>
           {
             if (err){
                   return res.json("Error in registration")       
             }
             return res.json(data)
           }
      )}

  })
    
 })

app.post('/login',  (req, res) =>{
       
    const sql="SELECT * FROM users WHERE email = ? AND password = ?";
    
    db.query(sql, [req.body.email, req.body.password] , (err, data) => {
         if(err){
            return res.json("Database Error")
         }
         if(data.length > 0) {
             
            const user=data[0];

            return res.json({
                message: "Login successful",
                user:{
                    id:user.index,
                    churchName:user.churchName,
                    email:user.email,
                    address: user.address
                }
            })
            

         } else{
             return res.json('Invalid Credentials')
         }
    } )
    
})


app.listen('https://churchquest.netlify.app', ()=>{
    console.log('listening')
})
