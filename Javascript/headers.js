const menuButton = document.querySelector(".menu-icon span");
        const cancelButton = document.querySelector(".cancel-btn");
        const navbaritems = document.querySelector(".nav-bar");
        menuButton.onclick = () => {
            navbaritems.classList.add("active");
            menuButton.classList.add("hide");
            cancelButton.classList.add("show");
        }
        
        cancelButton.onclick = () => {
            navbaritems.classList.remove("active");
            menuButton.classList.remove("hide");
            cancelButton.classList.remove("hide");
            cancelButton.classList.remove("show");
        }
        