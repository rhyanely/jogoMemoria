// DEFININDO VARIAVEIS COM ELEMENTOS DO INDEX

const imagem = document.querySelectorAll('img');
const espacoImg = document.querySelectorAll('.col-2')
const button = document.querySelector('.btn');

// AJUSTANDO TAMANHO DAS IMAGENS
imagem.forEach((imagem, index) => {
    imagem.style.maxWidth='150px';
    imagem.style.maxHeight='150px';
});

// AJUSTANDO DIVISÕES DE CADA IMAGEM 
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


// INSERINDO FUNÇÃO DE CADA IMAGEM
// espacoImg.addEventListener("click", function(){
//     imagem[0].classlist.remove('d-none');
// })


function exibir(numero){
    let imagem = document.getElementById(numero)
    imagem.className='img d-flex'
}
