
var todos = ["Buy New Turtle"];

  // put all of your JS code from the lecture here
var input = prompt("What would you like to do?");

while(input !== "quit"){

  if (input === "list") {
    listTodos();
  }
  else if (input === "new") {
    addTodo();
  }
  else if (input === "delete") {
    deleteTodo();
  }

  //ask again for new input
  var input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
  console.log("**********");
  todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo(){
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo(){
  var index = prompt("Enter index of todo to delete");
  todos.splice(index, 1);
  console.log("Deleted Todo");
}




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   ver 1.0 below!   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// var todos = ["Buy New Turtle"];
// window.setTimeout(function () {
//   // put all of your JS code from the lecture here
//   var input = prompt("What would you like to do?");

//   while (input !== "quit") {

//     if (input === "list") {
//       console.log(todos);
//     }
//     else if (input === "new") {
//       var newTodo = prompt("Enter new todo");
//       todos.push(newTodo);
//     }

//     //ask again for new input
//     var input = prompt("What would you like to do?");
//   }
//   console.log("OK, YOU QUIT THE APP");


// }, 500);