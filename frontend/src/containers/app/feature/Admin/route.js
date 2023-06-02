import AppLayout from '@src/components/Layouts/AppLayout'
// import { USER_ROLE } from '@src/configs'
// import RequireAuth from '@src/routes/RequireAuth'
// import { Outlet } from 'react-router'
import ProductAdd from './pages/ProductAdd'
import AdminLayout from '@src/components/Layouts/AdminLayout'

export const adminRouteList = [
  {
    path: '/product-add',
    element: (
      <AdminLayout>
        <ProductAdd />
      </AdminLayout>
    )
  }
  // {
  //   path: '/',
  //   element: <RequireAuth allowedRoles={[USER_ROLE.ADMIN]}></RequireAuth>,
  //   children: [
  //     {
  //       path: '/category',
  //       element: (
  //         <AppLayout>
  //           <Category />
  //         </AppLayout>
  //       )
  //     }
  //   ]
  // }
]
