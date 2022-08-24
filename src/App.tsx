import {useEffect} from 'react';
import { Layout,Col, Row } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { useGetPosts } from './lib/api-hooks';
import { FetchState } from './types';

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [posts, fetchState, getPosts] = useGetPosts();
  useEffect(() => {
    getPosts()
  }, []);

  return (

    <>
    <Layout>
      <Header className='app-header'>Header</Header>
      {fetchState === FetchState.SUCCESS && (
        <>
        <Row>
        {posts.map((post) => (
          
        <Col span={8} key={post.flight_number}><a href={post.links.article_link} target="_blank"><Card
    hoverable
    style={{margin:50,padding:20}}
    cover={<img alt="example" src={post.links.mission_patch} />}
  >
    <Meta title={post.mission_name} />
    <p>{post.details}</p>
    <Meta title={post.launch_year} />
    {/* <p>{post.launch_year}</p> */}
  </Card></a></Col>

   ))}
  </Row>

        </>
      )}
      <Footer className='app-footer'>Footer</Footer>
    </Layout>
  </> 
  );
}

export default App;
