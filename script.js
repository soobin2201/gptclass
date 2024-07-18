document.addEventListener('DOMContentLoaded', function() {
    console.log('문서가 완전히 로드되었습니다.');
    showSlides();
});

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // 3초마다 이미지가 넘어감
}
