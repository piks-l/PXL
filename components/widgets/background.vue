<template>
<div>
  <svg class="svg-filter">
    <defs>
      <!-- Pixelisations (animated) -->
      <filter id="pixelateMax" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox">
        <feTurbulence id="feTurbulenceMax" type="turbulence" baseFrequency="0.0006" numOctaves="1" seed="8" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="G" yChannelSelector="B" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
        <animate xlink:href="#feTurbulenceMax" attributeName="baseFrequency" dur="10000s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>
      </filter>
      <filter id="pixelateMin" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox">
        <feTurbulence id="feTurbulenceMin" type="fractalNoise" baseFrequency="0.0006" numOctaves="1" seed="8" stitchTiles="noStitch" x="-10%" y="-10%" width="120%" height="120%"></feTurbulence> 
        <feDisplacementMap in="SourceGraphic" in2="fractalNoise" scale="20" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap> 
        <animate xlink:href="#feTurbulenceMin" attributeName="baseFrequency" dur="10000s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>
      </filter>
      <filter id="pixelateOnScroll" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
        <feTurbulence id="feTurbulenceScroll" type="turbulence" baseFrequency="0.0000006" numOctaves="1" seed="8" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
        <feDisplacementMap id="feDisplacementMapScroll" in="SourceGraphic" in2="turbulence" scale="0" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
        <animate xlink:href="#feTurbulenceScroll" attributeName="baseFrequency" dur="6s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>
      </filter>
      <filter id="pixelateOnSlide" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
        <feTurbulence id="feTurbulenceSlide" type="fractalNoise" baseFrequency="0.0000006" numOctaves="1" seed="8" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
        <feDisplacementMap id="feDisplacementMapSlide" in="SourceGraphic" in2="fractalNoise" scale="20" xChannelSelector="B" yChannelSelector="B" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
        <animate xlink:href="#feTurbulenceSlide" attributeName="baseFrequency" dur="10s" keyTimes="0;0.5;1" values="1000;5.1;1000;" repeatCount="indefinite"></animate>
        <animate xlink:href="#feTurbulenceSlide" attributeName="numOctaves" dur="10s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>

      </filter>
      <!-- Distortions (animated) -->
      <filter id="distortion-1">
        <feTurbulence baseFrequency=".015" type="fractalNoise"/>
        <feColorMatrix type="hueRotate" values="0">
          <animate attributeName="values" from="0" to="360" dur="1s" repeatCount="indefinite"/>
        </feColorMatrix>
        <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="2">
          <animate attributeName="scale" values="0;2;5;0" dur="30s" repeatCount="indefinite"/>
        </feDisplacementMap>
        <feGaussianBlur stdDeviation="3"/>
        <feComponentTransfer result="main">
          <feFuncA type="gamma" amplitude="150" exponent="5"/>
        </feComponentTransfer>
        <feColorMatrix type="matrix" 
                      values="0 0 0 0 0 
                              0 0 0 0 0
                              0 0 0 0 0
                              0 0 0 1 0"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite operator="over" in="main"/>
      </filter>
      <filter id="distortion-2">
        <feTurbulence id="feTurbulenceDistortion2" baseFrequency="0.050" type="fractalNoise"/>
        <feColorMatrix type="hueRotate" values="0">
          <animate attributeName="values" from="0" to="360" dur="6s" repeatCount="indefinite"/>
        </feColorMatrix>
        <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="10">
          <animate id="feDisplacementMapDistortion2" attributeName="scale" values="0" dur="6s" repeatCount="indefinite"/>
        </feDisplacementMap>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComponentTransfer result="main">
          <feFuncA type="gamma" amplitude="150" exponent="5"/>
        </feComponentTransfer>
        <feColorMatrix type="matrix"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                0 0 1 0 1
                                0 0 0 0 0"/>
        <feGaussianBlur stdDeviation="50"/>
        <feComposite operator="over" in="main"/>
      </filter>
      <filter id="distortion-3">
        <feTurbulence  baseFrequency="0.0400" type="fractalNoise"/>
        <feColorMatrix type="hueRotate" values="0">
          <animate attributeName="values" from="0" to="360" dur="10s" repeatCount="indefinite"/>
        </feColorMatrix>
        <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="10" >
          <animate attributeName="scale" values="6" dur="10s" repeatCount="indefinite"/>
          </feDisplacementMap>
        <feGaussianBlur stdDeviation="0"/>
        <feComponentTransfer result="main">
          <feFuncA type="gamma" amplitude="150" exponent="5"/>
        </feComponentTransfer>
        <feColorMatrix type="matrix"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                0 0 1 0 1
                                0 0 0 0 0"/>
        <feGaussianBlur stdDeviation="0"/>
        <feComposite operator="over" in="main"/>
      </filter>
      <filter id="distortion-4">
        <feTurbulence id="feTurbulenceDistortion" type="turbulence" baseFrequency="0.6" numOctaves="8" seed="40" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
        <feDisplacementMap id="feDisplacementMapDistortion" in="SourceGraphic" in2="turbulence" scale="5" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
        <animate xlink:href="#feTurbulenceDistortion" attributeName="baseFrequency" dur="6s" keyTimes="0;0.5;1" values="1000;5.1;1000;" repeatCount="indefinite"></animate>
      </filter>
      <filter id="distortion-5">
        <feTurbulence id="feTurbulenceDistortion5" baseFrequency="0.050" type="fractalNoise"/>
        <feColorMatrix type="hueRotate" values="0">
          <animate attributeName="values" from="0" to="360" dur="6s" repeatCount="indefinite"/>
        </feColorMatrix>
        <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="10">
          <animate id="feDisplacementMapDistortion5" attributeName="scale" values="0" dur="6s" repeatCount="indefinite"/>
        </feDisplacementMap>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComponentTransfer result="main">
          <feFuncA type="gamma" amplitude="150" exponent="5"/>
        </feComponentTransfer>
        <feColorMatrix type="matrix"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                0 0 1 0 1
                                0 0 0 0 0"/>
        <feGaussianBlur stdDeviation="50"/>
        <feComposite operator="over" in="main"/>
      </filter>
      <!-- Others -->
      <filter id="noise">
        <feOffset in="SourceGraphic" dx="-8" dy="-8" result="offset" />
        <feGaussianBlur in="offset" stdDeviation="64" result="blur" />
        <feTurbulence result="waves" type="turbulence" baseFrequency="0.735 0.771" numOctaves="1" seed="6"></feTurbulence>
        <feDisplacementMap in="blur" in2="waves" scale="20" xChannelSelector="R" yChannelSelector="B" result="ripples"></feDisplacementMap>
        <feComposite in="waves" in2="ripples" operator="arithmetic" k1="1" k2="0" k3="1" k4="0"></feComposite>
      </filter>
      <filter id="teal-white" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values=".33 .33 .33 0 0
                  .33 .33 .33 0 0
                  .33 .33 .33 0 0
                  0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
        <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="1 0.98"/>
          <feFuncG type="table" tableValues="1 0.96"/>
          <feFuncB type="table" tableValues="1 0.6"/>
          <feFuncA type="table" tableValues="0 1"/>
          </feComponentTransfer>
        <feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"/>
      </filter>
      <filter id="broken">
        <feTurbulence id="anime3" type="turbulence" baseFrequency="2 8" numOctaves="2" seed="2" stitchTiles="stitch" result="turbulence"/>
        <feColorMatrix type="saturate" values="30" in="turbulence" result="colormatrix"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 150 -15" in="colormatrix" result="colormatrix1"/>
        <feComposite in="SourceGraphic" in2="colormatrix1" operator="in" result="composite"/>
        <feDisplacementMap in="SourceGraphic" in2="colormatrix1" scale="15" xChannelSelector="R" yChannelSelector="A" result="displacementMap"/>
      </filter>
      <filter id="pixelate">
        <feGaussianBlur stdDeviation="10" in="SourceGraphic" result="smoothed" />
        <feImage width="5" height="5" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC" result="displacement-map" />
        <feTile in="displacement-map" result="pixelate-map" />
        <feDisplacementMap in="smoothed" in2="pixelate-map" xChannelSelector="R" yChannelSelector="G" scale="1" result="pre-final"/>
        <feComposite operator="in" in2="SourceGraphic"/>
      </filter>
      <filter id="glitch" x="0" y="0">
        <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
        <feOffset in="r" result="r" dx="-5">
          <animate attributeName="dx" attributeType="XML" values="0; -5; 0; -5; -2; -4; 0 ;-3; 0" dur="1s" repeatCount="indefinite"/>
        </feOffset>
  
        <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/>
        <feOffset in="g" result="g" dx="0" dy="0">
          <animate attributeName="dx" attributeType="XML" values="0; 0; 0; -3; 0; 8; 0 ;-1; 0" dur="1s" repeatCount="indefinite"/>
        </feOffset>
        
        <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0.94 0 0 0  0 0 0 0 0  0 0 0 1 0" result="b"/>
        <feOffset in="b" result="b" dx="0" dy="0">
          <animate attributeName="dx" attributeType="XML" values="0; 3; -1; 4; 0; 2; 0 ;5; 0" dur="1s" repeatCount="indefinite"/>
        </feOffset>
        
        <feBlend in="r" in2="b" mode="screen" result="blend" />
        <feBlend in="blend" in2="g" mode="screen" result="blend" />
      </filter>
    </defs> 
  </svg>
</div>

</template>
<script>
export default {
  data() {
    return {
      content: false,
      fpsMeteru:0,
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
