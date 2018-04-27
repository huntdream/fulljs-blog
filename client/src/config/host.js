export const host =
  process.env.NODE_ENV === 'production'
    ? 'https://blog.maoyu.info/api'
    : 'http://localhost:3000/api'
// export const host = 'http://localhost:3000/api'
