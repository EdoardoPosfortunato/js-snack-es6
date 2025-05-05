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

  
  // funzioni //
  const numeroRandom = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;

  }
1

  for (let i = 0; i < squadreCalcio.length; i++){

    squadreCalcio[i].puntiFatti = numeroRandom(0, 100);
    squadreCalcio[i]['falliSubiti'] = numeroRandom(0, 50);
 
 }

 console.table(squadreCalcio);

const falliSubiti = [];

 for (let i = 0; i < squadreCalcio.length; i++){

    
    falliSubiti.push({
        nome: squadreCalcio[i].nome, 
        falli: squadreCalcio[i].falliSubiti
    })
 
 }
 console.table(falliSubiti)