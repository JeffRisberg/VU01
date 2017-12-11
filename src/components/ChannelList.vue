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
        <tr>
          <td>Chatbot 1</td>
          <td>active</td>
          <td>edit</td>
        </tr>
        <tr>
          <td>Chatbox 2</td>
          <td>active</td>
          <td>edit</td>
        </tr>
        <tr>
          <td>Interceptor</td>
          <td>active</td>
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
      msg: 'Channel List'
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
