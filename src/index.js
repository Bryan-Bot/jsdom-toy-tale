let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

toyCollection = document.getElementById("#toy-collection")
console.log(toyCollection)

function toy(){
  return fetch('http://localhost:3000/toys')
    .then(res => res.json())
}

function addToy(toy){
  let div = document.createElement("div")
  div.className = "card"

  let h2 = document.createElement("h2")
  h2.textContent = toy.name


  let img = document.createElement("img")
  img.className = "toy-avatar"
  img.src = toy.image

  let p = document.createElement("p")
  p.textContent = toy.likes

  let button = document.createElement("button")
  button.className = "like-btn"
}

let img = document.createElement("img")
