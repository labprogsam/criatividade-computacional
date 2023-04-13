import logo from './logo.svg';
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
