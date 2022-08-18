<template>
    <div id="animationSmall">
        <div id="wordSmall">
            <div class="lettersSmall cf">
            </div>
        </div>
    </div>
</template>
<style lang="postcss" scooped>
  .cf:before,
  .cf:after {
      content: " ";
      @apply table;
  }
  .cf:after {
      clear: both;
  }
  .cf {
      transform: scale(1);
  }
  #animationSmall {
      @apply h-[70px] left-[5rem] ml-[5rem] fixed top-0 text-center w-[130px];
  }	
  #wordSmall {
      @apply inline-block opacity-100 translate-y-[0px];
  }
  #wordSmall.visible {
      @apply opacity-100 translate-y-[0px];
      -webkit-transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);      
  }
  .lettersSmall {
      @apply h-full;
  }
  .letterSmall {
      @apply h-[70px] text-white transition-all duration-300 ease-linear;
  }
  .symbol {
    @apply float-left h-full text-center leading-[70px];
  }
</style>
<script>
  export default {
    methods: {
      async rotateLetters() {
        try{
          var wordStructure = [{
            symbols: 			['P', 'せ', 'ل', 'p', '霊', '⠏'],
            symbolWidths: 	[20, 25, 25, 20, 25, 15],
            symbolSizes: 		[20, 25, 25, 20, 25, 15],
            symbolWeights: 	[400, 400, 400, 400, 700, 400],
            symbolClasses: 	['font-aliseo text-yellow', '', '', '', '', '']
          }, {
            symbols: 			['i', 'に', 'I', '王', 'エ', '⠊'],
            symbolWidths: 	[15, 25, 14, 25, 25, 20],
            symbolSizes: 		[20, 25, 20, 25, 25, 20],
            symbolWeights: 	[400, 400, 400, 700, 700, 400],
            symbolClasses: 	['font-aktura text-yellow', '', '', '', '', '']
          }, {
            symbols: 			['K', 'س', 'k', 'ノ', '⠅'],
            symbolWidths: 	[20, 30, 22, 25, 15],
            symbolSizes: 		[20, 25, 20, 25, 15],
            symbolWeights: 	[400, 400, 400, 400, 400],
            symbolClasses: 	['font-aliseo text-yellow', '', '', '', '']
          }, {
            symbols: 			['s', 'と', 'ك', 'S', '⠎'],
            symbolWidths: 	[15, 20, 20,20, 25],
            symbolSizes: 		[20, 20, 20,20, 25],
            symbolWeights: 	[400, 400, 400, 400, 400],
            symbolClasses: 	['font-aktura text-yellow', '', '', '', '']
          }, {
            symbols: 			['L', 'l', 'ب', '£', '⠇'],
            symbolWidths:		[20, 15, 25, 20, 15],
            symbolSizes: 		[20, 15, 25, 20, 15],
            symbolWeights: 	[700, 400, 700, 400, 400],
            symbolClasses: 	['font-aliseo text-yellow', '', '', '', '']
          }];
          var isPaused = false;
          var animateInDelay = 5000;
          function getSymbolsTranslation(widths, symbolIndex) {
            if (symbolIndex === 0) return 0;
            return widths.reduce(function(p, c, currentIndex) {
              return currentIndex < symbolIndex ? p + c : p;
            });
          }
          function generateRandomInt(max) { 
            return Math.round(Math.random() * max); 
          }
          document.onload = (event) => {
            console.log('Page is fully loaded - logo/texte.vue');
          };
  
          var springSystem = new rebound.SpringSystem();
          var letterSprings = [];
          var letters = [];
          wordStructure.forEach(function(letter, letterIndex) {
            var containerWidth = letter.symbolWidths.reduce(function(p, c) {
              return p + c;
            });
            var currentTimeout = null;
            var currentSymbolsTranslation = 0;
            var currentSymbolsIndex = 0;
            var currentSpringBit = 0;
            var letterContent = [];
            letter.symbols.forEach(function(symbol, symbolIndex) {
              letterContent.push({
                tag: 'div',
                className: 'symbol ' + (letter.symbolClasses[symbolIndex] ? letter.symbolClasses[symbolIndex] : ''),
                style: {
                  width: letter.symbolWidths[symbolIndex] + 'px',
                  fontSize: letter.symbolSizes[symbolIndex] + 'px',
                  fontWeight: letter.symbolWeights[symbolIndex]
                },
                contents: [symbol]
              });
            });
            const letterNode = $.create('div', {
              className: 'letterSmall',
              style: {
                float: isPaused ? 'none' : 'left',
                overflow: isPaused ? 'visible' : 'hidden'
              },
              contents: [{
                className: 'symbols cf',
                contents: letterContent,
                style: {
                  width: containerWidth + 'px'
                }
              }]
            });
            $.inside(letterNode, $('.lettersSmall'));

            letterSprings.push(springSystem.createSpring(100, 6));
            letterSprings[letterIndex].addListener({
              onSpringUpdate: function(spring) {
                var springValue = spring.getCurrentValue();
                var oldTranslation = currentSymbolsTranslation;
                var newTranslation = getSymbolsTranslation(letter.symbolWidths, currentSymbolsIndex);
                var containerTranslation = rebound.MathUtil.mapValueInRange(
                                            springValue,
                                            1 - currentSpringBit,
                                            currentSpringBit,
                                            oldTranslation,
                                            newTranslation
                                          );
                letterNode.children[0].style.transform = 'translateX(' + -containerTranslation + 'px)';
                if (spring.isAtRest()) {
                  currentSymbolsTranslation = newTranslation;
                }
              }
            });

            $.style(letterNode, {
              width: letter.symbolWidths[currentSymbolsIndex] + 'px'
            });

            function nextTransition(forcedIndex) {
              if (isPaused) return false;
              var randomSymbolIndex;
              if (forcedIndex === undefined) {
                while (randomSymbolIndex === undefined || randomSymbolIndex === currentSymbolsIndex) {
                  randomSymbolIndex = generateRandomInt(letter.symbols.length - 1);
                }
                currentSymbolsIndex = randomSymbolIndex;
              } else {
                currentSymbolsIndex = forcedIndex;
              }
              currentSpringBit = (currentSpringBit + 1) % 2;
              letterSprings[letterIndex].setEndValue(currentSpringBit);
              $.style(letterNode, {
                width: letter.symbolWidths[currentSymbolsIndex] + 'px'
              });
              currentTimeout = setTimeout(nextTransition, 1000 + Math.random() * 1500);
            }
            $.events(letterNode, {
              lock: function() {
                clearTimeout(currentTimeout);
                nextTransition(0);
              },
              release: function() {
                clearTimeout(currentTimeout);
                nextTransition();
              }
            });
            setTimeout(function() {
              nextTransition();
            }, 2000);
          });

          $.events($('.logo-theme'), {
            mouseenter: function() {
              $$('.letterSmall').forEach(function(thisLetter) {
                $.fire(thisLetter, 'lock');
              });
              isPaused = true;
            },
            click: function() {
              if (isPaused) {
                $.fire($('#wordSmall'), 'mouseleave');
              }
            },
            mouseleave: function() {
              $$('.letterSmall').forEach(function(thisLetter) {
                isPaused = false;
                $.fire(thisLetter, 'release');
              });
            }
          });
          isPaused = true;
          setTimeout(function() {
            isPaused = false;
            $('#wordSmall').className += 'visible';
          }, 500 );
        
        } catch(e) {
          console.log(e)
        } finally {

        }
      }
    },
    mounted() {
      this.rotateLetters()
    }
  }
</script>
