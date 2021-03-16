// CREA OGGETTO STUDENTE CON NOME COGNOME ETA'
  var studentipred = {
    "nome" : ['Fabrizio'],
    "cognome" : ['Corona'],
    "età" : ['48']
  }

    // STAMPA ATTRAVERSO IL FOR TUTTE LE PROPRIETA'
    for (var key in studentipred) {
    console.log(studentipred[key])
    }
// CREA UN ARRAY DI OGGETTI STUDENTI
var arraystudenti =
[
{'nome' : 'Lele',
'cognome' : 'Mora',
'età' : 60,},

{'nome' : 'Rocco',
'cognome' : 'Casalino',
'età' : 55,},

{'nome' : 'Alberto',
'cognome' : 'Signorini',
'età' : 62,},

{'nome' : 'Teresa',
'cognome' : 'DiRivombrosa',
'età' : 99,},

{'nome' : 'Michele',
'cognome' : 'Placido',
'età' : 70,},

{'nome' : 'Gianni',
'cognome' : 'Botindari',
'età' : 12,},



];
for (var key in arraystudenti) {
console.log(arraystudenti[key])
}

// UTENTE INSERISCE 3 OGGETTI CON NOME COGNOME ETA'

for (var i = 0; i < 3; i++) {

  var insertstudenti =

    {'nome' : prompt("Inserisci il tuo Nome"),
  'cognome' : prompt("Inserisci il tuo Cognome"),
  'età' : parseInt(prompt("Inserisci la tua Età "))
    }

  console.log(insertstudenti)
  arraystudenti.push(insertstudenti);

    }
    for (var key in arraystudenti) {
    console.log(arraystudenti[key])
    }
