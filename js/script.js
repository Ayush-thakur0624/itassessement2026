// Image Slider

let images = ["images/mars.jpg", "images/colony.jpg", "images/rocket.jpg"];

let index = 0;

function changeImage() {
  let slider = document.getElementById("slider");

  if (slider) {
    index++;

    if (index >= images.length) {
      index = 0;
    }

    slider.src = images[index];
  }
}

setInterval(changeImage, 3000);

// Contact Form Validation

function validateForm() {
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill all required fields!");

    return false;
  }

  alert("Form submitted successfully 🚀");

  return true;
}

function showDate() {
  let date = new Date();

  let dateBox = document.getElementById("date");

  if (dateBox) {
    dateBox.innerHTML = "Today's Date: " + date.toDateString();
  }
}
// Final JavaScript update