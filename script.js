document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // --- Search Functionality ---
    const searchBar = document.getElementById('search-bar');
    const cards = document.querySelectorAll('.card');

    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // --- Modals Management ---
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-modal');

    function openModal(id) {
        document.getElementById(id).classList.add('show');
    }

    function closeModal(modal) {
        modal.classList.remove('show');
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            closeModal(e.target.closest('.modal'));
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // --- Sidebar Actions ---
    document.getElementById('settings-btn').addEventListener('click', () => {
        openModal('modal-settings');
        sidebar.classList.remove('active');
    });
    
    document.getElementById('header-settings-btn').addEventListener('click', () => {
        openModal('modal-settings');
    });

    document.getElementById('lang-btn').addEventListener('click', () => {
        openModal('modal-lang');
        sidebar.classList.remove('active');
    });

    document.getElementById('feedback-btn').addEventListener('click', () => {
        openModal('modal-app-feedback');
        sidebar.classList.remove('active');
    });

    document.getElementById('reviews-btn').addEventListener('click', () => {
        alert('Seção de avaliações em desenvolvimento!');
        sidebar.classList.remove('active');
    });

    document.getElementById('pubs-btn').addEventListener('click', () => {
        alert('Seção de publicações em desenvolvimento!');
        sidebar.classList.remove('active');
    });

    // --- Dark Mode ---
    const themeCheckbox = document.getElementById('theme-checkbox');
    themeCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.replace('light-mode', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
        }
    });

    // --- Card Buttons ---
    const detailsBtns = document.querySelectorAll('.btn-details');
    const feedbackBtns = document.querySelectorAll('.btn-feedback');

    detailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const title = e.target.getAttribute('data-title');
            const desc = e.target.getAttribute('data-desc');
            document.getElementById('details-title').textContent = title;
            document.getElementById('details-desc').textContent = desc;
            openModal('modal-details');
        });
    });

    feedbackBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal('modal-card-feedback');
        });
    });

    // --- Forms Prevention ---
    document.getElementById('form-card-feedback').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Avaliação enviada com sucesso!');
        closeModal(document.getElementById('modal-card-feedback'));
        e.target.reset();
    });

    document.getElementById('form-app-feedback').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Feedback do app enviado!');
        closeModal(document.getElementById('modal-app-feedback'));
        e.target.reset();
    });

    // --- Tabs ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            // Futuramente implementar lógica de alternar conteúdo
        });
    });
});