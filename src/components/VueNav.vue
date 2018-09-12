<template>
  <section id="nav-container">
    <nav id="nav">
      <h1>
        <a href="/">Halloween Movie Marathon Generator</a>
      </h1>
      <section class="navigation-nested">
        <router-link to="/" >Movie List</router-link>
        <router-link to="/selected" >Selected Movies</router-link>
      </section>
    </nav>
  </section>
</template>

<script>

export default {

}
</script>

<style lang='scss'>
  #nav-container {
    width: 100%;
    background-color: #E86252;
  }
  #nav {
    padding: 30px;
    background-color: #E86252;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    a {
      font-weight: bold;
      color: #111;
      text-decoration: none;
      padding: 0.25rem 0;
      font-size: 1.414em;
      letter-spacing: 1.125px;
      font-family: 'Cormorant Garamond', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      cursor: pointer;
    }

    @media screen and (min-width: 900px) {
      flex-direction: column;
      justify-content: space-between;
      max-width: 1000px;
    }
  }
  h1 {
    a {
      letter-spacing: -6px;
      font-family: 'Metamorphous', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      color: #000;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .navigation-nested {
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 551px) {
      justify-content: flex-start;
      flex-direction: row;
    }

    & > a {
      width: 100%;
      @media screen and (min-width: 551px) {
        width: 50%;
      }
    }
  }

  a.router-link-exact-active {
    color: #fff !important;
    text-decoration: underline;
  }
</style>