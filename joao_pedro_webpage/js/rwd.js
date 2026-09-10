
        //  find two elements (button open menu & side menu)
        // create variables     
        // create event handler for menu button of nav bar  
        // change class 'menu-onside' from close to open 
        var buttonOpenMenu = document.getElementById("button-open-menu"); 
        var sideMenu = document.getElementById("sidemenu")
        var closeSidemenu = document.getElementById("close-sidemenu")
    
        
        buttonOpenMenu.addEventListener("click", function () {
            
            sideMenu.classList.add("open")
            sideMenu.classList.remove("close") 
            })
        
        closeSidemenu.addEventListener("click", function() {
            sideMenu.classList.add("close")
            sideMenu.classList.remove("open")
        })
