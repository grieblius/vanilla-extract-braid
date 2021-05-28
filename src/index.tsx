import 'braid-design-system/reset'; // <-- Must be first
import { render } from 'react-dom';
// import './global.css';
import { App } from './App';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);

console.log('aaaa');
