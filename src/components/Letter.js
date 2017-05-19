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
    title: '审核人',
    dataIndex: 'name',
}, {
    title: '部门',
    dataIndex: 'department',
}, {
    title: '总件数',
    dataIndex: 'number',
}, {
    title: '逾期件数',
    dataIndex: 'overdue',
}, {
    title: '通过件数',
    dataIndex: 'adopt',
}, {
    title: '拒绝件数',
    dataIndex: 'refuse',
}, {
    title: '通过金额（元）',
    dataIndex: 'money',
}];
const data = [{
    age: '1',
    name: 'John Brown',
    department: '技术部',
    number: '123',
    overdue: '15901819982',
    adopt: '身份证',
    refuse: '312546545198745212',
    money: '内推'
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
        	    <p className="letterTitle">查询条件</p>
        	    <Nav />
        	    <p className="letterTitle">账户信息列表</p>
            	<Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default _Table;