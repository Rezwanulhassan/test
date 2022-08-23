import {Component,useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import axios from 'axios';
import { Layout,Col, Row } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  
//   useEffect(() => {
//   Post.getPosts()
//     .then((data) => {
//       setArticle(data);

//     });
//   return () => {};
// }, []);
  // const [albums, setPost] = useState();
  // useEffect(() => {
  //   axios.get('https://api.spacexdata.com/v3/launches')
    
  //     .then(post => {
  //       albums = post.data;
  //       setPost(albums)
  
  //     })
      
  // }, [])
  // const result = Object.keys(albums).map((key) => {
  //   return 
  // });
  // const mapData = JSON.stringify([albums])
  // console.log("sss",mapData)
  // albums.map((item:any, i:any) => (
  //   <li className="travelcompany-input" key={i}>
  //     <span className="input-label">{ item.name }</span>
  //   </li>
  // ))} 
//   const listItems = mapData.map((number:any,i:any) =>
//   <li>{number}</li>
// );
  return (
<>
    <Layout>
      <Header className='app-header'>Header</Header>
    <Row>
      <Col span={8}><Card
    hoverable
    style={{margin:50}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>

    </Row>
      <Footer className='app-footer'>Footer</Footer>
    </Layout>
  </>
  )
}

export default App;
