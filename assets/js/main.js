

//input-> chiedere al passeggero il numero di km da percorrere
//input-> chiedere al passeggero l'età
    //se >65 sconto del 40%
    //se <18 sconto del 20%
    //per tutti il prezzo al km è di 0.21€

const buttonEl = document.getElementById('mybtn');
let price ;
let discount = 1 ;
let ticketType;

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
            //console.log('sconto 20');
            discount = .8;
            ticketType='sconto del 20%';
        }
        else if(passengerAge == 'over')
        {
            console.log('sconto 40');  
            discount = .6;
            ticketType='sconto del 40%';
        }
        else if(passengerAge == 'middle')
        {
            console.log('paga peegrin'); 
            ticketType='Biglietto Standard';
        }

        price= passengerKm * 0.21 * discount;

        document.getElementById('price').innerHTML=price;


        //nome passeggero a biglietto
        document.getElementById('passenger').innerHTML=passengerNameSurname;

        //offerta a biglietto
        document.getElementById('ticket_type').innerHTML=ticketType;

        //carrozza a biglietto
        document.getElementById('carrozza').innerHTML=Math.floor(Math.random()* 100) +1;

        //codice CP a biglietto
        document.getElementById('codice_cp').innerHTML=Math.floor(Math.random()* 100000) +1;

        //prezzo totale a biglietto
        document.getElementById('total_price').innerHTML='€ '+price.toFixed(2);





    }
)


