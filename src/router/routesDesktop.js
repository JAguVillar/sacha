const routes = [
  {
    path: "/",
    sidebar: true,
    icon: "r_home",
    nombre: "Inicio",
    botonAtras: false,
    component: () => import("../components/layoutDesktopHome.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/desktop/home/index.vue"),
      },
    ],
  },
  {
    path: "/proyectos",
    nombre: "Proyectos",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Proyectos",
        component: () => import("../pages/desktop/proyectos/index.vue"),
      },
    ],
  },
  {
    path: "/comunidad",
    nombre: "Comunidad",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Comunidad",
        component: () => import("../pages/desktop/comunidad/index.vue"),
      },
    ],
  },
  {
    path: "/contacto",
    nombre: "Contacto",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Contacto",
        component: () => import("../pages/desktop/contacto/index.vue"),
      },
    ],
  },
  {
    path: "/tienda_shop",
    nombre: "Tienda shop",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Tienda shop",
        component: () => import("../pages/desktop/detalleWeb/tiendaShop.vue"),
      },
    ],
  },
  {
    path: "/tienda_blum",
    nombre: "Tienda blum",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Tienda blum",
        component: () => import("../pages/desktop/detalleWeb/tiendaBlum.vue"),
      },
    ],
  },
  {
    path: "/central_cordoba",
    nombre: "Central cordoba",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Central cordoba",
        component: () =>
          import("../pages/desktop/detalleWeb/centralCordoba.vue"),
      },
    ],
  },
  {
    path: "/coprisa",
    nombre: "Coprisa",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Coprisa",
        component: () => import("../pages/desktop/detalleWeb/coprisa.vue"),
      },
    ],
  },
  {
    path: "/furth",
    nombre: "furth",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Furth",
        component: () => import("../pages/desktop/detalleWeb/furth.vue"),
      },
    ],
  },
  {
    path: "/ok_llevo",
    nombre: "Ok llevo",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Ok llevo",
        component: () => import("../pages/desktop/detalleWeb/okLlevo.vue"),
      },
    ],
  },
  {
    path: "/secco",
    nombre: "Secco",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "Secco",
        component: () => import("../pages/desktop/detalleWeb/secco.vue"),
      },
    ],
  },
  //MOVILES
  {
    path: "/siproc",
    nombre: "Siproc",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "siproc",
        component: () => import("../pages/desktop/detalleMovil/siproc.vue"),
      },
    ],
  },
  {
    path: "/bimbo",
    nombre: "Bimbo",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "bimbo",
        component: () => import("../pages/desktop/detalleMovil/bimbo.vue"),
      },
    ],
  },
  {
    path: "/santiago_bus",
    nombre: "Santiago Bus",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "santiago bus",
        component: () =>
          import("../pages/desktop/detalleMovil/santiagoBus.vue"),
      },
    ],
  },
  {
    path: "/ok_llevo_movil",
    nombre: "Ok llevo movil",
    botonAtras: false,
    component: () => import("../components/layoutDesktop.vue"),
    children: [
      {
        path: "",
        name: "ok llevo movil",
        component: () => import("../pages/desktop/detalleMovil/okLlevo.vue"),
      },
    ],
  },
];

export default routes;
