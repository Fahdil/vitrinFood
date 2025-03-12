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




    
    function sendToWhatsApp(event) {
        event.preventDefault(); // Empêche le rechargement de la page
    
        let nom = document.querySelector("input[placeholder='nom']").value;
        let email = document.querySelector("input[placeholder='email']").value;
        let numero = document.querySelector("input[placeholder='numero']").value;
        let foodName = document.querySelector("input[placeholder='food name']").value;
        let address = document.querySelector("textarea").value;
    
        let message = `Bonjour, je voudrais commander :
    - Nom : ${nom}
    - Email : ${email}
    - Téléphone : ${numero}
    - Plat : ${foodName}
    - Adresse : ${address}`;
    
        let phone = "33612345678"; // Remplace par ton numéro WhatsApp
        let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
        window.open(url, "_blank");
    }
    
});


