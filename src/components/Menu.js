/**
 * Created by gxx on 2017/5/10.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import {
    Link
} from 'react-router-dom'

class _Menu extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Link to="/main/slide"><Icon type="mail" />顶部菜单1</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/main"><Icon type="appstore" />顶部菜单2</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default _Menu;
