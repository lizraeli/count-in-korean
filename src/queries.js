import { gql } from "@apollo/client";

export const COUNTERS_QUERY = gql`
  query GetCounters {
    counters {
      data {
        label
        items {
          data {
            nameKr
          }
        }
      }
    }
  }
`;