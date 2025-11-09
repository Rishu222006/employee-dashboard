import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <div className='bg-[#1C1C1C] mt-7 rounded p-6'>
                <form className='flex flex-wrap w-full items-center justify-between'>
                    <div className='w-1/2 space-y-3.5'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input type="text" placeholder='Make a UI design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date </h3>
                            <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input type="text" placeholder='employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input type="text" placeholder='design, dev, etc.' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea placeholder='Enter task Description...' className='w-4/5 h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-4/5'>Create Task</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default CreateTask
