import React, { useEffect, useRef, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import CreateObligadoSolidario from './components/CreateObligadoSolidario';
import FormularioPersonaMoral from './components/FormularioPersonaMoral';

import axios from 'axios'
import { proxy } from '../helpers/Proxy'

const Formulario = () => {


	// AXIOS DATA
	const [axiosData, setAxiosData] = useState();
	const [aniosSector, setAniosSector] = useState();

	// REQUEST
	useEffect(() => {
		axios.get(`${proxy}/banortepyme/rest/consultaCatalogos/catalogosPersonales`)
			.then(res => {
				console.log(res.data)
				setAxiosData(res.data)
			})

		axios.get(`${proxy}/banortepyme/rest/consultaCatalogos/aniosNegocio`)
			.then(res => {
				console.log(res.data)
				setAniosSector(res.data)
			})
	}, [])


	// BANCOS MAIN DATA
	const [bancoOne, setBancoOne] = useState({
		banco: '',
		mesUno: {
			mes: 1,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesDos: {
			mes: 2,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesTres: {
			mes: 3,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesCuatro: {
			mes: 4,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesCinco: {
			mes: 5,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesSeis: {
			mes: 6,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		}
	});
	const [bancoTwo, setBancoTwo] = useState({
		banco: '',
		mesUno: {
			mes: 1,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesDos: {
			mes: 2,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesTres: {
			mes: 3,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesCuatro: {
			mes: 4,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesCinco: {
			mes: 5,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesSeis: {
			mes: 6,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		}
	});
	const [bancoThree, setBancoThree] = useState({
		banco: '',
		mesUno: {
			mes: 1,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesDos: {
			mes: 2,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesTres: {
			mes: 3,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesCuatro: {
			mes: 4,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesCinco: {
			mes: 5,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		},
		mesSeis: {
			mes: 6,
			value: '',
			fields:
			{
				saldoPromedio: '',
				saldoInicial: '',
				totalRetiros: '',
				totalDepositos: ''
			}
		}
	});

	const modifyBancoOne = (mes, key, value) => {

		let letBancoOne = bancoOne;

		if (mes === "banco") {
			letBancoOne.banco = value
			setBancoOne({ ...letBancoOne })
			return;
		}

		letBancoOne[mes].fields[key] = value
		setBancoOne({ ...letBancoOne })
		return;
	}
	const modifyBancoTwo = (mes, key, value) => {

		let letBancoTwo = bancoTwo;

		if (mes === "banco") {
			letBancoTwo.banco = value
			setBancoTwo({ ...letBancoTwo })
			return;
		}

		letBancoTwo[mes].fields[key] = value
		setBancoTwo({ ...letBancoTwo })
		return;
	}
	const modifyBancoThree = (mes, key, value) => {

		let letBancoThree = bancoThree;

		if (mes === "banco") {
			letBancoThree.banco = value
			setBancoThree({ ...letBancoThree })
			return;
		}

		letBancoThree[mes].fields[key] = value
		setBancoThree({ ...letBancoThree })
		return;
	}

	const [tipoPersona, setTipoPersona] = useState();

	// REFS
	var refScrollUp = useRef()

	var refScrollUpBancos = useRef()

	var animatedHeightBoxUnoRef = useRef()
	var animatedHeightBoxDosRef = useRef()
	var animatedHeightBoxTresRef = useRef()

	// SCROLLPOSITION
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollPosition(window.scrollY)
		})

		return () => {
			window.removeEventListener("scroll", () => {
				setScrollPosition(window.scrollY)
			});
		};
	}, [])

	// SECCION HANDLERS
	const [seccion, setSeccion] = useState(0);

	const [importeRenta, setImporteRenta] = useState('$');
	const [importeRentaFiscal, setImporteRentaFiscal] = useState('$');
	const [totalNominaMensual, setTotalNominaMensual] = useState('$');
	const [ventasAnuales, setVentasAnuales] = useState('$');

	// DATOS ECONOMICOS
	const [cantidadBancos, setCantidadBancos] = useState(1);
	const [selectedBanco, setSelectedBanco] = useState(1);

	// TRANSITION TOGGLE
	const [transitionZeroToggle, setTransitionZeroToggle] = useState(true)
	const [transitionOneToggle, setTransitionOneToggle] = useState(true)
	const [transitionTwoToggle, setTransitionTwoToggle] = useState(false)
	const [transitionThreeToggle, setTransitionThreeToggle] = useState(false)
	const [transitionFourToggle, setTransitionFourToggle] = useState(false)
	const [transitionFiveToggle, setTransitionFiveToggle] = useState(false)
	const [transitionSixToggle, setTransitionSixToggle] = useState(false)
	const [transitionSevenToggle, setTransitionSevenToggle] = useState(false)
	const [transitionEightToggle, setTransitionEightToggle] = useState(false)
	const [transitionNineToggle, setTransitionNineToggle] = useState(false)
	const [transitionTenToggle, setTransitionTenToggle] = useState(false)
	const [transitionElevenToggle, setTransitionElevenToggle] = useState(false)
	const [transitionTwelveToggle, setTransitionTwelveToggle] = useState(false)
	const [transitionThirteenToggle, setTransitionThirteenToggle] = useState(false)
	const [transitionFourtheenToggle, setTransitionFourtheenToggle] = useState(false)
	const [transitionFivetheenToggle, setTransitionFivetheenToggle] = useState(false)

	// OBLIGADOSSOLIDARIOS
	const [primerObligadoSolidario, setPrimerObligadoSolidario] = useState('');
	const [segundoObligadoSolidario, setSegundoObligadoSolidario] = useState('');
	const [tercerObligadoSolidario, setTercerObligadoSolidario] = useState('');
	const [cuartoObligadoSolidario, setCuartoObligadoSolidario] = useState('');
	const [quintoObligadoSolidario, setQuintoObligadoSolidario] = useState('');


	const [movingBack, setMovingBack] = useState(false);

	// BANCOS TRANSITION TOGGLE
	const [transitionBancoOneToggle, setTransitionBancoOneToggle] = useState(true)
	const [transitionBancoTwoToggle, setTransitionBancoTwoToggle] = useState(false)
	const [transitionBancoThreeToggle, setTransitionBancoThreeToggle] = useState(false)

	const handleAddBancos = (operation) => {
		if (operation === true) {
			if (cantidadBancos <= 2 && cantidadBancos >= 1) {
				setSelectedBanco(1)
				setCantidadBancos(cantidadBancos + 1)
			}
		} else {
			if (cantidadBancos >= 2 && cantidadBancos <= 3) {
				setSelectedBanco(1)
				setCantidadBancos(cantidadBancos - 1)
			}
		}
	}

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

	const handleSeccion = (operation) => {

		let maxSecciones = 15

		if (operation === false) {
			setMovingBack(true)
		} else {
			setMovingBack(false)
		}

		if (operation === true) {
			if (seccion <= (maxSecciones - 1) && seccion >= 0) {
				setSeccion(seccion + 1)
			}
		} else {
			if (seccion >= 1 && seccion <= maxSecciones) {
				setSeccion(seccion - 1)
			}
		}

		refScrollUp.current.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		if (seccion === 0) setTransitionZeroToggle(true);
		else setTransitionZeroToggle(false);
		if (seccion === 1) setTransitionOneToggle(true);
		else setTransitionOneToggle(false);
		if (seccion === 2) setTransitionTwoToggle(true);
		else setTransitionTwoToggle(false);
		if (seccion === 3) setTransitionThreeToggle(true);
		else setTransitionThreeToggle(false);
		if (seccion === 4) setTransitionFourToggle(true);
		else setTransitionFourToggle(false);
		if (seccion === 5) setTransitionFiveToggle(true);
		else setTransitionFiveToggle(false);
		if (seccion === 6) setTransitionSixToggle(true)
		else setTransitionSixToggle(false)
		if (seccion === 7) setTransitionSevenToggle(true)
		else setTransitionSevenToggle(false)
		if (seccion === 8) setTransitionEightToggle(true)
		else setTransitionEightToggle(false)
		if (seccion === 9) setTransitionNineToggle(true)
		else setTransitionNineToggle(false)
		if (seccion === 10) setTransitionTenToggle(true)
		else setTransitionTenToggle(false)
		if (seccion === 11) setTransitionElevenToggle(true)
		else setTransitionElevenToggle(false)
		if (seccion === 12) setTransitionTwelveToggle(true)
		else setTransitionTwelveToggle(false)
		if (seccion === 13) setTransitionThirteenToggle(true)
		else setTransitionThirteenToggle(false)
		if (seccion === 14) setTransitionFourtheenToggle(true)
		else setTransitionFourtheenToggle(false)
		if (seccion === 15) setTransitionFivetheenToggle(true)
		else setTransitionFivetheenToggle(false)
	}, [seccion])

	var transitionConfig = movingBack === false ?
		{
			from: { opacity: 0, position: 'absolute', transform: 'translateX(100%)', pointerEvents: 'all' },
			enter: { opacity: 1, position: 'relative', transform: 'translateX(0%)', top: '0px', pointerEvents: 'all' },
			leave: { opacity: 0, position: 'absolute', transform: 'translateX(-100%)', top: '0px', pointerEvents: 'none' },

		}
		:
		{
			from: { opacity: 0, position: 'absolute', transform: 'translateX(-100%)', pointerEvents: 'all' },
			enter: { opacity: 1, position: 'relative', transform: 'translateX(0%)', top: '0px', pointerEvents: 'all' },
			leave: { opacity: 0, position: 'absolute', transform: 'translateX(100%)', top: '0px', pointerEvents: 'none' },

		}

	// var transitionSixConfig = {
	// 	from: { opacity: 0, position: 'fixed', top: '0px', width: '100vw', zIndex: '1', pointerEvents: 'none' },
	// 	enter: { opacity: 1, position: 'fixed', top: '0px', width: '100vw', zIndex: '1', pointerEvents: 'all' },
	// 	leave: { opacity: 0, position: 'fixed', top: '0px', width: '100vw', zIndex: '1', pointerEvents: 'none' },
	// }

	const transitionZero = useTransition(transitionZeroToggle, transitionConfig)
	const transitionOne = useTransition(transitionOneToggle, transitionConfig)
	const transitionTwo = useTransition(transitionTwoToggle, transitionConfig)
	const transitionThree = useTransition(transitionThreeToggle, transitionConfig)
	const transitionFour = useTransition(transitionFourToggle, transitionConfig)
	const transitionFive = useTransition(transitionFiveToggle, transitionConfig)
	const transitionSix = useTransition(transitionSixToggle, transitionConfig)
	const transitionSeven = useTransition(transitionSevenToggle, transitionConfig)
	const transitionEight = useTransition(transitionEightToggle, transitionConfig)
	const transitionNine = useTransition(transitionNineToggle, transitionConfig)
	const transitionTen = useTransition(transitionTenToggle, transitionConfig)
	const transitionEleven = useTransition(transitionElevenToggle, transitionConfig)
	const transitionTwelve = useTransition(transitionTwelveToggle, transitionConfig)
	const transitionThirteen = useTransition(transitionThirteenToggle, transitionConfig)
	const transitionFourtheen = useTransition(transitionFourtheenToggle, transitionConfig)
	const transitionFivetheen = useTransition(transitionFivetheenToggle, transitionConfig)

	var bancosTransitionConfig = {
		config: {
			// duration: 10000
		},
		from: { opacity: 0, position: 'relative', width: '100%', transform: 'translateX(-100%)', pointerEvents: 'all' },
		enter: { opacity: 1, position: 'relative', width: '100%', transform: 'translateX(0%)', pointerEvents: 'all' },
		leave: { opacity: 0, position: 'relative', width: '100%', transform: 'translateX(100%)', pointerEvents: 'none' },

	}


	const transitionBancoOne = useTransition(transitionBancoOneToggle, bancosTransitionConfig)
	const transitionBancoTwo = useTransition(transitionBancoTwoToggle, bancosTransitionConfig)
	const transitionBancoThree = useTransition(transitionBancoThreeToggle, bancosTransitionConfig)

	useEffect(() => {
		if (cantidadBancos >= 1) setTransitionBancoOneToggle(true);
		else setTransitionBancoOneToggle(false);
		if (cantidadBancos >= 2) setTransitionBancoTwoToggle(true);
		else setTransitionBancoTwoToggle(false);
		if (cantidadBancos >= 3) setTransitionBancoThreeToggle(true);
		else setTransitionBancoThreeToggle(false);
	}, [cantidadBancos])

	const animateHeight = (e, currentPosition) => {

		// console.log(animatedHeightBoxUnoRef.parentElement.children[0].children[0].className)

		if (animatedHeightBoxUnoRef.current !== undefined) {
			if (currentPosition !== 1) {
				animatedHeightBoxUnoRef.current.style.height = '0px'
				animatedHeightBoxUnoRef.current.parentElement.children[0].children[0].className = 'ri-add-line'
			}
			refScrollUpBancos.current.scrollIntoView({ behavior: 'smooth' })
		}
		if (animatedHeightBoxDosRef.current !== undefined) {
			if (cantidadBancos >= 2) {
				if (currentPosition !== 2) {
					animatedHeightBoxDosRef.current.style.height = '0px'
					animatedHeightBoxDosRef.current.parentElement.children[0].children[0].className = 'ri-add-line'
				}
				refScrollUpBancos.current.scrollIntoView({ behavior: 'smooth' })
			}
		}
		if (animatedHeightBoxTresRef.current !== undefined) {
			if (cantidadBancos >= 3) {
				if (currentPosition !== 3) {
					animatedHeightBoxTresRef.current.style.height = '0px'
					animatedHeightBoxTresRef.current.parentElement.children[0].children[0].className = 'ri-add-line'
				}
				refScrollUpBancos.current.scrollIntoView({ behavior: 'smooth' })
			}
		}


		// console.log(e)


		// EDIT ICON AT LEFT
		let element = e.target.parentElement.nextSibling
		let newHeight = e.target.parentElement.nextSibling.children[0].children[0].clientHeight


		if (element.clientHeight === 0) {
			element.style.height = newHeight + 'px'
			e.target.parentElement.children[0].className = 'ri-subtract-line'

			// ANIMATION TIME TO SET 100%
			// setTimeout(() => {
			// element.style.height = '100%'
			// }, 10000);
		} else {
			// element.style.height = newHeight + 'px'
			// setTimeout(() => {
			element.style.height = '0px'
			e.target.parentElement.children[0].className = 'ri-add-line'
			// }, 100);
		}
	}


	const validateMesDisabledBancoOne = (mes) => {

		let encontrado = Object.keys(bancoOne.mesUno.fields).find(campo => {
			if (bancoOne[mes].fields[campo] === "") {
				return true
			}
			return false
		})

		if (encontrado === undefined) return false

		return true
	}
	const validateMesDisabledBancoTwo = (mes) => {

		let encontrado = Object.keys(bancoTwo.mesUno.fields).find(campo => {
			if (bancoTwo[mes].fields[campo] === "") {
				return true
			}
			return false
		})

		if (encontrado === undefined) return false

		return true
	}
	const validateMesDisabledBancoThree = (mes) => {

		let encontrado = Object.keys(bancoThree.mesUno.fields).find(campo => {
			if (bancoThree[mes].fields[campo] === "") {
				return true
			}
			return false
		})

		if (encontrado === undefined) return false

		return true
	}


	return (
		<>

			<div ref={refScrollUp} style={{ position: 'absolute', transform: 'translateY(-70px)' }} />
			<div>
				<div className="top-formulario white" >
					{
						seccion === 1 &&
						<h1>Generales</h1>
					}
					{
						seccion === 2 &&
						<h1>Domicilio</h1>
					}
					{
						seccion === 3 &&
						<h1>Domicilio fiscal</h1>
					}
					{
						seccion === 4 &&
						<h1>Domicilio comercial</h1>
					}
					{
						seccion === 5 &&
						<h1>Económicos</h1>
					}
					{
						seccion === 6 &&
						<h1>Obligado solidario</h1>
					}
				</div>
			</div>
			<div className="container mt-3">
				<h1>Solicitud de crédito PyME</h1>
			</div>
			<div className="container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
				<h4>Generales</h4>
				<h4>Domicilio</h4>
				<h4>Domicilio fiscal</h4>
				<h4>Domicilio comercial</h4>
				<h4>Económicos</h4>
			</div>
			<div className="container" style={{ position: 'relative' }}>
				<div className='bgc-gray' style={{ height: '10px', margin: '8px 0px 16px 0px' }} />
				<div className='bgc-red' style={{ height: '10px', position: 'absolute', width: `100%`, top: '0px' }} />
			</div>
			<div className="container" style={{ position: 'relative', overflow: 'hidden' }}>
				<div className="row">
					<div className="col-12 col-md-4" style={{ position: 'relative', zIndex: '999' }}>
						<div className="bgc-red left-red-bar" style={{ minHeight: '150px', position: scrollPosition >= 360 ? 'fixed' : 'static', top: '12px', width: '350px', padding: '24px 0px' }}>
							<h3 className="text-center">Micro apoyo</h3>
							<div className='card-1-homepage card-img' style={{ pointerEvents: 'none', borderRadius: '0px' }} />
							<div style={{ padding: '24px 24px 0px 24px' }}>
								<p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: 'bold' }}>$ 230,000.00</p>
								<p>Crédito</p>
								<p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: 'bold' }}>$ 60,000.00</p>
								<p>Mensualidades</p>
								<p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: 'bold' }}>48</p>
								<p>Meses</p>
								<p style={{ marginTop: '24px', marginBottom: '0px' }}>CAT promedio 14.7% sin IVA</p>
								<p style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}><i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>Tabla de amortización</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-8 formulario">
						{
							transitionZero((style, visible) =>
								visible &&
								<animated.div style={style}>
									<div className="container">
										<h2 className='text-center'>Tipo de persona</h2>
										<hr />
										<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { setTipoPersona("PFAE"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
												</div>
												<span className="text-center">Persona fisica con actividad empresarial</span>
											</div>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { setTipoPersona("PM"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-building-4-line"></i>
												</div>
												<span className="text-center">Persona moral</span>
											</div>
										</div>
									</div>
								</animated.div>
							)
						}

						{
							tipoPersona === "PM" &&
							<FormularioPersonaMoral
								transitionOne={transitionOne}
								animated={animated}
								handleSeccion={handleSeccion}
								transitionTwo={transitionTwo}
								importeRenta={importeRenta}
								handlePesos={handlePesos}
								setImporteRenta={setImporteRenta}
								transitionThree={transitionThree}
								importeRentaFiscal={importeRentaFiscal}
								setImporteRentaFiscal={setImporteRentaFiscal}
								totalNominaMensual={totalNominaMensual}
								setTotalNominaMensual={setTotalNominaMensual}
								transitionFour={transitionFour}
								transitionFive={transitionFive}
								ventasAnuales={ventasAnuales}
								setVentasAnuales={setVentasAnuales}
								transitionBancoOne={transitionBancoOne}
								bancoOne={bancoOne}
								modifyBancoOne={modifyBancoOne}
								validateMesDisabledBancoOne={validateMesDisabledBancoOne}
								transitionBancoTwo={transitionBancoTwo}
								bancoTwo={bancoTwo}
								modifyBancoTwo={modifyBancoTwo}
								validateMesDisabledBancoTwo={validateMesDisabledBancoTwo}
								transitionBancoThree={transitionBancoThree}
								animateHeight={animateHeight}
								bancoThree={bancoThree}
								modifyBancoThree={modifyBancoThree}
								validateMesDisabledBancoThree={validateMesDisabledBancoThree}
								cantidadBancos={cantidadBancos}
								handleAddBancos={handleAddBancos}
								transitionSix={transitionSix}
								setTipoPersona={setTipoPersona}
								animatedHeightBoxUnoRef={animatedHeightBoxUnoRef}
								animatedHeightBoxDosRef={animatedHeightBoxDosRef}
								animatedHeightBoxTresRef={animatedHeightBoxTresRef}
								refScrollUpBancos={refScrollUpBancos}
								transitionSeven={transitionSeven}
								transitionEight={transitionEight}
								transitionNine={transitionNine}
								transitionTen={transitionTen}
								transitionEleven={transitionEleven}
								transitionTwelve={transitionTwelve}
								transitionThirteen={transitionThirteen}
								transitionFourtheen={transitionFourtheen}
								transitionFivetheen={transitionFivetheen}
								axiosData={axiosData}
								aniosSector={aniosSector}
							/>
						}
						{
							tipoPersona === "PFAE" &&
							<>
								{
									transitionOne((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2>Información general</h2>
												<hr />
												<div className="row" style={{ alignItems: 'flex-end' }}>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Nombre </span>
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Apellido Paterno </span>
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Apellido Materno </span>
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Fecha de nacimiento </span>
															<input style={{ width: '55%' }} type="date" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >País de nacimiento </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.paises.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Estado de Nacimiento </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.estados.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Género </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.generoOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >RFC </span>
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >CURP </span>
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Folio ID </span>
															<input style={{ width: '55%' }} type="" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Nacionalidad </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.nacionalidades.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Correo electrónico </span>
															<input style={{ width: '55%' }} type="email" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Teléfono </span>
															<input style={{ width: '55%' }} type="tel" maxLength={10} required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Celular </span>
															<input style={{ width: '55%' }} type="tel" maxLength={10} required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Estado Civil </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.estadoCivilOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Menores de 23 años que dependen </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.dependientesMenores23Anios.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.descripcion}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Total de dependientes </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.dependientes.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.descripcion}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span >Nivel académico </span>
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.nivelEducativoOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
															<div className="form-check">
																<input className="form-check-input" type="checkbox" value="" id="rama" />
																<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																	Relacionado rama judicial / Gobierno / Legislativa
																</label>
															</div>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
															<div className="form-check">
																<input className="form-check-input" type="checkbox" value="" id="residencia" />
																<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																	¿Tiene más de un país de residencia?
																</label>
															</div>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
															<div className="form-check">
																<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																	¿Tiene o adquirió la residencia de los EUA?
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
												<button onClick={() => handleSeccion(false)}>Atras</button>
												<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
											</div>
										</animated.div>
									)
								}
								{
									transitionTwo((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2>Información de domicilio</h2>
												<hr />
												<div className="row" style={{ alignItems: 'flex-end' }}>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Calle</span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Número Exterior</span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Número Interior</span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Piso</span >
															<input style={{ width: '55%' }} type="number" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>País</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.paises.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>CP</span >
															<input style={{ width: '55%' }} type="number" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Colonia</span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Delegación/Municipio</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.municipios.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Estado</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.estados.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Tipo de Domicilio</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Tipo de vivienda</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Antigüedad en el domicilio actual</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																<option value="2">value</option>
																<option value="1">value</option>
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Importe de la renta</span >
															<input style={{ width: '55%' }} type="text" required value={importeRenta} onChange={(e) => handlePesos(e, setImporteRenta)} />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Antigüedad en el domicilio anterior</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																<option value="2">value</option>
																<option value="1">value</option>
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Entre calle 1</span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Entre calle 2</span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
												</div>
											</div>
											<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
												<button onClick={() => handleSeccion(false)}>Atras</button>
												<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
											</div>
										</animated.div>
									)
								}
								{
									transitionThree((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2>Información de domicilio fiscal</h2>
												<hr />
												<div className="row" style={{ alignItems: 'flex-end' }}>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Calle </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Número Exterior </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Número Interior </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>CP </span >
															<input style={{ width: '55%' }} type="number" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Colonia </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Delegación/Municipio </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.municipios.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Estado</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.estados.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Sector </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.domicilioFiscal.sectorOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Giro </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Actividad </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.domicilioFiscal.actividadOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.detalleClave}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Fecha alta de SHCP </span >
															<input style={{ width: '55%' }} type="date" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Años de experiencia en el sector </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	aniosSector.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Importar/Exportar </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Total de empleados </span >
															<input style={{ width: '55%' }} type="number" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Número de sucursales </span >
															<input style={{ width: '55%' }} type="number" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Tipo de local </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.domicilioFiscal.tipoLocalOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Años que lo ha rentado </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																<option value="2">value</option>
																<option value="1">value</option>
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Importe Renta Mensual</span >
															<input style={{ width: '55%' }} type="text" required value={importeRentaFiscal} onChange={(e) => handlePesos(e, setImporteRentaFiscal)} />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Antigüedad de su actividad</span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Total de nómina mensual</span >
															<input style={{ width: '55%' }} type="text" required value={totalNominaMensual} onChange={(e) => handlePesos(e, setTotalNominaMensual)} />
														</div>
													</div>
												</div>
											</div>
											<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
												<button onClick={() => handleSeccion(false)}>Atras</button>
												<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
											</div>
										</animated.div>
									)
								}
								{
									transitionFour((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2>Información de domicilio comercial</h2>
												<hr />
												<div className="row" style={{ alignItems: 'flex-end' }}>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Calle </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Número Exterior </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Número Interior </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>CP </span >
															<input style={{ width: '55%' }} type="number" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Colonia </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Delegación/Municipio </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.municipios.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Estado</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.generales.estados.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Tiempo de residencia </span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																<option value="2">value</option>
																<option value="1">value</option>
															</select>
														</div>
													</div>
												</div>
											</div>
											<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
												<button onClick={() => handleSeccion(false)}>Atras</button>
												<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
											</div>
										</animated.div>
									)
								}
								{
									transitionFive((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2>Datos económicos</h2>
												<hr />
												<div className="row" style={{ alignItems: 'flex-end' }}>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Ventas anuales</span >
															<input style={{ width: '55%' }} type="text" required value={ventasAnuales} onChange={(e) => handlePesos(e, setVentasAnuales)} />
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Tipo de comprobante de ingresos</span >
															<select required style={{ width: '55%' }}>
																<option value="">Seleccione opcion</option>
																{
																	axiosData.catalogosPfaeDatosEconomicos.tipoDeComprobateDeIngresosOpciones.map(item => {
																		return (
																			<option key={item.id} value={item.id}>{item.nombre}</option>
																		)
																	})
																}
															</select>
														</div>
													</div>
													<div className="col-12">
														<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
															<span>Fuente de ingresos </span >
															<input style={{ width: '55%' }} type="text" required />
														</div>
													</div>
													<div style={{ position: 'relative' }}>
														<div ref={refScrollUpBancos} />
														{
															transitionBancoOne((style, visible) =>
																visible &&
																<animated.div style={style}>
																	<div className="row" style={{ alignItems: 'flex-end' }}>
																		<div className="col-12">
																			<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																				<div>
																					<div className="pointer" style={{ display: 'flex', alignItems: 'center' }}>
																						<i style={{ fontSize: '24px', pointerEvents: 'none', transform: 'translateY(-4px)' }} className="ri-add-line"></i>
																						<div onClick={(e) => animateHeight(e, 1)} className="col-12">
																							<h3 className="pointer-none color-red">Banco 1</h3 >
																						</div>
																					</div>
																					<div ref={animatedHeightBoxUnoRef} className='slow-transition' style={{ height: '0px' }}>
																						<div style={{ overflow: 'hidden', height: '100%' }}>
																							<div className="row" style={{ alignItems: 'flex-end' }}>
																								<select style={{ marginLeft: '12px', marginBottom: '24px', width: '200px' }} value={bancoOne.banco} onChange={(e) => modifyBancoOne('banco', null, e.target.value)} required >
																									<option value="">Seleccione opcion</option>
																									{
																										axiosData.catalogosPfaeDatosEconomicos.bancoOpciones.map(item => {
																											return (
																												<option key={item.id} value={item.id}>{item.nombreBanco}</option>
																											)
																										})
																									}
																								</select>
																								<div className="col-12">
																									<h4>Mes 1</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input value={bancoOne.mesUno.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesUno', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input value={bancoOne.mesUno.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesUno', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input value={bancoOne.mesUno.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesUno', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input value={bancoOne.mesUno.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesUno', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>

																								<div className="col-12">
																									<h4>Mes 2</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesDos', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesDos', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesDos', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesDos', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 3</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesTres', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesTres', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesTres', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesTres', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>

																								<div className="col-12">
																									<h4>Mes 4</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesCuatro', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesCuatro', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesCuatro', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesCuatro', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>

																								<div className="col-12">
																									<h4>Mes 5</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesCinco', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesCinco', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesCinco', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesCinco', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 6</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoOne("mesCinco")} value={bancoOne.mesSeis.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesSeis', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoOne("mesCinco")} value={bancoOne.mesSeis.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesSeis', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoOne("mesCinco")} value={bancoOne.mesSeis.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesSeis', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoOne("mesCinco")} value={bancoOne.mesSeis.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesSeis', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</animated.div>
															)
														}
														{
															transitionBancoTwo((style, visible) =>
																visible &&
																<animated.div style={style}>
																	<div className="row" style={{ alignItems: 'flex-end' }}>
																		<div className="col-12">
																			<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																				<div>
																					<div className="pointer" style={{ display: 'flex', alignItems: 'center' }}>
																						<i style={{ fontSize: '24px', pointerEvents: 'none', transform: 'translateY(-4px)' }} className="ri-add-line"></i>
																						<div onClick={(e) => animateHeight(e, 2)} className="col-12">
																							<h3 className="pointer-none color-red">Banco 2</h3 >
																						</div>
																					</div>
																					<div ref={animatedHeightBoxDosRef} className='slow-transition' style={{ height: '0px' }}>
																						<div style={{ overflow: 'hidden', height: '100%' }}>
																							<div className="row" style={{ alignItems: 'flex-end' }}>
																								<select style={{ marginLeft: '12px', marginBottom: '24px', width: '200px' }} value={bancoTwo.banco} onChange={(e) => modifyBancoTwo('banco', null, e.target.value)} required >
																									<option value="">Seleccione opcion</option>
																									{
																										axiosData.catalogosPfaeDatosEconomicos.bancoOpciones.map(item => {
																											return (
																												<option key={item.id} value={item.id}>{item.nombreBanco}</option>
																											)
																										})
																									}
																								</select>
																								<div className="col-12">
																									<h4>Mes 1</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input value={bancoTwo.mesUno.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesUno', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input value={bancoTwo.mesUno.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesUno', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input value={bancoTwo.mesUno.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesUno', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input value={bancoTwo.mesUno.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesUno', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 2</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesDos', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesDos', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesDos', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesDos', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 3</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesTres', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesTres', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesTres', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesTres', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 4</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesCuatro', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesCuatro', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesCuatro', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesCuatro', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 5</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesCinco', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesCinco', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesCinco', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesCinco', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 6</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCinco")} value={bancoTwo.mesSeis.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesSeis', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCinco")} value={bancoTwo.mesSeis.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesSeis', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCinco")} value={bancoTwo.mesSeis.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesSeis', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoTwo("mesCinco")} value={bancoTwo.mesSeis.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesSeis', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</animated.div>
															)
														}
														{
															transitionBancoThree((style, visible) =>
																visible &&
																<animated.div style={style}>
																	<div className="row" style={{ alignItems: 'flex-end' }}>
																		<div className="col-12">
																			<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																				<div>
																					<div className="pointer" style={{ display: 'flex', alignItems: 'center' }}>
																						<i style={{ fontSize: '24px', pointerEvents: 'none', transform: 'translateY(-4px)' }} className="ri-add-line"></i>
																						<div onClick={(e) => animateHeight(e, 3)} className="col-12">
																							<h3 className="pointer-none color-red">Banco 3</h3 >
																						</div>
																					</div>
																					<div ref={animatedHeightBoxTresRef} className='slow-transition' style={{ height: '0px' }}>
																						<div style={{ overflow: 'hidden', height: '100%' }}>
																							<div className="row" style={{ alignItems: 'flex-end' }}>
																								<select style={{ marginLeft: '12px', marginBottom: '24px', width: '200px' }} value={bancoThree.banco} onChange={(e) => modifyBancoThree('banco', null, e.target.value)} required >
																									<option value="">Seleccione opcion</option>
																									{
																										axiosData.catalogosPfaeDatosEconomicos.bancoOpciones.map(item => {
																											return (
																												<option key={item.id} value={item.id}>{item.nombreBanco}</option>
																											)
																										})
																									}
																								</select>
																								<div className="col-12">
																									<h4>Mes 1</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input value={bancoThree.mesUno.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesUno', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input value={bancoThree.mesUno.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesUno', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input value={bancoThree.mesUno.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesUno', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input value={bancoThree.mesUno.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesUno', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 2</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesDos', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesDos', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesDos', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesDos', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 3</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesTres', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesTres', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesTres', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesTres', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 4</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesCuatro', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesCuatro', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesCuatro', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesCuatro', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 5</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesCinco', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesCinco', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesCinco', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesCinco', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-12">
																									<h4>Mes 6</h4>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																										<input disabled={validateMesDisabledBancoThree("mesCinco")} value={bancoThree.mesSeis.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesSeis', "saldoPromedio", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																										<input disabled={validateMesDisabledBancoThree("mesCinco")} value={bancoThree.mesSeis.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesSeis', "saldoInicial", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de retiros </span >
																										<input disabled={validateMesDisabledBancoThree("mesCinco")} value={bancoThree.mesSeis.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesSeis', "totalRetiros", e.target.value)} type="text" required />
																									</div>
																								</div>
																								<div className="col-6 col-sm-6 col-md-3 col-xl-3">
																									<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																										<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																										<input disabled={validateMesDisabledBancoThree("mesCinco")} value={bancoThree.mesSeis.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesSeis', "totalDepositos", e.target.value)} type="text" required />
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>

																</animated.div>
															)
														}
													</div>


												</div>
											</div>
											<div className="container">
												<div className="row">
													<div style={{ marginBottom: '24px', display: 'flex', gap: '12px' }}>
														{
															cantidadBancos >= 2 &&
															<button onClick={() => handleAddBancos(false)}>Eliminar banco</button>
														}
														{
															cantidadBancos <= 2 &&
															<button onClick={() => handleAddBancos(true)}>Agregar otro banco</button>
														}
													</div>
												</div>
											</div>
											<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
												<button onClick={() => handleSeccion(false)}>Atras</button>
												<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
											</div>
										</animated.div>
									)
								}
								{
									transitionSix((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2 className='text-center'>Seleccione tipo de obligado solidario a agregar</h2>
												<hr />
												<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setPrimerObligadoSolidario("PF"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
														</div>
														<span className="text-center">Persona fisica</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setPrimerObligadoSolidario("PFAE"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
														</div>
														<span className="text-center">Persona fisica con actividad empresarial</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setPrimerObligadoSolidario("PM"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-building-4-line"></i>
														</div>
														<span className="text-center">Persona moral</span>
													</div>
												</div>
											</div>
										</animated.div>
									)
								}
								{
									transitionSeven((style, visible) =>
										visible &&
										<animated.div style={style}>
											{
												primerObligadoSolidario === 'PF' &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>

														</div>
													</div>
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												primerObligadoSolidario === "PFAE" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física con actividad empresarial</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												primerObligadoSolidario === "PM" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona moral</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Razón social </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Representante legal</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Nombre completo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Cargo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Calle</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número exterior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
										</animated.div>
									)
								}
								{
									transitionEight((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2 className='text-center'>Seleccione tipo de obligado solidario a agregar</h2>
												<hr />
												<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setSegundoObligadoSolidario("PF"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
														</div>
														<span className="text-center">Persona física</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setSegundoObligadoSolidario("PFAE"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
														</div>
														<span className="text-center">Persona física con actividad empresarial</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setSegundoObligadoSolidario("PM"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-building-4-line"></i>
														</div>
														<span className="text-center">Persona moral</span>
													</div>
												</div>
											</div>
										</animated.div>
									)
								}
								{
									transitionNine((style, visible) =>
										visible &&
										<animated.div style={style}>
											{
												segundoObligadoSolidario === 'PF' &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>

														</div>
													</div>
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												segundoObligadoSolidario === "PFAE" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física con actividad empresarial</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												segundoObligadoSolidario === "PM" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona moral</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Razón social </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Representante legal</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Nombre completo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Cargo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Calle</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número exterior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
										</animated.div>
									)
								}
								{
									transitionTen((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2 className='text-center'>Seleccione tipo de obligado solidario a agregar</h2>
												<hr />
												<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setTercerObligadoSolidario("PF"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
														</div>
														<span className="text-center">Persona física</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setTercerObligadoSolidario("PFAE"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
														</div>
														<span className="text-center">Persona física con actividad empresarial</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setTercerObligadoSolidario("PM"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-building-4-line"></i>
														</div>
														<span className="text-center">Persona moral</span>
													</div>
												</div>
											</div>
										</animated.div>
									)
								}
								{
									transitionEleven((style, visible) =>
										visible &&
										<animated.div style={style}>
											{
												tercerObligadoSolidario === 'PF' &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>

														</div>
													</div>
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												tercerObligadoSolidario === "PFAE" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física con actividad empresarial</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												tercerObligadoSolidario === "PM" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona moral</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Razón social </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Representante legal</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Nombre completo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Cargo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Calle</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número exterior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
										</animated.div>
									)
								}
								{
									transitionTwelve((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2 className='text-center'>Seleccione tipo de obligado solidario a agregar</h2>
												<hr />
												<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setCuartoObligadoSolidario("PF"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
														</div>
														<span className="text-center">Persona física</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setCuartoObligadoSolidario("PFAE"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
														</div>
														<span className="text-center">Persona física con actividad empresarial</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setCuartoObligadoSolidario("PM"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-building-4-line"></i>
														</div>
														<span className="text-center">Persona moral</span>
													</div>
												</div>
											</div>
										</animated.div>
									)
								}
								{
									transitionThirteen((style, visible) =>
										visible &&
										<animated.div style={style}>
											{
												cuartoObligadoSolidario === 'PF' &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>

														</div>
													</div>
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												cuartoObligadoSolidario === "PFAE" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física con actividad empresarial</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												cuartoObligadoSolidario === "PM" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona moral</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Razón social </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Representante legal</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Nombre completo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Cargo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Calle</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número exterior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
										</animated.div>
									)
								}
								{
									transitionFourtheen((style, visible) =>
										visible &&
										<animated.div style={style}>
											<div className="container">
												<h2 className='text-center'>Seleccione tipo de obligado solidario a agregar</h2>
												<hr />
												<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setQuintoObligadoSolidario("PF"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
														</div>
														<span className="text-center">Persona física</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setQuintoObligadoSolidario("PFAE"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
														</div>
														<span className="text-center">Persona física con actividad empresarial</span>
													</div>
													<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
														<div onClick={() => { setQuintoObligadoSolidario("PM"); handleSeccion(true); }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
															<i style={{ fontSize: '32px' }} className="ri-building-4-line"></i>
														</div>
														<span className="text-center">Persona moral</span>
													</div>
												</div>
											</div>
										</animated.div>
									)
								}
								{
									transitionFivetheen((style, visible) =>
										visible &&
										<animated.div style={style}>
											{
												quintoObligadoSolidario === 'PF' &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>

														</div>
													</div>
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												quintoObligadoSolidario === "PFAE" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona física con actividad empresarial</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nombre </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Paterno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Apellido Materno </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Fecha de nacimiento </span>
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >País de nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Estado de Nacimiento </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Género </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.generoOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >CURP </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Folio ID </span>
																	<input style={{ width: '55%' }} type="" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Nacionalidad </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.nacionalidades.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Calidad migratoria </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Celular </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Menores de 23 años que dependen </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientesMenores23Anios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Total de dependientes </span>
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.dependientes.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.descripcion}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Relación con el solicitante </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número Interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio actual</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Antigüedad en el domicilio anterior</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		<option value="2">value</option>
																		<option value="1">value</option>
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
											{
												quintoObligadoSolidario === "PM" &&
												<>
													<div className="container">
														<h1 className='text-center'>Persona moral</h1>
														<hr />
														<h2>Información general</h2>
														<hr />
														<div className="row" style={{ alignItems: 'flex-end' }}>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Razón social </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >RFC </span>
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Correo electrónico </span>
																	<input style={{ width: '55%' }} type="email" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Fecha de alta en SHCP</span >
																	<input style={{ width: '55%' }} type="date" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="rama" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																			Relacionado rama judicial / Gobierno / Legislativa
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="residencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																			¿Tiene más de un país de residencia?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																	<div className="form-check">
																		<input className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																		<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																			¿Tiene o adquirió la residencia de los EUA?
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>El obligado es accionista u obligado de otra empresa</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Es obligado o fiador de otra empresa o PFAE</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Representante legal</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Nombre completo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Cargo</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span >Teléfono </span>
																	<input style={{ width: '55%' }} type="tel" maxLength={10} required />
																</div>
															</div>
															<hr />
															<h2>Información de domicilio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Calle</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número exterior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número interior</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Piso</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>País</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.paises.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>CP</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Colonia</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Delegación/Municipio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.municipios.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Estado</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.generales.estados.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de Domicilio</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeDomicilioOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Tipo de vivienda</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilio.tipoDeViviendaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 1</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Entre calle 2</span >
																	<input style={{ width: '55%' }} type="text" required />
																</div>
															</div>
															<hr />
															<h2>Información del negocio</h2>
															<hr />
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Importar/exportar</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.importaExportaOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.sectorOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Giro</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.giroEmpresarialOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.nombre}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Actividad</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			axiosData.domicilioFiscal.actividadOpciones.map(item => {
																				return (
																					<option key={item.id} value={item.id}>{item.detalleClave}</option>
																				)
																			})
																		}
																	</select>
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Número de sucursales</span >
																	<input style={{ width: '55%' }} type="number" required />
																</div>
															</div>
															<div className="col-12">
																<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																	<span>Años de experiencia en el sector</span >
																	<select required style={{ width: '55%' }}>
																		<option value="">Seleccione opcion</option>
																		{
																			aniosSector.map(item => {
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
													<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
														<button onClick={() => handleSeccion(false)}>Atras</button>
														<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
													</div>
												</>
											}
										</animated.div>
									)
								}
							</>
						}
						{/* {
							tipoPersona === "PFAE" &&
							transitionSeven((style, visible) =>
								visible &&
								<animated.div style={style}>
									<CreateObligadoSolidario
										obligadoSolidario={obligadoSolidario}
										handleSeccion={handleSeccion}
									/>
								</animated.div>
							)
						} */}
					</div>
				</div>
			</div>

		</>
	);
}


export default Formulario;