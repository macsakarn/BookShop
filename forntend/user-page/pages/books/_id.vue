<template>
  <div class="container px-16 mx-auto pt-32">
    <p class="text-4xl">{{ $route.params }}</p>

    <main class="flex">
      <div class="w-1/4">
        <img src="~/assets/USER/ExBook/01.png" alt="book-img" width="250" />
      </div>

      <div class="w-3/4">
        <p class="text-2xl font-semibold py-3">
          SUNSET SURVIVORS BY LINDSAY VARTY WITH PHOTOGRAPHY BY GARY JONES
        </p>
        <p class="text-2xl font-semibold">800.00 ฿</p>
        <p class="py-1">Author : <span class="text-blue-500">mac</span></p>
        <p class="py-1">Type : <span class="text-blue-500">mac</span></p>
        <p class="py-1">Year : <span class="text-blue-500">2020</span></p>
        <div
          class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-40 cursor-pointer mt-10"
        >
          <img src="~/assets/USER/cart/shopping_cart_white_24dp.svg" alt="" />
          <p class="text-white ml-2">Add to Cart</p>
        </div>
        <p class="text-xl font-semibold py-3 mt-12">Description</p>
        <p>
          Born to Jewish radical parents in Chicago in 1939, Judy Cohen grew up
          to be Judy Chicago--one of the most daring and controversial artists
          of her generation. Her works, once disparaged and misunderstood by the
          critics, have become icons of the feminist movement, earning her a
          place among the most influential artists of her time. In Becoming Judy
          Chicago, Gail Levin gives us a biography of uncommon intimacy and
          depth, revealing the artist as a person and a woman of extraordinary
          energy and purpose. Drawing upon Chicago's personal letters and
          diaries, her published and unpublished writings, and more than 250
          interviews with her friends, family, admirers, and critics, Levin
          presents a richly detailed and moving chronicle of the artist's unique
          journey from obscurity to fame, including the story of how she found
          her audience outside of the art establishment. Chicago revolutionized
          the way we view art made by and for women and fundamentally changed
          our understanding of women's contributions to art and to society.
          Influential and bold, The Dinner Party has become a cultural monument.
          Becoming Judy Chicago tells the story of a great artist, a leader of
          the women's movement, a tireless crusader for equal rights, and a
          complicated, vital woman who dared to express her own sexuality in her
          art and demand recognition from a male-dominated culture.
        </p>
      </div>
    </main>
    <popular class="py-10" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
