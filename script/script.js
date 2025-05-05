const biciclette = [
    { nome: "Bianchi Sprint", peso: 8.2 },
    { nome: "Cannondale SuperSix", peso: 7.8 },
    { nome: "Specialized Allez", peso: 9.0 },
    { nome: "Trek Domane", peso: 8.5 },
    { nome: "Giant TCR", peso: 7.6 },
    { nome: "Scott Addict", peso: 7.9 },
    { nome: "Cube Attain", peso: 8.7 },
    { nome: "Merida Reacto", peso: 8.1 },
    { nome: "Wilier GTR", peso: 8.3 },
    { nome: "Pinarello Paris", peso: 7.9 }
  ];

  

        
    // for (let i = 0; i < biciclette.length; i++) {

    //     for (let key in biciclette[i]) {

    //         // console.log(key);
    //         const contenutoKey = biciclette[i][key]
    //         console.log(contenutoKey)
    //       }
    // }
    


let pesoMinore = biciclette[0]['peso']
let nomeBici = biciclette[0]['nome']


 for (let i = 0; i < biciclette.length; i++){

    let currElemPeso = biciclette[i]['peso']
    let currElemNome = biciclette[i]['nome']
    

    if (currElemPeso < pesoMinore) {

        pesoMinore = currElemPeso;
        nomeBici = currElemNome;


    }
 }

console.log(`La bicicletta più leggera è ${nomeBici} e pesa ${pesoMinore} kg`)