  var max = 9;
  var random = [];
    
  for(var i = 0; i < max ; i++){ 
        var temp = Math.floor(Math.random()*max+1);
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else{
         i--;
        }
    }
    var ids=['drag1','drag2','drag3','drag4','drag5','drag6','drag7','drag8','drag9'];
      var outerid=['box1','box2','box3','box4','box5','box6','box7','box8','box9'];
       
  var temporary=[];
  for (var q =0 ; q <= 8; q++) {
    //document.getElementById(ids[q]).innerHTML = random[q];
 //   document.getElementById(ids[q]).innerHTML = '<img src="' + random[q] + '.jpeg" />';
    document.getElementById(ids[q]).src =  random[q]+".jpeg";
    document.getElementById(ids[q]).alt =  random[q];
    
    
    
  }


    
 /* 
for (var i = 0; i <= 8; i++) {
  temporary[i]= document.getElementById(ids[i]).innerText;
  console.log(temporary[i]);
}
for (var i = 0; i <= 8; i++) {
  if(temporary[i]==1){
  document.getElementById(ids[i]).style.backgroundColor="orange";
  }
 else if(temporary[i]==2){
  document.getElementById(ids[i]).style.backgroundColor="pink";
  }
 else if(temporary[i]==3){
  document.getElementById(ids[i]).style.backgroundColor="brown";
  }
 else if(temporary[i]==4){
  document.getElementById(ids[i]).style.backgroundColor="red";
  }
 else if(temporary[i]==5){
  document.getElementById(ids[i]).style.backgroundColor="silver";
  }
 else if(temporary[i]==6){
  document.getElementById(ids[i]).style.backgroundColor="blue";
  }
  else if(temporary[i]==7){
  document.getElementById(ids[i]).style.backgroundColor="green";
  }
  else if(temporary[i]==8){
  document.getElementById(ids[i]).style.backgroundColor="white";
  }
 else if(temporary[i]==9){
  document.getElementById(ids[i]).style.backgroundColor="yellow";
  }
  
}
  */
 /*  var colorfeed=[];
   colorfeed[0]=document.getElementById('drag1').style.backgroundColor;
   colorfeed[1]=document.getElementById('drag2').style.backgroundColor;
   colorfeed[2]=document.getElementById('drag3').style.backgroundColor;
   colorfeed[3]=document.getElementById('drag4').style.backgroundColor;
   colorfeed[4]=document.getElementById('drag5').style.backgroundColor;
   colorfeed[5]=document.getElementById('drag6').style.backgroundColor;
   colorfeed[6]=document.getElementById('drag7').style.backgroundColor;
   colorfeed[7]=document.getElementById('drag8').style.backgroundColor;
   colorfeed[8]=document.getElementById('drag9').style.backgroundColor;
   for (var i = 0; i <= 8; i++) {
     console.log(colorfeed[i],i);
   }
*/


  

function allowDrop (ev) {
   ev.preventDefault ();
}

function drag (ev) {

  ev.dataTransfer.setData ("src", ev.target.id);
}

function drop (ev) {
  var src = document.getElementById (ev.dataTransfer.getData ("src"));
  var srcParent = src.parentNode;
  var tgt = ev.currentTarget.firstElementChild;
  ev.currentTarget.replaceChild (src, tgt);
   srcParent.appendChild (tgt);
  


  var combination="";
  var boxid=['box1','box2','box3','box4','box5','box6','box7','box8','box9'];
  var a=[];
   //console.log(document.getElementById('box1').childNodes);
   for (var i = 0; i <= 8; i++) {
     a[i]=document.getElementById(boxid[i]).childNodes;
     console.log(a[i]);
      
   }


  for (var i = 0; i <= 8; i++) {
   for (var j = 0; j <= 2; j++) {
     
     if(a[i][j]=="[object HTMLImageElement]"){
      console.log("yes");
      combination=combination+(a[i][j].alt);
     }
   }
  }
  console.log(combination);
   if(combination== "123456789"){
    console.log(combination);
    alert("alas solved");
   }
   combination=" ";
}


//[object Text]
//[object HTMLImageElement]