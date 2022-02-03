module.exports = {
    rewrites: async () => ({
        beforeFiles: [
            {
                source: '/overwritten',
                destination: 'https://example.com'
            }
        ]
    }),
  reactStrictMode: true,
}
