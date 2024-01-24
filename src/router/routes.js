const routes = [
  {
    path: "/",
    sidebar: true,
    icon: "r_home",
    nombre: "Inicio",
    botonAtras: false,
    component: () => import("../components/layout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/index.vue"),
      },
    ],
  },
];

export default routes;
