document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", drop);
});

document
  .querySelector(".neutralArea").addEventListener(".dragover", dragOverNeutral);
  .querySelector(".neutralArea").addEventListener(".dragleave", dragLeaveNeutral);
  .querySelector(".neutralArea").addEventListener(".drop", dropNeutral);

// Functions Item
function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}

function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

// functions Area
function dragOver(e) {
  if (e.currentTarget.querySelector(".item") === null) {
    e.preventDefault();
    e.currentTarget.classList.add("hover");
  }
}

function dragLeave(e) {
  e.currentTarget.classList.remove("hover");
}

function drop(e) {
  e.currentTarget.classList.remove("hover");

  if (e.currentTarget.querySelector(".item") === null) {
    let dragItem = document.querySelector(".item.dragging");
    e.currentTarget.appendChild(dragItem);
  }
}

// Functions Neutral Area

function dragOverNeutral() {

}

function dragLeaveNeutral() {

}

function dropNeutral() {
    
}
