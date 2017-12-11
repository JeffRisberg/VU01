<template>
  <div class="connectors">
    <h1>{{ msg }}</h1>
    <table class="table" style="text-align: left">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="connector in connectors">
          <td>{{ connector.name }}</td>
          <td>{{ connector.status }}</td>
          <td>edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ConnectorList',
  data () {
    return {
      msg: 'Connector List',
      connectors: [
        { name: 'Salesforce', status: 'active' },
        { name: 'Atlassian', status: 'active' },
        { name: 'BMC', status: 'active' }
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
