<template>
  <article class="card" :style="{ backgroundImage: 'url(' + poster + ')' }">
    <section class="movie_image">
      <img class="movie_poster" :alt="title"
      :src="poster" />
    </section>
    <section class="center">
      <div class="about_movie">
        <h3>{{title}}</h3>
        <section class="movie_info">
          <p class="info">{{year}}</p>
          <p class="info">1hr 33min</p>
        </section>
        <section class="movie_plot">
          <p class="plot">{{plot}}</p>
        </section>
        <button class="watchlist">Add to List</button>
      </div>
      <svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none;"></path>
      </svg>
    </section>
  </article>
</template>

<script>
export default {
 name: 'vue-movie-card',
  props: {
    'title': String,
    'poster': String,
    'year': String,
    'plot': String
  }
}
</script>

<style lang="scss">
  .card {
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    max-width: 490px;
    height: 300px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    @media (max-width: 520px) {
      background: rgba(0, 0, 0, .3);
      display: flex;
      flex-direction: column;
      height: auto;
      box-shadow: 4px 4px 10px rgba(255, 255, 255, .2);
  }
  .movie_image {
    min-width: 200px;
    padding: 0;
    display: flex;
    position: relative;
    z-index: 99;
    @media (max-width: 520px) {
      display: flex;
      flex-basis: auto;
      margin: 0 auto;
      height: 200px;
      padding: 10px 0;
      margin-bottom: 25px;
      overflow: hidden;
    }
    .movie_poster {
      width: 100%;
      height: auto;
      margin: 0;
    }
  }
  .center {
    display: flex;
    align-items: center;
    vertical-align: center;
    position: relative;
    z-index: 99;
    @media (max-width: 520px) {
      padding: 10px 0px;
    }
  }
  .about_movie {
    flex-basis: 100%;
    top: 0;
    padding: 0px 10px;
    position: relative;
    z-index: 99;
    @media (max-width: 520px) {
      align-items: center;
      text-align: center;
    }
    h3 {
      color: #fff;
      font-size: 1.315rem;
      margin-bottom: 10px;
      margin-top: 0px;
    }
    .movie_info {
      display: flex;
      justify-content: space-between;
      @media (max-width: 520px) {
        justify-content: space-around;
      }
      font-size: 14px;
      color: rgba(255, 255, 255, .6);
    }
    .movie_plot {
      font-size: 0.857rem;
      margin-bottom: 42px;
      color: rgba(255, 255, 255, 1);
      position: relative;
      z-index: 99;
    }
  }
  /* wavy svg */
  .wavy {
    position: absolute;
    bottom: calc(0px);
    fill: #E86252;
    transform: rotate(180deg);
    z-index: 0;
  }

  .watchlist {
    position: relative;
    z-index: 99;
    background: transparent;
    color: rgba(255, 255, 255, .9);
    border: none;
    border-radius: 4px;
    bottom: -20px;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    transition: all .3s;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 2px;
      fill: rgba(255, 255, 255, 1);
    }
  }
}

.plot {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

p.info {
  padding: 0;
  margin: 0;
}
</style>
