const createButton = document.getElementById("create");
const ToDoList = document.getElementById("list");
createButton.addEventListener("click", () => {
  const newToDo = document.createElement("div");
  newToDo.classList.add("li");
  newToDo.innerHTML = /*HTML*/ `<div class="check"><div class="gg-check"></div></div><div class="text">Hello World!</div>`;
  newToDo.getElementsByClassName("check")[0].addEventListener("click", () => {
    newToDo.classList.toggle("active");
  });

  function handleEdit() {
    newToDo
      .getElementsByClassName("text")[0]
      .removeEventListener("click", handleEdit);
    newToDo.getElementsByClassName(
      "text"
    )[0].innerHTML = /*HTML*/ `<input type="text" class="text-input" value="${
      newToDo.getElementsByClassName("text")[0].innerText
    }">`;
    newToDo.getElementsByClassName("text-input")[0].focus();

    newToDo.getElementsByClassName("text-input")[0].select();
    function handleLeaveEdit() {
      newToDo.getElementsByClassName("text")[0].innerHTML =
        newToDo.getElementsByClassName("text-input")[0].value;

      newToDo
        .getElementsByClassName("text")[0]
        .addEventListener("click", handleEdit);

      newToDo
        .getElementsByClassName("text")[0]
        .addEventListener("", handleEdit);
    }
    newToDo
      .getElementsByClassName("text-input")[0]
      .addEventListener("blur", handleLeaveEdit);

    newToDo
      .getElementsByClassName("text-input")[0]
      .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          handleLeaveEdit();
        }
      });
  }

  newToDo
    .getElementsByClassName("text")[0]
    .addEventListener("click", handleEdit);
  newToDo
    .getElementsByClassName("text")[0]
    .addEventListener("contextmenu", () => {
      newToDo.remove();
    });

  ToDoList.append(newToDo);
});
