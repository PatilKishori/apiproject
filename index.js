let express = require("express");
const Admin = require("./models/Admin");
const Course = require("./models/Course");

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
            res.send({status:"success", data:result});
        },
        err=>{
            res.send({status:"fail", data:err});
        }
    )
});

app.post("/savecourse", (req, res)=>{
    let data = req.body.data;
    let course = new Course.Course();
    course.id = data.id;
    course.name = data.name;
    course.imgpath = data.imgpath;
    course.description = data.description;
    course.save().then(
        result=>{
            res.send({status:"success", data:result});
        },
        err=>{
            res.send({status:"fail", data:err});
        }
    )
});


app.post("/deletecourse", (req, res)=>{
    let data = req.body.data;
    let course = new Course.Course();
    course.id = data.id;
    course.delete().then(
        result=>{
            res.send({status:"success", data:result});
        },
        err=>{
            res.send({status:"fail", data:err});
        }
    )
});

app.post("/listcourse", (req, res)=>{
    let data = req.body.data;
    let course = new Course.Course();
    course.list().then(
        result=>{
            res.send({status:"success", data:result});
        },
        err=>{
            res.send({status:"fail", data:err});
        }
    )
});

app.post("/getcourse", (req, res)=>{
    let data = req.body.data;
    let course = new Course.Course();
    course.id = data.id;
    course.list().then(
        result=>{
            res.send({status:"success", data:result});
        },
        err=>{
            res.send({status:"fail", data:err});
        }
    )
});


app.listen(8082, ()=>{
    console.log("APIs are running at http://localhost:8081");
});