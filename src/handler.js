const req = require('request');
const fs = require('fs');
const path = require('path');
const queries = require('./database/queries');
const loginqueries = require('./database/login-queries');
const homepage = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
    if (err) {
      response.writeHead(500, {
        'content-type': 'text/html'
      });
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    } else {
      response.writeHead(200, {
        'content-type': 'text/html'
      });

      response.end(file);
    }

  });

};
const products = (request, response) => {
  queries.allProducts((result) => {
    response.end(JSON.stringify(result));
  })
};
const addcart = (request, response) => {
  var id = "";
  request.on('data', function(chunkOfData) {
    id += chunkOfData;
  });
  request.on('end', function() {
    // console.log(id);
    queries.addcart(id);
    response.end('Done Add');
  });

};

const deletecart = (request, response) => {
  var id = "";
  request.on('data', function(chunkOfData) {
    id += chunkOfData;
  });
  request.on('end', function() {
    // console.log(id);
    queries.deletecart(id);
    response.end('Done Delete');
  });
};

const handler = (request, response) => {
  const url = request.url;
  const extension = url.split('.')[1];
  const filetype = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
    ico: 'image/x-icon',
    jpg: 'image/jpeg',
    png: 'image/png'
  };

  fs.readFile(path.join(__dirname, '..', url), (err, file) => {
    if (err) {
      response.writeHead(500, {
        'content-type': 'text/html'
      });
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    } else {
      response.writeHead(200, `Content-Type:${filetype[extension]}`);
      response.end(file);
    }
  });
};

const userpage = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'user.html'), (err, file) => {
    if (err) {
      response.writeHead(500, {
        'content-type': 'text/html'
      });
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    } else {
      response.writeHead(200, {
        'content-type': 'text/html'
      });
      response.end(file);
    }
  });
};
const loginpage = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'login.html'), (err, file) => {
    if (err) {
      response.writeHead(500, {
        'content-type': 'text/html'
      });
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    } else {
      response.writeHead(200, {
        'content-type': 'text/html'
      });
      response.end(file);
    }
  });
};
const usercart = (request, response) => {
  queries.allcarts((result) => {
    response.end(JSON.stringify(result));
  })
};
const loginuser = (request, response) => {
  var data = "";
  request.on("data", function(chunkOfData) {
    data += chunkOfData;
  });
  request.on('end', function() {
    data = JSON.parse(data);
    loginqueries.login(data, (result) => {
      console.log(typeof result);
      if (result.length === 0) {
        response.end('Error in username or password')
      }else{
        response.writeHead(200 , {'content-type':'text/plain'});
        response.end('/');
      }
    });


  });
}


module.exports = {
  homepage,
  handler,
  products,
  addcart,
  deletecart,
  userpage,
  loginpage,
  usercart,
  loginuser
};
