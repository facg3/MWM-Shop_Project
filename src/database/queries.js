const allProducts=  (callback) =>{
      const connection = require("./dbconnection");
      const sql = 'select * from products';
      connection.query(sql, (err, result)=>{
        if(err){
          console.log('ERROR IN ALL PRODUCT' , err);
        }else{
          callback(result.rows);
        }
      });
};

module.exports = {allProducts};
