module.exports = {
    rewrites: async () => ({
        beforeFiles: [
            {
                source: '/overwritten',
                destination: 'https://pokeapi.co/api/v2/pokemon/ditto'
            }
        ]
    }),
  reactStrictMode: true,
}
