document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("avanza").addEventListener("click", function () {
    document.location = "../pagina carrello/index.html";
  });
  


  let ricerca = document.getElementById("contain");

  document.getElementById("search").addEventListener("click", function () {

    arrayUsati = getProdotti(ricerca.value);

    Visualizza();//quando clicco richiamo
  });
  Visualizza();//visualizzo appena avvio,funziona perchè nei dati condivi ho inizializzato arrayusati
});

function Visualizza() {

  let divPrinc = document.getElementById("divPrincipale");
  divPrinc.innerHTML = "";

  let elementiSuRiga = 4;//elementi su ogni riga

  for (let i = 0; i < arrayUsati.length / elementiSuRiga; i++) {//scorre le righe
    
    let divRiga = document.createElement("div");

    divRiga.className = "DivRiga";//essenziale

    for (let j = 0; j < elementiSuRiga; j++) {//scorre le colonne

      if (j + i * elementiSuRiga >= arrayUsati.length) {//if che controlla se ci sono ancora elementi da reindirizzare su una colonna

        break;
      }
      let divProdotto = document.createElement("div");
      let h1 = document.createElement("h1");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let h5 = document.createElement("h5");
      let button = document.createElement("button");
      let buttonEl = document.createElement("button");



      img.src = arrayUsati[j + i * elementiSuRiga].Immagine;//dati gli indici prendo posizione nell'array
      p.innerHTML = arrayUsati[j + i * elementiSuRiga].Descrizione;
      h1.innerHTML = arrayUsati[j + i * elementiSuRiga].Nome;
      h5.innerHTML = arrayUsati[j + i * elementiSuRiga].Prezzo + "€";
      button.addEventListener("click", AddProdotto); //




      button.id = "btn" + arrayUsati[j + i * elementiSuRiga].id;

      button.innerHTML = "aggiungi al carrello";
      buttonEl.addEventListener("click", TogliProdotto); //

      buttonEl.id = "btnEl" + arrayUsati[j + i * elementiSuRiga].id;

      buttonEl.innerHTML = "togli dal carrello";

      button.classList="bottoniCarrello";
      buttonEl.classList="bottoniCarrello";


      divProdotto.appendChild(h1);
      divProdotto.appendChild(img);
      divProdotto.appendChild(p);
      divProdotto.appendChild(h5);
      divProdotto.appendChild(button);
      divProdotto.appendChild(buttonEl);


      divProdotto.className = "DivProdotto";

      divRiga.appendChild(divProdotto);
    }

    divPrinc.appendChild(divRiga);
  }
}

function AddProdotto() {
  let idProdotto = this.id.substr(3);

  let arrayComprati = [];

  if (localStorage.getItem("Prodotti") != null) {
    //vettore vuoto

    arrayComprati = JSON.parse(localStorage.getItem("Prodotti")); //recupero arrayComprati vecchio,se hai già un carrello utilizzi quello
  }

  let trovato=cercaDatoId(idProdotto,arrayComprati);//se non gli passo arraycomprati,usa arrayprodotti,ma non funzionerà niente perchè l'oggetto ritornato non fa parte di arraycomprati


    if (trovato!=null) {//se lo avevo già messo nel carrello,lo tolgo 
      
      arrayComprati.splice(arrayComprati.indexOf(trovato),1);//splice toglie un elemento,aggiorno quantita elemento che aggiungo

      //1 quanti elementi togliere,nella splice

      //indexof=trova l'indice dell'elemento,ma l'oggetto deve provenire dall'array
    }

    else{

      trovato=cercaDatoId(idProdotto);//se non c'è lo vado a prendere dall'arrayprodotti

    }
    trovato.quantita++;//aggiorno la quantità,non aggiungo lo stesso oggetto + volte

    arrayComprati.push(trovato);
    localStorage.setItem("Prodotti", JSON.stringify(arrayComprati));
}

function TogliProdotto() {
  let idProdotto = this.id.substr(5);//trova idprodotto dal id pulsante 

  if (localStorage.getItem("Prodotti") == null) {
    return;
  }

  let arrayComprati = JSON.parse(localStorage.getItem("Prodotti"));
  let trovato=cercaDatoId(idProdotto, arrayComprati);

  let index = arrayComprati.indexOf(trovato);

  if (index != -1) {
    //se ho trovato un elemento
    arrayComprati.splice(index, 1); //lo tolgo
    if (trovato.quantita>1) {
      
      trovato.quantita--;
      arrayComprati.push(trovato);
    }

  }
  localStorage.setItem("Prodotti", JSON.stringify(arrayComprati));
}



