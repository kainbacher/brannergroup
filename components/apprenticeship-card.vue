<template>
  <div class="h-full bg-white p-6 rounded-md hover:shadow-md transition duration-300 ease-in-out">
    <h3 class="text-xl font-medium text-gray-900 mb-4">{{ title }}</h3>
    <p class="mb-6">
      {{ text }}
    </p>
    <a class="flex items-center">
      <span class="flex-grow flex flex-col">
        <span class="title-font text-gray-500">Lehrzeit: {{ duration }}</span>
        <span class="text-gray-500 text-gray-500">Berufsschule: {{ school }}</span>
      </span>
      <a
        href="mailto:dispo@branner.at"
        class="mr-5 bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0 flex items-center"
      >
        <svg
          class="mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        Bewerben
      </a>
    </a>
  </div>
</template>

<script>
export default {
  name: "ApprenticeshipCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    school: {
      type: String,
      required: false,
    },
  },
};
</script>
