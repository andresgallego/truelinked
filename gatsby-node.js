exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/users/)) {
    page.matchPath = '/users/*';
    actions.createPage(page);
  }
  if (page.path.match(/^\/posts/)) {
    page.matchPath = '/posts/*';
    actions.createPage(page);
  }
};
