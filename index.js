const menu = document.querySelector(".menu")
const navEle = document.querySelector(".menu_elements")
const img = document.querySelector("#menu_img")
const dark_btn = document.querySelector(".dark_btn")
const light_btn = document.querySelector(".light_btn")

menu.addEventListener("click",e=>{
    if(navEle.style.display=="flex" ){
        return navEle.style.display="none"
    }
    return navEle.style.display="flex"
      
})
window.addEventListener("click",e =>{

       try {
        if (e.path[0].id !== 'menu_img' && navEle.style.display=="flex") {
                return navEle.style.display="none" 
        }
      } catch (err) {
        if (e.target.id !== 'menu_img' && navEle.style.display=="flex") {
            return navEle.style.display="none" 
    }
        }

})

const toggle_func = () => {
    const body =document.querySelector("body")
    body.classList.toggle("light_body")
    
    const hero = document.querySelector(".hero-ele")
    hero.classList.toggle("light_hero")

    const nav = document.querySelector("nav")
    nav.classList.toggle("light_nav")

    const project = document.querySelector(".project-ele")
    project.classList.toggle("light_project")

    const about = document.querySelector(".about_me")
    about.classList.toggle("light_about")

    const skill = document.querySelector(".skills")
    skill.classList.toggle("light_skill")

    const education = document.querySelector(".education")
    education.classList.toggle("light_education")

    const contact = document.querySelector(".contact")
    contact.classList.toggle("light_contact")

    const footer = document.querySelector("footer")
    footer.classList.toggle("light_footer")

    const copy = document.querySelector(".copyright")
    copy.classList.toggle("light_copyright")

    const toggle = document.querySelector(".toggle")
    toggle.classList.toggle("light_toggle")
}

dark_btn.addEventListener("click", e=>{
    toggle_func()
    light_btn.disabled = false
    dark_btn.disabled = true 
    localStorage.setItem('theme' , 'dark')
})

light_btn.addEventListener("click", e=>{
    toggle_func()
    dark_btn.disabled = false
    light_btn.disabled = true 
    localStorage.setItem('theme' , 'light')
})

