// loading.js - Immediate loading screen handling
(function() {
    // Show loading screen immediately
    document.getElementById('loading-screen').style.display = 'flex';
    
    // Hide loading screen when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 0.5s ease';
                
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 500); // Minimum 500ms loading time
    });
    
    // Fallback: Hide loading screen after 3 seconds max
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && loadingScreen.style.display !== 'none') {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease';
            
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 3000);
})();