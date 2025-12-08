// detail.js

// ✅ 메인 페이지와 동일한 데이터 구조(필요한 것만)
const restaurants = [
    { 
        name: "홍성 마라미방", 
        rating: 4.7, 
        image: "image/마라미방.png",
        desc: "푸짐한 양과 다양한 재료로 나만의 마라탕을 만들어 먹을 수 있는 마라탕 맛집입니다."
    },
    { 
        name: "AP COFFEE & BAKERY", 
        rating: 4.6, 
        image: "image/카페.png",
        desc: "깔끔하고 모던한 분위기의 카페로, 다양한 베이글과 커피를 즐길 수 있어요."
    },
    { 
        name: "은화수식당", 
        rating: 4.4, 
        image: "image/은화수 식당.png",
        desc: "돈까스와 카레를 푸짐하게 즐길 수 있는 한양대 에리카 앞 인기 식당입니다."
    },
    { 
        name: "자이카", 
        rating: 4.5, 
        image: "image/자이카.png",
        desc: "정통 인도 커리와 난, 탄두리 치킨을 즐길 수 있는 인도 요리 전문점입니다."
    },
    { 
        name: "명가떡볶이", 
        rating: 4.3, 
        image: "image/명가떡볶이.png",
        desc: "즉석 떡볶이와 각종 사리를 저렴하게 즐길 수 있는 떡볶이 맛집입니다."
    },
    { 
        name: "대홍 훠궈 샤브샤브", 
        rating: 4.2, 
        image: "image/대홍훠궈.png",
        desc: "다양한 재료를 무한리필로 즐길 수 있는 훠궈·샤브샤브 전문점입니다."
    },
    { 
        name: "투파인드피터 한양대 에리카", 
        rating: 4.6, 
        image: "image/투파인드피터.jpg",
        desc: "파스타와 리조또를 즐길 수 있는 감성 식당으로, 데이트 코스로도 인기입니다."
    },
    { 
        name: "미쳐버린파닭 안산한양대점", 
        rating: 4.4, 
        image: "image/미파닭.jpg",
        desc: "파닭과 다양한 치킨 메뉴를 즐길 수 있는 치킨 맛집입니다."
    },
    { 
        name: "앤의 식탁", 
        rating: 4.5, 
        image: "image/앤의 식당.jpg",
        desc: "아늑한 분위기에서 파스타, 덮밥, 피자를 즐길 수 있는 식당입니다."
    },
    { 
        name: "핵밥 안산한양대점", 
        rating: 5.0, 
        image: "image/핵밥.jpg",
        desc: "다양한 덮밥 메뉴를 부담 없는 가격에 즐길 수 있는 밥집입니다."
    },
    { 
        name: "면식당 안산한양대점", 
        rating: 4.7, 
        image: "image/면식당.jpg",
        desc: "국수와 덮밥을 중심으로 한 간편식 전문 식당입니다."
    },
    { 
        name: "동아리식당", 
        rating: 4.6, 
        image: "image/동아리식당.jpg",
        desc: "든든한 한식을 먹을 수 있는 학생 식당 느낌의 밥집입니다."
    },
    { 
        name: "젤리팩토리", 
        rating: 4.4, 
        image: "image/젤리팩토리.png",
        desc: "디저트와 음료를 즐길 수 있는 카페형 매장입니다."
    },
    { 
        name: "찌개찌개", 
        rating: 4.2, 
        image: "image/찌개찌개.jpg",
        desc: "다양한 찌개 메뉴를 즐길 수 있는 따뜻한 한식집입니다."
    },
    { 
        name: "일미닭갈비파전 한양대점", 
        rating: 4.5, 
        image: "image/일미.jpg",
        desc: "닭갈비와 파전을 함께 즐길 수 있는 술안주 맛집입니다."
    },
];
// ✅ 초기 기본 리뷰들 (식당별 예시)
const defaultReviews = {
    "홍성 마라미방": [
        { author: "ERICA 공대생", text: "토달볶 진짜 찐… 마라 처음이면 국물 맵기 조절 꼭 하세요!" },
        { author: "마라러버", text: "땅콩소스+땅콩가루 조합이 미쳤음. 꿔바로우 무조건 같이." }
    ],
    "AP COFFEE & BAKERY": [
        { author: "카공러", text: "조용해서 과제하기 좋고 베이글이 아주 든든함." }
    ],
    "은화수식당": [
        { author: "배고픈학부생", text: "치즈돈까스 양 많고 가성비 괜찮아요." }
    ]
    // 👉 필요하면 다른 가게들도 여기 계속 추가해도 됨
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
    const name = getCurrentRestaurantName();
    const listEl = document.getElementById("review-list");
    if (!listEl || !name) return;

    listEl.innerHTML = "";

    const base = defaultReviews[name] || [];
    const extra = extraReviews[name] || [];
    const all = [...base, ...extra];

    if (all.length === 0) {
        const li = document.createElement("li");
        li.textContent = "등록된 리뷰가 없습니다. 첫 리뷰를 남겨보세요!";
        li.style.fontSize = "13px";
        li.style.color = "#666";
        listEl.appendChild(li);
        return;
    }

    all.forEach(r => {
        const li = document.createElement("li");
        li.className = "review-item";
        li.innerHTML = `
            <span class="review-item-author">${r.author || "익명"}</span>
            <span class="review-item-text">${r.text}</span>
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

    if (!name) {
        nameEl.textContent = "식당 이름 정보가 없습니다.";
        ratingEl.textContent = "";
        descEl.textContent = "URL이 올바른지 확인해 주세요.";
        imgEl.style.display = "none";
        return;
    }

    const restaurant = restaurants.find(r => r.name === name);

    if (!restaurant) {
        nameEl.textContent = name;
        ratingEl.textContent = "";
        descEl.textContent = "등록된 상세 정보가 없습니다.";
        imgEl.style.display = "none";
        return;
    }

    nameEl.textContent = restaurant.name;
    ratingEl.textContent = `⭐ ${restaurant.rating.toFixed(1)}점`;
    descEl.textContent = restaurant.desc ?? "";
    
    if (restaurant.image) {
        imgEl.src = restaurant.image;
        imgEl.alt = `${restaurant.name} 사진`;
        imgEl.style.display = "block";
    } else {
        imgEl.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', renderDetail);

function initReviewForm() {
    const form = document.getElementById("review-form");
    const authorInput = document.getElementById("review-author");
    const textInput = document.getElementById("review-text");

    if (!form || !textInput) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = getCurrentRestaurantName();
        if (!name) return;

        const author = (authorInput.value || "").trim();
        const text = (textInput.value || "").trim();
        if (!text) return;

        // 🔹 닉네임 비어 있으면 자동으로 "익명"
        const displayAuthor = author || "익명";

        if (!extraReviews[name]) {
            extraReviews[name] = [];
        }
        extraReviews[name].push({
            author: displayAuthor,
            text
        });

        textInput.value = "";
        // authorInput.value = "";  // 닉네임까지 초기화하고 싶으면 주석 해제

        renderReviews();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderReviews();
    initReviewForm();
});
