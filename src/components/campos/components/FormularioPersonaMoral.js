import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';

const FormularioPersonaMoral = ({
	transitionOne,
	animated,
	handleSeccion,
	transitionTwo,
	importeRenta,
	handlePesos,
	setImporteRenta,
	transitionThree,
	importeRentaFiscal,
	setImporteRentaFiscal,
	totalNominaMensual,
	setTotalNominaMensual,
	transitionFour,
	transitionFive,
	ventasAnuales,
	setVentasAnuales,
	transitionBancoOne,
	bancoOne,
	modifyBancoOne,
	validateMesDisabledBancoOne,
	transitionBancoTwo,
	bancoTwo,
	modifyBancoTwo,
	validateMesDisabledBancoTwo,
	transitionBancoThree,
	animateHeight,
	bancoThree,
	modifyBancoThree,
	validateMesDisabledBancoThree,
	cantidadBancos,
	handleAddBancos,
	transitionSix,
	setTipoPersona,
	animatedHeightBoxUnoRef,
	animatedHeightBoxDosRef,
	animatedHeightBoxTresRef,
	refScrollUpBancos,
	transitionSeven,
	transitionEight,
	transitionNine,
	transitionTen,
	transitionEleven,
	transitionTwelve,
	transitionThirteen,
	transitionFourtheen,
	transitionFivetheen,
	axiosData,
	aniosSector
}) => {
	// OBLIGADO SOLIDARIO
	const [segundoObligadoSolidario, setSegundoObligadoSolidario] = useState('');
	const [tercerObligadoSolidario, setTercerObligadoSolidario] = useState('');
	const [cuartoObligadoSolidario, setCuartoObligadoSolidario] = useState('');
	const [quintoObligadoSolidario, setQuintoObligadoSolidario] = useState('');

	// MAIN DATA
	const [sociosPrincipales, setSociosPrincipales] = useState({
		cantidad: 1,
		socios: [
			{
				tipoPersona: '',
				nombreRazonSocial: '',
				porcentajeAccionario: '',
				RFC: '',
				puestoempresa: ''
			},
			{
				tipoPersona: '',
				nombreRazonSocial: '',
				porcentajeAccionario: '',
				RFC: '',
				puestoempresa: ''
			},
			{
				tipoPersona: '',
				nombreRazonSocial: '',
				porcentajeAccionario: '',
				RFC: '',
				puestoempresa: ''
			},
			{
				tipoPersona: '',
				nombreRazonSocial: '',
				porcentajeAccionario: '',
				RFC: '',
				puestoempresa: ''
			},
			{
				tipoPersona: '',
				nombreRazonSocial: '',
				porcentajeAccionario: '',
				RFC: '',
				puestoempresa: ''
			},
		]
	});

	const [principalAccionista, setPrincipalAccionista] = useState({
		tipoPersona: '',
		// nombreRazonSocial: '',
		// porcentajeAccionario: '',
		// RFC: '',
		// puestoempresa: ''
	});


	// MONEY
	const [importeRentaPrincipalAccionista, setImporteRentaPrincipalAccionista] = useState('$');
	const [importeRentaMensualPrincipalAccionista, setImporteRentaMensualPrincipalAccionista] = useState('$');


	// ANIMATION TOGGLE
	const [transitionSocioUnoToggle, setTransitionSocioUnoToggle] = useState(false);
	const [transitionSocioDosToggle, setTransitionSocioDosToggle] = useState(false);
	const [transitionSocioTresToggle, setTransitionSocioTresToggle] = useState(false);
	const [transitionSocioCuatroToggle, setTransitionSocioCuatroToggle] = useState(false);
	const [transitionSocioCincoToggle, setTransitionSocioCincoToggle] = useState(false);

	var transitionConfig = {
		from: { opacity: 0, position: 'relative', transform: 'translateX(-100%)', pointerEvents: 'all' },
		enter: { opacity: 1, position: 'relative', transform: 'translateX(0%)', pointerEvents: 'all' },
		leave: { opacity: 0, position: 'relative', transform: 'translateX(100%)', pointerEvents: 'none' },
	}

	// TRANSITIONS
	const transitionSocioUno = useTransition(transitionSocioUnoToggle, transitionConfig)
	const transitionSocioDos = useTransition(transitionSocioDosToggle, transitionConfig)
	const transitionSocioTres = useTransition(transitionSocioTresToggle, transitionConfig)
	const transitionSocioCuatro = useTransition(transitionSocioCuatroToggle, transitionConfig)
	const transitionSocioCinco = useTransition(transitionSocioCincoToggle, transitionConfig)

	const updateSociosPrincipales = (value, pos) => {
		let letSociosPrincipales = sociosPrincipales

		letSociosPrincipales.socios[pos - 1] = {
			tipoPersona: value,
			nombreRazonSocial: letSociosPrincipales.socios[pos - 1].nombreRazonSocial,
			porcentajeAccionario: letSociosPrincipales.socios[pos - 1].porcentajeAccionario,
			RFC: letSociosPrincipales.socios[pos - 1].RFC,
			puestoempresa: letSociosPrincipales.socios[pos - 1].puestoempresa
		}

		setSociosPrincipales({ ...letSociosPrincipales })
		return
	}

	const handleCantidadSocios = (value) => {
		let letSociosPrincipales = sociosPrincipales

		letSociosPrincipales.cantidad = value

		setSociosPrincipales({ ...letSociosPrincipales })
	}

	useEffect(() => {
		if (parseInt(sociosPrincipales.cantidad) >= 1) setTransitionSocioUnoToggle(true)
		else setTransitionSocioUnoToggle(false)
		if (parseInt(sociosPrincipales.cantidad) >= 2) setTransitionSocioDosToggle(true)
		else setTransitionSocioDosToggle(false)
		if (parseInt(sociosPrincipales.cantidad) >= 3) setTransitionSocioTresToggle(true)
		else setTransitionSocioTresToggle(false)
		if (parseInt(sociosPrincipales.cantidad) >= 4) setTransitionSocioCuatroToggle(true)
		else setTransitionSocioCuatroToggle(false)
		if (parseInt(sociosPrincipales.cantidad) >= 5) setTransitionSocioCincoToggle(true)
		else setTransitionSocioCincoToggle(false)
	}, [sociosPrincipales.cantidad])

	return (
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
										<span >Razón social </span>
										<input style={{ width: '55%' }} type="text" maxLength={40} required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >RFC </span>
										<input style={{ width: '55%' }} type="text" maxLength={13} required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Número de escritura </span>
										<input style={{ width: '55%' }} type="text" maxLength={30} required />
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
										<span>Duración de la sociedad</span >
										<select required style={{ width: '55%' }}>
											<option value="">Seleccione opcion</option>
											<option value="2">value</option>
											<option value="1">value</option>
										</select>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Folio mercantil</span >
										<input style={{ width: '55%' }} type="number" required />
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
							<h2>Representante legal</h2>
							<hr />
							<div className="row" style={{ alignItems: 'flex-end' }}>
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
							</div>
							<h2>Contacto con la empresa</h2>
							<hr />
							<div className="row" style={{ alignItems: 'flex-end' }}>
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
							<h2>Domicilio del negocio</h2>
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
							<h2>Información del negocio</h2>
							<hr />
							<div className="row" style={{ alignItems: 'flex-end' }}>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Importar / exportar</span >
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
										<span>Años de antigüedad en su actividad </span >
										<select required style={{ width: '55%' }}>
											<option value="">Seleccione opcion</option>
											<option value="2">value</option>
											<option value="1">value</option>
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
																	<div onClick={(e) => animateHeight(e)} className="col-12">
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
																	<div onClick={(e) => animateHeight(e)} className="col-12">
																		<h3 className="pointer-none color-red">Banco 2</h3 >
																	</div>
																</div>
																<div ref={animatedHeightBoxDosRef} className='slow-transition' style={{ height: '0px' }}>
																	<div style={{ overflow: 'hidden', height: '100%' }}>
																		<div className="row" style={{ alignItems: 'flex-end' }}>
																			<select style={{ marginLeft: '12px', marginBottom: '24px', width: '200px' }} value={bancoTwo.banco} onChange={(e) => modifyBancoTwo('banco', null, e.target.value)} required >
																				<option value="">Seleccione opcion</option>
																				<option value="value1">value1</option>
																				<option value="value2">value2</option>
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
																	<div onClick={(e) => animateHeight(e)} className="col-12">
																		<h3 className="pointer-none color-red">Banco 3</h3 >
																	</div>
																</div>
																<div ref={animatedHeightBoxTresRef} className='slow-transition' style={{ height: '0px' }}>
																	<div style={{ overflow: 'hidden', height: '100%' }}>
																		<div className="row" style={{ alignItems: 'flex-end' }}>
																			<select style={{ marginLeft: '12px', marginBottom: '24px', width: '200px' }} value={bancoThree.banco} onChange={(e) => modifyBancoThree('banco', null, e.target.value)} required >
																				<option value="">Seleccione opcion</option>
																				<option value="value1">value1</option>
																				<option value="value2">value2</option>
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
							<h2 className='text-center'>Socios principales</h2>
							<hr />
							<div className="col-12">
								<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
									<span>Cantidad de socios principales</span >
									<select value={sociosPrincipales.cantidad} onChange={(e) => handleCantidadSocios(e.target.value)} required style={{ width: '55%' }}>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>
							{
								transitionSocioUno((style, visible) =>
									visible === true &&
									<animated.div style={style}>
										<h3>Tipo de persona 1</h3>
										<hr />
										<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PF", 1) }} className={` ${sociosPrincipales.socios[0].tipoPersona === "PF" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
												</div>
												<span className="text-center">Persona física</span>
											</div>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PFAE", 1) }} className={` ${sociosPrincipales.socios[0].tipoPersona === "PFAE" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
												</div>
												<span className="text-center">Persona física con actividad empresarial</span>
											</div>
										</div>
										<div className="row" style={{ alignItems: 'flex-end', marginTop: '16px' }}>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Nombre / razón social</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
										</div>
									</animated.div>
								)
							}
							{
								transitionSocioDos((style, visible) =>
									visible === true &&
									<animated.div style={style}>
										<h3>Tipo de persona 2</h3>
										<hr />
										<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PF", 2) }} className={` ${sociosPrincipales.socios[1].tipoPersona === "PF" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
												</div>
												<span className="text-center">Persona física</span>
											</div>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PFAE", 2) }} className={` ${sociosPrincipales.socios[1].tipoPersona === "PFAE" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
												</div>
												<span className="text-center">Persona física con actividad empresarial</span>
											</div>
										</div>
										<div className="row" style={{ alignItems: 'flex-end', marginTop: '16px' }}>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Nombre / razón social</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
										</div>
									</animated.div>
								)
							}
							{
								transitionSocioTres((style, visible) =>
									visible === true &&
									<animated.div style={style}>
										<h3>Tipo de persona 3</h3>
										<hr />
										<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PF", 3) }} className={` ${sociosPrincipales.socios[2].tipoPersona === "PF" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
												</div>
												<span className="text-center">Persona física</span>
											</div>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PFAE", 3) }} className={` ${sociosPrincipales.socios[2].tipoPersona === "PFAE" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
												</div>
												<span className="text-center">Persona física con actividad empresarial</span>
											</div>
										</div>
										<div className="row" style={{ alignItems: 'flex-end', marginTop: '16px' }}>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Nombre / razón social</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
										</div>
									</animated.div>
								)
							}
							{
								transitionSocioCuatro((style, visible) =>
									visible === true &&
									<animated.div style={style}>
										<h3>Tipo de persona 4</h3>
										<hr />
										<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PF", 4) }} className={` ${sociosPrincipales.socios[3].tipoPersona === "PF" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
												</div>
												<span className="text-center">Persona física</span>
											</div>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PFAE", 4) }} className={` ${sociosPrincipales.socios[3].tipoPersona === "PFAE" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
												</div>
												<span className="text-center">Persona física con actividad empresarial</span>
											</div>
										</div>
										<div className="row" style={{ alignItems: 'flex-end', marginTop: '16px' }}>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Nombre / razón social</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
										</div>
									</animated.div>
								)
							}
							{
								transitionSocioCinco((style, visible) =>
									visible === true &&
									<animated.div style={style}>
										<h3>Tipo de persona 5</h3>
										<hr />
										<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PF", 5) }} className={` ${sociosPrincipales.socios[4].tipoPersona === "PF" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
												</div>
												<span className="text-center">Persona física</span>
											</div>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<div onClick={() => { updateSociosPrincipales("PFAE", 5) }} className={` ${sociosPrincipales.socios[4].tipoPersona === "PFAE" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
													<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
												</div>
												<span className="text-center">Persona física con actividad empresarial</span>
											</div>
										</div>
										<div className="row" style={{ alignItems: 'flex-end', marginTop: '16px' }}>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Nombre / razón social</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input style={{ width: '55%' }} type="text" required />
												</div>
											</div>
										</div>
									</animated.div>
								)
							}
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
							<button onClick={() => handleSeccion(false)}>Atras</button>
							<button className="bgc-red" onClick={() => handleSeccion(true)}>Siguiente</button>
						</div>
					</animated.div>
				)
			}
			{
				transitionSeven((style, visible) =>
					visible &&
					<animated.div style={style}>
						<div className="container">
							<h2 className='text-center'>Principal accionista</h2>
							<hr />
							<h3>Tipo de persona</h3>
							<hr />
							<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
								<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
									<div onClick={() => { setPrincipalAccionista({ tipoPersona: "PF" }); }} className={` ${principalAccionista.tipoPersona === "PF" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
										<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
									</div>
									<span className="text-center">Persona física</span>
								</div>
								<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
									<div onClick={() => { setPrincipalAccionista({ tipoPersona: "PFAE" }); }} className={` ${principalAccionista.tipoPersona === "PFAE" ? 'bgc-red' : 'bgc-white'} hover-red pointer cool-shadow radius`} style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
										<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
									</div>
									<span className="text-center">Persona física con actividad empresarial</span>
								</div>
							</div>
							<div className="row" style={{ alignItems: 'flex-end', marginTop: '24px' }}>
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
										<span >Estado civil </span>
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
												¿Tiene más de un país de residencia fiscal?
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
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="accionistaEmpresa" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="accionistaEmpresa">
												El obligado es accionista u obligado de otra empresa
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="fiadorPFAE" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="fiadorPFAE">
												Es obligado o fiador de otra empresa o PFAE
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Total de nómina mensual </span>
										<input style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Fuente de ingresos </span>
										<input style={{ width: '55%' }} type="text" required />
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
										<span>Número interior</span >
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
	);
}

export default FormularioPersonaMoral;