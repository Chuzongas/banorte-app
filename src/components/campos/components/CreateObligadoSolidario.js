import React from 'react';

const CreateObligadoSolidario = ({
	obligadoSolidario,
	handleSeccion
}) => {
	if (obligadoSolidario === "PF") {
		return (
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
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span >Estado de Nacimiento </span>
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span >Género </span>
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
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
									<option value="2">value</option>
									<option value="1">value</option>
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
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span >Total de dependientes </span>
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
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
									<option value="2">value</option>
									<option value="1">value</option>
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
								<input style={{ width: '55%' }} type="text" required />
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Estado</span >
								<input style={{ width: '55%' }} type="text" required />
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Tipo de Domicilio</span >
								<input style={{ width: '55%' }} type="text" required />
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Tipo de vivienda</span >
								<input style={{ width: '55%' }} type="text" required />
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
		)
	} else if (obligadoSolidario === "PFAE") {
		return (
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
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span >Estado de Nacimiento </span>
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span >Género </span>
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
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
									<option value="2">value</option>
									<option value="1">value</option>
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
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span >Total de dependientes </span>
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
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
									<option value="2">value</option>
									<option value="1">value</option>
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
								<input style={{ width: '55%' }} type="text" required />
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Estado</span >
								<input style={{ width: '55%' }} type="text" required />
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Tipo de Domicilio</span >
								<input style={{ width: '55%' }} type="text" required />
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Tipo de vivienda</span >
								<input style={{ width: '55%' }} type="text" required />
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
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Sector</span >
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Giro</span >
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
								</select>
							</div>
						</div>
						<div className="col-12">
							<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
								<span>Actividad</span >
								<select required style={{ width: '55%' }}>
									<option value="">Seleccione opcion</option>
									<option value="2">value</option>
									<option value="1">value</option>
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
			</>
		)
	}
	return (
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
								<option value="2">value</option>
								<option value="1">value</option>
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
							<input style={{ width: '55%' }} type="text" required />
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
							<span>Estado</span >
							<input style={{ width: '55%' }} type="text" required />
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
							<span>Tipo de Domicilio</span >
							<input style={{ width: '55%' }} type="text" required />
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
							<span>Tipo de vivienda</span >
							<input style={{ width: '55%' }} type="text" required />
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
								<option value="2">value</option>
								<option value="1">value</option>
							</select>
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
							<span>Sector</span >
							<select required style={{ width: '55%' }}>
								<option value="">Seleccione opcion</option>
								<option value="2">value</option>
								<option value="1">value</option>
							</select>
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
							<span>Giro</span >
							<select required style={{ width: '55%' }}>
								<option value="">Seleccione opcion</option>
								<option value="2">value</option>
								<option value="1">value</option>
							</select>
						</div>
					</div>
					<div className="col-12">
						<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
							<span>Actividad</span >
							<select required style={{ width: '55%' }}>
								<option value="">Seleccione opcion</option>
								<option value="2">value</option>
								<option value="1">value</option>
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
		</>
	);
}

export default CreateObligadoSolidario;