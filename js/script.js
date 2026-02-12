document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Logic
    const langToggleBtn = document.getElementById('lang-toggle');
    const body = document.body;

    // Check local storage for preference
    const savedLang = localStorage.getItem('cozinhaSusyLang') || 'pt';
    if (savedLang === 'en') {
        enableEnglish();
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('language-english')) {
                disableEnglish();
            } else {
                enableEnglish();
            }
        });
    }

    function enableEnglish() {
        body.classList.add('language-english');
        localStorage.setItem('cozinhaSusyLang', 'en');
        if (langToggleBtn) langToggleBtn.innerHTML = '🇵🇹 PT';
    }

    function disableEnglish() {
        body.classList.remove('language-english');
        localStorage.setItem('cozinhaSusyLang', 'pt');
        if (langToggleBtn) langToggleBtn.innerHTML = '🇬🇧 EN';
    }

    // 2. Search Functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();

        recipeCards.forEach(card => {
            // Get text content from both languages inside the card
            const textContent = card.innerText.toLowerCase();
            const tags = card.getAttribute('data-tags') || '';

            if (textContent.includes(query) || tags.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    if (searchInput) {
        searchInput.addEventListener('keyup', performSearch);
    }

    // 3. Hero Carousel (Only on Index)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // 4. Ingredient Checkboxes (Interactive)
    const ingredients = document.querySelectorAll('.ingredients-list li');
    ingredients.forEach(item => {
        item.addEventListener('click', (e) => {
            // Toggle checkbox if clicking the list item
            if (e.target.tagName !== 'INPUT') {
                const checkbox = item.querySelector('input[type="checkbox"]');
                if (checkbox) checkbox.checked = !checkbox.checked;
            }
            // Optional: strikethrough style
            if (item.querySelector('input').checked) {
                item.style.textDecoration = 'line-through';
                item.style.opacity = '0.6';
            } else {
                item.style.textDecoration = 'none';
                item.style.opacity = '1';
            }
        });
    });

    // Also handle direct checkbox clicks specifically to update style
    const checkboxes = document.querySelectorAll('.ingredients-list input[type="checkbox"]');
    checkboxes.forEach(box => {
        box.addEventListener('change', function () {
            const li = this.parentElement;
            if (this.checked) {
                li.style.textDecoration = 'line-through';
                li.style.opacity = '0.6';
            } else {
                li.style.textDecoration = 'none';
                li.style.opacity = '1';
            }
        });
    });
});
