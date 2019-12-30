$(function(){
    $(".confirm-follow").click(function(e){
        e.preventDefault();
        
        var dataNote = $(this).attr("data-note"); 
        if (!dataNote.lenth){
            dataNote = "Are you sure?";
        }
        if (confirm(dataNote)){
            // perform default
        }
    });
});