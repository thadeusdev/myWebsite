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

// google contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOXWsmYvvqBSYCQI4bovosGwJFkk893_BTByp5DMW6mUUJFGxIP025-CRfzxbHFLLOxQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)        
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})

//typing animation
