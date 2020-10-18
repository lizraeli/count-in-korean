const { GraphQLClient } = require("graphql-request");

const client = new GraphQLClient("https://graphql.fauna.com/graphql", {
  headers: { authorization: `Bearer ${process.env.REACT_APP_FAUNADB_SECRET}` },
});

// apollo-codegen introspect-schema http://localhost:8080/graphql --output schema.json

exports.handler = async (event, context, callback) => {
  try {
    /* parse the string body into a JS object */
    const body = JSON.parse(event.body);
    const response = await client.request(body.query);
    const responseBody = JSON.stringify({ data: response })
    return callback(null, {
      statusCode: 200,
      body: responseBody,
      headers: {
        "content-type": "application/json"
      }
    });
  } catch (error) {
    console.log("error", error);
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error),
    });
  }
};
