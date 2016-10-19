$(document).ready(function() {
 // Select date using jQuery date-picker
  $('input#datepicker').mouseover('focus', function() { 
    $(this).datepicker({
      changeMonth: true,  // Allowing user to select month
      changeYear: true    // Allowing user to select from year range
    });
  });

  // Create new task
  $('button.task-create').click(function() {
    var taskTitle = $('input[placeholder=Title]').val();
    var taskDesc = $('textarea[placeholder=Description]').val();
    var taskDate = $('input[id=datepicker]').val();

      //Validator to ensure values are not empty when creating a new task
      if( !taskTitle ) {         
        if( !taskDesc ) { 
          if( !taskDate ) { 
            alert('All values are empty');    
          } else {
          alert('Name & Description are epmty');    
          }  
        } else {
        alert('Name is empty');    
        }
      } else {
        if( !taskDesc ) { 
          if( !taskDate ) { 
            alert('Description and Date are empty');    
          } else {
          alert('Description is empty'); 
          } 
        } else {
          // Create new #todo section
          $('div.task-list#active').append('<div class="todo-task"></div>');
          // Append new values to the section
          $('div.todo-task:last-child').append(
              taskTitle + '<br>' + taskDesc + '<br>' + taskDate + 
              '<br><button class="task-complete">Complete</button>' + 
              '<button class="task-delete">Delete</button>' 
            );
        }
      }

      // Clear 'New task' values once they have been created
      $("#todo-form")[0].reset();

    // Click complete/uncomplete task
    $('button.task-complete').click(function() {     
      $(this).each(function() {
        var myTask = $(this).parent();
        if ( $(this).parents("#active").length == 1 ) { 
          $(this).parent().parent().next().append(myTask);
          $(this).parent().addClass('complete');
          $(this).html("uncomplete"); 
        } else { 
          $(this).parent().parent().prev().append(myTask);
          $(this).parent().removeClass('complete');
          $(this).html("complete"); 
        } 
      });
    });

    // Click delete task
    $('button.task-delete').click(function() {
        $(this).parent().fadeOut('fast');
    }); 

    return false;
  });

});