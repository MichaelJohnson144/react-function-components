import ReactDOM from 'react-dom/client';
import { createElement } from 'react';

import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const index = () => {
  return <App />;
};

export default index;

const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);
root.render(createElement(App));

/* If you want to start measuring performance in your app,
 pass a function to log results (for example, `reportWebVitals(console.log)`)
 or send them to an analytics endpoint.
 You can learn more here: "https://bit.ly/CRA-vitals" */
reportWebVitals()
  .then(() => {})
  .catch(() => {});
