//---------------------Menu---------------------

const sidebar = document.getElementById('sidebar')
const menubtn = document.getElementById('close-menu')
let menuOpen = false

menubtn.onclick = function() {
    if(menuOpen) {
        menuOpen = false
        sidebar.classList.add("closed")
        menubtn.classList.add("btn-closed")
    } else {
        menuOpen = true
        sidebar.classList.remove("closed")
        menubtn.classList.remove("btn-closed")
    }
}

//------------------Scroll--------------------------



const about = document.querySelector('.about');
const volunteers = document.querySelector('.volunteers');
const org = document.querySelector('.org');
const links = document.querySelector('.links');
const lists = document.querySelector('.lists');

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
        lists.classList.add('hide-down');
      } else if (500 <= trigger && trigger <= 1000){
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.remove('hide-up');
        org.classList.add('hide-down'); 
        org.classList.remove('hide-up'); 
        links.classList.add('hide-down');
        links.classList.remove('hide-up');
        lists.classList.add('hide-down');
      } else if (1000 <= trigger && trigger <= 1500){
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.add('hide-up');
        org.classList.remove('hide-down');
        org.classList.remove('hide-up'); 
        links.classList.add('hide-down');
        links.classList.remove('hide-up');
        lists.classList.add('hide-down');
      } else if (1500 < trigger && trigger <= 2000) {
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.add('hide-up');
        org.classList.remove('hide-down');
        org.classList.add('hide-up'); 
        links.classList.remove('hide-down');
        links.classList.remove('hide-up');
        lists.classList.add('hide-down');
      } else {
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.add('hide-up');
        org.classList.remove('hide-down');
        org.classList.add('hide-up'); 
        links.classList.remove('hide-down');
        links.classList.add('hide-up');
        lists.classList.remove('hide-down');
      }
} 

//----------------------Navigation-----------------------

const aboutLink = document.getElementById('about-link');
const volunteersLink = document.getElementById('volunteers-link');
const orgLink = document.getElementById('org-link');
const linksLink = document.getElementById('links-link');
const listsLink = document.getElementById('lists-link');

aboutLink.onclick = function() {
    window.scrollTo(0, 250)
}
volunteersLink.onclick = function() {
  window.scrollTo(0, 750)
}
orgLink.onclick = function() {
  window.scrollTo(0, 1250)
}
linksLink.onclick = function() {
  window.scrollTo(0, 1750)
}
listsLink.onclick = function() {
  window.scrollTo(0, 2250)
}