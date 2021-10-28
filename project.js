if(localStorage.getItem('theme')=='light'){
    document.body.style.backgroundColor = "#E0DAE9" 
    const dark = document.querySelectorAll(".text")
    for(let i = 0;i<dark.length;i++){
        dark[i].classList.toggle("dark_text")
    }
}