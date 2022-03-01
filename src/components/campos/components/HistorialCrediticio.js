import React from 'react';

const HistorialCrediticio = ({
	stateTieneunatarjetadecredito,
	setStateTieneunatarjetadecredito,
	stateDigitalosultimos4numeros,
	setStateDigitalosultimos4numeros,
	stateErestitulardeuncreditohipotecario,
	setStateErestitulardeuncreditohipotecario,
	setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses,
	stateHasidotitulardeuncreditoautomotrizenlosultimos24meses,
	stateHoySiendoDia,
	setStateHoySiendoDia,
	setShowResult,
	setSubMenuSelected,
}) => {
	return (
		<>
			<div className="container">
				<h2>HISTORIAL CREDITICIO</h2>
				<hr />
				<div className="row" style={{ alignItems: 'flex-end' }}>
					<div className="col-12">
						<div style={{ display: 'flex', width: '100%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
							<span>¿Tiene una tarjeta de crédito?</span>
							<div style={{ width: '55%', display: 'flex' }}>
								<button type='button' className={`${stateTieneunatarjetadecredito === true && 'bgc-red'}`} onClick={() => setStateTieneunatarjetadecredito(true)} style={{ width: '50%', fontSize: '24px' }}>Si</button>
								<button type='button' className={`${stateTieneunatarjetadecredito === false && 'bgc-red'}`} onClick={() => setStateTieneunatarjetadecredito(false)} style={{ width: '50%', fontSize: '24px' }}>No</button>
							</div>
						</div>
					</div>
					{
						stateTieneunatarjetadecredito === true &&
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Digita los últimos 4 numeros</span>
								<input state="" value={stateDigitalosultimos4numeros} onChange={(e) => setStateDigitalosultimos4numeros(e.target.value)} style={{ width: '55%' }} type="text" maxLength={4} required />
							</div>
						</div>
					}
					<div className="col-12">
						<div style={{ display: 'flex', width: '100%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
							<span>¿Eres titular de un crédito hipotecario?</span>
							<div style={{ width: '55%', display: 'flex' }}>
								<button type='button' className={`${stateErestitulardeuncreditohipotecario === true && 'bgc-red'}`} onClick={() => setStateErestitulardeuncreditohipotecario(true)} style={{ width: '50%', fontSize: '24px' }}>Si</button>
								<button type='button' className={`${stateErestitulardeuncreditohipotecario === false && 'bgc-red'}`} onClick={() => setStateErestitulardeuncreditohipotecario(false)} style={{ width: '50%', fontSize: '24px' }}>No</button>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', width: '100%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
							<span>¿Ha sido titular de un crédito automotriz en los últimos 24 meses?</span>
							<div style={{ width: '55%', display: 'flex' }}>
								<button type='button' className={`${stateHasidotitulardeuncreditoautomotrizenlosultimos24meses === true && 'bgc-red'}`} onClick={() => setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses(true)} style={{ width: '50%', fontSize: '24px' }}>Si</button>
								<button type='button' className={`${stateHasidotitulardeuncreditoautomotrizenlosultimos24meses === false && 'bgc-red'}`} onClick={() => setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses(false)} style={{ width: '50%', fontSize: '24px' }}>No</button>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', width: '100%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
							<div className="form-check">
								<input state="" defaultChecked={stateHoySiendoDia} onChange={(e) => setStateHoySiendoDia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="final" />
								<label style={{ marginLeft: '8px', fontSize: '12px' }} className="form-check-label" htmlFor="final">
									“Hoy siendo {((new Date).toLocaleDateString())} autorizo a Banco Mercantil del Norte, S.A. Institución de Banca Multiple Grupo Financiero Banorte, a consultar mis antecedentes crediticios por única ocasión ante las Sociedades de Información Crediticia que estime conveniente, declarando que conoce la naturaleza, alcance y uso que el Banco hará de tal información."
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
				{/* <button onClick={() => handleSeccion(false)}>Atras</button> */}
				<button className="bgc-red" onClick={() => { setShowResult(true); setSubMenuSelected(""); }}>Verificar</button>
			</div>
		</>
	);
}

export default HistorialCrediticio;