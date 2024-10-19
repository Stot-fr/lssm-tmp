export type BlogPostListTemplateProps = {
    blogPosts: BlogPost[];
};

export const BlogPostListTemplate = (urlParams: any) => {
  // hook pour load sometingh
  // hook pour mutate something
  return (
    <AuthTemplate>
      <LoginPageTemplate/>
    </AuthTemplate>
  );
};
