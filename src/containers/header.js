/**
 * Created by gxx on 2017/5/10.
 */
import React from 'react';
import {Menu} from '../components/'
import {
    Link
} from 'react-router-dom'
import {Row, Col} from 'antd';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Row>
                    <Col span={6} className='logo'>
                        <Link to="/"><img src={require('../../public/assets/img/logo.png')} alt="" width={60}/></Link>
                    </Col>
                    <Col span={14}>
                        <Menu/>
                    </Col>
                    <Col span={4} className='login'>
                        <div>
                            <Link to='/login'>
                                登陆
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default Header;
