function handleFormSubmit(event) {
  event.preventDefault();  
  console.log("Form submission prevented!");
}

window.onload = function() {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("Form submission prevented!");
  });  
};
