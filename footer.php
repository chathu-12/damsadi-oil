    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <div class="logo-placeholder">
                        <span class="logo-text">DAMSADI</span>
                        <span class="logo-sub">PRODUCTS</span>
                    </div>
                    <p class="footer-tagline"><?php echo $text[$lang]['footer']; ?></p>
                </div>
                
                <div class="footer-links">
                    <h4><?php echo ($lang == 'en') ? 'Quick Links' : 'ක්ෂණික සබැඳි'; ?></h4>
                    <a href="index.php"><?php echo $text[$lang]['nav_home']; ?></a>
                    <a href="products/hair-oil.php"><?php echo $text[$lang]['nav_products']; ?></a>
                    <a href="#about"><?php echo $text[$lang]['nav_about']; ?></a>
                    <a href="#contact"><?php echo $text[$lang]['nav_contact']; ?></a>
                </div>
                
                <div class="footer-social">
                    <h4><?php echo ($lang == 'en') ? 'Follow Us' : 'අපිව අනුගමනය කරන්න'; ?></h4>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> DAMSADI PRODUCTS (PVT) LTD. <?php echo ($lang == 'en') ? 'All rights reserved.' : 'සියලුම හිමිකම් ඇවිරිණි.'; ?></p>
                <div class="color-scheme">
                    <span class="color-dot green"></span>
                    <span class="color-dot gold"></span>
                    <span><?php echo ($lang == 'en') ? 'Brand Colors: Green & Gold' : 'වෙළඳ නාම වර්ණ: කොළ ස්වර්ණ'; ?></span>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
    <script>
        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.mobile-menu').classList.toggle('active');
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('<?php echo ($lang == 'en') ? 'Thank you! We will contact you soon.' : 'ස්තූතියි! අපි ඔබව ඉක්මනින් සම්බන්ධ වේවි.'; ?>');
            this.reset();
        });
        
        // 3D animation effects
        document.addEventListener('DOMContentLoaded', function() {
            // Floating herbs animation
            const herbs = document.querySelectorAll('.herb');
            herbs.forEach((herb, index) => {
                herb.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite alternate`;
            });
            
            // Wave animation
            const waves = document.querySelectorAll('.wave');
            waves.forEach((wave, index) => {
                wave.style.animation = `wave ${8 + index * 2}s linear infinite`;
            });
        });
    </script>
</body>
</html>