import React, {ChangeEvent} from 'react'
import {Box, Slider} from '@mui/material';






type SuperDoubleRangePropsType = {
    handleChange2?: (event: Event,
                     newValue: number | number[],
                     activeThumb: number,) => void
    value2?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        handleChange2, value2,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

        return (
         <>
             <Box
                   sx={{width: 300}}>
                <Slider
                    value={value2}
                    onChange={handleChange2}


                    valueLabelDisplay="on"
                    // min={0}
                    // max={100}
                />
             </Box>
                {/* uncontrolled: */}

           </>
        );
    }












export default SuperDoubleRange
