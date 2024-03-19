import React from 'react'
import {Menu,User,Upload,Bell,Hammer,Search} from 'lucide-react'
export const PageHeader = () => {
  return (
    <div className='flex gap-10 my-2 flex-grow:1 bg-red-50 lg:gap:20'>

        <div className='flex gap-4 flex-grow:1 w-svw  items-center justify-between '>
            <div className='flex  md:gap-4 sm:gap-3'>
                <div className='mt-1'>
                <Menu />
                </div>
                <div className='text-sky-500 bg-clip-text text-lg font-bold mt-1'>Youtue</div>
      </div>
            <div>
<fromm>
    <input name='search' type='text' className='rounded-full p-1' placeholder='search'></input>
        <Search></Search>
</fromm>

            </div>
            

            <div className='flex gap-1 '>
            <button className='hover:scale-150 hover:bg-pink-500 '>
                <User/>
            </button>
            <button>
                <Upload/>
            </button> 
            <Bell/>
            <button>
           
            </button> <button>
                <Hammer/>
            </button>
            </div>
        </div>
        </div>
  )
}
