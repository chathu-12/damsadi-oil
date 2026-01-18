<?php
require_once 'header.php';
?>

    <!-- Hero Section with 3D Animation -->
<section class="hero-section">
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-badge">🌿✨</div>
            <h1 class="hero-title"><?php echo $text[$lang]['hero_title']; ?></h1>
            <h2 class="hero-subtitle"><?php echo $text[$lang]['hero_subtitle']; ?></h2>
            <p class="hero-text"><?php echo $text[$lang]['hero_text']; ?></p>
            
            <div class="hero-buttons">
                <a href="#product" class="btn-primary"><?php echo $text[$lang]['order_now']; ?></a>
                <a href="#features" class="btn-secondary"><?php echo ($lang == 'en') ? 'Learn More' : 'තව දැනගන්න'; ?></a>
            </div>
        </div>
        
       <!--  Combined Product Image and 3D Model 
        <div class="hero-visual">
            <div class="product-display-container">
                Product Image Container 
                <div class="product-image-container">
                    <div class="image-frame-large">
                        <img src="images/product-image.png" alt="DAMSADI Ayurvedic Hair Oil" class="product-main-image" 
                             onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"><rect width=\"100%\" height=\"100%\" fill=\"%231A5D1A\"/><text x=\"50%\" y=\"45%\" text-anchor=\"middle\" fill=\"%23D4AF37\" font-family=\"Arial\" font-size=\"40\">🌿</text><text x=\"50%\" y=\"55%\" text-anchor=\"middle\" fill=\"white\" font-family=\"Arial\" font-size=\"20\">DAMSADI</text><text x=\"50%\" y=\"65%\" text-anchor=\"middle\" fill=\"white\" font-family=\"Arial\" font-size=\"14\">Hair Oil</text></svg>'">
                        <div class="product-badge">100% Natural</div>
                    </div>
                </div>-->
                
                <!-- 3D Model Container -->
                <div class="product-3d-container">
                    <div id="3d-container"></div>
                    <div class="floating-herbs">
                        <span class="herb">🌿</span>
                        <span class="herb">🍃</span>
                        <span class="herb">✨</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Animated Wave -->
    <div class="wave-animation">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</section>

    <!-- Product Highlight Section -->
    <section id="product" class="product-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo $text[$lang]['product_title']; ?></h2>
                <div class="section-divider">
                    <div class="divider-line"></div>
                    <div class="divider-icon">💚</div>
                    <div class="divider-line"></div>
                </div>
            </div>
            
            <div class="product-details">
                <div class="feature-card img-container">
        <img src="images/product-image.png" alt="Traditional Methods" class="feature-image" 
             onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"><rect width=\"100%\" height=\"100%\" fill=\"%23f9f7f3\"/><rect x=\"100\" y=\"50\" width=\"200\" height=\"300\" rx=\"40\" fill=\"%23D4AF37\" opacity=\"0.3\"/><rect x=\"110\" y=\"60\" width=\"180\" height=\"280\" rx=\"35\" fill=\"%231A5D1A\" opacity=\"0.8\"/><text x=\"50%\" y=\"90%\" text-anchor=\"middle\" fill=\"%231A5D1A\" font-family=\"Arial\" font-size=\"24\"></text></svg>
    </div>
                
                <div class="product-features">
                    <div class="feature-card">
                        <div class="feature-icon">✔️</div>
                        <div class="feature-text"><?php echo $text[$lang]['feature1']; ?></div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">✔️</div>
                        <div class="feature-text"><?php echo $text[$lang]['feature2']; ?></div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">✔️</div>
                        <div class="feature-text"><?php echo $text[$lang]['feature3']; ?></div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">✔️</div>
                        <div class="feature-text"><?php echo $text[$lang]['feature4']; ?></div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">✔️</div>
                        <div class="feature-text"><?php echo $text[$lang]['feature5']; ?></div>
                    </div>
                    
                    <div class="testimonial-box">
                        <p class="testimonial-text"><?php echo $text[$lang]['testimonial']; ?> 🌱</p>
                    </div>
                </div>
            </div>
            
            <!-- Order CTA -->
            <div class="order-cta">
                <h3 class="cta-title"><?php echo $text[$lang]['order_now']; ?></h3>
                <div class="contact-info">
                    <p class="phone-number"><?php echo $text[$lang]['phone']; ?></p>
                    <p class="delivery-info"><?php echo $text[$lang]['delivery']; ?></p>
                </div>
                <button class="whatsapp-btn" onclick="window.open('https://wa.me/94775596565', '_blank')">
                    <i class="fab fa-whatsapp"></i> <?php echo ($lang == 'en') ? 'Order via WhatsApp' : 'WhatsApp හරහා ඇණවුම් කරන්න'; ?>
                </button>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <h2 class="section-title"><?php echo ($lang == 'en') ? 'About DAMSADI' : 'DAMSADI ගැන'; ?></h2>
            <div class="about-content">
                <div class="about-text">
                    <p><?php echo ($lang == 'en') ? 'DAMSADI PRODUCTS (PVT) LTD specializes in creating premium Ayurvedic hair and beauty care solutions using ancient recipes with modern quality standards.' : 'DAMSADI PRODUCTS (PVT) LTD ප්‍රමුඛත්වය දෙන්නේ පැරණි වට්ටෝරු භාවිතා කර නවීන ගුණාත්මක භාවයන් සහිතව විශිෂ්ඨ ආයුර්වේද හිසකෙස් හා සුන්දරත්ව රැකවරණ නිෂ්පාදන සකස් කිරීමටය.'; ?></p>
                    
                    <div class="future-plans">
                        <h3><?php echo ($lang == 'en') ? 'Future Products' : 'අනාගත නිෂ්පාදන'; ?></h3>
                        <div class="product-roadmap">
                            <div class="roadmap-item current">
                                <div class="roadmap-icon">💆</div>
                                <div class="roadmap-text"><?php echo ($lang == 'en') ? 'Hair Oil' : 'හිසකෙස් තෙල්'; ?></div>
                                <div class="roadmap-image">
                                    <img src="images/hair-oil-icon.png" alt="Hair Oil">
                                </div>
                            </div>
                            <div class="roadmap-connector">→</div>
                            <div class="roadmap-item future">
                                <div class="roadmap-icon">🌸</div>
                                <div class="roadmap-text"><?php echo ($lang == 'en') ? 'Face Creams' : 'මුහුණු ක්‍රීම්'; ?></div>
                            </div>
                            <div class="roadmap-connector">→</div>
                            <div class="roadmap-item future">
                                <div class="roadmap-icon">🛁</div>
                                <div class="roadmap-text"><?php echo ($lang == 'en') ? 'Body Care' : 'සිරුරු රැකවරණය'; ?></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="about-visual">
                    <div class="ayurvedic-symbols">
                        <div class="symbol">☸️</div>
                        <div class="symbol">🕉️</div>
                        <div class="symbol">🌿</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
<section id="contact" class="contact-section">
    <div class="container">
        <h2 class="section-title"><?php echo $text[$lang]['nav_contact']; ?></h2>
        <div class="contact-content">
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
                    <div class="contact-details">
                        <h4><?php echo ($lang == 'en') ? 'Phone' : 'දුරකථනය'; ?></h4>
                        <p>077 559 6565</p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
                    <div class="contact-details">
                        <h4>WhatsApp</h4>
                        <p>077 559 6565</p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="contact-details">
                        <h4><?php echo ($lang == 'en') ? 'Location' : 'ස්ථානය'; ?></h4>
                        <p><?php echo ($lang == 'en') ? 'Sri Lanka' : 'ශ්‍රී ලංකාව'; ?></p>
                    </div>
                </div>
            </div>
            
            <!-- Updated Contact Form -->
            <form class="contact-form" id="contactForm">
                <div class="form-group">
                    <input type="text" name="name" placeholder="<?php echo ($lang == 'en') ? 'Your Name' : 'ඔබේ නම'; ?>" required>
                </div>
                <div class="form-group">
                    <input type="tel" name="phone" placeholder="<?php echo ($lang == 'en') ? 'Phone Number' : 'දුරකථන අංකය'; ?>" required>
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="<?php echo ($lang == 'en') ? 'Your Message' : 'ඔබේ පණිවිඩය'; ?>" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn-primary">
                    <span class="button-text"><?php echo ($lang == 'en') ? 'Send Message' : 'පණිවිඩය යවන්න'; ?></span>
                    <span class="loading-spinner" style="display: none;">
                        <i class="fas fa-spinner fa-spin"></i>
                    </span>
                </button>
                <div id="formMessage" class="form-message" style="display: none;"></div>
            </form>
        </div>
    </div>
</section>

<?php
require_once 'footer.php';
?>