const div = document.getElementById('paragraph');
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const p = document.createElement('p');

btn.addEventListener('click', event => {

  if ((username.value.trim() === '') || (password.value.trim() === '')) {
    p.textContent = 'Fill All inputs to login please!';
    div.appendChild(p);
  } else {
    username.value = username.value.trim();
    password.value = password.value.trim();
    const d = {
      username: username.value,
      password: password.value
    };
    login(JSON.stringify(d), result => {
      p.textContent = result;
      div.appendChild(p);
    });
    p.textContent = '';

  }
});
