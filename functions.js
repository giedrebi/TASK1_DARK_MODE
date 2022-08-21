const btn = document.querySelector('#checkbox')
const body = document.body

function change(){
  btn.checked ? body.classList.add("dark") : body.classList.remove("dark");
}

btn.addEventListener('change', change)