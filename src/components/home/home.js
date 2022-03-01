import React, { useState } from 'react';

import { useTransition, animated } from 'react-spring'
import arrowImg from '../../img/arrow.png'
import SectionOne from './homeSections/SectionOne';


const Home = () => {

	// INPUT COTIZADOR
	const [cotizadorInput, setCotizadorInput] = useState('');

	const transitionEnter = useTransition(true, {
		from: { opacity: 0, },
		enter: { opacity: 1, },
		leave: { opacity: 0 },
	})

	const animateHeight = (e) => {

		// EDIT ICON AT LEFT
		let element = e.target.parentElement.nextSibling
		let newHeight = e.target.parentElement.nextSibling.children[0].children[0].clientHeight


		if (element.clientHeight === 0) {
			element.style.height = newHeight + 'px'
			e.target.parentElement.children[0].className = 'ri-subtract-line'
		} else {
			element.style.height = '0px'
			e.target.parentElement.children[0].className = 'ri-add-line'
		}
	}

	const handleCotizadorInputValue = (e) => {

		console.log(e.target.value)

		let { value } = e.target;

		if (value) {
			value = (Number(value.replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',');
			setCotizadorInput(value);
		} else {
			setCotizadorInput("");
		}

		value = "$" + value
		setCotizadorInput(value)
	}

	return (
		transitionEnter((styles, visible) =>
			visible &&
			<animated.div style={styles}>
				<section className='homepage-section-one' style={{ overflow: 'hidden' }} >
					<SectionOne />
				</section>
				<section className="hompage-section-two" style={{ marginTop: '32px' }}>
					<div className="container">
						<div className="row div-red-dots">
							<div className="col-12 col-sm-4">
								<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
									<div className='radius-super bgc-red' style={{ height: '32px', width: '32px' }} />
									<p style={{ marginTop: '8px', textAlign: 'center' }}><b>HASTA 24 MILLONES</b><br />de crédito para PYMES</p>
								</div>
							</div>
							<div className="col-12 col-sm-4">
								<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
									<div className='radius-super bgc-red' style={{ height: '32px', width: '32px' }} />
									<p style={{ marginTop: '8px', textAlign: 'center' }}><b>PRE APROBACIÓN</b><br />de inmediato</p>
								</div>
							</div>
							<div className="col-12 col-sm-4">
								<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
									<div className='radius-super bgc-red' style={{ height: '32px', width: '32px' }} />
									<p style={{ marginTop: '8px', textAlign: 'center' }}><b>HASTA 24 MILLONES</b><br />de crédito para PYMES</p>
								</div>
							</div>
						</div>

						<div className='bgc-gray-light' style={{ margin: '64px auto 0px auto', maxWidth: '800px' }}>
							<div style={{ padding: '24px', textAlign: 'center' }} className="bgc-gray-2 white">
								<h3 id="simula">Simula tu crédito empresarial en menos de 60'</h3>
								<p>Podrás solicitar el crédito Pyme que se adecúe a las necesidades de tu empresa.</p>
							</div>
							<div style={{ padding: '24px' }}>

								<div className="row">
									<div className="col-12 col-md-6">
										<h3 style={{ margin: '0px' }}>Monto del crédito</h3>
									</div>
									<div className="col-12 col-md-6">
										<div style={{ display: 'flex', marginBottom: '16px' }}>

											<div className='bgc-white' style={{ border: '1px solid var(--gray-color-2)', borderRight: '0px', display: 'grid', placeContent: 'center', height: '50px' }}>
												<i className="ri-money-dollar-circle-line color-gray-2" style={{ fontSize: '32px', margin: '0px 4px' }}></i>
											</div>
											<input onChange={handleCotizadorInputValue} value={cotizadorInput} type="text" className='big-input color-red' style={{ borderRight: '0px', fontWeight: 'bold', width: '100%', height: '50px' }} />
											<div className='bgc-white' style={{ border: '1px solid var(--gray-color-2)', display: 'grid', placeContent: 'center', padding: '0px 8px', height: '50px' }}>
												<p style={{ marginBottom: '0px' }}>MXN</p>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<h3 style={{ margin: '0px' }}>Plazo</h3>
									</div>
									<div className="col-12 col-md-6">
										<select style={{ marginBottom: '16px', width: '100%' }}>
											<option value="2">2 meses</option>
											<option value="4">4 meses</option>
											<option value="8">8 meses</option>
											<option value="16">16 meses</option>
											<option value="32">32 meses</option>
										</select>
									</div>
									<div className="col-12 col-md-6">
										<h3 style={{ margin: '0px' }}>Pago mensual</h3>
									</div>
									<div className="col-12 col-md-6">
										<div style={{ height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
											<h3 className='color-red' style={{ margin: '0px' }}>$ 6,000.38 mxn</h3>
										</div>
									</div>
									<div className="col-12">
										<p style={{ margin: '0px' }}>CAT <span className='color-red'>18%</span></p>
									</div>
								</div>
							</div>
							<div style={{ padding: '0px 24px 24px 24px' }}>
								<p style={{ fontSize: '12px' }}>
									CAT promedio XX.X% sin IVA. Para fines informativos y de comparación exclusivamente. Fecha de cálculo XX de XXXXX del 20XX. Vigencia al XX de XXXXX del 20XX. Tasa de variable calculada sobre un crédito con comisión por apertura. Costo anual total de créditos denominados en moneda nacional. Calculado sobre un crédito sin garantía real de $1,000,000 pesos a un plazo de 36 meses sobre esquema de amortizaciones iguales.
								</p>
							</div>
						</div>

						<div style={{ marginTop: '64px' }}>
							<div className="container" style={{ textAlign: 'center' }}>
								<h2 id="planes" className='color-red'>Te apoyamos para construir un mejor futuro</h2>
								<h5>Impulsamos tus proyectos para lograr éxito en tu negocio</h5>
							</div>
						</div>

					</div>
					<div className="container-fluid" style={{ marginTop: '64px', margin: '84px auto 0px auto', maxWidth: '1350px' }}>
						<div className="row cards-section" style={{ display: 'flex', flexFlow: 'row' }}>
							<div className="fast-transition pointer">
								<div className="strong-shadow fast-transition bgc-gray-2 my-card" style={{ height: '100%', overflow: 'hidden' }} onMouseOut={(e) => { e.target.parentElement.style.transform = ''; e.target.parentElement.children[0].style.borderTop = "0px" }} onMouseOver={(e) => { e.target.parentElement.style.transform = 'translateY(-20px)'; e.target.parentElement.children[0].style.borderTop = "2px solid var(--red-color)" }}>
									<div className='card-1-homepage card-img' style={{ pointerEvents: 'none' }} />
									<div className='white' style={{ height: 'calc(100% - 150px - 16px)', display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
										<p style={{ pointerEvents: 'none', fontWeight: 'bold', textAlign: 'center', padding: '24px 0px 24px 0px' }}>Micro Apoyo</p>
										<ul style={{ pointerEvents: 'none', fontSize: '12px', padding: '0px 12px 24px 32px', margin: '0px' }}>
											<li style={{ marginBottom: '24px' }}>
												<span>
													El crédito para el desarrollo de tu negocio (RIF), sin utilizar tu crédito personal.
												</span>
											</li>
											<li style={{ marginBottom: '24px' }}>
												<span>
													Financiamiento desde $30,000 hasta $300,00 pesos.
												</span>
											</li>
											<li>
												<span>
													¡El impulso que se necesita para hacer crecer tu negocio!.
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="fast-transition pointer">
								<div className="strong-shadow fast-transition bgc-gray-2 my-card" style={{ height: '100%', overflow: 'hidden' }} onMouseOut={(e) => { e.target.parentElement.style.transform = ''; e.target.parentElement.children[0].style.borderTop = "0px" }} onMouseOver={(e) => { e.target.parentElement.style.transform = 'translateY(-20px)'; e.target.parentElement.children[0].style.borderTop = "2px solid var(--red-color)" }}>
									<div className='card-2-homepage card-img' style={{ pointerEvents: 'none' }} />
									<div className='white' style={{ height: 'calc(100% - 150px - 16px)', display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
										<p style={{ pointerEvents: 'none', fontWeight: 'bold', textAlign: 'center', padding: '24px 0px 24px 0px' }}>Crediactivo Simple</p>
										<ul style={{ pointerEvents: 'none', fontSize: '12px', padding: '0px 12px 24px 32px', margin: '0px' }}>
											<li style={{ marginBottom: '24px' }}>
												<span>
													Crediactivo simple te otorga financiamiento por hasta $24 millones de pesos.
												</span>
											</li>
											<li style={{ marginBottom: '24px' }}>
												<span>
													El crédito para apoyar el crecimiento de tu negocio.
												</span>
											</li>
											<li>
												<span>
													Para fortalecer tu negocio en Activo Fijo y Capital de Trabajo.
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <div style={{ transform: 'translateY(-20px)' }}> */}
							<div className="fast-transition pointer">
								<div className="strong-shadow fast-transition bgc-gray-2 my-card" style={{ height: '100%', overflow: 'hidden' }} onMouseOut={(e) => { e.target.parentElement.style.transform = ''; e.target.parentElement.children[0].style.borderTop = "0px" }} onMouseOver={(e) => { e.target.parentElement.style.transform = 'translateY(-20px)'; e.target.parentElement.children[0].style.borderTop = "2px solid var(--red-color)" }}>
									<div className='card-3-homepage card-img' style={{ pointerEvents: 'none' }} />
									<div className='white' style={{ height: 'calc(100% - 150px - 16px)', display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
										<p style={{ pointerEvents: 'none', fontWeight: 'bold', textAlign: 'center', padding: '24px 0px 24px 0px' }}>Crediactivo <br /> Cuenta Corriente</p>
										<ul style={{ pointerEvents: 'none', fontSize: '12px', padding: '0px 12px 24px 32px', margin: '0px', position: 'relative' }}>
											<li style={{ marginBottom: '24px' }}>
												<span>
													Te otorga financiamiento por hasta $24 millones de pesos.
												</span>
											</li>
											<li style={{ marginBottom: '24px' }}>
												<span>
													Un respaldo para fortalecer tu flujo de operación y capital de trabajo.
												</span>
											</li>
											<li>
												<span>
													Hacer frente a cualquier imprevisto de tu negocio.
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="fast-transition pointer">
								<div className="strong-shadow fast-transition bgc-gray-2 my-card" style={{ height: '100%', overflow: 'hidden' }} onMouseOut={(e) => { e.target.parentElement.style.transform = ''; e.target.parentElement.children[0].style.borderTop = "0px" }} onMouseOver={(e) => { e.target.parentElement.style.transform = 'translateY(-20px)'; e.target.parentElement.children[0].style.borderTop = "2px solid var(--red-color)" }}>
									<div className='card-4-homepage card-img' style={{ pointerEvents: 'none' }} />
									<div className='white' style={{ height: 'calc(100% - 150px - 16px)', display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
										<p style={{ pointerEvents: 'none', fontWeight: 'bold', textAlign: 'center', padding: '24px 0px 24px 0px' }}>Crédito Empuje Negocios</p>
										<ul style={{ pointerEvents: 'none', fontSize: '12px', padding: '0px 12px 24px 32px', margin: '0px' }}>
											<li style={{ marginBottom: '24px' }}>
												<span>
													El crédito que cuenta con una tarjeta como medio de disposición para concentrar los gastos de tu negocio.
												</span>
											</li>
											<li style={{ marginBottom: '24px' }}>
												<span>
													Líneas de crédito desde $30 mil hasta $300 mil pesos.
												</span>
											</li>
											<li>
												<span>
													10 meses sin intereses en tu primer día de compras.
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="fast-transition pointer">
								<div className="strong-shadow fast-transition bgc-gray-2 my-card" style={{ height: '100%', overflow: 'hidden' }} onMouseOut={(e) => { e.target.parentElement.style.transform = ''; e.target.parentElement.children[0].style.borderTop = "0px" }} onMouseOver={(e) => { e.target.parentElement.style.transform = 'translateY(-20px)'; e.target.parentElement.children[0].style.borderTop = "2px solid var(--red-color)" }}>
									<div className='card-5-homepage card-img' style={{ pointerEvents: 'none' }} />
									<div className='white' style={{ height: 'calc(100% - 150px - 16px)', display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
										<p style={{ pointerEvents: 'none', fontWeight: 'bold', textAlign: 'center', padding: '24px 0px 24px 0px' }}>Crédito <br /> Negocios y Empresas</p>
										<ul style={{ pointerEvents: 'none', fontSize: '12px', padding: '0px 12px 24px 32px', margin: '0px' }}>
											<li style={{ marginBottom: '24px' }}>
												<span>
													El crédito para tu PYME para atender tus necesidades de Capital de Trabajo, por montos hasta $3 millones de pesos.
												</span>
											</li>
											<li style={{ marginBottom: '24px' }}>
												<span>
													Dirigido a Personas Físicas con Actividad Empresarial y Personas Morales, clientes y prospectos de la institución.
												</span>
											</li>
											<li>
												<span>
													No se requieren estados financieros.
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='hompage-section-three' style={{ marginTop: '64px' }}>
					<div className="container">
						<h1 id="pasos" className='color-red' style={{ textAlign: 'center', marginBottom: '0px' }}>Obtén tu crédito en 3 pasos sencillos</h1>
						<p style={{ textAlign: 'center' }}>Impulsamos tus proyectos para lograr éxito en tu negocio</p>
					</div>
					<div className='hompage-section-three-img' style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexFlow: 'column' }}>
						<div style={{ transform: 'translateX(-10%)' }}>
							<div className="container">
								<h2 className='color-red' style={{ marginBottom: '0px' }}>1. SELECCIONA EL MONTO DE TU CRÉDITO</h2>
								<p style={{ textAlign: 'center' }}>Desde $100,000 hasta $850,000 te damos de aprobación al instante</p>
							</div>
						</div>
						<div style={{ transform: 'translateX(0)' }}>
							<div className="container">
								<h2 className='color-red' style={{ marginBottom: '0px' }}>2. SUBE TODA TU DOCUMENTACIÓN ONLINE</h2>
								<p style={{ textAlign: 'center' }}>Sin salir de tu casa y desde cualquier dispositivo</p>
							</div>
						</div>
						<div style={{ transform: 'translateX(10%)' }}>
							<div className="container">
								<h2 className='color-red' style={{ marginBottom: '0px' }}>3. RECIBE TU PRE APROBACIÓN AL INSTANTE</h2>
								<p style={{ textAlign: 'center' }}>Te liberamos los fondos en menos de 24 horas <br /> para que tu negocio pueda seguir creciendo</p>
							</div>
						</div>
						<div style={{ display: 'flex', position: 'relative' }}>
							<img src={arrowImg} alt='arrow' style={{ position: 'absolute', transform: 'translate(calc(-100% - 12px), -50%)' }} />
							<button className='bgc-red'>Solicita tu crédito ahora</button>
						</div>
					</div>
				</section>
				<section className='bgc-red section-red-white-dots' style={{ padding: '64px 0px' }}>
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6">
								<h3 style={{ fontWeight: 'bold' }}>Requisitos del crédito para emprendedores</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur quisquam modi. Modi, ipsum deserunt nobis iusto quasi sunt harum?</p>
							</div>
							<div className="col-12 col-md-6">
								<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
									<div className='bgc-white radius-super' style={{ height: '12px', width: '12px', marginRight: '12px' }} />
									<span style={{ width: 'calc(100% - 24px - 12px)' }}>Edad de 25 hasta 68 años para personas físicas y hasta 75 para personas morales</span>
								</div>
								<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
									<div className='bgc-white radius-super' style={{ height: '12px', width: '12px', marginRight: '12px' }} />
									<span style={{ width: 'calc(100% - 24px - 12px)' }}>Persona física con actividad empresarial</span>
								</div>
								<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
									<div className='bgc-white radius-super' style={{ height: '12px', width: '12px', marginRight: '12px' }} />
									<span style={{ width: 'calc(100% - 24px - 12px)' }}>Antigüedad laboral de 3 meses o 3 meses de facturación</span>
								</div>
								<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
									<div className='bgc-white radius-super' style={{ height: '12px', width: '12px', marginRight: '12px' }} />
									<span style={{ width: 'calc(100% - 24px - 12px)' }}>Antigüedad de residencia de 3 meses</span>
								</div>
								<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
									<div className='bgc-white radius-super' style={{ height: '12px', width: '12px', marginRight: '12px' }} />
									<span style={{ width: 'calc(100% - 24px - 12px)' }}>Buen historial crediticio</span>
								</div>
								<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
									<div className='bgc-white radius-super' style={{ height: '12px', width: '12px', marginRight: '12px' }} />
									<span style={{ width: 'calc(100% - 24px - 12px)' }}>Identificación oficial vigente</span>
								</div>
								<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
									<div className='bgc-white radius-super' style={{ height: '12px', width: '12px', marginRight: '12px' }} />
									<span style={{ width: 'calc(100% - 24px - 12px)' }}>Comprobante de domicilio</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container" style={{ padding: '64px 0px' }}>
						<h2 id="faq" className='text-center color-red' style={{ marginBottom: '0px' }}>Preguntas frecuentes</h2>
						<p className='text-center'>Impulsamos tus proyectos para lograr éxito en tu negocio</p>

						<div style={{ maxWidth: '1000px', margin: '32px auto 0px auto' }}>
							<div style={{ marginBottom: '8px' }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<i style={{ fontSize: '24px' }} className="ri-add-line"></i>
									<p onClick={(e) => animateHeight(e)} style={{ fontSize: '20px' }} className='bold color-red pointer'>¿Se requiere incorporar una garantía hipotecaria?</p>
								</div>
								<div className='fast-transition' style={{ height: '0px' }}>
									<div style={{ overflow: 'hidden', height: '100%' }}>
										<p style={{ paddingLeft: '24px' }}>
											Dependiendo del tipo de crédito, el plazo y el programa al que pertenece, el cliente puede solo manifestar la propiedad libre de gravamen, en plazos largos si será necesario
										</p>
									</div>
								</div>
							</div>
							<div style={{ marginBottom: '8px' }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<i style={{ fontSize: '24px' }} className="ri-add-line"></i>
									<p onClick={(e) => animateHeight(e)} style={{ fontSize: '20px' }} className='bold color-red pointer'>¿Se requiere incorporar una garantía hipotecaria?</p>
								</div>
								<div className='fast-transition' style={{ height: '0px' }}>
									<div style={{ overflow: 'hidden', height: '100%' }}>
										<p style={{ paddingLeft: '24px' }}>
											Dependiendo del tipo de crédito, el plazo y el programa al que pertenece, el cliente puede solo manifestar la propiedad libre de gravamen, en plazos largos si será necesario
										</p>
									</div>
								</div>
							</div>
							<div style={{ marginBottom: '8px' }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<i style={{ fontSize: '24px' }} className="ri-add-line"></i>
									<p onClick={(e) => animateHeight(e)} style={{ fontSize: '20px' }} className='bold color-red pointer'>¿Se requiere incorporar una garantía hipotecaria?</p>
								</div>
								<div className='fast-transition' style={{ height: '0px' }}>
									<div style={{ overflow: 'hidden', height: '100%' }}>
										<p style={{ paddingLeft: '24px' }}>
											Dependiendo del tipo de crédito, el plazo y el programa al que pertenece, el cliente puede solo manifestar la propiedad libre de gravamen, en plazos largos si será necesario
										</p>
									</div>
								</div>
							</div>
							<div style={{ marginBottom: '8px' }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<i style={{ fontSize: '24px' }} className="ri-add-line"></i>
									<p onClick={(e) => animateHeight(e)} style={{ fontSize: '20px' }} className='bold color-red pointer'>¿Se requiere incorporar una garantía hipotecaria?</p>
								</div>
								<div className='fast-transition' style={{ height: '0px' }}>
									<div style={{ overflow: 'hidden', height: '100%' }}>
										<p style={{ paddingLeft: '24px' }}>
											Dependiendo del tipo de crédito, el plazo y el programa al que pertenece, el cliente puede solo manifestar la propiedad libre de gravamen, en plazos largos si será necesario
										</p>
									</div>
								</div>
							</div>
							<div style={{ marginBottom: '8px' }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<i style={{ fontSize: '24px' }} className="ri-add-line"></i>
									<p onClick={(e) => animateHeight(e)} style={{ fontSize: '20px' }} className='bold color-red pointer'>¿Se requiere incorporar una garantía hipotecaria?</p>
								</div>
								<div className='fast-transition' style={{ height: '0px' }}>
									<div style={{ overflow: 'hidden', height: '100%' }}>
										<p style={{ paddingLeft: '24px' }}>
											Dependiendo del tipo de crédito, el plazo y el programa al que pertenece, el cliente puede solo manifestar la propiedad libre de gravamen, en plazos largos si será necesario
										</p>
									</div>
								</div>
							</div>
							<div style={{ marginBottom: '8px' }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<i style={{ fontSize: '24px' }} className="ri-add-line"></i>
									<p onClick={(e) => animateHeight(e)} style={{ fontSize: '20px' }} className='bold color-red pointer'>¿Se requiere incorporar una garantía hipotecaria?</p>
								</div>
								<div className='fast-transition' style={{ height: '0px' }}>
									<div style={{ overflow: 'hidden', height: '100%' }}>
										<p style={{ paddingLeft: '24px' }}>
											Dependiendo del tipo de crédito, el plazo y el programa al que pertenece, el cliente puede solo manifestar la propiedad libre de gravamen, en plazos largos si será necesario
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='bgc-gray'>
					<div className="container navbar-downpage" style={{ height: '90px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}>
						<span className='pointer' style={{ margin: '4px' }}>PREFERENCIAS</span>
						<span className='pointer' style={{ margin: '4px' }}>RELACIÓN CON INVERSIONISTAS</span>
						<span className='pointer' style={{ margin: '4px' }}>GRUPO FINANCIERO BANORTE</span>
						<span className='pointer' style={{ margin: '4px' }}>EMPLEOS BANORTE</span>
					</div>
				</section>
				<section className='bgc-red'>
					<div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="container footer">
						<div style={{ display: 'flex' }}>
							<div className='bgc-white radius-super pointer' style={{ height: '36px', width: '36px', display: 'grid', placeContent: 'center', marginLeft: '4px' }}>
								<i style={{ fontSize: '24px' }} className="ri-facebook-fill color-red"></i>
							</div>
							<div className='bgc-white radius-super pointer' style={{ height: '36px', width: '36px', display: 'grid', placeContent: 'center', marginLeft: '4px' }}>
								<i style={{ fontSize: '24px' }} className="ri-twitter-fill color-red"></i>
							</div>
							<div className='bgc-white radius-super pointer' style={{ height: '36px', width: '36px', display: 'grid', placeContent: 'center', marginLeft: '4px' }}>
								<i style={{ fontSize: '24px' }} className="ri-youtube-fill color-red"></i>
							</div>
							<div className='bgc-white radius-super pointer' style={{ height: '36px', width: '36px', display: 'grid', placeContent: 'center', marginLeft: '4px' }}>
								<i style={{ fontSize: '24px' }} className="ri-instagram-fill color-red"></i>
							</div>
						</div>
						<div style={{ display: 'flex', flexFlow: 'column' }}>
							<div style={{ display: 'flex', wordBreak: 'nowrap', fontSize: '14px' }}>
								<span className="pointer">Términos legales</span>
								<span>&nbsp;|&nbsp;</span>
								<span className="pointer">Aviso de privacidad</span>
								<span>&nbsp;|&nbsp;</span>
								<span className="pointer">Consulta los costos y las comisiones de nuestros productos</span>
							</div>
							<div style={{ fontSize: '14px' }}>
								<span>{new Date().getFullYear()} Grupo financiero Banorte, derechos reservados.</span>
							</div>
						</div>
					</div>
				</section>
			</animated.div >
		)
	);
}

export default Home;