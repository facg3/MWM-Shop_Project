const test = require('tape');
const shot = require('shot');
const router = require('./src/router');
const fs = require('fs');
const getData=require('./src/database/queries.js');

test('Initialize', t => {
  const num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

const index = fs.readFile(`${process.cwd()}/`+'public/index.html','UTF-8' ,(err,contentFile) => {
  if (err) {
    process.stdout.write(' The file doesn\'t exist');
  } else {
    index=contentFile;
  }
});
test('Home route', t => {
  shot.inject(router, { method: 'get', url: '/' }, res => {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.equal(res.payload,index, 'should return an html document');
    t.end();
  });
});

test('Unknown Pages', t => {
  shot.inject(router, { method: 'get', url: '/this_is_just_a_random_url' }, res => {
    t.equal(res.statusCode, 404, 'Should return a status code of 404');
    t.equal(res.payload, 'PAGE NOT FOUND!!!!!!!!!!', 'Should handle unknown pages.');
    t.end();
  });

});

test('test all products length' , t => {
  getData.allProducts(res => {
    t.equal(res.length,9, 'Data Size Should Be 9.');
    t.end();
  });

});
