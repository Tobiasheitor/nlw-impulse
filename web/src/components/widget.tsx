import { ChatTeardropDots} from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './widgetForm';

export function Widget() {
    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm></WidgetForm>
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6 text-white'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-lg transition-all duration-700 ease-linear'>Feedback</span>
            </Popover.Button>
        </Popover>
    )
}