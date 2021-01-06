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


//exo 4 
