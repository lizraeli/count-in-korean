
module.exports = {
  schema: {
    "https://graphql.fauna.com/graphql": {
      headers: {
        Authorization: process.env.FAUNADB_AUTH_HEADER
      }
    },
  },
  documents: "src/gql/*.gql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
