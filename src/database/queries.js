const connection = require("./dbconnection");
const allProducts=  (callback) =>{
      const sql = 'select * from products';
      connection.query(sql, (err, result)=>{
        if(err){
          console.log('ERROR IN ALL PRODUCT' , err);
        }else{
          callback(result.rows);
        }
      });
};
const getDataUsers = (cb) => {
  connection.query(`SELECT * FROM users`,(errgetUsers,result) =>{
    if(errgetUsers) console.log('User Not Found',errgetUsers);
    else {
      cb(result.rows);
    }
  })
}


const allcarts =(cb)=>{
  connection.query('SELECT users.name, products.name FROM users JOIN cart ON cart.user_id = users.id JOIN products ON products.id = cart.product_id WHERE users.name = "user"',(errallcarts, result) =>{
    if(allcarts) console.log('Carts Not Found',errallcarts);
    else {
      cb(result.rows);
    }
  })

}


module.exports = {
  allProducts,
  getDataUsers,
   allcarts
 };
