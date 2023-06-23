import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from '@src/configs/customFetchBase'

const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    //product
    getAllProducts: build.query({
      query: () => {
        return {
          url: '/product'
        }
      }
    }),
    //category
    getAllCategories: build.query({
      query: () => ({
        url: '/category/'
      })
    })
  })
})

export default customerApi
