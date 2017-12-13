const handlers = require('./handler.js');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers.homepage(request, response);
  }
  else if (url === '/products') {
    handlers.products(request,response);
  }
    else if (url.startsWith('/public')) {
    handlers.handler(request, response);
  } else if (url === '/user') {
    handlers.userpage(request,response);
  } else {
    response.writeHead(404);
    response.end('PAGE NOT FOUND!!!!!!!!!!');
  }
};
module.exports = router;
