


var label=document.createElement("label");
label.innerHTML="Enter the country name";
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","true");

var br1=document.createElement("br");

var br2=document.createElement("br");

var input1=document.createElement("div");
input1.setAttribute("id","text1");
var br3=document.createElement("br");



var br4=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="Search for name";

let table = document.createElement("table");
table.setAttribute("class", "table table-dark");
table.setAttribute("id","our-table");


document.body.append(label,br,input,br1,button,br2,input1,br3);
document.body.append(table)


async function foo(){
  try{
    let cc=document.getElementById("text").value;
    let res=await fetch(`https://api.nationalize.io?name=${cc}`);
    let res1=await res.json();
console.log(res1);

let countryarr= res1.country;

 var tablebody=document.createElement("tbody");
 table.appendChild(tablebody); 
 let name=document.createElement("tr");
 name.setAttribute("class","name");
 document.getElementsByClassName("name").innerHTML=`${res1.name}`;
 table.append(name);
 for(var i=0;i<=1;i++){
   var tr=document.createElement("tr");
  tablebody.appendChild(tr);
  
  var td= document.createElement("td");
  td.width="75";
  td.appendChild(document.createTextNode(`country id:  ${countryarr[i].country_id} ,  `));

  var td1=document.createElement("td");
  td.width="75";
  
  td.appendChild(document.createTextNode(`   probapility:  ${countryarr[i].probability} `));
tr.appendChild(td,td1);  
}

}catch{
  alert("this is error");
}
}