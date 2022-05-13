let inputSearch = document.getElementById("inputSearch");
let form = document.getElementsByTagName("form")
var counter = 0

// inputSearch.style.visibility = "hidden";
// form.addEventListener('submit',(e) =>{
//     e.preventDefault();
// })
inputSearch.style.visibility = "hidden"
function displayInput(){
  
       if(inputSearch.style.visibility === "hidden"){
        inputSearch.style.visibility = "visible"
    }else{
        inputSearch.style.visibility = "hidden"
    }
  
  
}


// var AllButtons = document.getElementsByTagName("button");

// AllButtons.forEach(btn => {
//     btn.addEventListener('click',() =>{
//         alert('button clicked')
//         btn.style.transform = "scale(0.98)";
//     })
// });