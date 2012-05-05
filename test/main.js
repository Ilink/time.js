
$(document).ready(function(){

    var timeline = new Timeline({
        tickrate: 1,
        fastest: function(dt, frames){ // render loop goes here
            $('#monitor').append(dt + "<br/>");
        },
        controlled: function(dt, frames){ // render loop goes here
//            $('#monitor').append(frames + "<br/>");
        }
    });

    $("#start").click(function(){
        timeline.start();
    });

    $("#stop").click(function(){
        timeline.stop();
    });

});