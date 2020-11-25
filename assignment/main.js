// Get input tag and button dom objects
var cityName = document.querySelector("#city-type")
var button = document.querySelector("#submit-btn")
var body = document.querySelector("body")


//listen for click on button
button.addEventListener('click', function (event) {
  // stops page from reloading
  event.preventDefault()
  // have to treat this like algebra, brackets within brackets for each piece to work. Now you can type uppercase or lowercase location names
  if (((cityName.value).toLowerCase()) === (("new york").toLowerCase())) {
    body.style.background = "url(images/nyc.jpg)"
  } else if (((cityName.value).toLowerCase()) === (("la").toLowerCase())) {
    body.style.background = "url(images/la.jpg)"
  } else if (((cityName.value).toLowerCase()) === (("san francisco").toLowerCase())) {
    body.style.backgroundImage = "url(images/sf.jpg)"
  } else if (((cityName.value).toLowerCase()) === (("austin").toLowerCase())) {
    body.style.backgroundImage = "url(images/austin.jpg)"
  } else if (((cityName.value).toLowerCase()) === (("sydney").toLowerCase())) {
    body.style.backgroundImage = "url(images/sydney.jpg)"
  } else {
    body.style.backgroundImage = "url(images/citipix_skyline.jpg)"
  }
})

// METHOD
// 1 - Take input from cityname (hint = .value)
// 2 - Check if city is equal to "new york" 
// (make sure to include to lowercase)
// 3 - If the city is new york, change background
// 4 - Repeat for each city


// From next lesson: could have made a second value to simplify code
// var cityLowerCase = cityName.value.toLowerCase()
// and used that 'var' instead of all brackets in each 'if statement'