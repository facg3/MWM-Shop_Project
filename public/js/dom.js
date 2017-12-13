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
    var card = document.createElement('div');
    card.setAttribute('class','card');
    var container = document.createElement('div');
    container.setAttribute('class','container');
    var name = document.createElement('h2');
    var price = document.createElement('h2');
    name.textContent = element.name;
    price.textContent = element.price;
    card.appendChild(img);
    container.appendChild(name);
    container.appendChild(price);
    card.appendChild(container);
    column.appendChild(card);
    row.appendChild(column);
    wrapper.appendChild(row);
  })

});
