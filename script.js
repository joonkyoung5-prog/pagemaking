document.addEventListener('DOMContentLoaded', function () {
    /* ===== 버튼 on/off 토글 (기존 기능 유지) ===== */
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    /* ===== 맛집 데이터 (ERICA 근처 실제 맛집 + 새로 찾은 곳들) ===== */
    // distance: 위치(대략 도보 분), rating: 별점, price: 1(저렴)~3(비쌈)
    const restaurants = [
        {
            name: "홍성 마라미방",
            distance: 6,
            rating: 4.7,
            price: 2,
            address: "경기도 안산시 상록구 학사2길 1",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "AP COFFEE & BAKERY",
            distance: 7,
            rating: 4.6,
            price: 2,
            address: "경기도 안산시 상록구 한양대학로 60 한양타운 2층 201호, 202호",
            hours: "매일 영업 (카페)"
        },
        {
            name: "은화수식당",
            distance: 4,
            rating: 4.4,
            price: 1,
            address: "경기도 안산시 상록구 한양대학로 45-1",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "자이카",
            distance: 4,
            rating: 4.5,
            price: 3,
            address: "경기도 안산시 상록구 한양대학로 45-1 2층",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "명가떡볶이",
            distance: 4,
            rating: 4.3,
            price: 1,
            address: "경기도 안산시 상록구 한양대학로 47 1층",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "대홍 훠궈 샤브샤브",
            distance: 4,
            rating: 4.2,
            price: 3,
            address: "경기도 안산시 상록구 한양대학로 47 2층",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "투파인드피터 한양대 에리카",
            distance: 3,
            rating: 4.6,
            price: 3,
            address: "한양대 에리카 정문 앞 (본점)",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "미쳐버린파닭 안산한양대점",
            distance: 6,
            rating: 4.4,
            price: 2,
            address: "경기도 안산시 상록구 학사2길 3-3",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "앤의 식탁",
            distance: 3,
            rating: 4.5,
            price: 3,
            address: "한양대 에리카 정문 앞",
            hours: "매일 영업 (상세 시간은 매장 안내 참조)"
        },
        {
            name: "핵밥 안산한양대점",
            distance: 5,
            rating: 5.0,
            price: 2,
            address: "경기도 안산시 한양대학로 49 1층",
            hours: "매일 11:00 ~ 22:00"
        },
        {
            name: "면식당 안산한양대점",
            distance: 6,
            rating: 4.7,
            price: 2,
            address: "경기도 안산시 상록구 학사4길 2 1층",
            hours: "매일 10:00 ~ 21:00"
        },
        {
            name: "동아리식당",
            distance: 6,
            rating: 4.6,
            price: 1,
            address: "경기도 안산시 상록구 사동 학사2길 13",
            hours: "매일 11:00 ~ 21:00"
        },
        {
            name: "카바레 식당",
            distance: 6,
            rating: 4.3,
            price: 2,
            address: "한양대 에리카 근처 (예시)",
            hours: "월~금, 일요일 영업 (토요일 휴무)"
        },
        {
            name: "젤리팩토리",
            distance: 6,
            rating: 4.4,
            price: 2,
            address: "한양대 에리카 근처 (예시)",
            hours: "매일 영업"
        },
        {
            name: "찌개찌개",
            distance: 6,
            rating: 4.2,
            price: 2,
            address: "한양대 에리카 근처 (예시)",
            hours: "매일 영업"
        },
        {
            name: "일미닭갈비파전 한양대점",
            distance: 6,
            rating: 4.5,
            price: 2,
            address: "한양대 에리카 근처 (예시)",
            hours: "매일 영업"
        }
    ];

    /* ===== 상태 & DOM 요소 ===== */
    let currentKeyword = "";
    let currentSort = "none";

    const grid = document.querySelector('.result-grid');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
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

        if (currentSort === 'distance') {
            list.sort((a, b) => a.distance - b.distance);
        } else if (currentSort === 'rating') {
            list.sort((a, b) => b.rating - a.rating);
        } else if (currentSort === 'price') {
            list.sort((a, b) => a.price - b.price);
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
                        위치 : 도보 ${r.distance}분<br>
                        별점 : ${r.rating.toFixed(1)}점<br>
                        가격 : ${"₩".repeat(r.price)}<br>
                        영업 : ${r.hours}
                    </div>
                </div>
            `;
            grid.appendChild(box);
        });
    }

    function doSearch() {
        currentKeyword = searchInput.value.trim();
        renderList();
    }

    searchButton.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch();
    });

    /* 초기 렌더링 */
    renderList();
});
