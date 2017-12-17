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
    // console.log('datd'+data);
    xhr.send(data);
  }else {
    xhr.send();
  }
}

function deletecart(id){
  // console.log(id);
  fetch('/deletecart',id,(response)=>{
    // console.log(response);
  });
  window.location.reload();
}

function addcart(id){
  // console.log(id);
  fetch('/addcart',id,(response)=>{
    // console.log(response);
  });
}
