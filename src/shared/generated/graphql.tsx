import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getMyShops: Array<Shop>;
  getShop?: Maybe<Shop>;
  getProduct: ProductResponse;
  shopProducts: ProductsResponse;
  getShopTheming?: Maybe<Shop>;
};


export type QueryGetShopArgs = {
  id: Scalars['Int'];
};


export type QueryGetProductArgs = {
  productId: Scalars['Int'];
};


export type QueryShopProductsArgs = {
  id: Scalars['Int'];
};


export type QueryGetShopThemingArgs = {
  shopId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
  myShops: Array<Shop>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Shop = {
  __typename?: 'Shop';
  id: Scalars['Float'];
  owner: User;
  name: Scalars['String'];
  products: Array<Product>;
  shopCustomization: ShopCustomization;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Float'];
  shop: Shop;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ShopCustomization = {
  __typename?: 'ShopCustomization';
  id: Scalars['Float'];
  colors: Color;
  logo?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  theme: Scalars['String'];
};

export type Color = {
  __typename?: 'Color';
  id: Scalars['Float'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  tertiary: Scalars['String'];
  black: Scalars['String'];
  white: Scalars['String'];
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  errors?: Maybe<Array<FieldError>>;
  product?: Maybe<Product>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  errors?: Maybe<Array<FieldError>>;
  products?: Maybe<Array<Product>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  logout: Scalars['Boolean'];
  newShop: ShopResponse;
  deleteShops: Scalars['Boolean'];
  newProduct: ProductResponse;
  deleteProduct: Scalars['Boolean'];
  editProduct: ProductResponse;
};


export type MutationRegisterArgs = {
  options: FullUserInput;
};


export type MutationLoginArgs = {
  options: UserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationNewShopArgs = {
  options: ShopInput;
};


export type MutationDeleteShopsArgs = {
  id: Scalars['Int'];
};


export type MutationNewProductArgs = {
  options: CreateProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationEditProductArgs = {
  id: Scalars['Int'];
  options: ProductInput;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FullUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ShopResponse = {
  __typename?: 'ShopResponse';
  errors?: Maybe<Array<FieldError>>;
  shop?: Maybe<Shop>;
};

export type ShopInput = {
  name: Scalars['String'];
};

export type CreateProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  shopId: Scalars['Int'];
};

export type ProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  passsword: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'email' | 'id'>
    )> }
  ) }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    user {
      id
      email
      name
    }
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $passsword: String!) {
  register(options: {email: $email, password: $passsword}) {
    errors {
      field
      message
    }
    user {
      name
      email
      id
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      passsword: // value for 'passsword'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;