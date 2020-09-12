exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/users/)) {
    page.matchPath = '/users/*';
    actions.createPage(page);
  }
};
