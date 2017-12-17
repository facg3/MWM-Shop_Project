fetch('/usercart',null,(response)=>{
  var res =  JSON.parse(response);
  var row = document.getElementById('row');
  res.forEach((element,i) => {
    var column = document.createElement('div');
    column.setAttribute('class','column');
    var card = document.createElement('div');
    card.setAttribute('class','card');
    var img = document.createElement('img');
    img.src='public/css/'+element.image;
    var container = document.createElement('div');
    container.setAttribute('class','container');
    var name = document.createElement('h2');
    var price = document.createElement('h2');
    var p =document.createElement('p');
    var button=document.createElement('button');
    button.setAttribute('class','button');
    button.setAttribute('id','button');
    button.setAttribute('type','submit');
    button.setAttribute('onclick','deletecart('+element.product_id+')');
    button.textContent='Delete From CART';
    console.log(element);
    name.textContent = element.name;
    price.textContent ="$"+element.price;
    card.appendChild(img);
    container.appendChild(name);
    container.appendChild(price);
    p.appendChild(button);
    container.appendChild(p);
    card.appendChild(container);
    column.appendChild(card);
    row.appendChild(column);
  })

});
