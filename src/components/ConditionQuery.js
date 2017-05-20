/**
 * Created by gxx on 2017/5/14.
 */
import React from 'react';
import {
    Link,
} from 'react-router-dom'
import { Table, Tabs, Button, Input, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;


const columns = [{
	title: '',
    dataIndex: 'age',
},{
    title: '申请证件编号',
    dataIndex: 'number',
}, {
    title: '姓名',
    dataIndex: 'name',
}, {
    title: '手机号',
    dataIndex: 'phone',
}, {
    title: '证件类型',
    dataIndex: 'type',
}, {
    title: '证件号',
    dataIndex: 'certificates',
}, {
    title: '状态',
    dataIndex: 'state',
}, {
    title: '平台类型',
    dataIndex: 'platformType',
}, {
    title: '产品名称',
    dataIndex: 'productName',
},{
    title: '创建时间',
    dataIndex: 'time',
}, {
    title: '修改时间',
    dataIndex: 'modify',
}, {
    title: '操作',
    dataIndex: 'operation',
    render: text => <Link to="./operation">操作</Link>,
}];
const data = [{
    age: '1',
    number: '123',
    name: 'John Brown',
    phone: '15901819982',
    type: '身份证',
    certificates: '312546545198745212',
    state: '内推',
    platformType: '发薪贷',
    productName: '上海市',
    time: '2017/5/16',
    modify: '段誉',
    operation: '操作'
}, {
    age: '1',
    number: '123',
    name: 'John Brown',
    phone: '15901819982',
    type: '身份证',
    certificates: '312546545198745212',
}, {
    certificates: '312546545198745212',
    state: '内推',
    platformType: '发薪贷',
    productName: '上海市',
    time: '2017/5/16',
    modify: '段誉',
    operation: '操作'
}, {
    age: '1',
    number: '123',
    name: 'John Brown',
    platformType: '发薪贷',
    productName: '上海市',
}];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        //disabled: record.name === 'Joe Black',    // Column configuration not to be checked
    }),
};

const Nav = ({ routes }) => (
	<div className="administrationCenter">
        <ul className="administrationList clearfix">
			<li>
				<span>审核人:</span>
				<strong><Input placeholder="default size" /></strong>
			</li>
			<li>
				<span>审核日期:</span>
				<strong><strong><RangePicker onChange={onChange} /></strong></strong>
			</li>
		</ul>
		<div className="btnCenter">
		    <Button type="primary">查询</Button>
		    <Button type="danger">重置</Button>
		</div>
    </div>
)
function onChange(date, dateString) {
  console.log(date, dateString);
}

class _Table extends React.Component {
    render() {
        return (
        	<div>
        	    <p className="letterTitle">申请件管理</p>
        	    <Nav />
        	    <p className="letterTitle">申请件信息列表</p>
            	<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default _Table;