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
    "try/try-intro",
    {
      type: "category",
      label: "使用",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "部署服务",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "usage/usage-prod/deployment/usage-prod-single",
            "usage/usage-prod/deployment/usage-prod-cluster",
          ],
        },
        {
          type: "category",
          label: "仓库上传",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "usage/usage-prod/upload/usage-prod-upload",
            "usage/usage-prod/upload/usage-prod-upload-connector",
          ],
        },
        {
          type: "category",
          label: "数据访问",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "usage/usage-prod/query/usage-prod-query-sdk",
            "usage/usage-prod/query/usage-prod-query-frontend",
            "usage/usage-prod/query/usage-prod-query-api",
            "idea/idea-intro",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "实验功能",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "experimental/usage-alone/usage-api",
        "experimental/usage-alone/usage-cmd",
        "experimental/usage-alone/tag-system",
      ],
    },
    {
      type: "category",
      label: "FAQ",
      link: {
        type: "generated-index",
      },
      items: [
        "faq/faq-design",
        "faq/faq-lang",
        "faq/faq-perf",
        "faq/faq-contrib",
        "faq/faq-open",
        "faq/faq-others",
      ],
    },
  ],
};

module.exports = sidebars;
