const banner = document.querySelector("div.slide-wrap");
const arrows = document.querySelectorAll("button.arrow");
// const buttons = document.querySelectorAll("div.button-container button");
let count = 1;
// let tempButton = buttons[0];

// 아이디 추가
// 클래스 추가

const firstBanner = `
        <!-- before item -->
        <div class="slide-item" id="item6">
            <div class="inner">
                <a href="#!">
                    <div class="card">
                        <img src="https://dmmj3ljielax6.cloudfront.net/upload/service/6a497fde-2ba4-4a59-977c-41ce3be83e08.png?h=302&w=458&webp=1" alt="img6">
                        <p>[타이틀 영역입니다.]</p>
                        <div>
                            <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h16v16H0z'/%3e%3cg%20transform='translateX(1%203)'%3e%3crect%20fill='%23C5C5C5'%20width='14'%20height='10'%20rx='1'/%3e%3cpath%20stroke='%23FFF'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m12%202.5-5%203-5-3'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="icon">
                            <span>362,328</span>
                            명 요청
                        </div>
                    </div>
                </a>
            </div>
        </div>`;

const lastBanner = `
        <!-- after item -->
        <div class="slide-item" id="item1">
            <div class="inner">
                <a href="#!">
                    <div class="card">
                        <img src="https://dmmj3ljielax6.cloudfront.net/upload/service/95b493f1-8ef3-43a2-b8bb-e9bfda642968.png?h=302&w=458&webp=1" alt="img1">
                        <p>수학 과외</p>
                        <div>
                            <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h16v16H0z'/%3e%3cg%20transform='translateX(1%203)'%3e%3crect%20fill='%23C5C5C5'%20width='14'%20height='10'%20rx='1'/%3e%3cpath%20stroke='%23FFF'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m12%202.5-5%203-5-3'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="icon">
                            <span>362,328</span>
                            명 요청
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="slide-item" id="item2">
            <div class="inner">
                <a href="#!">
                    <div class="card">
                        <img src="https://dmmj3ljielax6.cloudfront.net/upload/service/718adb73-9adf-4a47-a9f2-7b1f3186026e.png?h=302&w=458&webp=1" alt="img2">
                        <p>[타이틀 영역입니다.]</p>
                        <div>
                            <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h16v16H0z'/%3e%3cg%20transform='translateX(1%203)'%3e%3crect%20fill='%23C5C5C5'%20width='14'%20height='10'%20rx='1'/%3e%3cpath%20stroke='%23FFF'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m12%202.5-5%203-5-3'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="icon">
                            <span>362,328</span>
                            명 요청
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="slide-item" id="item3">
            <div class="inner">
                <a href="#!">
                    <div class="card">
                        <img src="https://dmmj3ljielax6.cloudfront.net/upload/service/featured_service_9533951a-57bd-4622-b65a-f8866819be6b.jpg?h=302&w=458&webp=1" alt="img3">
                        <p>[타이틀 영역입니다.]</p>
                        <div>
                            <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h16v16H0z'/%3e%3cg%20transform='translateX(1%203)'%3e%3crect%20fill='%23C5C5C5'%20width='14'%20height='10'%20rx='1'/%3e%3cpath%20stroke='%23FFF'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m12%202.5-5%203-5-3'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="icon">
                            <span>362,328</span>
                            명 요청
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="slide-item" id="item4">
            <div class="inner">
                <a href="#!">
                    <div class="card">
                        <img src="https://dmmj3ljielax6.cloudfront.net/upload/service/featured_service_50de53e6-8c82-4d7b-a9db-aff280606228.jpg?h=302&w=458&webp=1" alt="img4">
                        <p>[타이틀 영역입니다.]</p>
                        <div>
                            <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h16v16H0z'/%3e%3cg%20transform='translateX(1%203)'%3e%3crect%20fill='%23C5C5C5'%20width='14'%20height='10'%20rx='1'/%3e%3cpath%20stroke='%23FFF'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m12%202.5-5%203-5-3'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="icon">
                            <span>362,328</span>
                            명 요청
                        </div>
                    </div>
                </a>
            </div>
        </div>
        `;
banner.innerHTML = firstBanner + banner.innerHTML + lastBanner;

// buttons[0].style.background = "#2ef388";
const slideMove = (100 / 11);
banner.style.transform = `translateX(-${slideMove}%)`;

const autoSlide = () => { // 자동 슬라이드 값
    // 시작 위치
    const firstPosition = (100 / 11);
    // 넘어가야 할 수치
    const slideMove = firstPosition * count;
    console.log(count);
    count++;
    

    banner.style.transform = `translateX(-${slideMove}%)`;
    banner.style.transition = `0.5s`;
    
    if (count === 7) {
        console.log("실행");
        setTimeout(() => {
            banner.style.transform = `translateX(-${firstPosition}%)`;
            banner.style.transition = `0s`;
        }, 500);
        count = 1;
    }

};
// auto 슬라이드 하는 값
let autoSlideInterval = setInterval(autoSlide, 3000);
let arrowCheck = false;
arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        // 시작 위치
        const firstPosition = (100 / 11);
        // 넘어가야 할 수치
        const slideMove = firstPosition * count;

        if (arrowCheck) {
            return;
        }

        arrowCheck = true;
        clearInterval(autoSlideInterval);

        const arrowType = arrow.classList[1];

        if (arrowType === "prev") {
            count--;
            console.log("이전버튼 클릭함 "+count);
            banner.style.transform = `translateX(-${slideMove}%)`;
            banner.style.transition = `transform 0.5s`;

            if (count === 0) {
                setTimeout(() => {
                    banner.style.transform = `translateX(-100%)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 7;
            }
        } else {
            count++;
            console.log("다음버튼 클릭함 "+count);
            banner.style.transform = `translateX(-${slideMove}%)`;
            banner.style.transition = `transform 0.5s`;

            if (count === 7) {
                setTimeout(() => {
                    banner.style.transform = `translateX(-${firstPosition}%)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 1;
            }
        }

        autoSlideInterval = setInterval(autoSlide, 3000);

        setTimeout(() => {
            arrowCheck = false;
        }, 500);
    });
});

// let buttonCheck = false;

// buttons.forEach((button, i) => {
//     button.addEventListener("click", (e) => {
//         if (buttonCheck) {
//             return;
//         }
//         buttonCheck = true;
//         clearInterval(autoSlideInterval);

//         count = i + 1;
//         banner.style.transform = `translateX(-${slideMove}px)`;
//         banner.style.transition = `transform 0.5s`;

//         tempButton.style.background = "white";
//         tempButton = buttons[count - 1];
//         buttons[count - 1].style.background = "#2ef388";

//         autoSlideInterval = setInterval(autoSlide, 1000);
//         setTimeout(() => {
//             buttonCheck = false;
//         }, 500);
//     });
// });
