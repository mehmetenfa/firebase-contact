import Form from './components/Form'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <div className='mx-auto max-w-screen-lg'>
        <div className='h-screen flex flex-col justify-between items-center'>
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
