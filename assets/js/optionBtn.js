
const options = document.querySelectorAll('.options')
const optionIcon = document.querySelectorAll('.optionIcon')
const secBtn = document.querySelector('.secBtn')
const counter =document.querySelector('.counter')
const addBtn =document.querySelector('.addBtn')


// open option menu
let ـselected = 0
let _countT = ''

addBtn.addEventListener('click' , function(){
    _countT =Number(counter.innerHTML)
    if(_countT>0){
        console.log(options)
        options.forEach((value , index)=>{
            options[index].addEventListener('click' , function(){
                ـselected=0
                //peyda kardan bakhsh morede nazar va fara khani un 
                optionIcon.forEach(function( v , i){
                    if(i == index){
                        optionIcon[i].classList.toggle('hidden');
                        ـselected+=i
                    }else{
                        optionIcon[i].classList.add("hidden");
                    }
                }) 
            })
        })
    }
})










//options.forEach((value , index)=>{
    
    //         options[index].addEventListener('click' , function(){
    //             ـselected=0
    //             //peyda kardan bakhsh morede nazar va fara khani un 
    //             optionIcon.forEach(function( v , i){
    //                 if(i == index){
    //                     optionIcon[i].classList.toggle('hidden');
    //                     ـselected+=i
    //                 }else{
    //                     optionIcon[i].classList.add("hidden");
    //                 }
    //             }) 
    //         })
    //     })

// hide the menu when a click event occurs outside the menu
// document.addEventListener('click', (event) => {
//     if (!optionIcon[ـselected].contains(event.target) && !options[ـselected].contains(event.target)) {
//         optionIcon[ـselected].classList.add('hidden');
//     }
// });


// hide the menu when a click event occurs outside the menu
// document.addEventListener('click', (event) => {
//     if (!optionIcon.contains(event.target) && !options.contains(event.target)) {
//         optionIcon.classList.add('hidden');
//     }
// });