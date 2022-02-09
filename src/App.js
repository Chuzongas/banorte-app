import React from 'react';

import 'remixicon/fonts/remixicon.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home/home';
import Navbar from './components/helpers/Navbar';
import Formulario from './components/campos/Formulario';
import Cotizador from './components/cotizador/cotizador';


const App = () => {


	return (
		<Routes>
			<Route
				path="/"
				element={<Navigate to="/home" />}
			/>
			<Route path="/home" element={
				<>
					<Navbar />
					<Home />
				</>
			} />
			<Route path="/formulario" element={
				<>
					<Navbar phone={false} />
					<Formulario />
				</>
			} />
			<Route path="/cotizador" element={
				<>
					<Navbar phone={true} />
					<Cotizador />
				</>
			} />
		</Routes>
	);
}

export default App;