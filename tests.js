const test = require('tape');
const shot = require('shot');
const router = require('./src/router');
const fs = require('fs');

test("Initialize", (t)=>  {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});


var index = fs.readFile(process.cwd()+'/'+'public/index.html','UTF-8' ,(err,contentFile) =>{
  if(err){
    process.stdout.write('The file doesn\'t exist')
  }else{
    // console.log(contentFile);
    index=contentFile;
  }
});
// Home Route
test('Home route', (t) => {
  shot.inject(router, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.equal(res.payload,index, 'should return an html document');
    t.end();
  })
})

test("Unknown Pages", (t)=>{
  shot.inject(router, {method:"get", url:"/this_is_just_a_random_url"}, res=>{
    t.equal(res.statusCode, 404, "Should return a status code of 404")
    t.equal(res.payload, 'PAGE NOT FOUND!!!!!!!!!!', "Should handle unknown pages.");
    t.end();
  });


});
