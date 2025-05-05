const squadreCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Bologna", puntiFatti: 0, falliSubiti: 0 }
];

console.log('ciao')

// funzioni //
const numeroRandom = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

/////////////////////////////////////////////////////////

for (let i = 0; i < squadreCalcio.length; i++) {

    squadreCalcio[i].puntiFatti = numeroRandom(0, 100);
    squadreCalcio[i]['falliSubiti'] = numeroRandom(0, 50);

}

console.table(squadreCalcio);

/* const falliSubiti = [];

for (let i = 0; i < squadreCalcio.length; i++) {


    falliSubiti.push({
        nome: squadreCalcio[i].nome,
        falli: squadreCalcio[i].falliSubiti
    })

}
console.table(falliSubiti) */

// lista ordinata //

const copiaSquadre = [];

for (let i = 0; i < squadreCalcio.length; i++) {
  // Copia ogni oggetto (spread operator)
  copiaSquadre.push({ ...squadreCalcio[i] });
}

// Ordiniamo la copia con selection sort decrescente
for (let i = 0; i < copiaSquadre.length - 1; i++) {
  let maxIndex = i;
  for (let j = i + 1; j < copiaSquadre.length; j++) {
    if (copiaSquadre[j].puntiFatti > copiaSquadre[maxIndex].puntiFatti) {
      maxIndex = j;
    }
  }
  let temp = copiaSquadre[i];
  copiaSquadre[i] = copiaSquadre[maxIndex];
  copiaSquadre[maxIndex] = temp;
}

// Aggiungiamo la posizione in classifica
const classificaSquadre = [];

for (let i = 0; i < copiaSquadre.length; i++) {
  classificaSquadre.push({
    posizione: i + 1,
    nome: copiaSquadre[i].nome,
    puntiFatti: copiaSquadre[i].puntiFatti
    
  });
}

console.table(classificaSquadre);