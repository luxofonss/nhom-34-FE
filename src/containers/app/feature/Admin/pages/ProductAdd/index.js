import classNames from 'classnames/bind'
import styles from './ProductAdd.module.sass'
import { Form, Input, Select, Button } from 'antd'

const { Option } = Select
const cx = classNames.bind(styles)

function ProductAdd() {
  const onFinish = (values) => {
    console.log('values:: ', values)
  }
  return (
    <div className={cx('wrapper')}>
      <div className='text-black'>Them san pham</div>
      <div>
        <Form onFinish={onFinish} name='control-ref'>
          <Form.Item
            name='name'
            label='Name'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='gender'
            label='Gender'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select placeholder='Select a option and change input text above' onChange={() => {}} allowClear>
              <Option value='male'>male</Option>
              <Option value='female'>female</Option>
              <Option value='other'>other</Option>
            </Select>
          </Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ProductAdd
