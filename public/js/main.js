let tabPrenoms = ['Dawid','Ayhan','Ayoub','Seb','Nicolas']; 

tabPrenoms.forEach(element => {
    console.log(`Bonjour ${element}`); 
});

/*
let randNum = Math.floor(Math.random() * (10 - 1)) +1; 

console.log(`le num random c'est : ${randNum} ${typeof randNum}`);

let rep = parseInt(prompt("Quel est le nombre? 1 - 10 ")); 
let correct = false; 

if(rep == randNum){
    alert('Bravo, t`es un géni. '); 
    correct = true; 
}else{
    while(rep != randNum){
        rep = parseInt(prompt("Quel est le nombre? 1 - 10  3"));
        correct = false;
        if(rep == randNum){
            alert('ok');
            correct=true; 
        }
    }
    correct = false;
}


*/

// exo 3 qCm; 

/*
let tQuestions = ["Molenge_K ? ", "Mol_ngeek", "Mo_engeek"]; 
let tReponses  = ["e", "e","l"]; 
let tQandRepok  = []; 


if(tQuestions.length != tReponses.length){
    alert('erreur, tableau non identiques.. '); 
}else{
    for(i=0; i<tQuestions.length; i++){
        let rep = prompt(tQuestions[i]).toLowerCase(); 
        if(rep == tReponses[i]){
            //tQandRepok[i] = [tQuestions[i]][rep]; 
            tQandRepok.push(tQuestions[i], rep);
            alert('Bravo!');
        }else{
            alert('pas bien ca...');
        }
    }
}

console.log(tQandRepok); 


*/


//partie 2

let reponse = prompt("Quel temps fait-il aujourd'hui ? "); 

//console.log(reponse); 
/*
if(typeof reponse == "string" && reponse.length > 0){
    if(reponse == "soleil") console.log("sortez en t-shirt");
    else if(reponse == "vent") console.log('sortez en pull'); 
    else if(reponse == "pluie") console.log('sortez en veste'); 
    else if(reponse == "neige") console.log('restez chez vous'); 
    else console.log(`jai pas compris "${reponse}"?`);
}
*/

switch(reponse){
    case 'soleil':
        console.log("sortez en t-shirt");
    break;
    case 'vent':
        console.log('sortez en pull');
    break; 
    case 'pluie':
        console.log('sortez en pull');
    break; 
    case 'neige':
        console.log('sortez en pull');
    break; 
    default:
        console.log('erreur.... ');
    break; 
}






