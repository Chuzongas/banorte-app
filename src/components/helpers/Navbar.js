import React, { useState } from 'react';

import LogoBanorte from '../../svg/LogoBanorte'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { animated, useTransition } from 'react-spring';


const Navbar = ({ phone = true }) => {

	const [showNavbar, setShowNavbar] = useState(false);

	const navBarTransition = useTransition(showNavbar, {
		from: { opacity: '0', position: 'absolute', zIndex: '1', width: '100%', top: '0px' },
		enter: { opacity: '1', position: 'absolute', zIndex: '1', width: '100%', top: '0px' },
		leave: { opacity: '0', position: 'absolute', zIndex: '1', width: '100%', top: '0px' }
	})

	return (
		<>
			{
				window.innerWidth <= 991 ?
					<>
						<div className="my-navbar bgc-red" style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', position: 'fixed', zIndex: '1', top: '0px' }}>
							<LogoBanorte width={230} style={{ marginLeft: '12px' }} />
							<i onClick={() => setShowNavbar(!showNavbar)} className="ri-menu-line pointer" style={{ fontSize: '44px', marginRight: '12px' }}></i>
							{
								navBarTransition((style, visible) =>
									visible &&
									<animated.div style={style}>
										<div className='bgc-red' style={{ position: 'absolute', top: '70px', zIndex: '1', width: '100%', padding: '24px 0px' }}>
											<div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly', marginBottom: '32px' }}>
												<span><i style={{ fontSize: '32px' }} className="pointer ri-map-pin-2-fill white"></i></span>
												<span><i style={{ fontSize: '32px', marginLeft: '4px' }} className="pointer white ri-search-line"></i></span>
												<span><i style={{ fontSize: '32px', marginLeft: '4px' }} className="pointer white ri-lock-2-fill"></i></span>
											</div>
											<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
												<span className='pointer' style={{ marginBottom: '22px', fontSize: '24px' }}>PREFERENTE</span>
												<span onClick={() => window.location.href = "/formulario"} className='pointer' style={{ marginBottom: '22px', fontSize: '24px' }}>PYMES</span>
												<span className='pointer' style={{ marginBottom: '22px', fontSize: '24px' }}>EMPRESAS</span>
												<span className='pointer' style={{ marginBottom: '22px', fontSize: '24px' }}>GOBIERNO</span>
												<span className='pointer' style={{ fontSize: '24px' }}>CASA DE BOLSA</span>
											</div>
										</div>
									</animated.div>
								)
							}
						</div>
					</>
					:
					<div className="my-navbar bgc-red">
						<div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '972px', margin: '0px auto' }}>
							<LogoBanorte width={280} />
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<div style={{ marginRight: '16px' }}>
									<span className='pointer' style={{ margin: '4px' }}>PREFERENTE</span>
									<span onClick={() => window.location.href = "/formulario"} className='pointer' style={{ margin: '4px' }}>PYMES</span>
									<span className='pointer' style={{ margin: '4px' }}>EMPRESAS</span>
									<span className='pointer' style={{ margin: '4px' }}>GOBIERNO</span>
									<span className='pointer' style={{ margin: '4px' }}>CASA DE BOLSA</span>
								</div>
								<div style={{ marginLeft: '16px' }}>
									<span style={{ margin: '4px' }}><i style={{ fontSize: '24px' }} className="pointer ri-map-pin-2-fill white"></i></span>
									<span style={{ margin: '4px' }}><i style={{ fontSize: '24px', marginLeft: '4px' }} className="pointer white ri-search-line"></i></span>
									<span style={{ margin: '4px' }}><i style={{ fontSize: '24px', marginLeft: '4px' }} className="pointer white ri-lock-2-fill"></i></span>
								</div>
							</div>
						</div>
					</div>
			}
			{
				phone === true ?
					<div className="bgc-white" style={{ paddingTop: window.innerWidth <= 991 ? '70px' : '0px' }}>
						<div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<div className="row">
								<div className="col-12 col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<span>¿Ya tienes tu solicitud en proceso?</span>
								</div>
								<div className="col-12 col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<i style={{ fontSize: '38px', marginRight: '16px' }} className="ri-smartphone-line color-gray-2"></i>
									<PhoneInput
										country={'mx'}
									/>
								</div>
							</div>
						</div>
					</div>
					: window.innerWidth <= 991 &&
					<div style={{ paddingTop: '70px' }} />
					// ''
			}
		</>
	);
}

export default Navbar;