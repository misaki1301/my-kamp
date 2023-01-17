<template>
  <section class="p-4 bg-gray-200 h-64">
    <div class="flex items-center justify-center h-64">
      <h1 class="text-center text-4xl text-black">Hi! my name is&nbsp;</h1>
      <h1
        class="text-center text-4xl text-white p-4 rounded bg-royal-purple border-b-blue-400"
      >
        Paul Pacheco
      </h1>
    </div>
  </section>
  <section class="m-4">
    <p class="text-3xl font-bold text-center">My skills</p>
    <div class="grid grid-rows-2 grid-flow-col gap-4 mt-8">
      <div class="rounded bg-orange-400 h-32">
        <p class="text-2xl text-white text-center">Swift</p>
      </div>
      <div class="rounded bg-green-500 h-32">
        <p class="text-2xl text-white text-center">Vue</p>
      </div>
      <div class="rounded bg-blue-500 h-32">
        <p class="text-2xl text-white text-center">React</p>
      </div>
      <div class="rounded bg-purple-600 h-32">
        <p class="text-2xl text-white text-center">Kotlin</p>
      </div>
      <div class="rounded bg-red-600 h-32">
        <p class="text-2xl text-white text-center">Laravel</p>
      </div>
      <div class="rounded bg-purple-900 h-32">
        <p class="text-2xl text-white text-center">.NET</p>
      </div>
    </div>
  </section>
  <section>
    <h1>Hello World</h1>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped></style>
