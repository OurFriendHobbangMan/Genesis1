const noticesContainer = document.querySelector(".notice");
const notices = document.querySelectorAll(".notice li");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const play = document.querySelector(".play");
const p_img = document.querySelector(".play img");

let num = 0;
const slideHeight = 80; // 슬라이드 높이
const totalSlides = notices.length;
let interval;

// 첫 번째 슬라이드를 복제하여 컨테이너 끝에 추가
const firstClone = notices[0].cloneNode(true);
noticesContainer.appendChild(firstClone);

function updateSlidePosition(instant = false) {
    noticesContainer.style.transition = instant ? 'none' : 'margin-top 1s ease'; // 1초로 변경
    noticesContainer.style.marginTop = `-${num * slideHeight}px`;
}

function nextSlide() {
    num++;
    updateSlidePosition();
    if (num === totalSlides) {
        setTimeout(() => {
            num = 0;
            updateSlidePosition(true);
        }, 1000); // 트랜지션 시간과 동일하게 조정
    }
}

function prevSlide() {
    if (num === 0) {
        num = totalSlides - 1;
        updateSlidePosition(true);
        setTimeout(() => {
            num--;
            updateSlidePosition();
        }, 20);
    } else {
        num--;
        updateSlidePosition();
    }
}

function startSlider() {
    interval = setInterval(nextSlide, 3000); // 3초로 변경
}

function stopSlider() {
    clearInterval(interval);
    interval = null;
}

play.addEventListener("click", () => {
    if (interval) {
        stopSlider();
        p_img.src = "img/play_icon.png"
    } else {
        startSlider();
        p_img.src = "img/pause_icon.png"
    }
});

// 이전 및 다음 버튼에 이벤트 리스너 추가
next.addEventListener("click", nextSlide); // 다음 버튼 클릭 시 nextSlide 함수 호출
prev.addEventListener("click", prevSlide); // 이전 버튼 클릭 시 prevSlide 함수 호출



// 페이지 로드 시 자동으로 슬라이드 시작
startSlider();

// 초기 슬라이드 위치 설정
updateSlidePosition();


document.addEventListener("DOMContentLoaded", function () {
    const langSpans = document.querySelectorAll(".fs2_lang span");

    langSpans.forEach(function (span) {
        span.addEventListener("click", function () {
            // 다른 모든 span 요소에서 l_on 클래스 제거
            langSpans.forEach(function (otherSpan) {
                otherSpan.classList.remove("lang_on");
            });

            // 클릭된 span 요소에 l_on 클래스 추가
            span.classList.add("lang_on");
        });
    });
});


const md_btn = document.querySelectorAll(".gnb span");

const model = document.querySelector(".model");

const mmb = document.querySelector(".md_menu_bg");

const body = document.querySelector("body");

mmb.style.display = "none";

md_btn.forEach((el) => {
    el.addEventListener("click", (ev) => {
        // 모든 md_btn 요소에서 "active" 클래스 제거
        md_btn.forEach((btn) => {
            btn.classList.remove("active");
        });
        // 클릭된 요소에 "active" 클래스 추가
        ev.target.classList.add("active");
    });
});

model.addEventListener("click", () => {
    if (mmb.style.display === "block") {
        mmb.style.display = "none";  // mmb 요소가 보이면 숨김 처리
        body.style.overflow = "auto";  // body의 스크롤을 다시 활성화
    } else {
        mmb.style.display = "block";  // mmb 요소가 숨겨져 있으면 보이게 처리
        body.style.overflow = "hidden";  // body의 스크롤을 숨김 처리
    }
});

const buy = document.querySelector(".buy");

const b_md = document.querySelector(".price_modal");

buy.addEventListener("click", () => {
    if (b_md.style.display ==="block") {
        b_md.style.display = "none";
        body.style.overflow = "auto";
    } else {
        b_md.style.display = "block";
        body.style.overflow = "hidden";
    }
});

const ex_md = document.querySelector(".ex_modal");

const exp = document.querySelector(".exp");

ex_md.style.display = "none";

exp.addEventListener("click", () => {
    if (ex_md.style.display ==="block") {
        ex_md.style.display = "none";
        body.style.overflow = "auto";
    } else {
        ex_md.style.display = "block";
        body.style.overflow = "hidden";
    }
});

const mbs_md = document.querySelector(".mbs_md");

const mbs = document.querySelector(".mbs");

mbs_md.style.display = "none";

mbs.addEventListener("click", () => {
    if (mbs_md.style.display ==="block") {
        mbs_md.style.display = "none";
        body.style.overflow = "auto";
    } else {
        mbs_md.style.display = "block";
        body.style.overflow = "hidden";
    }
});

const gs_md = document.querySelector(".gs_md");

const gns = document.querySelector(".gns");

gs_md.style.display = "none";

gns.addEventListener("click", () => {
    if (gs_md.style.display ==="block") {
        gs_md.style.display = "none";
        body.style.overflow = "auto";
    } else {
        gs_md.style.display = "block";
        body.style.overflow = "hidden";
    }
});

const csc_md = document.querySelector(".csc_md");

csc_md.style.display = "none";
