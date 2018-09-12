<template>
  <article class="card">
    <section class="left-side-card">
      <img :alt="title" :src="poster"/>
    </section>
    <section class="right-side-card">
      <section class="card-description">
        <h4>{{ title }} <span class="year">{{ year }}</span></h4>
        <p>{{plot}}</p>
      </section>
      <section id="btn-group">
        <span>More Info</span>
        <span class="add-list">Add to List</span>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'vue-card',
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
    width: 100%;
    min-width: 300px;
    background-color: #DBDBDB;
    margin: 1rem auto 0;

    @media screen and (min-width: 600px) {
      max-width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: 0 0 1rem;
    }
  }

  .left-side-card {
    width: 100%;

    @media screen and (min-width: 600px) {
      width: 50%;
      max-width: 185px;
    }
    > img {
      display: block;
      width: 100%;


    }
  }

  .right-side-card {
    @media screen and (min-width: 600px) {
      max-width: 50%;
    }

    h4 {
      font-family: 'Metamorphous';
      color: #333;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    span {
      font-size: 1rem;
      align-items: flex-end;
      justify-self: flex-end;
    }
    p {
      margin-top: 0;
    }
  }
  #btn-group {
    display: flex;
    justify-content: space-between;
    background: darken(#DBDBDB, 20%);
    align-items: center;

    > span {
      width: 50%;
      padding: 0.55rem 0;
      text-align: center;

    }

    > .add-list {
      background-color: var(--orange);
    }
  }
  .card-description {
    padding: 0 10px 10px 10px;
  }
</style>
