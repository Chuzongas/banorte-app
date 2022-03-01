import React from 'react';

const NavBarHistorialCrediticio = () => {

	const copyToClipboard = (text) => {
		const elem = document.createElement('textarea');
		elem.value = text;
		document.body.appendChild(elem);
		elem.select();
		document.execCommand('copy');
		document.body.removeChild(elem);
	}

	return (
		<>
			<div className="container">
				<div className="mb-3 navbarhistorialcrediticio" style={{ display: 'flex', gap: '24px', padding: '24px' }}>
					<div style={{ width: '100%' }}>

						<p style={{ fontSize: '24px', padding: '0px 16px' }} className="mt-3 text-center">Puedes regresar en cualquier momento para subir sus documentos usando su numero de folio</p>

						<div style={{ display: 'flex', justifyContent: 'space-around' }}>
							<div className="border-red" style={{ display: 'flex', alignItems: 'center', fontSize: '32px', padding: '8px 16px' }}>
								<span style={{ fontWeight: 'bold' }}>FOLIO:</span>
								<span className='color-red'>DKL356-123DA</span>
							</div>
							<div style={{ display: 'flex', gap: '24px' }}>
								<div style={{ display: 'flex', flexFlow: 'column' }}>
									<i className="ri-smartphone-line"></i>
									<i className="ri-mail-line"></i>
									<i className="ri-file-copy-line"></i>
								</div>
								<div style={{ display: 'flex', flexFlow: 'column' }}>
									<span>Enviar a mi celular</span>
									<span>Enviar por email</span>
									<span className='pointer' onClick={() => copyToClipboard("DKL356-123DA")}>Copiar folio a portapapeles</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBarHistorialCrediticio;