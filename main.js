import {showSection, toggle, switchToggle} from './modules/functions';
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
document.getElementById('on').addEventListener('click', ()=>{
    switchToggle(namesOfAudio);
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
let counter = 0;
let arrayOfCards = document.querySelectorAll('.cards-item-section');
for (let div of arrayOfCards) {
    div.addEventListener('click', (e)=>{
        if(!document.getElementById('on').checked){
                if(document.querySelector('.active-button').classList.contains('repeat-active')){
                            if(e.target.firstElementChild.firstElementChild.firstElementChild.innerHTML === namesOfAudio[i]){
                            let audioCorrect = new Audio(`audio/correct.mp3`);
                            audioCorrect.play();
                            i++;
                            if(i < 8){
                                let audioElement = new Audio(`audio/${namesOfAudio[i]}.mp3`);
                                setTimeout(function() {
                                    audioElement.play();
                                }, 1000);
                            }
                            e.target.style.opacity = '0.6';
                            e.target.style.pointerEvents = 'none';
                            e.target.parentNode.parentNode.firstElementChild.innerHTML +='<img src="img/star-win.svg" class="star-play-win"></img>';
                            if(i === 8){
                                i = 0;
                                e.target.parentNode.parentNode.firstElementChild.innerHTML = '';
                                document.querySelector('.switch-toggle').style.display = 'none';
                                document.getElementById('on').checked = true;
                                e.target.parentNode.parentNode.style.display = 'none';
                                if(counter === 0){
                                    document.querySelector('.win').style.display = 'flex';
                                    let audioWin = new Audio('audio/success.mp3');
                                    audioWin.play();
                                } else {
                                    document.querySelector('.failure').style.display = 'flex';
                                    document.querySelector('.failure span').innerHTML += `${counter} errors`; 
                                    let audioLose = new Audio('audio/failure.mp3');
                                    audioLose.play();
                                }
                                counter = 0;
                                setTimeout(function() {
                                    document.querySelector('.win').style.display = 'none';
                                    document.querySelector('.failure').style.display = 'none';   
                                    switchToggle(namesOfAudio);
                                    e.target.parentNode.parentNode.style.display = 'flex';
                                    document.querySelector('.switch-toggle').style.display = 'block';
                                    e.target.parentNode.style.display = 'flex';
                                    arrayOfCards.forEach((e)=>{
                                        e.style.opacity = '1';
                                        e.style.pointerEvents = 'all';
                                    });
                                }, 2500);
                                
                            }
                        } else {
                            let audioError = new Audio(`audio/error.mp3`);
                            audioError.play();
                            counter++;
                            e.target.parentNode.parentNode.firstElementChild.innerHTML +='<img src="img/star.svg" class="star-play"></img>'
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
        }
    });
}