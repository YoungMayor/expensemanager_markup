$(function(){
    $(".confirm-follow").click(function(e){
        var dataNote = $(this).attr("data-note");
        if (!dataNote.length){
            dataNote = "Are you sure?";
        }
        if (!confirm(dataNote)){
            e.preventDefault();
        }
    });
});