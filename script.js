$(document).ready(function(){
    function formData(event){
    event.preventDefault()
    var formSerial = $('#task-form').serializeArray();
    $('#to-do-list').append(formSerial);
}

    // $('button').on('click', function(){
    //     var inp = $("input:text").val();
    //     var newItem = $("<li>").text(inp);
    //     var ulElement = $("<ul>");
    //     $('ul').append(li)
    //     $('#to-do-list').append(ulElement);
    // })
    $('button').on('click', function(){
        var inp = $("input:text").val();
        var newItem = $("<li>").text(inp);
        $('ul').append(newItem);
        $('#to-do-list').append($('ul'));
        $("input:text").val('');
    })
    

})