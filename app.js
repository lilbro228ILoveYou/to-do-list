const button1 = document.getElementById("btn1");
const list = document.getElementById("list");

function getTemplateNote(note) {
  return `<li>
              ${note}<div class="icons">
                <i class="fa-solid fa-check" id="i1"></i
                ><i class="fa-solid fa-xmark" id="btn2"></i>
              </div>`;
}
button1.onclick = function () {
  const input = document.getElementById("input").value;
  if (input.trim() !== "") {
    list.insertAdjacentHTML("beforeend", getTemplateNote(input));
    document.getElementById("input").value = "";
  }
};

list.addEventListener("click", function (event) {
  // Удаление элемента, если нажали на "крестик"
  if (event.target.classList.contains("fa-xmark")) {
    event.target.closest("li").remove();
  }
  // Добавление класса "completed", если нажали на "галочку"
  else if (event.target.classList.contains("fa-check")) {
    const listItem = event.target.closest("li");
    if (!listItem.classList.contains("completed")) {
      listItem.classList.add("completed");
    }
  }
});
