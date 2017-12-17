const connection = require("./dbconnection");
const allProducts=  (callback) =>{
      const sql = 'select * from products';
      connection.query(sql, (err, result)=>{
        if(err){
          console.log('ERROR IN ALL PRODUCT' , err);
        }else{
          callback(null,result.rows);
        }
      });
};
const getDataUsers = (cb) => {
  connection.query(`SELECT * FROM users`,(errgetUsers,result) =>{
    if(errgetUsers) console.log('User Not Found',errgetUsers);
    else {
      cb(null,result.rows);
    }
  })
};


const allcarts=  (callback) =>{
      const sql = 'select * from products inner join cart on cart.product_id = products.id inner join users on cart.user_id=users.id ';
      connection.query(sql, (err, result)=>{
        if(err){
          console.log('ERROR IN Carts' , err);
        }else{
          callback(null,result.rows);
        }
      });
};

const addcart=  (id)=>{
  const sql = 'insert into cart (user_id,product_id) values(1,'+id+') ';
  connection.query(sql, (err, result)=>{
    if(err){
      console.log('ERROR IN ALL PRODUCT' , err);
    }else{
      console.log('Completed Add');
    }
  })};

const deletecart=  (id) =>{
  const sql = 'DELETE FROM cart WHERE product_id ='+id;
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('ERROR IN Carts' , err);
          }else{
            console.log('Done');
          }
        });
  };

module.exports = {
  allProducts,
  getDataUsers,
   allcarts,
   addcart,
   deletecart
 };
