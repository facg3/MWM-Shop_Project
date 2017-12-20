const connection = require("./dbconnection");
const crypto = require('crypto');
const secret = 'mwm';
// const passwordAdmin = crypto.createHmac('SHA256',secret).update('mwm123456').digest('hex');
// console.log('Admin password :'+passwordAdmin); // e2454cb8d0b09f0080bae8f0f600137b677b585ab5814497861aeda53b7f7cb3
// const passwordUser=crypto.createHmac('SHA256',secret).update('123456').digest('hex');
// console.log('User password :'+passwordUser);//d2e994858496bc71f37cb689ac1f5cd56eaa15fc98b3214328b1106a1d6d2724

// const sqladmin = {
//   text: "INSERT INTO users (name,password,role) VALUES ($1,$2,$3)",
//   values: ['mahmoud', `${passwordAdmin}`, 'admin']
// }
// const sqluser = {
//   text: "INSERT INTO users (name,password,role) VALUES ($1,$2,$3)",
//   values: ['mahmoud', `${passwordUser}`, 'user']
// }
// connection.query(sqladmin,(err,result)=>{
//     if (err) {
//       throw new ERROR('Error in adding logining user')
//     }
//     else {
//       console.log('Adding Successful');
//     }
// });
// connection.query(sqluser,(err,result)=>{
//     if (err) {
//       throw new ERROR('Error in adding logining user')
//     }
//     else {
//       console.log('Adding Successful');
//     }
// });


const login=  (data,callback) =>{
    var pass=crypto.createHmac('SHA256',secret).update(data.password).digest('hex');
    console.log(pass);
      const sql = `select * from users where name = '${data.username}' and password='${pass}'`
      connection.query(sql, (err, result)=>{
        if(err){
          console.log('ERROR IN Carts' , err);
        }else{
          callback(result.rows);
        }
      });
};
module.exports = {
  login
}
