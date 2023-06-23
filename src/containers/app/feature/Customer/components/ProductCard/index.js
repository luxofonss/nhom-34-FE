import { Link } from 'react-router-dom'
import { Card } from 'antd'
// const noImage = process.env.NO_IMG

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product._id}`}
      className='w-full flex flex-col gap-2 p-2 cursor-pointer bg-neutral-200 rounded-md hover:bg-secondary-purple hover:scale-105 transition'
    >
      <Card title={product?.name}>
        <img src={product?.thumb} alt='img' height='100px' width='100px' />
        <h1>{product?.price}</h1>
      </Card>
    </Link>
  )
}

export default ProductCard
