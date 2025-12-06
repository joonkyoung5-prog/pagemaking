document.addEventListener('DOMContentLoaded', function () {
    /* ===== 버튼 on/off 토글 (기존 기능 유지) ===== */
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    const restaurants = [
        { name: "홍성 마라미방", 
            rating: 4.7, 
            image: "image/마라미방.png" },

        { name: "AP COFFEE & BAKERY", 
            rating: 4.6, 
            image: "image/카페.png" },

        { name: "은화수식당", 
            rating: 4.4, 
            image: "image/은화수 식당.png" },

        { name: "자이카", 
            rating: 4.5, 
            image: "image/자이카.png" },

        { name: "명가떡볶이", 
            rating: 4.3, 
            image: "image/명가떡볶이.png" },

        { name: "대홍 훠궈 샤브샤브",
            rating: 4.2, 
            image: "image/대홍훠궈.png" },

        { name: "투파인드피터 한양대 에리카", 
            rating: 4.6, 
            image: "image/투파인드피터.jpg" },

        { name: "미쳐버린파닭 안산한양대점", 
            rating: 4.4, 
            image: "image/미파닭.jpg" },

        { name: "앤의 식탁", 
            rating: 4.5, 
            image: "image/앤의 식당.jpg" },

        { name: "핵밥 안산한양대점", 
            rating: 5.0, 
            image: "image/핵밥.jpg" },

        { name: "면식당 안산한양대점", 
            rating: 4.7, 
            image: "image/면식당.jpg" },

        { name: "동아리식당", 
            rating: 4.6, 
            image: "image/동아리식당.jpg" },

        { name: "젤리팩토리", 
            rating: 4.4, 
            image: "image/젤리팩토리.png" },

        { name: "찌개찌개", 
            rating: 4.2, 
            image: "image/찌개찌개.jpg" },

        { name: "일미닭갈비파전 한양대점", 
            rating: 4.5, 
            image: "image/일미.jpg" }
    ];

    /* ===== 상태 & DOM 요소 ===== */
    let currentKeyword = "";
    let currentSort = "none";

    const grid = document.querySelector('.result-grid');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const clearButton = document.querySelector('.clear-button');
    const dropdown = document.querySelector('.dropdown');
    const recommendArea = document.querySelector('.recommend-area');

    /* ===== 정렬 메뉴 만들기 ===== */
    const sortMenu = document.createElement('div');
    sortMenu.className = 'sort-menu hidden';
    sortMenu.innerHTML = `
        <div data-sort="none">정렬 없음</div>
        <div data-sort="distance">위치순</div>
        <div data-sort="rating">별점순</div>
        <div data-sort="price">가격순</div>
    `;
    recommendArea.appendChild(sortMenu);

    dropdown.addEventListener('click', () => {
        sortMenu.classList.toggle('hidden');
    });

    sortMenu.addEventListener('click', (e) => {
        const sortType = e.target.dataset.sort;
        if (!sortType) return;
        currentSort = sortType;
        sortMenu.classList.add('hidden');
        renderList();
    });

    /* ===== 검색 + 정렬 적용 ===== */
    function getFilteredSortedList() {
        let list = restaurants.filter(r =>
            r.name.toLowerCase().includes(currentKeyword.toLowerCase())
        );

        // ✅ distance/price가 없더라도 안전하게 정렬되도록 기본값 처리
        if (currentSort === 'distance') {
            list.sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999));
        } else if (currentSort === 'rating') {
            list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        } else if (currentSort === 'price') {
            list.sort((a, b) => (a.price ?? 9) - (b.price ?? 9));
        }
        return list;
    }

    function renderList() {
        const list = getFilteredSortedList();
        grid.innerHTML = "";

        if (list.length === 0) {
            const msg = document.createElement('p');
            msg.textContent = '조건에 맞는 식당이 없습니다.';
            msg.style.gridColumn = '1 / -1';
            msg.style.textAlign = 'center';
            msg.style.color = '#555';
            msg.style.margin = '20px 0';
            grid.appendChild(msg);
            return;
        }

        list.forEach(r => {
            const box = document.createElement('div');
            box.className = 'result-box';

            box.innerHTML = `
                <div class="result-inner">
                    <div class="result-name">${r.name}</div>
                    <div>
                        별점 : ${(r.rating ?? 0).toFixed(1)}점
                    </div>
                    ${r.image ? `<img src="${r.image}" alt="${r.name} 음식 사진" class="result-image">` : ""}
                </div>
            `;

            grid.appendChild(box);
        });
    }

    function doSearch() {
        currentKeyword = searchInput.value.trim();
        renderList();
    }

    function resetSearch() {
    searchInput.value = "";
    currentKeyword = "";
    renderList();
    }

    searchButton.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch();
    });

    if (clearButton) {
        clearButton.addEventListener('click', resetSearch);
    }
    /* 초기 렌더링 */
    renderList();
});
