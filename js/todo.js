const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

}

toDoForm.addEventListener("submit", handleToDoSubmit);



//const toDoInput = toDoForm.querySelector("#todo-form input");
//- --HTML<input type=> input의 value를 얻는다
//즉 id가 todo-form인 form안에서 input을 찾는다
//toDoInput.value = ""; input초기값 입력삭제(입력은 사라지지만 밑의 기술로 저장 됨)
//const newTodo = toDoInput.value; ---input의 value를 새로운 변수에 복사
 
