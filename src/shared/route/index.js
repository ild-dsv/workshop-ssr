import AppRoot from '../components/App'
import Home from '../pages/Home'
import About from '../pages/About'
import Page404 from '../pages/Page404'

const routes = [
  {
    component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/about',
        component: About
      },
      {
        path: '*',
        component: Page404
      }
    ]
  }
]

export default routes
