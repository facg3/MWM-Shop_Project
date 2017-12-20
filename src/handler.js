const fs = require('fs'); 
const path = require('path');
const queries = require('./database/queries');
const loginqueries = require('./database/login-queries');
const jwt = require('jsonwebtoken');
require('env2')('config.env');
const cookie = require('cookie');
let token;
const adminpage = (request, response) => {
  if (request.headers.cookie) {
    fs.readFile(path.join(__dirname, '..', 'public', 'admin.html'), (err, file) => {
      if (err) {
        response.writeHead(500, {
          'content-type': 'text/html'
        });
        response.end('<h1 style = \'text-align: center;\'>SERVER ERROR</h1>');
      } else {
        response.writeHead(200, {
          'content-type': 'text/html'
        });

        response.end(file);
      }

    });
  } else {
    response.writeHead(302, {
      'Location': '/'
    });
    response.end();
  }

};
const homepage = (request, response) => {
  if (request.headers.cookie) {
    fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
      if (err) {
        response.writeHead(500, {
          'content-type': 'text/html'
        });
        response.end('<h1 style = \'text-align: center;\'>SERVER ERROR</h1>');
      } else {
        response.writeHead(200, {
          'content-type': 'text/html'
        });

        response.end(file);
      }

    });
  } else {
    response.writeHead(302, {
      'Location': '/'
    });
    response.end();
  }

};
const products = (request, response) => {
  if (request.headers.cookie) {
    queries.allProducts(result => {
      response.end(JSON.stringify(result));
    });
  } else {
    response.writeHead(302, {
      'Location': '/'
    });
    response.end();
  }
};
const addcart = (request, response) => {
  if (request.headers.cookie) {
    let id = '';
    request.on('data', chunkOfData => {
      id += chunkOfData;
    });
    request.on('end', () => {
      // console.log(id);
      queries.addcart(id);
      response.end('Done Add');
    });
  } else {
    response.writeHead(302, {
      'Location': '/'
    });
    response.end();
  }
};


const deletecart = (request, response) => {
  let id = '';
  request.on('data', chunkOfData => {
    id += chunkOfData;
  });
  request.on('end', () => {
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
      response.end('<h1 style = \'text-align: center;\'>SERVER ERROR</h1>');
    } else {
      response.writeHead(200, `Content-Type:${filetype[extension]}`);
      response.end(file);
    }
  });
};

const userpage = (request, response) => {
  var obj = cookie.parse(request.headers.cookie);
  // console.log(Object.keys(obj));
  if (obj.accessToken) {
    jwt.verify(obj.accessToken, process.env.SECRET_COOKIE, (err, decoded) => {
      if (decoded.role === 'user') {
        fs.readFile(path.join(__dirname, '..', 'public', 'user.html'), (err, file) => {
          if (err) {
            response.writeHead(500, {
              'content-type': 'text/html'
            });
            response.end('<h1 style = \'text-align: center;\'>SERVER ERROR</h1>');
          } else {
            response.writeHead(200, {
              'content-type': 'text/html'
            });
            response.end(file);
          }
        });
      } else {
        fs.readFile(path.join(__dirname, '..', 'public', 'admin.html'), (err, file) => {
          if (err) {
            response.writeHead(500, {
              'content-type': 'text/html'
            });
            response.end('<h1 style = \'text-align: center;\'>SERVER ERROR</h1>');
          } else {
            response.writeHead(200, {
              'content-type': 'text/html'
            });
            response.end(file);
          }
        });
      }
    });
  } else {
    response.writeHead(302, {
      'Location': '/'
    });
    response.end();
  }
};
const loginpage = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'login.html'), (err, file) => {
    if (err) {
      response.writeHead(500, {
        'content-type': 'text/html'
      });
      response.end('<h1 style = \'text-align: center;\'>SERVER ERROR</h1>');
    } else {
      response.writeHead(200, {
        'content-type': 'text/html'
      });
      response.end(file);
    }
  });
};
const usercart = (request, response) => {
  queries.allcarts(result => {
    response.end(JSON.stringify(result));
  });
};
const loginuser = (request, response) => {
  let data = '';
  request.on('data', chunkOfData => {
    data += chunkOfData;
  });
  request.on('end', () => {
    data = JSON.parse(data);
    loginqueries.login(data, result => {
      if (result.length === 0) {
        response.end('Error in username or password');
      } else {
        const userData = {
          id: result[0].id,
          name: result[0].name,
          role: result[0].role
        }
        console.log(userData.role);
        if (userData.role === 'admin') {
          token = jwt.sign(userData, process.env.SECRET_COOKIE);
          response.writeHead(200, {
            'content-type': 'text/plain',
            'Set-Cookie': `accessToken=${token}`
          });
          response.end('/admin');
        } else {
          token = jwt.sign(userData, process.env.SECRET_COOKIE);
          response.writeHead(200, {
            'content-type': 'text/plain',
            'Set-Cookie': `accessToken=${token}`
          });
          response.end('/home');
        }
      }
    });
  });
};


const logoutuser = (request, response) => {
  response.writeHead(302, {
    'Location': '/',
    'Set-Cookie': 'accessToken=0;Max-Age=0'
  });
  response.end();
}
module.exports = {
  adminpage,
  homepage,
  handler,
  products,
  addcart,
  deletecart,
  userpage,
  loginpage,
  logoutuser,
  usercart,
  loginuser
};
