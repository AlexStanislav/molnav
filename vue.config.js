module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/molnav/' : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Molnav Conprest',
    },
  }
}