function darktheme() {
  const body = document.querySelector("body");

  if (body.classList.contains("boasvindas")) {
    body.classList.replace("boasvindas", "blackbody");
  } else {
    body.classList.replace("blackbody", "boasvindas");
  }
}

let el2 = document.getElementById("entrarnochad");

let el1 = document.getElementById("naoapto");

function showChadButton() {
  if ((el2.className = "chadform1")) {
    el2.classList.remove("chadform1");
  }
  el2.classList.add("chadform");

  el1.classList.add("chadform1");

  alert("Você concordou com os termos chads");
}
////////test function////////
function gg() {
  alert("kk");
}
////////test function////////

let qtdVezes = 0;

function usarFunc() {
  if (qtdVezes >= 0) {
    const elemento = document.getElementById("div-topChads--elements");

    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://www.thesun.co.uk/wp-content/uploads/2021/10/OFF-PLAT-JD-GIGACHAD.jpg?w=660"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://pbs.twimg.com/media/EURuzSWXkAAYKHW.jpg"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://img.ifunny.co/images/9edf405a8ea74ce8b27337812206d335e5f5206c6d40f4d8a357023966fc4c57_1.jpg"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://www.idlememe.com/wp-content/uploads/2021/09/chad-meme-idlememe-8.jpg"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://i.imgflip.com/76en3i.jpg"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://www.meme-arsenal.com/memes/d7aac160fc9b12cf6c792b31cf063dd3.jpg"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://cdn.smartlydressedgames.com/optimized/3X/d/5/d588c8a105984abc5caf2c471703a50603145aca_2_678x500.png"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://images7.memedroid.com/images/UPLOADED872/62f9564b99c28.jpeg"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<img class="topChads-class" src="https://img.ifunny.co/images/dbdf7ab8c6b75b34a9b98804dfb5725f4c51dd5449679977f68f520f61657ae0_1.jpg"></img>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<video class="topChads-class" width="680" height="480" controls="controls"><source src="sfiles/descoberta_de_macho.mp4" type="video/mp4"><object data="" width="320" height="240"><embed width="320" height="240" src="sfiles/descoberta_de_macho.mp4"></object></video>';
    elemento.innerHTML =
      elemento.innerHTML +
      '<div id="hidebutton" class="topChads-class"><button class="topChads-class" onclick="hide()">Ocultar (Não pode ser exibido novamente)</button></div>';

    return (qtdVezes = -1);
  } else {
    alert("Já usasse esse comando BOÇAL");
  }

  qtdVezes++;
  console.log("Você está usando a função pela " + qtdVezes + " vez");
}

function hide() {
  const elemento = document.getElementById("div-topChads--elements");

  elemento.innerHTML = elemento.innerHTML = "";
}

function showTerms() {
  const termsDiv = document.querySelector("#termoschads");

  if (termsDiv.classList.contains("termos1")) {
    termsDiv.classList.replace("termos1", "termos");
  } 
}

function hideTerms() {
  const termsDiv = document.querySelector("#termoschads");

  if (termsDiv.classList.contains("termos")) {
    termsDiv.classList.replace("termos", "termos1");
  } 
}