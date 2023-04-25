export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Inicio',
      breadcrumb: [
        {
          text: 'Pages',
          to: '/error-404',
        },
        {
          text: 'Blog',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Trabajadores',
    },
  },
  {
    path: '/calendar',
    name: 'calendario',
    component: () => import('@/views/apps/calendar/Calendar.vue'),
    meta: {
      pageTitle: 'Calendario',
    },
  },
  {
    path: '/trabajadores',
    name: 'trabajadores',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Trabajadores',
    },
  },
  {
    path: '/factory',
    name: 'factory',
    component: () => import('@/views/useFactory.vue'),
    meta: {
      pageTitle: 'Blog List',
      breadcrumb: [
        {
          text: 'Pages',
          to: '/error-404',
        },
        {
          text: 'Blog',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/pages/authentication/Login.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/register',
    name: 'auth-register',
    component: () => import('@/views/pages/authentication/Register.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/pages/authentication/ForgotPassword.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/pages/coming-soon',
    name: 'page-coming-soon',
    component: () => import('@/views/pages/miscellaneous/ComingSoon.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/pages/not-authorized',
    name: 'page-not-authorized',
    component: () => import('@/views/pages/miscellaneous/NotAuthorized.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/pages/under-maintenance',
    name: 'page-under-maintenance',
    component: () => import('@/views/pages/miscellaneous/UnderMaintenance.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/pages/error',
    name: 'page-error',
    component: () => import('@/views/pages/miscellaneous/Error.vue'),
    meta: {
      layout: 'full',
    },
  },
]
