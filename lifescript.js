function lifeProjeto() { 
const inputElement = document.querySelector(".meuInput")
let inputValor = Number(inputElement.value);
inputElement.value = '';

if (inputValor === 0) { 
  imagemVida.src = "imgs-vida/vida0.png";
} else if (inputValor === 1) { 
  imagemVida.src = "imgs-vida/vida1.png";
} else if (inputValor === 2) { 
  imagemVida.src = "imgs-vida/vida2.png";
} else if (inputValor === 3) { 
  imagemVida.src = "imgs-vida/vida3.png";
} else if (inputValor === 4) { 
  imagemVida.src = "imgs-vida/vida4.png";
} else if (inputValor === 5) { 
  imagemVida.src = "imgs-vida/vida5.png";
} else if (inputValor === 6) { 
  imagemVida.src = "imgs-vida/vida6.png";
} else if (inputValor === 7) { 
  imagemVida.src = "imgs-vida/vida7.png";
} else if (inputValor === 8) { 
  imagemVida.src = "imgs-vida/vida8.png";
} else if (inputValor === 9) { 
  imagemVida.src = "imgs-vida/vida9.png";
} else if (inputValor === 10) { 
  imagemVida.src = "imgs-vida/vida10.png";
} 

console.log(inputValor);
}

function eventEnter(event) { 
  if(event.key === "Enter") { 
    lifeProjeto();
  }
}

