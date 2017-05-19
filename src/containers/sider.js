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
                "id":600110231,
                "name":"信审管理",
                "icon": "shop",
                "url":"",
                "children":[
                    { "id":600110231, "name":"信审统计", "url":"/main/slide/letter" },
                    { "id":600110232, "name":"急速贷人工信审", "url":"/main/slide/artificialLetter" },
                    { "id":600110233, "name":"操作栏", "url":"/main/slide/operation" },
                    { "id":600110234, "name":"申请条件查询", "url":"/main/slide/conditionQuery" },
                    { "id":600110235, "name":"信审记录查询", "url":"/main/slide/recordQuery" },
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
                    { "id":600110431, "name":"菜单三子菜单一", "url":"/main/slide/table" },
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
                  defaultSelectedKeys={['1']}
          		  defaultOpenKeys={['sub1']}
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
