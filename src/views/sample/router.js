/* eslint-disable */
export default [
  {
    path: "/sample",
    meta: { layout: "Alternative" },
    component: () => import(/* webpackChunkName: "sample_view" */ "./Sample.vue"),
    children: [
      {
        path: "",
        name: "AllSamples",
        meta: { layout: "Alternative", title: "Samples Page" },
        component: () => import(/* webpackChunkName: "samples_view" */ "../../components/views-partials/sample/AllSamples.vue"),
      },
      {
        path: ":id",
        name: "One Sample",
        meta: { layout: "Alternative", title: "Sample Page" },
        component: () => import(/* webpackChunkName: "one_sample_view" */ "../../components/views-partials/sample/OneSample.vue"),
      },
      {
        path: "create",
        name: "Create Sample",
        meta: { layout: "Alternative", title: "Create Sample" },
        component: () => import(/* webpackChunkName: "create_sample_view" */ "../../components/views-partials/sample/CreateSample.vue"),
      },
      {
        path: ":id/edit",
        name: "Edit Sample",
        meta: { layout: "Alternative", title: "Edit Sample" },
        component: () => import(/* webpackChunkName: "edit_sample_view" */ "../../components/views-partials/sample/EditSample.vue"),
      },
    ],
  },
];
