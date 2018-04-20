import React from 'react'
import {Link} from 'react-router-dom'
import { WhiteSpace, Card} from 'antd-mobile'

const List = ({data}) => {
  return (
    <Link to={{pathname: '/warrant', state: data}} className={`cf last-no-border ${root}`}>
      <WhiteSpace size='lg' />
      <Card className='home-card'>
        <Card.Header
          title={data.title}
          thumb='https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=d6c51dbbbd4543a9e116f29e7f7ee1e7/5243fbf2b2119313d5a23cff6f380cd790238d98.jpg'
          extra={<span className='warn-text'>{data.status}</span>}
        />
        <Card.Body>
          <ul>
            <li>Total:<strong>{data.total}</strong></li>
          </ul>
        </Card.Body>
        <Card.Footer content='' extra={<div>MORE</div>} />
      </Card>
      <WhiteSpace size='lg' />
    </Link>
  )
}

export default List
