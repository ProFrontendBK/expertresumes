<template>
  <div class="bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-500 h-[100vh] grid justify-items-center">
<div class="flex flex-col p-6 gap-6 bg-white bg-opacity-15 backdrop-blur max-w-[800px] m-4 rounded-[12px] justify-center text-center">
    <img src="/img/404.svg" class="object-fit " alt="">
    <div class="py-4 text-white">We’re sorry, but the page you’re looking for doesn’t seem to exist.</div>
    <NuxtLink to="/" class="border border-[0.5px] text-white border-white px-[16px] py-[12px] w-fit mx-auto rounded-[12px] cursor-pointer">
        Go to Homepage
    </NuxtLink>
  </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>