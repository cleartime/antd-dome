import React from 'react';
import {
    Link,
} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import {test} from '../service/'
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
    state = {
        current: '1',
        openKeys: [],
        list: [
            {
                "id":600110230,
                "name":"菜单一",
                "icon": "shop",
                "url":"",
                "children":[
                    { "id":600110231, "name":"菜单一子菜单一", "url":"/main/slide/table" },
                    { "id":600110232, "name":"菜单一子菜单二", "url":"/main/slide/transfer" }
                ]
            },
            {
                "id":600110330,
                "name":"菜单二",
                "icon": "team",
                "url":"",
                "children":[
                    { "id":600110331, "name":"菜单二子菜单一", "url":"/main/slide/table" },
                    { "id":600110332, "name":"菜单二子菜单二", "url":"/main/slide/transfer" },
                ]
            },
            {
                "id":600110430,
                "name":"菜单三",
                "icon": "tool",
                "url":"",
                "children":[
                    { "id":600110431, "name":"菜单三子菜单一", "url":"/main/slide" },
                ]
            },

        ]
    }
    componentWillMount() {
        test().then((data)=>{
            // this.state.list = data.data
        })
    }
    handleClick = (e) => {
        // console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    }
    render() {
        return (
            <Menu onClick={this.handleClick}
                  openKeys={this.state.openKeys}
                  onOpenChange={this.onOpenChange}
                  mode="inline"
                  selectedKeys={[this.state.current]}
            >
                {
                    this.state.list.map((subMenu, index) => (
                        <SubMenu key={index} title={
                            <span>
                  <Icon type={subMenu.icon} />
                  <span>{subMenu.name}</span>
                </span>}>
                            {
                                subMenu.children.map((menu) => (
                                    <Menu.Item key={`/${menu.url}`}
                                               name={menu.name}
                                    ><Link to={menu.url}>{menu.name}</Link></Menu.Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        );
    }
}

export default Sider;
