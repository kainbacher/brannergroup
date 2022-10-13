<template>
  <footer class="p-4 bg-red-700 text-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <p class="my-6 dark:text-gray-400">
        Branner Gruppe GmbH<br/>
        <br/>
        +43 (0) 5523 51141-0 • Treietstraße 2 • A-6833 Klaus • dispo@branner.at • www.branner.at
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <li>
          <nuxt-link to="/jobs" class="mr-4 text-white hover:underline md:mr-6">Jobs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/news" class="mr-4 text-white hover:underline md:mr-6">Neuigkeiten</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/impressum" class="mr-4 text-white hover:underline md:mr-6">Impressum</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/datenschutz" class="mr-4 text-white hover:underline md:mr-6">Datenschutz</nuxt-link>
        </li>
      </ul>
      <span class="text-sm sm:text-center dark:text-gray-400"
        >© 2021-2022 <a href="#" class="hover:underline">Branner</a></span
      >
    </div>
  </footer>
</template>
