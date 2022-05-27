let Database = require('./Database');
class Admin
{
    email = "";
    password = "";

    db = new Database.Database();
    query = "";

    login = ()=>{
        this.query = "SELECT * FROM admins WHERE email = '" + this.email + "' AND password = '" + this.password + "'";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                    return reject(err);
                else
                    return resolve(result);
            });
        });
    }

}

module.exports = {
    Admin:Admin
}