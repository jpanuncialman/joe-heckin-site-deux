export default {
  title: "Floaty Boi",
  name: "floatyBoi",
  type: "document",
  fields: [
    {
      title: "Text",
      name: "title",
      type: "string",
    },
    {
      title: "Link URL",
      name: "linkUrl",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
  ],
};
