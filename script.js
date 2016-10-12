$(document).ready(function() {
    // Create new task
    $('button.task-create').click(function() {
      /// This is where I am up to .... (not documented yet) ///
      var taskTitle = $('input[placeholder=Title]').val();
        $('div.task-list#active').append(taskTitle).addClass('task-header');
        



        return false;
    });

    // Complete task
    $('button.task-complete').click(function() {
      var complete = $(this).parent();
        $(this).parent().parent().next().append(complete);
        $(this).parent().addClass('complete');
        $(this).html("uncomplete");        
    });

    // Uncomplete a task


    // Delete task
    $('button.task-delete').click(function() {
        $(this).parent().fadeOut('fast');
    });


});