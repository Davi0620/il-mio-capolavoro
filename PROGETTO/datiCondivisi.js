const arrayProdotti = [
  {
    Nome: "Macchinetta del caffè",
    id: 1,
    Prezzo: 17.99,
    Immagine: "../img/macchinCaffe.png",
    Descrizione:
      "Macchina per Caffè con sistema Nespresso Original Line e pompa ad alta pressione (19 bar)",
      quantita:0
  },
  {
    Nome: "Pc",
    id: 2,
    Prezzo: 229.99,
    Immagine: "../img/pc.png",
    Descrizione:
      "PROCESSORE Intel 4-Core i5 con frequenza turbo massima fino a 3.40 GHz - MEMORIA RAM 16GB DDR3 - SSD 240GB 2.5 SATA - Masterizzatore CD/DVD - Wi-Fi",
      quantita:0
  },
  {
    Nome: "Cuffie bluetooth",
    id: 3,
    Prezzo: 54.49,
    Immagine: "../img/cuffie.png",
    Descrizione:
      "Il Digital Sound Enhancement Engine (DSEE) ripristina la tua musica ad alta frequenza e un suono graduale in dissolvenza per una performance più autentica",
      quantita:0
  },
  {
    Nome: "Fontanella per gatti",
    id: 4,
    Prezzo: 27.99,
    Immagine: "../img/fontanellaGatto.png",
    Descrizione:
      "FONTANELLA PER GATTI IN ACCIAIO INOSSIDABILE, LAVABILE IN LAVASTOVIGLIE - La fontana per gatti è un elemento importante per la salute e il benessere del tuo gatto",
      quantita:0
  },
  {
    Nome: "Braciera",
    id: 5,
    Prezzo: 266,
    Immagine: "../img/braciera.png",
    Descrizione:
      "Braciere e coperchio in ghisa di alluminio - Ampia maniglia termoisolante - 2 griglie di cottura smaltate in ghisa di acciaio - Manopola di regolazione della temperatura",
      quantita:0
  },
  {
    Nome: "Pacco m&m",
    id: 6,
    Prezzo: 17.49,
    Immagine: "../img/mm.png",
    Descrizione:
      "M&Ms Peanut Confetti Al Cioccolato Contenenti Arachidi, 24 Bustine Ognuna Da 45G Di Praline Al Cioccolato",
      quantita:0
  },
  {
    Nome: "Bilancia",
    id: 7,
    Prezzo: 11.99,
    Immagine: "../img/bilancia.png",
    Descrizione:
      "BILANCIA DIGITALE PESAPERSONE: Premiss è la bilancia digitale di Rowenta che unisce comodità e semplicità d'uso per tenere sempre sotto controllo il tuo peso",
      quantita:0
  },
  {
    Nome: "Tastiera",
    id: 8,
    Prezzo: 14.99,
    Immagine: "../img/tastiera.png",
    Descrizione:
      "Il kit silenzioso di tastiera e mouse Trust Taro ha un layout integrale italiano QWERTY e comprende anche un tastierino numerico, per ottimizzare la produttività",
      quantita:0
  },
  {
    Nome: "Zainetto",
    id: 9,
    Prezzo: 17.99,
    Immagine: "../img/zainetto.png",
    Descrizione:
      "Zaino bambina Stitch: con una stampa carinissima, ecco lo zainetto perfetto per la scuola o le gite in città",
      quantita:0
  },
  {
    Nome: "Ciabatte cars",
    id: 10,
    Prezzo: 99.99,
    Immagine: "../img/ciabatteCars.png",
    Descrizione:
      "ciabatte confort, materiale solido e di qualità, rendono molto veloci",
      quantita:0
  },
  {
    Nome: "Cappello one piece",
    id: 11,
    Prezzo: 19.99,
    Immagine: "../img/onePieceCap.png",
    Descrizione:
      "Materiale naturale: il cappello di paglia realizzato in paglia di grano naturale o paglia di carta. Il materiale leggero e traspirante lascia fuoriuscire il calore, lo mantiene fresco, comodo e può essere indossato a lungo",
      quantita:0
  },
  {
    Nome: "Sdraio",
    id: 12,
    Prezzo: 44.99,
    Immagine: "../img/sdraio.png",
    Descrizione:
      " Il nostro lettino da esterno offre uno schienale regolabile in 5 posizioni e 2 per il poggiapiedi. Trova subito la tua angolazione preferita e dai il via a lunghe sessioni di relax",
      quantita:0
  },
];

let arrayUsati = arrayProdotti;//inizializzo

function cercaDatoId(id, array) {//setto valore di default,se non gli passo un array,usa arrayprodotti(id,array=arrayprodotti)
 
  if(array==null) 
    array=arrayProdotti //se è null,lo setto arrayprodotti

  for (const prodotto of array) {
    if (prodotto.id == id) {
      //se l'id dato come parametro è uguale un id presente nell'array dei prodotti,ritorno l'oggetto prodotto

      return prodotto;
    }
  }
  return null;
}

function getProdotti(lettera) {

  let arrayRitorno = [];
  for (let i = 0; i < arrayProdotti.length; i++) {

    if (arrayProdotti[i].Nome.toLowerCase().includes(lettera.toLowerCase(), 0) == true) {//toLowerCase=tutte le lettere diventano minnuscole,oppure tutte maiuscole nella ricerca

      arrayRitorno.push(arrayProdotti[i]);
    }
  }
  return arrayRitorno;
}
