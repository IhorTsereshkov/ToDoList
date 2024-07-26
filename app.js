const formTask = document.forms.formTask;
const { textTask, dateTask, selectTask } = formTask.elements;
const button = document.querySelector("button");
const textNone = formTask.querySelector(".textnone");
const boxMain = document.querySelector(".main");
const modal = document.querySelector(".modal");
const buttonModal = document.querySelector(".modal_button");
const newDiv = document.querySelector(".newDiv");
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
  textTask.value = "";
  dateTask.value = "";
  selectTask.value = "Выберите сложность задачи";
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
  newDiv.innerHTML = "";
  arr.forEach((item) => {
    const newBox = document.createElement("div");
    newBox.classList.add("newBox");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    const h2 = document.createElement("h2");
    h2.textContent = item.textTask;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Удалить";
    newBox.appendChild(checkbox);
    newBox.appendChild(h2);
    newBox.appendChild(deleteButton);
    newDiv.appendChild(newBox);

    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        newBox.style.backgroundColor = "green";
        deleteButton.style.backgroundColor = "green";
      } else {
        newBox.style.backgroundColor = "";
        deleteButton.style.backgroundColor = "";
      }
    });

    deleteButton.addEventListener("click", () => {
      newBox.remove();
    });
  });
};

// let a;
// let b;

// function foo() {
//   let b;
//   b = 10;
//   a = 15;
//   console.log(b);
// }

// foo();

// console.log(a);
// console.log(b);

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++; // есть доступ к внешней переменной "count"
//   };
// }

// let counter = makeCounter();

// alert(counter); // 0
// alert(counter()); // 1
// alert(counter()); // 2
