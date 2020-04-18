//menu
function toggle(){
    document.getElementById('hide-menu').classList.toggle('nav-modal-open');
    document.querySelector('.menu-btn').classList.toggle('menu-btn-active');
}
document.querySelector('.menu-btn').addEventListener('click', () =>{
    toggle();
});
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == document.getElementById('hide-menu') || document.getElementById('hide-menu').contains(target);
    const its_btnMenu = target == document.querySelector('.menu-btn');
    const its_btn = target == document.querySelector('.btn');
    const menu_is_active = document.getElementById('hide-menu').classList.contains('nav-modal-open'); 
    if (!its_btn && !its_menu && !its_btnMenu && menu_is_active) {
        toggle();
    }
});
//switch-toggle
document.getElementById('on').addEventListener('click', ()=>{
    if(document.getElementById('on').checked){
        document.getElementById('hide-menu').classList.remove('nav-play');
        document.getElementById('hide-menu').classList.add('nav-train');
        document.querySelectorAll('.cards-item').forEach((e)=>{
            e.classList.toggle('cards-item-play');
        })
        
    } else {
        document.getElementById('hide-menu').classList.remove('nav-train');
        document.getElementById('hide-menu').classList.add('nav-play');
        document.querySelectorAll('.cards-item').forEach((e)=>{
            e.classList.toggle('cards-item-play');
        })
    }
});
//card flip
let btns = document.querySelectorAll('.rotate');
for (let btn of btns) {
    btn.addEventListener('click', (e) =>{
      if(!e.target.parentNode.parentNode.classList.contains('active')){
        document.querySelectorAll('.card').forEach( (e) => {
            e.classList.remove('active');
        });
        e.target.parentNode.parentNode.classList.add('active');
        if(e.target.parentNode.parentNode.classList.contains('active')){
            e.target.parentNode.parentNode.style.transform = 'rotateY(180deg)';
            e.target.parentNode.parentNode.parentNode.lastElementChild.style.transform = 'rotateY(360deg)';
        }
      }
    });
  }
let arrayOfDivs = document.querySelectorAll('.back');
for (let div of arrayOfDivs) {
    div.addEventListener('mouseout', (e)=>{
        e.target.parentNode.firstElementChild.style.transform = 'rotateY(0deg)';
        e.target.style.transform = 'rotateY(180deg)';
        document.querySelectorAll('.cards-item-section').forEach( (e) => {e.classList.remove('active')});
    });
}

//links
document.querySelectorAll('.cards').forEach((e) =>{
    if(!e.classList.contains('active-cards')){
        e.style.display = "none";
    }
});
let links = document.querySelectorAll('.link');
for (let link of links) {
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        links.forEach( (e) =>{
            e.classList.remove('active-link');
        });
        e.target.classList.add('active-link');
        switch (e.target.getAttribute('href')) {
            case 'Home':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('Home').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break;
            case 'ActionA':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('ActionA').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break;
            case 'ActionB':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('ActionB').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break;  
            case 'ActionC':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('ActionC').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break;
            case 'Adjective':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('Adjective').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break; 
            case 'AnimalA':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('AnimalA').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break;
            case 'AnimalB':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('AnimalB').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break;
            case 'Clothes':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('Clothes').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break; 
            case 'Emotions':
                document.querySelectorAll('.cards').forEach((e) =>{
                    e.classList.remove('active-cards');
                });
                document.getElementById('Emotions').classList.add('active-cards');
                document.querySelectorAll('.cards').forEach((e) =>{
                    if(!e.classList.contains('active-cards')){
                        e.style.display = "none";
                    } else {
                        e.style.display = "flex";
                    }
                });
                break;                
            default:
                break;
        }
        toggle();
    });
}
