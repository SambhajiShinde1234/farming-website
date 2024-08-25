import { Layout } from 'antd';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import AppContent from './Components/AppContent';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        {/* <AppHeader/> */}
      </Header>
      <Content>
        <AppContent />
      </Content>
      {/* <Footer>
        <AppFooter/>  
      </Footer>       */}
    </Layout>
  );
};

export default App;
