import axios from 'axios'; // Import Axios

function addTodo(event: Event) {
  event.preventDefault();

  const todoElement = document.getElementById('todoInput') as HTMLInputElement;
  const buttonElement = document.querySelector('button')!;

  buttonElement.addEventListener('click', () => {
    // Get the value of the input field
    const todoDescription = todoElement.value;
    const mytodo = {
      todo: todoDescription,
    };

    alert("To Do: " + todoDescription);

    axios.post('http://localhost:3000/post/mytodo', mytodo)
      .then((response: any) => { // Specify the type of response (use a more specific type if possible)
        console.log(response);
        // getOnscreen();
      })
      .catch((err: any) => { // Specify the type of err (use a more specific type if possible)
        console.log(err);
      });

    // Log the to-do description
    console.log(todoDescription);

    // If you want to do more with the to-do description, add your code here.
  });
}



 
// async function test()
// { 

      

         
//  // create a new list item element to represent the to-do item
//         var listItem = document.createElement("li");

// // add the to-do text and description to the list item
//        var text = document.createTextNode("To Do : " + todo + "  => Details : " + description);
//                   listItem.appendChild(text);

//        // create the check button and add it to the list item
//        const checkButton = document.createElement("button");
//            checkButton.innerHTML = "check";
        
//    checkButton.addEventListener('click', async function() {
//                     // send a POST request to mark the to-do item as completed
       
//      try {     const response = await axios.post('http://localhost:3000/post/done', mytodo);
//                               // remove the list item from the list
//                                listItem.remove();
//                               await refreshHTML();   
//                              } 
//                               catch (error) {  
//                                console.log(error);  }  
//                              });
      
//                  listItem.appendChild(checkButton);

//       // create the X button and add it to the list item
//       var xButton = document.createElement("button");
//          xButton.innerHTML = "X";
//          xButton.addEventListener('click',  async function () { listItem.remove() });
//         listItem.appendChild(xButton);


//         // add the list item to the list
//          document.getElementById("myList").appendChild(listItem);
// }



// async function getOnscreen(data) {
//  var listItem = document.createElement("li");

//  var text = document.createTextNode(data.todo + ": " + data.description);
//  listItem.appendChild(text);
//  var xButton = document.createElement("button");
//  xButton.innerHTML = "X";
//  xButton.addEventListener('click', async function() {
//    try {
//      const response = await axios.delete(`https://crudcrud.com/api/4928cc7428c04d42a9fb56a3bb4acc39/todos/${data._id}`);
//      listItem.remove();
//    } catch (error) {
//      console.log(error);
//    }
//  });
//  listItem.appendChild(xButton);

//  document.getElementById("TODO:").appendChild(listItem);
// }

// async function refreshHTML() {
//  var list = document.getElementById("myList");
//  var todoList = document.getElementById("TODO:");
//  list.innerHTML = "";
//  todoList.innerHTML = "";

// }

// window.addEventListener('DOMContentLoaded', async ()=>{
//  try {  
//    //await  refreshHTML()
//    const response = await axios.get('https://crudcrud.com/api/4928cc7428c04d42a9fb56a3bb4acc39/todos/');
//    console.log(response.data)
//    for(var i=0; i< response.data.length ;i++){
//     await getOnscreen(response.data[i]);
//     await  refreshHTML()
//   }
//  } catch (err) {
//    console.log(err)
//  }
// });


