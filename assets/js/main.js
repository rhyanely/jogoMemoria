// DEFININDO VARIAVEIS COM ELEMENTOS DO INDEX

const imagem = document.querySelectorAll('img');
const espacoImg = document.querySelectorAll('.col-2')
const button = document.querySelector('.btn');
let containerImg = document.querySelectorAll('.imgContainer')


// AJUSTANDO TAMANHO DAS IMAGENS

imagem.forEach((imagem, index) => {

    imagem.style.maxWidth='150px';
    imagem.style.maxHeight='150px';

});

// AJUSTANDO CSS DAS DIVISÕES DE CADA IMAGEM 

espacoImg.forEach((espacoImg, index) => {

    espacoImg.style='width: 150px';
    espacoImg.style='Height:150px';
    espacoImg.style.backgroundColor='gray';
    espacoImg.style.borderRadius='20px';
    
});

// INSERINDO A FUNCIONALIDADE DO BOTÃO 

button.addEventListener("click", function(){

    imagem.forEach((imagem, index) => {
        imagem.classList.add('d-none');
    });

});

let checkoutImgPrimary;
let checkoutImgSecondary;
let i=1;

containerImg.forEach(img => {
    img.addEventListener('click', () => { //evento de click é adionada pra cara elemento

        checkoutImgPrimary = imagem[img.id-1] //checkoutImgPrimary é igual a div imagem

        imagem[img.id-1].classList.remove('d-none'); //remove classe da imagem, para quando o evento de click ser acionado, ela será exibida de acordo com a sua div
        

        function delay() {
            
            if (checkoutImgPrimary.src != checkoutImgSecondary.src) { //quando o atributo da imagem checkoutImgPrimary for diferente do atributo da imagem checkoutImgSecondary, as respectivas irão desaparecer
                checkoutImgPrimary.classList.add('d-none');
                checkoutImgSecondary.classList.add('d-none');
            }
        }

        if (i == 1) {
            checkoutImgSecondary = checkoutImgPrimary
        }

        if (i == 2) {
            setTimeout(delay, 1000); // chama a function e faz com que tal demore 1 segundo para ser executada, assim não fazendo a imagem desaparecer de uma vez na hora de clicar

            i=0;
        }

            

        i++ //contador para que as ações ocorram nos conformes
    })
    
});

// INSERINDO FUNCIONALIDADE AO CLICAR NA IMAGEM



    
    

