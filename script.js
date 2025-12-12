    document.addEventListener('DOMContentLoaded', function () {
    const FAVORITE_KEY = 'ERICA_FAVORITES_V1';


    // ✅ 상세 페이지와 동일한 로컬스토리지 키
    const REVIEW_STORAGE_KEY = 'ERICA_EXTRA_REVIEWS_V1';

    // ✅ 추가 리뷰 불러오기
    function loadExtraReviews() {
        try {
            const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.error('리뷰 불러오기 오류:', e);
            return {};
        }
    }

    // 메인 페이지에서도 추가 리뷰 정보 사용
    let extraReviews = loadExtraReviews();

    // 기본 별점이 몇 개의 리뷰 평균이라고 가정할지 (디폴트 리뷰 3개 있으니까 3으로 설정)
    const BASE_REVIEW_COUNT = 3;

    // ✅ 이름과 원래 rating 값으로 "실제 표시할 평균 별점" 계산
    function getAverageRating(name, baseRating) {
        const extra = (extraReviews[name] || []).filter(
            r => typeof r.rating === 'number'
        );

        // 추가 리뷰가 하나도 없으면 원래 별점 그대로
        if (extra.length === 0) {
            return typeof baseRating === 'number' ? baseRating : null;
        }

        const extraSum = extra.reduce((acc, r) => acc + r.rating, 0);
        const totalCount = BASE_REVIEW_COUNT + extra.length;
        const totalSum = baseRating * BASE_REVIEW_COUNT + extraSum;

        return totalSum / totalCount;
    }

    // ⬇︎ 여기 아래에 기존 restaurants 배열, 필터/정렬 함수들 그대로 유지

    function loadFavorites() {
        try {
            const raw = localStorage.getItem(FAVORITE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error('즐겨찾기 불러오기 오류:', e);
            return [];
        }
    }

    let favoriteNames = loadFavorites();

    function saveFavorites() {
        try {
            localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteNames));
        } catch (e) {
            console.error('즐겨찾기 저장 오류:', e);
        }
    }

    function isFavorite(name) {
        return favoriteNames.includes(name);
    }

    function toggleFavorite(name) {
        if (!name) return;
        if (isFavorite(name)) {
            favoriteNames = favoriteNames.filter(n => n !== name);
        } else {
            favoriteNames.push(name);
        }
        saveFavorites();
    }


        /* ===== 버튼 on/off 토글 (기존 기능 유지) ===== */
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                this.classList.toggle('active');
                renderList();
            });
        });

        /* ===== 맛집 데이터 ===== */
        const restaurants = [
    { 
        name: "홍성 마라미방",
        rating: 4.7,
        image: "image/마라미방.png",
        categories: ["중식"],
        tags: ["해장"]
    },
    { 
        name: "AP COFFEE & BAKERY",
        rating: 4.6,
        image: "image/카페.png",
        categories: [],
        tags: ["분위기"]
    },
    { 
        name: "은화수식당",
        rating: 4.4,
        image: "image/은화수 식당.png",
        categories: ["일식"],
        tags: []
    },
    { 
        name: "자이카",
        rating: 4.5,
        image: "image/자이카.png",
        categories: [],
        tags: []
    },
    { 
        name: "명가떡볶이",
        rating: 4.3,
        image: "image/명가떡볶이.png",
        categories: ["한식"],
        tags: []
    },
    { 
        name: "대홍 훠궈 샤브샤브",
        rating: 4.2,
        image: "image/대홍훠궈.png",
        categories: ["중식"],
        tags: []
    },
    { 
        name: "투파인드피터 한양대 에리카",
        rating: 4.6,
        image: "image/투파인드피터.jpg",
        categories: ["양식"],
        tags: ["분위기"]
    },
    { 
        name: "미쳐버린파닭 안산한양대점",
        rating: 4.4,
        image: "image/미파닭.jpg",
        categories: ["한식"],
        tags: []
    },
    { 
        name: "앤의 식탁",
        rating: 4.5,
        image: "image/앤의 식당.jpg",
        categories: ["양식"],
        tags: ["분위기"]
    },
    { 
        name: "핵밥 안산한양대점",
        rating: 5.0,
        image: "image/핵밥.jpg",
        categories: ["한식"],
        tags: []
    },
    { 
        name: "면식당 안산한양대점",
        rating: 4.7,
        image: "image/면식당.jpg",
        categories: ["일식"],
        tags: []
    },
    { 
        name: "동아리식당",
        rating: 4.6,
        image: "image/동아리식당.jpg",
        categories: ["한식"],
        tags: ["해장", "가성비"]
    },
    { 
        name: "젤리팩토리",
        rating: 4.4,
        image: "image/젤리팩토리.png",
        categories: ["한식"],
        tags: []
    },
    { 
        name: "찌개찌개",
        rating: 4.2,
        image: "image/찌개찌개.jpg",
        categories: ["한식"],
        tags: ["해장", "가성비"]
    },
    { 
        name: "일미닭갈비파전 한양대점",
        rating: 4.5,
        image: "image/일미.jpg",
        categories: ["한식"],
        tags: ["가성비"]
    }
];
        /* ===== 상태 & DOM 요소 ===== */
        let currentKeyword = "";
        let currentSort = "none";

        const grid = document.querySelector('.result-grid');
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-button');
        const clearButton = document.querySelector('.clear-button');
        const dropdown = document.querySelector('.dropdown');
        const randomButton = document.querySelector('.random-button'); 
        const recommendArea = document.querySelector('.recommend-area');

        const categoryButtons = document.querySelectorAll('.category-button');
        const filterButtons = document.querySelectorAll('.filter-button');

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


        function getActiveCategories() {
            return [...categoryButtons]
                .filter(btn => btn.classList.contains('active'))
                .map(btn => btn.textContent.trim());
        }

        function getActiveFilters() {
            return [...filterButtons]
                .filter(btn => btn.classList.contains('active'))
                .map(btn => btn.textContent.trim());
        }
        function isFavoriteOnlyActive() {
            const favBtn = document.querySelector('.favorite-only-button');
            return favBtn && favBtn.classList.contains('active');
        }

        function getFilteredSortedList() {
            const activeCats = getActiveCategories();
            const activeTags = getActiveFilters();
            const favoriteOnly = isFavoriteOnlyActive();

            let list = restaurants.filter(r => {
                const nameMatch =
                    r.name.toLowerCase().includes(currentKeyword.toLowerCase());

                const catMatch =
                    activeCats.length === 0 ||
                    (r.categories ?? []).some(c => activeCats.includes(c));

                const tagMatch =
                    activeTags.length === 0 ||
                    (r.tags ?? []).some(t => activeTags.includes(t));

                const favoriteMatch =
                    !favoriteOnly || isFavorite(r.name);

                return nameMatch && catMatch && tagMatch && favoriteMatch;
            });

            // distance/price 없더라도 안전하게
            if (currentSort === 'distance') {
                list.sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999));
            } else if (currentSort === 'rating') {
                list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
            } else if (currentSort === 'price') {
                list.sort((a, b) => (a.price ?? 9) - (b.price ?? 9));
            }
            return list;
        }


        function clearRecommendedUI() {
            const prev = grid.querySelectorAll('.result-box.recommended');
            prev.forEach(p => p.classList.remove('recommended'));
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
        box.dataset.name = r.name; 

        const favoriteOn = isFavorite(r.name);

        // ✅ 추가 리뷰까지 반영한 평균 별점
        const avg = getAverageRating(r.name, r.rating);
        const displayRating = avg != null
            ? avg.toFixed(1)
            : (r.rating ?? 0).toFixed(1);

        box.innerHTML = `
            <div class="result-inner">
                <div class="result-header">
                    <div>
                        <div class="result-name">${r.name}</div>
                        <div>별점 : ${displayRating}점</div>
                    </div>
                    <button
                        type="button"
                        class="favorite-button ${favoriteOn ? 'on' : ''}"
                        data-name="${r.name}"
                        aria-label="찜하기"
                    >
                        ${favoriteOn ? '★' : '☆'}
                    </button>
                </div>
                ${r.image ? `<img src="${r.image}" alt="${r.name} 음식 사진" class="result-image">` : ""}
            </div>
        `;

        grid.appendChild(box);
    });


        }
        // 🔽 이미 renderList 정의까지 끝난 뒤, DOMContentLoaded 함수 안에 추가
        grid.addEventListener('click', (e) => {
            const target = e.target;

            // 1) 찜 버튼 클릭 시
            const favBtn = target.closest('.favorite-button');
            if (favBtn) {
                const name = favBtn.dataset.name;
                if (name) {
                    toggleFavorite(name);
                    const on = isFavorite(name);
                    favBtn.classList.toggle('on', on);
                    favBtn.textContent = on ? '★' : '☆';
                }
                e.stopPropagation();
                return;
            }

            // 2) 그 외 카드 영역 클릭 시 상세 페이지로 이동
            const box = target.closest('.result-box');
            if (!box) return;

            const name = box.dataset.name; // renderList에서 넣어둔 이름
            if (!name) return;

            window.location.href = `detail.html?name=${encodeURIComponent(name)}`;
        });


        /* ===== 검색 ===== */
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

        
        function doRandomPick() {
            const list = getFilteredSortedList();

            if (list.length === 0) {
                alert('추천할 식당이 없습니다. 검색 조건을 초기화해보세요!');
                return;
            }

            const picked = list[Math.floor(Math.random() * list.length)];

            clearRecommendedUI();

            const target = [...grid.querySelectorAll('.result-box')]
                .find(box => box.dataset.name === picked.name);

            if (target) {
                target.classList.add('recommended');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                renderList();
                const retry = [...grid.querySelectorAll('.result-box')]
                    .find(box => box.dataset.name === picked.name);
                if (retry) {
                    retry.classList.add('recommended');
                    retry.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }

        if (randomButton) {
            randomButton.addEventListener('click', doRandomPick);
        }

        /* 초기 렌더링 */
        renderList();
    });
