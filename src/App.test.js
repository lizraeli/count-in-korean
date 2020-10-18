import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import { GetCountersDocument } from "./generated/graphql";

const mocks = [
  {
    request: {
      query: GetCountersDocument,
    },
    result: {
      data: {
        counters: {
          data: [
            {
              label: "마리",
              items: {
                data: [
                  { nameKr: "양", __typename: "Item" },
                  { nameKr: "고양이", __typename: "Item" },
                ],
                __typename: "ItemPage",
              },
              __typename: "Counter",
            },
          ],
          __typename: "CounterPage",
        },
      },
    },
  },
];

/**
 *
 * @param {React.ComponentType} comp
 * @returns {ReturnType<render>}
 */
function renderWithApollo(Comp) {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Comp />
    </MockedProvider>
  );
}

test("renders learn react link", () => {
  const { getByText } = renderWithApollo(App);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
