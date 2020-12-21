import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField,
} from '@shopify/polaris';

function handleSubmit(){
  this.setState({
    discount: this.state.discount,
  });
  console.log('submission', this.state);
};

function handleChange(field) {
  return (value) => this.setState({ [field]: value });
};
const name = 'John Doe'
const NewAuthor = () => (

  <Page>
    <Layout>
      <Layout.AnnotatedSection
        title="Add Guest Author"
        description="Add a Guest Author to Your Website, it will automatically created."
      >
        <Card sectioned>
        <Form onSubmit={handleSubmit}>
                  <FormLayout>
                    <TextField
                      value={name}
                      onChange={handleChange('name')}
                      label="Author Name"
                      type="name"
                    />
                    <Stack distribution="trailing">
                      <Button primary submit>
                        Create Author
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
        </Card>
      </Layout.AnnotatedSection>
    </Layout>
  </Page>
  );
  export default NewAuthor;
