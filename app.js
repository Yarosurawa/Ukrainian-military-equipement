//---------------------Menu---------------------

const sidebar = document.getElementById('sidebar')
const menubtn = document.getElementById('close-menu-btn')
const menuBtnHolder = document.getElementById('close-menu')
const ds = document.getElementById('dark-screen')
let menuOpen = false

menubtn.onclick = function() {
    if(menuOpen) {
        closeMenuFunc()
    } else {
        menuOpen = true
        sidebar.classList.remove("closed")
        menuBtnHolder.classList.remove("btn-closed")
        ds.style.opacity = "0.9"
        ds.style.zIndex = "9"
    }
}

function closeMenuFunc() {
  menuOpen = false
  sidebar.classList.add("closed")
  menuBtnHolder.classList.add("btn-closed")
  ds.style.opacity = "0"
  setTimeout(()=>{ds.style.zIndex = "-1"}, 500)
}

const aboutLink = document.getElementById('about-link');
const volunteersLink = document.getElementById('volunteers-link');
const orgLink = document.getElementById('org-link');
const linksLink = document.getElementById('links-link');

aboutLink.onclick = function() {
    window.scrollTo(0, 250)
    closeMenuFunc()
}
volunteersLink.onclick = function() {
  window.scrollTo(0, 750)
  closeMenuFunc()
}
orgLink.onclick = function() {
  window.scrollTo(0, 1250)
  closeMenuFunc()
}
linksLink.onclick = function() {
  window.scrollTo(0, 1750)
  closeMenuFunc()
}

//------------------Scroll--------------------------



const about = document.querySelector('.about');
const volunteers = document.querySelector('.volunteers');
const org = document.querySelector('.org');
const links = document.querySelector('.links');

const p = document.querySelectorAll('p')
const h1 = document.querySelectorAll('h1')

window.addEventListener('scroll', triggerCheck);

triggerCheck()

function triggerCheck() {
    const trigger = window.pageYOffset;
      if(trigger <= 500) {
        about.classList.remove('hide-up');
        volunteers.classList.add('hide-down');
        volunteers.classList.remove('hide-up');
        org.classList.add('hide-down');
        org.classList.remove('hide-up');
        links.classList.add('hide-down');
        links.classList.remove('hide-up');
      } else if (500 <= trigger && trigger <= 1000){
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.remove('hide-up');
        org.classList.add('hide-down'); 
        org.classList.remove('hide-up'); 
        links.classList.add('hide-down');
        links.classList.remove('hide-up');
      } else if (1000 <= trigger && trigger <= 1500){
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.add('hide-up');
        org.classList.remove('hide-down');
        org.classList.remove('hide-up'); 
        links.classList.add('hide-down');
        links.classList.remove('hide-up');
      } else  {
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.add('hide-up');
        org.classList.remove('hide-down');
        org.classList.add('hide-up'); 
        links.classList.remove('hide-down');
        links.classList.remove('hide-up');
      }
} 

//------------------------Pre-load--------------------------

const loading = document.getElementById("loading")

window.addEventListener("load", ()=>{
  loading.style.opacity = "0"
  setTimeout(()=>{
    loading.remove
    loading.style.zIndex = "-9999"
  }, 1000)
})