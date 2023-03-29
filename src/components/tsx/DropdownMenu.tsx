import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { HOMEPAGE_URL } from '../../config'
import DropdownMenuItem from './DropdownMenuItem'
import MenuButton from './MenuButton'

const DropdownMenu = () => {
	return (
		<Menu as='div' className='inlline-block text-left'>
			<div>
				<MenuButton>
					<IoMenu className='h-5 w-5' />
				</MenuButton>
			</div>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transforom opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute top-0 left-0 h-full w-full'>
					<div className='py-1'>
						<div className='px-3 py-2 uppercase font-bold text-3xl flex flex-col h-screen items-center justify-center gap-12 bg-gradient-to-br from-indigo-200 to-indigo-100 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-pink-900 overflow-hidden'>
							<DropdownMenuItem href='/'>Home</DropdownMenuItem>
							<DropdownMenuItem href='/about'>About me</DropdownMenuItem>
							<DropdownMenuItem href='/projects'>Projects</DropdownMenuItem>
							<DropdownMenuItem href='/contacts'>Contacts</DropdownMenuItem>
							<DropdownMenuItem href={HOMEPAGE_URL}>GitHub</DropdownMenuItem>
							<MenuButton>
								<IoClose className='h-5 w-5' />
							</MenuButton>
						</div>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default DropdownMenu
