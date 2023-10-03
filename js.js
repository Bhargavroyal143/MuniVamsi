var NavMeanutags=document.querySelectorAll('.nav-meanu a');

for(var i=0; i<NavMeanutags.length;i++){
    NavMeanutags[i].addEventListener('click',function(event){
             event.preventDefault();

             var targetSectionid= this.getAttribute("href").trim().toLowerCase();
             var targetSection = document.querySelector(targetSectionid);
             console.log(targetSection)
             
             var intravel=setInterval(function(){
                var targetSectioncood = targetSection.getBoundingClientRect();
                if (targetSectioncood.top<=0)  {
                     clearInterval(intravel);
                     return
                }
                window.scrollBy(0,70);
             },80);

         
             });
      
    };


