fetch('/products',null,(response)=>{
  var res =  JSON.parse(response);
  var wrapper = document.getElementById('wrapper');
  var row = document.createElement('div');
  var column = document.createElement('div');
  column.setAttribute('class','column');
  var img = document.createElement('div')
  column.appendChild(img);
  row.appendChild(column);
  wrapper.appendChild(row);
  // var results = res.map((element) => {
  //   var column = document.createElement('div');
  //   console.log(column);
  //   var img = document.createElement('img').src = element.image;
  //   var name = document.createElement('h2').textContent = element.name;
  //   var price = document.createElement('h3').textContent = element.price;
  //   column.appendChild(img);
  //   column.appendChild(name);
  //   column.appendChild(price);
  //   row.appendChild(column);
  //   wrapper.appendChild(row);
  // });
});
