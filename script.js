$(document).ready(function(){
    function formData(event){
        event.preventDefault();
        var listArray = $('form').serializeArray();
        console.log(listArray);
        var taskInput = listArray[0].value
        $('#to-do-list').append('<li>' + taskInput + "</li>");
        
    }
    });
    

