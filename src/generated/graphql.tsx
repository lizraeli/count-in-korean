import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

/** 'Counter' input values */
export type CounterInput = {
  label: Scalars['String'];
  categoryEn: Scalars['String'];
  categoryKr: Scalars['String'];
  items?: Maybe<CounterItemsRelation>;
};

/** Allow manipulating the relationship between the types 'Counter' and 'Item'. */
export type CounterItemsRelation = {
  /** Create one or more documents of type 'Item' and associate them with the current document. */
  create?: Maybe<Array<Maybe<ItemInput>>>;
  /** Connect one or more documents of type 'Item' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Item' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/** Allow manipulating the relationship between the types 'Item' and 'Counter' using the field 'Item.counter'. */
export type ItemCounterRelation = {
  /** Create a document of type 'Counter' and associate it with the current document. */
  create?: Maybe<CounterInput>;
  /** Connect a document of type 'Counter' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Item' input values */
export type ItemInput = {
  nameEn: Scalars['String'];
  nameKr: Scalars['String'];
  counter?: Maybe<ItemCounterRelation>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Delete an existing document in the collection of 'Counter' */
  deleteCounter?: Maybe<Counter>;
  /** Delete an existing document in the collection of 'Item' */
  deleteItem?: Maybe<Item>;
  /** Update an existing document in the collection of 'Counter' */
  updateCounter?: Maybe<Counter>;
  /** Create a new document in the collection of 'Counter' */
  createCounter: Counter;
  /** Create a new document in the collection of 'Item' */
  createItem: Item;
  /** Update an existing document in the collection of 'Item' */
  updateItem?: Maybe<Item>;
};


export type MutationDeleteCounterArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCounterArgs = {
  id: Scalars['ID'];
  data: CounterInput;
};


export type MutationCreateCounterArgs = {
  data: CounterInput;
};


export type MutationCreateItemArgs = {
  data: ItemInput;
};


export type MutationUpdateItemArgs = {
  id: Scalars['ID'];
  data: ItemInput;
};


export type Counter = {
  __typename?: 'Counter';
  categoryKr: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  label: Scalars['String'];
  items: ItemPage;
  categoryEn: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type CounterItemsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Counter'. */
export type CounterPage = {
  __typename?: 'CounterPage';
  /** The elements of type 'Counter' in this page. */
  data: Array<Maybe<Counter>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  /** The document's ID. */
  _id: Scalars['ID'];
  nameKr: Scalars['String'];
  counter: Counter;
  nameEn: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Item'. */
export type ItemPage = {
  __typename?: 'ItemPage';
  /** The elements of type 'Item' in this page. */
  data: Array<Maybe<Item>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findCountersByCategoryEn: CounterPage;
  /** Find a document from the collection of 'Counter' by its id. */
  findCounterByID?: Maybe<Counter>;
  findCounterByLabel?: Maybe<Counter>;
  /** Find a document from the collection of 'Item' by its id. */
  findItemByID?: Maybe<Item>;
  counterByLabel?: Maybe<Counter>;
  counters: CounterPage;
  items: ItemPage;
  findItemByNameEn?: Maybe<Item>;
  itemByNameEn?: Maybe<Item>;
  countersByCategoryEn: CounterPage;
};


export type QueryFindCountersByCategoryEnArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  categoryEn: Scalars['String'];
};


export type QueryFindCounterByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindCounterByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindItemByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCounterByLabelArgs = {
  label: Scalars['String'];
};


export type QueryCountersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryItemsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindItemByNameEnArgs = {
  nameEn: Scalars['String'];
};


export type QueryItemByNameEnArgs = {
  nameEn: Scalars['String'];
};


export type QueryCountersByCategoryEnArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  categoryEn: Scalars['String'];
};


export type GetCountersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountersQuery = (
  { __typename?: 'Query' }
  & { counters: (
    { __typename?: 'CounterPage' }
    & { data: Array<Maybe<(
      { __typename?: 'Counter' }
      & Pick<Counter, 'label'>
      & { items: (
        { __typename?: 'ItemPage' }
        & { data: Array<Maybe<(
          { __typename?: 'Item' }
          & Pick<Item, 'nameKr'>
        )>> }
      ) }
    )>> }
  ) }
);


export const GetCountersDocument = gql`
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

/**
 * __useGetCountersQuery__
 *
 * To run a query within a React component, call `useGetCountersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountersQuery(baseOptions?: Apollo.QueryHookOptions<GetCountersQuery, GetCountersQueryVariables>) {
        return Apollo.useQuery<GetCountersQuery, GetCountersQueryVariables>(GetCountersDocument, baseOptions);
      }
export function useGetCountersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountersQuery, GetCountersQueryVariables>) {
          return Apollo.useLazyQuery<GetCountersQuery, GetCountersQueryVariables>(GetCountersDocument, baseOptions);
        }
export type GetCountersQueryHookResult = ReturnType<typeof useGetCountersQuery>;
export type GetCountersLazyQueryHookResult = ReturnType<typeof useGetCountersLazyQuery>;
export type GetCountersQueryResult = Apollo.QueryResult<GetCountersQuery, GetCountersQueryVariables>;