export function showSection(id){
  document.querySelectorAll('stars').forEach((e) =>{
    e.classList.remove('active-stars');
  });
  document.querySelectorAll('.cards').forEach((e) =>{
    e.classList.remove('active-cards');
});
  switch (id) {
      case 'Home':
          document.getElementById('Home').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = "none";
              } else {
                  e.style.display = "flex";
              }
          });
          document.querySelectorAll('.button').forEach((e) =>{
            e.classList.remove('active-button');
            e.style.display = 'none';
          });
          break;
      case 'ActionA':
          document.getElementById('ActionA').firstElementChild.classList.add('active-stars');
          document.getElementById('ActionA').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = 'none';
              } else {
                  e.style.display = 'flex';
              }
          });
          changeButtonClass('ActionA');
          break;
      case 'ActionB':
          document.getElementById('ActionB').firstElementChild.classList.add('active-stars');
          document.getElementById('ActionB').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = 'none';
              } else {
                  e.style.display = 'flex';
              }
          });
          changeButtonClass('ActionB');
          break;  
      case 'ActionC':
          document.getElementById('ActionC').firstElementChild.classList.add('active-stars');
          document.getElementById('ActionC').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = "none";
              } else {
                  e.style.display = "flex";
              }
          });
          changeButtonClass('ActionC');
          break;
      case 'Adjective':
          document.getElementById('Adjective').firstElementChild.classList.add('active-stars');
          document.getElementById('Adjective').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = "none";
              } else {
                  e.style.display = "flex";
              }
          });
          changeButtonClass('Adjective');
          break; 
      case 'AnimalA':
          document.getElementById('AnimalA').firstElementChild.classList.add('active-stars');
          document.getElementById('AnimalA').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = "none";
              } else {
                  e.style.display = "flex";
              }
          });
          changeButtonClass('AnimalA');
          break;
      case 'AnimalB':
          document.getElementById('AnimalB').firstElementChild.classList.add('active-stars');
          document.getElementById('AnimalB').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = "none";
              } else {
                  e.style.display = "flex";
              }
          });
          changeButtonClass('AnimalB');
          break;
      case 'Clothes':
          document.getElementById('Clothes').firstElementChild.classList.add('active-stars');
          document.getElementById('Clothes').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = "none";
              } else {
                  e.style.display = "flex";
              }
          });
          changeButtonClass('Clothes');
          break; 
      case 'Emotions':
          document.getElementById('Emotions').firstElementChild.classList.add('active-stars');
          document.getElementById('Emotions').classList.add('active-cards');
          document.querySelectorAll('.cards').forEach((e) =>{
              if(!e.classList.contains('active-cards')){
                  e.style.display = "none";
              } else {
                  e.style.display = "flex";
              }
          });
          changeButtonClass('Emotions');
          break;                
      default:
          break;
  }
}
function changeButtonClass(section){
  document.querySelectorAll('.button').forEach((e) =>{
    e.classList.remove('active-button');
  });
  document.getElementById(section).lastElementChild.classList.add('active-button');
}
export function switchToggle(namesOfAudio){
  if(document.getElementById('on').checked){
    document.getElementById('hide-menu').classList.remove('nav-play');
    document.getElementById('hide-menu').classList.add('nav-train');
    document.querySelectorAll('.cards-item').forEach((e)=>{
        e.classList.toggle('cards-item-play');
    });
    document.querySelectorAll('.cards-item-section').forEach((e)=>{
        e.classList.toggle('cards-item-section-play');
    });
    document.querySelectorAll('.front').forEach((e)=>{
        e.style.display = 'block';
    });
    if(document.querySelector('.active-cards').id !== 'Home'){
        document.querySelector('.active-button').classList.add('button');
        document.querySelector('.active-button').classList.remove('repeat-active');
        document.querySelectorAll('.button span').forEach((e) =>{
            e.style.display = 'flex';
        });
        document.querySelectorAll('.repeat').forEach((e) =>{
            e.style.display = 'none';
        });
        document.querySelector('.active-button').style.display = 'none';
    }
    namesOfAudio = [];
} else {
    document.getElementById('hide-menu').classList.remove('nav-train');
    document.getElementById('hide-menu').classList.add('nav-play');
    document.querySelectorAll('.front').forEach((e)=>{
        e.style.display = 'none';
    });
    document.querySelectorAll('.cards-item').forEach((e)=>{
        e.classList.toggle('cards-item-play');
    });
    document.querySelectorAll('.cards-item-section').forEach((e)=>{
        e.classList.toggle('cards-item-section-play');
    });
    document.querySelector('.active-button').style.display = 'flex';
}
}
export function toggle(){
  document.getElementById('hide-menu').classList.toggle('nav-modal-open');
  document.querySelector('.menu-btn').classList.toggle('menu-btn-active');
  if(document.getElementById('hide-menu').classList.contains('nav-modal-open'))document.body.style.overflow = 'hidden';
  else document.body.style.overflow = '';
}