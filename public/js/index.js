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
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(data);
  }else {
    xhr.send();
  }
}
//
// if(typeof module !== 'undefined'){
//   module.exports = getproduct;
// }
