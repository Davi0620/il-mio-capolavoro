let vettoreImmaginiSfondo = [
  "../img sfondi/sfondo2.jpg",
  "../img sfondi/sfondo3.jpg",
  "../img sfondi/sfondo4.jpg",
  "../img sfondi/sfondo5.jpg",
];

let errore=false;

document.addEventListener("DOMContentLoaded", function () {
  let pos = Math.floor(Math.random() * vettoreImmaginiSfondo.length);
  document.body.style.backgroundImage =
    "url('" + vettoreImmaginiSfondo[pos] + "')";//vuole una stringa come collegamento metto " "

  
  document.getElementById("ckVisibile").addEventListener("click", myFunction);
  document.getElementById("avanza").addEventListener("click", function () {

    controlli();

    if (errore==true) {
      
      alert("pagamento fallito!");
      return;
    }
    else{

      
      localStorage.clear("Prodotti");
      

      alert("pagamento effettuato con successo");
    }

    
    document.location = "../pagina prodotti/index.html";
  });
});

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function controlli() {

  let nome=document.getElementById("nomeUtente").value;

  let Cognome= document.getElementById("cognomeUtente").value;

  let email = document.getElementById("emailUtente").value;

  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  let result = pattern.test(email);

  let pass=document.getElementById("myInput").value;

  if (nome==""||Cognome==""||email==""||pass==""||!result) {
    
    errore=true;
  }
  else{

    errore=false;
  }



}
