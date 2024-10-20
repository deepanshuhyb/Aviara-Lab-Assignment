import React from 'react'

function footer() {
  return (
    <div className='h-16 text-slate-400 bg-zinc-900 flex justify-between items-center px-4'>
      <p>
        Made by Deepanshu.
      </p>
      <div className='flex items-center text-xs gap-3 px-32'>
        <p><a href="https://github.com/deepanshuhyb" target='_blank'>Github</a></p>
        <p><a href="" target='_blank'>LinkedIn</a></p>
        <p><a href="https://leetcode.com/u/deepanshuhyb/" target='_blank'>Leetcode</a></p>

      </div>

    </div>
  )
}

export default footer