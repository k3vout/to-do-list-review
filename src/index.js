import "./style.css";
import DragAndSort from "./drag.js";
import Status from "./status.js";
import Crud from "./crud.js";

const list = [];

function loadLiEvents() {
  const liElements = document.querySelectorAll(".item");
  liElements.forEach((element) => {
    const drag = new DragAndSort();
    element.addEventListener("dragstart", drag.dragStart);
    element.addEventListener("dragover", drag.dragOver);
    element.addEventListener("drop", drag.drop);
  });
  const itemDesc = document.querySelectorAll(".item-description");
  itemDesc.forEach((item) => {
    const crud = new Crud();
    item.addEventListener("input", crud.updateTask); // Update Elements
    item.addEventListener("focusin", crud.showTrashAndRemove); // Remove Elements
    item.addEventListener("focusout", crud.showDots);
  });
}

document.addEventListener("DOMContentLoaded", loadLiEvents);

function loadCheckboxes() {
  const checkboxes = document.querySelectorAll(".checks");
  checkboxes.forEach((checkbox) => {
    const status = new Status();
    checkbox.addEventListener("change", status.validation);
  });
}

document.addEventListener("DOMContentLoaded", loadCheckboxes);

// LOCAL STORAGE

if (!localStorage.ToDoList) {
  document.addEventListener("DOMContentLoaded", DragAndSort.sortList(list));
} else {
  document.addEventListener(
    "DOMContentLoaded",
    DragAndSort.sortList(JSON.parse(localStorage.getItem("ToDoList")))
  );
}

// ADD ELEMENTS
const newItem = document.getElementById("add-to-list");
const newCrud = new Crud();
newItem.addEventListener("keypress", newCrud.addToList);
// Remove All
const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", newCrud.clearCompleted);
