const observers = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
})
const hideelement5 = document.querySelectorAll('.design');
const hideelement6 = document.querySelectorAll('.character');
hideelement5.forEach((el)=> observers.observe(el));
hideelement6.forEach((el)=> observers.observe(el));