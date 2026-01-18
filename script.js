// script.js - DAMSADI PRODUCTS Website Functionality
// Complete with 3D model loader and all interactive features

document.addEventListener('DOMContentLoaded', function() {
    console.log('DAMSADI Products website initializing...');

    // ==================== 1. MOBILE MENU FUNCTIONALITY ====================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!event.target.closest('.nav-container') && !event.target.closest('.mobile-menu')) {
                mobileMenu.classList.remove('active');
                if (mobileMenuBtn) {
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    });

    // Close mobile menu when clicking a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                if (mobileMenuBtn) {
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    // ==================== 2. NAVBAR SCROLL EFFECTS ====================
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Shrink navbar on scroll
            if (scrollTop > 100) {
                navbar.style.padding = '5px 0';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            } else {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = 'var(--shadow)';
            }
            
            // Hide/show navbar on scroll
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
                navbar.style.transition = 'transform 0.3s ease';
            } else {
                navbar.style.transform = 'translateY(0)';
                navbar.style.transition = 'transform 0.3s ease';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // ==================== 3. 3D MODEL LOADER ====================
    function load3DModel() {
        const container = document.getElementById('3d-container');
        if (!container) {
            console.log('3D container not found');
            return;
        }

        // Check if Three.js is available
        if (typeof THREE === 'undefined') {
            console.error('Three.js library not loaded');
            showFallback3D();
            return;
        }

        // Initialize Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true,
            powerPreference: "high-performance"
        });
        
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        // Add colored accent lights
        const greenLight = new THREE.PointLight(0x1A5D1A, 0.4, 50);
        greenLight.position.set(-5, 3, 5);
        scene.add(greenLight);
        
        const goldLight = new THREE.PointLight(0xD4AF37, 0.3, 50);
        goldLight.position.set(5, 2, -5);
        scene.add(goldLight);
        
        // Add subtle background glow
        const hemiLight = new THREE.HemisphereLight(0x1A5D1A, 0x0F3D0F, 0.2);
        scene.add(hemiLight);
        
        // Orbit controls for interactive viewing
        let controls;
        if (typeof THREE.OrbitControls !== 'undefined') {
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.rotateSpeed = 0.5;
            controls.minDistance = 3;
            controls.maxDistance = 10;
            controls.enableZoom = true;
            controls.enablePan = false;
        }
        
        // Load GLB/GLTF model
        let model;
        const loader = new THREE.GLTFLoader();
        
        // Show loading message
        const loadingMsg = document.createElement('div');
        loadingMsg.className = 'loading-message';
        loadingMsg.innerHTML = `
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: var(--primary-gold);
                font-size: 16px;
                text-align: center;
                z-index: 100;
            ">
                <div class="loading-spinner"></div>
                <p>Loading 3D Model...</p>
            </div>
        `;
        container.appendChild(loadingMsg);
        
        // Add CSS for loading spinner
        const spinnerStyle = document.createElement('style');
        spinnerStyle.textContent = `
            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 4px solid rgba(212, 175, 55, 0.3);
                border-top: 4px solid var(--primary-gold);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 10px;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinnerStyle);
        
        // Load the 3D model - UPDATE THIS PATH TO MATCH YOUR FILE LOCATION
        loader.load(
            'models/traditional bottle 3d model.glb', // Change this path if needed
            function(gltf) {
                // Remove loading message
                if (loadingMsg.parentNode) {
                    loadingMsg.parentNode.removeChild(loadingMsg);
                }
                
                model = gltf.scene;
                
                // Scale and position the model
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3()).length();
                const center = box.getCenter(new THREE.Vector3());
                
                model.position.x = -center.x;
                model.position.y = -center.y;
                model.position.z = -center.z;
                
                // Auto-scale to fit container
                const maxDim = Math.max(size, 1);
                const scale = 3 / maxDim;
                model.scale.multiplyScalar(scale);
                
                // Center the model
                model.position.set(0, -0.5, 0);
                
                // Apply custom materials
                model.traverse(function(child) {
                    if (child.isMesh) {
                        // Enable shadows
                        child.castShadow = true;
                        child.receiveShadow = true;
                        
                        // Apply gold material to cap
                        if (child.name.toLowerCase().includes('cap') || 
                            child.name.toLowerCase().includes('lid') ||
                            child.name.toLowerCase().includes('top')) {
                            const goldMaterial = new THREE.MeshStandardMaterial({
                                color: 0xD4AF37,
                                metalness: 0.9,
                                roughness: 0.1,
                                envMapIntensity: 1
                            });
                            child.material = goldMaterial;
                        }
                        
                        // Apply green glass material to bottle body
                        else if (child.name.toLowerCase().includes('body') || 
                                 child.name.toLowerCase().includes('bottle') ||
                                 child.name.toLowerCase().includes('glass')) {
                            const greenGlassMaterial = new THREE.MeshPhysicalMaterial({
                                color: 0x1A5D1A,
                                transmission: 0.8,
                                thickness: 0.5,
                                roughness: 0.1,
                                metalness: 0.1,
                                specularIntensity: 1,
                                ior: 1.5,
                                transparent: true,
                                opacity: 0.9,
                                side: THREE.DoubleSide
                            });
                            child.material = greenGlassMaterial;
                        }
                        
                        // Apply label/sticker materials
                        else if (child.name.toLowerCase().includes('label') || 
                                 child.name.toLowerCase().includes('sticker') ||
                                 child.name.toLowerCase().includes('logo')) {
                            const labelMaterial = new THREE.MeshStandardMaterial({
                                color: 0xFFFFFF,
                                metalness: 0.1,
                                roughness: 0.5
                            });
                            child.material = labelMaterial;
                        }
                    }
                });
                
                scene.add(model);
                
                // Set camera position based on model size
                camera.position.set(0, 1, 5);
                camera.lookAt(0, 0, 0);
                
                if (controls) {
                    controls.target.set(0, 0.5, 0);
                    controls.update();
                }
                
                // Add hover effect
                container.addEventListener('mouseenter', function() {
                    if (controls) {
                        controls.autoRotate = false;
                    }
                });
                
                container.addEventListener('mouseleave', function() {
                    if (controls) {
                        controls.autoRotate = true;
                        controls.autoRotateSpeed = 1.0;
                    }
                });
                
                // Enable auto-rotation by default
                if (controls) {
                    controls.autoRotate = true;
                    controls.autoRotateSpeed = 1.0;
                }
                
                console.log('3D model loaded successfully');
            },
            function(xhr) {
                // Loading progress
                const percentLoaded = (xhr.loaded / xhr.total * 100);
                console.log(percentLoaded.toFixed(2) + '% loaded');
                
                if (loadingMsg) {
                    loadingMsg.querySelector('p').textContent = `Loading 3D Model... ${percentLoaded.toFixed(0)}%`;
                }
            },
            function(error) {
                console.error('Error loading 3D model:', error);
                
                // Remove loading message
                if (loadingMsg.parentNode) {
                    loadingMsg.parentNode.removeChild(loadingMsg);
                }
                
                // Show fallback 3D
                showFallback3D();
            }
        );
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            if (controls) {
                controls.update();
            }
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Handle window resize
        function handleResize() {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', function() {
            window.removeEventListener('resize', handleResize);
            if (renderer) {
                renderer.dispose();
            }
        });
    }
    
    // Fallback 3D animation (if Three.js fails)
    function showFallback3D() {
        const container = document.getElementById('3d-container');
        if (!container) return;
        
        container.innerHTML = `
            <div class="fallback-3d">
                <div class="fallback-bottle">
                    <div class="fallback-body"></div>
                    <div class="fallback-neck"></div>
                    <div class="fallback-cap"></div>
                    <div class="fallback-liquid"></div>
                </div>
                <div class="fallback-message">
                    <p>Interactive 3D Model</p>
                    <small>Move mouse to rotate</small>
                </div>
            </div>
        `;
        
        // Add fallback animation
        const bottle = container.querySelector('.fallback-bottle');
        let rotation = 0;
        
        function rotateBottle() {
            rotation += 0.5;
            bottle.style.transform = `rotateY(${rotation}deg)`;
            requestAnimationFrame(rotateBottle);
        }
        
        rotateBottle();
        
        // Interactive rotation on mouse move
        container.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateY = (x / rect.width - 0.5) * 180;
            const rotateX = (0.5 - y / rect.height) * 30;
            
            bottle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        container.addEventListener('mouseleave', function() {
            bottle.style.transition = 'transform 1s ease';
            bottle.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    }
    
    // Initialize 3D model
    load3DModel();

    // ==================== 4. FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const buttonText = submitBtn.querySelector('.button-text');
        const loadingSpinner = submitBtn.querySelector('.loading-spinner');
        const formMessage = document.getElementById('formMessage');

        // UI Feedback: Start loading
        buttonText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';
        submitBtn.disabled = true;

        try {
            const response = await fetch('send_email.php', {
                method: 'POST',
                body: new FormData(this)
            });
            const result = await response.json();

            // Show Result
            formMessage.textContent = result.message;
            formMessage.style.display = 'block';
            formMessage.style.color = result.success ? '#28a745' : '#dc3545';
            formMessage.style.marginTop = '15px';

            if (result.success) {
                this.reset(); // Clear the form on success
                setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            // UI Feedback: Stop loading
            buttonText.style.display = 'inline-block';
            loadingSpinner.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}
    // ==================== 5. WHATSAPP ORDER BUTTONS ====================
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, [onclick*="whatsapp"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.getAttribute('onclick')) {
                e.preventDefault();
                const phoneNumber = '94775596565';
                const productName = 'DAMSADI Hair Oil';
                const message = encodeURIComponent(`Hello! I would like to order ${productName}. Please send me more information.`);
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }
        });
    });

    // ==================== 6. PRODUCT IMAGE GALLERY ====================
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.image-placeholder-large');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                const colors = ['#1A5D1A', '#2E8B57', '#0F3D0F'];
                const icons = ['fa-oil-can', 'fa-leaf', 'fa-spa'];
                mainImage.style.borderColor = colors[index];
                mainImage.querySelector('i').className = `fas ${icons[index]}`;
                mainImage.querySelector('i').style.color = colors[index];
                mainImage.querySelector('span').textContent = `Product View ${index + 1}`;
                
                // Add zoom effect
                mainImage.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    mainImage.style.transform = 'scale(1)';
                }, 300);
            });
        });
    }

    // ==================== 7. SCROLL ANIMATIONS ====================
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .contact-item, .step, .roadmap-item, .symbol');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    }

    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // ==================== 8. NOTIFICATION SYSTEM ====================
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 80px;
                right: 20px;
                background: var(--card-bg);
                color: var(--text-color);
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                z-index: 9999;
                animation: slideIn 0.3s ease;
                border-left: 4px solid;
            }
            
            .notification-success { border-left-color: var(--success-color); }
            .notification-error { border-left-color: var(--danger-color); }
            .notification-info { border-left-color: var(--info-color); }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                margin-left: 15px;
                opacity: 0.7;
                transition: opacity 0.3s;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    // ==================== 9. LANGUAGE HELPER FUNCTIONS ====================
    function getSuccessMessage(type) {
        const currentLang = document.documentElement.lang || 'si';
        const messages = {
            'contact': {
                'en': 'Thank you for your message! We will contact you soon.',
                'si': 'ඔබේ පණිවිඩයට ස්තුතියි! අපි ඔබව ඉක්මනින් සම්බන්ධ වේවි.'
            },
            'order': {
                'en': 'Order placed successfully! We will process it shortly.',
                'si': 'ඇණවුම සාර්ථකව ලැබුණි! අපි එය ඉක්මනින් සකස් කරන්නෙමු.'
            }
        };
        return messages[type]?.[currentLang] || messages[type]?.['si'] || 'Success!';
    }

    function getErrorMessage(type) {
        const currentLang = document.documentElement.lang || 'si';
        const messages = {
            'required': {
                'en': 'Please fill in all required fields.',
                'si': 'කරුණාකර අවශ්‍ය සියලු ක්ෂේත්‍ර පුරවන්න.'
            },
            'invalid': {
                'en': 'Please enter valid information.',
                'si': 'කරුණාකර වලංගු තොරතුරු ඇතුළත් කරන්න.'
            }
        };
        return messages[type]?.[currentLang] || messages[type]?.['si'] || 'Please check your input.';
    }

    // ==================== 10. ACTIVE NAV LINK HIGHLIGHTING ====================
    function highlightActiveNav() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.php') ||
                (linkHref && linkHref.includes(currentPage) && currentPage !== '')) {
                link.classList.add('active');
                link.style.color = 'var(--primary-gold)';
                link.style.fontWeight = '600';
            }
        });
    }
    
    highlightActiveNav();

    // ==================== 11. THEME PERSISTENCE ====================
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle && !document.body.classList.contains('theme-toggle-handled')) {
        // Check for saved theme
        const savedTheme = localStorage.getItem('damsadi-theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
            const icon = themeToggle.querySelector('i');
            if (savedTheme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update theme
            document.body.setAttribute('data-theme', newTheme);
            
            // Update icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
            
            // Save to localStorage
            localStorage.setItem('damsadi-theme', newTheme);
            
            // Show notification
            showNotification(
                newTheme === 'dark' ? 
                (document.documentElement.lang === 'en' ? 'Dark mode enabled' : 'අඳුරු ප්‍රකාරය සක්‍රීය කර ඇත') :
                (document.documentElement.lang === 'en' ? 'Light mode enabled' : 'ආලෝක ප්‍රකාරය සක්‍රීය කර ඇත'),
                'info'
            );
        });
        
        document.body.classList.add('theme-toggle-handled');
    }

    // ==================== 12. BACK TO TOP BUTTON ====================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-green);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Add hover effects
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = 'var(--hover-green)';
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--primary-green)';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });
    
    // Scroll to top
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 300) {
            backToTopBtn.style.display = 'flex';
            setTimeout(() => {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.transform = 'translateY(0)';
            }, 10);
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (parseFloat(backToTopBtn.style.opacity) === 0) {
                    backToTopBtn.style.display = 'none';
                }
            }, 300);
        }
    });

    // ==================== 13. PRODUCT QUANTITY SELECTOR ====================
    const quantityInput = document.querySelector('.quantity-input');
    const minusBtn = document.querySelector('.quantity-minus');
    const plusBtn = document.querySelector('.quantity-plus');
    
    if (quantityInput && minusBtn && plusBtn) {
        minusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
                updatePrice();
                animateButton(this);
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
            updatePrice();
            animateButton(this);
        });
        
        quantityInput.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (isNaN(value) || value < 1) {
                this.value = 1;
            }
            updatePrice();
        });
        
        function updatePrice() {
            const basePrice = 1500;
            const quantity = parseInt(quantityInput.value);
            const totalPrice = basePrice * quantity;
            const priceElement = document.querySelector('.price');
            if (priceElement) {
                // Animate price change
                priceElement.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    priceElement.textContent = `LKR ${totalPrice.toLocaleString()}`;
                    priceElement.style.transform = 'scale(1)';
                }, 150);
            }
        }
        
        function animateButton(button) {
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        }
    }

    // ==================== 14. COUNTER ANIMATIONS ====================
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + '+';
            }
        }, 16);
    }

    // Initialize counters when in viewport
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target')) || 100;
                    animateCounter(entry.target, target, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    // ==================== 15. PARALLAX EFFECTS ====================
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            heroSection.style.backgroundPosition = `center ${rate}px`;
        });
    }

    // ==================== 16. FLOATING HERBS ANIMATION ====================
    const herbs = document.querySelectorAll('.herb');
    herbs.forEach((herb, index) => {
        // Randomize animation
        const duration = 3 + Math.random() * 2;
        const delay = index * 0.5;
        
        herb.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
    });

    // ==================== 17. WAVE ANIMATION ====================
    const waves = document.querySelectorAll('.wave');
    waves.forEach((wave, index) => {
        const duration = 8 + index * 2;
        wave.style.animation = `wave ${duration}s linear infinite`;
    });

    // ==================== 18. INITIALIZATION COMPLETE ====================
    console.log('DAMSADI Products website initialized successfully!');
    
    // Add loading spinner CSS
    const loadingSpinnerCSS = document.createElement('style');
    loadingSpinnerCSS.textContent = `
        .loading-spinner-small {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
            margin-right: 8px;
            vertical-align: middle;
        }
        
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255,255,255,.3);
            border-radius: 50%;
            border-top-color: var(--primary-gold);
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(loadingSpinnerCSS);
});

// ==================== 19. WINDOW LOAD EVENT ====================
window.addEventListener('load', function() {
    // Remove loading screen if exists
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, 500);
    }
    
    // Update copyright year
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ==================== 20. ERROR HANDLING ====================
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    
    // Don't show error alerts in production
    if (window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1')) {
        return;
    }
    
    // Show friendly error message in development
    const errorMsg = `Error: ${e.message}\nFile: ${e.filename}\nLine: ${e.lineno}`;
    console.error(errorMsg);
});

// ==================== 21. OFFLINE DETECTION ====================
window.addEventListener('offline', function() {
    showNotification(
        document.documentElement.lang === 'en' ? 
        'You are currently offline. Some features may not work.' :
        'ඔබ දැන් අන්තර්ජාලයෙන් බැහැරය. සමහර විශේෂාංග වැඩ නොකරනු ඇත.',
        'error'
    );
});

window.addEventListener('online', function() {
    showNotification(
        document.documentElement.lang === 'en' ? 
        'You are back online!' :
        'ඔබ නැවත අන්තර්ජාලයට සම්බන්ධ විය!',
        'success'
    );
});

// Helper function for showNotification (if called from window events)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add basic styles if not already added
    if (!document.querySelector('style[data-notification-styles]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification-styles', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 80px;
                right: 20px;
                background: var(--card-bg);
                color: var(--text-color);
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                z-index: 9999;
                animation: slideIn 0.3s ease;
                border-left: 4px solid;
            }
            
            .notification-success { border-left-color: #28a745; }
            .notification-error { border-left-color: #dc3545; }
            .notification-info { border-left-color: #17a2b8; }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                margin-left: 15px;
                opacity: 0.7;
                transition: opacity 0.3s;
            }
            
            .notification-close:hover { opacity: 1; }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}