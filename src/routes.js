import Search from '@/components/Search'
import About from '@/components/about'
import TrackDetail from '@/components/TrackDetail'

const routes = [
  {
    path: '/',
    component: Search,
    name: 'Search'
  },
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '/track/:id',
    component: TrackDetail,
    name: 'track'
  }
]

export default routes
