import logo from './logo.svg';
import './App.css';
import TableView from './TableView';
import { jsonData } from './data';

function App() {
  return (
    <div>
      <h1>Table View</h1>
      <TableView jsonData={jsonData} />
    </div>
  );
}

export default App;
