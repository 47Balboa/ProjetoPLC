function imgGrow(name,apelido){
    var modal = document.getElementById("MyModal");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = document.getElementById("1mymodal").src;
    console.log("eSTE E O MODAL IMG: " + modalImg);
    
    captionText.innerHTML = name + " " + apelido
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
}

}

function pesquisa(){
    var text= document.getElementById('inputId');
    console.log("input: " + text);
}