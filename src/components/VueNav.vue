<template>
  <section id="nav-container">
    <nav id="nav">
      <router-link to="/" tag="span">Halloween Movie Marathon Generator</router-link>
      <router-link to="/">Movie List</router-link>
      <router-link to="/selected">Selected Movies</router-link>
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
      font-variant-caps: all-small-caps;
      cursor: pointer;
    }

    @media screen and (min-width: 900px) {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1000px;
    }
  }
  span {
      font-size: 1.414em;
      line-height: 1.2;
      font-family: 'Metamorphous', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      color: #000;
      font-weight: bold;
      cursor: pointer;
    }
</style>