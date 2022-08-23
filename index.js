var x = document.createElement("input");
x.setAttribute("class", "input");
x.setAttribute("id", "email");
x.setAttribute("type", "text");
x.setAttribute("name", "email");
x.setAttribute("autocomplete", "email");
x.setAttribute("placeholder", "Work email");

var y = document.createElement("input");
y.setAttribute("id", "password");
y.setAttribute("type", "password");
y.setAttribute("name", "password");
y.setAttribute("autocomplete", "password");
y.setAttribute("placeholder", "Password");

var z = document.createElement("button");
z.setAttribute("class", "loginBtn");
z.setAttribute("id", "submit");
z.setAttribute("type", "submit");
z.innerHTML = 'Login';

var a = document.createElement("a");
a.setAttribute("href", "/login_sso");
a.setAttribute("class", "hyper_link text-center loginSSO");
a.innerHTML = 'Login with SSO';

document.getElementById('login_form').appendChild(x);
document.getElementById('login_form').appendChild(y);
document.getElementById('login_form').appendChild(z);
document.getElementById('login_form').appendChild(a);