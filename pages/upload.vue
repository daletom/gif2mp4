<template>
    <div>
        <input class="m-4" type="file" @change="uploadableFile" />
        <img :src="uploadableFileUrl" />
        <button class="bg-blue-500 rounded p-2 m-4 on:hover-bg-white" @click="uploadGif">Submit GIF</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uploadableFileUrl: null,
            uploadableFileName: null,
            uploadableFileBase64: null
        }
    },
    methods: {
        async uploadableFile(event) {
            this.uploadableFileName = event.target.files[0].name;
            this.uploadableFileUrl = URL.createObjectURL(event.target.files[0]);
            let fileReader = new FileReader();
            fileReader.onload = (event) => {
                this.uploadableFileBase64 = event.target.result
            };
            await fileReader.readAsDataURL(event.target.files[0]);
            console.log(fileReader);
        },
        async uploadGif() {
            await this.$axios.$post("http://localhost:3000/api/upload", {
                name: this.uploadableFileName,
                gif: this.uploadableFileBase64
            })
        }
    }
}
</script>