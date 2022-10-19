const body = document.querySelector('body')

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

//------------------Scroll--------------------------

const about = document.querySelector('.about');
const volunteers = document.querySelector('.volunteers');
const org = document.querySelector('.org');

window.addEventListener('scroll', triggerCheck);

triggerCheck()

function triggerCheck() {
    const trigger = window.pageYOffset;
      if(trigger <= 500) {
        about.classList.remove('hide-up');
        volunteers.classList.add('hide-down');
        volunteers.classList.remove('hide-up');
        org.classList.add('hide-down');
      } else if (500 <= trigger && trigger <= 1000){
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.remove('hide-up');
        org.classList.add('hide-down'); 
      } else if (1000 <= trigger && trigger <= 1500){
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.add('hide-up');
        org.classList.remove('hide-down');
      } else  {
        about.classList.add('hide-up');
        volunteers.classList.remove('hide-down');
        volunteers.classList.add('hide-up');
        org.classList.remove('hide-down');
      }
} 

const backarrow = document.querySelectorAll('.back-arrow')

//everybody

const everyBodyBtn = document.getElementById('everybody-btn-img')
const everyBody = document.querySelector('.everybody')

everyBodyBtn.onclick = ()=>{
  org.classList.add('hide-left')
  body.style.overflow = "hidden"
  everyBody.classList.remove('hide-right')
}

backarrow[0].onclick = ()=>{
  org.classList.remove('hide-left')
  body.style.overflow = "visible"
  everyBody.classList.add('hide-right')
}

//Phoenix

const chickenStripBtn = document.getElementById('chick-strips-btn-img')
const chickenStrip = document.querySelector('.chick-strips')

chickenStripBtn.onclick = ()=>{
  org.classList.add('hide-left')
  body.style.overflow = "hidden"
  chickenStrip.classList.remove('hide-right')
}



backarrow[1].onclick = ()=>{
  org.classList.remove('hide-left')
  body.style.overflow = "visible"
  chickenStrip.classList.add('hide-right')
}

//pzh

const pzhbtn = document.getElementById('p-zh-btn-img')
const pzh = document.querySelector('.povernys-zhyvym')

pzhbtn.onclick = ()=>{
  org.classList.add('hide-left')
  body.style.overflow = "hidden"
  pzh.classList.remove('hide-right')
}



backarrow[2].onclick = ()=>{
  org.classList.remove('hide-left')
  body.style.overflow = "visible"
  pzh.classList.add('hide-right')
}

//SOS

const SOSBtn = document.getElementById('SOS-btn-img')
const SOS = document.querySelector('.SOS')

SOSBtn.onclick = ()=>{
  org.classList.add('hide-left')
  body.style.overflow = "hidden"
  SOS.classList.remove('hide-right')
}



backarrow[3].onclick = ()=>{
  org.classList.remove('hide-left')
  body.style.overflow = "visible"
  SOS.classList.add('hide-right')
}

//patriot

const patriotBtn = document.getElementById('patriot-btn-img')
const patriot = document.querySelector('.patriot')

patriotBtn.onclick = ()=>{
  org.classList.add('hide-left')
  body.style.overflow = "hidden"
  patriot.classList.remove('hide-right')
}



backarrow[4].onclick = ()=>{
  org.classList.remove('hide-left')
  body.style.overflow = "visible"
  patriot.classList.add('hide-right')
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