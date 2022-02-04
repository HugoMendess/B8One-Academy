
// Botões mais e menos da seção 1 do site

const btnPlus = document.querySelector(".btn-plus");
const btnLess = document.querySelector(".btn-less");
const btnStatus = document.querySelector(".status-value");
let valueAlt = parseInt(document.querySelector(".value-alt").innerText);
let valueNewAlt = document.querySelector(".value-alt");
let btnValue = parseInt(document.querySelector(".btn-value").innerText);
let btnNewValue =  document.querySelector(".btn-value");


btnPlus.addEventListener("click", () =>{ 

    if(btnValue < 20){
        btnStatus.classList.remove("btn-show");
        btnValue += 1;
        btnNewValue.innerHTML = btnValue;
        valueAlt--;
        valueNewAlt.innerHTML = valueAlt; 
        console.log(btnValue);
    }

    else{
        btnStatus.classList.add("btn-show");
    }

   
});

btnLess.addEventListener("click", () =>{

    if(btnValue > 0){
        btnStatus.classList.remove("btn-show");
        btnValue = btnValue - 1;
        btnNewValue.innerHTML = btnValue;
        valueAlt++;
        valueNewAlt.innerHTML = valueAlt;
    }
    else{
        
        btnStatus.classList.add("btn-show");
    
        
    }
   
})


// Botão para o envio do e-mail


// let btnEmail = document.querySelector("#btn-submit");

// let email = document.querySelector(".mail-form");

// btnEmail.addEventListener("click", e => {
   
// })