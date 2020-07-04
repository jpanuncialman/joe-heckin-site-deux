export default {
  title: "Project",
  name: "siteProject",
  type: "document",
  fields: [
    {
      title: "Project Title",
      name: "title",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Main Images",
      name: "mainImages",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: "Project Description",
      name: "description",
      type: "string",
    },
    {
      title: "Project Content",
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
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const path = `/projects/${slug.current}/`;
      return {
        title,
      };
    },
  },
};
