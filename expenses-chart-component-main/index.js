const bars = document.querySelectorAll(".bar")
const span = document.querySelectorAll(".span")

bars.forEach((msg) =>{
    msg.addEventListener('mouseover',function(){
          if(this === bars[0]){
           span[0].classList.toggle('spare')
           }
           else if(this === bars[1]){
            span[1].classList.toggle("spare")
           }
           else if(this === bars[2]){
            span[2].classList.toggle("spare")
            }
           else if(this === bars[3]){
                span[3].classList.toggle("spare")
                }   
           else if(this === bars[4]){
                span[4].classList.toggle("spare")
                }     
                
            else if(this === bars[5]){
                span[5].classList.toggle("spare")
            }
            else if(this === bars[6]){
                span[6].classList.toggle("spare")
              }
    })  
})


      
bars.forEach((msg)=>{
    msg.addEventListener("mouseleave", function(){
        const span = document.querySelectorAll("span")
       if (this === bars[0] ){
          span[0].classList.toggle("spare")
       }
       else if (this=== bars[1]){
          span[1].classList.toggle("spare")
       }
       else if (this === bars[2]){
          span[2].classList.toggle("spare")
       }
       else if (this===bars[3]){
          span[3].classList.toggle("spare")
       }
       else if (this===bars[4]){
          span[4].classList.toggle("spare")
       }
       else if (this===bars[5]){
          span[5].classList.toggle("spare")
        
       }
       else if (this===bars[6]){
          span[6].classList.toggle("spare")
       } 
    })
  })


