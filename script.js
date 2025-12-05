    document.addEventListener('DOMContentLoaded', function () {
        // 1. 필터/카테고리 버튼 클릭 시 active 토글
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        });

        // 2. 검색 기능
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-button');
        const resultBoxes = document.querySelectorAll('.result-box');

        function doSearch() {
            const query = searchInput.value.trim().toLowerCase();

            resultBoxes.forEach(function (box) {
                const name = (box.dataset.name || '').toLowerCase();

                if (query === '') {
                    box.style.display = 'block';
                } else {
                    if (name.includes(query)) {
                        box.style.display = 'block';
                    } else {
                        box.style.display = 'none';
                    }
                }
            });
        }

        // 검색 버튼 클릭 시
        searchButton.addEventListener('click', doSearch);

        // 엔터 키로 검색
        searchInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                doSearch();
            }
        });
    });

