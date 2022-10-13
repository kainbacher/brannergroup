<template>
  <div class="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden">
    <a href="#" class="group h-32 md:h-40 block bg-gray-100 overflow-hidden relative">
      <img
        :src="image"
        loading="lazy"
        :alt="name"
        class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
      />
    </a>

    <div class="flex flex-col flex-1 p-4 sm:p-6">
      <h2 class="text-red-800 text-base font-semibold mb-2">
        <a
          href="#"
          class="text-red-500 hover:text-red-700 transition duration-100"
          >{{ name }}</a
        >
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    props: {
      name: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        posts: [],
        loading: true,
      }
    },
  }
</script>
