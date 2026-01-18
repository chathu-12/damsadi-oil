<?php
// Start session for theme and language preferences
session_start();

// Default settings
if (!isset($_SESSION['language'])) {
    $_SESSION['language'] = 'si'; // Default to Sinhala
}
if (!isset($_SESSION['theme'])) {
    $_SESSION['theme'] = 'light'; // Default to light mode
}

// Language toggle function
function toggleLanguage() {
    $_SESSION['language'] = ($_SESSION['language'] == 'en') ? 'si' : 'en';
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit();
}

// Theme toggle function
function toggleTheme() {
    $_SESSION['theme'] = ($_SESSION['theme'] == 'light') ? 'dark' : 'light';
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit();
}

// Handle toggle requests
if (isset($_GET['toggle_language'])) {
    toggleLanguage();
}
if (isset($_GET['toggle_theme'])) {
    toggleTheme();
}
// At the top of your PHP files
if ($_SERVER['HTTP_X_FORWARDED_PROTO'] != 'https') {
    header("Location: https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
    exit();
}

// Language content arrays
$text = array(
    'en' => array(
        'nav_home' => 'Home',
        'nav_products' => 'Products',
        'nav_about' => 'About Us',
        'nav_contact' => 'Contact',
        'hero_title' => 'The Latest Ayurvedic Secret',
        'hero_subtitle' => 'DAMSADI Isiwara Kesa Lepaya!',
        'hero_text' => 'Suffering from long-term hair loss, thinning hair, or scalp irritation? From today, find a natural solution to your problem!',
        'product_title' => 'DAMSADI Isiwara Kesa Lepaya',
        'feature1' => '100% Natural Ayurvedic Oil Blend',
        'feature2' => 'Quickly enhances hair growth patterns',
        'feature3' => 'Cools the scalp and provides moisture',
        'feature4' => 'Stops hair fall and adds thickness',
        'feature5' => 'An Ayurvedic preparation from an ancient recipe',
        'testimonial' => 'Many users have seen excellent improvement in their hair condition. Try it today!',
        'order_now' => 'Order Now!',
        'phone' => '0775596565 (WhatsApp Message)',
        'delivery' => 'Delivery Available Islandwide',
        'footer' => 'DAMSADI PRODUCTS (PVT) LTD - Premium Ayurvedic Beauty Care'
    ),
    'si' => array(
        'nav_home' => 'මුල් පිටුව',
        'nav_products' => 'නිෂ්පාදන',
        'nav_about' => 'අප ගැන',
        'nav_contact' => 'සම්බන්ධ වන්න',
        'hero_title' => 'අලුත්ම ආයුර්වේද රහස',
        'hero_subtitle' => 'DAMSADI ඉසිවර කේෂා ලේපය!',
        'hero_text' => 'දිගු කල් හිසකෙස් ගැලවීම, හිසකෙස් තුනී වීම, හිස් කබල වේලීම මෙවැනි දෑ මඟින් ඔබත් පීඩා විඳිනවද? අදින්ම ඔබේ ගැටලුවට ස්වභාවික විසඳුමක්!',
        'product_title' => 'DAMSADI ඉසිවර කේෂා ලේපය',
        'feature1' => '100% ස්වභාවික ඖෂධීය තෙල් මිශ්‍රණය',
        'feature2' => 'හිසකෙස් වැඩෙන ආකාරය ඉක්මනින් වැඩි කරයි',
        'feature3' => 'හිස් කබල සිසිල් කර තෙතමනය ලබා දෙයි',
        'feature4' => 'ගැලවෙන හිසකෙස් නවත්වා තද බව ගෙන දෙයි',
        'feature5' => 'පැරණි ආයුර්වේද වට්ටෝරුවකින් සකස් කළ ඖෂධීය ලේපයක්',
        'testimonial' => 'මේක භාවිතා කළ ගොඩක් අයගේ හිසකෙස් තත්ත්වය මනා ලෙස වර්ධනයක් දක්නට ලැබේ. ඔබත් අදම උත්සාහ කරලා බලන්න',
        'order_now' => 'ඇණවුම් කරන්න දැන්ම!',
        'phone' => '📞 0775596565 (WhatsApp Message)',
        'delivery' => 'ඩිලිවරි තිබෙනවා - දිවයින පුරා',
        'footer' => 'DAMSADI PRODUCTS (PVT) LTD - විශිෂ්ඨ ආයුර්වේද සුන්දරත්ව රැකවරණය'
    )
);

// Current language and theme
$lang = $_SESSION['language'];
$theme = $_SESSION['theme'];
?>