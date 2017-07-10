document.addEventListener("DOMContentLoaded", function (event) {
   
    var ham = document.getElementById("ham");

    ham.addEventListener('click', function () { 
        var okno = document.getElementById("nie");
        okno.classList.toggle("widoczny");
    });
});

