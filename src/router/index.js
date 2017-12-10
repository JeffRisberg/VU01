import Vue from 'vue'
import Router from 'vue-router'
import ConnectorList from '@/components/ConnectorList'
import ChannelList from '@/components/ChannelList'
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
      path: '/channels',
      name: 'ChannelList',
      component: ChannelList
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
