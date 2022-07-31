function Student(n, c, i, b, u){
    this.name = n;
    this.course = c;
    this.image = i;
    this.unit = u;
    this.batch = `Ft-Web${b}`;
}
function studentData(e){
   e.preventDefault();
   let form = document.getElementById("studentdata");
   let name = form.name.value;
   let course = form.course.value;
   let image = form.image.value;
   let batch = form.batch.value;
   let unit = form.unit.value;

   let st1 = new Student(name, course, image, batch, unit);
   
   // console.log(name, course, image, batch, unit);

   let data = JSON.parse(localStorage.getItem("students")) || [];
   data.push(st1);
   localStorage.setItem("students", JSON.stringify(data));
   console.log(st1);
   calculate();
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