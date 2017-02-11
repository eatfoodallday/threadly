var main = function(){
    $('form').submit(function(event) { //select form elements and attaches event to it
        var $input = $(event.target).find('input'); //stores input into this variable
        var comment = $input.val(); //puts into a comment
        
        if(comment != ""){
            var html = $('<li>').text(comment); //when not empty, create new li and put comment into it
            html.prependTo('#comments'); //prepend to ul list
            $input.val("");
        }
        return false;
    }); 
}

$(document).ready(main); //when doc is ready call main function above