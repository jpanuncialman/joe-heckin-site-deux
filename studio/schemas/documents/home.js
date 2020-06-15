export default {
  title: "Home",
  name: "siteHome",
  type: "document",
  fields: [
    {
      title: "Home Title",
      name: "title",
      type: "string",
    },
    {
      title: "Home Description",
      name: "description",
      type: "string",
    },
    {
      title: "Home Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
