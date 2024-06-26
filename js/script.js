
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

const membriT= [

        {nomem:"Wayne Barnett",
        ruolom:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
        } ,


        {nomem:"Angela Caroll",
        ruolom:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
        } ,

        {nomem:"Walter Gordon",
        ruolom:"Office Manager",
        foto:"walter-gordon-office-manager.jpg"
        } ,

        {nomem:"Angela Lopez",
        ruolom:"Social MediaManager",
        foto:"angela-lopez-social-media-manager.jpg"
        } ,


        {nomem:"Scott Estrada",
        ruolom:"Developer",
        foto:"scott-estrada-developer.jpg"
        } ,


        {nomem:"Barbara Ramos",
        ruolom:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
        } 

];

console.log(membriT);


//MILESTONE 0 e 1  FINITO

for(let i=0; i<membriT.length; i++){
    const contstringa=document.querySelector('#cont-stringa');
    const newDivnome = document.createElement('div');
    const newDivruolo = document.createElement('div');
    const newDivfoto = document.createElement('div');
    const thisClass_nome=membriT[i].nomem;
    newDivnome.innerHTML=thisClass_nome;
    const thisClass_ruolo=membriT[i].ruolom;
    newDivruolo.innerHTML=thisClass_ruolo;
    const thisClass_foto=membriT[i].foto;
    newDivfoto.innerHTML=thisClass_foto;
    contstringa.append(newDivnome);
    contstringa.append(newDivruolo);
    contstringa.append(newDivfoto);


 
}

//MILESTONE 2 FINITO