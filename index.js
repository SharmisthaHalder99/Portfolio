const menu = document.querySelector(".menu")
const navEle = document.querySelector(".menu_elements")
const img = document.querySelector("#menu_img")
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
