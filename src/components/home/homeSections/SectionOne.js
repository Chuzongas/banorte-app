import React, { useEffect, useRef, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import PhoneInput from 'react-phone-input-2'
import axios from 'axios'
import { proxy } from '../../helpers/Proxy'
import { localStorageAutoServicio } from '../../helpers/Variables'
import Popup from '../../tools/Popup';

const SectionOne = () => {

	// CODIGO
	const [codigoEnviado, setCodigoEnviado] = useState(false);
	const [numeroTelefono, setNumeroTelefono] = useState('');

	// MAIN DATA
	const [nombre, setNombre] = useState("");
	const [apellidoPaterno, setApellidoPaterno] = useState("");
	const [apellidoMaterno, setApellidoMaterno] = useState("");
	const [razonSocial, setRazonSocial] = useState("");
	const [rfc, setRfc] = useState("");
	const [numeroClienteBanorte, setNumeroClienteBanorte] = useState("");
	const [codigoCampana, setCodigoCampana] = useState("");
	const [curp, setCurp] = useState("");
	const [sectorNegocio, setSectorNegocio] = useState("");
	const [paraQueCredito, setParaQueCredito] = useState("");
	const [aniosTuNegocio, setAniosTuNegocio] = useState("");
	const [chequeBanorte, setChequeBanorte] = useState("");
	const [email, setEmail] = useState("");



	// POPUP
	const [popupRfcOcupado, setPopupRfcOcupado] = useState(false);
	const [popupRfcData, setPopupRfcData] = useState({ informacionDeSolicitudEnTramite: '' });

	// AXIOS VARIABLES
	const [sid, setSid] = useState('');
	const [aniosNegocio, setAniosNegocio] = useState();
	const [tipoMotivoCredito, setTipoMotivoCredito] = useState();
	const [sector, setSector] = useState();

	// GET SECTOR DATA
	useEffect(() => {
		axios.get(`${proxy}/banortepyme/rest/consultaCatalogos/sector`)
			.then(res => {
				// setGeneralAxiosData(res.data)
				setSector(res.data)
			})

		axios.get(`${proxy}/banortepyme/rest/consultaCatalogos/tipoMotivosCredito`)
			.then(res => {
				setTipoMotivoCredito(res.data)
			})

		axios.get(`${proxy}/banortepyme/rest/consultaCatalogos/aniosNegocio`)
			.then(res => {
				setAniosNegocio(res.data)
			})

	}, [])

	// PAHSE
	const [phase, setPhase] = useState(0);

	const [steps, setSteps] = useState(0);

	// TOGGLES
	const [clienteBanorte, setClienteBanorte] = useState(true);
	const [regimenFiscal, setRegimenFiscal] = useState(false);
	const [tienesChequesBanorte, setTienesChequesBanorte] = useState(false);

	// HTTP
	const [selectedOferta, setSelectedOferta] = useState(0);
	const [ofertas, setOfertas] = useState([
		{
			monto: 120000,
			plazo: 12,
			pagoMensual: 10000,
			cat: 18
		},
		{
			monto: 3200000,
			plazo: 32,
			pagoMensual: 100000,
			cat: 20
		}
	]);

	// PHONE CHECKER INPUTS
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputThree, setInputThree] = useState("");
	const [inputFour, setInputFour] = useState("");
	const [inputFive, setInputFive] = useState("");

	var inputOneRef = useRef()
	var inputTwoRef = useRef()
	var inputThreeRef = useRef()
	var inputFourRef = useRef()
	var inputFiveRef = useRef()

	useEffect(() => {
		if (phase === 0) setEnterPhaseOne(true)
		else setEnterPhaseOne(false)

		if (phase === 1) setSecondPhaseTrigger(true)
		else setSecondPhaseTrigger(false)

	}, [phase])

	const [enterPhaseOne, setEnterPhaseOne] = useState(true);
	const entrerTransition = useTransition(enterPhaseOne, {
		config: {
			tension: 210,
			friction: 20
		},
		from: { opacity: 0, display: 'flex', alignItems: 'flex-start', height: '100%', flexFlow: 'column', justifyContent: 'center', transform: 'translateX(-400px)', position: 'absolute' },
		enter: { opacity: 1, display: 'flex', alignItems: 'flex-start', height: '100%', flexFlow: 'column', justifyContent: 'center', transform: 'translateX(0px)', position: 'relative', top: '0px' },
		leave: { opacity: 0, display: 'flex', alignItems: 'flex-start', height: '100%', flexFlow: 'column', justifyContent: 'center', transform: 'translateX(400px)', position: 'absolute', top: '0px' },
	})

	const [secondPhaseTrigger, setSecondPhaseTrigger] = useState(false);
	const phaseTwoTransition = useTransition(secondPhaseTrigger, {
		config: {
			tension: 210,
			friction: 20
		},
		from: { opacity: 0, display: 'flex', height: '100%', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', transform: 'translateX(-400px)', position: 'absolute' },
		enter: { opacity: 1, display: 'flex', height: '100%', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', transform: 'translateX(0px)', position: 'relative', top: '0px' },
		leave: { opacity: 0, display: 'flex', height: '100%', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', transform: 'translateX(400px)', position: 'absolute', top: '0px' },
	})

	const checkInputValid = (newValue, handle, nextElement) => {


		if (newValue === "") {
			handle(newValue)
			return
		}

		const patern = /^[0-9]$/;

		if (patern.test(newValue)) {
			handle(newValue)
			if (nextElement === null) return
			nextElement.current.focus()
		}
	}

	const deleteCharacter = (e, inputBack) => {

		if (e.keyCode === 8) {
			if (e.target.value === "") {
				if (inputBack === null) return
				inputBack.current.focus()
			}
		}
	}

	const enviarCodigo = () => {

		if (numeroTelefono.length !== 10) return

		let telefono = numeroTelefono[0] + numeroTelefono[1] + numeroTelefono[2] + " " + numeroTelefono[3] + numeroTelefono[4] + numeroTelefono[5] + " " + numeroTelefono[6] + numeroTelefono[7] + numeroTelefono[8] + numeroTelefono[9]

		var config = {
			method: 'post',
			url: `${proxy}/banortepyme/rest/enviarMensajeCodigo?telefonoCelular=${numeroTelefono}`,
			headers: {
				// 'Cookie': 'banorteAuto=C-7AZv+HA6S9caq2O4XN78oe.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
			}
		};

		console.log(config)


		axios(config)
			.then(function (response) {

				console.log(response.data)


				if (response.data.mensajeEnviado === true) {
					setSid(response.data.sid)
					setCodigoEnviado(true)
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	const nextOne = (e) => {

		e.preventDefault()

		var data = JSON.stringify({
			"tipoDeSolicitante": regimenFiscal === true ? 2 : 1,
			"tipoDeParticipanteId": "1",
			"rfc": rfc
		});

		var config = {
			method: 'post',
			url: `${proxy}/banortepyme/rest/validarRfcSolicitantePorSolicitud`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: data
		};


		axios(config)
			.then(function (response) {

				if (response.data.success === true) {
					if (nombre === "1") {
						// FINAL PAGE
						setSteps(3)
						return
					}

					setSteps(1)
				} else {
					setPopupRfcOcupado(true)
					setPopupRfcData(response.data)
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	const handleChangeOferta = (side) => {
		// RIGHT
		if (side === true) {
			if (selectedOferta + 2 <= ofertas.length) {
				setSelectedOferta(selectedOferta + 1)
			}
		} else {
			if (selectedOferta - 1 >= 0) {
				setSelectedOferta(selectedOferta - 1)
			}
		}
	}

	const verificarCodigoSMS = () => {

		let codigo = inputOneRef.current.value + inputTwoRef.current.value + inputThreeRef.current.value + inputFourRef.current.value + inputFiveRef.current.value

		var data = '';

		var config = {
			method: 'post',
			url: `${proxy}/banortepyme/rest/validarCodigo?codigoConfirmacion=${codigo}&sid=${sid}`,
			headers: {
				// 'Cookie': 'banorteAuto=C-7AZv+HA6S9caq2O4XN78oe.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
			},
			data: data
		};

		axios(config)
			.then(function (response) {

				console.log(response.data)

				if (response.data.resultado === true) {
					guardarDatosTemporalesAutoServicio()
				}
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	const guardarDatosTemporalesAutoServicio = () => {

		// IF TRUE  === PM
		if (regimenFiscal === true) {
			// PM

			let data = {
				idSector: sectorNegocio,
				idAnioNegocio: aniosTuNegocio,
				idTipoMotivoCredito: paraQueCredito,
				idTipoPersona: 2, //PM
				idTipoDeParticipante: 1, //DEFAULT
				razonSocial: razonSocial,
				rfc: rfc,
				cuentaCheques: tienesChequesBanorte,
				numeroCuentaCheques: chequeBanorte,
				clienteBanorte: clienteBanorte,
				razonSocial: razonSocial,
			}


			var config = {
				method: 'post',
				url: `${proxy}/banortepyme/rest/salvarClienteAutoservicio?idSector=${data.idSector}&idAnioNegocio=${data.idAnioNegocio}&idTipoMotivoCredito=${data.idTipoMotivoCredito}&idTipoPersona=${data.idTipoPersona}&idTipoDeParticipante=${data.idTipoDeParticipante}&razonSocial=${data.razonSocial}&rfc=${data.rfc}&cuentaCheques=${data.cuentaCheques}&numeroCuentaCheques=${data.numeroCuentaCheques}&clienteBanorte=${data.clienteBanorte}&razonSocial=${data.razonSocial}`,
				headers: {
					// 'Cookie': 'banorteAuto=RWWyXFWdN4XqwIs+RU6tZq2p.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
				}
			};

			console.log(config)

			axios(config)
				.then(function (response) {
					console.log(JSON.stringify(response.data));

					if (response.data.success === true) {
						localStorage.setItem(localStorageAutoServicio, response.data.idDatosTemporalesAutoservicio)
						window.location.replace("/cotizador")
					}

				})
				.catch(function (error) {
					console.log(error);
				});

		} else {
			// PFAE

			let data = {
				idSector: sectorNegocio,
				idAnioNegocio: aniosTuNegocio,
				idTipoMotivoCredito: paraQueCredito,
				idTipoPersona: 1, //PFAE
				idTipoDeParticipante: 1, //DEFAULT
				razonSocial: razonSocial,
				rfc: rfc,
				cuentaCheques: tienesChequesBanorte,
				numeroCuentaCheques: chequeBanorte,
				clienteBanorte: clienteBanorte,
				razonSocial: razonSocial,
			}

			var config = {
				method: 'post',
				url: `${proxy}/banortepyme/rest/salvarClienteAutoservicio?idSector=${data.idSector}&idAnioNegocio=${data.idAnioNegocio}&idTipoMotivoCredito=${data.idTipoMotivoCredito}&idTipoPersona=${data.idTipoPersona}&idTipoDeParticipante=${data.idTipoDeParticipante}&razonSocial=${data.razonSocial}&rfc=${data.rfc}&cuentaCheques=${data.cuentaCheques}&numeroCuentaCheques=${data.numeroCuentaCheques}&clienteBanorte=${data.clienteBanorte}&razonSocial=${data.razonSocial}`,
				headers: {
					// 'Cookie': 'banorteAuto=RWWyXFWdN4XqwIs+RU6tZq2p.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
				}
			};

			axios(config)
				.then(function (response) {
					console.log(JSON.stringify(response.data));

					if (response.data.success === true) {
						localStorage.setItem(localStorageAutoServicio, response.data.idDatosTemporalesAutoservicio)
						window.location.replace("/cotizador")
					}

				})
				.catch(function (error) {
					console.log(error);
				});


		}
	}

	const handleAPYAM = (value, handler) => {
		let newValue = value
		newValue = newValue.replace(/[0-9]/g, '');
		console.log(newValue)
		handler(newValue)
	}

	return (
		<>

			<Popup show={popupRfcOcupado}>
				<div className='bgc-gray-opacity' style={{ height: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>
					<div className='my-shadow radius bgc-white black' style={{ padding: '24px', width: '80vw', maxWidth: '1300px', minWidth: '700px', zIndex: '2' }}>
						<h1>Información de solicitud</h1>
						<hr />
						<h3>Ya existe una solicitud en trámite para este cliente</h3>
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">UQR</th>
									<th scope="col">Estatus</th>
									<th scope="col">Fecha</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{popupRfcData.informacionDeSolicitudEnTramite.registradaPor}</td>
									<td>{popupRfcData.informacionDeSolicitudEnTramite.statusDeSolicitud}</td>
									<td>{popupRfcData.informacionDeSolicitudEnTramite.fechaActualizacion}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div onClick={() => setPopupRfcOcupado(false)} style={{ top: '0', position: 'absolute', height: '100vh', width: '100%', zIndex: '1' }} />
			</Popup>


			<div className="container" style={{ height: '100%' }}>
				<div style={{ width: '100%', position: 'relative', height: '100%' }}>
					{
						entrerTransition((style, visible) =>
							visible &&
							<animated.div style={style}>
								<h1><b>En Banorte te apoyamos</b> <br /> para construir un mejor futuro</h1>
								<h4 style={{ marginTop: '24px' }}>Impulsamos tus proyectos para lograr éxito <br />en tu negocio con financiamiento a empresas</h4>
								<button onClick={() => setPhase(1)} className='bgc-red' style={{ marginTop: '24px' }}>Solicita tu crédito ahora</button>
							</animated.div>
						)
					}
					{
						phaseTwoTransition((style, visible) =>
							visible &&
							<animated.div style={style}>
								<div className="section-one-dinamic" style={{ width: '75%', position: 'relative' }}>
									<div className='bgc-red' style={{ height: '5px', width: `${((steps + 1) / 3) * 100}%`, transition:'all 1s ease' }} />
									<div className='bgc-white' style={{ height: '5px', width: '100%', position: 'absolute', zIndex: '-1', top: '0px' }} />
									{
										steps === 0 &&

										<div className='bgc-white' style={{ padding: '24px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
											<form onSubmit={(e) => nextOne(e)} style={{ width: '100%' }}>
												<h1 className='text-center' style={{ marginBottom: '24px' }}>¿Eres cliente Banorte?</h1>
												<div style={{ width: '100%', display: 'flex', marginBottom: '24px' }}>
													<button type='button' className={`${clienteBanorte === true && 'bgc-red'}`} onClick={() => setClienteBanorte(true)} style={{ width: '50%', fontSize: '24px' }}>Si</button>
													<button type='button' className={`${clienteBanorte === false && 'bgc-red'}`} onClick={() => setClienteBanorte(false)} style={{ width: '50%', fontSize: '24px' }}>No</button>
												</div>
												{
													clienteBanorte === false &&
													<div style={{ width: '100%', display: 'flex', marginBottom: '24px' }}>
														<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Regimen fiscal</span>
														<button type='button' className={`${regimenFiscal === true && 'bgc-red'} selection-button`} onClick={() => setRegimenFiscal(true)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>Persona moral</button>
														<button type='button' className={`${regimenFiscal === false && 'bgc-red'} selection-button`} onClick={() => setRegimenFiscal(false)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>Persona fisica con actividad empresarial</button>
													</div>
												}
												{
													regimenFiscal === false && clienteBanorte === false ?
														<>
															<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
																<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Nombre</span>
																<input required value={nombre} onChange={(e) => handleAPYAM(e.target.value, setNombre)} style={{ width: '75%', maxHeight: '46px' }} type="text" />
															</div>
															<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
																<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Apellido paterno</span>
																<input required value={apellidoPaterno} onChange={(e) => handleAPYAM(e.target.value, setApellidoPaterno)} style={{ width: '75%', maxHeight: '46px' }} type="text" />
															</div>
															<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
																<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Apellido materno</span>
																<input required value={apellidoMaterno} onChange={(e) => handleAPYAM(e.target.value, setApellidoMaterno)} style={{ width: '75%', maxHeight: '46px' }} type="text" />
															</div>
														</>
														:
														<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
															<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Razón social</span>
															<input required value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)} style={{ width: '75%', maxHeight: '46px' }} type="text" />
														</div>
												}
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>RFC</span>
													<input value={rfc} onChange={(e) => setRfc(e.target.value)} maxLength={regimenFiscal === true ? 12 : 13} minLength={regimenFiscal === true ? 12 : 13} required style={{ width: '75%', maxHeight: '46px' }} type="text" />
												</div>
												{
													clienteBanorte === true &&
													<>
														<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
															<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Número de cliente Banorte</span>
															<input value={numeroClienteBanorte} onChange={(e) => setNumeroClienteBanorte(e.target.value)} required style={{ width: '75%', maxHeight: '46px' }} type="text" />
														</div>
														<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
															<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Código de campaña</span>
															<input value={codigoCampana} onChange={(e) => setCodigoCampana(e.target.value)} required style={{ width: '75%', maxHeight: '46px' }} type="text" />
														</div>
													</>
												}
												<div style={{ width: '100%' }}>
													<button style={{ width: '100%' }} type='submit' className='bgc-red'>Siguiente</button>
												</div>

											</form>
										</div>
									}
									{
										steps === 1 &&
										<div className='bgc-white' style={{ padding: '24px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
											<form onSubmit={(e) => { setSteps(2); e.preventDefault() }} style={{ width: '100%' }}>
												<h1 className='text-center' style={{ marginBottom: '24px' }}>Información de empresa</h1>
												{
													regimenFiscal === false &&
													<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
														<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>CURP</span>
														<input value={curp} onChange={(e) => setCurp(e.target.value)} maxLength={18} minLength={18} required style={{ width: '75%', maxHeight: '46px' }} type="text" />
													</div>
												}
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Sector de tu negocio</span>
													<select value={sectorNegocio} onChange={(e) => setSectorNegocio(e.target.value)} required style={{ width: '75%', maxHeight: '46px', height: '46px' }}>
														<option value="">Seleccione una opción</option>
														{
															sector.map(item => {
																return (
																	<option key={item.id} value={item.id}>{item.nombre}</option>
																)
															})
														}
													</select>
												</div >
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center' }}>¿Para qué es el crédito?</span>
													<select value={paraQueCredito} onChange={(e) => setParaQueCredito(e.target.value)} required style={{ width: '75%', maxHeight: '46px', height: '46px' }}>
														<option value="">Seleccione una opción</option>
														{
															tipoMotivoCredito.map(item => {
																return (
																	<option key={item.id} value={item.id}>{item.nombre}</option>
																)
															})
														}
													</select>
												</div >
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center' }}>Años de tu negocio</span>
													<select value={aniosTuNegocio} onChange={(e) => setAniosTuNegocio(e.target.value)} required style={{ width: '75%', maxHeight: '46px', height: '46px' }}>
														<option value="">Seleccione una opción</option>
														{
															aniosNegocio.map(item => {
																return (
																	<option key={item.id} value={item.id}>{item.nombre}</option>
																)
															})
														}
													</select>
												</div >
												<div style={{ width: '100%', display: 'flex', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>¿Tu negocio cuenta con cheques Banorte?</span>
													<button type="button" className={`${tienesChequesBanorte === true && 'bgc-red'} selection-button`} onClick={() => setTienesChequesBanorte(true)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>Si</button>
													<button type="button" className={`${tienesChequesBanorte === false && 'bgc-red'} selection-button`} onClick={() => setTienesChequesBanorte(false)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>No</button>
												</div>
												{
													tienesChequesBanorte === true &&
													<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
														<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Cheque Banorte</span>
														<input value={chequeBanorte} onChange={(e) => setChequeBanorte(e.target.value)} required style={{ width: '75%', maxHeight: '46px' }} type="text" />
													</div>
												}
												<div style={{ width: "100%", marginBottom: '12px' }}>
													<span style={{ float: 'left', marginLeft: '25%', display: 'flex', alignItems: 'center' }}><input required style={{ display: 'inline-block', marginRight: '8px' }} type="checkbox" /><a href="#">Acepto el aviso de privacidad</a></span>
												</div>
												<div style={{ width: '100%' }}>
													<button type='submit' style={{ width: '100%' }} className='bgc-red'>Siguiente</button>
												</div>

											</form>
										</div >
									}
									{
										steps === 2 &&
										<div className='bgc-white' style={{ padding: '24px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
											<form onSubmit={(e) => { enviarCodigo(); e.preventDefault() }} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

												<h1 className='text-center' style={{ marginBottom: '24px' }}>Validación de datos</h1>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Número celular</span>
													<div className='no-wrap' style={{ width: '75%', display: 'flex' }}>
														<input value={numeroTelefono} onChange={(e) => setNumeroTelefono(e.target.value)} required style={{ width: 'calc(100%)', maxHeight: '46px' }} type="tel" />
													</div>
												</div>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Email</span>
													<div className='no-wrap' style={{ width: '75%', display: 'flex' }}>
														<div className='bgc-gray' style={{ height: '100%', padding: '0px 12px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '24px' }} className="ri-mail-fill color-gray-2"></i>
														</div>
														<input value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: 'calc(100%)', maxHeight: '46px' }} type="email" />
													</div>
												</div>
												<button type="submit" style={{ marginBottom: '24px' }}>Enviar codigo</button>
												<h3>Código SMS</h3>
												{
													codigoEnviado === true &&
													<p>Te acabamos de enviar un código de verificación por SMS</p>
												}
												<div className='no-wrap' style={{ width: "100%", display: 'flex', justifyContent: 'center', gap: '12px', padding: '12px 0px' }}>
													<input type="text" maxLength={1} ref={inputOneRef} onKeyDown={(e) => deleteCharacter(e, null)} onChange={(e) => checkInputValid(e.target.value, setInputOne, inputTwoRef)} value={inputOne} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
													<input type="text" maxLength={1} ref={inputTwoRef} onKeyDown={(e) => deleteCharacter(e, inputOneRef)} onChange={(e) => checkInputValid(e.target.value, setInputTwo, inputThreeRef)} value={inputTwo} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
													<input type="text" maxLength={1} ref={inputThreeRef} onKeyDown={(e) => deleteCharacter(e, inputTwoRef)} onChange={(e) => checkInputValid(e.target.value, setInputThree, inputFourRef)} value={inputThree} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
													<input type="text" maxLength={1} ref={inputFourRef} onKeyDown={(e) => deleteCharacter(e, inputThreeRef)} onChange={(e) => checkInputValid(e.target.value, setInputFour, inputFiveRef)} value={inputFour} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
													<input type="text" maxLength={1} ref={inputFiveRef} onKeyDown={(e) => deleteCharacter(e, inputFourRef)} onChange={(e) => checkInputValid(e.target.value, setInputFive, null)} value={inputFive} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
												</div>
												<p style={{ marginBottom: '4px' }}><a href="#">No he recibido mi código</a></p>
												<div style={{ width: '100%' }}>
													<button type="button" onClick={() => verificarCodigoSMS()} style={{ width: '100%' }} className='bgc-red'>Siguiente</button>
												</div>
											</form>
										</div>
									}
									{
										steps === 3 &&
										<div className='bgc-white' style={{ padding: '24px', display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
											<div style={{ width: '10%', display: 'grid', placeContent: 'center' }}>
												<i onClick={() => handleChangeOferta(false)} style={{ fontSize: '38px' }} className="ri-arrow-left-s-line pointer"></i>
											</div>
											<div style={{ width: '80%' }}>
												<h1 className='text-center' style={{ marginBottom: '24px' }}>¡Tenemos ofertas para ti!</h1>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '50%', alignSelf: 'center', paddingRight: '4px', fontSize: '28px' }}>Monto del crédito</span>
													<div className='no-wrap' style={{ display: 'flex', marginBottom: '16px', width: '50%' }}>
														<div className='border-gray bgc-white' style={{ borderRight: '0px', display: 'grid', placeContent: 'center' }}>
															<i className="ri-money-dollar-circle-line color-gray-2" style={{ fontSize: '32px', margin: '0px 4px' }}></i>
														</div>
														<input type="text" value={(Number(ofertas[selectedOferta].monto.toString().replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',')} readOnly className='big-input color-red' style={{ height: '50px', borderRight: '0px', fontWeight: 'bold', width: '100%' }} />
														<div className='border-gray bgc-white' style={{ borderLeft: '0px', display: 'grid', placeContent: 'center', padding: '0px 8px' }}>
															<p style={{ marginBottom: '0px' }}>MXN</p>
														</div>
													</div>
												</div>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '50%', alignSelf: 'center', paddingRight: '4px', fontSize: '28px' }}>Plazo</span>
													<div className="section-one-dinamic-width-100" style={{ display: 'flex', marginBottom: '16px', width: '50%' }}>
														<input type="text" value={ofertas[selectedOferta].plazo + " meses"} readOnly className='big-input color-red' style={{ fontWeight: 'bold', width: '100%' }} />
													</div>
												</div>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '50%', alignSelf: 'center', paddingRight: '4px', fontSize: '28px' }}>Pago mensual</span>
													<div className="section-one-dinamic-width-100" style={{ display: 'flex', marginBottom: '16px', width: '50%' }}>
														<input type="text" value={"$ " + (Number(ofertas[selectedOferta].pagoMensual.toString().replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',')} readOnly className='big-input color-red' style={{ fontWeight: 'bold', width: '100%' }} />
													</div>
												</div>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '50%', alignSelf: 'center', paddingRight: '4px', fontSize: '28px' }}>Cat</span>
													<span className="color-red" style={{ fontSize: '28px', width: '50%' }}>{ofertas[selectedOferta].cat + "%"}</span>
												</div>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '50%', alignSelf: 'center', paddingRight: '4px', fontSize: '16px' }}>Oferta {selectedOferta + 1}/{ofertas.length}</span>
												</div>
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span onClick={() => setSteps(1)} className="color-gray-2p pointer" style={{ width: '100%', alignSelf: 'center', paddingRight: '4px', fontSize: '18px', textDecoration: 'underline' }}>No quiero ninguna de estas ofertas</span>
												</div>
												<div style={{ width: '100%' }}>
													<button onClick={() => setSteps(3)} style={{ width: '100%' }} className='bgc-red'>Tomar esta oferta</button>
												</div>
											</div>
											<div style={{ width: '10%', display: 'grid', placeContent: 'center' }}>
												<i onClick={() => handleChangeOferta(true)} style={{ fontSize: '38px' }} className="ri-arrow-right-s-line pointer"></i>
											</div>
										</div>
									}
								</div >
							</animated.div >

						)
					}
				</div >
			</div >

		</>
	);
}

export default SectionOne;