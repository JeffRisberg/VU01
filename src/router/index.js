import Vue from 'vue'
import Router from 'vue-router'
import ConnectorList from '@/components/ConnectorList'
import ConnectorEdit from '@/components/ConnectorEdit'
import ChannelList from '@/components/ChannelList'
import IncidentList from '@/components/IncidentList'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connectors',
      name: 'ConnectorList',
      component: ConnectorList
    },
    {
      path: '/connectorEdit',
      name: 'ConnectorEdit',
      component: ConnectorEdit
    },
    {
      path: '/channels',
      name: 'ChannelList',
      component: ChannelList
    },
    {
      path: '/incidents',
      name: 'IncidentList',
      component: IncidentList
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
