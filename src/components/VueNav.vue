<template>
  <header id="nav-container">
    <img src="../assets/tmdb.png" alt="Powered by The Movie Database" class="tmdb"/>
    <nav id="nav">
      <h1>
        <a href="/">Halloween Movie Marathoner</a>
      </h1>
      <section class="navigation-nested">
        <router-link to="/" class="btn hvr-wobble-vertical">Movie List</router-link>
        <router-link to="/selected" class="btn hvr-wobble-vertical">Selected Movies</router-link>
      </section>
    </nav>
  </header>
</template>

<script>

export default {

}
</script>

<style lang='scss'>
  #nav-container {
    width: 100%;
    background-color: #ebebeb;
    position: relative;
  }
  #nav {
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    h1 {
      a {
        font-family: 'friday13', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: #960200;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        text-shadow: 2px 2px rgba(0,0,0,1);
      }
    }

    @media screen and (min-width: 900px) {
      flex-direction: column;
      justify-content: space-between;
      max-width: 1000px;
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
      font-weight: bold;
      background-color: #960200;
      color: #fff;
      text-decoration: none;
      padding: 0.29rem;
      width: 200px;
      margin-right: 99px;
      font-size: 1.414em;
      letter-spacing: 1.125px;
      font-family: 'Cormorant Garamond', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      cursor: pointer;
      box-shadow: 4px 4px 8px rgba(12,12,13,0.1);
      border-radius: 4px;

      @media screen and (min-width: 551px) {
        width: 25%;
      }
    }
  }

  a.router-link-exact-active {
    background-color: #E86252;
  }

  .tmdb {
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 43.8px;
    display: block;
    height: auto;

    @media screen and (min-width: 800px) {
      width: 96.53px;
    }
  }

  @keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.hvr-wobble-vertical {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {
  -webkit-animation-name: hvr-wobble-vertical;
  animation-name: hvr-wobble-vertical;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>