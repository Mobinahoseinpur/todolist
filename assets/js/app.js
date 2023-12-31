const options = document.getElementsByClassName("options");
const optionIcon = document.getElementsByClassName("optionIcon");
const secBtn = document.querySelector(".secBtn");
const pContent = document.getElementById('taskTextContent')

//!---------------------------- create add notes ----------------------------
let _count = 0;
document.querySelector(".addBtn").addEventListener("click", function () {
  let input = document.querySelector(".inputTask");
  if (input.value !== "") {
    _count++;
    document.querySelector(" .containerTasks").innerHTML += `
    <div class="ct">
    <div class="task">
      <p id="taskTextContent">${input.value}</p>
    </div>
    
    <span class="options" onclick='_op(this)' data-s='0'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ellipsis-v"><path fill="#840FC7" d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></svg>
    </span>
    <ul class="optionIcon hidden">
      <li class="secBtn doneBtn" onclick='_done(this)'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="#1ECA1E" d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path></svg>
      </li>
      <li class="secBtn editeBtn" onclick='_edite(this)'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="edit-alt"><path fill="#840FC7" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
      </li>
      <li class="secBtn removeBtn" onclick='_delete(this)'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="multiply"><path fill="#DC2525" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
      </li>
    </ul>
  </div>
    `;
    document.querySelector(".counter").innerHTML = _count;
    input.value = "";
    input.focus();
  }
});
//!---------------------------- Become visible  option button ----------------------------
function _op(op) {
  let _data = op.dataset.s;
  let nextEl = op.nextElementSibling;
  if (_count > 0) {
    if (_data == "0") {
      // _data='1'
      nextEl.classList.toggle("hidden");
    }
  }

  // hide the menu when a click event occurs outside the menu
  document.addEventListener("click", (event) => {
    if (!nextEl.contains(event.target) && !op.contains(event.target)) {
      nextEl.classList.add("hidden");
    }
  });
}
//!----------------- create delete button --------------------
function _delete(del) {
  let delItem = del
  delItem.parentElement.parentElement.remove();
}
//!----------------- create edite button  --------------------
function _edite(ed) {
  let editItem = ed
  // console.log(editItem.parentElement.previousElementSibling.previousElementSibling.childNodes[1])
  console.log(editItem)
  editItem.parentElement.previousElementSibling.previousElementSibling.childNodes[1].setAttribute('contenteditable', true)
}
//!----------------- create done  button --------------------
function _done(don) {
  let donItem = don
  donItem.nextElementSibling.remove()
  console.log()

}
