import { Layout } from 'antd';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/Footer';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        {/* <AppHome/> */}
      </Content>
      <Footer>
        {/* <AppFooter/>   */}
      </Footer>      
    </Layout>
  );
};

export default App;
