<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-300 p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img src="https://tom.imgix.net/imgix_h1.gif?w=40&h=40&fit=crop&crop=left&auto=format,compress" />
      <span class="font-semibold text-xl tracking-tight ml-2">Gif to MP4</span>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-100 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <a href="/" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
          Home
        </a>
        <a href="https://docs.imgix.com/apis/rendering/format/fm#sts=gif" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-blue-500 hover:text-white mr-4">
          Docs
        </a>
        <a href="/about" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-blue-500 hover:text-white mr-4">
          About
        </a>
      </div>
      <div>
        <a href="/upload" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">Upload</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    methods: {
        toggle() {
    	this.open = !this.open
    }
    }
}
</script>