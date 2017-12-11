<template>
  <div class="connector">
    <h1>Connector Edit</h1>
    <form>
      <table>
       <tr>
         <td>Connector Name:</td>
         <td><input type="text" :value="name" /></td>
       </tr>
       <tr>
         <td>Connector URL:</td>
         <td><input type="text" :value="url" /></td>
       </tr>
       <tr>
         <td>
           <input type="submit" />
         </td>
       </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ConnectorEdit',
  data () {
    return {
      name: 'Salesforce',
      url: 'http://na3.salesforce.com/12345/E45',
      status: 'active'
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
