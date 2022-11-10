import './css/volt.css';
import 'bytemd/dist/index.css'
import './css/app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')
})

export default app
