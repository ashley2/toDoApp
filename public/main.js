'use strict'

$(document).ready(init);

function init(){
  getAllTodos();
  $('#addName').click(addName);
}


function getAllTodos(todos){
  var url = '/todos';
  $.get(url)
  .success(function(todos){


    var $todos = todos.map(function(todo){
      var $todo = $('#template').clone();
      $todo.removeAttr('id');
      $todo.find('.desc').text(todo.desc);
      $todo.find('.dueDate').text($todos)
      $todo.find('input').prop('checked', todo.isComplete);
      return $todo;

    })

    $('#todoTable').append($todos);

  })
}


function  addName(){
  var name =$('#newName').val();
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