<template>
    <article class="mt-[70px]">
        <h2 class="text-center font-aktura text-yellow text-[150px] leading-[150px] w-full" style="filter:url(#distortionFilterMin);">electro alternativ</h2>
        <h4 class="text-center font-aliseo text-white text-4xl mb-20">Client : <b class="animate-pulse">REGARTS ASSO</b></h4>
        <section class="flex justify-between text-white text-4xl">
            <div class="font-aliseo text-2xl">Development of a manageable page template <br>for the ELECTRO ALTERNATIV EVENTS.</div>
            <div class="font-aktura text-white text-right"><p class="text-yellow text-[70px]" style="filter:url(#distort);">2021</p><p>web development</p></div>
        </section>
        <figure class="cover__item group">
            <figcaption class="cover__item-caption"> 
                <div class="cover__item-imgwrap group-hover:bg-black">
                    <img src="@/assets/img/projects/electro-alternativ-2021/cover-intro.jpg" alt="" title="" height="" width="" />
                </div>
            </figcaption>
        </figure>
        <section class="grid grid-cols-12 gap-y-20 text-white text-4xl">
            <img class="col-span-12  mx-auto" src="@/assets/img/projects/electro-alternativ-2021/p1.jpg"  alt="" title="" height="" width="" />
            <img class="col-span-12" src="@/assets/img/projects/electro-alternativ-2021/p4.jpg" alt="" title="Page programmation" height="" width="" />
            <img class="col-span-12" src="@/assets/img/projects/electro-alternativ-2021/p6.jpg" alt="" title="Page lieux" height="" width="" />
            <img class="col-span-12" src="@/assets/img/projects/electro-alternativ-2021/p5.jpg" alt="" title="Ecran du menu" height="" width="" />
        </section>

    </article>
</template>
<style lang="postcss">
  .cover__item { @apply mx-auto h-[500px]  my-20 -ml-20;width:calc(100vw - 8px);}
  .cover__item-imgwrap { @apply bg-yellow transition-colors duration-500;}
  .cover__item-imgwrap img { 
    @apply w-full h-[500px] object-cover mix-blend-luminosity saturate-0;
    aspect-ratio: 1;
    &:hover{ @apply mix-blend-normal saturate-100;}
  }
</style>