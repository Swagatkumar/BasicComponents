import './App.css';
import accounts from './data/accounts.json'
import Select from './components/Select/'

const selectStyle = {
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
  singleValue: base => ({
    ...base,
    fontWeight: 500,
    padding: "10px"
  })
}

const style = {
  width:"550px",
  marginLeft:"30%",
  marginTop:"20%",
}
function App() {
  return (
    <Select accounts={accounts} style={style} customStyle={selectStyle} placeholder="Choose an account..." />
  );
}

export default App;
