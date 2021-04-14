 <template>
  <main :style="{ backgroundImage: `url(${image})` }">
    <div class="container mx-auto">
      <section class="flex pt-40">
        <div class="w-1/2 mt-16">
          <form class="w-3/4 mx-auto mb-4">
            <div
              class="flex items-center py-1 px-3 bg-white rounded-xl border border-indigo-600"
            >
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <img
                src="~/assets/USER/nav/search_black_24dp.svg"
                alt="icon search"
              />
            </div>
          </form>
          <div class="w-3/4 mx-auto">
            <p class="text-3xl font-bold mb-4 mt-4">Hot sale!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ducimus laboriosam, expedita sapiente quod, aspernatur dicta
              commodi odio delectus inventore rem earum voluptas! Nostrum sit
              voluptas aliquam similique consequuntur cupiditate.
            </p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4 mr-4"
            >
              Buy Now
            </button>
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              See Details
            </button>
          </div>
        </div>
        <div class="w-1/2 relative">
          <img
            src="~/assets/USER/ExBook/01.png"
            alt="ex1"
            width="200"
            class="absolute pop-img-1 border-4 border-white shadow-lg ml-12"
          />
          <img
            src="~/assets/USER/ExBook/02.png"
            alt="ex1"
            width="200"
            class="absolute pop-img-2 border-4 border-white shadow-lg"
          />
          <img
            src="~/assets/USER/ExBook/03.png"
            alt="ex1"
            width="200"
            class="absolute pop-img-3 border-4 border-white shadow-lg"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import img from "assets/USER/BG.png";
export default {
  layout: "user",
  data() {
    return {
      image: img,
    };
  },
};
</script>
<style scoped>
main {
  background-position: right -300px;
  background-repeat: no-repeat;
}
.pop-img-1 {
  z-index: 1;
}
.pop-img-2 {
  z-index: 3;
  left: 230px;
  top: -70px;
}
.pop-img-3 {
  z-index: 2;
  left: 420px;
  top: 50px;
}
</style>