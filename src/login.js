function onXingAuthLogin(response) {
  var output;
  var lul;
  var i;

  console.log(response);

  if (response.user) {
    output = 'Successful login for ' + response.user.display_name + " with email: " + response.user.active_email + "<br>";
  } else if (response.error) {
    output = 'Error: ' + response.error;
  }

  document.getElementById('output').innerHTML = output;

  i = document.createElement('img');
  i.setAttribute("src", response.user.photo_urls.maxi_thumb);

  document.getElementById('img').appendChild(i);
}
