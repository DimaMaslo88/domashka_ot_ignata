import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    let minNum = 0
    let maxNum = 100
    const [value1, setValue1] = useState<number | number[]>(0)
    const [value2, setValue2] = useState<any>([minNum, maxNum])


    const rangeValue1 = (value: number | number[]) => {

        setValue1(value)
        setValue2([value, value2[1]])

    }
    const disabled = () => {

    }
    // const [valueDouble, setValueDouble] = React.useState<number[]>([value1, value2])
    //
    // const rangeValue2 = (value: number[]) => {
    //     setValueDouble(value)
    //     setValue1(value[0])
    //     setValue2(value[1])
    // }
    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }


        setValue2(newValue)
        setValue1(newValue[0])
    };
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={rangeValue1}
                    value1={value1}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value2[0]}</span>
                <SuperDoubleRange
                    value2={value2}
                    handleChange2={handleChange2}
                    // сделать так чтоб value1 и value2 изменялось
                />

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
