// Art images
const next =document.getElementById('next');
const prev =document.getElementById('prev');
const images =document.querySelector('.images-container');

const first_card_clone = images.children[0].cloneNode(true);
const last_card_clone = images.children[images.children.length-1].cloneNode(true);

images.insertBefore(last_card_clone, images.children[0]);
images.appendChild(first_card_clone);

images.style.transitionDuration ="0s";
images.style.transform = `translate(-415px)`;

let current_card = 1;

next.addEventListener('click', () =>{
    if (current_card < images.children.length - 1){
        current_card++;
        images.style.transitionDuration ="0.5s";
        images.style.transform = `translate(-${current_card * 415}px)`;

            if(current_card === images.children.length -1){
                setTimeout(()=>{
                    images.style.transitionDuration ="0s";
                    images.style.transform = `translate(-415px)`;
                    current_card = 1;
                }, 600);
                    
                }
        } else {
            return;
        }
    });

prev.addEventListener('click', () =>{
    if (current_card > 0){
        current_card--;
        images.style.transitionDuration ="0.5s";
        images.style.transform = `translate(-${current_card * 415}px)`;

            if(current_card === 0){
                setTimeout(()=>{
                    images.style.transitionDuration ="0s";
                    images.style.transform = `translate(-${(images.children.length - 2) * 415}px)`;
                    current_card = images.children.length - 2;
                }, 600);
                    
            }
        
        } else {
                return;
    }
});

// website preview images
// const nextWorks =document.getElementById('nextWorks');
// const prevWorks =document.getElementById('prevWorks');


const nextWorks =document.getElementById('nextWorks');
const prevWorks =document.getElementById('prevWorks');
const imagesWorks =document.querySelector('.images-containerWorks');
let imageLength = 1030;

const first_card_cloneWorks = imagesWorks.children[0].cloneNode(true);
const last_card_cloneWorks = imagesWorks.children[imagesWorks.children.length-1].cloneNode(true);

imagesWorks.insertBefore(last_card_cloneWorks, imagesWorks.children[0]);
imagesWorks.appendChild(first_card_cloneWorks);

imagesWorks.style.transitionDuration ="0s";
imagesWorks.style.transform = `translate(-${imageLength}px)`;

let current_cardWorks = 1;


nextWorks.addEventListener('click', () =>{
    if (current_cardWorks < imagesWorks.children.length - 1){
        current_cardWorks++;
        imagesWorks.style.transitionDuration ="0.5s";
        imagesWorks.style.transform = `translate(-${current_cardWorks * imageLength}px)`;

            if(current_cardWorks === imagesWorks.children.length -1){
                setTimeout(()=>{
                    imagesWorks.style.transitionDuration ="0s";
                    imagesWorks.style.transform = `translate(-${imageLength}px)`;
                    current_cardWorks = 1;
                }, 600);
                    
                }
        } else {
            return;
        }
    });

prevWorks.addEventListener('click', () =>{
    if (current_cardWorks > 0){
        current_cardWorks--;
        imagesWorks.style.transitionDuration ="0.5s";
        imagesWorks.style.transform = `translate(-${current_cardWorks * imageLength}px)`;

            if(current_cardWorks === 0){
                setTimeout(()=>{
                    imagesWorks.style.transitionDuration ="0s";
                    imagesWorks.style.transform = `translate(-${(imagesWorks.children.length - 2) * imageLength}px)`;
                    current_cardWorks = imagesWorks.children.length - 2;
                }, 600);
                    
            }
        
        } else {
                return;
    }
});



const nextWorksTwo =document.getElementById('nextWorksTwo');
const prevWorksTwo =document.getElementById('prevWorksTwo');
const imagesWorksTwo =document.querySelector('.images-containerWorksTwo');
let imageLengthTwo = 1030;

const first_card_cloneWorksTwo = imagesWorksTwo.children[0].cloneNode(true);
const last_card_cloneWorksTwo = imagesWorksTwo.children[imagesWorksTwo.children.length-1].cloneNode(true);

imagesWorksTwo.insertBefore(last_card_cloneWorksTwo, imagesWorksTwo.children[0]);
imagesWorksTwo.appendChild(first_card_cloneWorksTwo);

imagesWorksTwo.style.transitionDuration ="0s";
imagesWorksTwo.style.transform = `translate(-${imageLengthTwo}px)`;

let current_cardWorksTwo = 1;


nextWorksTwo.addEventListener('click', () =>{
    if (current_cardWorksTwo < imagesWorksTwo.children.length - 1){
        current_cardWorksTwo++;
        imagesWorksTwo.style.transitionDuration ="0.5s";
        imagesWorksTwo.style.transform = `translate(-${current_cardWorksTwo * imageLengthTwo}px)`;

            if(current_cardWorksTwo === imagesWorksTwo.children.length -1){
                setTimeout(()=>{
                    imagesWorksTwo.style.transitionDuration ="0s";
                    imagesWorksTwo.style.transform = `translate(-${imageLengthTwo}px)`;
                    current_cardWorksTwo = 1;
                }, 600);
                    
                }
        } else {
            return;
        }
    });

prevWorksTwo.addEventListener('click', () =>{
    if (current_cardWorksTwo > 0){
        current_cardWorksTwo--;
        imagesWorksTwo.style.transitionDuration ="0.5s";
        imagesWorksTwo.style.transform = `translate(-${current_cardWorksTwo * imageLengthTwo}px)`;

            if(current_cardWorksTwo === 0){
                setTimeout(()=>{
                    imagesWorksTwo.style.transitionDuration ="0s";
                    imagesWorksTwo.style.transform = `translate(-${(imagesWorksTwo.children.length - 2) * imageLengthTwo}px)`;
                    current_cardWorksTwo = imagesWorksTwo.children.length - 2;
                }, 600);
                    
            }
        
        } else {
                return;
    }
});




const nextWorksThree =document.getElementById('nextWorksThree');
const prevWorksThree =document.getElementById('prevWorksThree');
const imagesWorksThree =document.querySelector('.images-containerWorksThree');
let imageLengthThree = 1030;

const first_card_cloneWorksThree = imagesWorksThree.children[0].cloneNode(true);
const last_card_cloneWorksThree = imagesWorksThree.children[imagesWorksThree.children.length-1].cloneNode(true);

imagesWorksThree.insertBefore(last_card_cloneWorksThree, imagesWorksThree.children[0]);
imagesWorksThree.appendChild(first_card_cloneWorksThree);

imagesWorksThree.style.transitionDuration ="0s";
imagesWorksThree.style.transform = `translate(-${imageLengthThree}px)`;

let current_cardWorksThree = 1;


nextWorksThree.addEventListener('click', () =>{
    if (current_cardWorksThree < imagesWorksThree.children.length - 1){
        current_cardWorksThree++;
        imagesWorksThree.style.transitionDuration ="0.5s";
        imagesWorksThree.style.transform = `translate(-${current_cardWorksThree * imageLengthThree}px)`;

            if(current_cardWorksThree === imagesWorksThree.children.length -1){
                setTimeout(()=>{
                    imagesWorksThree.style.transitionDuration ="0s";
                    imagesWorksThree.style.transform = `translate(-${imageLengthThree}px)`;
                    current_cardWorksThree = 1;
                }, 600);
                    
                }
        } else {
            return;
        }
    });

prevWorksThree.addEventListener('click', () =>{
    if (current_cardWorksThree > 0){
        current_cardWorksThree--;
        imagesWorksThree.style.transitionDuration ="0.5s";
        imagesWorksThree.style.transform = `translate(-${current_cardWorksThree * imageLengthThree}px)`;

            if(current_cardWorksThree === 0){
                setTimeout(()=>{
                    imagesWorksThree.style.transitionDuration ="0s";
                    imagesWorksThree.style.transform = `translate(-${(imagesWorksThree.children.length - 2) * imageLengthThree}px)`;
                    current_cardWorksThree = imagesWorksThree.children.length - 2;
                }, 600);
                    
            }
        
        } else {
                return;
    }
});