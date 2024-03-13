import React from 'react';
import ReactDOM from 'react-dom/client';
import App,  {Mycomponent}  from './App';

const root = ReactDOM.createRoot(                                          //crea il nodo root rappresentato dal DIV
  document.getElementById('root') as HTMLElement
);

// root.render(<App />);
//root.render(<Mycomponent />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App, {}from './App';// import delle function
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />); //quale function usare