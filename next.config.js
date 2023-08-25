module.exports = {
    distDir: 'build',
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'none'",
            },
          ],
        },
      ];
    },
  };
  