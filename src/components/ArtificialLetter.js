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
    title: '申请来源',
    dataIndex: 'source',
}, {
    title: '商户名称',
    dataIndex: 'merchant',
}, {
    title: '省',
    dataIndex: 'provincial',
}, {
    title: '市',
    dataIndex: 'city',
}, {
    title: '区',
    dataIndex: 'area',
}, {
    title: '创建时间',
    dataIndex: 'time',
}, {
    title: '信审人',
    dataIndex: 'letter',
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
    source: '内推',
    merchant: '发薪贷',
    provincial: '上海市',
    city: '上海市',
    area: '杨浦区',
    time: '2017/5/16',
    letter: '段誉',
    operation: '操作'
}, {
    age: '2',
    name: 'Jim Green',
    phone: 42,
    certificates: 'London No. 1 Lake Park',
}, {
    age: '3',
    name: 'Joe Black',
    city: 32,
    certificates: 'Sidney No. 1 Lake Park',
}, {
    age: '4',
    name: 'Disabled User',
    letter: 99,
    address: 'Sidney No. 1 Lake Park',
}];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        //disabled: record.name === 'Joe Black',    // Column configuration not to be checked
    }),
};


class _Table extends React.Component {
    render() {
        return (
        	<div>
        	    <p className="letterTitle">人工信审</p>
        	    <Nav />
        	    <p className="letterTitle">申请信息列表</p>
            	<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default _Table;