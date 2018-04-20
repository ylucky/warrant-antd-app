import React from 'react'
import { NavBar, WhiteSpace, Carousel, WingBlank, NoticeBar} from 'antd-mobile'
import List from '../components/List'

const data = [
  {
    id: '1',
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Warehouse Receipt：W1803152',
    des: '不是所有的兼职汪都需要风吹日晒',
    status: 'pledge',
    total: '69kg'
  },
  {
    id: '2',
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'Warehouse Receipt：W1803151',
    des: '不是所有的兼职汪都需要风吹日晒',
    status: '',
    total: '144kg'
  },
  {
    id: '3',
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Warehouse Receipt：W1803153',
    des: '不是所有的兼职汪都需要风吹日晒',
    status: 'pledge',
    total: '144kg'
  },
  {
    id: '4',
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Warehouse Receipt：W1803152',
    des: '不是所有的兼职汪都需要风吹日晒',
    status: '',
    total: '144kg'
  },
  {
    id: '5',
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'Warehouse Receipt：W1803151',
    des: '不是所有的兼职汪都需要风吹日晒',
    status: 'pledge',
    total: '144kg'
  },
  {
    id: '6',
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Warehouse Receipt：W1803153',
    des: '不是所有的兼职汪都需要风吹日晒',
    status: 'pledge',
    total: '144kg'
  }
]
const Home = ({ match }) => (
  <div>
    <NavBar mode='light'>WARRANT</NavBar>
    <WhiteSpace size='lg' />
    <WingBlank>
      <Carousel className='my-carousel'
        vertical
        dots={false}
        dragging={false}
        swiping={false}
        autoplay
        infinite
      >
        {
        data.map((data, index) => <NoticeBar key={index} marqueeProps={{ loop: false, style: { padding: '0 7.5px' } }}>{data.title}</NoticeBar>)
      }
      </Carousel>
      {
        data.map((data, index) => <List key={data.id} data={data} />)
      }
    </WingBlank>
    <WhiteSpace size='lg' />
  </div>
)

export default Home
