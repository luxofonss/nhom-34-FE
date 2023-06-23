import { Card, List } from 'antd'
import customerApi from '../../customerService'

function Category() {
  const { data: categoryList } = customerApi.endpoints.getAllCategories.useQuery()
  const data = []
  {
    categoryList
      ? categoryList.metadata.map((category) => {
          data.push(category)
        })
      : null
  }

  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.name}
              className='w-150 flex flex-col gap-2 p-2 cursor-pointer bg-neutral-200 rounded-md hover:bg-secondary-purple hover:scale-105 transition'
            >
              <img src={item.thumb} alt='img' height='100px' width='100px' />
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default Category
