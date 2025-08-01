// Theme switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function() {
        let theme = 'light';
        if (this.checked) {
            theme = 'dark';
        }
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to show a specific tab
    function showTab(tabName) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Show the selected tab content
        const selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        // Add active class to the corresponding button
        const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (selectedButton) {
            selectedButton.classList.add('active');
        }

        // Update URL hash without scrolling
        history.replaceState(null, null, `#${tabName}`);
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showTab(hash);
        } else {
            showTab('home');
        }
    });

    // Check for hash in URL on page load
    const initialHash = window.location.hash.substring(1);
    if (initialHash && document.getElementById(initialHash)) {
        showTab(initialHash);
    } else {
        showTab('home');
    }
}); 