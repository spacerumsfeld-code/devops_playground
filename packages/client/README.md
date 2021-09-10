## Notes

1. Custom '\_document.tsx' and .babelrx + an additional plugin so styled-components and Next.JS play nicely with each other
2. ApolloClient provided to application in \_app for query/mutations across the board
3. You must initialize the ApolloClient INSIDE either getServerSideProps or getStaticProps in order to make GraphQL queries in server-side or static rendering
4. Custom styled-components are tricky

## Further Exploration

1. More custom styled-components
2. Extend this playground to hammer home proficiency in "advanced" hooks (useReducer, useMemo, useCallback, useContext)
3. Incorporate redux for "fun"
4. Etc.
