function addTodo(event) {
    event.preventDefault();
  
    const todoElement = document.getElementById('todoInput');
    const buttonElement = document.querySelector('button');
  
    buttonElement.addEventListener('click', function () {
      // Get the value of the input field
      const todoDescription = todoElement.value;
      const mytodo = {
        todo: todoDescription,
      };
  
      alert("To Do: " + todoDescription);
  
      axios.post('http://localhost:3000/post/mytodo', mytodo)
        .then(function (response) {
          console.log(response);
          // getOnscreen();
        })
        .catch(function (err) {
          console.log(err);
          console.log(mytodo);
        });
  
      // Log the to-do description
      console.log(todoDescription);
  
      // If you want to do more with the to-do description, add your code here.
    });
  }
  