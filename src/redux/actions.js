
export const USER_INFO = 'USER_INFO'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const userInfoAction = subreddit => ({
  type: USER_INFO,
  subreddit
})

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

// const fetchPosts = subreddit => dispatch => {
//   console.log('fetchPosts')
//   dispatch(requestPosts(subreddit))
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(subreddit, json)))
// }

// const shouldFetchPosts = (state, subreddit) => {
//   console.log('shouldFetchPosts')
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   }
//   if (posts.isFetching) {
//     return false
//   }
//   return posts.didInvalidate
// }

// export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
//   console.log('fetchPostsIfNeeded')
//   if (shouldFetchPosts(getState(), subreddit)) {
//     return dispatch(fetchPosts(subreddit))
//   }
// }
