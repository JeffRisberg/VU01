<template>
  <div class="incidents">
    <h1>Incident List</h1>
    <table class="table" style="text-align: left">
          <thead>
            <tr>
              <th>Description</th>
              <th>Resolution</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="incident in incidents">
              <td>{{ incident.text }}</td>
              <td>{{ incident.resolution }}</td>
              <td>edit</td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: 'IncidentList',
  data () {
    return {
      incidents: [
        { text: 'Cannot login to app', resolution: 'pending' },
        { text: 'No response within wait time', resolution: 'restarted server' },
        { text: 'Cannot install new application', resolution: 'handled' }
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
