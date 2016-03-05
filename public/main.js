'use strict'

$(document).ready(init);
var $trTemplate;

function init(){
  getAllTodos();
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

   $('#todoTable').html(trs);


 })
  .error(function(err){
    console.log(err);
  });
}


function  addTask(){
  var task = $('#task').val();
  var dueDate = $('#dueDate').val();
  var obj = {task: task, dueDate: dueDate}
  var url = '/todos'
  $.post(url, obj)
  .success(function(todos){
    getAllTodos()
  })
  .error(function(err){
    console.log(err);
  });
}

function deleteTask(){
 var index = $(this).closest('tr').data('index')
 var url =`/todos/delete/${index}`;
 $.ajax({
  method: 'DELETE',
  url: url,
  data: {
    index: index
  },
  success: function(data){


  },
  error: function(err){

  }
});
}

