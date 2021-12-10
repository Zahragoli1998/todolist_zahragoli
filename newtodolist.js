let newtitleinput = document.getElementById('title');
const btn=document.getElementById('btn');
const searchtitle= document.getElementById('search');
//...........................................................//
const workslist=[
  {
    text:'Watching movie',
    done : false
  },
  {
    text:'Study the language',
    done : false
  },
  {
    text:'Doing homework',
    done : false
  },
  
];
//...........................................................//
 searchtitle.addEventListener('keyup',(e) =>{
    const search =e.target.value.toLowerCase();
    const filtersearch = workslist.filter( (txt) =>{
        return(
        txt.text.toLowerCase().includes(search));
    });updateui(filtersearch);
});
//..........................................................//
function updateui(arr=workslist){
    box.innerHTML='';
   let result = ''
   for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
 
     result += `
     <div class="card">
     
     <h3  class="${done(item)}"> ${i+1}.${item.text} </h3>
     <span  class="delete"  onclick="deletetitle(${i})"> delete </span>
       <span class="edit"   onclick="check(${i})" >edit</span>
       <br>
     </div>
   `;
    } 
     box.innerHTML = result;
   }
 //...........................................................//
 function addnewtitle() {
 
     const title = newtitleinput.value;
     const donework = false;
 
     if (!title) return alert('please inter good title')
   
     
     const obj = {}
     obj.text=title;
     obj.done = donework;
 
     workslist.push(obj);
   
   
     newtitleinput.value = '';
   
     updateui(workslist);
   }
   //..........................................................//
     function deletetitle(i) {
 
     console.log(workslist[i]);
       workslist.splice(i, 1);
     
       updateui(workslist);
     }
   //..........................................................//
   function done(items) {
   
     if (items.done) {
       console.log("hi");
       return 'itemdone'
     }
       else {
         return ''
       }
       
     }
   //..........................................................//
   function check(i) {
    workslist[i].done = !workslist[i].done;
    console.log(workslist[i]);
     updateui(workslist);
   }
//..........................................................//
   btn.addEventListener('click',addnewtitle);
   updateui(workslist);