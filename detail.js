// detail.js

// ✅ 메인 페이지와 동일한 데이터 구조(필요한 것만)
const restaurants = [
    { 
        name: "홍성 마라미방", 
        rating: 4.7, 
        image: "image/마라미방.png",
        mapimage: "image/마라미방 지도.png",
        desc: "푸짐한 양과 다양한 재료로 나만의 마라탕을 만들어 먹을 수 있는 마라탕 맛집입니다."
    },  
    { 
        name: "AP COFFEE & BAKERY", 
        rating: 4.6, 
        image: "image/카페.png",
        mapimage: "image/카페 지도.png",
        desc: "깔끔하고 모던한 분위기의 카페로, 다양한 베이글과 커피를 즐길 수 있어요."
    },
    { 
        name: "은화수식당", 
        rating: 4.4, 
        image: "image/은화수 식당.png",
        mapimage: "image/은화수 식당 지도.png",
        desc: "돈까스와 카레를 푸짐하게 즐길 수 있는 한양대 에리카 앞 인기 식당입니다."
    },
    { 
        name: "자이카", 
        rating: 4.5, 
        image: "image/자이카.png",
        mapimage: "image/자이카 지도.png",
        desc: "정통 인도 커리와 난, 탄두리 치킨을 즐길 수 있는 인도 요리 전문점입니다."
    },
    { 
        name: "명가떡볶이", 
        rating: 4.3, 
        image: "image/명가떡볶이.png",
        mapimage: "image/명가떡볶이 지도.png",
        desc: "즉석 떡볶이와 각종 사리를 저렴하게 즐길 수 있는 떡볶이 맛집입니다."
    },
    { 
        name: "대홍 훠궈 샤브샤브", 
        rating: 4.2, 
        image: "image/대홍훠궈.png",
        mapimage: "image/대홍훠궈 지도.png",
        desc: "다양한 재료를 무한리필로 즐길 수 있는 훠궈·샤브샤브 전문점입니다."
    },
    { 
        name: "투파인드피터 한양대 에리카", 
        rating: 4.6, 
        image: "image/투파인드피터.jpg",
        mapimage: "image/투파인드 지도.png",
        desc: "파스타와 리조또를 즐길 수 있는 감성 식당으로, 데이트 코스로도 인기입니다."
    },
    { 
        name: "미쳐버린파닭 안산한양대점", 
        rating: 4.4, 
        image: "image/미파닭.jpg",
        mapimage: "image/미쳐버린파닭 지도.png",
        desc: "파닭과 다양한 치킨 메뉴를 즐길 수 있는 치킨 맛집입니다."
    },
    { 
        name: "앤의 식탁", 
        rating: 4.5, 
        image: "image/앤의 식당.jpg",
        mapimage: "image/앤의 식탁 지도.png",
        desc: "아늑한 분위기에서 파스타, 덮밥, 피자를 즐길 수 있는 식당입니다."
    },
    { 
        name: "핵밥 안산한양대점", 
        rating: 5.0, 
        image: "image/핵밥.jpg",
        mapimage: "image/핵밥 지도.png",
        desc: "다양한 덮밥 메뉴를 부담 없는 가격에 즐길 수 있는 밥집입니다."
    },
    { 
        name: "면식당 안산한양대점", 
        rating: 4.7, 
        image: "image/면식당.jpg",
        mapimage: "image/면식당 지도.png",
        desc: "국수와 덮밥을 중심으로 한 간편식 전문 식당입니다."
    },
    { 
        name: "동아리식당", 
        rating: 4.6, 
        image: "image/동아리식당.jpg",
        mapimage: "image/동아리식당 지도.png",
        desc: "든든한 한식을 먹을 수 있는 학생 식당 느낌의 밥집입니다."
    },
    { 
        name: "젤리팩토리", 
        rating: 4.4, 
        image: "image/젤리팩토리.png",
        mapimage: "image/젤리팩토리 지도.png",
        desc: "디저트와 음료를 즐길 수 있는 카페형 매장입니다."
    },
    { 
        name: "찌개찌개", 
        rating: 4.2, 
        image: "image/찌개찌개.jpg",
        mapimage: "image/찌개찌개 지도.png",
        desc: "다양한 찌개 메뉴를 즐길 수 있는 따뜻한 한식집입니다."
    },
    { 
        name: "일미닭갈비파전 한양대점", 
        rating: 4.5, 
        image: "image/일미.jpg",
        mapimage: "image/일미 지도.png",
        desc: "닭갈비와 파전을 함께 즐길 수 있는 술안주 맛집입니다."
    },
];
// ✅ 초기 기본 리뷰들 (식당별 예시)
const defaultReviews = {
    "홍성 마라미방": [
        { author: "ERICA 공대생", rating: 5, text: "토달볶 조합이 미쳤음… 마라 처음이면 맵기 조절 필수!" },
        { author: "마라러버", rating: 5, text: "땅콩소스 + 땅콩가루 국룰. 양도 푸짐함!" },
        { author: "익명", rating: 4, text: "꿔바로우 바삭하고 맛있음. 근데 조금 느끼할 수 있음." }
    ],
    "AP COFFEE & BAKERY": [
        { author: "카공러", rating: 5, text: "조용 + 콘센트 많아 과제하기 최적." },
        { author: "커피덕후", rating: 4, text: "베이글 맛있는데 크림치즈 추가하면 더 좋음!" },
        { author: "익명", rating: 5, text: "데이트도 공부도 다 가능한 분위기." }
    ],
    "은화수식당": [
        { author: "배고픈학부생", rating: 5, text: "치즈돈까스 양 미쳤고 가격합리적." },
        { author: "한식좋아", rating: 4, text: "카레 진하고 맛있음. 조금 느린 편." },
        { author: "익명", rating: 4, text: "점심시간 줄 김." }
    ],
    "자이카": [
        { author: "커리마니아", rating: 5, text: "버터치킨+난 조합이면 끝." },
        { author: "데이트러", rating: 5, text: "분위기 너무 좋음. 음악도 좋았음." },
        { author: "익명", rating: 4, text: "처음 먹어보는 향인데 은근 중독됨." }
    ],
    "명가떡볶이": [
        { author: "떡볶이중독", rating: 5, text: "국물 매콤+사리 조합 핵만족." },
        { author: "익명", rating: 4, text: "김밥 추가 추천. 양 진짜 많음." }
    ],
    "대홍 훠궈 샤브샤브": [
        { author: "샤브사랑", rating: 5, text: "재료 리필 빠름. 홍탕/백탕 반반 추천!" },
        { author: "육수덕후", rating: 5, text: "고기 신선하고 종류 많음." },
        { author: "익명", rating: 4, text: "회식하기 최적. 시간 순삭됨." }
    ],
    "투파인드피터 한양대 에리카": [
        { author: "크림파스타인간", rating: 5, text: "전복 리조또 미쳤음." },
        { author: "데이트러", rating: 5, text: "사진 예쁘게 나와서 데이트 만족도 높음!" },
        { author: "익명", rating: 4, text: "양 적진 않지만 맛있음." }
    ],
    "미쳐버린파닭 안산한양대점": [
        { author: "치킨성애자", rating: 5, text: "파닭 파양 미쳤다." },
        { author: "맥주러버", rating: 5, text: "맥주랑 조합 최강. 퇴근 스트레스 사라짐." },
        { author: "익명", rating: 4, text: "양념 맛 진하지만 질리진 않음." }
    ],
    "앤의 식탁": [
        { author: "분위기파", rating: 5, text: "카페 같은 분위기+음식 맛 다 좋음!" },
        { author: "굴라쉬러버", rating: 5, text: "굴라쉬 국물 진짜 중독됨." }
    ],
    "핵밥 안산한양대점": [
        { author: "든든파", rating: 5, text: "양, 가격, 맛 다 만점." },
        { author: "새내기", rating: 4, text: "소스 너무 맛있는데 살짝 짤 수도 있음." },
        { author: "익명", rating: 5, text: "덮밥 열풍의 근본." }
    ],
    "면식당 안산한양대점": [
        { author: "국수마스터", rating: 5, text: "면 삶기 완벽. 깔끔한 국물 최고." },
        { author: "덮밥러버", rating: 4, text: "덮밥도 간 맞고 부담 없이 먹기 좋음." }
    ],
    "동아리식당": [
        { author: "포만러", rating: 5, text: "양 많고 가성비 최고." },
        { author: "익명", rating: 4, text: "반찬도 맛있고 메뉴 고민 안 해도 됨." }
    ],
    "젤리팩토리": [
        { author: "단짠단짠", rating: 5, text: "청포도 젤리티 강추. 상큼 폭발." },
        { author: "달달러버", rating: 4, text: "사진 잘 나옴. 분위기 좋음." }
    ],
    "찌개찌개": [
        { author: "해장파", rating: 5, text: "해장력 ㄹㅇ. 김치찌개 밥도둑." },
        { author: "집밥러", rating: 4, text: "밥 리필하면 진짜 집밥 느낌." }
    ],
    "일미닭갈비파전 한양대점": [
        { author: "파전덕후", rating: 5, text: "파전 바삭하고 기름지지 않음." },
        { author: "닭갈비중독", rating: 5, text: "닭갈비 볶음밥까지 가야 완성." }
    ]
};

// ✅ 페이지 열어놓은 동안만 유지되는 임시 리뷰 저장소
const extraReviews = {};
function getCurrentRestaurantName() {
    // 이미 getQueryName() 같은 함수가 있다면 그걸 재사용
    if (typeof getQueryName === "function") {
        return getQueryName();
    }
    const params = new URLSearchParams(window.location.search);
    return params.get("name");
}
function renderReviews() {
    const name = getQueryName();
    const listEl = document.getElementById("review-list");
    if (!listEl || !name) return;

    listEl.innerHTML = "";

    const base = defaultReviews[name] || [];
    const extra = extraReviews[name] || [];

    // 1) 기본 리뷰 먼저 출력 (수정/삭제 버튼 없음)
    if (base.length === 0 && extra.length === 0) {
        const li = document.createElement("li");
        li.textContent = "등록된 리뷰가 없습니다. 첫 리뷰를 남겨보세요!";
        li.style.fontSize = "13px";
        li.style.color = "#666";
        listEl.appendChild(li);
        return;
    }

    base.forEach((r) => {
        const li = document.createElement("li");
        li.className = "review-item";
        li.innerHTML = `
            <span class="review-item-author">${r.author || "익명"}</span>
            <span class="review-item-rating">⭐ ${r.rating ?? "?"}</span>
            <span class="review-item-text">${r.text}</span>
        `;
        listEl.appendChild(li);
    });

    // 2) 사용자가 작성한 리뷰(extra) 출력 (수정/삭제 버튼 O)
    extra.forEach((r, idx) => {
        const li = document.createElement("li");
        li.className = "review-item";
        // 어떤 리뷰인지 구분하기 위한 정보
        li.dataset.type = "extra";
        li.dataset.index = String(idx);

        li.innerHTML = `
            <span class="review-item-author">${r.author || "익명"}</span>
            <span class="review-item-rating">⭐ ${r.rating ?? "?"}</span>
            <span class="review-item-text">${r.text}</span>
            <div class="review-actions">
                <button type="button" class="review-edit">수정</button>
                <button type="button" class="review-delete">삭제</button>
            </div>
        `;
        listEl.appendChild(li);
    });
}


function getQueryName() {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
}

function renderDetail() {
    const name = getQueryName();
    const nameEl = document.getElementById('detail-name');
    const ratingEl = document.getElementById('detail-rating');
    const imgEl = document.getElementById('detail-image');
    const descEl = document.getElementById('detail-desc');
    const mapEl = document.getElementById('detail-map');

    if (!name) {
        nameEl.textContent = "식당 이름 정보가 없습니다.";
        ratingEl.textContent = "";
        descEl.textContent = "URL이 올바른지 확인해 주세요.";
        if (imgEl) imgEl.style.display = "none";
        if (mapEl) mapEl.style.display = "none";
        return;
    }

    const restaurant = restaurants.find(r => r.name === name);

    if (!restaurant) {
        nameEl.textContent = name;
        ratingEl.textContent = "";
        descEl.textContent = "등록된 상세 정보가 없습니다.";
        if (imgEl) imgEl.style.display = "none";
        if (mapEl) mapEl.style.display = "none";
        return;
    }

    nameEl.textContent = restaurant.name;
    ratingEl.textContent = `⭐ ${restaurant.rating.toFixed(1)}점`;
    descEl.textContent = restaurant.desc ?? "";

    // ✅ 음식 사진
    if (imgEl) {
        if (restaurant.image) {
            imgEl.src = restaurant.image;
            imgEl.alt = `${restaurant.name} 사진`;
            imgEl.style.display = "block";
        } else {
            imgEl.style.display = "none";
        }
    }

    if (mapEl) {
        if (restaurant.mapimage) {
            mapEl.src = restaurant.mapimage;
            mapEl.alt = `${restaurant.name} 위치 지도`;
            mapEl.style.display = "block";
        } else {
            mapEl.style.display = "none";
        }
    }
}

        
document.addEventListener('DOMContentLoaded', renderDetail);

function initReviewForm() {
    const form = document.getElementById("review-form");
    const authorInput = document.getElementById("review-author");
    const textInput = document.getElementById("review-text");
    const ratingSelect = document.getElementById("review-rating");
    if (!form || !textInput) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = getCurrentRestaurantName();
        if (!name) return;

        const author = (authorInput.value || "").trim();
        const text = (textInput.value || "").trim();
        if (!text) return;

        // ⭐ 선택한 별점 가져오기 (없으면 기본 5점)
        const rating = ratingSelect ? parseInt(ratingSelect.value, 10) || 5 : 5;

        const displayAuthor = author || "익명";

        if (!extraReviews[name]) {
            extraReviews[name] = [];
        }
        extraReviews[name].push({
            author: displayAuthor,
            rating: rating,   
            text
        });

        textInput.value = "";
        // ratingSelect.value = "5";  // 항상 5점으로 초기화하고 싶으면 주석 해제
        renderReviews();


        textInput.value = "";
        // authorInput.value = "";  // 닉네임까지 초기화하고 싶으면 주석 해제

        renderReviews();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderReviews();
    initReviewForm();
});
// 리뷰 리스트에서 수정/삭제 버튼 처리 (이벤트 위임)
document.addEventListener("DOMContentLoaded", () => {
    const listEl = document.getElementById("review-list");
    if (!listEl) return;

    listEl.addEventListener("click", (e) => {
        const target = e.target;
        if (!(target instanceof HTMLElement)) return;

        // 가장 가까운 li.review-item 찾기
        const li = target.closest(".review-item");
        if (!li) return;

        const type = li.dataset.type;   // "extra" 인 경우만 조작
        const indexStr = li.dataset.index;
        const name = getQueryName();

        if (type !== "extra" || !name || indexStr == null) {
            // 기본 리뷰는 수정/삭제 불가 (아무 동작 안 함)
            return;
        }

        const idx = parseInt(indexStr, 10);
        if (!extraReviews[name] || !extraReviews[name][idx]) return;

        // 삭제
        if (target.classList.contains("review-delete")) {
            if (confirm("이 리뷰를 삭제할까요?")) {
                extraReviews[name].splice(idx, 1);
                renderReviews();
            }
        }

        // 수정
        if (target.classList.contains("review-edit")) {
            const current = extraReviews[name][idx];
            const currentText = current.text || "";
            const newText = prompt("리뷰 내용을 수정하세요:", currentText);
            if (newText && newText.trim()) {
                extraReviews[name][idx].text = newText.trim();
                renderReviews();
            }
        }
    });
});
