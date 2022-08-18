<template>
  <div id="logo" class="logo group">
    <audio id="sound3" volume="0" :src="require(`~/assets/sounds/2.ogg`).default" />   
    <NuxtLink to="/">
      <svg class="svg-logo group-hover:animate-pulse" style="filter:url(#distortion-2);" view-box="0 0 70 70" width="70" height="70">
      </svg>
    </NuxtLink>

  </div>
</template>
<style lang="postcss">
  /* LOGO */
    .logo { @apply w-[70px] top-[0px] left-[5rem] fixed h-[70px] z-50; }
    .svg-logo { @apply top-0 relative mix-blend-difference; }
    .svg-logo path { @apply drop-shadow-sm; }
    .logo a { text-decoration:none; }
</style>
<script>
export default {
  data: () => ({
    coloris: 'rgba(0,0,0,1)',
  }),
  methods: {
    appear() {
      this.$gsap.from("#feDisplacementMapDistortion2",{ attr:{ values: '666' }, duration: 5, ease:'Power4.easeInOut'});
    },
    hover(){
      const audio = document.querySelector("#sound3");
      audio.volume = 0;
      audio.loop = true;
      
      function pauseSound(){ audio.pause(); }
      
      const hoverEffect = this.$gsap.timeline({ paused:true });
      hoverEffect.to("#feDisplacementMapDistortion2",{ attr:{ values: '666' }, duration: 0.5, ease:'Power4.easeInOut'});
      const logo = document.querySelector("#logo");
      logo.addEventListener("mouseenter", () => {
        hoverEffect.play();
        audio.play();
        this.$gsap.to(audio, 1, {volume:0.5} );
        this.coloris = 'rgba(255,0,0,1)'
      });
      logo.addEventListener("mouseleave", () => {
            hoverEffect.reverse();
            this.$gsap.to(audio, 1, {volume:0 , onComplete:pauseSound});
            this.coloris = 'rgba(0,0,0,1)'
          });

    },
    logo() {
      "use strict";
      class Point2 {
        constructor(x, y) {
          this.x = typeof x === "number" ? x : 0;
          this.y = typeof y === "number" ? y : 0;
        }}
      class Point3 extends Point2 {
        constructor(x, y, z) {
          super(x, y);
          this.z = typeof z === "number" ? z : 0;
        }}
      class Cube {
        constructor(center, size) {
          const d = size /2;

          this.vertices = [
          new Point3(center.x - d, center.y - d, center.z + d),
          new Point3(center.x - d, center.y - d, center.z - d),
          new Point3(center.x + d, center.y - d, center.z - d),
          new Point3(center.x + d, center.y - d, center.z + d),
          new Point3(center.x + d, center.y + d, center.z + d),
          new Point3(center.x + d, center.y + d, center.z - d),
          new Point3(center.x - d, center.y + d, center.z - d),
          new Point3(center.x - d, center.y + d, center.z + d)];


          this.faces = [
          [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
          [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
          [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
          [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
          [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
          [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]];

        }

        render(container, dx, dy) {
          container.innerHTML = "";
          for (let i = 0, ii = this.faces.length; i < ii; i++) {
            let face = this.faces[i];
            let point = Project(face[0]);
            var str = `<path d="M${point.x + dx} ${-point.y + dy}`;
            for (let o = 1, oo = face.length; o < oo; o++) {
              point = Project(face[o]);
              str += ` L ${point.x + dx} ${-point.y + dy}`;
            }
            str += ` Z" fill="rgba(255, 255, 255, 1)"  stroke="rgba(0, 0, 0, 1)">`;
            container.innerHTML += str;
          }
        }}
      const Project = vertice => new Point2(vertice.x, vertice.z);
      const Rotate = (vertice, center, theta, phi) => {
        var ct = Math.cos(theta),
        st = Math.sin(theta),
        cp = Math.cos(phi),
        sp = Math.sin(phi),
        x = vertice.x - center.x,
        y = vertice.y - center.y,
        z = vertice.z - center.z;

        vertice.x = ct * x - st * cp * y + st * sp * z + center.x;
        vertice.y = st * x + ct * cp * y - ct * sp * z + center.y;
        vertice.z = sp * y + cp * z + center.z;
      };
      const container = document.querySelector(".svg-logo");
      const width = container.attributes.width.value;
      const height = container.attributes.height.value;
      const dx = width / 2;
      const dy = height / 2;
      const center = new Point3(0, dy, 0);
      const cube = new Cube(center, dy);
      const mouse = {
        down: false,
        x: 0,
        y: 0
      };
      const Tick = () => {
        for (var i = 0, ii = 8; i < ii; i++) {
          Rotate(cube.vertices[i], center, Math.PI / 270, Math.PI / 450);
        }
        cube.render(container, dx, dy);
        !mouse.down ? requestAnimationFrame(Tick) : null;
      };
      cube.render(container, dx, dy);
      container.addEventListener("mousedown", e => {
        mouse.down = true;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
      container.addEventListener("mousemove", e => {
        if (mouse.down) {
          var theta = (e.clientX - mouse.x) * Math.PI / 360;
          var phi = (e.clientY - mouse.y) * Math.PI / 180;
          for (var i = 0, ii = 8; i < ii; i++) {
            Rotate(cube.vertices[i], center, theta, phi);
          }
          mouse.x = e.clientX;
          mouse.y = e.clientY;
          cube.render(container, dx, dy);
        }
      });
      container.addEventListener("mouseup", e => {
        setTimeout(() => {
          mouse.down = false;
          requestAnimationFrame(Tick);
        }, 500);
      });
      requestAnimationFrame(Tick);
    }
  },
  mounted() {
    if(this.$store.state.preloading === false) {
      console.log("Preloading is not active - Logo/cube.vue")
    } else {
      console.log("Preloading is active - Logo/cube.vue")
    }
    this.appear();
    this.hover();
    this.logo();
  }
}
</script>
