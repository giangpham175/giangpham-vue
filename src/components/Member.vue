<template>
  <div class="user">
    <div v-if="username ">
      username: {{ username }}
      <br />
      coin: {{ coin | coinFormat }}
    </div>
    <ul>
      <li v-for="(job, index) in jobs" :key="index">
        <a :href="job.link" target="_blank">{{ job.description }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "username",
  computed: {
    username() {
      return this.$store.state.username;
    },
    coin() {
      return this.$store.state.coin;
    },
    jobs() {
      return this.$store.state.jobs;
    }
  }
};
</script>