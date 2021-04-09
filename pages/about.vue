<template>
    <div>
        <h1 class="m-8 text-2xl font-bold">Animated GIFs to MP4s</h1>
        <p class="m-4 text-left">At imgix we are always trying to help our customers improve their images.  We often find that the worst performing images on a website are animated images, such as GIFs.  Yes, you can compress and resize GIFs but they continue to be heavy.  We continue to use GIFs because they are so simple to use; you can just put an animated GIF in an `img` element and it will work on any browser an device.  Converting your GIFs to MP4s are actually a great alternative that with a little work can drastically reduce load times for websites.</p>
        <h1 class="m-8 text-2xl font-bold">What's Wrong With My Animated GIFs?</h1>
        <p class="m-4 text-left">The GIF is actually over 30 years old and it has been a great format to us all.  I will save us all on the history lesson and the countless hours that have been spent debating how to pronounce “GIF, JIF, JAEIPH (that’s how I pronounce it, which is another story)”.  The real issue for me is the amount of time and bandwidth that are being wasted on these heavy animations.  All of the major browsers now support video tags and can autoplay MP4s, so they look and feel like a GIF… but faster!
            <br>
            <br>
            Can you tell the difference between these two animations? Which is a GIF, which is an MP4?</p>
        <div class="flex flex-start">
            <img class="m-4" src="https://tom.imgix.net/tongariro_lowq.gif?auto=format,compress&w=300&h=190&fit=crop" />
            <video class="m-4" autoplay loop muted playsinline style="width: 300px; height: 190px;">
                <source src="https://tom.imgix.net/tongariro_lowq.gif?fm=mp4&w=300&h=190&fit=crop" />
            </video>
        </div> 
        <br>   
        <p class="ml-4 text-left">To be continued... </p>
    </div>
</template>