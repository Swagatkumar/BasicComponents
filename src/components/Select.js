import React, { useState } from 'react'
import Select from 'react-select'
import { Flex, Image } from 'rebass'
import tick from './green-tick.png'

function SelectComp({accounts,style,customStyle,placeholder}) {

    const [options, setOptions] = useState(accounts.map(account=>({
        value: account,
        label: `${account.sortCode} ${account.accountNumber} ${account.accountType} ${account.accountName}`
    })))

    const changeHandler = (e) => {
        setOptions(options.map(option=>{
            const label = `${option.value.sortCode} ${option.value.accountNumber} ${option.value.accountType} ${option.value.accountName}`
            return {value: option.value,
            label: option.label===e.label?<Flex justifyContent='space-between' alignItems='center'>{label}<Image src={tick} sx={{
                height: "20px"
            }} /></Flex>:label}
        }))
    }

    return (
        <div style={style}>
            <Select styles={customStyle} options={options} placeholder={placeholder}
            components={{
                SingleValue:({data})=><SelectedValue data={data} style={customStyle.singleValue()} />
            }}
            onChange={e=>{changeHandler(e)}} />
        </div>
    )
}

SelectComp.defaultProps = {
    customStyle: {
        option: (styles, { isFocused, isSelected }) => {
            return {
              ...styles,
              backgroundColor: isSelected?'#99ccff':isFocused ? '#cce6ff':null,
              color: isSelected && 'black',
              ':active': {
                ...styles[':active'],
                backgroundColor: null,
              },
            }
        },
        singleValue: base => ({
            ...base,
            padding: '10px'
        })
    },
    style: {
        width: "550px"
    },
}

function SelectedValue({data,style}){
    const {sortCode,accountName,accountType,accountNumber} = data.value
    return (
        <div style={style}>
            {sortCode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{accountNumber}<br/>
            {`${accountType} - ${accountName}`}
        </div>
    )
}

export default SelectComp
