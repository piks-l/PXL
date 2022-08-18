<template>
    <div class="bumpEffect"></div>
</template>
<style lang="postcss">
    .bumpEffect {
        @apply saturate-0;
    }
</style>
<script>
export default {
  methods: {
    initEffect() {
        // Define the standard global variables
        var container,
        scene,
        camera,
        renderer,
        plane,
        mouseMesh,
        light;

        // Custom global variables
        var mouse = {
        x: 0,
        y: 0
        };

        init();
        animate();

        function init() {

            // Scene
            scene = new THREE.Scene();

            window.addEventListener('resize', function() {
                var WIDTH = window.innerWidth,
                HEIGHT = window.innerHeight;
                renderer.setSize(WIDTH, HEIGHT);
                camera.aspect = WIDTH / HEIGHT;
                camera.updateProjectionMatrix();
            });

            // Camera
            var screenWidth = window.innerWidth,
                screenHeight = window.innerHeight,
                viewAngle = 45,
                nearDistance = 0.1,
                farDistance = 1000;
            camera = new THREE.PerspectiveCamera(viewAngle, screenWidth / screenHeight, nearDistance, farDistance);
            scene.add(camera);
            camera.position.set(0, 0, 10);
            camera.lookAt(scene.position);

            // Renderer engine together with the background
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setSize(screenWidth, screenHeight);
            container = document.querySelector('.bumpEffect');
            container.appendChild(renderer.domElement);

            // Define the lights for the scene
            light = new THREE.PointLight(0xffffff);
            light.position.set(0, 0, 0);
            scene.add(light);
            var lightAmb = new THREE.AmbientLight(0x000000);
            scene.add(lightAmb);
            
            // Textures

            const texture = new THREE.TextureLoader().load('/img/ProjectJ.gif')
            texture.crossOrigin = 'anonymous';
            var oldMaterial = new THREE.MeshPhongMaterial({
                color      :  new THREE.Color("rgb(255,255,255)"),
                emissive   :  new THREE.Color("rgb(0,0,0)"),
                map        :  texture,
                bumpMap    :  texture,
                bumpScale  :  0.045,
            });
            // Create a circle around the mouse and move it
            // The sphere has opacity 0
                let ang_rad = camera.fov * Math.PI / 180;
                let fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;
            var mouseGeometry = new THREE.PlaneGeometry(fov_y * camera.aspect, fov_y * camera.aspect, 1000 );
            var mouseMaterial = new THREE.MeshLambertMaterial({});
            mouseMesh = new THREE.Mesh(mouseGeometry, oldMaterial);

            mouseMesh.position.set(0, 0, 0);
            scene.add(mouseMesh);

            // When the mouse moves, call the given function
        }
                            document.addEventListener('mousemove', onMouseMove, false);

        // Follows the mouse event
        function onMouseMove(event) {

        // Update the mouse variable
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Make the sphere follow the mouse
        var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        vector.unproject(camera);
        var dir = vector.sub(camera.position).normalize();
        var distance = -camera.position.z / dir.z;
        var pos = camera.position.clone().add(dir.multiplyScalar(distance));
        //mouseMesh.position.copy(pos);

        light.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
        };

        // Animate the elements
        function animate() {
            requestAnimationFrame(animate);
            render();

        }

        // Rendering function
        function render() {

            // For rendering
            renderer.autoClear = false;
            renderer.clear();
            renderer.render(scene, camera);
            
        };
    },
    animateOnScroll() {
        var blocArtiste = this.$gsap.timeline({
                scrollTrigger: {
                    trigger: ".bumpEffect",
                    start: "center bottom",
                    end: "center top",
                    scrub: false,
                    toggleActions: "play reverse play reverse",
                    onEnterBack: () => {
                        dateEvent.play();
                    },
                    onLeaveBack: () => {
                        dateEvent.reverse();
                    },
                    onEnter: () => {
                        dateEvent.play();
                    },
                    onLeave: () => {
                        dateEvent.reverse();
                    },
                    //markers: {startColor: "purple", endColor: "yellow", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
            }).fromTo(".bumpEffect", {  y: 50, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "lineary"});
    }
  },
  mounted() {
    this.initEffect();
    //this.animateOnScroll();
  }
}
</script>
