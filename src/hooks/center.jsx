import Head from './headtext'
import Shape from './shapes'
import Effect from './effect'
import Color from './color'
import Next from './next'
import { useState } from 'react'


export default  function Center() {
  
  return (
    <div className='body'>
      <Head/>
    <div className='Center'>
  <Shape/>  
   <Effect/>
   <Color/>
    </div>
    <Next/>
    </div>
  )
}


