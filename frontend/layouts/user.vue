<template>
  <div>
    <nav class="fixed inset-0 w-full max-w-full h-12">
      <div class="container mx-auto flex justify-between items-center">
        <img
          src="~/assets/USER/nav/logoShop.png"
          alt="logo"
          width="120"
          class="cursor-pointer"
        />
        <div class="flex items-center">
          <div class="mx-3 flex justify-between">
            <form class="w-full max-w-sm">
              <div class="flex items-center py-1 px-3 bg-white rounded-3xl">
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
          </div>
          <p class="mx-3 cursor-pointer text-gray-100 hover:text-gray-400">
            FIND A BOOKSTORE BROWSE
          </p>
          <img
            class="mx-3 cursor-pointer"
            src="~/assets/USER/nav/account_circle_black_24dp.svg"
            alt="logo"
            width="30"
          />
          <img
            class="mx-3 cursor-pointer"
            src="~/assets/USER/nav/local_mall_black_24dp.svg"
            alt="logo"
            width="30"
          />
        </div>
      </div>
    </nav>
    <Nuxt-child />
    <footer class="w-full max-w-full h-56">
      <div class="container mx-auto flex justify-between items-center">
        <div class="mt-12">
          <p class="text-xl mb-3">Shop</p>
          <p>Login</p>
          <p>Register</p>
        </div>
        <div class="mt-12">
          <p class="text-xl mb-3">Contacts</p>
          <div class="flex">
            <img
              class="mr-3 cursor-pointer"
              src="~/assets/USER/footer/email_black_24dp.svg"
              alt="logo"
              width="30"
            />
            <span>compagny@email.com</span>
          </div>
          <div class="flex">
            <img
              class="mr-3 cursor-pointer"
              src="~/assets/USER/footer/facebook_black_24dp.svg"
              alt="logo"
              width="30"
            />
            <span>compagny</span>
          </div>
        </div>
        <div class="mt-12">
          <p class="text-xl mb-3">© KMITL</p>
          <p>Faculty of Information Technology</p>
          <p>King Mongkut's Institute of Technology</p>
          <p>Ladkrabang 1 Chalongkrung Road Bangkok Thailand 10520</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
nav,
footer {
  background-color: #a1bdd0;
  z-index: 9999;
}
</style>
