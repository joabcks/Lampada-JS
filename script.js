const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


//função para verificar se a lampada esta quebrada
//indexOf faz uma busca de uma string dentro de outra string(src) 
//se tiver a palavra, ela retorna um numero maior que -1, caso não encontre, ele retorna -1
function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

// Funções da lâmpada 
// Caso o retorno do isLampBroken naõ esteja quebrada ! executa a função
function lampOn() {
  if (!isLampBroken()) {
    lamp.src = './img/ligada.jpg';
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = './img/desligada.jpg';
  }
}

function lampBroken() {
  lamp.src = './img/quebrada.jpg';
}


// Eventos da lâmpada ao clicar nos botões 
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

// Eventos da lâmpada ao mover o mouse sobre a lâmpada 
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

// Evento da lâmpada quebrada ao acionar duplo click 
lamp.addEventListener('dblclick', lampBroken);



