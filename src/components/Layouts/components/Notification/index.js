/* eslint-disable react-hooks/exhaustive-deps */
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { BellIcon } from '@heroicons/react/20/solid'
import customerApi from '../../../../containers/app/feature/Customer/customer.service'

function Notification() {
  const [getNotification, { data: notifications }] = customerApi.endpoints.getNotification.useLazyQuery({ cache: true })
  useEffect(() => {
    getNotification(null, false)
  }, [])
  return (
    <div className='flex'>
      <Popover className='relative z-[1000]'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
        ${open ? '' : 'text-opacity-90 '}
        group inline-flex items-center rounded-md px-3 text-gray-700 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-none focus-visible:ring-opacity-75`}
            >
              <div className='w-8 h-8 rounded-full flex justify-center items-center'>
                <BellIcon className='w-6 h-6 text-neutral-0' />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute bg-neutral-100 right-0 z-10 mt-3 w-56 border-[1px] border-neutral-300 rounded-md p-4 max-w-sm transform sm:p-4 lg:max-w-3xl'>
                {notifications?.metadata?.map((child) => {
                  switch (child.type) {
                    case 'ORDER_SHOP': {
                      return (
                        <Link
                          to={`me/orders`}
                          className={`bg-green-200 h-14 w-full flex items-center py-1 mt-1 rounded-md px-4 hover:bg-neutral-200 hover:cursor-pointer transition`}
                          key={child._id}
                          target='_blank'
                        >
                          <div className='flex w-full gap-4'>
                            <div className='flex-1'>
                              <div className='flex items-center justify-between'>
                                <div className='font-semibold text-neutral-700 line-clamp-1 flex-1'>
                                  {child?.senderId?.name}
                                </div>
                                <div className='text-xs text-neutral-500'>
                                  {moment(child?.createdAt).format('HH:MM')}
                                </div>
                              </div>
                              <div className='text-sm text-neutral-400 line-clamp-1'>{child?.message}</div>
                            </div>
                          </div>
                        </Link>
                      )
                    }
                    case 'ORDER_CUSTOMER': {
                      return (
                        <Link
                          to={`/shop/order/${child._id}`}
                          className={`bg-orange-200 h-14 w-full flex items-center py-1 mt-1 rounded-md px-4 hover:bg-neutral-200 hover:cursor-pointer transition`}
                          key={child._id}
                          target='_blank'
                        >
                          <div className='flex w-full gap-4'>
                            <div className='flex-1'>
                              <div className='flex items-center justify-between'>
                                <div className='font-semibold text-neutral-700 line-clamp-1 flex-1'>
                                  {child?.senderId?.name}
                                </div>
                                <div className='text-xs text-neutral-500'>
                                  {moment(child?.createdAt).format('HH:MM')}
                                </div>
                              </div>
                              <div className='text-sm text-neutral-400 line-clamp-1'>{child?.message}</div>
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  }
                })}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default Notification
