function startLoader(elem, note){
    if (typeof(note) == "undefined"){
        note = "Loading, please wait...";
    }
    var loadBlock = document.createElement("div"); 
    var loadText = document.createElement("p"); 
    
    $(loadText).addClass("loading-text").html(note); 
    $(loadBlock).addClass("loading-block").append(loadText); 
    
    $(elem).addClass("loading-element").append(loadBlock);
}

function stopLoader(elem){
    $(elem).removeClass("loading-element").children(".loading-block").remove();
}