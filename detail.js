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
        { author: "ERICA 공대생", text: "토달볶 조합이 미쳤음… 마라 처음이면 국물 맵기 꼭 조절하세요." },
        { author: "마라러버", text: "땅콩소스 + 땅콩가루 조합은 진짜 국룰. 양도 많고 재료도 많음." },
        { author: "익명", text: "꿔바로우 진짜 바삭… 술 안 마셔도 행복해지는 맛." }
    ],
    "AP COFFEE & BAKERY": [
        { author: "카공러", text: "조용해서 과제하기 좋아요. 콘센트 많은 테이블 굿!" },
        { author: "커피덕후", text: "베이글이 바삭·쫀득 둘 다 있음. 플레인+크림치즈 추천." },
        { author: "익명", text: "시끄럽지 않아서 데이트도 괜찮고 혼자 와도 아늑함." }
    ],
    "은화수식당": [
        { author: "배고픈학부생", text: "치즈돈까스 양 많고 맛있고 가성비 좋음. 실패 없는 메뉴!" },
        { author: "한식러버", text: "카레 소스가 진짜 진하고 고기 튀김이 부드러움." },
        { author: "익명", text: "점심시간에 줄 섬. 그 정도면 말 다 했지." }
    ],
    "자이카": [
        { author: "커리마니아", text: "버터 치킨 커리랑 난 조합 찐입니다. 꿀조합 인정." },
        { author: "데이트코스전문가", text: "분위기 좋아서 데이트로 딱. 음악도 좋았음." },
        { author: "익명", text: "새로운 음식 도전해봤는데 성공! 향 신기한데 계속 땡김." }
    ],
    "명가떡볶이": [
        { author: "떡볶이중독", text: "국물 매콤 + 사리 조합으로 배 터지게 먹기 가능." },
        { author: "익명", text: "김밥 추가하면 행복 200% 올라갑니다." }
    ],
    "대홍 훠궈 샤브샤브": [
        { author: "샤브사랑", text: "재료 리필 빨라요. 홍탕/백탕 반반 추천!" },
        { author: "육수덕후", text: "고기 신선하고 버섯 종류 많아서 좋았음." },
        { author: "익명", text: "친구들이랑 회식하기 좋음. 시간 순삭됨." }
    ],
    "투파인드피터 한양대 에리카": [
        { author: "크림파스타인간", text: "전복 내장 리조또는 진짜 예술 그 자체." },
        { author: "데이트러", text: "사진 잘 나와요. 분위기 최고." },
        { author: "익명", text: "양이 적지 않아서 배부르게 먹었음." }
    ],
    "미쳐버린파닭 안산한양대점": [
        { author: "치킨성애자", text: "파닭 미쳤다… 파의 양도 넉넉하고 맛도 강함." },
        { author: "맥주러버", text: "맥주랑 찰떡 of 찰떡. 스트레스 풀리는 맛." },
        { author: "익명", text: "양념 맛 강하지만 안 질림." }
    ],
    "앤의 식탁": [
        { author: "숨어있는맛집", text: "굴라쉬 국물 맛있음. 색다른데 중독됨." },
        { author: "분위기파", text: "조명 따뜻·음악 잔잔… 데이트에 완전 추천." }
    ],
    "핵밥 안산한양대점": [
        { author: "든든파", text: "양 진짜 많고 맛있음. 가격 고려하면 미쳤다." },
        { author: "새내기", text: "학식보다 싸고 맛있어서 자주 올 듯." },
        { author: "익명", text: "소스랑 고기 조합이 고급짐." }
    ],
    "면식당 안산한양대점": [
        { author: "국수마스터", text: "국물 깔끔하고 면 삶기 딱 좋음." },
        { author: "덮밥러버", text: "덮밥도 간 맞고 부담 없이 먹기 좋음." }
    ],
    "동아리식당": [
        { author: "포만러", text: "양 많고 한식 메뉴라 학식 느낌 나서 정든다." },
        { author: "익명", text: "반찬도 맛있음. 가격 착함." }
    ],
    "젤리팩토리": [
        { author: "단짠단짠", text: "청포도 젤리 티 진짜 맛있음. 상큼함 최고." },
        { author: "달달러버", text: "사진 예쁘게 나와서 인스타용 스팟 가능." }
    ],
    "찌개찌개": [
        { author: "집밥러", text: "김치찌개 깊은 맛… 밥 리필하면 행복 끝판왕." },
        { author: "해장파", text: "숙취 날아감. 국물 진짜 좋음." }
    ],
    "일미닭갈비파전 한양대점": [
        { author: "파전덕후", text: "파전 바삭하고 달지 않음. 술안주로 딱." },
        { author: "닭갈비중독", text: "닭갈비 매콤달달 최고… 밥볶음까지 해야 진짜 완성." }
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
