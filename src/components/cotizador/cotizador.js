import React from 'react';

const Cotizador = () => {
	return (
		<>
			<div className="top-formulario white" >
				<h1>Tu credito</h1>
			</div>
			<h2 className='text-center mt-3'>Valor de tu factura</h2>
			<div className="container">
				<div className="bgc-gray" style={{ maxWidth: '600px', margin: '0px auto', padding: '24px' }}>
					<div className="row">
						<div className="col-12 col-md-6 mx-auto">
							<div style={{ display: 'flex', marginBottom: '16px' }}>
								<div className='bgc-white' style={{ border: '1px solid var(--gray-color-2)', borderRight: '0px', display: 'grid', placeContent: 'center', height: '50px' }}>
									<i className="ri-money-dollar-circle-line color-gray-2" style={{ fontSize: '32px', margin: '0px 4px' }}></i>
								</div>
								<input type="text" className='big-input color-red' style={{ borderRight: '0px', fontWeight: 'bold', width: '100%', height: '50px' }} />
								<div className='bgc-white' style={{ border: '1px solid var(--gray-color-2)', display: 'grid', placeContent: 'center', padding: '0px 8px', height: '50px' }}>
									<p style={{ marginBottom: '0px' }}>MXN</p>
								</div>
							</div>
						</div>
						<p style={{ margin: '0px', textAlign: 'center' }}>Example range</p>
						<input type="range" className="form-range range" id="customRange1"></input>
						<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px' }}>
							<span>0%</span>
							<span>100%</span>
						</div>
						<div className="row">
							<div className="col-12 col-md-6">
								<h3 style={{ margin: '0px' }}>Monto del crédito</h3>
							</div>
							<div className="col-12 col-md-6">
								<div style={{ display: 'flex', marginBottom: '16px' }}>
									<div className='border-gray bgc-white' style={{ borderRight: '0px', display: 'grid', placeContent: 'center' }}>
										<i className="ri-money-dollar-circle-line color-gray-2" style={{ fontSize: '32px', margin: '0px 4px' }}></i>
									</div>
									<input type="text" className='big-input color-red' style={{ borderRight: '0px', fontWeight: 'bold', width: '100%' }} />
									<div className='border-gray bgc-white' style={{ borderLeft: '0px', display: 'grid', placeContent: 'center', padding: '0px 8px' }}>
										<p style={{ marginBottom: '0px' }}>MXN</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cotizador;