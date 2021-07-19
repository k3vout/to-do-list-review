export default class Status {
  validation() {
    if (this.checked) {
      this.nextSibling.style["text-decoration"] = "line-through";
      this.nextSibling.style.color = "#909090";
      // Save in Local Storage
      Status.saveChanges();
    } else {
      this.nextSibling.style["text-decoration"] = "none";
      this.nextSibling.style.color = "#000";
      // Save in Local Storage
      Status.saveChanges();
    }
  }

  static saveChanges() {
    const newList = [];
    const listLi = document.querySelectorAll(".item");
    listLi.forEach((li, i) => {
      newList.push({
        index: i + 1,
        description: li.firstChild.firstChild.nextSibling.value,
        completed: li.firstChild.firstChild.checked,
      });
    });
    localStorage.setItem("ToDoList", JSON.stringify(newList));
  }
}
