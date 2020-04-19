import {showSection, toggle} from './modules/functions';
//menu
document.querySelector('.menu-btn').addEventListener('click', () =>{
    toggle();
});
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == document.getElementById('hide-menu') || document.getElementById('hide-menu').contains(target);
    const its_btnMenu = target == document.querySelector('.menu-btn');
    const its_btn = target == document.querySelector('.btn');
    const menu_is_active = document.getElementById('hide-menu').classList.contains('nav-modal-open'); 
    if (!its_btn && !its_menu && !its_btnMenu && menu_is_active) toggle();
});
//switch-toggle
let namesOfAudio = [];
document.getElementById('on').addEventListener('click', (elem)=>{
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
        for(let name of document.querySelectorAll('.active-cards .card .cards-item-section .front .bottom-line span')){
            namesOfAudio.push(name.innerHTML);
        }
        namesOfAudio = namesOfAudio.sort(() => Math.random() - 0.5);
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
let arrayOfBacks = document.querySelectorAll('.back');

for (let div of arrayOfBacks) {
    div.addEventListener('mouseout', (e)=>{
        e.target.parentNode.firstElementChild.style.transform = 'rotateY(0deg)';
        e.target.style.transform = 'rotateY(180deg)';
        document.querySelectorAll('.cards-item-section').forEach( (e) => {e.classList.remove('active')});
    });
}
document.querySelectorAll('.cards').forEach((e) =>{
    if(!e.classList.contains('active-cards')) e.style.display = "none";
});
//audio
let i = 0;
let arrayOfCards = document.querySelectorAll('.cards-item-section');
for (let div of arrayOfCards) {
    div.addEventListener('click', (e)=>{
        if(!document.getElementById('on').checked){
                if(document.querySelector('.active-button').classList.contains('repeat-active')){
                        if(i === 7) i = 0;
                        if(e.target.firstElementChild.firstElementChild.firstElementChild.innerHTML === namesOfAudio[i]){
                            let audioCorrect = new Audio(`audio/correct.mp3`);
                            audioCorrect.play();
                            i++
                            let audioElement = new Audio(`audio/${namesOfAudio[i]}.mp3`);
                            setTimeout(function() {
                                audioElement.play();
                              }, 1000);
                        } else {
                            let audioError = new Audio(`audio/error.mp3`);
                            audioError.play();
                        }
                }
        } else if(document.getElementById('on').checked) {
            let cardName = e.target.firstElementChild.firstElementChild.firstElementChild.innerHTML;
                let audioElement = new Audio(`audio/${cardName}.mp3`);
                audioElement.play(); 
        }
    });
}
//link
function followLink(array, attribute){
    for (let elem of array) {
        elem.addEventListener('click', (e)=>{
            e.preventDefault();
            links.forEach((e) =>{
                e.classList.remove('active-link');
            });
            if(!document.getElementById('on').checked && array === links && document.querySelector('.active-cards').id !== 'Home'){
                document.querySelector('.active-button').classList.add('button');
                document.querySelector('.active-button').classList.remove('repeat-active');
                document.querySelectorAll('.button span').forEach((e) =>{
                    e.style.display = 'flex';
                });
                document.querySelectorAll('.repeat').forEach((e) =>{
                    e.style.display = 'none';
            });
            }
            if (array === cards) links[array.indexOf(elem) + 1].classList.add('active-link');
            else e.target.classList.add('active-link');
            showSection(e.target.getAttribute(attribute));
            toggle();
            namesOfAudio = [];
            for(let name of document.querySelectorAll('.active-cards .card .cards-item-section .front .bottom-line span')){
                namesOfAudio.push(name.innerHTML);
            }
            namesOfAudio = namesOfAudio.sort(() => Math.random() - 0.5);
            if(document.getElementById('on').checked && document.querySelector('.active-cards').id !== 'Home') document.querySelector('.active-button').style.display = 'none';
            else if(e.target.getAttribute(attribute) !== 'Home') document.querySelector('.active-button').style.display = 'flex';
            
        });
    }
  }

let links = document.querySelectorAll('.link');
let cards = [].slice.call(document.querySelectorAll('.cards-item'));
followLink(links, 'href');
followLink(cards, 'data');



//game

for (let button of document.querySelectorAll('.cards-section')) {
    button.lastElementChild.addEventListener('click', (e) =>{
        if(document.querySelector('.active-cards').id !== 'Home'){
            document.querySelectorAll('.button span').forEach((e) =>{
                e.style.display = 'none';
            })
            e.target.classList.remove('button');
            e.target.classList.add('repeat-active');
            document.querySelectorAll('.repeat').forEach((e) =>{
                e.style.display = 'block';
            });
            let audioElement = new Audio(`audio/${namesOfAudio[i]}.mp3`);
            audioElement.play();
            console.log(document.querySelectorAll('.active-cards .card .cards-item-section .front .bottom-line span'));
            console.log(namesOfAudio);
        }
    });
}