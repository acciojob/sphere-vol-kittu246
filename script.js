function volume_sphere() {
    //Write your code here
  // console.log(form.radius.value);
  let radius = form.radius.value;
  form.volume.value = (4/3)*Math.PI*(radius**3);
  // console.log(form.volume.value);
} 
let form = document.getElementById('MyForm');
form.addEventListener("submit",volume_sphere);

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
