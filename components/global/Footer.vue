<template>
  <footer class="p-4 bg-red-700 text-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <p class="my-6 text-md">
        <span class="text-lg">Branner Gruppe GmbH</span><br/>
        <a href="tel:+435523511410" title="Branner anrufen">+43 5523 51141-0</a> • <a href="mailto:dispo@branner.at" title="E-Mail an Branner">dispo@branner.at</a><br/>
        Treietstraße 2 • 6833 Klaus • Österreich
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <li>
          <nuxt-link to="/jobs" class="mr-4 text-white hover:underline md:mr-6">Jobs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/neuigkeiten" class="mr-4 text-white hover:underline md:mr-6">Neuigkeiten</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/impressum" class="mr-4 text-white hover:underline md:mr-6">Impressum</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/datenschutz" class="mr-4 text-white hover:underline md:mr-6">Datenschutz</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

