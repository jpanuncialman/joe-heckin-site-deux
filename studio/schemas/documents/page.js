export default {
  title: "Page",
  name: "sitePage",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
    },
    {
      title: "Page Description",
      name: "description",
      type: "string",
    },
    {
      title: "Page Content",
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
