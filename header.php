<?php
// header.php - Updated with Logo
require_once 'config.php';
?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>" data-theme="<?php echo $theme; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="DAMSADI PRODUCTS - Premium Ayurvedic Hair Oil and Beauty Care Solutions">
    <meta name="keywords" content="Ayurvedic, Hair Oil, DAMSADI, Sri Lanka, Natural Products">
    
    <title><?php echo ($lang == 'en') ? 'DAMSADI PRODUCTS - Ayurvedic Hair Care' : 'DAMSADI නිෂ්පාදන - ආයුර්වේද හිසකෙස් රැකවරණය'; ?></title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="images/logo.png">
    <link rel="apple-touch-icon" href="images/logo.png">
    
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;500;600;700&display=swap">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Three.js for 3D Model -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.min.js"></script>
    
    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
    
    <!-- JavaScript -->
    <script src="script.js" defer></script>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <!-- Logo with Image -->
            <a href="index.php" class="logo">
                <?php
                // Check if logo exists, fallback to text if not
                $logo_path = 'images/logo.png';
                if (file_exists($logo_path)): 
                ?>
                    <div class="logo-image-container">
                        <img src="<?php echo $logo_path; ?>" alt="DAMSADI Logo" class="logo-image" 
                             onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 50\"><text x=\"10\" y=\"35\" font-family=\"Arial\" font-size=\"24\" fill=\"%231A5D1A\"></text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"10\" fill=\"%23D4AF37\"></text></svg>
                    </div>
                <?php else: ?>
                    <div class="logo-placeholder">
                        <div class="logo-text">DAMSADI</div>
                        <div class="logo-sub">PRODUCTS</div>
                    </div>
                <?php endif; ?>
            </a>
            
            <!-- Desktop Navigation Menu -->
            <ul class="nav-menu">
                <li><a href="index.php" class="nav-link"><?php echo $text[$lang]['nav_home']; ?></a></li>
                <li><a href="#product" class="nav-link"><?php echo $text[$lang]['nav_products']; ?></a></li>
                <li><a href="#about" class="nav-link"><?php echo $text[$lang]['nav_about']; ?></a></li>
                <li><a href="#contact" class="nav-link"><?php echo $text[$lang]['nav_contact']; ?></a></li>
            </ul>
            
            <!-- Navigation Controls -->
            <div class="nav-controls">
                <button class="lang-toggle" onclick="window.location.href='?toggle_language=1'">
                    <i class="fas fa-language"></i> <?php echo strtoupper($lang); ?>
                </button>
                <button class="theme-toggle" onclick="window.location.href='?toggle_theme=1'">
                    <i class="<?php echo ($theme == 'light') ? 'fas fa-moon' : 'fas fa-sun'; ?>"></i>
                </button>
                
                <!-- Mobile Menu Button -->
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <a href="index.php" class="mobile-nav-link"><?php echo $text[$lang]['nav_home']; ?></a>
            <a href="#product" class="mobile-nav-link"><?php echo $text[$lang]['nav_products']; ?></a>
            <a href="#about" class="mobile-nav-link"><?php echo $text[$lang]['nav_about']; ?></a>
            <a href="#contact" class="mobile-nav-link"><?php echo $text[$lang]['nav_contact']; ?></a>
            <div class="mobile-controls">
                <button class="lang-toggle" onclick="window.location.href='?toggle_language=1'">
                    <i class="fas fa-language"></i> <?php echo strtoupper($lang); ?>
                </button>
                <button class="theme-toggle" onclick="window.location.href='?toggle_theme=1'">
                    <i class="<?php echo ($theme == 'light') ? 'fas fa-moon' : 'fas fa-sun'; ?>"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main id="main-content">