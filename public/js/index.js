function fetch(url, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = xhr.responseText;
      callback(response);
    }
  };
  xhr.open('POST', url);
  if (data) {

    xhr.send(data);
  }else {
    xhr.send();
  }
}

function deletecart(id){

  fetch('/deletecart',id,(response)=>{

  });
  window.location.reload();
}

function addcart(id){

  fetch('/addcart',id,(response)=>{

  });

}
function login(d,cb){
  fetch('/loginuser',d,(response)=>{
    if (response === "Error in username or password") {
      cb(response)
    }
    else {
    window.location.pathname=response;
    
    }
  });
}
