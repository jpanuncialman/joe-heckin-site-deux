export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish",
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description:
        "Describe your portfolio for search engines and social media.",
    },
  ],
};
