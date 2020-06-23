import React from 'react';
import './App.css';
import { Form } from './containers';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ padding: '0 14px 14px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Row justify="center">
            <Col span={9}>
              <Form/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
