const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add('showw');
        }else{
            entry.target.classList.remove('showw');
        }
    });
})
const hideelement4 = document.querySelectorAll('.hidee');
hideelement4.forEach((el)=> observer.observe(el));



