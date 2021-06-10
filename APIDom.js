let btn=document.querySelector("button");
let div=document.querySelector("#authors");

i=0;/// 
btn.addEventListener("click",function (){

fetch("https://fakerestapi.azurewebsites.net/api/v1/Authors")
.then(responde=>responde.json())  
.then(function(result){
 
  for(a=i;a<i+10;a++){////loop of 10 array 

  div.insertAdjacentHTML("beforeEnd",`<div class="author">
  <h3>
  ${result[a].firstName}
  ${result[a].lastName}
  </h3>
  <h4>
  Book ID:   ${result[a].idBook}
  </h4> 
</div> `)

}
i=i+10///for next 10 objects

if(i<result.length){div.insertAdjacentHTML("beforeEnd",`<hr>`)}


});


})

///some css styel so the result be more clear
btn.style="position:fixed; right:10px;"





