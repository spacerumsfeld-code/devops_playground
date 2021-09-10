## Notes

1. Custom '\_document.tsx' and .babelrx + an additional plugin so styled-components and Next.JS play nicely with each other
2. ApolloClient provided to application in \_app for query/mutations across the board
3. You must initialize the ApolloClient INSIDE either getServerSideProps or getStaticProps in order to make GraphQL queries in server-side or static rendering
4. Custom styled-components are tricky

## Further exploration

1. makeExecutableSchema as an alternative means to create GraphQL schema
2. adding a volume to the mongo image to populate it with initial data and/or preserve data across db deletions
3. GraphQL fragments
