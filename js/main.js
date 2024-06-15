// const array1 = [12,12,14]
// const array2 = [12,3,14]

// let total =0;



// const numbers = array1.concat(array2);
// console.log(numbers);
// for(const number of numbers){
//     total +=number;
// }
// console.log(total);



// const cards = ["Card1", "Card2", "Card3", "Card4", ] //indexOf

// const cardToRemove = "Card3"
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.log(cards);

// cards.splice(index, 0, cardToRemove);         //splice
// console.log(cards);


// const  cardToUpdate = "Card3";
// const indexUpdate = cards.indexOf(cardToUpdate);
// cards.splice(indexUpdate, 1, "New card")
// console.log(cards);


// const cards = ["Card-1", "Card-2", "Card-3", "Card-4"];


// for(let i = 0; i < cards.length; i++) {
//     const card = cards[i];
    
    
//     const modifiedCard = card.slice(0, -2);
    
   
//     cards[i] = modifiedCard;
// }

// console.log(cards);



// const numbers = [1,222,13,46,85];
// const newArr = numbers.slice(0, 3)
// const newArr2 = numbers.slice(-3)
// console.log(newArr2);




// numbers.pop()
// console.log(numbers);


// numbers.shift()


const data = ["HTML"];

const list = document.querySelector(".list");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form");


data.forEach(element => {
    list.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
});

input.addEventListener('change', (e) => {
   
    addElement(e.target.value);
    updateList();
    console.log(input);
});


btn.addEventListener("click", (e) => {
    addElement(input.value);
    updateList();
});


form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    addElement(input.value);
    updateList();
});

function addElement(value) {
    if (value.trim() !== "") {
        data.push(value.trim()); 
        input.value = ""; 
    }

}

function updateList() {
   
    list.innerHTML = "";
    
    data.forEach(element => {
        list.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
    });
}
