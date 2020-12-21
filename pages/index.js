import { EmptyState, Layout, Heading, Page } from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
const Index = () => (
  <Page>
    <Heading>Welcome To The Guest Author App 🎉</Heading>
    <Layout>
        <EmptyState
        heading="Add Guests Authors In One Form and A Click"
        action={{
          content: 'Get Started',
          url: '/new-author',
          onAction: () => console.log('clicked Get Started Button'),
        }}
        image={img}
      >
        <p>Select get started to start creating Guests Authors</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;
