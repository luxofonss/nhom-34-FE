import { customerRouteList } from './feature/Customer/route'
import { staticRouteList } from './feature/StaticPages/route'
import { adminRouteList } from './feature/Admin/route'

export const AppRouteList = [...adminRouteList, ...customerRouteList, ...staticRouteList]
