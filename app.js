console.log('Snack Array e Oggetti')



//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti 
//proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

// vado a scrivere l'array

const biciArray = [{
    nome: 'bicicletta1',
    peso: 17,
},
{
    nome: 'bicicletta2',
    peso: 12,
},
{
    nome: 'bicicletta3',
    peso: 13,
}
]
  

const biciLeggera = biciArray [0]

// vado ad eseguire il ciclo
for (let i = 0; i < biciArray.length; i++){  
    const newBike = biciArray [0]
    console.log(newBike)

if (newBike.peso < biciArray.peso){
    console.log(newBike.peso,biciArray.peso)
}
}




//const bicicletta1, bicicletta2 {

 //   if (bicicletta1 > bicicletta2) {
   // console.log('mountainbike ha il peso maggiore')
//} else if (bicicletta2 < bicicletta1) {
  //  console.log('speedster ha il peso maggiore')


//console.log(bici)
//const biciclette = [bicicletta1,bicicletta2]

//console.log(biciclette)










//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno
//tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà
//“punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo
//nomi e falli subiti e stampiamo tutto in console.



//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.