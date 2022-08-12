//about me tab
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//side menu
const sideMenu = document.getElementById("sidemenu");

function openmenu(){
    sideMenu.style.right = "0";
}

function closemenu(){
    sideMenu.style.right = "-200px";
}