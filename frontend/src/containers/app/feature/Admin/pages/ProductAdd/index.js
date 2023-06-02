import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ProductAdd.module.sass'
import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, Select, Button, Upload, Space } from 'antd'

const { Option } = Select
const { TextArea } = Input
const cx = classNames.bind(styles)
const atributeMobile = ['brand', 'ram', 'resolution', 'period', 'battery', 'screen', 'process']
const colorItem = ['black', 'white', 'green', 'yellow', 'red', 'blue']
const sizeItem = ['S', 'M', 'L', 'XL']
// const [industry, setIndustry] = useState('')
function ProductAdd() {
  const onFinish = (values) => {
    console.log('values:: ', values)
  }
  const onChange = (values) => {
    console.log('Change:', values.target.value)
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  function attributeItem(item) {
    return (<Form.Item name={item} label={item} rules={[{ required: true }]}>
      <Input />
    </Form.Item>)
  }

  function selectItem(item) {
    return (
      <Option value={item} label={item}>
        <Space>
          <span role="img" aria-label={item}>
            🇨🇳
          </span>
          {item}
        </Space>
      </Option>
    )
  }


  return (
    <div className={cx('wrapper')}>
      <div>Thêm sản phẩm</div>
      <div>
        <Form.Item label='Hình ảnh' valuePropName='fileList' getValueFromEvent={normFile}>
          <Upload action='/upload.do' listType='picture-card'>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8
                }}
              >
                Hình ảnh:
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form onFinish={onFinish} name='control-ref'>
          <Form.Item
            name='name'
            label='Tên sản phẩm'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input maxLength={20} onChange={onChange} />
          </Form.Item>
          <Form.Item
            name='industry'
            label='Ngành hàng'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select placeholder='Select a option and change input text above' onChange={() => { }} allowClear>
              <Option value='mobile'>Điện thoại</Option>
              <Option value='laptop'>Laptop</Option>
              <Option value='other'>Khác</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='description'
            label='Mô tả sản phẩm'
            rules={[
              {
                required: true
              }
            ]}>
            <TextArea showCount maxLength={100} onChange={onChange} />
          </Form.Item>


          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form>
      </div>

      <div>
        <div>Thêm chỉ tiết sản phẩm</div>

        <div>
          <Form onFinish={onFinish} name='control-ref'>
            {atributeMobile.map(attributeItem)}
          </Form>
        </div>

      </div>
      <div>Thông tin bán hàng</div>
      <div>
        <Form onFinish={onFinish} name='control-ref'>
          <Form.Item
            name='color'
            label='Màu sắc'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select
              mode="multiple"
              style={{
                width: '100%',
              }}
              placeholder="select color"
              defaultValue={['black']}
              onChange={handleChange}
              optionLabelProp="label"
            >
              {colorItem.map(selectItem)}
            </Select>
          </Form.Item>

          <Form.Item
            name='size'
            label='Kích thước'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select
              mode="multiple"
              style={{
                width: '100%',
              }}
              placeholder="select size"
              defaultValue={['S']}
              onChange={handleChange}
              optionLabelProp="label"
            >
              {sizeItem.map(selectItem)}
            </Select>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default ProductAdd
