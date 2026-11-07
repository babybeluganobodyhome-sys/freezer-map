import {createRoot} from 'react-dom/client';
import App,{Boundary} from './App';
import './index.css';
createRoot(document.getElementById('root')).render(<Boundary><App/></Boundary>);
