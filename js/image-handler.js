// js/3d-model.js
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('3d-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf9f7f3);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);
    
    // Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    
    // GLTF Loader
    const loader = new THREE.GLTFLoader();
    let model;
    
    // Load the 3D model
    loader.load(
        'models/traditional-bottle-3d-model.glb',
        function(gltf) {
            model = gltf.scene;
            
            // Scale and position the model
            model.scale.set(1.5, 1.5, 1.5);
            model.position.set(0, -0.5, 0);
            
            // Enable shadows
            model.traverse(function(child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    
                    // Add material enhancements for gold/green colors
                    if (child.material) {
                        child.material.metalness = 0.5;
                        child.material.roughness = 0.3;
                        child.material.envMapIntensity = 1;
                    }
                }
            });
            
            scene.add(model);
            
            // Center the model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            // Adjust camera position based on model size
            const maxDim = Math.max(size.x, size.y, size.z);
            camera.position.z = maxDim * 2;
            camera.lookAt(center);
            controls.target.copy(center);
            controls.update();
        },
        function(xhr) {
            // Loading progress
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function(error) {
            console.error('Error loading 3D model:', error);
            // Show fallback if model fails to load
            showFallbackModel();
        }
    );
    
    // Fallback 3D model (CSS)
    function showFallbackModel() {
        const fallbackHTML = `
            <div class="fallback-3d">
                <div class="fallback-bottle">
                    <div class="fallback-body"></div>
                    <div class="fallback-neck"></div>
                    <div class="fallback-cap"></div>
                    <div class="fallback-liquid"></div>
                </div>
            </div>
        `;
        container.innerHTML = fallbackHTML;
        
        // Add floating herbs to fallback
        const herbs = container.parentElement.querySelector('.floating-herbs');
        if (herbs) {
            herbs.innerHTML = `
                <span class="herb">🌿</span>
                <span class="herb">🍃</span>
                <span class="herb">✨</span>
            `;
        }
    }
    
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
    window.addEventListener('resize', function() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});