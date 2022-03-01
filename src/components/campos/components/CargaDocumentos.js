import React, { useEffect, useState } from 'react';
import CargarDocumentoOS1 from './cargaDocumentos/CargarDocumentoOS1';
import CargarDocumentoOS2 from './cargaDocumentos/CargarDocumentoOS2';
import CargarDocumentoOS3 from './cargaDocumentos/CargarDocumentoOS3';
import CargarDocumentoOS4 from './cargaDocumentos/CargarDocumentoOS4';
import CargarDocumentoOS5 from './cargaDocumentos/CargarDocumentoOS5';
import CargarDocumentoPrincipalAccionista from './cargaDocumentos/CargarDocumentoPrincipalAccionista';
import CargarDocumentoSolicitante from './cargaDocumentos/CargarDocumentoSolicitante';

const CargaDocumentos = ({
	setFileOne,
	fileOne,
	setFileTwo,
	fileTwo,
	setFileThree,
	fileThree,
	setFileFour,
	fileFour,
	setShowResult,
	tipoPersona,
	cantidadObligadosSolidarios,
	principalAccionista,
	setPrincipalAccionista,
	primerObligadoSolidario,
	segundoObligadoSolidario,
	tercerObligadoSolidario,
	setFileFive,
	fileFive,
	cuartoObligadoSolidario,
	setFileSix,
	fileSix,
	quintoObligadoSolidario,
}) => {

	const [selectedDocumentos, setSelectedDocumentos] = useState(1);
	const [options, setOptions] = useState([]);

	useEffect(() => {

		console.log(cantidadObligadosSolidarios)
		console.log(tipoPersona)

		if (tipoPersona === "PFAE") {

			let letOptions = []
			
			for (let i = 0; i < cantidadObligadosSolidarios; i++) {
				console.log(i)
				letOptions.push(i)
			}
			setOptions(letOptions)
		}else if (tipoPersona === "PM") {

			let letOptions = []
			
			for (let i = 0; i < cantidadObligadosSolidarios; i++) {
				console.log(i)
				letOptions.push(i)
			}
			setOptions(letOptions)
		}
	}, [cantidadObligadosSolidarios])


	return (
		<>
			<div className="container navigation" style={{ overflow: 'scroll', display: 'flex', alignItems: 'center', marginTop: '24px', gap: '24px' }}>
				{
					tipoPersona === "PFAE" &&
					<>
						<p className={`${selectedDocumentos === 1 ? 'bgc-red radius strong-shadow' : ''} pointer`} onClick={() => setSelectedDocumentos(1)} style={{ padding: '8px 16px' }} >Solicitante</p>
						{
							options.map(item => {
								return(
									<p key={item} className={`${selectedDocumentos === item + 2 ? 'bgc-red radius strong-shadow' : ''} pointer`} onClick={() => setSelectedDocumentos(item + 2)} style={{ padding: '8px 16px' }} >O. solidario número {item + 1}</p>
								)
							})
						}
					</>
				}
				{
					tipoPersona === "PM" &&
					<>
						<p className={`${selectedDocumentos === 1 ? 'bgc-red radius strong-shadow' : ''} pointer`} onClick={() => setSelectedDocumentos(1)} style={{ padding: '8px 16px' }} >Solicitante</p>
						<p className={`${selectedDocumentos === 2 ? 'bgc-red radius strong-shadow' : ''} pointer`} onClick={() => setSelectedDocumentos(2)} style={{ padding: '8px 16px' }} >Principal accionista</p>
						{
							options.map(item => {
								return(
									<p key={item} className={`${selectedDocumentos === item + 3 ? 'bgc-red radius strong-shadow' : ''} pointer`} onClick={() => setSelectedDocumentos(item + 3)} style={{ padding: '8px 16px' }} >O. solidario número {item + 1}</p>
								)
							})
						}
					</>
				}
			</div>

			{
				selectedDocumentos === 1 &&
				<CargarDocumentoSolicitante
					setFileOne={setFileOne}
					fileOne={fileOne}
					setShowResult={setShowResult}
					tipoPersona={tipoPersona}
				/>
			}
			{
				selectedDocumentos === 2 && tipoPersona === "PM" &&
				<CargarDocumentoPrincipalAccionista
					setFileTwo={setFileTwo}
					fileTwo={fileTwo}
					setShowResult={setShowResult}
					tipoPersona={tipoPersona}
					principalAccionista={principalAccionista}
					setPrincipalAccionista={setPrincipalAccionista}
				/>
			}
			{
				selectedDocumentos === 2 && tipoPersona === "PFAE" &&
				<CargarDocumentoOS1
					setFileThree={setFileThree}
					fileThree={fileThree}
					setShowResult={setShowResult}
					tipoPersona={tipoPersona}
					principalAccionista={principalAccionista}
					setPrincipalAccionista={setPrincipalAccionista}
					primerObligadoSolidario={primerObligadoSolidario}
				/>
			}
			{
				selectedDocumentos === 3 &&
				<CargarDocumentoOS2
					setFileThree={setFileThree}
					fileThree={fileThree}
					setShowResult={setShowResult}
					segundoObligadoSolidario={segundoObligadoSolidario}
				/>
			}
			{
				selectedDocumentos === 4 &&
				<CargarDocumentoOS3
					setFileFour={setFileFour}
					fileFour={fileFour}
					setShowResult={setShowResult}
					tercerObligadoSolidario={tercerObligadoSolidario}
				/>
			}
			{
				selectedDocumentos === 5 &&
				<CargarDocumentoOS4
					setFileFive={setFileFive}
					fileFive={fileFive}
					setShowResult={setShowResult}
					cuartoObligadoSolidario={cuartoObligadoSolidario}
				/>
			}
			{
				selectedDocumentos === 6 &&
				<CargarDocumentoOS5
					setFileSix={setFileSix}
					fileSix={fileSix}
					setShowResult={setShowResult}
					quintoObligadoSolidario={quintoObligadoSolidario}
				/>
			}

		</>
	);
}

export default CargaDocumentos;