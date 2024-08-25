const text = "Where stories";
        let index = 0;

        document.getElementById('fixed-text').style.visibility = 'hidden';

        const typewriter = () => {
            if (index < text.length) {
                document.getElementById("typewriter-text").innerHTML = text.substring(0, index + 1);
                index++;
                setTimeout(typewriter, 100);
            } else {
                document.getElementById('fixed-text').style.visibility = 'visible';
                index = 0;
                setTimeout(() => {
                    document.getElementById('fixed-text').style.visibility = 'hidden';
                    document.getElementById("typewriter-text").innerHTML = '';
                    typewriter();
                }, 2000); // Adjust delay as needed
            }
        }

        // Initial call to start the typewriter effect
        typewriter();




        // client
        const observe = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
               
                if(entry.isIntersecting){
                    entry.target.classList.add('sho');
                }else{
                    entry.target.classList.remove('sho');
                }
            });
        })
        const hideelement = document.querySelectorAll('.one');
        const hideelement2 = document.querySelectorAll('.two');
        const hideelement3 = document.querySelectorAll('.three');
        hideelement.forEach((el)=> observe.observe(el));
        hideelement2.forEach((el)=> observe.observe(el));
        hideelement3.forEach((el)=> observe.observe(el));