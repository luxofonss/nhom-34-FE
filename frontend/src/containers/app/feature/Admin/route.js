import { Outlet } from 'react-router'
import ProductAdd from './pages/ProductAdd'
import ProductAll from './pages/ProductAll'
import ProductEdit from './pages/ProductEdit'
import AdminLayout from '@src/components/Layouts/AdminLayout'

export const adminRouteList = [
  {
    path: '/product',
    element: (
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    ),
    children: [
      {
        path: 'add',
        element: <ProductAdd />
      },
      {
        path: 'all',
        element: <ProductAll />
      },
      {
        path: ':id',
        element: <ProductEdit />
      }
    ]
  }
]
