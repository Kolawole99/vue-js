/* eslint-disable */
export default [
  {
    path: "/sample",
    meta: { layout: "Alternative" },
    component: () => import(/* webpackChunkName: "about" */ "./Sample.vue"),
    children: [
      {
        path: "",
        name: "AllSamples",
        meta: {
          layout: "Alternative",
          title: "Sample Page",
        },
        component: () => import("../../components/views-partials/sample/AllSamples.vue"),
      },
      { path: ":id", name: "One Sample", meta: { layout: "Alternative" }, component: () => import("../../components/views-partials/sample/OneSample.vue") },
      { path: "create", name: "Create Sample", meta: { layout: "Alternative" }, component: () => import("../../components/views-partials/sample/CreateSample.vue") },
      { path: ":id/edit", name: "Edit Sample", meta: { layout: "Alternative" }, component: () => import("../../components/views-partials/sample/EditSample.vue") },
    ],
  },
];
