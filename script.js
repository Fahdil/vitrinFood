document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector("#menu-bar");
    let navbar = document.querySelector(".navbar");

    if (menu && navbar) {
        menu.onclick = () => {
            menu.classList.toggle("fa-times"); // Change l'icône
            navbar.classList.toggle("active"); // Active/désactive le menu
        };
    } else {
        console.error("L'élément #menu-bar ou .navbar est introuvable !");
    }

    Window.onscroll= () => {
        menu.classList.remove("fa-times"); // Change l'icône
        navbar.classList.remove("active"); // Active/désactive le menu

        if(window.scrollY > 60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }


    }

    function loader() {
        document.querySelector('.loader-container').classList.add('fade-out');
    }
    
    function fadeOut() {
        setInterval(loader, 2000);
    }

    window.onload =fadeOut();



        const toggleButton = document.getElementById("toggle-theme");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Mode Clair";
        } else {
            toggleButton.textContent = "Mode Sombre";
        }
    });




    

});


