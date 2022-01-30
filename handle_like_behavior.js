
window.onclick = function (e) {

    var elemento = e.target;

    if ( elemento.classList.contains("likeable") ){

        elemento.classList.toggle("liked");

        if (elemento.name == "heart"){
            elemento.name = "heart-outline";
        } else if (elemento.name == "heart-outline") {
            elemento.name = "heart";
        }
        
    }

}