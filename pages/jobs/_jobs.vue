<template>
  <main>
    <section class="text-gray-600 body-font py-24" v-if="post">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="md:w-3/5 mx-auto">
          <article>
            <h5
              v-if="post.createdAt"
              class="inline-block py-1 my-2 bg-gray text-gray-400 text-sm font-medium rounded-sm whitespace-no-wrap"
            >
              {{ post.createdAt | formateDate }}
            </h5>
            <div class="flex flex-row justify-between">
              <h1 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {{ post.title }}
              </h1>
              <div>
                <span
                  v-if="post.section"
                  class="inline-block py-1 px-2 rounded bg-red-100 text-red-500 text-xs font-medium tracking-widest"
                >
                  {{ post.section }}
                </span>
              </div>
            </div>
            <p class="mt-1 mb-8">
              {{ post.description }}
            </p>
            <nuxt-content :document="post" />
          </article>
          <a
            href="mailto:info@branner.at"
            class="mr-5 bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0 inline-flex items-center"
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
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("jobs", params.blog).where({ visible: true }).fetch();
    } catch (e) {
      error({ message: "Stellenausschreibung nicht gefunden" });
    }
    post = post.slice(0, 1).shift();
    return { post };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(process.env.lang) || "";
    },
  },
};
</script>
