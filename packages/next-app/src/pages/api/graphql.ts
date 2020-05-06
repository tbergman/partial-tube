import { ApolloServer } from "apollo-server-micro"
import { schema } from "../../graphql/schema"

const apolloServer = new ApolloServer({
  schema,
  context: (ctx) => {
    return { req: ctx.req, res: ctx.res }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: "/api/graphql" })
