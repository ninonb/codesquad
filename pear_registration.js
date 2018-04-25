//registration form
//need an array of cities that are available
function validateForm(){
  available_cities = ['boston', 'new york', 'chicago', 'san francisco'];
  users = ['andrew', 'ben', 'beyonce'];

  var city = document.getElementById('city');
  var x = available_cities.includes(city);
  if(false){
    alert(`Congrats! You're the first one in your city to sign up.`)
  }else{
    alert(`The users in your city are: ${users} `);
  }
}

  //later this would be changed so that the users specific to each city would be shown. As a start, the same users would show up from the array above for any city on the list.
