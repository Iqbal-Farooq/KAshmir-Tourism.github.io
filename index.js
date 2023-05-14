document.querySelector('.toggle').addEventListener('click',()=>{
    document.querySelector('.nav-items').classList.toggle('active');
    
    let res=document.querySelector('.active');
  
            });

          let element=  document.querySelector('.date');
          let date=new Date();
          let resdate=date.getFullYear();
          element.innerHTML=resdate;
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
// document.querySelector('#arabic-time').innerHTML=`${hours} : ${minutes} `
         



         
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic' };
const arabicDate = new Intl.DateTimeFormat('UR', options).format(date);
console.log(arabicDate);
document.querySelector('#arabic-date').innerHTML=arabicDate;

