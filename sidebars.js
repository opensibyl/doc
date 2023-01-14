/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "intro",
    {
      type: 'category',
      label: "使用",
      link: {
        type: 'doc',
        id: 'usage/usage-intro'
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: "使用 - 服务化",
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: "部署",
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                "usage/usage-prod/deployment/usage-prod-single",
            "usage/usage-prod/deployment/usage-prod-cluster"
              ]
            },
            "usage/usage-prod/usage-prod-upload",
            "usage/usage-prod/usage-prod-query",
          ]
        },
        "usage/usage-api",
        "usage/usage-cmd"
      ]
    },
    {
      type: 'category',
      label: "常见应用",
      link: {
        type: "doc",
        id: "idea/idea-intro"
      },
      items: []
    },
    {
      type: 'category',
      label: "FAQ",
      link: {
        type: "generated-index",
      },
      items: [
        "faq/faq-design",
        "faq/faq-lang",
        "faq/faq-perf",
        "faq/faq-contrib",
        "faq/faq-others",
      ]
    }
  ]
};

module.exports = sidebars;
