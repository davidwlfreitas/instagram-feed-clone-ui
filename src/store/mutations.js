export function SET_POSTS(state, { posts }) {
  state.posts = posts;
}

export function LOGGING_IN(state, status) {
  state.logging_in = status;
}

export function LOGIN_SUCCESSFUL(state, { userObj }) {
  state.userObj = userObj;
  state.logging_in = false;
}

export function SET_CURRENT_ORGANIZATION(state, { organization }) {
  state.currentOrganization = organization;
}

export function SET_CURRENT_FEED(state, { feed }) {
  state.feed = feed;
}

export function SET_CURRENT_PAGE(state, { page }) {
  state.page = page;
}
