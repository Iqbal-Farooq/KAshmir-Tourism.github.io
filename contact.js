document.querySelector('.toggle').addEventListener('click',()=>{
    document.querySelector('.nav-items').classList.toggle('active');
    
    
  
            });

            document.getElementById("form-data").addEventListener('submit',(e)=>{
            e.preventDefault();
            let message=document.getElementById("f-name").value;
            console.log("NANA"+message)
            alert(`sorry ${message} we dont have any backend yet plz mail us at akashfarooq222@gmail.com `);
            });

        