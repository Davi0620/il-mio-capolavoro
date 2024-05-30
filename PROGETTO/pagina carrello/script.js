document.addEventListener("DOMContentLoaded", function () {

  let div = document.getElementById("Recup");

  let listaprodotti = JSON.parse(localStorage.getItem("Prodotti"));

  let prodotti = document.createElement("div");

  let sumPrezzi = 0;


  //for per il listaprodotti

  for (const p of listaprodotti) {

    let divProdotto = document.createElement("div");

    let nomeProdotto = document.createElement("h4");

    nomeProdotto.innerHTML ="nome prodotto :"+ p.Nome;

    divProdotto.appendChild(nomeProdotto);

    //appendo nome

    let immagineProdotto = document.createElement("img");

    immagineProdotto.src = p.Immagine;

    divProdotto.appendChild(immagineProdotto);

     //appendo immagine

    let quantita=document.createElement('h4');

    quantita.innerHTML="quantità :"+p.quantita;

    divProdotto.appendChild(quantita);


     //appendo quantita

    let prezzoProdotto = document.createElement("h4");

    prezzoProdotto.innerHTML = p.Prezzo + "€";

    divProdotto.appendChild(prezzoProdotto);

    prodotti.appendChild(divProdotto);

    //appendo prezzo

    sumPrezzi += p.Prezzo*p.quantita;
  }
  div.appendChild(prodotti);
  div.className = "DivProdotto";

  //appendo prodotto

  let prezzo = document.createElement("h1");

  prezzo.innerHTML = "Totale : "+sumPrezzi.toFixed(2) + "€";

  div.appendChild(prezzo);

  //appendo il prezzo totale


  let Indietro = document.createElement("button");

  Indietro.addEventListener("click", function () {

    document.location = "../pagina prodotti/index.html";
  });


  Indietro.innerHTML = "Indietro";
  
  div.appendChild(Indietro);

   //per andare indietro nella pagina


  let bottonPagamento = document.createElement("button");
  
  bottonPagamento.addEventListener("click", function () {

    document.location = "../pagina pagamento/index.html";
  });
  bottonPagamento.innerHTML = "vai al pagamento";

  div.appendChild(bottonPagamento);

  //per andare avanti nella pagina
  
});
