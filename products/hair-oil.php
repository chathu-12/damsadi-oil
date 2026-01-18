<?php
require_once '../config.php';
require_once '../header.php';
?>

<section class="product-detail-section">
    <div class="container">
        <div class="product-detail-header">
            <h1><?php echo $text[$lang]['product_title']; ?></h1>
            <p class="product-subtitle"><?php echo ($lang == 'en') ? 'Premium Ayurvedic Hair Growth Solution' : 'විශිෂ්ඨ ආයුර්වේද හිසකෙස් වර්ධන විසඳුම'; ?></p>
        </div>
        
        <div class="product-detail-content">
            <div class="product-gallery">
                <!-- Placeholder for multiple product images -->
                <div class="main-image">
                    <div class="image-placeholder-large">
                        <i class="fas fa-oil-can"></i>
                        <span><?php echo ($lang == 'en') ? 'Main Product Image' : 'ප්‍රධාන නිෂ්පාදන ඡායාරූපය'; ?></span>
                    </div>
                </div>
                <div class="thumbnail-images">
                    <div class="thumbnail active"></div>
                    <div class="thumbnail"></div>
                    <div class="thumbnail"></div>
                </div>
            </div>
            
            <div class="product-info">
                <div class="product-description">
                    <h2><?php echo ($lang == 'en') ? 'Product Description' : 'නිෂ්පාදන විස්තරය'; ?></h2>
                    <p><?php echo ($lang == 'en') ? 'DAMSADI Isiwara Kesa Lepaya is a 100% natural Ayurvedic hair oil formulated with ancient herbal recipes to promote hair growth, prevent hair fall, and improve scalp health.' : 'DAMSADI ඉසිවර කේෂා ලේපය යනු 100% ස්වභාවික ආයුර්වේද හිසකෙස් තෙල් මිශ්‍රණයක් වන අතර එය පැරණි ඖෂධීය වට්ටෝරු භාවිතයෙන් හිසකෙස් වර්ධනය ප්‍රවර්ධනය කිරීම, හිසකෙස් ගැලවීම වැළැක්වීම සහ හිස් කබල සෞඛ්‍යය වැඩිදියුණු කිරීම සඳහා සකස් කර ඇත.'; ?></p>
                    
                    <div class="ingredients">
                        <h3><?php echo ($lang == 'en') ? 'Key Ingredients' : 'ප්‍රධාන අමුද්‍රව්‍ය'; ?></h3>
                        <ul>
                            <li><?php echo ($lang == 'en') ? 'Coconut Oil' : 'පොල් තෙල්'; ?></li>
                            <li><?php echo ($lang == 'en') ? 'Bhringraj' : 'භෘංගරාජ'; ?></li>
                            <li><?php echo ($lang == 'en') ? 'Amla' : 'ආම්ල'; ?></li>
                            <li><?php echo ($lang == 'en') ? 'Neem' : 'කොහොඹ'; ?></li>
                            <li><?php echo ($lang == 'en') ? 'Fenugreek' : 'උලුහාල්'; ?></li>
                        </ul>
                    </div>
                </div>
                
                <div class="product-specs">
                    <h3><?php echo ($lang == 'en') ? 'Specifications' : 'විශේෂාංග'; ?></h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <span class="spec-label"><?php echo ($lang == 'en') ? 'Volume' : 'පරිමාව'; ?></span>
                            <span class="spec-value">200ml</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label"><?php echo ($lang == 'en') ? 'Type' : 'වර්ගය'; ?></span>
                            <span class="spec-value"><?php echo ($lang == 'en') ? 'Ayurvedic Oil' : 'ආයුර්වේද තෙල්'; ?></span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label"><?php echo ($lang == 'en') ? 'Suitable For' : 'සුදුසු වන්නේ'; ?></span>
                            <span class="spec-value"><?php echo ($lang == 'en') ? 'All Hair Types' : 'සියලු හිසකෙස් වර්ග'; ?></span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label"><?php echo ($lang == 'en') ? 'Made In' : 'නිෂ්පාදනය'; ?></span>
                            <span class="spec-value"><?php echo ($lang == 'en') ? 'Sri Lanka' : 'ශ්‍රී ලංකාව'; ?></span>
                        </div>
                    </div>
                </div>
                
                <div class="product-cta">
                    <div class="price">LKR 1,500</div>
                    <button class="btn-primary large" onclick="window.open('https://wa.me/94775596565', '_blank')">
                        <i class="fab fa-whatsapp"></i> <?php echo ($lang == 'en') ? 'Order on WhatsApp' : 'WhatsApp හරහා ඇණවුම් කරන්න'; ?>
                    </button>
                    <p class="delivery-note"><?php echo $text[$lang]['delivery']; ?></p>
                </div>
            </div>
        </div>
        
        <!-- Usage Instructions -->
        <div class="usage-instructions">
            <h2><?php echo ($lang == 'en') ? 'How to Use' : 'භාවිතය කෙසේද'; ?></h2>
            <div class="instructions-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4><?php echo ($lang == 'en') ? 'Apply to Scalp' : 'හිස් කබලට යොදන්න'; ?></h4>
                        <p><?php echo ($lang == 'en') ? 'Take a small amount and massage gently onto scalp' : 'සුළු ප්‍රමාණයක් ගෙන හිස් කබලට සිනිදු ලෙස මසා ගන්න'; ?></p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4><?php echo ($lang == 'en') ? 'Leave Overnight' : 'රාත්‍රිය පුරා තබන්න'; ?></h4>
                        <p><?php echo ($lang == 'en') ? 'Leave for at least 2-3 hours or overnight for best results' : 'හොඳම ප්‍රතිඵල සඳහා අවම වශයෙන් පැය 2-3 ක් හෝ රාත්‍රිය පුරා තබන්න'; ?></p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4><?php echo ($lang == 'en') ? 'Wash Off' : 'ඉවතට'; ?></h4>
                        <p><?php echo ($lang == 'en') ? 'Wash with mild shampoo and warm water' : 'මෘදු ෂැම්පුවක් සහ උණු වතුරෙන් සෝදා ගන්න'; ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
require_once '../footer.php';
?>