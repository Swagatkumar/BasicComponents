import './App.css';
import accounts from './data/accounts.json'
import SelectComp from './components/Select';

function App() {
  return (
    <SelectComp accounts={accounts} style={{width:"450px",marginLeft:"30%",marginTop:"20%"}} />
  );
}

export default App;
