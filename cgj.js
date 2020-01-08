nRec=6;
//1
var col=randArrayCol(nRec);
//console.log(col);
//2
var pickedcolor=rand();
//console.log(rand());
//reset the text content to rand seleceted color
document.querySelector("#pickcol").textContent=pickedcolor;

//rect
var rects=document.querySelectorAll(".rect");


//reset button 
var b1=document.querySelector("#butt1");
b1.addEventListener("click",function(){
    col=randArrayCol(nRec);
    pickedcolor=rand();
   document.querySelector("#ans").textContent=" "; document.querySelector("#pickcol").textContent=pickedcolor;
    for(var i=0;i<col.length;i++){
        rects[i].style.backgroundColor=col[i]; 
    }
    document.querySelector("#head").style.backgroundColor="#232323";
    b1.textContent="PLAY AGAIN?";
    
})

//MODE 
var eb=document.querySelector("#ebutt");
var hb=document.querySelector("#hbutt");    
  //easymode
  
  eb.addEventListener("click",function(){
  document.querySelector("#ans").textContent=" ";
  hb.classList.remove("selected");
  eb.classList.add("selected");
  nRec=3;
  col=randArrayCol(nRec)
  pickedcolor=rand();  
  document.querySelector("#pickcol").textContent=pickedcolor;
  for(var i=0;i<rects.length;i++){
    if(col[i]){
        rects[i].style.backgroundColor=col[i];
    }else{
        rects[i].style.display="none";
    }
  }
  document.querySelector("#head").style.backgroundColor="#232323";
  })
    //hardermode
hb.addEventListener("click",function(){
    document.querySelector("#ans").textContent=" ";
    hb.classList.add("selected");
   eb.classList.remove("selected");
   col=randArrayCol(nRec)
  pickedcolor=rand();  
  document.querySelector("#pickcol").textContent=pickedcolor;
for(var i=0;i<rects.length;i++){
    rects[i].style.backgroundColor=col[i];
    rects[i].style.display="block";
}
})




for(var i=0;i<rects.length;i++){
   // console.log(col[i])
    rects[i].style.backgroundColor=col[i]; 
    rects[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        
        if(clickedColor===pickedcolor){
           change1(clickedColor);
            document.querySelector("#ans").textContent="CORRECT!";
            document.querySelector("#head").style.backgroundColor=clickedColor;
            
        }
        else{
            this.style.backgroundColor="#232323";
            document.querySelector("#ans").textContent="TRY AGAIN"
        }
        
    })
}


function change1(c){
  for(var i=0;i<rects.length;i++){
  rects[i].style.backgroundColor=c;
}
}
//2
function rand(){
    var j=Math.floor((Math.random())*col.length);
    return col[j];
}
//1
function randArrayCol(numi){
    var a1=[];
    for(var i=0;i<numi;i++){
        
        a1.push(randcol()); 
    }
    return a1;
}
//1
function randcol(){
    //0-255
    //r
    var r=Math.floor(Math.random()*256);
    //g
    var g=Math.floor(Math.random()*256);
    //b
    var b=Math.floor(Math.random()*256);
    "rgb(255, 0, 20)"
   // console.log("rbg("+r+", "+g+", "+b+")")
    return "rgb("+r+", "+g+", "+b+")";
}