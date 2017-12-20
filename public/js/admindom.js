fetch('/usercart',null,(response)=>{
  var res =  JSON.parse(response);
  var row = document.getElementById('row');
  res.forEach((element,i) => {
    var column = document.createElement('div');
    column.setAttribute('class','column');
    var card = document.createElement('div');
    card.setAttribute('class','card');
    var container = document.createElement('div');
    container.setAttribute('class','container');
    var name = document.createElement('h2');
    name.textContent = element.name;
    container.appendChild(name);
    card.appendChild(container);
    column.appendChild(card);
    row.appendChild(column);
  })

});
