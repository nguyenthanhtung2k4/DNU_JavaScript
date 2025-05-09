document.addEventListener('DOMContentLoaded', function() {
    const animate = ScrollReveal({
        origin: "top",// cuon tu tren xuong
        distance: "60px",// khoang cach 
        duration: 2500,//tgian
        delay: "400",// do tre cac phan tu
    });
    animate.reveal(".hero-section,.logo")
    animate.reveal(".about-text,#review h1",{origin:"left"})
    animate.reveal(".about",{interval:100})//  cuon xuat hien 
    animate.reveal("#products .h1 , b , products-span",{interval:100})
    animate.reveal(".Pro,.blogs .news-item",{interval:150});
    animate.reveal(".Alltext-contact",{origin:"top"})
});