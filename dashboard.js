function append(){
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let container = document.getElementById("container");
    container.innerHTML = null;
    data.forEach(function(el,index){
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src= el.image;

    let p = document.createElement("p");
     p.innerText = el.name;

    let btn = document.createElement("button");
    btn.innerText= "Remove"
    btn.addEventListener("click",function(){ 
        remove(index)
    })
    div.append(image, p,btn);
    container.append(div)
    })
  

   


}
append();
function remove(index){
    //    console.log(index)
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let newData = data.filter(function(el, i){
        if(i===index){
       let trash =JSON.parse(localStorage.getItem("trash")) || [];
        trash.push(el);
        localStorage.setItem("trash",JSON.stringify(trash));
        }else{
         return i !== index;
        }
       
      
    });
    localStorage.setItem("students", JSON.stringify(newData))
    append();

    console.log(newData);
}


function calculate(){
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let obj = {};
    for(let i=0; i<data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch] = 0;
        }
    }
    for(let j=0; j<data.length; j++){
        
            obj[data[j].batch]++;
        
    }
    // console.log(obj);
    let nav = document.getElementById("navbar");
    nav.innerHTML = null;
    Object.keys(obj).forEach(key =>{
        // console.log(key, obj[key]);
   
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = key +" :- "+ obj[key];
    div.append(p);
    nav.append(div)
    })
  
    
 }
 calculate();