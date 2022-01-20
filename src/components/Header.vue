<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-xxl">
        <a class="navbar-brand" href="#"
          ><img
            class="d-block w-100 logo"
            src="@/assets/logo.png"
            alt="Company`s logo"
        /></a>
        <a class="navbar-brand fw-bolder" href="#">Каршеринг в Краматорске</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
      </div>
    </nav>
  </div>
</template>

<script>

</script>

<style scoped>
  .logo {
    background: rgba(204, 241, 211, 0.822);
    max-width: 200px;
    max-height: 200px;
    border-radius: 20%;
    
    box-shadow: 0 0 20px 15px rgb(255, 255, 255) inset;
  }
</style>

