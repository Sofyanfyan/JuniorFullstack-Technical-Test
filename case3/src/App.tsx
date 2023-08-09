// import React from 'react';
// import logo from './logo.svg';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import MenuComponent from './components/MenuComponent';
import OrderComponent from './components/OrderComponent';
import { Provider } from 'react-redux';
import store from './stores';
import './App.css';


function App() {
   return (
   <Provider store={store}>

      <html lang="en">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />

         <title>CornDog</title>
      </head>
      <body>
         <NavbarComponent/>
         <CarouselComponent/>
         <MenuComponent/>
         <OrderComponent/>
      </body>
      </html>
   </Provider>
   );
}

export default App;
