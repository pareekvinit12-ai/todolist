let form = document.querySelector("form")
let ul = document.querySelector("ul")
let input =document.querySelector("input")
let buttan = document.querySelector("button")
let update = null;


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  let inputvalue = input.value.trim()

  if(update)
  {
    update.firstChild.textContent = inputvalue;
    update =null;
    buttan.textContent = "addtask"
    input.value ="";
    return;
  }

  

  let li = document.createElement("li")
  let span = document.createElement("span")
  span.textContent = inputvalue;


 let editbuttan = document.createElement("button")
 editbuttan.textContent = "Edit"

let deletebuttan = document.createElement("button")
 deletebuttan.textContent = "Delete"


 editbuttan.addEventListener("click", ()=>{
  input.value = span.textContent;
  update= li
  buttan.textContent = "Update"
  input.focus()
 })

 deletebuttan.addEventListener("click", ()=>{
  li.remove()
  input.focus()
 })

 li.append(span , editbuttan , deletebuttan)
  ul.appendChild(li)
 
  input.value = "";
})
