import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';
import DataProvider from './Context/DataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
      </DataProvider>
    </div>
  );
}

export default App;
