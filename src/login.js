function onXingAuthLogin(response) {
  var output;
  var lul;

  console.log(response);

  if (response.user) {
    output = 'Successful login for ' + response.user.display_name + " with email: " + response.user.active_email + "<br>" + "The person is working for" + response.user.professional_experience.primary_company;
    lul = JSON.stringify(response.toString());
  } else if (response.error) {
    output = 'Error: ' + response.error;
  }

  

  document.getElementById('output').innerHTML = output;
  document.getElementById('lul').innerHTML = lul;
}
