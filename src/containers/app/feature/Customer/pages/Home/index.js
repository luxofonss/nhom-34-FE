import Category from '../../components/Category'
import ProductCard from '../../components/ProductCard'
import customerApi from '../../customerService'
function Home() {
  const { data: productList } = customerApi.endpoints.getAllProducts.useQuery()
  return (
    <div>
      <Category className='w-full' />
      <div>
        {productList?.metadata?.map((product) => (
          <div key={product.name}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
