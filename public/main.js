'use strict'

$(document).ready(init);

function init(){
  // getAllTodos();
  $('#addTask').click(addTask);
}


function getAllTodos(todos){
  var url = '/todos';
  $.get(url)
  .success(function(todos){


    var $todos = todos.map(function(todo){
      var $todo = $('#template').clone();
      $todo.removeAttr('id');
      $todo.find('.desc').text(todos.desc);
      $todo.find('.dueDate').text($todos)
      $todo.find('input').prop('checked', todo.isComplete);
      return $todo;

    })

    $('#todoTable').append($todos);

  })
}


function  addTask(){
  var task = $('#task').val();
  console.log('task ' , task);

  var dueDate = $('#dueDate').val();
  console.log('dueDate ' , dueDate);

  var obj = {task: task, dueDate: dueDate}

  var url = '/todos'
  $.post(url, obj)
  .success(function(todos){





  })


}




//   $.ajax({
//     method: 'POST',
//     url: '/names',
//     data: {
//       newName: name
//     },
//     success: function(data){
//       console.log('data ' , data);

//     },
//     error: function(err){

//     }
//   });
// }