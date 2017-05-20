/**
 * Created by gxx on 2017/5/14.
 */
import React from 'react';
import {
	Link,
} from 'react-router-dom'
import { Table, Tabs, Modal, Button, Input, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
const TabPane = Tabs.TabPane;
const InputGroup = Input.Group;
const Option = Select.Option;


const columns = [{
	title: '',
    dataIndex: 'age',
    key: 'age',
    width: 40,
}, {
	title: '审核结果',
	dataIndex: 'result',
}];
const data = [{
	age: '1',
	result: 'John Brown',
},{
	age: '2',
	result: 'John Brown',
}];

const antiFraudColumns = [{
	title: '',
    dataIndex: 'age',
    key: 'age',
    width: 40,
}, {
	title: '审核结果',
	dataIndex: 'result',
}];
const antiFraudData = [];

const scoreCardColumns = [{
	title: '',
    dataIndex: 'age',
    key: 'age',
    width: 40,
}, {
	title: '审核结果',
	dataIndex: 'result',
}];
const scoreCardData = [{
	age: '1',
	result: '评分卡',
}];

const contactColumns = [{
	title: '',
    dataIndex: 'age',
    key: 'age',
    width: 40,
}, {
	title: '详细信息',
	dataIndex: 'result',
}];
const contactData = [{
	age: '1',
	result: '联系人',
}];

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		//disabled: record.name === 'Disabled User',    // Column configuration not to be checked
	}),
};

const Tabl = ({ routes }) => (
	<div>
		<p className="letterTitle">个人信息</p>
		<ul className="personalList clearfix">
			<li><span>手机号:</span><strong>15658451252</strong></li>
			<li><span>姓名:</span><strong>段誉</strong></li>
			<li><span>身份证号:</span><strong>15658451252</strong></li>
			<li><span>学历:</span><strong>硕士</strong></li>
			<li className="personalBig"><span>现居住地:</span><strong>上海市静安区西藏北路110弄110号</strong></li>
			<li><span>家人知晓:</span><strong>是</strong></li>
		</ul>
		<p className="letterTitle">联系人信息</p>
		<ul className="personalList clearfix">
			<li><span>联系人1姓名:</span><strong>阿凡达</strong></li>
			<li><span>联系人2姓名:</span><strong>库大库路马拉可林不拉夫斯基</strong></li>
			<li><span>联系人1关系:</span><strong>朋友</strong></li>
			<li><span>联系人2关系:</span><strong>弟弟</strong></li>
			<li><span>联系人1电话:</span><strong>110</strong></li>
			<li><span>联系人2电话:</span><strong>120</strong></li>
		</ul>
		<p className="letterTitle">职业信息</p>
		<ul className="personalList clearfix">
			<li className="personalBig"><span>单位名称:</span><strong>上海中嬴金融信息服务有限公司</strong></li>
			<li><span>单位电话:</span><strong>15658451252</strong></li>
			<li><span>行业:</span><strong>金融</strong></li>
			<li className="personalBig"><span>单位地址:</span><strong>上海市静安区西藏北路110弄110号上海市静安区西藏北路110弄110号上海市静安区西藏北路110弄110号</strong></li>
		</ul>
		<p className="letterTitle">审批信息</p>
		<p className="inputBox">
			<Input addonBefore="审批金额："  defaultValue="0" />
		</p>
		<ul className="personalList examinationList clearfix">
			<li>
				<span>月收入:</span>
				<strong>
					<InputGroup compact>
			    	  <Select defaultValue="Option1-1">
			            <Option value="Option1-1">保密</Option>
			            <Option value="Option1-2">1000-3000</Option>
			            <Option value="Option1-3">3000-10000</Option>
			            <Option value="Option1-4">10000-30000</Option>
			            <Option value="Option1-5">=3000</Option>
			          </Select>
			        </InputGroup>
				</strong>
	        </li>
			<li>
				<span> 借款用途:</span>
				<strong>
					<InputGroup compact>
			    	  <Select defaultValue="Option1-1">
			            <Option value="Option1-1">Option1-1</Option>
			            <Option value="Option1-2">Option1Option1Option1-2</Option>
			          </Select>
			        </InputGroup>
				</strong>
	        </li>
	        <li>
				<span>婚姻状况:</span>
				<strong>
					<InputGroup compact>
			    	  <Select defaultValue="Option1-1">
			            <Option value="Option1-1">保密</Option>
			            <Option value="Option1-2">已婚</Option>
			            <Option value="Option1-3">未婚</Option>
			          </Select>
			        </InputGroup>
				</strong>
	        </li>
	        <li>
				<span>住房情况:</span>
				<strong>
					<InputGroup compact>
			    	  <Select defaultValue="Option1-1">
			    	    <Option value="Option1-1">保密</Option>
			            <Option value="Option1-2">有房</Option>
			            <Option value="Option1-3">租房</Option>
			            <Option value="Option1-4">借宿</Option>
			          </Select>
			        </InputGroup>
				</strong>
	        </li>
	        <li>
				<span>是否接听电话:</span>
				<strong>
					<InputGroup compact>
			    	  <Select defaultValue="Option1-1">
			            <Option value="Option1-1">是</Option>
			            <Option value="Option1-2">否</Option>
			          </Select>
			        </InputGroup>
				</strong>
	        </li>
	        <li>
	        	<span>
					<Button>拨号</Button>
			    </span>
			</li>
		</ul>   
	    <p className="letterTitle">审批意见</p>
	    <p className="inputBox">
	    	<Input type="textarea" placeholder="审批意见" autosize={{ minRows: 3, maxRows: 6 }} />
	    </p>
	</div>
)

const nameColumns = [{
	title: '',
    dataIndex: 'age',
    key: 'age',
    width: 40,
}, {
	title: '合同号',
	dataIndex: 'number',
}, {
	title: '合同状态',
	dataIndex: 'state',
}, {
	title: '单位名称',
	dataIndex: 'name',
}];
const nameData = [{
	age: '1',
	number: '单位名称关联合同',
	state: '123',
	name: 'John Brown',
}];

const telephoneColumns = [{
	title: '',
    dataIndex: 'age',
    key: 'age',
    width: 40,
}, {
	title: '合同号',
	dataIndex: 'number',
}, {
	title: '合同状态',
	dataIndex: 'state',
}, {
	title: '单位电话',
	dataIndex: 'name',
}];
const telephoneData = [{
	age: '1',
	number: '单位名称关联合同',
	state: '123',
	name: '单位电话关联合同',
}];

const phoneColumns = [{
	title: '',
    dataIndex: 'age',
    key: 'age',
    width: 40,
}, {
	title: '合同号',
	dataIndex: 'number',
}, {
	title: '合同状态',
	dataIndex: 'state',
}, {
	title: '借款人手机',
	dataIndex: 'name',
}];
const phoneData = [{
	age: '1',
	number: '单位名称关联合同',
	state: '123',
	name: '借款人手机关联合同',
}];

const emergencyColumns = [{
	title: '',
    dataIndex: 'age',
    width: 40,
},{
	title: '借款总额',
	dataIndex: 'number',
}, {
	title: '放款状态',
	dataIndex: 'state',
}, {
	title: '放款日期',
	dataIndex: 'name',
}];
const emergencyData = [{
	age: '1',
	number: '单位名称关联合同',
	state: '123',
	name: '借款人手机关联合同',
}];
const AssociatedContract = ({ routes }) => (
	<div className="overflowAuto">
		<p className="letterTitle">单位名称关联合同</p>
		<Table  columns={nameColumns} dataSource={nameData}/>
		<p className="letterTitle">单位电话关联合同</p>
		<Table  columns={telephoneColumns} dataSource={telephoneData}/>
		<p className="letterTitle">借款人手机关联合同</p>
		<Table  columns={phoneColumns} dataSource={phoneData}/>
		<p className="letterTitle">急借通信息</p>
		<Table  columns={emergencyColumns} dataSource={emergencyData}/>
	</div>
)


const presentationColumns = [{
	title: '',
    dataIndex: 'age',
    width: 40,
},{
	title: '年月',
	dataIndex: 'yuears',
}, {
	title: '月通话次数',
	dataIndex: 'frequency',
}, {
	title: '月通话时长（分钟）',
	dataIndex: 'duration',
}];
const presentationData = [{
	age: '1',
	yuears: '单位名称关联合同',
	frequency: '123',
	duration: '借款人手机关联合同',
}];

const Presentation = ({ routes }) => (
	<div>
		<p className="letterTitle">聚信力报告</p>
		<ul className="personalList clearfix">
			<li><span>报告时间:</span><strong>15658451252</strong></li>
			<li><span>姓名:</span><strong>段誉</strong></li>
			<li><span>身份证号:</span><strong>15658451252</strong></li>
			<li><span>年龄:</span><strong>硕士</strong></li>
			<li><span>归属地:</span><strong>上海市静安区西藏北路110弄110号</strong></li>
			<li><span>入网时长:</span><strong>是</strong></li>
		</ul>
		<p className="letterTitle">联系人通话频率</p>
		<ul className="personalList clearfix">
			<li><span>联系人姓名:</span><strong>15658451252</strong></li>
			<li><span>联系人关系:</span><strong>段誉</strong></li>
			<li><span>联系人手机号:</span><strong>15658451252</strong></li>
			<li><span>号码归属地:</span><strong>硕士</strong></li>
			<li><span>首次联系时间:</span><strong>上海市静安区西藏北路110弄110号</strong></li>
			<li><span>最后联系时间:</span><strong>是</strong></li>
		</ul>
		<Table columns={presentationColumns} dataSource={presentationData}/>
	</div>
)

const RefusePop = ({ routes }) => (
	<ul className="personalList examinationList clearfix">
		<li>
			<span>拒绝主因:</span>
			<strong>
				<InputGroup compact>
		    	  <Select defaultValue="Option1-1">
		            <Option value="Option1-1">Option1-1</Option>
		            <Option value="Option1-2">Option1Option1Option1-2</Option>
		          </Select>
		        </InputGroup>
			</strong>
        </li>
        <li>
			<span>拒绝子因:</span>
			<strong>
				<InputGroup compact>
		    	  <Select defaultValue="Option1-1">
		            <Option value="Option1-1">Option1-1</Option>
		            <Option value="Option1-2">Option1Option1Option1-2</Option>
		          </Select>
		        </InputGroup>
			</strong>
        </li>
    </ul> 
)

class operationTable extends React.Component {
	state = { visible: false }
	  showModal = () => {
	    this.setState({
	      visible: true,
	    });
	  }
	  handleOk = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
	  }
	  handleCancel = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
	}
	render() {
		return(
			<div className="centerDetail">
		      <div className="contentDetail">
		      	<Tabs type="card">
			      <TabPane tab="芝麻信用" key="1"><Table columns={columns} dataSource={data}/></TabPane>
			      <TabPane tab="反欺诈规则" key="2"><Table columns={antiFraudColumns} dataSource={antiFraudData}/></TabPane>
			      <TabPane tab="评分卡" key="3"><Table columns={scoreCardColumns} dataSource={scoreCardData}/></TabPane>
			      <TabPane tab="联系人情况" key="4"><Table columns={contactColumns} dataSource={contactData}/></TabPane>
			      <TabPane tab="关联合同" key="5"><AssociatedContract /></TabPane>
			      <TabPane tab="聚信力报告" key="6"><Presentation /></TabPane>
			    </Tabs>
		      </div>
		      <div className="personalContent">
		      	<Tabl />
			    <div className="btnCenter">
				    <Button type="primary">通过</Button>
				    <Button type="primary" onClick={this.showModal}>拒绝</Button>
				    <Modal title="拒绝原因" visible={this.state.visible}
			          onOk={this.handleOk} onCancel={this.handleCancel}
			        >
			          <RefusePop />
			        </Modal>
				</div> 
		      </div>     	
            </div>
		);
	}
}
export default operationTable;