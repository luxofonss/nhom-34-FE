/* eslint-disable react-hooks/exhaustive-deps */
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BellIcon } from '@heroicons/react/20/solid'
import customerApi from '../../../../containers/app/feature/Customer/customer.service'

function Notification() {
  // const msg = [
  //   {
  //     type: 'Shop',
  //     from: 'Shop A',
  //     message: 'message',
  //     time: 'time',
  //     id: 'id',
  //     isViewed: true
  //   },
  //   {
  //     type: 'Customer',
  //     from: 'Shop A',
  //     message: 'message',
  //     time: 'time',
  //     id: 'id',
  //     isViewed: false
  //   }
  // ]
  const [getNotification, { data: notifications }] = customerApi.endpoints.getNotification.useLazyQuery()
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
                          key={child.id + child.message}
                          className='p-2 bg-neutral-200 mb-2 rounded-sm'
                          to={`order/${child.id}`}
                        >
                          <div className='flex justify-between'>
                            <div className='flex gap-2'>
                              <div className='bg-orange-500 italic'>{child.senderId}</div>
                            </div>
                            <div>{child.createdAt}</div>
                            <div>{child.isViewed ? 'viewed' : 'not viewed'}</div>
                          </div>
                          <div>{child.message}</div>
                        </Link>
                      )
                    }
                    case 'ORDER_CUSTOMER': {
                      return (
                        <Link
                          key={child.id + child.message}
                          className='p-2 bg-neutral-200 mb-2 rounded-sm'
                          to={`order/${child.id}`}
                        >
                          <div className='flex justify-between'>
                            <div className='flex gap-2'>
                              <div className='bg-orange-500 italic'>{child.senderId}</div>
                            </div>
                            <div>{child.isViewed ? 'viewed' : 'not viewed'}</div>
                          </div>
                          <div>{child.message}</div>
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
