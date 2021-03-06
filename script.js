const btnMobile = document.getElementById('btn-mobile'); //variavel constante 'btnMobile' recebe o id='btn-mobile' do buttun do html//

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

document.querySelector("#block").addEventListener("wheel", event =>{
    if(event.deltaY > 0){
        event.target.scrollBy(100, 0)
    } else{
        event.target.scrollBy(-100, 0)
    }
})