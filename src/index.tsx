import ReactDOM from 'react-dom/client';
import App from './app.tsx';

const container = document.getElementById('app');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
