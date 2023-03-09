

//input-> chiedere al passeggero il numero di km da percorrere
//input-> chiedere al passeggero l'età
    //se >65 sconto del 40%
    //se <18 sconto del 20%
    //per tutti il prezzo al km è di 0.21€

const buttonEl = document.getElementById('mybtn');
let price ;
/* const passengerNameSurname;
const passengerKm;
const passengerAge; */



buttonEl.addEventListener(
    'click',
    function()
    {
        const passengerNameSurname=document.getElementById('name_surname').value;
        const passengerKm=document.getElementById('km').value;
        const passengerAge=document.getElementById('age').value;

        console.log(passengerAge);
        console.log(passengerKm);
        console.log(passengerNameSurname);

        if (passengerAge == 'under')
        {
            console.log('sconto 20');
        }
        else if(passengerAge == 'over')
        {
            console.log('sconto 40');            
        }
        else if(passengerAge == 'middle')
        {
            console.log('paga peegrin');            
        }

    }
)


