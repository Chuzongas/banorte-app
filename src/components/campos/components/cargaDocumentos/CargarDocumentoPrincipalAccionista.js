import React, { Fragment, useEffect, useState } from 'react';

import axios from 'axios'
import { proxy } from '../../../helpers/Proxy'

const CargarDocumentoPrincipalAccionista = ({
	setFileTwo,
	fileTwo,
	setShowResult
}) => {

	const [documentos, setDocumentos] = useState([]);

	useEffect(() => {

			var config = {
				method: 'get',
				url: `${proxy}/banortepyme/rest/consultaCatalogos/documentosSolicitantePFAE`,
				headers: {
					// 'Cookie': 'banorteAuto=M1TILQBnsXxghffQlO7tSo2u.c85ae8bd-4808-34a7-aeeb-04c09c4b9635',
				}
			};

			axios(config)
				.then(function (response) {
					setDocumentos(response.data);
				})
		
	}, [])


	const handleFiles = (files, index) => {

		let letFileOne = fileTwo

		let newArray = []

		for (let x = 0; x < files.length; x++) {
			URL.createObjectURL(files[0])

			newArray.push(URL.createObjectURL(files[x]))
		}

		letFileOne[index] = newArray

		setFileTwo(letFileOne)
	}


	return (
		<>
			<h1>Carga de documentos</h1>
			<hr />

			{
				documentos.map((item, i) => {
					return (
						<Fragment key={i}>
							<input onChange={(e) => handleFiles(e.target.files, i)} multiple={true} style={{ display: 'none' }} type="file" id={`file${i}`} />
							<div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
								<div className="border-gray-2" style={{ display: 'flex', width: '70%', padding: '4px' }}>
									{
										fileTwo[i] !== undefined &&
										<>
											<img src={fileTwo[i][0]} style={{ height: '50px', marginRight: '4px' }} />
											<img src={fileTwo[i][1]} style={{ height: '50px', marginRight: '4px' }} />
											<img src={fileTwo[i][2]} style={{ height: '50px', marginRight: '4px' }} />
										</>
									}
									<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start' }}>
										<span style={{ fontWeight: 'bold', textAlign: 'left' }}>{item.nombre}</span>
									</div>
								</div>
								<label htmlFor={`file${i}`} className="bgc-red pointer" style={{ height: '50px', padding: '0px 12px', display: 'inline-grid', placeContent: 'center' }}>Cargar</label>
							</div>
						</Fragment>
					)
				})
			}

			<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
				{/* <button onClick={() => handleSeccion(false)}>Atras</button> */}
				<button className="bgc-red" onClick={() => setShowResult(true)}>Enviar documentos</button>
			</div>
		</>
	);
}

export default CargarDocumentoPrincipalAccionista;