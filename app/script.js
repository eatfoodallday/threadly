var main = function(){
    //making old stuff load onto the page
     $.ajax({
            url: '/comments',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                for(var k = 0; k < data.length; k++){
                    var html = $('<li>').text(data[k].comment);
                    html.prependTo('#comments'); 
                }
            }
        });
    
    
    $('form').submit(function(event) { //select form elements and attaches event to it
        var $input = $(event.target).find('input'); //stores input into this variable
        var comment = $input.val(); //puts into a comment
        
        if(comment != ""){
            var html = $('<li>').text(comment); //when not empty, create new li and put comment into it
            html.prependTo('#comments'); //prepend to ul list
            $input.val("");
        }
        
        //connect frontend to middlewear
        $.ajax({
            url: '/comments',
            type: 'POST',
            dataType: 'json',
            data: comment 
        });
        
        return false;
    });
}

$(document).ready(main); //when doc is ready call main function above