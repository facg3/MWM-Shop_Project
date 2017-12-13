fetch('/products',null,(response)=>{
  var res =  JSON.parse(response);
  var wrapper = document.getElementById('wrapper');
  var row = document.createElement('div');
  row.setAttribute('class','row');
  res.forEach((element,i) => {
    var column = document.createElement('div');
    column.setAttribute('class','column');
    var img = document.createElement('img');
    img.src='public/css/'+element.image;
    var name = document.createElement('h1');
    var price = document.createElement('h2');
    name.textContent = element.name;
    price.textContent = element.price;
    column.appendChild(img);
    column.appendChild(name);
    column.appendChild(price);
    row.appendChild(column);
    wrapper.appendChild(row);
  })

});
