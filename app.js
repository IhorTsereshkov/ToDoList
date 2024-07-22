const formTask = document.forms.formTask;
const { textTask, dateTask, selectTask } = formTask.elements;
const button = document.querySelector("button");
const textNone = formTask.querySelector(".textnone");
const boxMain = document.querySelector(".main");
const modal = document.querySelector(".modal");
const buttonModal = document.querySelector(".modal_button");
const arr = [];

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    textTask.value === "" ||
    dateTask.value === "" ||
    selectTask.value === ""
  ) {
    textNone.classList.remove("none");
    return;
  }
  const objInf = {
    textTask: textTask.value,
    dateTask: dateTask.value,
    selectTask: selectTask.value,
  };
  arr.push(objInf);
  boxCreate(arr);
  modal.classList.remove("none");
});

textTask.addEventListener("click", () => {
  textNone.classList.add("none");
});

buttonModal.addEventListener("click", () => {
  modal.classList.add("none");
  textTask.value = "";
});

modal.addEventListener("click", (event) => {
  event.stopPropagation();
});

const boxCreate = (arr) => {
  arr.forEach((item) => {
    const newBox = document.createElement("div");
    newBox.classList.add("newBox");
    newBox.innerHTML = `
        <h2>${item.textTask}</h2>
        <h3>${item.dateTask}</h3>
        <h3>${item.selectTask}</h3>`;
    boxMain.appendChild(newBox);
  });
};
