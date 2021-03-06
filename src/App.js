import './App.css';
import accounts from './data/accounts.json'
import SelectComp from './components/Select';

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
  width:"450px",
  marginLeft:"30%",
  marginTop:"20%",
}
function App() {
  return (
    <SelectComp accounts={accounts} style={style} placeholder="Choose an account..." />
  );
}

export default App;
