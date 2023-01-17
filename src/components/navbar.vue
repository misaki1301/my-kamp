<template>
    <nav class="flex items-center justify-between px-4 py-3 bg-royal-purple">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="../assets/shoko.svg" width="35"/>
          <span class='font-semibold text-xl tracking-tight'>MisakiDEV</span>
    </div>
    <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
    </div>
    <div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div class='text-sm lg:flex-grow'>
            <router-link to="/" exact class='block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4'>
              Home
            </router-link>
            <router-link to="/about" exact class='block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4'>
              About
            </router-link>
            <router-link to="/contact" exact class='block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4'>
              Contact
            </router-link>
          </div>
        </div>
    </nav>
</template>
<script lang="ts">

</script>
