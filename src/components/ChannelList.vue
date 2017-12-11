<template>
  <div class="channels">
    <h1>{{ msg }}</h1>
    <table class="table" style="text-align: left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="channel in channels">
              <td>{{ channel.name }}</td>
              <td>{{ channel.status }}</td>
              <td>edit</td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: 'ChannelList',
  data () {
    return {
      msg: 'Channel List',
      channels: [
        { name: "Chatbot 1", status: 'active' },
        { name: "Chatbot 2", status: 'active' },
        { name: "Interceptor", status: 'active' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
