let btn=document.querySelector("button");
let div=document.querySelector("#authors");

i=0;/// 
btn.addEventListener("click",function (e){

fetch("https://fakerestapi.azurewebsites.net/api/v1/Authors")
.then(responde=>responde.json())  
.then(function(result){
 
  let array=result.slice(i, i+10);//to select range of 10 array 
  i=i+10;/////for next 10 array 

  for(a=0;a<array.length;a++){////loop of 10 array 

  div.insertAdjacentHTML("beforeEnd",`<div class="author">
  <h3>
  ${array[a].firstName}
  ${array[a].lastName}
  </h3>
  <h4>
  Book ID:   ${array[a].idBook}
  </h4> 
</div> `)

}

if(i<result.length){div.insertAdjacentHTML("beforeEnd",`<hr>`)}


});


})

///some css styel so the result be more clear
btn.style.position="fixed"
btn.style.right="10px";




