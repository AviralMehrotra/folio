export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "num",
      title: "Project Number",
      type: "string",
      description: "e.g. 01, 02, etc.",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Fullstack Project, Frontend, etc.",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [{ name: "name", title: "Name", type: "string" }],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "live",
      title: "Live Link",
      type: "url",
    },
    {
      name: "github",
      title: "Github Link",
      type: "url",
    },
  ],
};
