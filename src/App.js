import { useState } from 'react'
import './App.css';
import SingleWine from './SingleWine'

function App() {
  const [data, setData] = useState([{}])


  const getWine = () => {
    fetch('https://api.sampleapis.com/wines/reds')
      .then(responce => responce.json())
      .then(data => setData(data))
      .catch((err) => { console.error(err) })
  }

  return (
    <div className="App">
      <main>
        <h1>Wines By Sample API</h1>
        <button onClick={() => getWine()}> Get Me Wine</button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
            return <SingleWine entireObject={item} />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
