<template>
  <main>
    <section class="flex flex-col items-center">
      <div class="max-w-xl flex flex-col items-center text-center py-8 lg:py-32">
        <p class="text-red-500 md:text-lg xl:text-xl font-semibold mb-2 md:mb-2">
          Die Branner Welt
        </p>

        <h1
          class="text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
        >
          ENTDECKEN SIE UNSERE VIELFALT
        </h1>
      </div>
    </section>

    <div class="py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8"
        >
          <contacts
            name="Branner Autohaus"
            image="http://branner.at/images/branner-fitness.jpg"
          >
            <p class="text-gray-500 text-sm 2xl:text-base mb-8">
              +43 (0) 5522 46118<br />
              fitness@branner.at<br />
              <br />
              Alemannenstr. 21<br />
              6830 Rankweil
            </p>
          </contacts>
          <contacts
            name="Branner Fitness"
            image="http://branner.at/images/branner-autohaus.jpg"
          >
            <p class="text-gray-500 text-sm 2xl:text-base mb-8">
              +43 (0) 5522 46118<br />
              fitness@branner.at<br />
              <br />
              Alemannenstr. 21<br />
              6830 Rankweil
            </p>
          </contacts>
          <contacts
            name="Branner Erdenwerk"
            image="http://branner.at/images/branner-kompostierung.jpg"
          >
            <p class="text-gray-500 text-sm 2xl:text-base mb-8">
              +43 (0) 5522 46118<br />
              fitness@branner.at<br />
              <br />
              Alemannenstr. 21<br />
              6830 Rankweil
            </p>
          </contacts>
          <contacts
            name="Branner Entsorgung"
            image="http://branner.at/images/branner-entsorgung.jpg"
          >
            <p class="text-gray-500 text-sm 2xl:text-base mb-8">
              +43 (0) 5522 46118<br />
              fitness@branner.at<br />
              <br />
              Alemannenstr. 21<br />
              6830 Rankweil
            </p>
          </contacts>
          <contacts
            name="Branner Oberflächenbehandlung"
            image="http://branner.at/images/branner-oberflaechen.jpg"
          >
            <p class="text-gray-500 text-sm 2xl:text-base mb-8">
              +43 (0) 5522 46118<br />
              fitness@branner.at<br />
              <br />
              Alemannenstr. 21<br />
              6830 Rankweil
            </p>
          </contacts>
        </div>
      </div>
    </div>

    <div class="py-6 sm:py-8 lg:py-32">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2
            class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            Neuigkeiten
          </h2>

          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni omnis, eligendi reprehenderit, ducimus molestiae doloremque dolore velit maxime praesentium deleniti ab tempora qui. Quaerat sequi quae enim officia harum?
          </p>
        </div>
        <!-- text - end -->

        <div
          class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8"
        >
          <posts post-type="blog" :amount="4" />

          <!-- article - start -->
          <div
            class="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden"
          >
            <a
              href="#"
              class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
            </a>

            <div class="flex flex-col gap-2 p-4 lg:p-6">
              <span class="text-gray-400 text-sm">July 19, 2021</span>

              <h2 class="text-gray-800 text-xl font-bold">
                <a
                  href="#"
                  class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >New trends in Tech</a
                >
              </h2>

              <p class="text-gray-500">
                This is a section of some simple filler text, also known as placeholder
                text.
              </p>

              <div>
                <a
                  href="#"
                  class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >Read more</a
                >
              </div>
            </div>
          </div>
          <!-- article - end -->

        </div>
      </div>
    </div>


  </main>
</template>
