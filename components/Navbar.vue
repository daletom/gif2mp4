<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img src="https://tom.imgix.net/imgix_h1.gif?w=40&h=40&fit=crop&crop=left&auto=format,compress" />
      <span class="font-semibold text-xl tracking-tight ml-2">Gif to MP4</span>
    </div>
    <div class="block sm:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-100 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <a href="/" class="no-underline font-semibold block mt-4 sm:inline-block sm:mt-0 text-orange-500 hover:text-white mr-4">
          MP4s
        </a>
        <a href="/gif" class="no-underline font-semibold block mt-4 sm:inline-block sm:mt-0 text-orange-500 hover:text-white mr-4">
          GIFs
        </a>
        <a href="/about" class="no-underline font-semibold block mt-4 sm:inline-block sm:mt-0 text-orange-500 hover:text-white mr-4">
          About
        </a>
        <a href="https://docs.imgix.com/apis/rendering/format/fm#sts=gif" class="font-semibold no-underline block mt-4 sm:inline-block sm:mt-0 text-orange-500 hover:text-white mr-4">
          Docs
        </a>
      </div>
      <div>
        <a href="/upload" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 font-semibold hover:bg-white mt-4 sm:mt-0">Upload</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    /*methods: {
        toggle() {
    	this.open = !this.open
    }
    }*/
}
</script>