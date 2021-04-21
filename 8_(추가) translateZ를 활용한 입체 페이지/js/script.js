let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function() {
    progressBar = document.getElementsByClassName("progressBar")[0];
    imageAll = document.querySelectorAll(".parallax_image");
    // alert(imageAll.length)
    totalNum = imageAll.length;

    //window.addEventListener('resize', stageResize, false);
    window.addEventListener('scroll', scrollFunc);

    stageResize();
}

function scrollFunc(e) {
    scrollTop = this.scrollY;

    //let per = Math.ceil(scrollTop / (_documentHum - _windowHNum) * 100); // 상단 로딩바 부분
    //progressBar.style.width = per + "%";

    for(var i=0; i< totalNum ; i++){
        //perspective: 입체감 깊이
        imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/(5*(totalNum-i)) +"px)"; // 이 수식의 의미: 제일 뒤 이미지가 제일 느리게 움직이고, 제일 앞 이미지가 제일 빠르게 움직여서 입체감을 준다.
        //imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/5 +"px)";

        //console.log( scrollTop , totalNum, i, totalNum-i );
        //console.log( scrollTop / (5*(totalNum-i)) );
    }

}

// function stageResize() {
//     _documentHum = document.body.offsetHeight; 
//     _windowHNum = window.outerHeight; 
// }


