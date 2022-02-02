var input = document.getElementById("input");
var ul = document.querySelector("ul");
var form = document.getElementById("form");

function inputIsValid() {
  return input.value.length;
}

function addItemToListHandler() {
  function submitHandler(event) {
    event.preventDefault();
  }

  form.addEventListener("submit", submitHandler);

  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  function onClickHandler() {
    li.classList.toggle("completed");
  }

  li.addEventListener("click", onClickHandler);

  function buttonHandler() {
    li.classList.add("delete");
  }
  deleteBtn.addEventListener("click", buttonHandler);
}

function keyPressHandler(event) {
  if (inputIsValid() > 0 && event.which === 13) {
    addItemToListHandler();
  }
}

input.addEventListener("keypress", keyPressHandler);
