const menuBtn = document.querySelector(".menu-icon span");
        const cancelButton = document.querySelector(".cancel-btn");
        const navbaritems = document.querySelector(".nav-bar");
        menuBtn.onclick = () => {
            navbaritems.classList.add("active");
            menuBtn.classList.add("hide");
            cancelButton.classList.add("show");
        }
        
        cancelButton.onclick = () => {
            navbaritems.classList.remove("active");
            menuBtn.classList.remove("hide");
            cancelButton.classList.remove("hide");
            cancelButton.classList.remove("show");
            cancelButton.style.color = "#ff3d00";
        }
        