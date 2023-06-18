import { graphql } from 'msw'

export const handlers = [
  // Handles a "Login" mutation
  graphql.mutation('Login', (req, res, ctx) => {
    const { username } = req.variables
    sessionStorage.setItem('is-authenticated', username)

    return res(
      ctx.data({
        login: {
          username,
        },
      }),
    )
  }),

  // Handles a "GetUserInfo" query
  graphql.query('GetUserInfo', (req, res, ctx) => {
    const authenticatedUser = sessionStorage.getItem('is-authenticated')

    if (!authenticatedUser) {
      // When not authenticated, respond with an error
      return res(
        ctx.errors([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]),
      )
    }

    // When authenticated, respond with a query payload
    return res(
      ctx.data({
        user: {
          username: authenticatedUser,
          firstName: 'John',
        },
      }),
    )
  }),
]




// # Authenticates using a given username
// mutation Login($username: String!) {
//   login(username: $username) {
//     username
//   }
// }

// # Returns the information about the authenticated user
// query GetUserInfo() {
//   user {
//     username
//     firstName
//   }
// }