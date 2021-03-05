import React, { useState } from 'react'
import Select from 'react-select'
import { Flex, Image } from 'rebass'
import tick from './green-tick.png'

function SelectComp({accounts,style,customStyle}) {

    const [selectedOption, setSelectedOption] = useState()
    const [options, setOptions] = useState(accounts.map(account=>({
        value: account,
        label: `${account.sortCode} ${account.accountNumber} ${account.accountType} ${account.accountName}`
    })))

    const changeHandler = (e) => {
        setSelectedOption({
            label: <SelectedOption account={e.value} />,
            value: e.value
        })
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
            <Select styles={customStyle} options={options} onChange={e=>{changeHandler(e)}} value={selectedOption} />
        </div>
    )
}

SelectComp.defaultProps = {
    customStyle: {
        option: (styles, { isFocused, isSelected }) => {
            return {
              ...styles,
              backgroundColor: isSelected ? '#FFFF66' : isFocused ? '#FFFFCC':null,
              color: isSelected && 'black',
              ':active': {
                ...styles[':active'],
                backgroundColor: null,
              },
            }
        },
        valueContainer: base => ({
            ...base,
            height: 70,
            minHeight: 70,
        }),
        singleValue: base => ({
            ...base,
            fontWeight: 500
        })
    },
    style: {
        width: "550px"
    }
}

function SelectedOption({account}){
    return (
        <>
            <div>{account.sortCode} &nbsp;&nbsp;&nbsp;&nbsp;{account.accountNumber}</div>
            <div>{account.accountType} - {account.accountName}</div>
        </>
    )
}

export default SelectComp
