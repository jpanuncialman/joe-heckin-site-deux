export default {
  title: "Portfolio Piece",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Date",
      name: "date",
      type: "datetime",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: "Content",
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
