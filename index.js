window.onload = function() {
    let one = document.querySelector('#one');
    let two = document.querySelector('#two');
    setTimeout(() => {
        two.classList.remove('hidden');
        one.classList.add('hidden');
    }, 1000);
};