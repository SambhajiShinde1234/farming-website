import { Layout } from 'antd';
import whatsapplogo from './assets/Images/whatsapplogo.png'
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import AppContent from './Components/AppContent';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>  
      </Header>
      <Content>
        <AppContent />
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>
      <div
         style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 10, background: '#FFF', padding: '9px', borderRadius: 100 }}
      >
        <a href="https://wa.me/919699828358">
          <img alt="Chat on WhatsApp" src={whatsapplogo} style={{ height: '30px'}} />
        </a>
      </div>
    </Layout>
  );
};

export default App;
