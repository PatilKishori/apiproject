let express = require("express");
const Admin = require("./models/Admin");
let app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to iGAP Education APIs");
});

app.post("/login", (req, res)=>{
    let data = req.body.data;
    let admin = new Admin.Admin();
    admin.email = data.email;
    admin.password = data.password;
    admin.login().then(
        result=>{
            res.send(result);
        },
        err=>{
            res.send(err);
        }
    )
});

app.listen(8081, ()=>{
    console.log("APIs are running at http://localhost:8081");
});