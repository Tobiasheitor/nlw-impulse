import { ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';

export function Widget() {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

    function toggleFeedBackVisibility() {
        setIsFeedbackOpen(!isFeedbackOpen);
    }

    return (
        <div className='absolute bottom-5 right-5'>
            { isFeedbackOpen && <p>Hello world</p>}
            
            <button onClick={toggleFeedBackVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6 text-white'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-lg transition-all duration-700 ease-linear'>Feedback</span>
            </button>
        </div>
    )
}