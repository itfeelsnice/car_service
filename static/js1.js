
let tell1 = document.querySelector("#tell1");

let look1 = new IntersectionObserver((watch1) =>{
    let watch2 = watch1[0];
    if (watch2.isIntersecting){
        tell1.classList.add("opac1");
    }
});

look1.observe(tell1);
