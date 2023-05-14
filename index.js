document.querySelector('.toggle').addEventListener('click',()=>{
    document.querySelector('.nav-items').classList.toggle('active');
    
    let res=document.querySelector('.active');
  
            });

          let element=  document.querySelector('.date');
          let date=new Date();
        



         
const options = { weekday: 'long', year: 'numeric',  day: 'numeric',month: 'long', calendar: 'English' };
const arabicDate = new Intl.DateTimeFormat('UR', options).format(date);
console.log(arabicDate);
document.querySelector('#arabic-date').innerHTML=arabicDate;

