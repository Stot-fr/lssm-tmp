export type BlogPostListPageProps = {
    pagination: {
        page: number;
        itemsPerPage: number;
    }
};

export const BlogPostListPage = (urlParams: any) => {
  // hook pour load sometingh
  // hook pour mutate something
  return (
    <AuthTemplate>
      <LoginPageTemplate/>
    </AuthTemplate>
  );
};
