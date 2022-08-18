// 1

const btn = document.querySelector('#checkbox')
const body = document.body


function change(){
  btn.checked ? body.classList.add("dark") : body.classList.remove("dark");
}

btn.addEventListener('change', change)

// 2

// const darkModeSwitch = document.getElementById('darkModeSwitch');
// const body = document.getElementById('body');

// //Dark Mode
// darkModeSwitch.addEventListener('click', () => {
//   let currentBodyClass = body.className;

//   if (body.className === "lightMode") {
//     body.className = "darkMode";
//   } else if (currentBodyClass === "darkMode") {
//     body.className = "lightMode";
//   }
// });