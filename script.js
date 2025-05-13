let y=document.getElementById("ele1");
y.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100)
    y.innerHTML=`<h1>${r}</h1>`;
});

y.addEventListener("mouseleave",function(){
    y.innerHTML="<h1>1</h1>";
});

let x=document.getElementById("ele2");
let clr="red";
x.addEventListener("mouseenter",function(){
    if(clr=="red"){
    x.style.backgroundColor="red";
    clr="green";
    }

    else if(clr=="green"){
        x.style.backgroundColor="green";
        clr="blue";
    } 

    else{
        x.style.backgroundColor="blue";
        clr="red";
    }
});

x.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
});

let z=document.getElementById("ele3");
z.addEventListener("mouseenter",function(){
   let r1=Math.floor(Math.random()*256);
   let r2=Math.floor(Math.random()*256);
   let r3=Math.floor(Math.random()*256);
   z.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
   
});

z.addEventListener("mouseleave",function(){
    z.style.backgroundColor="white";
})

let w=document.getElementById("ele4");
w.addEventListener("click",function(){
   let q1=Math.floor(Math.random()*256);
   let q2=Math.floor(Math.random()*256);
   let q3=Math.floor(Math.random()*256);
    x.style.backgroundColor=`rgb(${q1},255,255)`;
    y.style.backgroundColor=`rgb(255,${q2},255)`;
    z.style.backgroundColor=`rgb(255,255,${q3})`;
})

w.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    z.style.backgroundColor="white";
})

