import { Layout } from 'antd';
import CustomHeader from './Header';
import CustomFooter from './Footer';
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <CustomHeader />
      </Header>
      <Content>
        {children}
      </Content> 
      <Footer>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default AppLayout;
