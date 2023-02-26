function clicked(){
    const vetorVermelho = document.querySelector(".triangulo-vermelho");
    const vetorBranco = document.querySelector(".triangulo-branco");
    const btn = document.querySelector(".btn")

    vetorVermelho.style= ` -webkit-animation-name:moveToRight;
    -webkit-animation-duration:3s;
    -webkit-animation-iteration-count:1;
    -webkit-animation-delay:0.5s;
    -webkit-animation-fill-mode: forwards;`;
    vetorBranco.style =` -webkit-animation-name:moveToLeft;
    -webkit-animation-duration:3s;
    -webkit-animation-iteration-count:1;
    -webkit-animation-delay:0.5s;
    -webkit-animation-fill-mode: forwards;`;
    btn.style.display='none';
}

//oi :D





