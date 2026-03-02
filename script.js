document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Telemetry (Time & Ping) ---
    const timeEl = document.getElementById('sys-time');
    const pingEl = document.getElementById('ping-sim');

    function updateTelemetry() {
        const now = new Date();
        const timeString = now.toTimeString().split(' ')[0];
        timeEl.textContent = `SYS_TIME: ${timeString}`;

        // Jitter ping slightly for realism
        const currentPing = parseInt(pingEl.textContent);
        const jitter = Math.floor(Math.random() * 5) - 2; // -2 to +2
        let newPing = currentPing + jitter;

        if (newPing < 5) newPing = 5;
        if (newPing > 45) newPing = 45;

        pingEl.textContent = newPing;
    }

    updateTelemetry();
    setInterval(updateTelemetry, 1000);

    // --- 2. Terminal Typewriter Effect (Hero) ---
    const terminalBody = document.getElementById('hero-typewriter');

    // Create a delayed render effect for the lines inside the terminal
    // to simulate standard output loading
    const lines = terminalBody.innerHTML.split('<br>');
    terminalBody.innerHTML = ''; // Clear initially

    let currentLine = 0;

    function renderNextLine() {
        if (currentLine < lines.length) {
            terminalBody.innerHTML += lines[currentLine] + '<br>';
            currentLine++;

            // Random delay between 100ms and 600ms for realistic log output
            const delay = Math.floor(Math.random() * 500) + 100;
            setTimeout(renderNextLine, delay);
        }
    }

    // Start sequence after short initial load delay
    setTimeout(renderNextLine, 500);

    // --- 3. Tab Navigation State ---
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');

            // Smooth scroll is handled natively via CSS scroll-behavior
            // but we update the tab state visually here.
        });
    });

    // Update tab state based on scroll position
    const modules = document.querySelectorAll('.module, footer.console-footer');

    window.addEventListener('scroll', () => {
        let current = '';

        modules.forEach(section => {
            const sectionTop = section.offsetTop;
            // Adjustment for fixed header height
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('href').includes(current)) {
                tab.classList.add('active');
            }
        });
    });

    // --- 4. Matrix/Code Reveal Animations on Scroll ---
    const reveals = document.querySelectorAll('.fade-in-up, .fade-in-right, .fade-in-left');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element has a CSS animation class, it will trigger
                // because we handle opacity via CSS keyframes
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px" // Slight offset
    });

    reveals.forEach(element => {
        revealObserver.observe(element);
    });
});
