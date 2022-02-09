import React, { useEffect, useRef, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import PhoneInput from 'react-phone-input-2'

const SectionOne = () => {

	// PAHSE
	const [phase, setPhase] = useState(0);

	const [steps, setSteps] = useState(0);

	// TOGGLES
	const [clienteBanorte, setClienteBanorte] = useState(true);
	const [regimenFiscal, setRegimenFiscal] = useState(false);
	const [tienesChequesBanorte, setTienesChequesBanorte] = useState(false);

	// MAIN DATA
	const [nombre, setNombre] = useState("");

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

	var inputOneRef = useRef()
	var inputTwoRef = useRef()
	var inputThreeRef = useRef()
	var inputFourRef = useRef()

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

	const nextOne = () => {

		if (nombre === "1") {
			// FINAL PAGE
			setSteps(3)
			return
		}

		setSteps(1)
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

	return (
		<>
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
								<div className="section-one-dinamic" style={{ width: '75%' }}>
									<div className='bgc-red' style={{ height: '5px' }} />
									{
										steps === 0 &&

										<div className='bgc-white' style={{ padding: '24px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
											<h1 className='text-center' style={{ marginBottom: '24px' }}>¿Eres cliente Banorte?</h1>
											<div style={{ width: '100%', display: 'flex', marginBottom: '24px' }}>
												<button className={`${clienteBanorte === true && 'bgc-red'}`} onClick={() => setClienteBanorte(true)} style={{ width: '50%', fontSize: '24px' }}>Si</button>
												<button className={`${clienteBanorte === false && 'bgc-red'}`} onClick={() => setClienteBanorte(false)} style={{ width: '50%', fontSize: '24px' }}>No</button>
											</div>
											<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Nombre completo</span>
												<input value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ width: '75%', maxHeight: '46px' }} type="text" />
											</div>
											<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>RFC</span>
												<input style={{ width: '75%', maxHeight: '46px' }} type="text" />
											</div>
											{
												clienteBanorte === true &&
												<>
													<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
														<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Número de cliente Banorte</span>
														<input style={{ width: '75%', maxHeight: '46px' }} type="text" />
													</div>
													<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
														<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Código de campaña</span>
														<input style={{ width: '75%', maxHeight: '46px' }} type="text" />
													</div>
												</>
											}
											{
												clienteBanorte === false &&
												<div style={{ width: '100%', display: 'flex', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Regimen fiscal</span>
													<button className={`${regimenFiscal === true && 'bgc-red'} selection-button`} onClick={() => setRegimenFiscal(true)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>Persona moral</button>
													<button className={`${regimenFiscal === false && 'bgc-red'} selection-button`} onClick={() => setRegimenFiscal(false)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>Persona fisica con actividad empresarial</button>
												</div>
											}
											<div style={{ width: '100%' }}>
												<button style={{ width: '100%' }} onClick={nextOne} className='bgc-red'>Siguiente</button>
											</div>
										</div>
									}
									{
										steps === 1 &&
										<div className='bgc-white' style={{ padding: '24px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
											<h1 className='text-center' style={{ marginBottom: '24px' }}>Información de empresa</h1>
											{
												regimenFiscal === false &&
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>CURP</span>
													<input style={{ width: '75%', maxHeight: '46px' }} type="text" />
												</div>
											}
											<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Sector de tu negocio</span>
												<select style={{ width: '75%', maxHeight: '46px', height: '46px' }}>
													<option value="value">value</option>
													<option value="value">value</option>
													<option value="value">value</option>
													<option value="value">value</option>
												</select>
											</div >
											<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center' }}>¿Para qué es el crédito?</span>
												<select style={{ width: '75%', maxHeight: '46px', height: '46px' }}>
													<option value="value">value</option>
													<option value="value">value</option>
													<option value="value">value</option>
													<option value="value">value</option>
												</select>
											</div >
											<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center' }}>Años de tu negocio</span>
												<select style={{ width: '75%', maxHeight: '46px', height: '46px' }}>
													<option value="value">value</option>
													<option value="value">value</option>
													<option value="value">value</option>
													<option value="value">value</option>
												</select>
											</div >
											<div style={{ width: '100%', display: 'flex', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>¿Tu negocio cuenta con cheques Banorte?</span>
												<button className={`${tienesChequesBanorte === true && 'bgc-red'} selection-button`} onClick={() => setTienesChequesBanorte(true)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>Si</button>
												<button className={`${tienesChequesBanorte === false && 'bgc-red'} selection-button`} onClick={() => setTienesChequesBanorte(false)} style={{ width: 'calc(75% / 2)', fontSize: '16px' }}>No</button>
											</div>
											{
												tienesChequesBanorte === true &&
												<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
													<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Cheque Banorte</span>
													<input style={{ width: '75%', maxHeight: '46px' }} type="text" />
												</div>
											}
											<div style={{ width: "100%", marginBottom: '12px' }}>
												<span style={{ float: 'left', marginLeft: '25%' }}><input style={{ display: 'inline-block', marginRight: '8px' }} type="checkbox" /><a href="#">Aviso de privacidad</a></span>
											</div>
											<div style={{ width: '100%' }}>
												<button onClick={() => setSteps(2)} style={{ width: '100%' }} className='bgc-red'>Siguiente</button>
											</div>
										</div >
									}
									{
										steps === 2 &&
										<div className='bgc-white' style={{ padding: '24px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
											<h1 className='text-center' style={{ marginBottom: '24px' }}>Validación de datos</h1>
											<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Nombre completo</span>
												<div className='phone-div' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '75%' }}>
													<PhoneInput
														country={'mx'}
													/>
												</div>
											</div>
											<div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
												<span style={{ width: '25%', alignSelf: 'center', paddingRight: '4px' }}>Email</span>
												<div className='no-wrap' style={{ width: '75%', display: 'flex' }}>
													<div className='bgc-gray' style={{ height: '100%', padding: '0px 12px', display: 'grid', placeContent: 'center' }}>
														<i style={{ fontSize: '24px' }} className="ri-mail-fill color-gray-2"></i>
													</div>
													<input style={{ width: 'calc(100%)', maxHeight: '46px' }} type="email" />
												</div>
											</div>
											<h3>Código SMS</h3>
											<p>Te acabamos de enviar un código de verificación por SMS</p>
											<div className='no-wrap' style={{ width: "100%", display: 'flex', justifyContent: 'center', gap: '12px', padding: '12px 0px' }}>
												<input type="text" maxLength={1} ref={inputOneRef} onKeyDown={(e) => deleteCharacter(e, null)} onChange={(e) => checkInputValid(e.target.value, setInputOne, inputTwoRef)} value={inputOne} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
												<input type="text" maxLength={1} ref={inputTwoRef} onKeyDown={(e) => deleteCharacter(e, inputOneRef)} onChange={(e) => checkInputValid(e.target.value, setInputTwo, inputThreeRef)} value={inputTwo} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
												<input type="text" maxLength={1} ref={inputThreeRef} onKeyDown={(e) => deleteCharacter(e, inputTwoRef)} onChange={(e) => checkInputValid(e.target.value, setInputThree, inputFourRef)} value={inputThree} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
												<input type="text" maxLength={1} ref={inputFourRef} onKeyDown={(e) => deleteCharacter(e, inputThreeRef)} onChange={(e) => checkInputValid(e.target.value, setInputFour, null)} value={inputFour} style={{ width: '48px', fontSize: '24px', textAlign: 'center' }} />
											</div>
											<p style={{ marginBottom: '4px' }}><a href="#">No he recibido mi código</a></p>
											<div style={{ width: '100%' }}>
												<button onClick={() => setSteps(2)} style={{ width: '100%' }} className='bgc-red'>Siguiente</button>
											</div>
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
														<input type="text" value={(Number(ofertas[selectedOferta].monto.toString().replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',')} readOnly className='big-input color-red' style={{ borderRight: '0px', fontWeight: 'bold', width: '100%' }} />
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