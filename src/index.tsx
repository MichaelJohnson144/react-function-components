import ReactDOM from 'react-dom/client';

import './index.css';
import { worker } from './mocks/browser';
import App from './app/App';

worker.start();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
