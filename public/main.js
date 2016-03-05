'use strict'

$(document).ready(init);
var $trTemplate;

function init(){
  // getAllTodos();
  $('#addTask').click(addTask);
  $trTemplate = $('#template').remove();
  $('#todoTable').on('click', '.delete', deleteTask);
}


function getAllTodos(todos){
  var url = '/todos';
  $.get(url)
  .success(function(todos){


   var trs = [];
   todos.forEach(function(todo, i){
    var $tr = $trTemplate.clone();
    $tr.removeAttr('id');
    $tr.find('.desc').text(todo.task);
    $tr.find('.dueDate').text(todo.dueDate)
    $tr.find('input').prop('checked', todo.isComplete);
    $tr.data('index', i)
    trs.push($tr);
  })

   $('#todoTable').append(trs);


    // var $todos = todos.map(function(todo){
    //   var $todo = $('#template').clone();
    //   $todo.removeAttr('id');
    //   $todo.find('.desc').text(todos.task);
    //   $todo.find('.dueDate').text($todo.dueDate)
    //   $todo.find('#checkbox').prop('checked', todo.isComplete);
    //   console.log('todo', todo)
    //   return $todo;

    // })

    // $('#todoTable').append($todos);

  })
  .error(function(err){
    console.log(err);
  });
}


function  addTask(){
  var task = $('#task').val();
  console.log('task ' , task);

  var dueDate = $('#dueDate').val();
  console.log('dueDate ' , dueDate);

  var obj = {task: task, dueDate: dueDate}

  var url = '/todos'
  $.post(url, obj)
  .success(function getAllTodos(){

  })
  .error(function(err){
    console.log(err);
  });
}

function deleteTask(){
 var info = $(this).closest('tr').data('index')
 console.log(info)

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