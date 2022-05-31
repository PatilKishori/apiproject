let Database = require("./Database");
class Coursetopics{
    id=0;
    courseid="0";
    topicname="";
    description="";
    srno="";
    db = new Database.Database();
    query = "";

    constructor(){
        this.id = 0;
        this.courseid = 0;
        this.topicname= "";
        this.description = "";
        this.srno="";
    }

    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO coursetopics(courseid,topicname, description,srno) ";
            this.query += "VALUES('" + this.courseid + "', '" + this.topicname + "', '" + this.description + "','"+ this.srno +"')";
        }
        else{
            this.query = "UPDATE coursetopics SET topicname = '" + this.topicname + "', ";
            this.query += "srno = '" + this.srno + "', ";
            this.query += "description = '" + this.description + "' WHERE id = " + this.id;
        }
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                {
                    return reject(err);
                }
                else{
                    return resolve(result);
                }
            })
        });
    }


listtopics = ()=>{
    this.query = "SELECT * FROM coursetopics WHERE courseid="+this.courseid;
    return new Promise((resolve, reject)=>{
        this.db.query(this.query, (err, result)=>{
            if(err)
            {
                return reject(err);
            }
            else{
                return resolve(result);
            }
        })
    });
}

gettopic = ()=>{
    this.query = "SELECT * FROM coursetopics WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{
        this.db.query(this.query, (err, result)=>{
            if(err)
            {
                return reject(err);
            }
            else{
                return resolve(result);
            }
        })
    });
}

deletetopic = ()=>{
    this.query = "DELETE FROM coursetopics WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{
        this.db.query(this.query, (err, result)=>{
            if(err)
            {
                return reject(err);
            }
            else{
                return resolve(result);
            }
        })
    });
}

// 
updatesrno = ()=>{
    this.query = "SELECT * FROM coursetopics SET SRNO" +this.SRNO+ " " + "WHERE id="+this.id+ " " +"AND courseid="+ this.courseid ;
    return new Promise((resolve, reject)=>{
        this.db.query(this.query, (err, result)=>{
            if(err)
            {
                return reject(err);
            }
            else{
                return resolve(result);
            }
        })
    });
}

}
module.exports = { 
    Coursetopics:Coursetopics
}