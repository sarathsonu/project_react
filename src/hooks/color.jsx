import { useState } from 'react'


function Color() {

  cost [color,setColor]=useState('')

  return (
    <div class="thirdbox">
    <h1 class="Color">Color</h1>
    <div class="Colorbox">
        <div class="what">
            <label class="lab_button">Button</label>
            <h2 className='colorText'>{color}</h2>
        <div class="color-picker">
          <input type="color" name="color" class="colorpicker" id="color_1" value="#FFFFFF" onChange={(e)=>setColor(e.target.value) }/>
        </div>
        </div>

        <div class="what1">
            <label class="lab_Text">Text</label>
      
        <div class="color-picker">
          <input type="color" name="color" class="colorpicker" id="color_1" value=" #000000"  />
        </div>
        </div>

        <div class="what2">
            <label class="lab_Shadow">Shadow</label>
            {/* <input type="text" id="color_1_val" class="hex" /> */}
        <div class="color-picker">
          <input type="color" name="color" class="colorpicker" id="color_1" value="#6A1ACF"  />
        </div>
        </div>

</div>
</div>

  )
}
export default Color; 