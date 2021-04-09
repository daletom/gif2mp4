<template>
<div>
  <h1 class="m-2 text-3xl text-center">This Page is Made Entirely of Animated GIFs/Webps</h1>
  <h3 class="text-center">The Animated GIFs weigh 6.8 MB, or 30x more than MP4s. See how we built this with Nuxt & imgix on the <a class="link underline" href="/about">about page</a>.</h3>
  <div class="flex flex-wrap">
    <div v-for="gif of gifs" :key="gif.id" class="p-4">
      <img :src="host + gif.filename + '?auto=format,compress&w=300&h=190&fit=crop'" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      host: "https://tom.imgix.net/",
    gifs:[
      {
        id: '001',
        filename: "discoverylaunch.gif"
      },
      {
        id: '002',
        filename: "tongariro_lowq.gif"
      },
      {
        id: '003',
        filename: "zeek_street.gif"
      },
      {
        id: '004',
        filename: "zaydapillow.gif"
      },
      {
        id: '005',
        filename: "rudy_cheer.gif"
      },
      {
        id: '006',
        filename: "magic.gif"
      },
      {
        id: '007',
        filename: "kermit.gif"
      },
      {
        id: '008',
        filename: "kazoo.gif"
      },
      {
        id: '009',
        filename: "japan_baseball.gif"
      },
      {
        id: '010',
        filename: "fastly_ex.gif"
      },
      {
        id: '011',
        filename: "explodingdog.gif"
      },
      {
        id: '012',
        filename: "cruise.gif"
      }
    ]
  }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
