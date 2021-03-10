import React, { useState } from 'react'
import Select from 'react-select'
import { Flex, Image, Text } from 'rebass'
import styled from 'styled-components'
import tick from './green-tick.png'

const MarginedSpan = styled.span`
margin-left: 30px
`
    
function SelectComp({accounts,style,customStyle,placeholder}) {

    //fetching options
    const optionList = accounts!==undefined?accounts.map((account,i)=>{
        const { sortCode, accountNumber, accountType, accountName } = account
        const label = `${sortCode} ${accountNumber} ${accountType} ${accountName}`
        return {
            value: account,
            label: i===0?<Flex justifyContent='space-between' alignItems='center'>{label}<Image src={tick} sx={{
                height: "20px"
            }} /></Flex>:label
        }
    }):[]

    //creating options state
    const [options, setOptions] = useState(optionList)

    // handling onChange event of the react-select
    const changeHandler = (e) => {

        //setting the options state (selected option will have a tick)
        setOptions(options.map(option=>{
            if(option.value!==undefined){
                const { sortCode, accountNumber, accountType, accountName } = option.value
                const label = `${sortCode} ${accountNumber} ${accountType} ${accountName}`
                return {value: option.value,
                label: option.label===e.label?<Flex justifyContent='space-between' alignItems='center'>{label}<Image src={tick} sx={{
                    height: "20px"
                }} /></Flex>:label}
            }
            return option
        }))
    }

    return (
        <div style={style}>
            <Select styles={customStyle} options={options} placeholder={placeholder} defaultValue={options.length>=1&&options[0]}
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
            <Text>{sortCode}<MarginedSpan>{accountNumber}</MarginedSpan></Text>
            <Text>{accountType} - {accountName}</Text>
        </div>
    )
}

export default SelectComp
