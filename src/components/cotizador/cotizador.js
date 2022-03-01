import React, { Fragment, useEffect, useState } from 'react';
import { proxy } from '../helpers/Proxy';
import axios from 'axios'
import Popup from '../tools/Popup';
import { localStorageDatosOperacion } from '../helpers/Variables';

const Cotizador = () => {


	let cantidadMax = 2000000
	let cantidadMin = 200000

	const [valorFactura, setValorFactura] = useState('$200,000');

	// TRIGGERS
	const [showTabla, setShowTabla] = useState(false);
	const [tablaData, setTablaData] = useState([]);
	const [plazo, setPlazo] = useState();

	useEffect(() => {
		if (showTabla === true) {

			let letPlazo


			if (tipoCredito.toString() === "2") {
				letPlazo = 12
			} else if (tipoCredito.toString() === "1") {
				if (selectedCard.toString() === "1") letPlazo = 18
				else if (selectedCard.toString() === "2") letPlazo = 24
				else if (selectedCard.toString() === "3") letPlazo = 36
				else if (selectedCard.toString() === "4") letPlazo = 48
				else if (selectedCard.toString() === "5") letPlazo = 60
			}

			setPlazo(letPlazo)

			var config = {
				method: 'post',
				url: `${proxy}/banortepyme/rest/obtenerTablaAmortizacion?plazo=${letPlazo}&monto=${parseInt(valorFactura.split('$')[1].replace(/,/g, ""))}`,
				headers: {
					// 'Cookie': 'banorteAuto=9kVRFc23oI4pPE4HAFJsY5In.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
				}
			};

			axios(config)
				.then(function (response) {
					// console.log(JSON.stringify(response.data));
					// console.log(response.data)
					setTablaData(response.data.resumenSimulacion)
				})
				.catch(function (error) {
					console.log(error);
				});

		}
	}, [showTabla])

	// AXIOS
	const [axiosData, setAxiosData] = useState();

	// INPUTS
	const [tipoCredito, setTipoCredito] = useState('')
	const [tipoTasa, setTipoTasa] = useState('')
	const [destinoCredito, setDestinoCredito] = useState('')

	// CARDS SELECTED
	const [selectedCard, setSelectedCard] = useState('');

	useEffect(() => {
		if (selectedCard !== "" && showTabla === false) {
			let letPlazo


			if (tipoCredito.toString() === "2") {
				letPlazo = 12
			} else if (tipoCredito.toString() === "1") {
				if (selectedCard.toString() === "1") letPlazo = 18
				else if (selectedCard.toString() === "2") letPlazo = 24
				else if (selectedCard.toString() === "3") letPlazo = 36
				else if (selectedCard.toString() === "4") letPlazo = 48
				else if (selectedCard.toString() === "5") letPlazo = 60
			}

			setPlazo(letPlazo)
		}
	}, [selectedCard])

	const handlePesos = (e, handleChange) => {

		let { value } = e.target;

		if (value) {
			value = (Number(value.replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',');
			handleChange(value);
		} else {
			handleChange("");
		}

		value = "$" + value
		handleChange(value)
	}

	const handlePesosReturn = (value) => {

		if (value) {
			value = (Number(value.replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',');
			return value
		} else {
			return ""
		}

		value = "$" + value
		return value
	}

	const handleRangeBar = (value, handleChange) => {

		if (value.toString() === "0") {
			handleChange('$200000')
			return
		}

		value = "$" + value

		if (value) {
			value = (Number(value.replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',');
			handleChange(value);
		} else {
			handleChange("$0");
		}

		value = "$" + value
		handleChange(value)
	}

	useEffect(() => {
		axios.get(`${proxy}/banortepyme/rest/consultaCatalogos/catalogosDatosOperacion`)
			.then(res => {
				console.log(res.data)
				setAxiosData(res.data)
			})
	}, [])

	const siguiente = () => {
		if (selectedCard === '') return

		let data = {
			numeroSucursal: 2, //DEFAULT
			tipoDestinoCreditoId: destinoCredito,
			montoCreditoFloat: valorFactura.split("$")[1] + ".00",
			tipoGarantiId: 1, //DEFAULT
			plazo: plazo,
			tipoTasaId: tipoTasa,
			tipoOperacionId: 1, //DEFAULT
			tipoProgramaId: 2, //DEFAULT
			tipoDeCreditoId: tipoCredito,
			tasaAnual: 15.2, //DEFAULT
			iva: 0.16, //DEFAULT
			relacionPrimerGrado: false, //DEFAULT
			diferimiento: false, //DEFAULT
		}

		console.log(data)
		// return

		var config = {
			method: 'post',
			url: `${proxy}/banortepyme/rest/salvarDatosDeOperacion?numeroSucursal=${data.numeroSucursal}&tipoDestinoCreditoId=${data.tipoDestinoCreditoId}&montoCreditoFloat=${data.montoCreditoFloat}&tipoGarantiId=${data.tipoGarantiId}&plazo=${data.plazo}&tipoTasaId=${data.tipoTasaId}&tipoOperacionId=${data.tipoOperacionId}&tipoProgramaId=${data.tipoProgramaId}&tipoDeCreditoId=${data.tipoDeCreditoId}&tasaAnual=${data.tasaAnual}&iva=${data.iva}&relacionPrimerGrado=${data.relacionPrimerGrado}&diferimiento=${data.diferimiento}`,
			headers: {
				// 'Cookie': 'banorteAuto=GgHFpmoUfhMbtPXymBraVfiH.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
			}
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				if (response.data.success === true) {
					localStorage.setItem(localStorageDatosOperacion, response.data.datosDeOperacionId)
					window.location.replace('/formulario')
				}
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	return (
		<>

			<Popup show={showTabla}>
				<div className='bgc-gray-opacity' style={{ height: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>
					<div className='my-shadow radius bgc-white black' style={{ padding: '24px', width: '80vw', maxWidth: '1300px', minWidth: '700px', zIndex: '2', maxHeight: '90vh', overflowY: 'scroll', overflowX: 'visible' }}>
						<h1>Tabla de amortización</h1>
						<hr />
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">Periodo</th>
									<th scope="col">Saldo capital</th>
									<th scope="col">Intereses</th>
									<th scope="col">Capital</th>
									<th scope="col">Iva</th>
									<th scope="col">Pago total</th>
								</tr>
							</thead>
							<tbody>
								{
									tablaData.map((item, i) => {
										return (
											<Fragment key={i}>
												<tr>
													<td>{item.periodo}</td>
													<td>{item.saldoCap}</td>
													<td>{item.intereses}</td>
													<td>{item.capital}</td>
													<td>{item.iva}</td>
													<td>{item.pagoTotal}</td>
												</tr>
											</Fragment>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
				<div onClick={() => setShowTabla(false)} style={{ top: '0', position: 'absolute', height: '100vh', width: '100%', zIndex: '1' }} />
			</Popup>

			<div className="top-formulario white" >
				<h1>Tu crédito</h1>
			</div>
			<h2 className='text-center mt-3'>Monto del crédito</h2>
			<form onSubmit={(e) => { e.preventDefault(); siguiente() }}>
				<div className="container">
					<div style={{ maxWidth: '800px', margin: '0px auto', padding: '24px', backgroundColor: 'var(--yellow-white)', border: '1px solid var(--gray-color)' }}>
						<div className="row">
							<div className="col-12 col-md-6 mx-auto">
								<div style={{ display: 'flex', marginBottom: '16px' }}>
									<div className='bgc-white' style={{ border: '1px solid var(--gray-color-2)', borderRight: '0px', display: 'grid', placeContent: 'center', height: '50px' }}>
										<i className="ri-money-dollar-circle-line color-gray-2" style={{ fontSize: '32px', margin: '0px 4px' }}></i>
									</div>
									<input onChange={(e) => handlePesos(e, setValorFactura)} value={valorFactura} type="text" className='big-input color-red' style={{ borderRight: '0px', fontWeight: 'bold', width: '100%', height: '50px' }} />
									<div className='bgc-white' style={{ border: '1px solid var(--gray-color-2)', display: 'grid', placeContent: 'center', padding: '0px 8px', height: '50px' }}>
										<p style={{ marginBottom: '0px' }}>MXN</p>
									</div>
								</div>
							</div>
							<input onChange={(e) => handleRangeBar(cantidadMin + (18000 * (Math.round(parseInt(e.target.value)) === 99 ? 100 : Math.round(parseInt(e.target.value)))), setValorFactura)} value={(parseInt(valorFactura.split('$')[1].replace(/,/g, "")) - cantidadMin) / 18000} type="range" className="form-range range" id="customRange1" style={{ padding: '0px 8px' }}></input>
							<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px' }}>
								<span>$200,000.00</span>
								<span>$2,000,000.00</span>
							</div>
							<div className="row">
								<div className="col-12 col-md-6">
									<h3 style={{ margin: '0px' }}>Tipo de crédito</h3>
								</div>
								<div className="col-12 col-md-6" style={{ marginBottom: '24px' }}>
									<div style={{ display: 'flex', flexFlow: 'row', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<select value={tipoCredito} onChange={(e) => setTipoCredito(e.target.value)} required style={{ width: '100%' }}>
											<option value="">Seleccione opción</option>
											{
												axiosData !== undefined &&
												axiosData.tipoCredito.map(item => {
													return (
														<option key={item.id} value={item.id}>{item.nombre}</option>
													)
												})
											}
										</select>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<h3 style={{ margin: '0px' }}>Tipo de tasa</h3>
								</div>
								<div className="col-12 col-md-6" style={{ marginBottom: '24px' }}>
									<div style={{ display: 'flex', flexFlow: 'row', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<select value={tipoTasa} onChange={(e) => setTipoTasa(e.target.value)} required style={{ width: '100%' }}>
											<option value="">Seleccione opción</option>
											{
												axiosData !== undefined &&
												axiosData.tipoTasa.map(item => {
													return (
														<option key={item.id} value={item.id}>{item.nombre}</option>
													)
												})
											}
										</select>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<h3 style={{ margin: '0px' }}>Destino del crédito</h3>
								</div>
								<div className="col-12 col-md-6" style={{ marginBottom: '24px' }}>
									<div style={{ display: 'flex', flexFlow: 'row', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<select value={destinoCredito} onChange={(e) => setDestinoCredito(e.target.value)} required style={{ width: '100%' }}>
											<option value="">Seleccione opción</option>
											{
												axiosData !== undefined &&
												axiosData.destinoCredito.map(item => {
													return (
														<option key={item.id} value={item.id}>{item.nombre}</option>
													)
												})
											}
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{
					tipoCredito !== '' &&

						tipoCredito === "2" ?
						<>
							<h2 className='text-center mt-4'>Seleccione una opción</h2>
							<div className="container">
								<div className={`border-red ${selectedCard === '1' && 'bgc-red'}`} style={{ maxWidth: '800px', margin: '0px auto', display: 'flex', justifyContent: 'space-evenly', padding: '8px', marginBottom: '24px' }}>
									<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
										<h3 className={`${selectedCard === '1' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>12</h3>
										<span style={{wordBreak:'keep-all'}}>Meses</span>
									</div>
									<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
										<h3 className={`${selectedCard === '1' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>{"$" + handlePesosReturn((parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 12).toString().split('.')[0]) + '.' + (parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 12).toFixed(2).toString().split('.')[1]}</h3>
										<span>/ mensualidad - CAT 21%</span>
									</div>
									<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
										<button type="button" onClick={() => setSelectedCard('1')} className='bgc-red'>SELECCIONAR</button>
										<span onClick={() => { setSelectedCard('1'); setShowTabla(true) }} className="pointer" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}>
											<i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>
											Tabla de amortización
										</span>
									</div>
								</div>
							</div>
						</>
						: tipoCredito === "1" ?
							<>
								<h2 className='text-center mt-4'>Seleccione una opción</h2>
								<div className="container">
									<div className={`border-red ${selectedCard === '1' && 'bgc-red'}`} style={{ maxWidth: '800px', margin: '0px auto', display: 'flex', justifyContent: 'space-evenly', padding: '8px', marginBottom: '24px' }}>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '1' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>18</h3>
											<span style={{wordBreak:'keep-all'}}>Meses</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '1' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>{"$" + handlePesosReturn((parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 18).toString().split('.')[0]) + '.' + (parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 18).toFixed(2).toString().split('.')[1]}</h3>
											<span>/ mensualidad - CAT 21%</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<button type="button" onClick={() => setSelectedCard('1')} className='bgc-red'>SELECCIONAR</button>
											<span onClick={() => { setSelectedCard('1'); setShowTabla(true) }} className="pointer" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}>
												<i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>
												Tabla de amortización
											</span>
										</div>
									</div>
									<div className={`border-red ${selectedCard === '2' && 'bgc-red'}`} style={{ maxWidth: '800px', margin: '0px auto', display: 'flex', justifyContent: 'space-evenly', padding: '8px', marginBottom: '24px' }}>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '2' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>24</h3>
											<span style={{wordBreak:'keep-all'}}>Meses</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '2' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>{"$" + handlePesosReturn((parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 24).toString().split('.')[0]) + '.' + (parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 24).toFixed(2).toString().split('.')[1]}</h3>
											<span>/ mensualidad - CAT 21%</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<button type="button" onClick={() => setSelectedCard('2')} className='bgc-red'>SELECCIONAR</button>
											<span onClick={() => { setSelectedCard('2'); setShowTabla(true) }} className="pointer" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}>
												<i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>
												Tabla de amortización
											</span>
										</div>
									</div>
									<div className={`border-red ${selectedCard === '3' && 'bgc-red'}`} style={{ maxWidth: '800px', margin: '0px auto', display: 'flex', justifyContent: 'space-evenly', padding: '8px', marginBottom: '24px' }}>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '3' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>36</h3>
											<span style={{wordBreak:'keep-all'}}>Meses</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '3' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>{"$" + handlePesosReturn((parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 36).toString().split('.')[0]) + '.' + (parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 36).toFixed(2).toString().split('.')[1]}</h3>
											<span>/ mensualidad - CAT 21%</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<button type="button" onClick={() => setSelectedCard('3')} className='bgc-red'>SELECCIONAR</button>
											<span onClick={() => { setSelectedCard('3'); setShowTabla(true) }} className="pointer" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}>
												<i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>
												Tabla de amortización
											</span>
										</div>
									</div>
									<div className={`border-red ${selectedCard === '4' && 'bgc-red'}`} style={{ maxWidth: '800px', margin: '0px auto', display: 'flex', justifyContent: 'space-evenly', padding: '8px', marginBottom: '24px' }}>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '4' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>48</h3>
											<span style={{wordBreak:'keep-all'}}>Meses</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '4' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>{"$" + handlePesosReturn((parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 48).toString().split('.')[0]) + '.' + (parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 48).toFixed(2).toString().split('.')[1]}</h3>
											<span>/ mensualidad - CAT 21%</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<button type="button" onClick={() => setSelectedCard('4')} className='bgc-red'>SELECCIONAR</button>
											<span onClick={() => { setSelectedCard('4'); setShowTabla(true) }} className="pointer" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}>
												<i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>
												Tabla de amortización
											</span>
										</div>
									</div>
									<div className={`border-red ${selectedCard === '5' && 'bgc-red'}`} style={{ maxWidth: '800px', margin: '0px auto', display: 'flex', justifyContent: 'space-evenly', padding: '8px', marginBottom: '24px' }}>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '5' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>60</h3>
											<span style={{wordBreak:'keep-all'}}>Meses</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<h3 className={`${selectedCard === '5' ? 'white' : 'color-red'}`} style={{ fontWeight: 'bold' }}>{"$" + handlePesosReturn((parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 60).toString().split('.')[0]) + '.' + (parseInt(valorFactura.split('$')[1].replace(/,/g, "")) / 60).toFixed(2).toString().split('.')[1]}</h3>
											<span>/ mensualidad - CAT 21%</span>
										</div>
										<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
											<button type="button" onClick={() => setSelectedCard('5')} className='bgc-red'>SELECCIONAR</button>
											<span onClick={() => { setSelectedCard('5'); setShowTabla(true) }} className="pointer" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}>
												<i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>
												Tabla de amortización
											</span>
										</div>
									</div>
								</div>
							</>
							: ''
				}
				<div className="container" style={{ maxWidth: '800px' }}>
					<div style={{ width: "100%", marginBottom: '12px' }}>
						<span style={{ display: 'flex', alignItems: 'center' }}><input required style={{ display: 'inline-block', marginRight: '8px' }} type="checkbox" id="aviso" /><label htmlFor="aviso">Acepto recibir publicidad de productos y servicios de Banorte</label></span>
					</div>
					<div style={{ width: "100%", marginBottom: '12px' }}>
						<p>Costo del seguro a 12 meses por incluyente indemnizacion valor factura por 2 años. Reparación de agencia y auto sustituto. El seguro de vida cotizado aplica para una edad entre 19 y 70 años</p>
					</div>
					<div style={{ width: '100%' }}>
						<button style={{ width: '100%' }} type='submit' className='bgc-red'>Siguiente</button>
					</div>
				</div>

			</form>
		</>
	);
}

export default Cotizador;