$(".navbar-brand").on("click", function(){
    $(".link").removeClass("linkSelect")
});

$(".link").on("click", function(){
    $(".link").removeClass("linkSelect")
    $(this).addClass("linkSelect");
});


setInterval(cambiarFoto, 4000);
var x = 1;
function cambiarFoto(){
    x++;
    if (x > 7){
        x=1;
    }
    
    $(".imgPortada").attr("src", "images/foto"+x+".jpg");
    
}


// Funcionalidad de botones principales
$("#butPrincipal").on("click", function(){
    $("section").addClass("d-none")
    $("#p1").removeClass("d-none");  
});
$("#butTecnologia").on("click", function(){
    $("section").addClass("d-none")
    $("#pagTecnologia").removeClass("d-none");
});
$("#butProyectos").on("click", function(){
    $("section").addClass("d-none")
    $("#pagProyectos").removeClass("d-none");
});
$("#butNosotros").on("click", function(){
    $("section").addClass("d-none")
    $("#pagNosotros").removeClass("d-none");
});
$("#butContacto").on("click", function(){
    $("section").addClass("d-none")
    $("#pagContacto").removeClass("d-none");
});