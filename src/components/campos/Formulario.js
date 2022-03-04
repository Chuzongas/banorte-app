import React, { useEffect, useRef, useState, Fragment } from 'react';
import { animated, useTransition } from 'react-spring';
import FormularioPersonaMoral from './components/FormularioPersonaMoral';

import axios from 'axios'
import { proxy } from '../helpers/Proxy'
import { localStorageAutoServicio, localStorageDatosOperacion } from '../helpers/Variables';
import Popup from '../tools/Popup';

import img from '../../img/creditoAprovado.jpg'
import tarjeta from '../../img/tarjeta.png'
import HistorialCrediticio from './components/HistorialCrediticio';
import NavBarHistorialCrediticio from './components/NavBarHistorialCrediticio';
import CargaDocumentos from './components/CargaDocumentos';

const Formulario = () => {

	const [cantidadObligadosSolidarios, setCantidadObligadosSolidarios] = useState(0);
	
	// MENU
	const [subMenuSelected, setSubMenuSelected] = useState("")

	// tbla amortizacion
	const [plazo, setPlazo] = useState(48)
	const [showTabla, setShowTabla] = useState(false);
	const [tablaData, setTablaData] = useState([])

	useEffect(() => {
		if (showTabla === true) {

			var config = {
				method: 'post',
				url: `${proxy}/banortepyme/rest/obtenerTablaAmortizacion?plazo=${plazo}&monto=${parseInt(credito.split('$')[1].replace(/,/g, ""))}`,
				headers: {
					// 'Cookie': 'banorteAuto=9kVRFc23oI4pPE4HAFJsY5In.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
				}
			};

			axios(config)
				.then(function (response) {
					// console.log(JSON.stringify(response.data));
					// console.log(response.data)
					setTablaData(response.data.resumenSimulacion)
				})
				.catch(function (error) {
					console.log(error);
				});

		}
	}, [showTabla])

	// FILES
	const [fileOne, setFileOne] = useState([]);
	const [fileTwo, setFileTwo] = useState([]);
	const [fileThree, setFileThree] = useState([]);
	const [fileFour, setFileFour] = useState([]);
	const [fileFive, setFileFive] = useState([]);
	const [fileSix, setFileSix] = useState([]);

	// POPUP
	const [showResult, setShowResult] = useState(false);
	const [showTarjeta, setShowTarjeta] = useState(false);
	const [loading, setLoading] = useState(false);

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

		// GET INFORMACION PASADA
		var config = {
			method: 'post',
			url: `${proxy}/banortepyme/rest/obtenerDatosCliente?idDatosTemporalesAutoservicio=${localStorage.getItem(localStorageAutoServicio)}&idDatosOperacion=${localStorage.getItem(localStorageDatosOperacion)}`,
			headers: {
				//   'Cookie': 'banorteAuto=b4tgryGgWfX5Q6E0G9gyri5J.c85ae8bd-4808-34a7-aeeb-04c09c4b9635'
			}
		};

		axios(config)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});


	}, [])

	//BIG STATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

	//------------HOME-----------
	//-----------PFAE---------------
	const [statePFAEGENERALESNombre, setStatePFAEGENERALESNombre] = useState("")
	const [statePFAEGENERALESApellidoPaterno, setStatePFAEGENERALESApellidoPaterno] = useState("")
	const [statePFAEGENERALESApellidoMaterno, setStatePFAEGENERALESApellidoMaterno] = useState("")
	const [statePFAEGENERALESFechadenacimiento, setStatePFAEGENERALESFechadenacimiento] = useState("")
	const [statePFAEGENERALESPaisdenacimiento, setStatePFAEGENERALESPaisdenacimiento] = useState("")
	const [statePFAEGENERALESEstadodeNacimiento, setStatePFAEGENERALESEstadodeNacimiento] = useState("")
	const [statePFAEGENERALESGenero, setStatePFAEGENERALESGenero] = useState("")
	const [statePFAEGENERALESRFC, setStatePFAEGENERALESRFC] = useState("")
	const [statePFAEGENERALESCURP, setStatePFAEGENERALESCURP] = useState("")
	const [statePFAEGENERALESFolioID, setStatePFAEGENERALESFolioID] = useState("")
	const [statePFAEGENERALESNacionalidad, setStatePFAEGENERALESNacionalidad] = useState("")
	const [statePFAEGENERALESCorreoelectronico, setStatePFAEGENERALESCorreoelectronico] = useState("")
	const [statePFAEGENERALESTelefono, setStatePFAEGENERALESTelefono] = useState("")
	const [statePFAEGENERALESCelular, setStatePFAEGENERALESCelular] = useState("")
	const [statePFAEGENERALESEstadoCivil, setStatePFAEGENERALESEstadoCivil] = useState("")
	const [statePFAEGENERALESMenoresde23anosquedependen, setStatePFAEGENERALESMenoresde23anosquedependen] = useState("")
	const [statePFAEGENERALESTotaldedependientes, setStatePFAEGENERALESTotaldedependientes] = useState("")
	const [statePFAEGENERALESNivelacademico, setStatePFAEGENERALESNivelacademico] = useState("")
	const [statePFAEGENERALESRelacionadoramajudicialGobiernoLegislativa, setStatePFAEGENERALESRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [statePFAEGENERALESTienemasdeunpaisderesidencia, setStatePFAEGENERALESTienemasdeunpaisderesidencia] = useState(false)
	const [statePFAEGENERALESTieneoadquiriolaresidenciadelosEUA, setStatePFAEGENERALESTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [statePFAEDOMICILIOCalle, setStatePFAEDOMICILIOCalle] = useState("")
	const [statePFAEDOMICILIONumeroExterior, setStatePFAEDOMICILIONumeroExterior] = useState("")
	const [statePFAEDOMICILIONumeroInterior, setStatePFAEDOMICILIONumeroInterior] = useState("")
	const [statePFAEDOMICILIOPiso, setStatePFAEDOMICILIOPiso] = useState("")
	const [statePFAEDOMICILIOPais, setStatePFAEDOMICILIOPais] = useState("")
	const [statePFAEDOMICILIOCP, setStatePFAEDOMICILIOCP] = useState("")
	const [statePFAEDOMICILIOColonia, setStatePFAEDOMICILIOColonia] = useState("")
	const [statePFAEDOMICILIODelegacionMunicipio, setStatePFAEDOMICILIODelegacionMunicipio] = useState("")
	const [statePFAEDOMICILIOEstado, setStatePFAEDOMICILIOEstado] = useState("")
	const [statePFAEDOMICILIOTipodeDomicilio, setStatePFAEDOMICILIOTipodeDomicilio] = useState("")
	const [statePFAEDOMICILIOTipodevivienda, setStatePFAEDOMICILIOTipodevivienda] = useState("")
	const [statePFAEDOMICILIOAntiguedadeneldomicilioactual, setStatePFAEDOMICILIOAntiguedadeneldomicilioactual] = useState("")
	const [statePFAEDOMICILIOImportedelarenta, setStatePFAEDOMICILIOImportedelarenta] = useState("")
	const [statePFAEDOMICILIOAntiguedadeneldomicilioanterior, setStatePFAEDOMICILIOAntiguedadeneldomicilioanterior] = useState("")
	const [statePFAEDOMICILIOEntrecalle1, setStatePFAEDOMICILIOEntrecalle1] = useState("")
	const [statePFAEDOMICILIOEntrecalle2, setStatePFAEDOMICILIOEntrecalle2] = useState("")
	const [statePFAEDOMICILIOFISCALCalle, setStatePFAEDOMICILIOFISCALCalle] = useState("")
	const [statePFAEDOMICILIOFISCALNumeroExterior, setStatePFAEDOMICILIOFISCALNumeroExterior] = useState("")
	const [statePFAEDOMICILIOFISCALNumeroInterior, setStatePFAEDOMICILIOFISCALNumeroInterior] = useState("")
	const [statePFAEDOMICILIOFISCALCP, setStatePFAEDOMICILIOFISCALCP] = useState("")
	const [statePFAEDOMICILIOFISCALColonia, setStatePFAEDOMICILIOFISCALColonia] = useState("")
	const [statePFAEDOMICILIOFISCALDelegacionMunicipio, setStatePFAEDOMICILIOFISCALDelegacionMunicipio] = useState("")
	const [statePFAEDOMICILIOFISCALEstado, setStatePFAEDOMICILIOFISCALEstado] = useState("")
	const [statePFAEDOMICILIOFISCALSector, setStatePFAEDOMICILIOFISCALSector] = useState("")
	const [statePFAEDOMICILIOFISCALGiro, setStatePFAEDOMICILIOFISCALGiro] = useState("")
	const [statePFAEDOMICILIOFISCALActividad, setStatePFAEDOMICILIOFISCALActividad] = useState("")
	const [statePFAEDOMICILIOFISCALFechaaltadeSHCP, setStatePFAEDOMICILIOFISCALFechaaltadeSHCP] = useState("")
	const [statePFAEDOMICILIOFISCALAnosdeexperienciaenelsector, setStatePFAEDOMICILIOFISCALAnosdeexperienciaenelsector] = useState("")
	const [statePFAEDOMICILIOFISCALImportarExportar, setStatePFAEDOMICILIOFISCALImportarExportar] = useState("")
	const [statePFAEDOMICILIOFISCALTotaldeempleados, setStatePFAEDOMICILIOFISCALTotaldeempleados] = useState("")
	const [statePFAEDOMICILIOFISCALNumerodesucursales, setStatePFAEDOMICILIOFISCALNumerodesucursales] = useState("")
	const [statePFAEDOMICILIOFISCALTipodelocal, setStatePFAEDOMICILIOFISCALTipodelocal] = useState("")
	const [statePFAEDOMICILIOFISCALAnosqueloharentado, setStatePFAEDOMICILIOFISCALAnosqueloharentado] = useState("")
	const [statePFAEDOMICILIOFISCALImporteRentaMensual, setStatePFAEDOMICILIOFISCALImporteRentaMensual] = useState("")
	const [statePFAEDOMICILIOFISCALAntiguedaddesuactividad, setStatePFAEDOMICILIOFISCALAntiguedaddesuactividad] = useState("")
	const [statePFAEDOMICILIOFISCALTotaldenominamensual, setStatePFAEDOMICILIOFISCALTotaldenominamensual] = useState("")
	const [statePFAEDOMICILIOCOMERCIALCalle, setStatePFAEDOMICILIOCOMERCIALCalle] = useState("")
	const [statePFAEDOMICILIOCOMERCIALNumeroExterior, setStatePFAEDOMICILIOCOMERCIALNumeroExterior] = useState("")
	const [statePFAEDOMICILIOCOMERCIALNumeroInterior, setStatePFAEDOMICILIOCOMERCIALNumeroInterior] = useState("")
	const [statePFAEDOMICILIOCOMERCIALCP, setStatePFAEDOMICILIOCOMERCIALCP] = useState("")
	const [statePFAEDOMICILIOCOMERCIALColonia, setStatePFAEDOMICILIOCOMERCIALColonia] = useState("")
	const [statePFAEDOMICILIOCOMERCIALDelegacionMunicipio, setStatePFAEDOMICILIOCOMERCIALDelegacionMunicipio] = useState("")
	const [statePFAEDOMICILIOCOMERCIALEstado, setStatePFAEDOMICILIOCOMERCIALEstado] = useState("")
	const [statePFAEDOMICILIOCOMERCIALTiempoderesidencia, setStatePFAEDOMICILIOCOMERCIALTiempoderesidencia] = useState("")
	const [statePFAEECONOMICOSVentasanuales, setStatePFAEECONOMICOSVentasanuales] = useState("")
	const [statePFAEECONOMICOSTipodecomprobantedeingresos, setStatePFAEECONOMICOSTipodecomprobantedeingresos] = useState("")
	const [statePFAEECONOMICOSFuentedeingresos, setStatePFAEECONOMICOSFuentedeingresos] = useState("")

	//-------------------------PM---------------------------
	const [statePMGENERALESRazonsocial, setStatePMGENERALESRazonsocial] = useState("")
	const [statePMGENERALESRFC, setStatePMGENERALESRFC] = useState("")
	const [statePMGENERALESNumerodeescritura, setStatePMGENERALESNumerodeescritura] = useState("")
	const [statePMGENERALESFechadealtaenSHCP, setStatePMGENERALESFechadealtaenSHCP] = useState("")
	const [statePMGENERALESDuraciondelasociedad, setStatePMGENERALESDuraciondelasociedad] = useState("")
	const [statePMGENERALESFoliomercantil, setStatePMGENERALESFoliomercantil] = useState("")
	const [statePMREPRESENTANTELEGALNombrecompleto, setStatePMREPRESENTANTELEGALNombrecompleto] = useState("")
	const [statePMREPRESENTANTELEGALCargo, setStatePMREPRESENTANTELEGALCargo] = useState("")
	const [statePMREPRESENTANTELEGALTelefono, setStatePMREPRESENTANTELEGALTelefono] = useState("")
	const [statePMCONTACTOEMPRESANombrecompleto, setStatePMCONTACTOEMPRESANombrecompleto] = useState("")
	const [statePMCONTACTOEMPRESACargo, setStatePMCONTACTOEMPRESACargo] = useState("")
	const [statePMCONTACTOEMPRESATelefono, setStatePMCONTACTOEMPRESATelefono] = useState("")
	const [statePMDOMICILIONEGOCIOCalle, setStatePMDOMICILIONEGOCIOCalle] = useState("")
	const [statePMDOMICILIONEGOCIONumeroexterior, setStatePMDOMICILIONEGOCIONumeroexterior] = useState("")
	const [statePMDOMICILIONEGOCIONumerointerior, setStatePMDOMICILIONEGOCIONumerointerior] = useState("")
	const [statePMDOMICILIONEGOCIOPiso, setStatePMDOMICILIONEGOCIOPiso] = useState("")
	const [statePMDOMICILIONEGOCIOPais, setStatePMDOMICILIONEGOCIOPais] = useState("")
	const [statePMDOMICILIONEGOCIOCP, setStatePMDOMICILIONEGOCIOCP] = useState("")
	const [statePMDOMICILIONEGOCIOColonia, setStatePMDOMICILIONEGOCIOColonia] = useState("")
	const [statePMDOMICILIONEGOCIODelegacionMunicipio, setStatePMDOMICILIONEGOCIODelegacionMunicipio] = useState("")
	const [statePMDOMICILIONEGOCIOEstado, setStatePMDOMICILIONEGOCIOEstado] = useState("")
	const [statePMDOMICILIONEGOCIOTipodevivienda, setStatePMDOMICILIONEGOCIOTipodevivienda] = useState("")
	const [statePMINFORMACIONNEGOCIOImportarexportar, setStatePMINFORMACIONNEGOCIOImportarexportar] = useState("")
	const [statePMINFORMACIONNEGOCIOSector, setStatePMINFORMACIONNEGOCIOSector] = useState("")
	const [statePMINFORMACIONNEGOCIOGiro, setStatePMINFORMACIONNEGOCIOGiro] = useState("")
	const [statePMINFORMACIONNEGOCIOActividad, setStatePMINFORMACIONNEGOCIOActividad] = useState("")
	const [statePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector, setStatePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector] = useState("")
	const [statePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad, setStatePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad] = useState("")
	const [statePMINFORMACIONNEGOCIOTotaldeempleados, setStatePMINFORMACIONNEGOCIOTotaldeempleados] = useState("")
	const [statePMINFORMACIONNEGOCIONumerodesucursales, setStatePMINFORMACIONNEGOCIONumerodesucursales] = useState("")
	const [statePMINFORMACIONNEGOCIOTipodelocal, setStatePMINFORMACIONNEGOCIOTipodelocal] = useState("")
	const [statePMINFORMACIONNEGOCIOAnosqueloharentado, setStatePMINFORMACIONNEGOCIOAnosqueloharentado] = useState("")
	const [statePMINFORMACIONNEGOCIOImporteRentaMensual, setStatePMINFORMACIONNEGOCIOImporteRentaMensual] = useState("")
	const [statePMINFORMACIONNEGOCIOTotaldenominamensual, setStatePMINFORMACIONNEGOCIOTotaldenominamensual] = useState("")
	const [statePMECONOMICOSVentasanuales, setStatePMECONOMICOSVentasanuales] = useState("")
	const [statePMECONOMICOSTipodecomprobantedeingresos, setStatePMECONOMICOSTipodecomprobantedeingresos] = useState("")
	const [statePMECONOMICOSFuentedeingresos, setStatePMECONOMICOSFuentedeingresos] = useState("")

	//----------------------SOCIOS-PRINCIPALES
	const [stateSP1Nombrerazonsocial, setStateSP1Nombrerazonsocial] = useState("")
	const [stateSP1Accionario, setStateSP1Accionario] = useState("")
	const [stateSP1RFC, setStateSP1RFC] = useState("")
	const [stateSP1Puestoenlaempresa, setStateSP1Puestoenlaempresa] = useState("")
	const [stateSP2Nombrerazonsocial, setStateSP2Nombrerazonsocial] = useState("")
	const [stateSP2Accionario, setStateSP2Accionario] = useState("")
	const [stateSP2RFC, setStateSP2RFC] = useState("")
	const [stateSP2Puestoenlaempresa, setStateSP2Puestoenlaempresa] = useState("")
	const [stateSP3Nombrerazonsocial, setStateSP3Nombrerazonsocial] = useState("")
	const [stateSP3Accionario, setStateSP3Accionario] = useState("")
	const [stateSP3RFC, setStateSP3RFC] = useState("")
	const [stateSP3Puestoenlaempresa, setStateSP3Puestoenlaempresa] = useState("")
	const [stateSP4Nombrerazonsocial, setStateSP4Nombrerazonsocial] = useState("")
	const [stateSP4Accionario, setStateSP4Accionario] = useState("")
	const [stateSP4RFC, setStateSP4RFC] = useState("")
	const [stateSP4Puestoenlaempresa, setStateSP4Puestoenlaempresa] = useState("")
	const [stateSP5Nombrerazonsocial, setStateSP5Nombrerazonsocial] = useState("")
	const [stateSP5Accionario, setStateSP5Accionario] = useState("")
	const [stateSP5RFC, setStateSP5RFC] = useState("")
	const [stateSP5Puestoenlaempresa, setStateSP5Puestoenlaempresa] = useState("")

	//-----------------------------PRINCIPAL-ACCIONISTA
	const [statePRINCIPALACCIONISTANombre, setStatePRINCIPALACCIONISTANombre] = useState("")
	const [statePRINCIPALACCIONISTAApellidoPaterno, setStatePRINCIPALACCIONISTAApellidoPaterno] = useState("")
	const [statePRINCIPALACCIONISTAApellidoMaterno, setStatePRINCIPALACCIONISTAApellidoMaterno] = useState("")
	const [statePRINCIPALACCIONISTAFechadenacimiento, setStatePRINCIPALACCIONISTAFechadenacimiento] = useState("")
	const [statePRINCIPALACCIONISTAPaisdenacimiento, setStatePRINCIPALACCIONISTAPaisdenacimiento] = useState("")
	const [statePRINCIPALACCIONISTAEstadodeNacimiento, setStatePRINCIPALACCIONISTAEstadodeNacimiento] = useState("")
	const [statePRINCIPALACCIONISTAGenero, setStatePRINCIPALACCIONISTAGenero] = useState("")
	const [statePRINCIPALACCIONISTARFC, setStatePRINCIPALACCIONISTARFC] = useState("")
	const [statePRINCIPALACCIONISTACURP, setStatePRINCIPALACCIONISTACURP] = useState("")
	const [statePRINCIPALACCIONISTAFolioID, setStatePRINCIPALACCIONISTAFolioID] = useState("")
	const [statePRINCIPALACCIONISTANacionalidad, setStatePRINCIPALACCIONISTANacionalidad] = useState("")
	const [statePRINCIPALACCIONISTACalidadmigratoria, setStatePRINCIPALACCIONISTACalidadmigratoria] = useState("")
	const [statePRINCIPALACCIONISTACorreoelectronico, setStatePRINCIPALACCIONISTACorreoelectronico] = useState("")
	const [statePRINCIPALACCIONISTATelefono, setStatePRINCIPALACCIONISTATelefono] = useState("")
	const [statePRINCIPALACCIONISTACelular, setStatePRINCIPALACCIONISTACelular] = useState("")
	const [statePRINCIPALACCIONISTAEstadocivil, setStatePRINCIPALACCIONISTAEstadocivil] = useState("")
	const [statePRINCIPALACCIONISTAMenoresde23anosquedependen, setStatePRINCIPALACCIONISTAMenoresde23anosquedependen] = useState("")
	const [statePRINCIPALACCIONISTATotaldedependientes, setStatePRINCIPALACCIONISTATotaldedependientes] = useState("")
	const [statePRINCIPALACCIONISTANivelacademico, setStatePRINCIPALACCIONISTANivelacademico] = useState("")
	const [statePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa, setStatePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [statePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal, setStatePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal] = useState("")
	const [statePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA, setStatePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [statePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa, setStatePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [statePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE, setStatePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [statePRINCIPALACCIONISTATotaldenominamensual, setStatePRINCIPALACCIONISTATotaldenominamensual] = useState("")
	const [statePRINCIPALACCIONISTAFuentedeingresos, setStatePRINCIPALACCIONISTAFuentedeingresos] = useState("")
	const [statePRINCIPALACCIONISTAInformaciondedomicilio, setStatePRINCIPALACCIONISTAInformaciondedomicilio] = useState("")
	const [statePRINCIPALACCIONISTACalle, setStatePRINCIPALACCIONISTACalle] = useState("")
	const [statePRINCIPALACCIONISTANumerointerior, setStatePRINCIPALACCIONISTANumerointerior] = useState("")
	const [statePRINCIPALACCIONISTANumeroexterior, setStatePRINCIPALACCIONISTANumeroexterior] = useState("")
	const [statePRINCIPALACCIONISTAPiso, setStatePRINCIPALACCIONISTAPiso] = useState("")
	const [statePRINCIPALACCIONISTAPais, setStatePRINCIPALACCIONISTAPais] = useState("")
	const [statePRINCIPALACCIONISTACP, setStatePRINCIPALACCIONISTACP] = useState("")
	const [statePRINCIPALACCIONISTAColonia, setStatePRINCIPALACCIONISTAColonia] = useState("")
	const [statePRINCIPALACCIONISTADelegacionMunicipio, setStatePRINCIPALACCIONISTADelegacionMunicipio] = useState("")
	const [statePRINCIPALACCIONISTAEstado, setStatePRINCIPALACCIONISTAEstado] = useState("")
	const [statePRINCIPALACCIONISTATipodeDomicilio, setStatePRINCIPALACCIONISTATipodeDomicilio] = useState("")
	const [statePRINCIPALACCIONISTATipodevivienda, setStatePRINCIPALACCIONISTATipodevivienda] = useState("")
	const [statePRINCIPALACCIONISTAAntiguedadeneldomicilioactual, setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioactual] = useState("")
	const [statePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior, setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior] = useState("")
	const [statePRINCIPALACCIONISTAEntrecalle1, setStatePRINCIPALACCIONISTAEntrecalle1] = useState("")
	const [statePRINCIPALACCIONISTAEntrecalle2, setStatePRINCIPALACCIONISTAEntrecalle2] = useState("")


	//------------------OBLIGADO-SOLIDARIOS----------------

	//-----------1------------------
	//-----------PF-----------------
	const [stateOS1PFNombre, setStateOS1PFNombre] = useState("")
	const [stateOS1PFApellidoPaterno, setStateOS1PFApellidoPaterno] = useState("")
	const [stateOS1PFApellidoMaterno, setStateOS1PFApellidoMaterno] = useState("")
	const [stateOS1PFFechadenacimiento, setStateOS1PFFechadenacimiento] = useState("")
	const [stateOS1PFPaisdenacimiento, setStateOS1PFPaisdenacimiento] = useState("")
	const [stateOS1PFEstadodeNacimiento, setStateOS1PFEstadodeNacimiento] = useState("")
	const [stateOS1PFGenero, setStateOS1PFGenero] = useState("")
	const [stateOS1PFRFC, setStateOS1PFRFC] = useState("")
	const [stateOS1PFCURP, setStateOS1PFCURP] = useState("")
	const [stateOS1PFFolioID, setStateOS1PFFolioID] = useState("")
	const [stateOS1PFNacionalidad, setStateOS1PFNacionalidad] = useState("")
	const [stateOS1PFCalidadmigratoria, setStateOS1PFCalidadmigratoria] = useState("")
	const [stateOS1PFCorreoelectronico, setStateOS1PFCorreoelectronico] = useState("")
	const [stateOS1PFTelefono, setStateOS1PFTelefono] = useState("")
	const [stateOS1PFCelular, setStateOS1PFCelular] = useState("")
	const [stateOS1PFMenoresde23anosquedependen, setStateOS1PFMenoresde23anosquedependen] = useState("")
	const [stateOS1PFTotaldedependientes, setStateOS1PFTotaldedependientes] = useState("")
	const [stateOS1PFRelacionconelsolicitante, setStateOS1PFRelacionconelsolicitante] = useState("")
	const [stateOS1PFRelacionadoramajudicialGobiernoLegislativa, setStateOS1PFRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS1PFTienemasdeunpaisderesidencia, setStateOS1PFTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS1PFTieneoadquiriolaresidenciadelosEUA, setStateOS1PFTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS1PFElobligadoesaccionistauobligadodeotraempresa, setStateOS1PFElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS1PFEsobligadoofiadordeotraempresaoPFAE, setStateOS1PFEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS1PFNumeroInterior, setStateOS1PFNumeroInterior] = useState("")
	const [stateOS1PFPiso, setStateOS1PFPiso] = useState("")
	const [stateOS1PFPais, setStateOS1PFPais] = useState("")
	const [stateOS1PFCP, setStateOS1PFCP] = useState("")
	const [stateOS1PFColonia, setStateOS1PFColonia] = useState("")
	const [stateOS1PFDelegacionMunicipio, setStateOS1PFDelegacionMunicipio] = useState("")
	const [stateOS1PFEstado, setStateOS1PFEstado] = useState("")
	const [stateOS1PFTipodeDomicilio, setStateOS1PFTipodeDomicilio] = useState("")
	const [stateOS1PFTipodevivienda, setStateOS1PFTipodevivienda] = useState("")
	const [stateOS1PFAntiguedadeneldomicilioactual, setStateOS1PFAntiguedadeneldomicilioactual] = useState("")
	const [stateOS1PFAntiguedadeneldomicilioanterior, setStateOS1PFAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS1PFEntrecalle1, setStateOS1PFEntrecalle1] = useState("")
	const [stateOS1PFEntrecalle2, setStateOS1PFEntrecalle2] = useState("")

	//------------------PFAE---------------------
	const [stateOS1PFAENombre, setStateOS1PFAENombre] = useState("")
	const [stateOS1PFAEApellidoPaterno, setStateOS1PFAEApellidoPaterno] = useState("")
	const [stateOS1PFAEApellidoMaterno, setStateOS1PFAEApellidoMaterno] = useState("")
	const [stateOS1PFAEFechadenacimiento, setStateOS1PFAEFechadenacimiento] = useState("")
	const [stateOS1PFAEPaisdenacimiento, setStateOS1PFAEPaisdenacimiento] = useState("")
	const [stateOS1PFAEEstadodeNacimiento, setStateOS1PFAEEstadodeNacimiento] = useState("")
	const [stateOS1PFAEGenero, setStateOS1PFAEGenero] = useState("")
	const [stateOS1PFAERFC, setStateOS1PFAERFC] = useState("")
	const [stateOS1PFAECURP, setStateOS1PFAECURP] = useState("")
	const [stateOS1PFAEFolioID, setStateOS1PFAEFolioID] = useState("")
	const [stateOS1PFAENacionalidad, setStateOS1PFAENacionalidad] = useState("")
	const [stateOS1PFAECalidadmigratoria, setStateOS1PFAECalidadmigratoria] = useState("")
	const [stateOS1PFAECorreoelectronico, setStateOS1PFAECorreoelectronico] = useState("")
	const [stateOS1PFAETelefono, setStateOS1PFAETelefono] = useState("")
	const [stateOS1PFAECelular, setStateOS1PFAECelular] = useState("")
	const [stateOS1PFAEMenoresde23anosquedependen, setStateOS1PFAEMenoresde23anosquedependen] = useState("")
	const [stateOS1PFAETotaldedependientes, setStateOS1PFAETotaldedependientes] = useState("")
	const [stateOS1PFAERelacionconelsolicitante, setStateOS1PFAERelacionconelsolicitante] = useState("")
	const [stateOS1PFAERelacionadoramajudicialGobiernoLegislativa, setStateOS1PFAERelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS1PFAETienemasdeunpaisderesidencia, setStateOS1PFAETienemasdeunpaisderesidencia] = useState(false)
	const [stateOS1PFAETieneoadquiriolaresidenciadelosEUA, setStateOS1PFAETieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS1PFAEElobligadoesaccionistauobligadodeotraempresa, setStateOS1PFAEElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS1PFAEEsobligadoofiadordeotraempresaoPFAE, setStateOS1PFAEEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS1PFAENumeroInterior, setStateOS1PFAENumeroInterior] = useState("")
	const [stateOS1PFAEPiso, setStateOS1PFAEPiso] = useState("")
	const [stateOS1PFAEPais, setStateOS1PFAEPais] = useState("")
	const [stateOS1PFAECP, setStateOS1PFAECP] = useState("")
	const [stateOS1PFAEColonia, setStateOS1PFAEColonia] = useState("")
	const [stateOS1PFAEDelegacionMunicipio, setStateOS1PFAEDelegacionMunicipio] = useState("")
	const [stateOS1PFAEEstado, setStateOS1PFAEEstado] = useState("")
	const [stateOS1PFAETipodeDomicilio, setStateOS1PFAETipodeDomicilio] = useState("")
	const [stateOS1PFAETipodevivienda, setStateOS1PFAETipodevivienda] = useState("")
	const [stateOS1PFAEAntiguedadeneldomicilioactual, setStateOS1PFAEAntiguedadeneldomicilioactual] = useState("")
	const [stateOS1PFAEAntiguedadeneldomicilioanterior, setStateOS1PFAEAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS1PFAEEntrecalle1, setStateOS1PFAEEntrecalle1] = useState("")
	const [stateOS1PFAEEntrecalle2, setStateOS1PFAEEntrecalle2] = useState("")
	const [stateOS1PFAEImportarexportar, setStateOS1PFAEImportarexportar] = useState("")
	const [stateOS1PFAESector, setStateOS1PFAESector] = useState("")
	const [stateOS1PFAEGiro, setStateOS1PFAEGiro] = useState("")
	const [stateOS1PFAEActividad, setStateOS1PFAEActividad] = useState("")
	const [stateOS1PFAEFechadealtaenSHCP, setStateOS1PFAEFechadealtaenSHCP] = useState("")
	const [stateOS1PFAENumerodesucursales, setStateOS1PFAENumerodesucursales] = useState("")
	const [stateOS1PFAEAnosdeexperienciaenelsector, setStateOS1PFAEAnosdeexperienciaenelsector] = useState("")

	//--------------------PM-----------------------
	const [stateOS1PMRazonsocial, setStateOS1PMRazonsocial] = useState("")
	const [stateOS1PMRFC, setStateOS1PMRFC] = useState("")
	const [stateOS1PMCorreoelectronico, setStateOS1PMCorreoelectronico] = useState("")
	const [stateOS1PMFechadealtaenSHCP, setStateOS1PMFechadealtaenSHCP] = useState("")
	const [stateOS1PMRelacionadoramajudicialGobiernoLegislativa, setStateOS1PMRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS1PMTienemasdeunpaisderesidencia, setStateOS1PMTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS1PMTieneoadquiriolaresidenciadelosEUA, setStateOS1PMTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS1PMElobligadoesaccionistauobligadodeotraempresa, setStateOS1PMElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS1PMEsobligadoofiadordeotraempresaoPFAE, setStateOS1PMEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS1PMNombrecompleto, setStateOS1PMNombrecompleto] = useState("")
	const [stateOS1PMCargo, setStateOS1PMCargo] = useState("")
	const [stateOS1PMTelefono, setStateOS1PMTelefono] = useState("")
	const [stateOS1PMCalle, setStateOS1PMCalle] = useState("")
	const [stateOS1PMNumeroexterior, setStateOS1PMNumeroexterior] = useState("")
	const [stateOS1PMNumerointerior, setStateOS1PMNumerointerior] = useState("")
	const [stateOS1PMPiso, setStateOS1PMPiso] = useState("")
	const [stateOS1PMPais, setStateOS1PMPais] = useState("")
	const [stateOS1PMCP, setStateOS1PMCP] = useState("")
	const [stateOS1PMColonia, setStateOS1PMColonia] = useState("")
	const [stateOS1PMDelegacionMunicipio, setStateOS1PMDelegacionMunicipio] = useState("")
	const [stateOS1PMEstado, setStateOS1PMEstado] = useState("")
	const [stateOS1PMTipodeDomicilio, setStateOS1PMTipodeDomicilio] = useState("")
	const [stateOS1PMTipodevivienda, setStateOS1PMTipodevivienda] = useState("")
	const [stateOS1PMEntrecalle1, setStateOS1PMEntrecalle1] = useState("")
	const [stateOS1PMEntrecalle2, setStateOS1PMEntrecalle2] = useState("")
	const [stateOS1PMImportarexportar, setStateOS1PMImportarexportar] = useState("")
	const [stateOS1PMSector, setStateOS1PMSector] = useState("")
	const [stateOS1PMGiro, setStateOS1PMGiro] = useState("")
	const [stateOS1PMActividad, setStateOS1PMActividad] = useState("")
	const [stateOS1PMNumerodesucursales, setStateOS1PMNumerodesucursales] = useState("")
	const [stateOS1PMAnosdeexperienciaenelsector, setStateOS1PMAnosdeexperienciaenelsector] = useState("")

	//-----------2------------------
	//-----------PF-----------------
	const [stateOS2PFNombre, setStateOS2PFNombre] = useState("")
	const [stateOS2PFApellidoPaterno, setStateOS2PFApellidoPaterno] = useState("")
	const [stateOS2PFApellidoMaterno, setStateOS2PFApellidoMaterno] = useState("")
	const [stateOS2PFFechadenacimiento, setStateOS2PFFechadenacimiento] = useState("")
	const [stateOS2PFPaisdenacimiento, setStateOS2PFPaisdenacimiento] = useState("")
	const [stateOS2PFEstadodeNacimiento, setStateOS2PFEstadodeNacimiento] = useState("")
	const [stateOS2PFGenero, setStateOS2PFGenero] = useState("")
	const [stateOS2PFRFC, setStateOS2PFRFC] = useState("")
	const [stateOS2PFCURP, setStateOS2PFCURP] = useState("")
	const [stateOS2PFFolioID, setStateOS2PFFolioID] = useState("")
	const [stateOS2PFNacionalidad, setStateOS2PFNacionalidad] = useState("")
	const [stateOS2PFCalidadmigratoria, setStateOS2PFCalidadmigratoria] = useState("")
	const [stateOS2PFCorreoelectronico, setStateOS2PFCorreoelectronico] = useState("")
	const [stateOS2PFTelefono, setStateOS2PFTelefono] = useState("")
	const [stateOS2PFCelular, setStateOS2PFCelular] = useState("")
	const [stateOS2PFMenoresde23anosquedependen, setStateOS2PFMenoresde23anosquedependen] = useState("")
	const [stateOS2PFTotaldedependientes, setStateOS2PFTotaldedependientes] = useState("")
	const [stateOS2PFRelacionconelsolicitante, setStateOS2PFRelacionconelsolicitante] = useState("")
	const [stateOS2PFRelacionadoramajudicialGobiernoLegislativa, setStateOS2PFRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS2PFTienemasdeunpaisderesidencia, setStateOS2PFTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS2PFTieneoadquiriolaresidenciadelosEUA, setStateOS2PFTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS2PFElobligadoesaccionistauobligadodeotraempresa, setStateOS2PFElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS2PFEsobligadoofiadordeotraempresaoPFAE, setStateOS2PFEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS2PFNumeroInterior, setStateOS2PFNumeroInterior] = useState("")
	const [stateOS2PFPiso, setStateOS2PFPiso] = useState("")
	const [stateOS2PFPais, setStateOS2PFPais] = useState("")
	const [stateOS2PFCP, setStateOS2PFCP] = useState("")
	const [stateOS2PFColonia, setStateOS2PFColonia] = useState("")
	const [stateOS2PFDelegacionMunicipio, setStateOS2PFDelegacionMunicipio] = useState("")
	const [stateOS2PFEstado, setStateOS2PFEstado] = useState("")
	const [stateOS2PFTipodeDomicilio, setStateOS2PFTipodeDomicilio] = useState("")
	const [stateOS2PFTipodevivienda, setStateOS2PFTipodevivienda] = useState("")
	const [stateOS2PFAntiguedadeneldomicilioactual, setStateOS2PFAntiguedadeneldomicilioactual] = useState("")
	const [stateOS2PFAntiguedadeneldomicilioanterior, setStateOS2PFAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS2PFEntrecalle1, setStateOS2PFEntrecalle1] = useState("")
	const [stateOS2PFEntrecalle2, setStateOS2PFEntrecalle2] = useState("")

	//------------------PFAE---------------------
	const [stateOS2PFAENombre, setStateOS2PFAENombre] = useState("")
	const [stateOS2PFAEApellidoPaterno, setStateOS2PFAEApellidoPaterno] = useState("")
	const [stateOS2PFAEApellidoMaterno, setStateOS2PFAEApellidoMaterno] = useState("")
	const [stateOS2PFAEFechadenacimiento, setStateOS2PFAEFechadenacimiento] = useState("")
	const [stateOS2PFAEPaisdenacimiento, setStateOS2PFAEPaisdenacimiento] = useState("")
	const [stateOS2PFAEEstadodeNacimiento, setStateOS2PFAEEstadodeNacimiento] = useState("")
	const [stateOS2PFAEGenero, setStateOS2PFAEGenero] = useState("")
	const [stateOS2PFAERFC, setStateOS2PFAERFC] = useState("")
	const [stateOS2PFAECURP, setStateOS2PFAECURP] = useState("")
	const [stateOS2PFAEFolioID, setStateOS2PFAEFolioID] = useState("")
	const [stateOS2PFAENacionalidad, setStateOS2PFAENacionalidad] = useState("")
	const [stateOS2PFAECalidadmigratoria, setStateOS2PFAECalidadmigratoria] = useState("")
	const [stateOS2PFAECorreoelectronico, setStateOS2PFAECorreoelectronico] = useState("")
	const [stateOS2PFAETelefono, setStateOS2PFAETelefono] = useState("")
	const [stateOS2PFAECelular, setStateOS2PFAECelular] = useState("")
	const [stateOS2PFAEMenoresde23anosquedependen, setStateOS2PFAEMenoresde23anosquedependen] = useState("")
	const [stateOS2PFAETotaldedependientes, setStateOS2PFAETotaldedependientes] = useState("")
	const [stateOS2PFAERelacionconelsolicitante, setStateOS2PFAERelacionconelsolicitante] = useState("")
	const [stateOS2PFAERelacionadoramajudicialGobiernoLegislativa, setStateOS2PFAERelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS2PFAETienemasdeunpaisderesidencia, setStateOS2PFAETienemasdeunpaisderesidencia] = useState(false)
	const [stateOS2PFAETieneoadquiriolaresidenciadelosEUA, setStateOS2PFAETieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS2PFAEElobligadoesaccionistauobligadodeotraempresa, setStateOS2PFAEElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS2PFAEEsobligadoofiadordeotraempresaoPFAE, setStateOS2PFAEEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS2PFAENumeroInterior, setStateOS2PFAENumeroInterior] = useState("")
	const [stateOS2PFAEPiso, setStateOS2PFAEPiso] = useState("")
	const [stateOS2PFAEPais, setStateOS2PFAEPais] = useState("")
	const [stateOS2PFAECP, setStateOS2PFAECP] = useState("")
	const [stateOS2PFAEColonia, setStateOS2PFAEColonia] = useState("")
	const [stateOS2PFAEDelegacionMunicipio, setStateOS2PFAEDelegacionMunicipio] = useState("")
	const [stateOS2PFAEEstado, setStateOS2PFAEEstado] = useState("")
	const [stateOS2PFAETipodeDomicilio, setStateOS2PFAETipodeDomicilio] = useState("")
	const [stateOS2PFAETipodevivienda, setStateOS2PFAETipodevivienda] = useState("")
	const [stateOS2PFAEAntiguedadeneldomicilioactual, setStateOS2PFAEAntiguedadeneldomicilioactual] = useState("")
	const [stateOS2PFAEAntiguedadeneldomicilioanterior, setStateOS2PFAEAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS2PFAEEntrecalle1, setStateOS2PFAEEntrecalle1] = useState("")
	const [stateOS2PFAEEntrecalle2, setStateOS2PFAEEntrecalle2] = useState("")
	const [stateOS2PFAEImportarexportar, setStateOS2PFAEImportarexportar] = useState("")
	const [stateOS2PFAESector, setStateOS2PFAESector] = useState("")
	const [stateOS2PFAEGiro, setStateOS2PFAEGiro] = useState("")
	const [stateOS2PFAEActividad, setStateOS2PFAEActividad] = useState("")
	const [stateOS2PFAEFechadealtaenSHCP, setStateOS2PFAEFechadealtaenSHCP] = useState("")
	const [stateOS2PFAENumerodesucursales, setStateOS2PFAENumerodesucursales] = useState("")
	const [stateOS2PFAEAnosdeexperienciaenelsector, setStateOS2PFAEAnosdeexperienciaenelsector] = useState("")

	//--------------------PM-----------------------
	const [stateOS2PMRazonsocial, setStateOS2PMRazonsocial] = useState("")
	const [stateOS2PMRFC, setStateOS2PMRFC] = useState("")
	const [stateOS2PMCorreoelectronico, setStateOS2PMCorreoelectronico] = useState("")
	const [stateOS2PMFechadealtaenSHCP, setStateOS2PMFechadealtaenSHCP] = useState("")
	const [stateOS2PMRelacionadoramajudicialGobiernoLegislativa, setStateOS2PMRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS2PMTienemasdeunpaisderesidencia, setStateOS2PMTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS2PMTieneoadquiriolaresidenciadelosEUA, setStateOS2PMTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS2PMElobligadoesaccionistauobligadodeotraempresa, setStateOS2PMElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS2PMEsobligadoofiadordeotraempresaoPFAE, setStateOS2PMEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS2PMNombrecompleto, setStateOS2PMNombrecompleto] = useState("")
	const [stateOS2PMCargo, setStateOS2PMCargo] = useState("")
	const [stateOS2PMTelefono, setStateOS2PMTelefono] = useState("")
	const [stateOS2PMCalle, setStateOS2PMCalle] = useState("")
	const [stateOS2PMNumeroexterior, setStateOS2PMNumeroexterior] = useState("")
	const [stateOS2PMNumerointerior, setStateOS2PMNumerointerior] = useState("")
	const [stateOS2PMPiso, setStateOS2PMPiso] = useState("")
	const [stateOS2PMPais, setStateOS2PMPais] = useState("")
	const [stateOS2PMCP, setStateOS2PMCP] = useState("")
	const [stateOS2PMColonia, setStateOS2PMColonia] = useState("")
	const [stateOS2PMDelegacionMunicipio, setStateOS2PMDelegacionMunicipio] = useState("")
	const [stateOS2PMEstado, setStateOS2PMEstado] = useState("")
	const [stateOS2PMTipodeDomicilio, setStateOS2PMTipodeDomicilio] = useState("")
	const [stateOS2PMTipodevivienda, setStateOS2PMTipodevivienda] = useState("")
	const [stateOS2PMEntrecalle1, setStateOS2PMEntrecalle1] = useState("")
	const [stateOS2PMEntrecalle2, setStateOS2PMEntrecalle2] = useState("")
	const [stateOS2PMImportarexportar, setStateOS2PMImportarexportar] = useState("")
	const [stateOS2PMSector, setStateOS2PMSector] = useState("")
	const [stateOS2PMGiro, setStateOS2PMGiro] = useState("")
	const [stateOS2PMActividad, setStateOS2PMActividad] = useState("")
	const [stateOS2PMNumerodesucursales, setStateOS2PMNumerodesucursales] = useState("")
	const [stateOS2PMAnosdeexperienciaenelsector, setStateOS2PMAnosdeexperienciaenelsector] = useState("")


	//-----------3------------------
	//-----------PF-----------------
	const [stateOS3PFNombre, setStateOS3PFNombre] = useState("")
	const [stateOS3PFApellidoPaterno, setStateOS3PFApellidoPaterno] = useState("")
	const [stateOS3PFApellidoMaterno, setStateOS3PFApellidoMaterno] = useState("")
	const [stateOS3PFFechadenacimiento, setStateOS3PFFechadenacimiento] = useState("")
	const [stateOS3PFPaisdenacimiento, setStateOS3PFPaisdenacimiento] = useState("")
	const [stateOS3PFEstadodeNacimiento, setStateOS3PFEstadodeNacimiento] = useState("")
	const [stateOS3PFGenero, setStateOS3PFGenero] = useState("")
	const [stateOS3PFRFC, setStateOS3PFRFC] = useState("")
	const [stateOS3PFCURP, setStateOS3PFCURP] = useState("")
	const [stateOS3PFFolioID, setStateOS3PFFolioID] = useState("")
	const [stateOS3PFNacionalidad, setStateOS3PFNacionalidad] = useState("")
	const [stateOS3PFCalidadmigratoria, setStateOS3PFCalidadmigratoria] = useState("")
	const [stateOS3PFCorreoelectronico, setStateOS3PFCorreoelectronico] = useState("")
	const [stateOS3PFTelefono, setStateOS3PFTelefono] = useState("")
	const [stateOS3PFCelular, setStateOS3PFCelular] = useState("")
	const [stateOS3PFMenoresde23anosquedependen, setStateOS3PFMenoresde23anosquedependen] = useState("")
	const [stateOS3PFTotaldedependientes, setStateOS3PFTotaldedependientes] = useState("")
	const [stateOS3PFRelacionconelsolicitante, setStateOS3PFRelacionconelsolicitante] = useState("")
	const [stateOS3PFRelacionadoramajudicialGobiernoLegislativa, setStateOS3PFRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS3PFTienemasdeunpaisderesidencia, setStateOS3PFTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS3PFTieneoadquiriolaresidenciadelosEUA, setStateOS3PFTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS3PFElobligadoesaccionistauobligadodeotraempresa, setStateOS3PFElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS3PFEsobligadoofiadordeotraempresaoPFAE, setStateOS3PFEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS3PFNumeroInterior, setStateOS3PFNumeroInterior] = useState("")
	const [stateOS3PFPiso, setStateOS3PFPiso] = useState("")
	const [stateOS3PFPais, setStateOS3PFPais] = useState("")
	const [stateOS3PFCP, setStateOS3PFCP] = useState("")
	const [stateOS3PFColonia, setStateOS3PFColonia] = useState("")
	const [stateOS3PFDelegacionMunicipio, setStateOS3PFDelegacionMunicipio] = useState("")
	const [stateOS3PFEstado, setStateOS3PFEstado] = useState("")
	const [stateOS3PFTipodeDomicilio, setStateOS3PFTipodeDomicilio] = useState("")
	const [stateOS3PFTipodevivienda, setStateOS3PFTipodevivienda] = useState("")
	const [stateOS3PFAntiguedadeneldomicilioactual, setStateOS3PFAntiguedadeneldomicilioactual] = useState("")
	const [stateOS3PFAntiguedadeneldomicilioanterior, setStateOS3PFAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS3PFEntrecalle1, setStateOS3PFEntrecalle1] = useState("")
	const [stateOS3PFEntrecalle2, setStateOS3PFEntrecalle2] = useState("")

	//------------------PFAE---------------------
	const [stateOS3PFAENombre, setStateOS3PFAENombre] = useState("")
	const [stateOS3PFAEApellidoPaterno, setStateOS3PFAEApellidoPaterno] = useState("")
	const [stateOS3PFAEApellidoMaterno, setStateOS3PFAEApellidoMaterno] = useState("")
	const [stateOS3PFAEFechadenacimiento, setStateOS3PFAEFechadenacimiento] = useState("")
	const [stateOS3PFAEPaisdenacimiento, setStateOS3PFAEPaisdenacimiento] = useState("")
	const [stateOS3PFAEEstadodeNacimiento, setStateOS3PFAEEstadodeNacimiento] = useState("")
	const [stateOS3PFAEGenero, setStateOS3PFAEGenero] = useState("")
	const [stateOS3PFAERFC, setStateOS3PFAERFC] = useState("")
	const [stateOS3PFAECURP, setStateOS3PFAECURP] = useState("")
	const [stateOS3PFAEFolioID, setStateOS3PFAEFolioID] = useState("")
	const [stateOS3PFAENacionalidad, setStateOS3PFAENacionalidad] = useState("")
	const [stateOS3PFAECalidadmigratoria, setStateOS3PFAECalidadmigratoria] = useState("")
	const [stateOS3PFAECorreoelectronico, setStateOS3PFAECorreoelectronico] = useState("")
	const [stateOS3PFAETelefono, setStateOS3PFAETelefono] = useState("")
	const [stateOS3PFAECelular, setStateOS3PFAECelular] = useState("")
	const [stateOS3PFAEMenoresde23anosquedependen, setStateOS3PFAEMenoresde23anosquedependen] = useState("")
	const [stateOS3PFAETotaldedependientes, setStateOS3PFAETotaldedependientes] = useState("")
	const [stateOS3PFAERelacionconelsolicitante, setStateOS3PFAERelacionconelsolicitante] = useState("")
	const [stateOS3PFAERelacionadoramajudicialGobiernoLegislativa, setStateOS3PFAERelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS3PFAETienemasdeunpaisderesidencia, setStateOS3PFAETienemasdeunpaisderesidencia] = useState(false)
	const [stateOS3PFAETieneoadquiriolaresidenciadelosEUA, setStateOS3PFAETieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS3PFAEElobligadoesaccionistauobligadodeotraempresa, setStateOS3PFAEElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS3PFAEEsobligadoofiadordeotraempresaoPFAE, setStateOS3PFAEEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS3PFAENumeroInterior, setStateOS3PFAENumeroInterior] = useState("")
	const [stateOS3PFAEPiso, setStateOS3PFAEPiso] = useState("")
	const [stateOS3PFAEPais, setStateOS3PFAEPais] = useState("")
	const [stateOS3PFAECP, setStateOS3PFAECP] = useState("")
	const [stateOS3PFAEColonia, setStateOS3PFAEColonia] = useState("")
	const [stateOS3PFAEDelegacionMunicipio, setStateOS3PFAEDelegacionMunicipio] = useState("")
	const [stateOS3PFAEEstado, setStateOS3PFAEEstado] = useState("")
	const [stateOS3PFAETipodeDomicilio, setStateOS3PFAETipodeDomicilio] = useState("")
	const [stateOS3PFAETipodevivienda, setStateOS3PFAETipodevivienda] = useState("")
	const [stateOS3PFAEAntiguedadeneldomicilioactual, setStateOS3PFAEAntiguedadeneldomicilioactual] = useState("")
	const [stateOS3PFAEAntiguedadeneldomicilioanterior, setStateOS3PFAEAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS3PFAEEntrecalle1, setStateOS3PFAEEntrecalle1] = useState("")
	const [stateOS3PFAEEntrecalle2, setStateOS3PFAEEntrecalle2] = useState("")
	const [stateOS3PFAEImportarexportar, setStateOS3PFAEImportarexportar] = useState("")
	const [stateOS3PFAESector, setStateOS3PFAESector] = useState("")
	const [stateOS3PFAEGiro, setStateOS3PFAEGiro] = useState("")
	const [stateOS3PFAEActividad, setStateOS3PFAEActividad] = useState("")
	const [stateOS3PFAEFechadealtaenSHCP, setStateOS3PFAEFechadealtaenSHCP] = useState("")
	const [stateOS3PFAENumerodesucursales, setStateOS3PFAENumerodesucursales] = useState("")
	const [stateOS3PFAEAnosdeexperienciaenelsector, setStateOS3PFAEAnosdeexperienciaenelsector] = useState("")

	//--------------------PM-----------------------
	const [stateOS3PMRazonsocial, setStateOS3PMRazonsocial] = useState("")
	const [stateOS3PMRFC, setStateOS3PMRFC] = useState("")
	const [stateOS3PMCorreoelectronico, setStateOS3PMCorreoelectronico] = useState("")
	const [stateOS3PMFechadealtaenSHCP, setStateOS3PMFechadealtaenSHCP] = useState("")
	const [stateOS3PMRelacionadoramajudicialGobiernoLegislativa, setStateOS3PMRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS3PMTienemasdeunpaisderesidencia, setStateOS3PMTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS3PMTieneoadquiriolaresidenciadelosEUA, setStateOS3PMTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS3PMElobligadoesaccionistauobligadodeotraempresa, setStateOS3PMElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS3PMEsobligadoofiadordeotraempresaoPFAE, setStateOS3PMEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS3PMNombrecompleto, setStateOS3PMNombrecompleto] = useState("")
	const [stateOS3PMCargo, setStateOS3PMCargo] = useState("")
	const [stateOS3PMTelefono, setStateOS3PMTelefono] = useState("")
	const [stateOS3PMCalle, setStateOS3PMCalle] = useState("")
	const [stateOS3PMNumeroexterior, setStateOS3PMNumeroexterior] = useState("")
	const [stateOS3PMNumerointerior, setStateOS3PMNumerointerior] = useState("")
	const [stateOS3PMPiso, setStateOS3PMPiso] = useState("")
	const [stateOS3PMPais, setStateOS3PMPais] = useState("")
	const [stateOS3PMCP, setStateOS3PMCP] = useState("")
	const [stateOS3PMColonia, setStateOS3PMColonia] = useState("")
	const [stateOS3PMDelegacionMunicipio, setStateOS3PMDelegacionMunicipio] = useState("")
	const [stateOS3PMEstado, setStateOS3PMEstado] = useState("")
	const [stateOS3PMTipodeDomicilio, setStateOS3PMTipodeDomicilio] = useState("")
	const [stateOS3PMTipodevivienda, setStateOS3PMTipodevivienda] = useState("")
	const [stateOS3PMEntrecalle1, setStateOS3PMEntrecalle1] = useState("")
	const [stateOS3PMEntrecalle2, setStateOS3PMEntrecalle2] = useState("")
	const [stateOS3PMImportarexportar, setStateOS3PMImportarexportar] = useState("")
	const [stateOS3PMSector, setStateOS3PMSector] = useState("")
	const [stateOS3PMGiro, setStateOS3PMGiro] = useState("")
	const [stateOS3PMActividad, setStateOS3PMActividad] = useState("")
	const [stateOS3PMNumerodesucursales, setStateOS3PMNumerodesucursales] = useState("")
	const [stateOS3PMAnosdeexperienciaenelsector, setStateOS3PMAnosdeexperienciaenelsector] = useState("")


	//-----------4------------------
	//-----------PF-----------------
	const [stateOS4PFNombre, setStateOS4PFNombre] = useState("")
	const [stateOS4PFApellidoPaterno, setStateOS4PFApellidoPaterno] = useState("")
	const [stateOS4PFApellidoMaterno, setStateOS4PFApellidoMaterno] = useState("")
	const [stateOS4PFFechadenacimiento, setStateOS4PFFechadenacimiento] = useState("")
	const [stateOS4PFPaisdenacimiento, setStateOS4PFPaisdenacimiento] = useState("")
	const [stateOS4PFEstadodeNacimiento, setStateOS4PFEstadodeNacimiento] = useState("")
	const [stateOS4PFGenero, setStateOS4PFGenero] = useState("")
	const [stateOS4PFRFC, setStateOS4PFRFC] = useState("")
	const [stateOS4PFCURP, setStateOS4PFCURP] = useState("")
	const [stateOS4PFFolioID, setStateOS4PFFolioID] = useState("")
	const [stateOS4PFNacionalidad, setStateOS4PFNacionalidad] = useState("")
	const [stateOS4PFCalidadmigratoria, setStateOS4PFCalidadmigratoria] = useState("")
	const [stateOS4PFCorreoelectronico, setStateOS4PFCorreoelectronico] = useState("")
	const [stateOS4PFTelefono, setStateOS4PFTelefono] = useState("")
	const [stateOS4PFCelular, setStateOS4PFCelular] = useState("")
	const [stateOS4PFMenoresde23anosquedependen, setStateOS4PFMenoresde23anosquedependen] = useState("")
	const [stateOS4PFTotaldedependientes, setStateOS4PFTotaldedependientes] = useState("")
	const [stateOS4PFRelacionconelsolicitante, setStateOS4PFRelacionconelsolicitante] = useState("")
	const [stateOS4PFRelacionadoramajudicialGobiernoLegislativa, setStateOS4PFRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS4PFTienemasdeunpaisderesidencia, setStateOS4PFTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS4PFTieneoadquiriolaresidenciadelosEUA, setStateOS4PFTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS4PFElobligadoesaccionistauobligadodeotraempresa, setStateOS4PFElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS4PFEsobligadoofiadordeotraempresaoPFAE, setStateOS4PFEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS4PFNumeroInterior, setStateOS4PFNumeroInterior] = useState("")
	const [stateOS4PFPiso, setStateOS4PFPiso] = useState("")
	const [stateOS4PFPais, setStateOS4PFPais] = useState("")
	const [stateOS4PFCP, setStateOS4PFCP] = useState("")
	const [stateOS4PFColonia, setStateOS4PFColonia] = useState("")
	const [stateOS4PFDelegacionMunicipio, setStateOS4PFDelegacionMunicipio] = useState("")
	const [stateOS4PFEstado, setStateOS4PFEstado] = useState("")
	const [stateOS4PFTipodeDomicilio, setStateOS4PFTipodeDomicilio] = useState("")
	const [stateOS4PFTipodevivienda, setStateOS4PFTipodevivienda] = useState("")
	const [stateOS4PFAntiguedadeneldomicilioactual, setStateOS4PFAntiguedadeneldomicilioactual] = useState("")
	const [stateOS4PFAntiguedadeneldomicilioanterior, setStateOS4PFAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS4PFEntrecalle1, setStateOS4PFEntrecalle1] = useState("")
	const [stateOS4PFEntrecalle2, setStateOS4PFEntrecalle2] = useState("")

	//------------------PFAE---------------------
	const [stateOS4PFAENombre, setStateOS4PFAENombre] = useState("")
	const [stateOS4PFAEApellidoPaterno, setStateOS4PFAEApellidoPaterno] = useState("")
	const [stateOS4PFAEApellidoMaterno, setStateOS4PFAEApellidoMaterno] = useState("")
	const [stateOS4PFAEFechadenacimiento, setStateOS4PFAEFechadenacimiento] = useState("")
	const [stateOS4PFAEPaisdenacimiento, setStateOS4PFAEPaisdenacimiento] = useState("")
	const [stateOS4PFAEEstadodeNacimiento, setStateOS4PFAEEstadodeNacimiento] = useState("")
	const [stateOS4PFAEGenero, setStateOS4PFAEGenero] = useState("")
	const [stateOS4PFAERFC, setStateOS4PFAERFC] = useState("")
	const [stateOS4PFAECURP, setStateOS4PFAECURP] = useState("")
	const [stateOS4PFAEFolioID, setStateOS4PFAEFolioID] = useState("")
	const [stateOS4PFAENacionalidad, setStateOS4PFAENacionalidad] = useState("")
	const [stateOS4PFAECalidadmigratoria, setStateOS4PFAECalidadmigratoria] = useState("")
	const [stateOS4PFAECorreoelectronico, setStateOS4PFAECorreoelectronico] = useState("")
	const [stateOS4PFAETelefono, setStateOS4PFAETelefono] = useState("")
	const [stateOS4PFAECelular, setStateOS4PFAECelular] = useState("")
	const [stateOS4PFAEMenoresde23anosquedependen, setStateOS4PFAEMenoresde23anosquedependen] = useState("")
	const [stateOS4PFAETotaldedependientes, setStateOS4PFAETotaldedependientes] = useState("")
	const [stateOS4PFAERelacionconelsolicitante, setStateOS4PFAERelacionconelsolicitante] = useState("")
	const [stateOS4PFAERelacionadoramajudicialGobiernoLegislativa, setStateOS4PFAERelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS4PFAETienemasdeunpaisderesidencia, setStateOS4PFAETienemasdeunpaisderesidencia] = useState(false)
	const [stateOS4PFAETieneoadquiriolaresidenciadelosEUA, setStateOS4PFAETieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS4PFAEElobligadoesaccionistauobligadodeotraempresa, setStateOS4PFAEElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS4PFAEEsobligadoofiadordeotraempresaoPFAE, setStateOS4PFAEEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS4PFAENumeroInterior, setStateOS4PFAENumeroInterior] = useState("")
	const [stateOS4PFAEPiso, setStateOS4PFAEPiso] = useState("")
	const [stateOS4PFAEPais, setStateOS4PFAEPais] = useState("")
	const [stateOS4PFAECP, setStateOS4PFAECP] = useState("")
	const [stateOS4PFAEColonia, setStateOS4PFAEColonia] = useState("")
	const [stateOS4PFAEDelegacionMunicipio, setStateOS4PFAEDelegacionMunicipio] = useState("")
	const [stateOS4PFAEEstado, setStateOS4PFAEEstado] = useState("")
	const [stateOS4PFAETipodeDomicilio, setStateOS4PFAETipodeDomicilio] = useState("")
	const [stateOS4PFAETipodevivienda, setStateOS4PFAETipodevivienda] = useState("")
	const [stateOS4PFAEAntiguedadeneldomicilioactual, setStateOS4PFAEAntiguedadeneldomicilioactual] = useState("")
	const [stateOS4PFAEAntiguedadeneldomicilioanterior, setStateOS4PFAEAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS4PFAEEntrecalle1, setStateOS4PFAEEntrecalle1] = useState("")
	const [stateOS4PFAEEntrecalle2, setStateOS4PFAEEntrecalle2] = useState("")
	const [stateOS4PFAEImportarexportar, setStateOS4PFAEImportarexportar] = useState("")
	const [stateOS4PFAESector, setStateOS4PFAESector] = useState("")
	const [stateOS4PFAEGiro, setStateOS4PFAEGiro] = useState("")
	const [stateOS4PFAEActividad, setStateOS4PFAEActividad] = useState("")
	const [stateOS4PFAEFechadealtaenSHCP, setStateOS4PFAEFechadealtaenSHCP] = useState("")
	const [stateOS4PFAENumerodesucursales, setStateOS4PFAENumerodesucursales] = useState("")
	const [stateOS4PFAEAnosdeexperienciaenelsector, setStateOS4PFAEAnosdeexperienciaenelsector] = useState("")

	//--------------------PM-----------------------
	const [stateOS4PMRazonsocial, setStateOS4PMRazonsocial] = useState("")
	const [stateOS4PMRFC, setStateOS4PMRFC] = useState("")
	const [stateOS4PMCorreoelectronico, setStateOS4PMCorreoelectronico] = useState("")
	const [stateOS4PMFechadealtaenSHCP, setStateOS4PMFechadealtaenSHCP] = useState("")
	const [stateOS4PMRelacionadoramajudicialGobiernoLegislativa, setStateOS4PMRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS4PMTienemasdeunpaisderesidencia, setStateOS4PMTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS4PMTieneoadquiriolaresidenciadelosEUA, setStateOS4PMTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS4PMElobligadoesaccionistauobligadodeotraempresa, setStateOS4PMElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS4PMEsobligadoofiadordeotraempresaoPFAE, setStateOS4PMEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS4PMNombrecompleto, setStateOS4PMNombrecompleto] = useState("")
	const [stateOS4PMCargo, setStateOS4PMCargo] = useState("")
	const [stateOS4PMTelefono, setStateOS4PMTelefono] = useState("")
	const [stateOS4PMCalle, setStateOS4PMCalle] = useState("")
	const [stateOS4PMNumeroexterior, setStateOS4PMNumeroexterior] = useState("")
	const [stateOS4PMNumerointerior, setStateOS4PMNumerointerior] = useState("")
	const [stateOS4PMPiso, setStateOS4PMPiso] = useState("")
	const [stateOS4PMPais, setStateOS4PMPais] = useState("")
	const [stateOS4PMCP, setStateOS4PMCP] = useState("")
	const [stateOS4PMColonia, setStateOS4PMColonia] = useState("")
	const [stateOS4PMDelegacionMunicipio, setStateOS4PMDelegacionMunicipio] = useState("")
	const [stateOS4PMEstado, setStateOS4PMEstado] = useState("")
	const [stateOS4PMTipodeDomicilio, setStateOS4PMTipodeDomicilio] = useState("")
	const [stateOS4PMTipodevivienda, setStateOS4PMTipodevivienda] = useState("")
	const [stateOS4PMEntrecalle1, setStateOS4PMEntrecalle1] = useState("")
	const [stateOS4PMEntrecalle2, setStateOS4PMEntrecalle2] = useState("")
	const [stateOS4PMImportarexportar, setStateOS4PMImportarexportar] = useState("")
	const [stateOS4PMSector, setStateOS4PMSector] = useState("")
	const [stateOS4PMGiro, setStateOS4PMGiro] = useState("")
	const [stateOS4PMActividad, setStateOS4PMActividad] = useState("")
	const [stateOS4PMNumerodesucursales, setStateOS4PMNumerodesucursales] = useState("")
	const [stateOS4PMAnosdeexperienciaenelsector, setStateOS4PMAnosdeexperienciaenelsector] = useState("")


	//-----------5------------------
	//-----------PF-----------------
	const [stateOS5PFNombre, setStateOS5PFNombre] = useState("")
	const [stateOS5PFApellidoPaterno, setStateOS5PFApellidoPaterno] = useState("")
	const [stateOS5PFApellidoMaterno, setStateOS5PFApellidoMaterno] = useState("")
	const [stateOS5PFFechadenacimiento, setStateOS5PFFechadenacimiento] = useState("")
	const [stateOS5PFPaisdenacimiento, setStateOS5PFPaisdenacimiento] = useState("")
	const [stateOS5PFEstadodeNacimiento, setStateOS5PFEstadodeNacimiento] = useState("")
	const [stateOS5PFGenero, setStateOS5PFGenero] = useState("")
	const [stateOS5PFRFC, setStateOS5PFRFC] = useState("")
	const [stateOS5PFCURP, setStateOS5PFCURP] = useState("")
	const [stateOS5PFFolioID, setStateOS5PFFolioID] = useState("")
	const [stateOS5PFNacionalidad, setStateOS5PFNacionalidad] = useState("")
	const [stateOS5PFCalidadmigratoria, setStateOS5PFCalidadmigratoria] = useState("")
	const [stateOS5PFCorreoelectronico, setStateOS5PFCorreoelectronico] = useState("")
	const [stateOS5PFTelefono, setStateOS5PFTelefono] = useState("")
	const [stateOS5PFCelular, setStateOS5PFCelular] = useState("")
	const [stateOS5PFMenoresde23anosquedependen, setStateOS5PFMenoresde23anosquedependen] = useState("")
	const [stateOS5PFTotaldedependientes, setStateOS5PFTotaldedependientes] = useState("")
	const [stateOS5PFRelacionconelsolicitante, setStateOS5PFRelacionconelsolicitante] = useState("")
	const [stateOS5PFRelacionadoramajudicialGobiernoLegislativa, setStateOS5PFRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS5PFTienemasdeunpaisderesidencia, setStateOS5PFTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS5PFTieneoadquiriolaresidenciadelosEUA, setStateOS5PFTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS5PFElobligadoesaccionistauobligadodeotraempresa, setStateOS5PFElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS5PFEsobligadoofiadordeotraempresaoPFAE, setStateOS5PFEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS5PFNumeroInterior, setStateOS5PFNumeroInterior] = useState("")
	const [stateOS5PFPiso, setStateOS5PFPiso] = useState("")
	const [stateOS5PFPais, setStateOS5PFPais] = useState("")
	const [stateOS5PFCP, setStateOS5PFCP] = useState("")
	const [stateOS5PFColonia, setStateOS5PFColonia] = useState("")
	const [stateOS5PFDelegacionMunicipio, setStateOS5PFDelegacionMunicipio] = useState("")
	const [stateOS5PFEstado, setStateOS5PFEstado] = useState("")
	const [stateOS5PFTipodeDomicilio, setStateOS5PFTipodeDomicilio] = useState("")
	const [stateOS5PFTipodevivienda, setStateOS5PFTipodevivienda] = useState("")
	const [stateOS5PFAntiguedadeneldomicilioactual, setStateOS5PFAntiguedadeneldomicilioactual] = useState("")
	const [stateOS5PFAntiguedadeneldomicilioanterior, setStateOS5PFAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS5PFEntrecalle1, setStateOS5PFEntrecalle1] = useState("")
	const [stateOS5PFEntrecalle2, setStateOS5PFEntrecalle2] = useState("")

	//------------------PFAE---------------------
	const [stateOS5PFAENombre, setStateOS5PFAENombre] = useState("")
	const [stateOS5PFAEApellidoPaterno, setStateOS5PFAEApellidoPaterno] = useState("")
	const [stateOS5PFAEApellidoMaterno, setStateOS5PFAEApellidoMaterno] = useState("")
	const [stateOS5PFAEFechadenacimiento, setStateOS5PFAEFechadenacimiento] = useState("")
	const [stateOS5PFAEPaisdenacimiento, setStateOS5PFAEPaisdenacimiento] = useState("")
	const [stateOS5PFAEEstadodeNacimiento, setStateOS5PFAEEstadodeNacimiento] = useState("")
	const [stateOS5PFAEGenero, setStateOS5PFAEGenero] = useState("")
	const [stateOS5PFAERFC, setStateOS5PFAERFC] = useState("")
	const [stateOS5PFAECURP, setStateOS5PFAECURP] = useState("")
	const [stateOS5PFAEFolioID, setStateOS5PFAEFolioID] = useState("")
	const [stateOS5PFAENacionalidad, setStateOS5PFAENacionalidad] = useState("")
	const [stateOS5PFAECalidadmigratoria, setStateOS5PFAECalidadmigratoria] = useState("")
	const [stateOS5PFAECorreoelectronico, setStateOS5PFAECorreoelectronico] = useState("")
	const [stateOS5PFAETelefono, setStateOS5PFAETelefono] = useState("")
	const [stateOS5PFAECelular, setStateOS5PFAECelular] = useState("")
	const [stateOS5PFAEMenoresde23anosquedependen, setStateOS5PFAEMenoresde23anosquedependen] = useState("")
	const [stateOS5PFAETotaldedependientes, setStateOS5PFAETotaldedependientes] = useState("")
	const [stateOS5PFAERelacionconelsolicitante, setStateOS5PFAERelacionconelsolicitante] = useState("")
	const [stateOS5PFAERelacionadoramajudicialGobiernoLegislativa, setStateOS5PFAERelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS5PFAETienemasdeunpaisderesidencia, setStateOS5PFAETienemasdeunpaisderesidencia] = useState(false)
	const [stateOS5PFAETieneoadquiriolaresidenciadelosEUA, setStateOS5PFAETieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS5PFAEElobligadoesaccionistauobligadodeotraempresa, setStateOS5PFAEElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS5PFAEEsobligadoofiadordeotraempresaoPFAE, setStateOS5PFAEEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS5PFAENumeroInterior, setStateOS5PFAENumeroInterior] = useState("")
	const [stateOS5PFAEPiso, setStateOS5PFAEPiso] = useState("")
	const [stateOS5PFAEPais, setStateOS5PFAEPais] = useState("")
	const [stateOS5PFAECP, setStateOS5PFAECP] = useState("")
	const [stateOS5PFAEColonia, setStateOS5PFAEColonia] = useState("")
	const [stateOS5PFAEDelegacionMunicipio, setStateOS5PFAEDelegacionMunicipio] = useState("")
	const [stateOS5PFAEEstado, setStateOS5PFAEEstado] = useState("")
	const [stateOS5PFAETipodeDomicilio, setStateOS5PFAETipodeDomicilio] = useState("")
	const [stateOS5PFAETipodevivienda, setStateOS5PFAETipodevivienda] = useState("")
	const [stateOS5PFAEAntiguedadeneldomicilioactual, setStateOS5PFAEAntiguedadeneldomicilioactual] = useState("")
	const [stateOS5PFAEAntiguedadeneldomicilioanterior, setStateOS5PFAEAntiguedadeneldomicilioanterior] = useState("")
	const [stateOS5PFAEEntrecalle1, setStateOS5PFAEEntrecalle1] = useState("")
	const [stateOS5PFAEEntrecalle2, setStateOS5PFAEEntrecalle2] = useState("")
	const [stateOS5PFAEImportarexportar, setStateOS5PFAEImportarexportar] = useState("")
	const [stateOS5PFAESector, setStateOS5PFAESector] = useState("")
	const [stateOS5PFAEGiro, setStateOS5PFAEGiro] = useState("")
	const [stateOS5PFAEActividad, setStateOS5PFAEActividad] = useState("")
	const [stateOS5PFAEFechadealtaenSHCP, setStateOS5PFAEFechadealtaenSHCP] = useState("")
	const [stateOS5PFAENumerodesucursales, setStateOS5PFAENumerodesucursales] = useState("")
	const [stateOS5PFAEAnosdeexperienciaenelsector, setStateOS5PFAEAnosdeexperienciaenelsector] = useState("")

	//--------------------PM-----------------------
	const [stateOS5PMRazonsocial, setStateOS5PMRazonsocial] = useState("")
	const [stateOS5PMRFC, setStateOS5PMRFC] = useState("")
	const [stateOS5PMCorreoelectronico, setStateOS5PMCorreoelectronico] = useState("")
	const [stateOS5PMFechadealtaenSHCP, setStateOS5PMFechadealtaenSHCP] = useState("")
	const [stateOS5PMRelacionadoramajudicialGobiernoLegislativa, setStateOS5PMRelacionadoramajudicialGobiernoLegislativa] = useState(false)
	const [stateOS5PMTienemasdeunpaisderesidencia, setStateOS5PMTienemasdeunpaisderesidencia] = useState(false)
	const [stateOS5PMTieneoadquiriolaresidenciadelosEUA, setStateOS5PMTieneoadquiriolaresidenciadelosEUA] = useState(false)
	const [stateOS5PMElobligadoesaccionistauobligadodeotraempresa, setStateOS5PMElobligadoesaccionistauobligadodeotraempresa] = useState("")
	const [stateOS5PMEsobligadoofiadordeotraempresaoPFAE, setStateOS5PMEsobligadoofiadordeotraempresaoPFAE] = useState("")
	const [stateOS5PMNombrecompleto, setStateOS5PMNombrecompleto] = useState("")
	const [stateOS5PMCargo, setStateOS5PMCargo] = useState("")
	const [stateOS5PMTelefono, setStateOS5PMTelefono] = useState("")
	const [stateOS5PMCalle, setStateOS5PMCalle] = useState("")
	const [stateOS5PMNumeroexterior, setStateOS5PMNumeroexterior] = useState("")
	const [stateOS5PMNumerointerior, setStateOS5PMNumerointerior] = useState("")
	const [stateOS5PMPiso, setStateOS5PMPiso] = useState("")
	const [stateOS5PMPais, setStateOS5PMPais] = useState("")
	const [stateOS5PMCP, setStateOS5PMCP] = useState("")
	const [stateOS5PMColonia, setStateOS5PMColonia] = useState("")
	const [stateOS5PMDelegacionMunicipio, setStateOS5PMDelegacionMunicipio] = useState("")
	const [stateOS5PMEstado, setStateOS5PMEstado] = useState("")
	const [stateOS5PMTipodeDomicilio, setStateOS5PMTipodeDomicilio] = useState("")
	const [stateOS5PMTipodevivienda, setStateOS5PMTipodevivienda] = useState("")
	const [stateOS5PMEntrecalle1, setStateOS5PMEntrecalle1] = useState("")
	const [stateOS5PMEntrecalle2, setStateOS5PMEntrecalle2] = useState("")
	const [stateOS5PMImportarexportar, setStateOS5PMImportarexportar] = useState("")
	const [stateOS5PMSector, setStateOS5PMSector] = useState("")
	const [stateOS5PMGiro, setStateOS5PMGiro] = useState("")
	const [stateOS5PMActividad, setStateOS5PMActividad] = useState("")
	const [stateOS5PMNumerodesucursales, setStateOS5PMNumerodesucursales] = useState("")
	const [stateOS5PMAnosdeexperienciaenelsector, setStateOS5PMAnosdeexperienciaenelsector] = useState("")


	//-----------------------HISTORIAL-CREDITICIO
	const [stateTieneunatarjetadecredito, setStateTieneunatarjetadecredito] = useState("")
	const [stateDigitalosultimos4numeros, setStateDigitalosultimos4numeros] = useState("")
	const [stateErestitulardeuncreditohipotecario, setStateErestitulardeuncreditohipotecario] = useState("")
	const [stateHasidotitulardeuncreditoautomotrizenlosultimos24meses, setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses] = useState("")
	const [stateHoySiendoDia, setStateHoySiendoDia] = useState("")

	//--------------------------------PATRIMONIO
	const [stateNumerosdebienesapresentar, setStateNumerosdebienesapresentar] = useState("")
	const [stateTotaldelvalorestimado, setStateTotaldelvalorestimado] = useState("")
	const [stateUbicacion, setStateUbicacion] = useState("")
	const [stateSuperficieM2, setStateSuperficieM2] = useState("")
	const [stateDescriciondelinmueble, setStateDescriciondelinmueble] = useState("")
	const [stateValormanifestado, setStateValormanifestado] = useState("")
	const [stateValorpredial, setStateValorpredial] = useState("")
	const [stateDatosderegistro, setStateDatosderegistro] = useState("")
	const [stateNombredelproducto, setStateNombredelproducto] = useState("")
	const [stateRegimendelacuentaMancomunadaoIndistinta, setStateRegimendelacuentaMancomunadaoIndistinta] = useState("")
	const [stateNombredelapoderadomancomunado, setStateNombredelapoderadomancomunado] = useState("")
	const [stateNombredelapoderadomancomunado2, setStateNombredelapoderadomancomunado2] = useState("")
	const [stateEstatusFATCACRS, setStateEstatusFATCACRS] = useState("")
	const [stateCFDI, setStateCFDI] = useState("")
	const [stateEntregadeCorrespondencia, setStateEntregadeCorrespondencia] = useState("")
	const [stateMontodeReferenciadelaInversion, setStateMontodeReferenciadelaInversion] = useState("")
	const [stateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID, setStateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID] = useState("")
	const [stateRequiereChequera, setStateRequiereChequera] = useState("")
	const [stateRequiereTarjetadeDebito, setStateRequiereTarjetadeDebito] = useState("")
	const [stateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca, setStateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca] = useState("")
	const [stateServiciodeBancaElectronica, setStateServiciodeBancaElectronica] = useState("")
	const [stateBancaElectronicaBEPoBEM, setStateBancaElectronicaBEPoBEM] = useState("")
	const [statePlan, setStatePlan] = useState("")
	const [stateTipoCobro, setStateTipoCobro] = useState("")
	const [stateCuentacargo, setStateCuentacargo] = useState("")
	const [stateOperacionMancumunadaparaBancaElectronica, setStateOperacionMancumunadaparaBancaElectronica] = useState("")
	const [stateOperacionMancumunadaparalibramientodecheques, setStateOperacionMancumunadaparalibramientodecheques] = useState("")






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

			if (window.innerWidth >= 993) {
				setScrollPosition(window.scrollY)
			}

		})

		return () => {
			window.removeEventListener("scroll", () => {
				setScrollPosition(window.scrollY)
			});
		};
	}, [])

	const handlePesosReturn = (value) => {

		let decimals = ""
		
		if(value.includes('.')){
			decimals = value.split(".")[1]
			value = value.split(".")[0]

			decimals = decimals[0] + decimals[1]
		}

		
		if (value) {
			value = (Number(value.replace(/\D/g, '')) || '').toLocaleString().replaceAll('.', ',');

			if(decimals !== ""){
				return value + "." + decimals
			}else{
				return value

			}
			
		} else {
			return ""
		}

		value = "$" + value
		return value + "." + decimals
	}
	
	// SECCION ROJA
	const [credito, setCredito] = useState("$230,000");
	const [mesesCredito, setMesesCredito] = useState(48);

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
	const [transitionDiesiseisToggle, setTransitionDiesiseisToggle] = useState(false)
	const [transitionDiesisieteToggle, setTransitionDiesisieteToggle] = useState(false)
	const [transitionDiesiochoToggle, setTransitionDiesiochoToggle] = useState(false)

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

		let maxSecciones = 18

		// if(seccion === 15 && operation === true){
		// 	window.location.replace('/formulario')
		// }

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

	const copyToClipBoard = (text) =>{
		const elem = document.createElement('textarea');
		elem.value = text;
		document.body.appendChild(elem);
		elem.select();
		document.execCommand('copy');
		document.body.removeChild(elem);
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
		if (seccion === 16) setTransitionDiesiseisToggle(true)
		else setTransitionDiesiseisToggle(false)
		if (seccion === 17) setTransitionDiesisieteToggle(true)
		else setTransitionDiesisieteToggle(false)
		if (seccion === 18) setTransitionDiesiochoToggle(true)
		else setTransitionDiesiochoToggle(false)
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
	const transitionDiesiseis = useTransition(transitionDiesiseisToggle, transitionConfig)
	const transitionDiesisiete = useTransition(transitionDiesisieteToggle, transitionConfig)
	const transitionDiesiocho = useTransition(transitionDiesiochoToggle, transitionConfig)

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

	const handleNextOS = (i) => {
		if(cantidadObligadosSolidarios < i){
			setCantidadObligadosSolidarios(i)
		}
	}

	return (
		<>


			<Popup show={showResult}>
				<div className='bgc-gray-opacity' style={{ height: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>
					<div className='my-shadow radius bgc-white black' style={{ padding: '24px', width: '80vw', maxWidth: '1300px', minWidth: '700px', zIndex: '2', maxHeight: '90vh', overflowY: 'scroll', overflowX: 'visible' }}>
						<div style={{ display: 'flex', gap: '24px' }}>
							<div className="felicidades" />
							<div style={{ width: '50%' }}>
								<h2 className="color-red text-center">Felicidades</h2>
								<h3 className="text-center mb-4">Su solicitud ha sido pre aprobada</h3>
								<h4 className="text-center mb-4">Solo falta enviarnos tus documentos para liberar los fondos</h4>

								<div className="border-red" style={{ display: 'flex', placeContent: 'center' }}><span style={{ fontWeight: 'bold' }}>FOLIO:</span><span>DKL356-123DA</span></div>
								<p className="mt-3 text-center">Puedes regresar en cualquier momento para subir sus documentos usando su numero de folio</p>

								<div className="pointer" style={{ display: 'flex', placeContent: 'center', gap: '8px', marginBottom: '8px' }}>
									<i className="ri-smartphone-line"></i>
									<span>Enviar a mi celular</span>
								</div>
								<div className="pointer" style={{ display: 'flex', placeContent: 'center', gap: '8px', marginBottom: '8px' }}>
									<i className="ri-mail-line"></i>
									<span>Enviar por email</span>
								</div>
								<div onClick={() => copyToClipBoard('DKL356-123DA')} className="pointer" style={{ display: 'flex', placeContent: 'center', gap: '8px', marginBottom: '8px' }}>
									<i className="ri-file-copy-line"></i>
									<span>Copiar folio a portapapeles</span>
								</div>

								<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
									<button className="bgc-red" onClick={() => { handleSeccion(true); setShowResult(false); }}>Siguiente</button>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div onClick={() => setShowResult(false)} style={{ top: '0', position: 'absolute', height: '100vh', width: '100%', zIndex: '1' }} />
			</Popup>

			<Popup show={showTarjeta}>
				<div className='bgc-gray-opacity' style={{ height: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>
					<img src={tarjeta} />
				</div>
				<div onClick={() => setShowTarjeta(false)} style={{ top: '0', position: 'absolute', height: '100vh', width: '100%', zIndex: '1' }} />
			</Popup>

			<Popup show={loading}>
				<div className='bgc-gray-opacity' style={{ height: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
				<div style={{ top: '0', position: 'absolute', height: '100vh', width: '100%', zIndex: '1' }} />
			</Popup>

			<Popup show={showTabla}>
				<div className='bgc-gray-opacity' style={{ height: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>
					<div className='my-shadow radius bgc-white black' style={{ padding: '24px', width: '80vw', maxWidth: '1300px', minWidth: '700px', zIndex: '2', maxHeight: '90vh', overflowY: 'scroll', overflowX: 'visible' }}>
						<h1>Tabla de amortización</h1>
						<hr />
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">Periodo</th>
									<th scope="col">Saldo capital</th>
									<th scope="col">Intereses</th>
									<th scope="col">Capital</th>
									<th scope="col">Iva</th>
									<th scope="col">Pago total</th>
								</tr>
							</thead>
							<tbody>
								{
									tablaData.map((item, i) => {
										return (
											<Fragment key={i}>
												<tr>
													<td>{item.periodo}</td>
													<td>{item.saldoCap}</td>
													<td>{item.intereses}</td>
													<td>{item.capital}</td>
													<td>{item.iva}</td>
													<td>{item.pagoTotal}</td>
												</tr>
											</Fragment>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
				<div onClick={() => setShowTabla(false)} style={{ top: '0', position: 'absolute', height: '100vh', width: '100%', zIndex: '1' }} />
			</Popup>

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
			{/* <div className="container mt-3">
				<h1>Solicitud de crédito PyME</h1>
			</div> */}
			<div className="container navigation" style={{ overflow: 'scroll', display: 'flex', justifyContent: 'space-between', marginTop: '24px', gap: '24px' }}>
				{
					tipoPersona === "PFAE" &&
					<>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "generales" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => setSubMenuSelected("generales")}>Generales</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "oSolidario" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => setSubMenuSelected("oSolidario")}>O. Solidarios</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "patrimonio" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => {setSubMenuSelected("patrimonio"); setSeccion(16)}}>Patrimonio</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "historialcrediticio" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => { setSubMenuSelected("historialcrediticio"); setSeccion(17) }}>Historial crediticio</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "cargadocumentos" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => { setSubMenuSelected("cargadocumentos"); setSeccion(18) }}>Carga documentos</p>
					</>
				}
				{
					tipoPersona === "PM" &&
					<>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "generales" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => setSubMenuSelected("generales")}>Generales</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "socios" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => {setSubMenuSelected("socios"); setSeccion(6)}}>Socios</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "pAccionista" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => {setSubMenuSelected("pAccionista"); setSeccion(7)}}>Principal accionista</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "oSolidario" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => setSubMenuSelected("oSolidario")}>O. Solidarios</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "patrimonio" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => {setSubMenuSelected("patrimonio"); setSeccion(16)}}>Patrimonio</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "historialcrediticio" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => { setSubMenuSelected("historialcrediticio"); setSeccion(17) }}>Historial crediticio</p>
						<p style={{ padding: '8px 16px', display: 'grid', placeContent: 'center' }} className={`${subMenuSelected === "cargadocumentos" && "radius strong-shadow bgc-red"} pointer bold`} onClick={() => { setSubMenuSelected("cargadocumentos"); setSeccion(18) }}>Carga documentos</p>
					</>
				}
			</div>

			<div className="container" style={{ position: 'relative' }}>
				<div className='bgc-red' style={{ height: '10px', margin: '8px 0px 16px 0px' }} />
			</div>
			<div className="container navigation" style={{ overflow: 'scroll', display: 'flex', marginTop: '24px', gap: '24px' }}>
				{
					tipoPersona === "PFAE" && subMenuSelected === "generales" &&
					<>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(1)}>General</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(2)}>Domicilio</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(3)}>Domicilio fiscal</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(4)}>Domicilio comercial</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(5)}>Económicos</p>
					</>
				}
				{
					tipoPersona === "PFAE" && subMenuSelected === "oSolidario" &&
					<>
						{
							cantidadObligadosSolidarios >= 1 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(6)}>Numero 1</p>
						}
						{
							cantidadObligadosSolidarios >= 2 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(8)}>Numero 2</p>
						}
						{
							cantidadObligadosSolidarios >= 3 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(10)}>Numero 3</p>
						}
						{
							cantidadObligadosSolidarios >= 4 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(12)}>Numero 4</p>
						}
						{
							cantidadObligadosSolidarios >= 5 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(14)}>Numero 5</p>
						}
						{
							cantidadObligadosSolidarios > 0 &&
							<p style={{ padding: '8px 16px' }} className="pointer bgc-red radius strong-shadow" onClick={() => setCantidadObligadosSolidarios(cantidadObligadosSolidarios - 1)}>Eliminar O.S</p>
						}
						{
							cantidadObligadosSolidarios < 5 &&
							<p style={{ padding: '8px 16px' }} className="pointer bgc-red radius strong-shadow" onClick={() => setCantidadObligadosSolidarios(cantidadObligadosSolidarios + 1)}>Agregar O.S</p>
						}
					</>
				}
				{
					tipoPersona === "PFAE" && subMenuSelected === "cargadocumentos" &&
					<>
						{/* <p>Solicitante</p>
						<p>O. solidario numero 1</p>
						<p>O. solidario numero 2</p>
						<p>O. solidario numero 3</p>
						<p>O. solidario numero 4</p>
						<p>O. solidario numero 5</p> */}
					</>
				}
				{
					tipoPersona === "PM" && subMenuSelected === "generales" &&
					<>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(1)}>General</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(2)}>Representante legal</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(3)}>Domicilio del negocio</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(4)}>Info. del negocio</p>
						<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(5)}>Económicos</p>
					</>
				}
				{
					tipoPersona === "PM" && subMenuSelected === "oSolidario" &&
					<>

						{
							cantidadObligadosSolidarios >= 1 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(8)}>Numero 1</p>
						}
						{
							cantidadObligadosSolidarios >= 2 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(10)}>Numero 2</p>
						}
						{
							cantidadObligadosSolidarios >= 3 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(12)}>Numero 3</p>
						}
						{
							cantidadObligadosSolidarios >= 4 &&
							<p style={{ padding: '8px 16px' }} className="pointer bold" onClick={() => setSeccion(14)}>Numero 4</p>
						}
						{
							cantidadObligadosSolidarios > 0 &&
							<p style={{ padding: '8px 16px' }} className="pointer bgc-red radius strong-shadow" onClick={() => setCantidadObligadosSolidarios(cantidadObligadosSolidarios - 1)}>Eliminar O.S</p>
						}
						{
							cantidadObligadosSolidarios < 4 &&
							<p style={{ padding: '8px 16px' }} className="pointer bgc-red radius strong-shadow" onClick={() => setCantidadObligadosSolidarios(cantidadObligadosSolidarios + 1)}>Agregar O.S</p>
						}
					</>
				}
				{
					tipoPersona === "PM" && subMenuSelected === "cargadocumentos" &&
					<>
						{/* <p>Solicitante</p>
						<p>Principal accionista</p>
						<p>O. solidario numero 1</p>
						<p>O. solidario numero 2</p>
						<p>O. solidario numero 3</p>
						<p>O. solidario numero 4</p> */}
					</>
				}
			</div>


			{
				seccion === 17 &&
				<NavBarHistorialCrediticio />
			}

			<div className="container" style={{ position: 'relative', overflow: 'hidden' }}>
				<div className="row">
					<div className="col-12 col-lg-5 mb-5" style={{ position: 'relative', zIndex: '999' }}>
						{
							seccion < 17 &&
							<div className="bgc-red left-red-bar" style={{ minHeight: '150px', position: scrollPosition >= 360 ? 'fixed' : 'static', top: '12px', maxWidth: '350px', padding: '24px 0px', width: '100%', margin: 'auto' }}>
								<h3 className="text-center">Micro apoyo</h3>
								<div className='card-1-homepage card-img' style={{ pointerEvents: 'none', borderRadius: '0px' }} />
								<div style={{ padding: '24px 24px 0px 24px' }}>
									{/* <p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: 'bold', wordBreak: 'break-all' }}>$ 230,000.00</p> */}
									<input className="white bgc-red border-white" style={{ width: '100%', fontSize:'40px' }} type="text" required value={credito} onChange={(e) => handlePesos(e, setCredito)} />
									<p style={{ wordBreak: 'break-all' }}>Crédito</p>
									<p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: 'bold', wordBreak: 'break-all' }}>${handlePesosReturn( (parseInt(credito.split("$")[1].replace(/,/g, '')) / mesesCredito).toString() )}</p>
									<p style={{ wordBreak: 'break-all' }}>Mensualidades</p>
									<p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: 'bold', wordBreak: 'break-all' }}>48</p>
									<p style={{ wordBreak: 'break-all' }}>Meses</p>
									<p style={{ marginTop: '24px', marginBottom: '0px' }}>CAT promedio 14.7% sin IVA</p>
									<p onClick={() => setShowTabla(true)} className="pointer" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px' }}><i style={{ fontSize: '26px' }} className="ri-eye-fill"></i>Tabla de amortización</p>
								</div>
							</div>
						}
						{
							seccion >= 17 &&
							<div style={{ height: '500px', width: '100%', backgroundPosition: 'center' }} className="felicidades" />
						}
					</div>
					<div className="col-12 col-lg-7 formulario">
					<div ref={refScrollUp} />
						<form onSubmit={(e) => { e.preventDefault(); handleSeccion(true) }}>

							{
								transitionZero((style, visible) =>
									visible &&
									<animated.div style={style}>
										<div className="container">
											<h2 className='text-center'>Tipo de persona</h2>
											<hr />
											<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
												<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
													<div onClick={() => {
														if (axiosData === undefined) return

														setTipoPersona("PFAE");
														handleSeccion(true);

													}} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
														<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
													</div>
													<span className="text-center">Persona fisica con actividad empresarial</span>
												</div>
												<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
													<div onClick={() => {
														if (axiosData === undefined) return

														setTipoPersona("PM");
														handleSeccion(true);

													}} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
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
									handleNextOS={handleNextOS}
									primerObligadoSolidario={primerObligadoSolidario}
									setFileFive={setFileFive}
									fileFive={fileFive}
									setFileSix={setFileSix}
									fileSix={fileSix}
									setSeccion={setSeccion}
									setSubMenuSelected={setSubMenuSelected}
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
									statePMGENERALESRazonsocial={statePMGENERALESRazonsocial}
									statePMGENERALESRFC={statePMGENERALESRFC}
									statePMGENERALESNumerodeescritura={statePMGENERALESNumerodeescritura}
									statePMGENERALESFechadealtaenSHCP={statePMGENERALESFechadealtaenSHCP}
									statePMGENERALESDuraciondelasociedad={statePMGENERALESDuraciondelasociedad}
									statePMGENERALESFoliomercantil={statePMGENERALESFoliomercantil}
									statePMREPRESENTANTELEGALNombrecompleto={statePMREPRESENTANTELEGALNombrecompleto}
									statePMREPRESENTANTELEGALCargo={statePMREPRESENTANTELEGALCargo}
									statePMREPRESENTANTELEGALTelefono={statePMREPRESENTANTELEGALTelefono}
									statePMCONTACTOEMPRESANombrecompleto={statePMCONTACTOEMPRESANombrecompleto}
									statePMCONTACTOEMPRESACargo={statePMCONTACTOEMPRESACargo}
									statePMCONTACTOEMPRESATelefono={statePMCONTACTOEMPRESATelefono}
									statePMDOMICILIONEGOCIOCalle={statePMDOMICILIONEGOCIOCalle}
									statePMDOMICILIONEGOCIONumeroexterior={statePMDOMICILIONEGOCIONumeroexterior}
									statePMDOMICILIONEGOCIONumerointerior={statePMDOMICILIONEGOCIONumerointerior}
									statePMDOMICILIONEGOCIOPiso={statePMDOMICILIONEGOCIOPiso}
									statePMDOMICILIONEGOCIOPais={statePMDOMICILIONEGOCIOPais}
									statePMDOMICILIONEGOCIOCP={statePMDOMICILIONEGOCIOCP}
									statePMDOMICILIONEGOCIOColonia={statePMDOMICILIONEGOCIOColonia}
									statePMDOMICILIONEGOCIODelegacionMunicipio={statePMDOMICILIONEGOCIODelegacionMunicipio}
									statePMDOMICILIONEGOCIOEstado={statePMDOMICILIONEGOCIOEstado}
									statePMDOMICILIONEGOCIOTipodevivienda={statePMDOMICILIONEGOCIOTipodevivienda}
									statePMINFORMACIONNEGOCIOImportarexportar={statePMINFORMACIONNEGOCIOImportarexportar}
									statePMINFORMACIONNEGOCIOSector={statePMINFORMACIONNEGOCIOSector}
									statePMINFORMACIONNEGOCIOGiro={statePMINFORMACIONNEGOCIOGiro}
									statePMINFORMACIONNEGOCIOActividad={statePMINFORMACIONNEGOCIOActividad}
									statePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector={statePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector}
									statePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad={statePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad}
									statePMINFORMACIONNEGOCIOTotaldeempleados={statePMINFORMACIONNEGOCIOTotaldeempleados}
									statePMINFORMACIONNEGOCIONumerodesucursales={statePMINFORMACIONNEGOCIONumerodesucursales}
									statePMINFORMACIONNEGOCIOTipodelocal={statePMINFORMACIONNEGOCIOTipodelocal}
									statePMINFORMACIONNEGOCIOAnosqueloharentado={statePMINFORMACIONNEGOCIOAnosqueloharentado}
									statePMINFORMACIONNEGOCIOImporteRentaMensual={statePMINFORMACIONNEGOCIOImporteRentaMensual}
									statePMINFORMACIONNEGOCIOTotaldenominamensual={statePMINFORMACIONNEGOCIOTotaldenominamensual}
									statePMECONOMICOSVentasanuales={statePMECONOMICOSVentasanuales}
									statePMECONOMICOSTipodecomprobantedeingresos={statePMECONOMICOSTipodecomprobantedeingresos}
									statePMECONOMICOSFuentedeingresos={statePMECONOMICOSFuentedeingresos}
									stateSP1Nombrerazonsocial={stateSP1Nombrerazonsocial}
									stateSP1Accionario={stateSP1Accionario}
									stateSP1RFC={stateSP1RFC}
									stateSP1Puestoenlaempresa={stateSP1Puestoenlaempresa}
									stateSP2Nombrerazonsocial={stateSP2Nombrerazonsocial}
									stateSP2Accionario={stateSP2Accionario}
									stateSP2RFC={stateSP2RFC}
									stateSP2Puestoenlaempresa={stateSP2Puestoenlaempresa}
									stateSP3Nombrerazonsocial={stateSP3Nombrerazonsocial}
									stateSP3Accionario={stateSP3Accionario}
									stateSP3RFC={stateSP3RFC}
									stateSP3Puestoenlaempresa={stateSP3Puestoenlaempresa}
									stateSP4Nombrerazonsocial={stateSP4Nombrerazonsocial}
									stateSP4Accionario={stateSP4Accionario}
									stateSP4RFC={stateSP4RFC}
									stateSP4Puestoenlaempresa={stateSP4Puestoenlaempresa}
									stateSP5Nombrerazonsocial={stateSP5Nombrerazonsocial}
									stateSP5Accionario={stateSP5Accionario}
									stateSP5RFC={stateSP5RFC}
									stateSP5Puestoenlaempresa={stateSP5Puestoenlaempresa}
									statePRINCIPALACCIONISTANombre={statePRINCIPALACCIONISTANombre}
									statePRINCIPALACCIONISTAApellidoPaterno={statePRINCIPALACCIONISTAApellidoPaterno}
									statePRINCIPALACCIONISTAApellidoMaterno={statePRINCIPALACCIONISTAApellidoMaterno}
									statePRINCIPALACCIONISTAFechadenacimiento={statePRINCIPALACCIONISTAFechadenacimiento}
									statePRINCIPALACCIONISTAPaisdenacimiento={statePRINCIPALACCIONISTAPaisdenacimiento}
									statePRINCIPALACCIONISTAEstadodeNacimiento={statePRINCIPALACCIONISTAEstadodeNacimiento}
									statePRINCIPALACCIONISTAGenero={statePRINCIPALACCIONISTAGenero}
									statePRINCIPALACCIONISTARFC={statePRINCIPALACCIONISTARFC}
									statePRINCIPALACCIONISTACURP={statePRINCIPALACCIONISTACURP}
									statePRINCIPALACCIONISTAFolioID={statePRINCIPALACCIONISTAFolioID}
									statePRINCIPALACCIONISTANacionalidad={statePRINCIPALACCIONISTANacionalidad}
									statePRINCIPALACCIONISTACalidadmigratoria={statePRINCIPALACCIONISTACalidadmigratoria}
									statePRINCIPALACCIONISTACorreoelectronico={statePRINCIPALACCIONISTACorreoelectronico}
									statePRINCIPALACCIONISTATelefono={statePRINCIPALACCIONISTATelefono}
									statePRINCIPALACCIONISTACelular={statePRINCIPALACCIONISTACelular}
									statePRINCIPALACCIONISTAEstadocivil={statePRINCIPALACCIONISTAEstadocivil}
									statePRINCIPALACCIONISTAMenoresde23anosquedependen={statePRINCIPALACCIONISTAMenoresde23anosquedependen}
									statePRINCIPALACCIONISTATotaldedependientes={statePRINCIPALACCIONISTATotaldedependientes}
									statePRINCIPALACCIONISTANivelacademico={statePRINCIPALACCIONISTANivelacademico}
									statePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa={statePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa}
									statePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal={statePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal}
									statePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA={statePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA}
									statePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa={statePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa}
									statePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE={statePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE}
									statePRINCIPALACCIONISTATotaldenominamensual={statePRINCIPALACCIONISTATotaldenominamensual}
									statePRINCIPALACCIONISTAFuentedeingresos={statePRINCIPALACCIONISTAFuentedeingresos}
									statePRINCIPALACCIONISTACalle={statePRINCIPALACCIONISTACalle}
									statePRINCIPALACCIONISTANumerointerior={statePRINCIPALACCIONISTANumerointerior}
									statePRINCIPALACCIONISTANumeroexterior={statePRINCIPALACCIONISTANumeroexterior}
									statePRINCIPALACCIONISTAPiso={statePRINCIPALACCIONISTAPiso}
									statePRINCIPALACCIONISTAPais={statePRINCIPALACCIONISTAPais}
									statePRINCIPALACCIONISTACP={statePRINCIPALACCIONISTACP}
									statePRINCIPALACCIONISTAColonia={statePRINCIPALACCIONISTAColonia}
									statePRINCIPALACCIONISTADelegacionMunicipio={statePRINCIPALACCIONISTADelegacionMunicipio}
									statePRINCIPALACCIONISTAEstado={statePRINCIPALACCIONISTAEstado}
									statePRINCIPALACCIONISTATipodeDomicilio={statePRINCIPALACCIONISTATipodeDomicilio}
									statePRINCIPALACCIONISTATipodevivienda={statePRINCIPALACCIONISTATipodevivienda}
									statePRINCIPALACCIONISTAAntiguedadeneldomicilioactual={statePRINCIPALACCIONISTAAntiguedadeneldomicilioactual}
									statePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior={statePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior}
									statePRINCIPALACCIONISTAEntrecalle1={statePRINCIPALACCIONISTAEntrecalle1}
									statePRINCIPALACCIONISTAEntrecalle2={statePRINCIPALACCIONISTAEntrecalle2}
									stateOS2PFNombre={stateOS2PFNombre}
									stateOS2PFApellidoPaterno={stateOS2PFApellidoPaterno}
									stateOS2PFApellidoMaterno={stateOS2PFApellidoMaterno}
									stateOS2PFFechadenacimiento={stateOS2PFFechadenacimiento}
									stateOS2PFPaisdenacimiento={stateOS2PFPaisdenacimiento}
									stateOS2PFEstadodeNacimiento={stateOS2PFEstadodeNacimiento}
									stateOS2PFGenero={stateOS2PFGenero}
									stateOS2PFRFC={stateOS2PFRFC}
									stateOS2PFCURP={stateOS2PFCURP}
									stateOS2PFFolioID={stateOS2PFFolioID}
									stateOS2PFNacionalidad={stateOS2PFNacionalidad}
									stateOS2PFCalidadmigratoria={stateOS2PFCalidadmigratoria}
									stateOS2PFCorreoelectronico={stateOS2PFCorreoelectronico}
									stateOS2PFTelefono={stateOS2PFTelefono}
									stateOS2PFCelular={stateOS2PFCelular}
									stateOS2PFMenoresde23anosquedependen={stateOS2PFMenoresde23anosquedependen}
									stateOS2PFTotaldedependientes={stateOS2PFTotaldedependientes}
									stateOS2PFRelacionconelsolicitante={stateOS2PFRelacionconelsolicitante}
									stateOS2PFRelacionadoramajudicialGobiernoLegislativa={stateOS2PFRelacionadoramajudicialGobiernoLegislativa}
									stateOS2PFTienemasdeunpaisderesidencia={stateOS2PFTienemasdeunpaisderesidencia}
									stateOS2PFTieneoadquiriolaresidenciadelosEUA={stateOS2PFTieneoadquiriolaresidenciadelosEUA}
									stateOS2PFElobligadoesaccionistauobligadodeotraempresa={stateOS2PFElobligadoesaccionistauobligadodeotraempresa}
									stateOS2PFEsobligadoofiadordeotraempresaoPFAE={stateOS2PFEsobligadoofiadordeotraempresaoPFAE}
									stateOS2PFNumeroInterior={stateOS2PFNumeroInterior}
									stateOS2PFPiso={stateOS2PFPiso}
									stateOS2PFPais={stateOS2PFPais}
									stateOS2PFCP={stateOS2PFCP}
									stateOS2PFColonia={stateOS2PFColonia}
									stateOS2PFDelegacionMunicipio={stateOS2PFDelegacionMunicipio}
									stateOS2PFEstado={stateOS2PFEstado}
									stateOS2PFTipodeDomicilio={stateOS2PFTipodeDomicilio}
									stateOS2PFTipodevivienda={stateOS2PFTipodevivienda}
									stateOS2PFAntiguedadeneldomicilioactual={stateOS2PFAntiguedadeneldomicilioactual}
									stateOS2PFAntiguedadeneldomicilioanterior={stateOS2PFAntiguedadeneldomicilioanterior}
									stateOS2PFEntrecalle1={stateOS2PFEntrecalle1}
									stateOS2PFEntrecalle2={stateOS2PFEntrecalle2}
									stateOS2PFAENombre={stateOS2PFAENombre}
									stateOS2PFAEApellidoPaterno={stateOS2PFAEApellidoPaterno}
									stateOS2PFAEApellidoMaterno={stateOS2PFAEApellidoMaterno}
									stateOS2PFAEFechadenacimiento={stateOS2PFAEFechadenacimiento}
									stateOS2PFAEPaisdenacimiento={stateOS2PFAEPaisdenacimiento}
									stateOS2PFAEEstadodeNacimiento={stateOS2PFAEEstadodeNacimiento}
									stateOS2PFAEGenero={stateOS2PFAEGenero}
									stateOS2PFAERFC={stateOS2PFAERFC}
									stateOS2PFAECURP={stateOS2PFAECURP}
									stateOS2PFAEFolioID={stateOS2PFAEFolioID}
									stateOS2PFAENacionalidad={stateOS2PFAENacionalidad}
									stateOS2PFAECalidadmigratoria={stateOS2PFAECalidadmigratoria}
									stateOS2PFAECorreoelectronico={stateOS2PFAECorreoelectronico}
									stateOS2PFAETelefono={stateOS2PFAETelefono}
									stateOS2PFAECelular={stateOS2PFAECelular}
									stateOS2PFAEMenoresde23anosquedependen={stateOS2PFAEMenoresde23anosquedependen}
									stateOS2PFAETotaldedependientes={stateOS2PFAETotaldedependientes}
									stateOS2PFAERelacionconelsolicitante={stateOS2PFAERelacionconelsolicitante}
									stateOS2PFAERelacionadoramajudicialGobiernoLegislativa={stateOS2PFAERelacionadoramajudicialGobiernoLegislativa}
									stateOS2PFAETienemasdeunpaisderesidencia={stateOS2PFAETienemasdeunpaisderesidencia}
									stateOS2PFAETieneoadquiriolaresidenciadelosEUA={stateOS2PFAETieneoadquiriolaresidenciadelosEUA}
									stateOS2PFAEElobligadoesaccionistauobligadodeotraempresa={stateOS2PFAEElobligadoesaccionistauobligadodeotraempresa}
									stateOS2PFAEEsobligadoofiadordeotraempresaoPFAE={stateOS2PFAEEsobligadoofiadordeotraempresaoPFAE}
									stateOS2PFAENumeroInterior={stateOS2PFAENumeroInterior}
									stateOS2PFAEPiso={stateOS2PFAEPiso}
									stateOS2PFAEPais={stateOS2PFAEPais}
									stateOS2PFAECP={stateOS2PFAECP}
									stateOS2PFAEColonia={stateOS2PFAEColonia}
									stateOS2PFAEDelegacionMunicipio={stateOS2PFAEDelegacionMunicipio}
									stateOS2PFAEEstado={stateOS2PFAEEstado}
									stateOS2PFAETipodeDomicilio={stateOS2PFAETipodeDomicilio}
									stateOS2PFAETipodevivienda={stateOS2PFAETipodevivienda}
									stateOS2PFAEAntiguedadeneldomicilioactual={stateOS2PFAEAntiguedadeneldomicilioactual}
									stateOS2PFAEAntiguedadeneldomicilioanterior={stateOS2PFAEAntiguedadeneldomicilioanterior}
									stateOS2PFAEEntrecalle1={stateOS2PFAEEntrecalle1}
									stateOS2PFAEEntrecalle2={stateOS2PFAEEntrecalle2}
									stateOS2PFAEImportarexportar={stateOS2PFAEImportarexportar}
									stateOS2PFAESector={stateOS2PFAESector}
									stateOS2PFAEGiro={stateOS2PFAEGiro}
									stateOS2PFAEActividad={stateOS2PFAEActividad}
									stateOS2PFAEFechadealtaenSHCP={stateOS2PFAEFechadealtaenSHCP}
									stateOS2PFAENumerodesucursales={stateOS2PFAENumerodesucursales}
									stateOS2PFAEAnosdeexperienciaenelsector={stateOS2PFAEAnosdeexperienciaenelsector}
									stateOS2PMRazonsocial={stateOS2PMRazonsocial}
									stateOS2PMRFC={stateOS2PMRFC}
									stateOS2PMCorreoelectronico={stateOS2PMCorreoelectronico}
									stateOS2PMFechadealtaenSHCP={stateOS2PMFechadealtaenSHCP}
									stateOS2PMRelacionadoramajudicialGobiernoLegislativa={stateOS2PMRelacionadoramajudicialGobiernoLegislativa}
									stateOS2PMTienemasdeunpaisderesidencia={stateOS2PMTienemasdeunpaisderesidencia}
									stateOS2PMTieneoadquiriolaresidenciadelosEUA={stateOS2PMTieneoadquiriolaresidenciadelosEUA}
									stateOS2PMElobligadoesaccionistauobligadodeotraempresa={stateOS2PMElobligadoesaccionistauobligadodeotraempresa}
									stateOS2PMEsobligadoofiadordeotraempresaoPFAE={stateOS2PMEsobligadoofiadordeotraempresaoPFAE}
									stateOS2PMNombrecompleto={stateOS2PMNombrecompleto}
									stateOS2PMCargo={stateOS2PMCargo}
									stateOS2PMTelefono={stateOS2PMTelefono}
									stateOS2PMCalle={stateOS2PMCalle}
									stateOS2PMNumeroexterior={stateOS2PMNumeroexterior}
									stateOS2PMNumerointerior={stateOS2PMNumerointerior}
									stateOS2PMPiso={stateOS2PMPiso}
									stateOS2PMPais={stateOS2PMPais}
									stateOS2PMCP={stateOS2PMCP}
									stateOS2PMColonia={stateOS2PMColonia}
									stateOS2PMDelegacionMunicipio={stateOS2PMDelegacionMunicipio}
									stateOS2PMEstado={stateOS2PMEstado}
									stateOS2PMTipodeDomicilio={stateOS2PMTipodeDomicilio}
									stateOS2PMTipodevivienda={stateOS2PMTipodevivienda}
									stateOS2PMEntrecalle1={stateOS2PMEntrecalle1}
									stateOS2PMEntrecalle2={stateOS2PMEntrecalle2}
									stateOS2PMImportarexportar={stateOS2PMImportarexportar}
									stateOS2PMSector={stateOS2PMSector}
									stateOS2PMGiro={stateOS2PMGiro}
									stateOS2PMActividad={stateOS2PMActividad}
									stateOS2PMNumerodesucursales={stateOS2PMNumerodesucursales}
									stateOS2PMAnosdeexperienciaenelsector={stateOS2PMAnosdeexperienciaenelsector}
									stateOS3PFNombre={stateOS3PFNombre}
									stateOS3PFApellidoPaterno={stateOS3PFApellidoPaterno}
									stateOS3PFApellidoMaterno={stateOS3PFApellidoMaterno}
									stateOS3PFFechadenacimiento={stateOS3PFFechadenacimiento}
									stateOS3PFPaisdenacimiento={stateOS3PFPaisdenacimiento}
									stateOS3PFEstadodeNacimiento={stateOS3PFEstadodeNacimiento}
									stateOS3PFGenero={stateOS3PFGenero}
									stateOS3PFRFC={stateOS3PFRFC}
									stateOS3PFCURP={stateOS3PFCURP}
									stateOS3PFFolioID={stateOS3PFFolioID}
									stateOS3PFNacionalidad={stateOS3PFNacionalidad}
									stateOS3PFCalidadmigratoria={stateOS3PFCalidadmigratoria}
									stateOS3PFCorreoelectronico={stateOS3PFCorreoelectronico}
									stateOS3PFTelefono={stateOS3PFTelefono}
									stateOS3PFCelular={stateOS3PFCelular}
									stateOS3PFMenoresde23anosquedependen={stateOS3PFMenoresde23anosquedependen}
									stateOS3PFTotaldedependientes={stateOS3PFTotaldedependientes}
									stateOS3PFRelacionconelsolicitante={stateOS3PFRelacionconelsolicitante}
									stateOS3PFRelacionadoramajudicialGobiernoLegislativa={stateOS3PFRelacionadoramajudicialGobiernoLegislativa}
									stateOS3PFTienemasdeunpaisderesidencia={stateOS3PFTienemasdeunpaisderesidencia}
									stateOS3PFTieneoadquiriolaresidenciadelosEUA={stateOS3PFTieneoadquiriolaresidenciadelosEUA}
									stateOS3PFElobligadoesaccionistauobligadodeotraempresa={stateOS3PFElobligadoesaccionistauobligadodeotraempresa}
									stateOS3PFEsobligadoofiadordeotraempresaoPFAE={stateOS3PFEsobligadoofiadordeotraempresaoPFAE}
									stateOS3PFNumeroInterior={stateOS3PFNumeroInterior}
									stateOS3PFPiso={stateOS3PFPiso}
									stateOS3PFPais={stateOS3PFPais}
									stateOS3PFCP={stateOS3PFCP}
									stateOS3PFColonia={stateOS3PFColonia}
									stateOS3PFDelegacionMunicipio={stateOS3PFDelegacionMunicipio}
									stateOS3PFEstado={stateOS3PFEstado}
									stateOS3PFTipodeDomicilio={stateOS3PFTipodeDomicilio}
									stateOS3PFTipodevivienda={stateOS3PFTipodevivienda}
									stateOS3PFAntiguedadeneldomicilioactual={stateOS3PFAntiguedadeneldomicilioactual}
									stateOS3PFAntiguedadeneldomicilioanterior={stateOS3PFAntiguedadeneldomicilioanterior}
									stateOS3PFEntrecalle1={stateOS3PFEntrecalle1}
									stateOS3PFEntrecalle2={stateOS3PFEntrecalle2}
									stateOS3PFAENombre={stateOS3PFAENombre}
									stateOS3PFAEApellidoPaterno={stateOS3PFAEApellidoPaterno}
									stateOS3PFAEApellidoMaterno={stateOS3PFAEApellidoMaterno}
									stateOS3PFAEFechadenacimiento={stateOS3PFAEFechadenacimiento}
									stateOS3PFAEPaisdenacimiento={stateOS3PFAEPaisdenacimiento}
									stateOS3PFAEEstadodeNacimiento={stateOS3PFAEEstadodeNacimiento}
									stateOS3PFAEGenero={stateOS3PFAEGenero}
									stateOS3PFAERFC={stateOS3PFAERFC}
									stateOS3PFAECURP={stateOS3PFAECURP}
									stateOS3PFAEFolioID={stateOS3PFAEFolioID}
									stateOS3PFAENacionalidad={stateOS3PFAENacionalidad}
									stateOS3PFAECalidadmigratoria={stateOS3PFAECalidadmigratoria}
									stateOS3PFAECorreoelectronico={stateOS3PFAECorreoelectronico}
									stateOS3PFAETelefono={stateOS3PFAETelefono}
									stateOS3PFAECelular={stateOS3PFAECelular}
									stateOS3PFAEMenoresde23anosquedependen={stateOS3PFAEMenoresde23anosquedependen}
									stateOS3PFAETotaldedependientes={stateOS3PFAETotaldedependientes}
									stateOS3PFAERelacionconelsolicitante={stateOS3PFAERelacionconelsolicitante}
									stateOS3PFAERelacionadoramajudicialGobiernoLegislativa={stateOS3PFAERelacionadoramajudicialGobiernoLegislativa}
									stateOS3PFAETienemasdeunpaisderesidencia={stateOS3PFAETienemasdeunpaisderesidencia}
									stateOS3PFAETieneoadquiriolaresidenciadelosEUA={stateOS3PFAETieneoadquiriolaresidenciadelosEUA}
									stateOS3PFAEElobligadoesaccionistauobligadodeotraempresa={stateOS3PFAEElobligadoesaccionistauobligadodeotraempresa}
									stateOS3PFAEEsobligadoofiadordeotraempresaoPFAE={stateOS3PFAEEsobligadoofiadordeotraempresaoPFAE}
									stateOS3PFAENumeroInterior={stateOS3PFAENumeroInterior}
									stateOS3PFAEPiso={stateOS3PFAEPiso}
									stateOS3PFAEPais={stateOS3PFAEPais}
									stateOS3PFAECP={stateOS3PFAECP}
									stateOS3PFAEColonia={stateOS3PFAEColonia}
									stateOS3PFAEDelegacionMunicipio={stateOS3PFAEDelegacionMunicipio}
									stateOS3PFAEEstado={stateOS3PFAEEstado}
									stateOS3PFAETipodeDomicilio={stateOS3PFAETipodeDomicilio}
									stateOS3PFAETipodevivienda={stateOS3PFAETipodevivienda}
									stateOS3PFAEAntiguedadeneldomicilioactual={stateOS3PFAEAntiguedadeneldomicilioactual}
									stateOS3PFAEAntiguedadeneldomicilioanterior={stateOS3PFAEAntiguedadeneldomicilioanterior}
									stateOS3PFAEEntrecalle1={stateOS3PFAEEntrecalle1}
									stateOS3PFAEEntrecalle2={stateOS3PFAEEntrecalle2}
									stateOS3PFAEImportarexportar={stateOS3PFAEImportarexportar}
									stateOS3PFAESector={stateOS3PFAESector}
									stateOS3PFAEGiro={stateOS3PFAEGiro}
									stateOS3PFAEActividad={stateOS3PFAEActividad}
									stateOS3PFAEFechadealtaenSHCP={stateOS3PFAEFechadealtaenSHCP}
									stateOS3PFAENumerodesucursales={stateOS3PFAENumerodesucursales}
									stateOS3PFAEAnosdeexperienciaenelsector={stateOS3PFAEAnosdeexperienciaenelsector}
									stateOS3PMRazonsocial={stateOS3PMRazonsocial}
									stateOS3PMRFC={stateOS3PMRFC}
									stateOS3PMCorreoelectronico={stateOS3PMCorreoelectronico}
									stateOS3PMFechadealtaenSHCP={stateOS3PMFechadealtaenSHCP}
									stateOS3PMRelacionadoramajudicialGobiernoLegislativa={stateOS3PMRelacionadoramajudicialGobiernoLegislativa}
									stateOS3PMTienemasdeunpaisderesidencia={stateOS3PMTienemasdeunpaisderesidencia}
									stateOS3PMTieneoadquiriolaresidenciadelosEUA={stateOS3PMTieneoadquiriolaresidenciadelosEUA}
									stateOS3PMElobligadoesaccionistauobligadodeotraempresa={stateOS3PMElobligadoesaccionistauobligadodeotraempresa}
									stateOS3PMEsobligadoofiadordeotraempresaoPFAE={stateOS3PMEsobligadoofiadordeotraempresaoPFAE}
									stateOS3PMNombrecompleto={stateOS3PMNombrecompleto}
									stateOS3PMCargo={stateOS3PMCargo}
									stateOS3PMTelefono={stateOS3PMTelefono}
									stateOS3PMCalle={stateOS3PMCalle}
									stateOS3PMNumeroexterior={stateOS3PMNumeroexterior}
									stateOS3PMNumerointerior={stateOS3PMNumerointerior}
									stateOS3PMPiso={stateOS3PMPiso}
									stateOS3PMPais={stateOS3PMPais}
									stateOS3PMCP={stateOS3PMCP}
									stateOS3PMColonia={stateOS3PMColonia}
									stateOS3PMDelegacionMunicipio={stateOS3PMDelegacionMunicipio}
									stateOS3PMEstado={stateOS3PMEstado}
									stateOS3PMTipodeDomicilio={stateOS3PMTipodeDomicilio}
									stateOS3PMTipodevivienda={stateOS3PMTipodevivienda}
									stateOS3PMEntrecalle1={stateOS3PMEntrecalle1}
									stateOS3PMEntrecalle2={stateOS3PMEntrecalle2}
									stateOS3PMImportarexportar={stateOS3PMImportarexportar}
									stateOS3PMSector={stateOS3PMSector}
									stateOS3PMGiro={stateOS3PMGiro}
									stateOS3PMActividad={stateOS3PMActividad}
									stateOS3PMNumerodesucursales={stateOS3PMNumerodesucursales}
									stateOS3PMAnosdeexperienciaenelsector={stateOS3PMAnosdeexperienciaenelsector}
									stateOS4PFNombre={stateOS4PFNombre}
									stateOS4PFApellidoPaterno={stateOS4PFApellidoPaterno}
									stateOS4PFApellidoMaterno={stateOS4PFApellidoMaterno}
									stateOS4PFFechadenacimiento={stateOS4PFFechadenacimiento}
									stateOS4PFPaisdenacimiento={stateOS4PFPaisdenacimiento}
									stateOS4PFEstadodeNacimiento={stateOS4PFEstadodeNacimiento}
									stateOS4PFGenero={stateOS4PFGenero}
									stateOS4PFRFC={stateOS4PFRFC}
									stateOS4PFCURP={stateOS4PFCURP}
									stateOS4PFFolioID={stateOS4PFFolioID}
									stateOS4PFNacionalidad={stateOS4PFNacionalidad}
									stateOS4PFCalidadmigratoria={stateOS4PFCalidadmigratoria}
									stateOS4PFCorreoelectronico={stateOS4PFCorreoelectronico}
									stateOS4PFTelefono={stateOS4PFTelefono}
									stateOS4PFCelular={stateOS4PFCelular}
									stateOS4PFMenoresde23anosquedependen={stateOS4PFMenoresde23anosquedependen}
									stateOS4PFTotaldedependientes={stateOS4PFTotaldedependientes}
									stateOS4PFRelacionconelsolicitante={stateOS4PFRelacionconelsolicitante}
									stateOS4PFRelacionadoramajudicialGobiernoLegislativa={stateOS4PFRelacionadoramajudicialGobiernoLegislativa}
									stateOS4PFTienemasdeunpaisderesidencia={stateOS4PFTienemasdeunpaisderesidencia}
									stateOS4PFTieneoadquiriolaresidenciadelosEUA={stateOS4PFTieneoadquiriolaresidenciadelosEUA}
									stateOS4PFElobligadoesaccionistauobligadodeotraempresa={stateOS4PFElobligadoesaccionistauobligadodeotraempresa}
									stateOS4PFEsobligadoofiadordeotraempresaoPFAE={stateOS4PFEsobligadoofiadordeotraempresaoPFAE}
									stateOS4PFNumeroInterior={stateOS4PFNumeroInterior}
									stateOS4PFPiso={stateOS4PFPiso}
									stateOS4PFPais={stateOS4PFPais}
									stateOS4PFCP={stateOS4PFCP}
									stateOS4PFColonia={stateOS4PFColonia}
									stateOS4PFDelegacionMunicipio={stateOS4PFDelegacionMunicipio}
									stateOS4PFEstado={stateOS4PFEstado}
									stateOS4PFTipodeDomicilio={stateOS4PFTipodeDomicilio}
									stateOS4PFTipodevivienda={stateOS4PFTipodevivienda}
									stateOS4PFAntiguedadeneldomicilioactual={stateOS4PFAntiguedadeneldomicilioactual}
									stateOS4PFAntiguedadeneldomicilioanterior={stateOS4PFAntiguedadeneldomicilioanterior}
									stateOS4PFEntrecalle1={stateOS4PFEntrecalle1}
									stateOS4PFEntrecalle2={stateOS4PFEntrecalle2}
									stateOS4PFAENombre={stateOS4PFAENombre}
									stateOS4PFAEApellidoPaterno={stateOS4PFAEApellidoPaterno}
									stateOS4PFAEApellidoMaterno={stateOS4PFAEApellidoMaterno}
									stateOS4PFAEFechadenacimiento={stateOS4PFAEFechadenacimiento}
									stateOS4PFAEPaisdenacimiento={stateOS4PFAEPaisdenacimiento}
									stateOS4PFAEEstadodeNacimiento={stateOS4PFAEEstadodeNacimiento}
									stateOS4PFAEGenero={stateOS4PFAEGenero}
									stateOS4PFAERFC={stateOS4PFAERFC}
									stateOS4PFAECURP={stateOS4PFAECURP}
									stateOS4PFAEFolioID={stateOS4PFAEFolioID}
									stateOS4PFAENacionalidad={stateOS4PFAENacionalidad}
									stateOS4PFAECalidadmigratoria={stateOS4PFAECalidadmigratoria}
									stateOS4PFAECorreoelectronico={stateOS4PFAECorreoelectronico}
									stateOS4PFAETelefono={stateOS4PFAETelefono}
									stateOS4PFAECelular={stateOS4PFAECelular}
									stateOS4PFAEMenoresde23anosquedependen={stateOS4PFAEMenoresde23anosquedependen}
									stateOS4PFAETotaldedependientes={stateOS4PFAETotaldedependientes}
									stateOS4PFAERelacionconelsolicitante={stateOS4PFAERelacionconelsolicitante}
									stateOS4PFAERelacionadoramajudicialGobiernoLegislativa={stateOS4PFAERelacionadoramajudicialGobiernoLegislativa}
									stateOS4PFAETienemasdeunpaisderesidencia={stateOS4PFAETienemasdeunpaisderesidencia}
									stateOS4PFAETieneoadquiriolaresidenciadelosEUA={stateOS4PFAETieneoadquiriolaresidenciadelosEUA}
									stateOS4PFAEElobligadoesaccionistauobligadodeotraempresa={stateOS4PFAEElobligadoesaccionistauobligadodeotraempresa}
									stateOS4PFAEEsobligadoofiadordeotraempresaoPFAE={stateOS4PFAEEsobligadoofiadordeotraempresaoPFAE}
									stateOS4PFAENumeroInterior={stateOS4PFAENumeroInterior}
									stateOS4PFAEPiso={stateOS4PFAEPiso}
									stateOS4PFAEPais={stateOS4PFAEPais}
									stateOS4PFAECP={stateOS4PFAECP}
									stateOS4PFAEColonia={stateOS4PFAEColonia}
									stateOS4PFAEDelegacionMunicipio={stateOS4PFAEDelegacionMunicipio}
									stateOS4PFAEEstado={stateOS4PFAEEstado}
									stateOS4PFAETipodeDomicilio={stateOS4PFAETipodeDomicilio}
									stateOS4PFAETipodevivienda={stateOS4PFAETipodevivienda}
									stateOS4PFAEAntiguedadeneldomicilioactual={stateOS4PFAEAntiguedadeneldomicilioactual}
									stateOS4PFAEAntiguedadeneldomicilioanterior={stateOS4PFAEAntiguedadeneldomicilioanterior}
									stateOS4PFAEEntrecalle1={stateOS4PFAEEntrecalle1}
									stateOS4PFAEEntrecalle2={stateOS4PFAEEntrecalle2}
									stateOS4PFAEImportarexportar={stateOS4PFAEImportarexportar}
									stateOS4PFAESector={stateOS4PFAESector}
									stateOS4PFAEGiro={stateOS4PFAEGiro}
									stateOS4PFAEActividad={stateOS4PFAEActividad}
									stateOS4PFAEFechadealtaenSHCP={stateOS4PFAEFechadealtaenSHCP}
									stateOS4PFAENumerodesucursales={stateOS4PFAENumerodesucursales}
									stateOS4PFAEAnosdeexperienciaenelsector={stateOS4PFAEAnosdeexperienciaenelsector}
									stateOS4PMRazonsocial={stateOS4PMRazonsocial}
									stateOS4PMRFC={stateOS4PMRFC}
									stateOS4PMCorreoelectronico={stateOS4PMCorreoelectronico}
									stateOS4PMFechadealtaenSHCP={stateOS4PMFechadealtaenSHCP}
									stateOS4PMRelacionadoramajudicialGobiernoLegislativa={stateOS4PMRelacionadoramajudicialGobiernoLegislativa}
									stateOS4PMTienemasdeunpaisderesidencia={stateOS4PMTienemasdeunpaisderesidencia}
									stateOS4PMTieneoadquiriolaresidenciadelosEUA={stateOS4PMTieneoadquiriolaresidenciadelosEUA}
									stateOS4PMElobligadoesaccionistauobligadodeotraempresa={stateOS4PMElobligadoesaccionistauobligadodeotraempresa}
									stateOS4PMEsobligadoofiadordeotraempresaoPFAE={stateOS4PMEsobligadoofiadordeotraempresaoPFAE}
									stateOS4PMNombrecompleto={stateOS4PMNombrecompleto}
									stateOS4PMCargo={stateOS4PMCargo}
									stateOS4PMTelefono={stateOS4PMTelefono}
									stateOS4PMCalle={stateOS4PMCalle}
									stateOS4PMNumeroexterior={stateOS4PMNumeroexterior}
									stateOS4PMNumerointerior={stateOS4PMNumerointerior}
									stateOS4PMPiso={stateOS4PMPiso}
									stateOS4PMPais={stateOS4PMPais}
									stateOS4PMCP={stateOS4PMCP}
									stateOS4PMColonia={stateOS4PMColonia}
									stateOS4PMDelegacionMunicipio={stateOS4PMDelegacionMunicipio}
									stateOS4PMEstado={stateOS4PMEstado}
									stateOS4PMTipodeDomicilio={stateOS4PMTipodeDomicilio}
									stateOS4PMTipodevivienda={stateOS4PMTipodevivienda}
									stateOS4PMEntrecalle1={stateOS4PMEntrecalle1}
									stateOS4PMEntrecalle2={stateOS4PMEntrecalle2}
									stateOS4PMImportarexportar={stateOS4PMImportarexportar}
									stateOS4PMSector={stateOS4PMSector}
									stateOS4PMGiro={stateOS4PMGiro}
									stateOS4PMActividad={stateOS4PMActividad}
									stateOS4PMNumerodesucursales={stateOS4PMNumerodesucursales}
									stateOS4PMAnosdeexperienciaenelsector={stateOS4PMAnosdeexperienciaenelsector}
									stateOS5PFNombre={stateOS5PFNombre}
									stateOS5PFApellidoPaterno={stateOS5PFApellidoPaterno}
									stateOS5PFApellidoMaterno={stateOS5PFApellidoMaterno}
									stateOS5PFFechadenacimiento={stateOS5PFFechadenacimiento}
									stateOS5PFPaisdenacimiento={stateOS5PFPaisdenacimiento}
									stateOS5PFEstadodeNacimiento={stateOS5PFEstadodeNacimiento}
									stateOS5PFGenero={stateOS5PFGenero}
									stateOS5PFRFC={stateOS5PFRFC}
									stateOS5PFCURP={stateOS5PFCURP}
									stateOS5PFFolioID={stateOS5PFFolioID}
									stateOS5PFNacionalidad={stateOS5PFNacionalidad}
									stateOS5PFCalidadmigratoria={stateOS5PFCalidadmigratoria}
									stateOS5PFCorreoelectronico={stateOS5PFCorreoelectronico}
									stateOS5PFTelefono={stateOS5PFTelefono}
									stateOS5PFCelular={stateOS5PFCelular}
									stateOS5PFMenoresde23anosquedependen={stateOS5PFMenoresde23anosquedependen}
									stateOS5PFTotaldedependientes={stateOS5PFTotaldedependientes}
									stateOS5PFRelacionconelsolicitante={stateOS5PFRelacionconelsolicitante}
									stateOS5PFRelacionadoramajudicialGobiernoLegislativa={stateOS5PFRelacionadoramajudicialGobiernoLegislativa}
									stateOS5PFTienemasdeunpaisderesidencia={stateOS5PFTienemasdeunpaisderesidencia}
									stateOS5PFTieneoadquiriolaresidenciadelosEUA={stateOS5PFTieneoadquiriolaresidenciadelosEUA}
									stateOS5PFElobligadoesaccionistauobligadodeotraempresa={stateOS5PFElobligadoesaccionistauobligadodeotraempresa}
									stateOS5PFEsobligadoofiadordeotraempresaoPFAE={stateOS5PFEsobligadoofiadordeotraempresaoPFAE}
									stateOS5PFNumeroInterior={stateOS5PFNumeroInterior}
									stateOS5PFPiso={stateOS5PFPiso}
									stateOS5PFPais={stateOS5PFPais}
									stateOS5PFCP={stateOS5PFCP}
									stateOS5PFColonia={stateOS5PFColonia}
									stateOS5PFDelegacionMunicipio={stateOS5PFDelegacionMunicipio}
									stateOS5PFEstado={stateOS5PFEstado}
									stateOS5PFTipodeDomicilio={stateOS5PFTipodeDomicilio}
									stateOS5PFTipodevivienda={stateOS5PFTipodevivienda}
									stateOS5PFAntiguedadeneldomicilioactual={stateOS5PFAntiguedadeneldomicilioactual}
									stateOS5PFAntiguedadeneldomicilioanterior={stateOS5PFAntiguedadeneldomicilioanterior}
									stateOS5PFEntrecalle1={stateOS5PFEntrecalle1}
									stateOS5PFEntrecalle2={stateOS5PFEntrecalle2}
									stateOS5PFAENombre={stateOS5PFAENombre}
									stateOS5PFAEApellidoPaterno={stateOS5PFAEApellidoPaterno}
									stateOS5PFAEApellidoMaterno={stateOS5PFAEApellidoMaterno}
									stateOS5PFAEFechadenacimiento={stateOS5PFAEFechadenacimiento}
									stateOS5PFAEPaisdenacimiento={stateOS5PFAEPaisdenacimiento}
									stateOS5PFAEEstadodeNacimiento={stateOS5PFAEEstadodeNacimiento}
									stateOS5PFAEGenero={stateOS5PFAEGenero}
									stateOS5PFAERFC={stateOS5PFAERFC}
									stateOS5PFAECURP={stateOS5PFAECURP}
									stateOS5PFAEFolioID={stateOS5PFAEFolioID}
									stateOS5PFAENacionalidad={stateOS5PFAENacionalidad}
									stateOS5PFAECalidadmigratoria={stateOS5PFAECalidadmigratoria}
									stateOS5PFAECorreoelectronico={stateOS5PFAECorreoelectronico}
									stateOS5PFAETelefono={stateOS5PFAETelefono}
									stateOS5PFAECelular={stateOS5PFAECelular}
									stateOS5PFAEMenoresde23anosquedependen={stateOS5PFAEMenoresde23anosquedependen}
									stateOS5PFAETotaldedependientes={stateOS5PFAETotaldedependientes}
									stateOS5PFAERelacionconelsolicitante={stateOS5PFAERelacionconelsolicitante}
									stateOS5PFAERelacionadoramajudicialGobiernoLegislativa={stateOS5PFAERelacionadoramajudicialGobiernoLegislativa}
									stateOS5PFAETienemasdeunpaisderesidencia={stateOS5PFAETienemasdeunpaisderesidencia}
									stateOS5PFAETieneoadquiriolaresidenciadelosEUA={stateOS5PFAETieneoadquiriolaresidenciadelosEUA}
									stateOS5PFAEElobligadoesaccionistauobligadodeotraempresa={stateOS5PFAEElobligadoesaccionistauobligadodeotraempresa}
									stateOS5PFAEEsobligadoofiadordeotraempresaoPFAE={stateOS5PFAEEsobligadoofiadordeotraempresaoPFAE}
									stateOS5PFAENumeroInterior={stateOS5PFAENumeroInterior}
									stateOS5PFAEPiso={stateOS5PFAEPiso}
									stateOS5PFAEPais={stateOS5PFAEPais}
									stateOS5PFAECP={stateOS5PFAECP}
									stateOS5PFAEColonia={stateOS5PFAEColonia}
									stateOS5PFAEDelegacionMunicipio={stateOS5PFAEDelegacionMunicipio}
									stateOS5PFAEEstado={stateOS5PFAEEstado}
									stateOS5PFAETipodeDomicilio={stateOS5PFAETipodeDomicilio}
									stateOS5PFAETipodevivienda={stateOS5PFAETipodevivienda}
									stateOS5PFAEAntiguedadeneldomicilioactual={stateOS5PFAEAntiguedadeneldomicilioactual}
									stateOS5PFAEAntiguedadeneldomicilioanterior={stateOS5PFAEAntiguedadeneldomicilioanterior}
									stateOS5PFAEEntrecalle1={stateOS5PFAEEntrecalle1}
									stateOS5PFAEEntrecalle2={stateOS5PFAEEntrecalle2}
									stateOS5PFAEImportarexportar={stateOS5PFAEImportarexportar}
									stateOS5PFAESector={stateOS5PFAESector}
									stateOS5PFAEGiro={stateOS5PFAEGiro}
									stateOS5PFAEActividad={stateOS5PFAEActividad}
									stateOS5PFAEFechadealtaenSHCP={stateOS5PFAEFechadealtaenSHCP}
									stateOS5PFAENumerodesucursales={stateOS5PFAENumerodesucursales}
									stateOS5PFAEAnosdeexperienciaenelsector={stateOS5PFAEAnosdeexperienciaenelsector}
									stateOS5PMRazonsocial={stateOS5PMRazonsocial}
									stateOS5PMRFC={stateOS5PMRFC}
									stateOS5PMCorreoelectronico={stateOS5PMCorreoelectronico}
									stateOS5PMFechadealtaenSHCP={stateOS5PMFechadealtaenSHCP}
									stateOS5PMRelacionadoramajudicialGobiernoLegislativa={stateOS5PMRelacionadoramajudicialGobiernoLegislativa}
									stateOS5PMTienemasdeunpaisderesidencia={stateOS5PMTienemasdeunpaisderesidencia}
									stateOS5PMTieneoadquiriolaresidenciadelosEUA={stateOS5PMTieneoadquiriolaresidenciadelosEUA}
									stateOS5PMElobligadoesaccionistauobligadodeotraempresa={stateOS5PMElobligadoesaccionistauobligadodeotraempresa}
									stateOS5PMEsobligadoofiadordeotraempresaoPFAE={stateOS5PMEsobligadoofiadordeotraempresaoPFAE}
									stateOS5PMNombrecompleto={stateOS5PMNombrecompleto}
									stateOS5PMCargo={stateOS5PMCargo}
									stateOS5PMTelefono={stateOS5PMTelefono}
									stateOS5PMCalle={stateOS5PMCalle}
									stateOS5PMNumeroexterior={stateOS5PMNumeroexterior}
									stateOS5PMNumerointerior={stateOS5PMNumerointerior}
									stateOS5PMPiso={stateOS5PMPiso}
									stateOS5PMPais={stateOS5PMPais}
									stateOS5PMCP={stateOS5PMCP}
									stateOS5PMColonia={stateOS5PMColonia}
									stateOS5PMDelegacionMunicipio={stateOS5PMDelegacionMunicipio}
									stateOS5PMEstado={stateOS5PMEstado}
									stateOS5PMTipodeDomicilio={stateOS5PMTipodeDomicilio}
									stateOS5PMTipodevivienda={stateOS5PMTipodevivienda}
									stateOS5PMEntrecalle1={stateOS5PMEntrecalle1}
									stateOS5PMEntrecalle2={stateOS5PMEntrecalle2}
									stateOS5PMImportarexportar={stateOS5PMImportarexportar}
									stateOS5PMSector={stateOS5PMSector}
									stateOS5PMGiro={stateOS5PMGiro}
									stateOS5PMActividad={stateOS5PMActividad}
									stateOS5PMNumerodesucursales={stateOS5PMNumerodesucursales}
									stateOS5PMAnosdeexperienciaenelsector={stateOS5PMAnosdeexperienciaenelsector}

									setStatePMGENERALESRazonsocial={setStatePMGENERALESRazonsocial}
									setStatePMGENERALESRFC={setStatePMGENERALESRFC}
									setStatePMGENERALESNumerodeescritura={setStatePMGENERALESNumerodeescritura}
									setStatePMGENERALESFechadealtaenSHCP={setStatePMGENERALESFechadealtaenSHCP}
									setStatePMGENERALESDuraciondelasociedad={setStatePMGENERALESDuraciondelasociedad}
									setStatePMGENERALESFoliomercantil={setStatePMGENERALESFoliomercantil}
									setStatePMREPRESENTANTELEGALNombrecompleto={setStatePMREPRESENTANTELEGALNombrecompleto}
									setStatePMREPRESENTANTELEGALCargo={setStatePMREPRESENTANTELEGALCargo}
									setStatePMREPRESENTANTELEGALTelefono={setStatePMREPRESENTANTELEGALTelefono}
									setStatePMCONTACTOEMPRESANombrecompleto={setStatePMCONTACTOEMPRESANombrecompleto}
									setStatePMCONTACTOEMPRESACargo={setStatePMCONTACTOEMPRESACargo}
									setStatePMCONTACTOEMPRESATelefono={setStatePMCONTACTOEMPRESATelefono}
									setStatePMDOMICILIONEGOCIOCalle={setStatePMDOMICILIONEGOCIOCalle}
									setStatePMDOMICILIONEGOCIONumeroexterior={setStatePMDOMICILIONEGOCIONumeroexterior}
									setStatePMDOMICILIONEGOCIONumerointerior={setStatePMDOMICILIONEGOCIONumerointerior}
									setStatePMDOMICILIONEGOCIOPiso={setStatePMDOMICILIONEGOCIOPiso}
									setStatePMDOMICILIONEGOCIOPais={setStatePMDOMICILIONEGOCIOPais}
									setStatePMDOMICILIONEGOCIOCP={setStatePMDOMICILIONEGOCIOCP}
									setStatePMDOMICILIONEGOCIOColonia={setStatePMDOMICILIONEGOCIOColonia}
									setStatePMDOMICILIONEGOCIODelegacionMunicipio={setStatePMDOMICILIONEGOCIODelegacionMunicipio}
									setStatePMDOMICILIONEGOCIOEstado={setStatePMDOMICILIONEGOCIOEstado}
									setStatePMDOMICILIONEGOCIOTipodevivienda={setStatePMDOMICILIONEGOCIOTipodevivienda}
									setStatePMINFORMACIONNEGOCIOImportarexportar={setStatePMINFORMACIONNEGOCIOImportarexportar}
									setStatePMINFORMACIONNEGOCIOSector={setStatePMINFORMACIONNEGOCIOSector}
									setStatePMINFORMACIONNEGOCIOGiro={setStatePMINFORMACIONNEGOCIOGiro}
									setStatePMINFORMACIONNEGOCIOActividad={setStatePMINFORMACIONNEGOCIOActividad}
									setStatePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector={setStatePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector}
									setStatePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad={setStatePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad}
									setStatePMINFORMACIONNEGOCIOTotaldeempleados={setStatePMINFORMACIONNEGOCIOTotaldeempleados}
									setStatePMINFORMACIONNEGOCIONumerodesucursales={setStatePMINFORMACIONNEGOCIONumerodesucursales}
									setStatePMINFORMACIONNEGOCIOTipodelocal={setStatePMINFORMACIONNEGOCIOTipodelocal}
									setStatePMINFORMACIONNEGOCIOAnosqueloharentado={setStatePMINFORMACIONNEGOCIOAnosqueloharentado}
									setStatePMINFORMACIONNEGOCIOImporteRentaMensual={setStatePMINFORMACIONNEGOCIOImporteRentaMensual}
									setStatePMINFORMACIONNEGOCIOTotaldenominamensual={setStatePMINFORMACIONNEGOCIOTotaldenominamensual}
									setStatePMECONOMICOSVentasanuales={setStatePMECONOMICOSVentasanuales}
									setStatePMECONOMICOSTipodecomprobantedeingresos={setStatePMECONOMICOSTipodecomprobantedeingresos}
									setStatePMECONOMICOSFuentedeingresos={setStatePMECONOMICOSFuentedeingresos}
									setStateSP1Nombrerazonsocial={setStateSP1Nombrerazonsocial}
									setStateSP1Accionario={setStateSP1Accionario}
									setStateSP1RFC={setStateSP1RFC}
									setStateSP1Puestoenlaempresa={setStateSP1Puestoenlaempresa}
									setStateSP2Nombrerazonsocial={setStateSP2Nombrerazonsocial}
									setStateSP2Accionario={setStateSP2Accionario}
									setStateSP2RFC={setStateSP2RFC}
									setStateSP2Puestoenlaempresa={setStateSP2Puestoenlaempresa}
									setStateSP3Nombrerazonsocial={setStateSP3Nombrerazonsocial}
									setStateSP3Accionario={setStateSP3Accionario}
									setStateSP3RFC={setStateSP3RFC}
									setStateSP3Puestoenlaempresa={setStateSP3Puestoenlaempresa}
									setStateSP4Nombrerazonsocial={setStateSP4Nombrerazonsocial}
									setStateSP4Accionario={setStateSP4Accionario}
									setStateSP4RFC={setStateSP4RFC}
									setStateSP4Puestoenlaempresa={setStateSP4Puestoenlaempresa}
									setStateSP5Nombrerazonsocial={setStateSP5Nombrerazonsocial}
									setStateSP5Accionario={setStateSP5Accionario}
									setStateSP5RFC={setStateSP5RFC}
									setStateSP5Puestoenlaempresa={setStateSP5Puestoenlaempresa}
									setStatePRINCIPALACCIONISTANombre={setStatePRINCIPALACCIONISTANombre}
									setStatePRINCIPALACCIONISTAApellidoPaterno={setStatePRINCIPALACCIONISTAApellidoPaterno}
									setStatePRINCIPALACCIONISTAApellidoMaterno={setStatePRINCIPALACCIONISTAApellidoMaterno}
									setStatePRINCIPALACCIONISTAFechadenacimiento={setStatePRINCIPALACCIONISTAFechadenacimiento}
									setStatePRINCIPALACCIONISTAPaisdenacimiento={setStatePRINCIPALACCIONISTAPaisdenacimiento}
									setStatePRINCIPALACCIONISTAEstadodeNacimiento={setStatePRINCIPALACCIONISTAEstadodeNacimiento}
									setStatePRINCIPALACCIONISTAGenero={setStatePRINCIPALACCIONISTAGenero}
									setStatePRINCIPALACCIONISTARFC={setStatePRINCIPALACCIONISTARFC}
									setStatePRINCIPALACCIONISTACURP={setStatePRINCIPALACCIONISTACURP}
									setStatePRINCIPALACCIONISTAFolioID={setStatePRINCIPALACCIONISTAFolioID}
									setStatePRINCIPALACCIONISTANacionalidad={setStatePRINCIPALACCIONISTANacionalidad}
									setStatePRINCIPALACCIONISTACalidadmigratoria={setStatePRINCIPALACCIONISTACalidadmigratoria}
									setStatePRINCIPALACCIONISTACorreoelectronico={setStatePRINCIPALACCIONISTACorreoelectronico}
									setStatePRINCIPALACCIONISTATelefono={setStatePRINCIPALACCIONISTATelefono}
									setStatePRINCIPALACCIONISTACelular={setStatePRINCIPALACCIONISTACelular}
									setStatePRINCIPALACCIONISTAEstadocivil={setStatePRINCIPALACCIONISTAEstadocivil}
									setStatePRINCIPALACCIONISTAMenoresde23anosquedependen={setStatePRINCIPALACCIONISTAMenoresde23anosquedependen}
									setStatePRINCIPALACCIONISTATotaldedependientes={setStatePRINCIPALACCIONISTATotaldedependientes}
									setStatePRINCIPALACCIONISTANivelacademico={setStatePRINCIPALACCIONISTANivelacademico}
									setStatePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa={setStatePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa}
									setStatePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal={setStatePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal}
									setStatePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA={setStatePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA}
									setStatePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa={setStatePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa}
									setStatePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE={setStatePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE}
									setStatePRINCIPALACCIONISTATotaldenominamensual={setStatePRINCIPALACCIONISTATotaldenominamensual}
									setStatePRINCIPALACCIONISTAFuentedeingresos={setStatePRINCIPALACCIONISTAFuentedeingresos}
									setStatePRINCIPALACCIONISTACalle={setStatePRINCIPALACCIONISTACalle}
									setStatePRINCIPALACCIONISTANumerointerior={setStatePRINCIPALACCIONISTANumerointerior}
									setStatePRINCIPALACCIONISTANumeroexterior={setStatePRINCIPALACCIONISTANumeroexterior}
									setStatePRINCIPALACCIONISTAPiso={setStatePRINCIPALACCIONISTAPiso}
									setStatePRINCIPALACCIONISTAPais={setStatePRINCIPALACCIONISTAPais}
									setStatePRINCIPALACCIONISTACP={setStatePRINCIPALACCIONISTACP}
									setStatePRINCIPALACCIONISTAColonia={setStatePRINCIPALACCIONISTAColonia}
									setStatePRINCIPALACCIONISTADelegacionMunicipio={setStatePRINCIPALACCIONISTADelegacionMunicipio}
									setStatePRINCIPALACCIONISTAEstado={setStatePRINCIPALACCIONISTAEstado}
									setStatePRINCIPALACCIONISTATipodeDomicilio={setStatePRINCIPALACCIONISTATipodeDomicilio}
									setStatePRINCIPALACCIONISTATipodevivienda={setStatePRINCIPALACCIONISTATipodevivienda}
									setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioactual={setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioactual}
									setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior={setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior}
									setStatePRINCIPALACCIONISTAEntrecalle1={setStatePRINCIPALACCIONISTAEntrecalle1}
									setStatePRINCIPALACCIONISTAEntrecalle2={setStatePRINCIPALACCIONISTAEntrecalle2}
									setStateOS2PFNombre={setStateOS2PFNombre}
									setStateOS2PFApellidoPaterno={setStateOS2PFApellidoPaterno}
									setStateOS2PFApellidoMaterno={setStateOS2PFApellidoMaterno}
									setStateOS2PFFechadenacimiento={setStateOS2PFFechadenacimiento}
									setStateOS2PFPaisdenacimiento={setStateOS2PFPaisdenacimiento}
									setStateOS2PFEstadodeNacimiento={setStateOS2PFEstadodeNacimiento}
									setStateOS2PFGenero={setStateOS2PFGenero}
									setStateOS2PFRFC={setStateOS2PFRFC}
									setStateOS2PFCURP={setStateOS2PFCURP}
									setStateOS2PFFolioID={setStateOS2PFFolioID}
									setStateOS2PFNacionalidad={setStateOS2PFNacionalidad}
									setStateOS2PFCalidadmigratoria={setStateOS2PFCalidadmigratoria}
									setStateOS2PFCorreoelectronico={setStateOS2PFCorreoelectronico}
									setStateOS2PFTelefono={setStateOS2PFTelefono}
									setStateOS2PFCelular={setStateOS2PFCelular}
									setStateOS2PFMenoresde23anosquedependen={setStateOS2PFMenoresde23anosquedependen}
									setStateOS2PFTotaldedependientes={setStateOS2PFTotaldedependientes}
									setStateOS2PFRelacionconelsolicitante={setStateOS2PFRelacionconelsolicitante}
									setStateOS2PFRelacionadoramajudicialGobiernoLegislativa={setStateOS2PFRelacionadoramajudicialGobiernoLegislativa}
									setStateOS2PFTienemasdeunpaisderesidencia={setStateOS2PFTienemasdeunpaisderesidencia}
									setStateOS2PFTieneoadquiriolaresidenciadelosEUA={setStateOS2PFTieneoadquiriolaresidenciadelosEUA}
									setStateOS2PFElobligadoesaccionistauobligadodeotraempresa={setStateOS2PFElobligadoesaccionistauobligadodeotraempresa}
									setStateOS2PFEsobligadoofiadordeotraempresaoPFAE={setStateOS2PFEsobligadoofiadordeotraempresaoPFAE}
									setStateOS2PFNumeroInterior={setStateOS2PFNumeroInterior}
									setStateOS2PFPiso={setStateOS2PFPiso}
									setStateOS2PFPais={setStateOS2PFPais}
									setStateOS2PFCP={setStateOS2PFCP}
									setStateOS2PFColonia={setStateOS2PFColonia}
									setStateOS2PFDelegacionMunicipio={setStateOS2PFDelegacionMunicipio}
									setStateOS2PFEstado={setStateOS2PFEstado}
									setStateOS2PFTipodeDomicilio={setStateOS2PFTipodeDomicilio}
									setStateOS2PFTipodevivienda={setStateOS2PFTipodevivienda}
									setStateOS2PFAntiguedadeneldomicilioactual={setStateOS2PFAntiguedadeneldomicilioactual}
									setStateOS2PFAntiguedadeneldomicilioanterior={setStateOS2PFAntiguedadeneldomicilioanterior}
									setStateOS2PFEntrecalle1={setStateOS2PFEntrecalle1}
									setStateOS2PFEntrecalle2={setStateOS2PFEntrecalle2}
									setStateOS2PFAENombre={setStateOS2PFAENombre}
									setStateOS2PFAEApellidoPaterno={setStateOS2PFAEApellidoPaterno}
									setStateOS2PFAEApellidoMaterno={setStateOS2PFAEApellidoMaterno}
									setStateOS2PFAEFechadenacimiento={setStateOS2PFAEFechadenacimiento}
									setStateOS2PFAEPaisdenacimiento={setStateOS2PFAEPaisdenacimiento}
									setStateOS2PFAEEstadodeNacimiento={setStateOS2PFAEEstadodeNacimiento}
									setStateOS2PFAEGenero={setStateOS2PFAEGenero}
									setStateOS2PFAERFC={setStateOS2PFAERFC}
									setStateOS2PFAECURP={setStateOS2PFAECURP}
									setStateOS2PFAEFolioID={setStateOS2PFAEFolioID}
									setStateOS2PFAENacionalidad={setStateOS2PFAENacionalidad}
									setStateOS2PFAECalidadmigratoria={setStateOS2PFAECalidadmigratoria}
									setStateOS2PFAECorreoelectronico={setStateOS2PFAECorreoelectronico}
									setStateOS2PFAETelefono={setStateOS2PFAETelefono}
									setStateOS2PFAECelular={setStateOS2PFAECelular}
									setStateOS2PFAEMenoresde23anosquedependen={setStateOS2PFAEMenoresde23anosquedependen}
									setStateOS2PFAETotaldedependientes={setStateOS2PFAETotaldedependientes}
									setStateOS2PFAERelacionconelsolicitante={setStateOS2PFAERelacionconelsolicitante}
									setStateOS2PFAERelacionadoramajudicialGobiernoLegislativa={setStateOS2PFAERelacionadoramajudicialGobiernoLegislativa}
									setStateOS2PFAETienemasdeunpaisderesidencia={setStateOS2PFAETienemasdeunpaisderesidencia}
									setStateOS2PFAETieneoadquiriolaresidenciadelosEUA={setStateOS2PFAETieneoadquiriolaresidenciadelosEUA}
									setStateOS2PFAEElobligadoesaccionistauobligadodeotraempresa={setStateOS2PFAEElobligadoesaccionistauobligadodeotraempresa}
									setStateOS2PFAEEsobligadoofiadordeotraempresaoPFAE={setStateOS2PFAEEsobligadoofiadordeotraempresaoPFAE}
									setStateOS2PFAENumeroInterior={setStateOS2PFAENumeroInterior}
									setStateOS2PFAEPiso={setStateOS2PFAEPiso}
									setStateOS2PFAEPais={setStateOS2PFAEPais}
									setStateOS2PFAECP={setStateOS2PFAECP}
									setStateOS2PFAEColonia={setStateOS2PFAEColonia}
									setStateOS2PFAEDelegacionMunicipio={setStateOS2PFAEDelegacionMunicipio}
									setStateOS2PFAEEstado={setStateOS2PFAEEstado}
									setStateOS2PFAETipodeDomicilio={setStateOS2PFAETipodeDomicilio}
									setStateOS2PFAETipodevivienda={setStateOS2PFAETipodevivienda}
									setStateOS2PFAEAntiguedadeneldomicilioactual={setStateOS2PFAEAntiguedadeneldomicilioactual}
									setStateOS2PFAEAntiguedadeneldomicilioanterior={setStateOS2PFAEAntiguedadeneldomicilioanterior}
									setStateOS2PFAEEntrecalle1={setStateOS2PFAEEntrecalle1}
									setStateOS2PFAEEntrecalle2={setStateOS2PFAEEntrecalle2}
									setStateOS2PFAEImportarexportar={setStateOS2PFAEImportarexportar}
									setStateOS2PFAESector={setStateOS2PFAESector}
									setStateOS2PFAEGiro={setStateOS2PFAEGiro}
									setStateOS2PFAEActividad={setStateOS2PFAEActividad}
									setStateOS2PFAEFechadealtaenSHCP={setStateOS2PFAEFechadealtaenSHCP}
									setStateOS2PFAENumerodesucursales={setStateOS2PFAENumerodesucursales}
									setStateOS2PFAEAnosdeexperienciaenelsector={setStateOS2PFAEAnosdeexperienciaenelsector}
									setStateOS2PMRazonsocial={setStateOS2PMRazonsocial}
									setStateOS2PMRFC={setStateOS2PMRFC}
									setStateOS2PMCorreoelectronico={setStateOS2PMCorreoelectronico}
									setStateOS2PMFechadealtaenSHCP={setStateOS2PMFechadealtaenSHCP}
									setStateOS2PMRelacionadoramajudicialGobiernoLegislativa={setStateOS2PMRelacionadoramajudicialGobiernoLegislativa}
									setStateOS2PMTienemasdeunpaisderesidencia={setStateOS2PMTienemasdeunpaisderesidencia}
									setStateOS2PMTieneoadquiriolaresidenciadelosEUA={setStateOS2PMTieneoadquiriolaresidenciadelosEUA}
									setStateOS2PMElobligadoesaccionistauobligadodeotraempresa={setStateOS2PMElobligadoesaccionistauobligadodeotraempresa}
									setStateOS2PMEsobligadoofiadordeotraempresaoPFAE={setStateOS2PMEsobligadoofiadordeotraempresaoPFAE}
									setStateOS2PMNombrecompleto={setStateOS2PMNombrecompleto}
									setStateOS2PMCargo={setStateOS2PMCargo}
									setStateOS2PMTelefono={setStateOS2PMTelefono}
									setStateOS2PMCalle={setStateOS2PMCalle}
									setStateOS2PMNumeroexterior={setStateOS2PMNumeroexterior}
									setStateOS2PMNumerointerior={setStateOS2PMNumerointerior}
									setStateOS2PMPiso={setStateOS2PMPiso}
									setStateOS2PMPais={setStateOS2PMPais}
									setStateOS2PMCP={setStateOS2PMCP}
									setStateOS2PMColonia={setStateOS2PMColonia}
									setStateOS2PMDelegacionMunicipio={setStateOS2PMDelegacionMunicipio}
									setStateOS2PMEstado={setStateOS2PMEstado}
									setStateOS2PMTipodeDomicilio={setStateOS2PMTipodeDomicilio}
									setStateOS2PMTipodevivienda={setStateOS2PMTipodevivienda}
									setStateOS2PMEntrecalle1={setStateOS2PMEntrecalle1}
									setStateOS2PMEntrecalle2={setStateOS2PMEntrecalle2}
									setStateOS2PMImportarexportar={setStateOS2PMImportarexportar}
									setStateOS2PMSector={setStateOS2PMSector}
									setStateOS2PMGiro={setStateOS2PMGiro}
									setStateOS2PMActividad={setStateOS2PMActividad}
									setStateOS2PMNumerodesucursales={setStateOS2PMNumerodesucursales}
									setStateOS2PMAnosdeexperienciaenelsector={setStateOS2PMAnosdeexperienciaenelsector}
									setStateOS3PFNombre={setStateOS3PFNombre}
									setStateOS3PFApellidoPaterno={setStateOS3PFApellidoPaterno}
									setStateOS3PFApellidoMaterno={setStateOS3PFApellidoMaterno}
									setStateOS3PFFechadenacimiento={setStateOS3PFFechadenacimiento}
									setStateOS3PFPaisdenacimiento={setStateOS3PFPaisdenacimiento}
									setStateOS3PFEstadodeNacimiento={setStateOS3PFEstadodeNacimiento}
									setStateOS3PFGenero={setStateOS3PFGenero}
									setStateOS3PFRFC={setStateOS3PFRFC}
									setStateOS3PFCURP={setStateOS3PFCURP}
									setStateOS3PFFolioID={setStateOS3PFFolioID}
									setStateOS3PFNacionalidad={setStateOS3PFNacionalidad}
									setStateOS3PFCalidadmigratoria={setStateOS3PFCalidadmigratoria}
									setStateOS3PFCorreoelectronico={setStateOS3PFCorreoelectronico}
									setStateOS3PFTelefono={setStateOS3PFTelefono}
									setStateOS3PFCelular={setStateOS3PFCelular}
									setStateOS3PFMenoresde23anosquedependen={setStateOS3PFMenoresde23anosquedependen}
									setStateOS3PFTotaldedependientes={setStateOS3PFTotaldedependientes}
									setStateOS3PFRelacionconelsolicitante={setStateOS3PFRelacionconelsolicitante}
									setStateOS3PFRelacionadoramajudicialGobiernoLegislativa={setStateOS3PFRelacionadoramajudicialGobiernoLegislativa}
									setStateOS3PFTienemasdeunpaisderesidencia={setStateOS3PFTienemasdeunpaisderesidencia}
									setStateOS3PFTieneoadquiriolaresidenciadelosEUA={setStateOS3PFTieneoadquiriolaresidenciadelosEUA}
									setStateOS3PFElobligadoesaccionistauobligadodeotraempresa={setStateOS3PFElobligadoesaccionistauobligadodeotraempresa}
									setStateOS3PFEsobligadoofiadordeotraempresaoPFAE={setStateOS3PFEsobligadoofiadordeotraempresaoPFAE}
									setStateOS3PFNumeroInterior={setStateOS3PFNumeroInterior}
									setStateOS3PFPiso={setStateOS3PFPiso}
									setStateOS3PFPais={setStateOS3PFPais}
									setStateOS3PFCP={setStateOS3PFCP}
									setStateOS3PFColonia={setStateOS3PFColonia}
									setStateOS3PFDelegacionMunicipio={setStateOS3PFDelegacionMunicipio}
									setStateOS3PFEstado={setStateOS3PFEstado}
									setStateOS3PFTipodeDomicilio={setStateOS3PFTipodeDomicilio}
									setStateOS3PFTipodevivienda={setStateOS3PFTipodevivienda}
									setStateOS3PFAntiguedadeneldomicilioactual={setStateOS3PFAntiguedadeneldomicilioactual}
									setStateOS3PFAntiguedadeneldomicilioanterior={setStateOS3PFAntiguedadeneldomicilioanterior}
									setStateOS3PFEntrecalle1={setStateOS3PFEntrecalle1}
									setStateOS3PFEntrecalle2={setStateOS3PFEntrecalle2}
									setStateOS3PFAENombre={setStateOS3PFAENombre}
									setStateOS3PFAEApellidoPaterno={setStateOS3PFAEApellidoPaterno}
									setStateOS3PFAEApellidoMaterno={setStateOS3PFAEApellidoMaterno}
									setStateOS3PFAEFechadenacimiento={setStateOS3PFAEFechadenacimiento}
									setStateOS3PFAEPaisdenacimiento={setStateOS3PFAEPaisdenacimiento}
									setStateOS3PFAEEstadodeNacimiento={setStateOS3PFAEEstadodeNacimiento}
									setStateOS3PFAEGenero={setStateOS3PFAEGenero}
									setStateOS3PFAERFC={setStateOS3PFAERFC}
									setStateOS3PFAECURP={setStateOS3PFAECURP}
									setStateOS3PFAEFolioID={setStateOS3PFAEFolioID}
									setStateOS3PFAENacionalidad={setStateOS3PFAENacionalidad}
									setStateOS3PFAECalidadmigratoria={setStateOS3PFAECalidadmigratoria}
									setStateOS3PFAECorreoelectronico={setStateOS3PFAECorreoelectronico}
									setStateOS3PFAETelefono={setStateOS3PFAETelefono}
									setStateOS3PFAECelular={setStateOS3PFAECelular}
									setStateOS3PFAEMenoresde23anosquedependen={setStateOS3PFAEMenoresde23anosquedependen}
									setStateOS3PFAETotaldedependientes={setStateOS3PFAETotaldedependientes}
									setStateOS3PFAERelacionconelsolicitante={setStateOS3PFAERelacionconelsolicitante}
									setStateOS3PFAERelacionadoramajudicialGobiernoLegislativa={setStateOS3PFAERelacionadoramajudicialGobiernoLegislativa}
									setStateOS3PFAETienemasdeunpaisderesidencia={setStateOS3PFAETienemasdeunpaisderesidencia}
									setStateOS3PFAETieneoadquiriolaresidenciadelosEUA={setStateOS3PFAETieneoadquiriolaresidenciadelosEUA}
									setStateOS3PFAEElobligadoesaccionistauobligadodeotraempresa={setStateOS3PFAEElobligadoesaccionistauobligadodeotraempresa}
									setStateOS3PFAEEsobligadoofiadordeotraempresaoPFAE={setStateOS3PFAEEsobligadoofiadordeotraempresaoPFAE}
									setStateOS3PFAENumeroInterior={setStateOS3PFAENumeroInterior}
									setStateOS3PFAEPiso={setStateOS3PFAEPiso}
									setStateOS3PFAEPais={setStateOS3PFAEPais}
									setStateOS3PFAECP={setStateOS3PFAECP}
									setStateOS3PFAEColonia={setStateOS3PFAEColonia}
									setStateOS3PFAEDelegacionMunicipio={setStateOS3PFAEDelegacionMunicipio}
									setStateOS3PFAEEstado={setStateOS3PFAEEstado}
									setStateOS3PFAETipodeDomicilio={setStateOS3PFAETipodeDomicilio}
									setStateOS3PFAETipodevivienda={setStateOS3PFAETipodevivienda}
									setStateOS3PFAEAntiguedadeneldomicilioactual={setStateOS3PFAEAntiguedadeneldomicilioactual}
									setStateOS3PFAEAntiguedadeneldomicilioanterior={setStateOS3PFAEAntiguedadeneldomicilioanterior}
									setStateOS3PFAEEntrecalle1={setStateOS3PFAEEntrecalle1}
									setStateOS3PFAEEntrecalle2={setStateOS3PFAEEntrecalle2}
									setStateOS3PFAEImportarexportar={setStateOS3PFAEImportarexportar}
									setStateOS3PFAESector={setStateOS3PFAESector}
									setStateOS3PFAEGiro={setStateOS3PFAEGiro}
									setStateOS3PFAEActividad={setStateOS3PFAEActividad}
									setStateOS3PFAEFechadealtaenSHCP={setStateOS3PFAEFechadealtaenSHCP}
									setStateOS3PFAENumerodesucursales={setStateOS3PFAENumerodesucursales}
									setStateOS3PFAEAnosdeexperienciaenelsector={setStateOS3PFAEAnosdeexperienciaenelsector}
									setStateOS3PMRazonsocial={setStateOS3PMRazonsocial}
									setStateOS3PMRFC={setStateOS3PMRFC}
									setStateOS3PMCorreoelectronico={setStateOS3PMCorreoelectronico}
									setStateOS3PMFechadealtaenSHCP={setStateOS3PMFechadealtaenSHCP}
									setStateOS3PMRelacionadoramajudicialGobiernoLegislativa={setStateOS3PMRelacionadoramajudicialGobiernoLegislativa}
									setStateOS3PMTienemasdeunpaisderesidencia={setStateOS3PMTienemasdeunpaisderesidencia}
									setStateOS3PMTieneoadquiriolaresidenciadelosEUA={setStateOS3PMTieneoadquiriolaresidenciadelosEUA}
									setStateOS3PMElobligadoesaccionistauobligadodeotraempresa={setStateOS3PMElobligadoesaccionistauobligadodeotraempresa}
									setStateOS3PMEsobligadoofiadordeotraempresaoPFAE={setStateOS3PMEsobligadoofiadordeotraempresaoPFAE}
									setStateOS3PMNombrecompleto={setStateOS3PMNombrecompleto}
									setStateOS3PMCargo={setStateOS3PMCargo}
									setStateOS3PMTelefono={setStateOS3PMTelefono}
									setStateOS3PMCalle={setStateOS3PMCalle}
									setStateOS3PMNumeroexterior={setStateOS3PMNumeroexterior}
									setStateOS3PMNumerointerior={setStateOS3PMNumerointerior}
									setStateOS3PMPiso={setStateOS3PMPiso}
									setStateOS3PMPais={setStateOS3PMPais}
									setStateOS3PMCP={setStateOS3PMCP}
									setStateOS3PMColonia={setStateOS3PMColonia}
									setStateOS3PMDelegacionMunicipio={setStateOS3PMDelegacionMunicipio}
									setStateOS3PMEstado={setStateOS3PMEstado}
									setStateOS3PMTipodeDomicilio={setStateOS3PMTipodeDomicilio}
									setStateOS3PMTipodevivienda={setStateOS3PMTipodevivienda}
									setStateOS3PMEntrecalle1={setStateOS3PMEntrecalle1}
									setStateOS3PMEntrecalle2={setStateOS3PMEntrecalle2}
									setStateOS3PMImportarexportar={setStateOS3PMImportarexportar}
									setStateOS3PMSector={setStateOS3PMSector}
									setStateOS3PMGiro={setStateOS3PMGiro}
									setStateOS3PMActividad={setStateOS3PMActividad}
									setStateOS3PMNumerodesucursales={setStateOS3PMNumerodesucursales}
									setStateOS3PMAnosdeexperienciaenelsector={setStateOS3PMAnosdeexperienciaenelsector}
									setStateOS4PFNombre={setStateOS4PFNombre}
									setStateOS4PFApellidoPaterno={setStateOS4PFApellidoPaterno}
									setStateOS4PFApellidoMaterno={setStateOS4PFApellidoMaterno}
									setStateOS4PFFechadenacimiento={setStateOS4PFFechadenacimiento}
									setStateOS4PFPaisdenacimiento={setStateOS4PFPaisdenacimiento}
									setStateOS4PFEstadodeNacimiento={setStateOS4PFEstadodeNacimiento}
									setStateOS4PFGenero={setStateOS4PFGenero}
									setStateOS4PFRFC={setStateOS4PFRFC}
									setStateOS4PFCURP={setStateOS4PFCURP}
									setStateOS4PFFolioID={setStateOS4PFFolioID}
									setStateOS4PFNacionalidad={setStateOS4PFNacionalidad}
									setStateOS4PFCalidadmigratoria={setStateOS4PFCalidadmigratoria}
									setStateOS4PFCorreoelectronico={setStateOS4PFCorreoelectronico}
									setStateOS4PFTelefono={setStateOS4PFTelefono}
									setStateOS4PFCelular={setStateOS4PFCelular}
									setStateOS4PFMenoresde23anosquedependen={setStateOS4PFMenoresde23anosquedependen}
									setStateOS4PFTotaldedependientes={setStateOS4PFTotaldedependientes}
									setStateOS4PFRelacionconelsolicitante={setStateOS4PFRelacionconelsolicitante}
									setStateOS4PFRelacionadoramajudicialGobiernoLegislativa={setStateOS4PFRelacionadoramajudicialGobiernoLegislativa}
									setStateOS4PFTienemasdeunpaisderesidencia={setStateOS4PFTienemasdeunpaisderesidencia}
									setStateOS4PFTieneoadquiriolaresidenciadelosEUA={setStateOS4PFTieneoadquiriolaresidenciadelosEUA}
									setStateOS4PFElobligadoesaccionistauobligadodeotraempresa={setStateOS4PFElobligadoesaccionistauobligadodeotraempresa}
									setStateOS4PFEsobligadoofiadordeotraempresaoPFAE={setStateOS4PFEsobligadoofiadordeotraempresaoPFAE}
									setStateOS4PFNumeroInterior={setStateOS4PFNumeroInterior}
									setStateOS4PFPiso={setStateOS4PFPiso}
									setStateOS4PFPais={setStateOS4PFPais}
									setStateOS4PFCP={setStateOS4PFCP}
									setStateOS4PFColonia={setStateOS4PFColonia}
									setStateOS4PFDelegacionMunicipio={setStateOS4PFDelegacionMunicipio}
									setStateOS4PFEstado={setStateOS4PFEstado}
									setStateOS4PFTipodeDomicilio={setStateOS4PFTipodeDomicilio}
									setStateOS4PFTipodevivienda={setStateOS4PFTipodevivienda}
									setStateOS4PFAntiguedadeneldomicilioactual={setStateOS4PFAntiguedadeneldomicilioactual}
									setStateOS4PFAntiguedadeneldomicilioanterior={setStateOS4PFAntiguedadeneldomicilioanterior}
									setStateOS4PFEntrecalle1={setStateOS4PFEntrecalle1}
									setStateOS4PFEntrecalle2={setStateOS4PFEntrecalle2}
									setStateOS4PFAENombre={setStateOS4PFAENombre}
									setStateOS4PFAEApellidoPaterno={setStateOS4PFAEApellidoPaterno}
									setStateOS4PFAEApellidoMaterno={setStateOS4PFAEApellidoMaterno}
									setStateOS4PFAEFechadenacimiento={setStateOS4PFAEFechadenacimiento}
									setStateOS4PFAEPaisdenacimiento={setStateOS4PFAEPaisdenacimiento}
									setStateOS4PFAEEstadodeNacimiento={setStateOS4PFAEEstadodeNacimiento}
									setStateOS4PFAEGenero={setStateOS4PFAEGenero}
									setStateOS4PFAERFC={setStateOS4PFAERFC}
									setStateOS4PFAECURP={setStateOS4PFAECURP}
									setStateOS4PFAEFolioID={setStateOS4PFAEFolioID}
									setStateOS4PFAENacionalidad={setStateOS4PFAENacionalidad}
									setStateOS4PFAECalidadmigratoria={setStateOS4PFAECalidadmigratoria}
									setStateOS4PFAECorreoelectronico={setStateOS4PFAECorreoelectronico}
									setStateOS4PFAETelefono={setStateOS4PFAETelefono}
									setStateOS4PFAECelular={setStateOS4PFAECelular}
									setStateOS4PFAEMenoresde23anosquedependen={setStateOS4PFAEMenoresde23anosquedependen}
									setStateOS4PFAETotaldedependientes={setStateOS4PFAETotaldedependientes}
									setStateOS4PFAERelacionconelsolicitante={setStateOS4PFAERelacionconelsolicitante}
									setStateOS4PFAERelacionadoramajudicialGobiernoLegislativa={setStateOS4PFAERelacionadoramajudicialGobiernoLegislativa}
									setStateOS4PFAETienemasdeunpaisderesidencia={setStateOS4PFAETienemasdeunpaisderesidencia}
									setStateOS4PFAETieneoadquiriolaresidenciadelosEUA={setStateOS4PFAETieneoadquiriolaresidenciadelosEUA}
									setStateOS4PFAEElobligadoesaccionistauobligadodeotraempresa={setStateOS4PFAEElobligadoesaccionistauobligadodeotraempresa}
									setStateOS4PFAEEsobligadoofiadordeotraempresaoPFAE={setStateOS4PFAEEsobligadoofiadordeotraempresaoPFAE}
									setStateOS4PFAENumeroInterior={setStateOS4PFAENumeroInterior}
									setStateOS4PFAEPiso={setStateOS4PFAEPiso}
									setStateOS4PFAEPais={setStateOS4PFAEPais}
									setStateOS4PFAECP={setStateOS4PFAECP}
									setStateOS4PFAEColonia={setStateOS4PFAEColonia}
									setStateOS4PFAEDelegacionMunicipio={setStateOS4PFAEDelegacionMunicipio}
									setStateOS4PFAEEstado={setStateOS4PFAEEstado}
									setStateOS4PFAETipodeDomicilio={setStateOS4PFAETipodeDomicilio}
									setStateOS4PFAETipodevivienda={setStateOS4PFAETipodevivienda}
									setStateOS4PFAEAntiguedadeneldomicilioactual={setStateOS4PFAEAntiguedadeneldomicilioactual}
									setStateOS4PFAEAntiguedadeneldomicilioanterior={setStateOS4PFAEAntiguedadeneldomicilioanterior}
									setStateOS4PFAEEntrecalle1={setStateOS4PFAEEntrecalle1}
									setStateOS4PFAEEntrecalle2={setStateOS4PFAEEntrecalle2}
									setStateOS4PFAEImportarexportar={setStateOS4PFAEImportarexportar}
									setStateOS4PFAESector={setStateOS4PFAESector}
									setStateOS4PFAEGiro={setStateOS4PFAEGiro}
									setStateOS4PFAEActividad={setStateOS4PFAEActividad}
									setStateOS4PFAEFechadealtaenSHCP={setStateOS4PFAEFechadealtaenSHCP}
									setStateOS4PFAENumerodesucursales={setStateOS4PFAENumerodesucursales}
									setStateOS4PFAEAnosdeexperienciaenelsector={setStateOS4PFAEAnosdeexperienciaenelsector}
									setStateOS4PMRazonsocial={setStateOS4PMRazonsocial}
									setStateOS4PMRFC={setStateOS4PMRFC}
									setStateOS4PMCorreoelectronico={setStateOS4PMCorreoelectronico}
									setStateOS4PMFechadealtaenSHCP={setStateOS4PMFechadealtaenSHCP}
									setStateOS4PMRelacionadoramajudicialGobiernoLegislativa={setStateOS4PMRelacionadoramajudicialGobiernoLegislativa}
									setStateOS4PMTienemasdeunpaisderesidencia={setStateOS4PMTienemasdeunpaisderesidencia}
									setStateOS4PMTieneoadquiriolaresidenciadelosEUA={setStateOS4PMTieneoadquiriolaresidenciadelosEUA}
									setStateOS4PMElobligadoesaccionistauobligadodeotraempresa={setStateOS4PMElobligadoesaccionistauobligadodeotraempresa}
									setStateOS4PMEsobligadoofiadordeotraempresaoPFAE={setStateOS4PMEsobligadoofiadordeotraempresaoPFAE}
									setStateOS4PMNombrecompleto={setStateOS4PMNombrecompleto}
									setStateOS4PMCargo={setStateOS4PMCargo}
									setStateOS4PMTelefono={setStateOS4PMTelefono}
									setStateOS4PMCalle={setStateOS4PMCalle}
									setStateOS4PMNumeroexterior={setStateOS4PMNumeroexterior}
									setStateOS4PMNumerointerior={setStateOS4PMNumerointerior}
									setStateOS4PMPiso={setStateOS4PMPiso}
									setStateOS4PMPais={setStateOS4PMPais}
									setStateOS4PMCP={setStateOS4PMCP}
									setStateOS4PMColonia={setStateOS4PMColonia}
									setStateOS4PMDelegacionMunicipio={setStateOS4PMDelegacionMunicipio}
									setStateOS4PMEstado={setStateOS4PMEstado}
									setStateOS4PMTipodeDomicilio={setStateOS4PMTipodeDomicilio}
									setStateOS4PMTipodevivienda={setStateOS4PMTipodevivienda}
									setStateOS4PMEntrecalle1={setStateOS4PMEntrecalle1}
									setStateOS4PMEntrecalle2={setStateOS4PMEntrecalle2}
									setStateOS4PMImportarexportar={setStateOS4PMImportarexportar}
									setStateOS4PMSector={setStateOS4PMSector}
									setStateOS4PMGiro={setStateOS4PMGiro}
									setStateOS4PMActividad={setStateOS4PMActividad}
									setStateOS4PMNumerodesucursales={setStateOS4PMNumerodesucursales}
									setStateOS4PMAnosdeexperienciaenelsector={setStateOS4PMAnosdeexperienciaenelsector}
									setStateOS5PFNombre={setStateOS5PFNombre}
									setStateOS5PFApellidoPaterno={setStateOS5PFApellidoPaterno}
									setStateOS5PFApellidoMaterno={setStateOS5PFApellidoMaterno}
									setStateOS5PFFechadenacimiento={setStateOS5PFFechadenacimiento}
									setStateOS5PFPaisdenacimiento={setStateOS5PFPaisdenacimiento}
									setStateOS5PFEstadodeNacimiento={setStateOS5PFEstadodeNacimiento}
									setStateOS5PFGenero={setStateOS5PFGenero}
									setStateOS5PFRFC={setStateOS5PFRFC}
									setStateOS5PFCURP={setStateOS5PFCURP}
									setStateOS5PFFolioID={setStateOS5PFFolioID}
									setStateOS5PFNacionalidad={setStateOS5PFNacionalidad}
									setStateOS5PFCalidadmigratoria={setStateOS5PFCalidadmigratoria}
									setStateOS5PFCorreoelectronico={setStateOS5PFCorreoelectronico}
									setStateOS5PFTelefono={setStateOS5PFTelefono}
									setStateOS5PFCelular={setStateOS5PFCelular}
									setStateOS5PFMenoresde23anosquedependen={setStateOS5PFMenoresde23anosquedependen}
									setStateOS5PFTotaldedependientes={setStateOS5PFTotaldedependientes}
									setStateOS5PFRelacionconelsolicitante={setStateOS5PFRelacionconelsolicitante}
									setStateOS5PFRelacionadoramajudicialGobiernoLegislativa={setStateOS5PFRelacionadoramajudicialGobiernoLegislativa}
									setStateOS5PFTienemasdeunpaisderesidencia={setStateOS5PFTienemasdeunpaisderesidencia}
									setStateOS5PFTieneoadquiriolaresidenciadelosEUA={setStateOS5PFTieneoadquiriolaresidenciadelosEUA}
									setStateOS5PFElobligadoesaccionistauobligadodeotraempresa={setStateOS5PFElobligadoesaccionistauobligadodeotraempresa}
									setStateOS5PFEsobligadoofiadordeotraempresaoPFAE={setStateOS5PFEsobligadoofiadordeotraempresaoPFAE}
									setStateOS5PFNumeroInterior={setStateOS5PFNumeroInterior}
									setStateOS5PFPiso={setStateOS5PFPiso}
									setStateOS5PFPais={setStateOS5PFPais}
									setStateOS5PFCP={setStateOS5PFCP}
									setStateOS5PFColonia={setStateOS5PFColonia}
									setStateOS5PFDelegacionMunicipio={setStateOS5PFDelegacionMunicipio}
									setStateOS5PFEstado={setStateOS5PFEstado}
									setStateOS5PFTipodeDomicilio={setStateOS5PFTipodeDomicilio}
									setStateOS5PFTipodevivienda={setStateOS5PFTipodevivienda}
									setStateOS5PFAntiguedadeneldomicilioactual={setStateOS5PFAntiguedadeneldomicilioactual}
									setStateOS5PFAntiguedadeneldomicilioanterior={setStateOS5PFAntiguedadeneldomicilioanterior}
									setStateOS5PFEntrecalle1={setStateOS5PFEntrecalle1}
									setStateOS5PFEntrecalle2={setStateOS5PFEntrecalle2}
									setStateOS5PFAENombre={setStateOS5PFAENombre}
									setStateOS5PFAEApellidoPaterno={setStateOS5PFAEApellidoPaterno}
									setStateOS5PFAEApellidoMaterno={setStateOS5PFAEApellidoMaterno}
									setStateOS5PFAEFechadenacimiento={setStateOS5PFAEFechadenacimiento}
									setStateOS5PFAEPaisdenacimiento={setStateOS5PFAEPaisdenacimiento}
									setStateOS5PFAEEstadodeNacimiento={setStateOS5PFAEEstadodeNacimiento}
									setStateOS5PFAEGenero={setStateOS5PFAEGenero}
									setStateOS5PFAERFC={setStateOS5PFAERFC}
									setStateOS5PFAECURP={setStateOS5PFAECURP}
									setStateOS5PFAEFolioID={setStateOS5PFAEFolioID}
									setStateOS5PFAENacionalidad={setStateOS5PFAENacionalidad}
									setStateOS5PFAECalidadmigratoria={setStateOS5PFAECalidadmigratoria}
									setStateOS5PFAECorreoelectronico={setStateOS5PFAECorreoelectronico}
									setStateOS5PFAETelefono={setStateOS5PFAETelefono}
									setStateOS5PFAECelular={setStateOS5PFAECelular}
									setStateOS5PFAEMenoresde23anosquedependen={setStateOS5PFAEMenoresde23anosquedependen}
									setStateOS5PFAETotaldedependientes={setStateOS5PFAETotaldedependientes}
									setStateOS5PFAERelacionconelsolicitante={setStateOS5PFAERelacionconelsolicitante}
									setStateOS5PFAERelacionadoramajudicialGobiernoLegislativa={setStateOS5PFAERelacionadoramajudicialGobiernoLegislativa}
									setStateOS5PFAETienemasdeunpaisderesidencia={setStateOS5PFAETienemasdeunpaisderesidencia}
									setStateOS5PFAETieneoadquiriolaresidenciadelosEUA={setStateOS5PFAETieneoadquiriolaresidenciadelosEUA}
									setStateOS5PFAEElobligadoesaccionistauobligadodeotraempresa={setStateOS5PFAEElobligadoesaccionistauobligadodeotraempresa}
									setStateOS5PFAEEsobligadoofiadordeotraempresaoPFAE={setStateOS5PFAEEsobligadoofiadordeotraempresaoPFAE}
									setStateOS5PFAENumeroInterior={setStateOS5PFAENumeroInterior}
									setStateOS5PFAEPiso={setStateOS5PFAEPiso}
									setStateOS5PFAEPais={setStateOS5PFAEPais}
									setStateOS5PFAECP={setStateOS5PFAECP}
									setStateOS5PFAEColonia={setStateOS5PFAEColonia}
									setStateOS5PFAEDelegacionMunicipio={setStateOS5PFAEDelegacionMunicipio}
									setStateOS5PFAEEstado={setStateOS5PFAEEstado}
									setStateOS5PFAETipodeDomicilio={setStateOS5PFAETipodeDomicilio}
									setStateOS5PFAETipodevivienda={setStateOS5PFAETipodevivienda}
									setStateOS5PFAEAntiguedadeneldomicilioactual={setStateOS5PFAEAntiguedadeneldomicilioactual}
									setStateOS5PFAEAntiguedadeneldomicilioanterior={setStateOS5PFAEAntiguedadeneldomicilioanterior}
									setStateOS5PFAEEntrecalle1={setStateOS5PFAEEntrecalle1}
									setStateOS5PFAEEntrecalle2={setStateOS5PFAEEntrecalle2}
									setStateOS5PFAEImportarexportar={setStateOS5PFAEImportarexportar}
									setStateOS5PFAESector={setStateOS5PFAESector}
									setStateOS5PFAEGiro={setStateOS5PFAEGiro}
									setStateOS5PFAEActividad={setStateOS5PFAEActividad}
									setStateOS5PFAEFechadealtaenSHCP={setStateOS5PFAEFechadealtaenSHCP}
									setStateOS5PFAENumerodesucursales={setStateOS5PFAENumerodesucursales}
									setStateOS5PFAEAnosdeexperienciaenelsector={setStateOS5PFAEAnosdeexperienciaenelsector}
									setStateOS5PMRazonsocial={setStateOS5PMRazonsocial}
									setStateOS5PMRFC={setStateOS5PMRFC}
									setStateOS5PMCorreoelectronico={setStateOS5PMCorreoelectronico}
									setStateOS5PMFechadealtaenSHCP={setStateOS5PMFechadealtaenSHCP}
									setStateOS5PMRelacionadoramajudicialGobiernoLegislativa={setStateOS5PMRelacionadoramajudicialGobiernoLegislativa}
									setStateOS5PMTienemasdeunpaisderesidencia={setStateOS5PMTienemasdeunpaisderesidencia}
									setStateOS5PMTieneoadquiriolaresidenciadelosEUA={setStateOS5PMTieneoadquiriolaresidenciadelosEUA}
									setStateOS5PMElobligadoesaccionistauobligadodeotraempresa={setStateOS5PMElobligadoesaccionistauobligadodeotraempresa}
									setStateOS5PMEsobligadoofiadordeotraempresaoPFAE={setStateOS5PMEsobligadoofiadordeotraempresaoPFAE}
									setStateOS5PMNombrecompleto={setStateOS5PMNombrecompleto}
									setStateOS5PMCargo={setStateOS5PMCargo}
									setStateOS5PMTelefono={setStateOS5PMTelefono}
									setStateOS5PMCalle={setStateOS5PMCalle}
									setStateOS5PMNumeroexterior={setStateOS5PMNumeroexterior}
									setStateOS5PMNumerointerior={setStateOS5PMNumerointerior}
									setStateOS5PMPiso={setStateOS5PMPiso}
									setStateOS5PMPais={setStateOS5PMPais}
									setStateOS5PMCP={setStateOS5PMCP}
									setStateOS5PMColonia={setStateOS5PMColonia}
									setStateOS5PMDelegacionMunicipio={setStateOS5PMDelegacionMunicipio}
									setStateOS5PMEstado={setStateOS5PMEstado}
									setStateOS5PMTipodeDomicilio={setStateOS5PMTipodeDomicilio}
									setStateOS5PMTipodevivienda={setStateOS5PMTipodevivienda}
									setStateOS5PMEntrecalle1={setStateOS5PMEntrecalle1}
									setStateOS5PMEntrecalle2={setStateOS5PMEntrecalle2}
									setStateOS5PMImportarexportar={setStateOS5PMImportarexportar}
									setStateOS5PMSector={setStateOS5PMSector}
									setStateOS5PMGiro={setStateOS5PMGiro}
									setStateOS5PMActividad={setStateOS5PMActividad}
									setStateOS5PMNumerodesucursales={setStateOS5PMNumerodesucursales}
									setStateOS5PMAnosdeexperienciaenelsector={setStateOS5PMAnosdeexperienciaenelsector}
									transitionDiesiseis={transitionDiesiseis}
									stateTieneunatarjetadecredito={stateTieneunatarjetadecredito}
									setStateTieneunatarjetadecredito={setStateTieneunatarjetadecredito}
									stateDigitalosultimos4numeros={stateDigitalosultimos4numeros}
									setStateDigitalosultimos4numeros={setStateDigitalosultimos4numeros}
									stateErestitulardeuncreditohipotecario={stateErestitulardeuncreditohipotecario}
									setStateErestitulardeuncreditohipotecario={setStateErestitulardeuncreditohipotecario}
									stateHasidotitulardeuncreditoautomotrizenlosultimos24meses={stateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
									setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses={setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
									stateHoySiendoDia={stateHoySiendoDia}
									setStateHoySiendoDia={setStateHoySiendoDia}
									setShowResult={setShowResult}
									transitionDiesisiete={transitionDiesisiete}
									setFileOne={setFileOne}
									fileOne={fileOne}
									setFileTwo={setFileTwo}
									fileTwo={fileTwo}
									setFileThree={setFileThree}
									fileThree={fileThree}
									setFileFour={setFileFour}
									fileFour={fileFour}
									transitionDiesiocho={transitionDiesiocho}

									stateNumerosdebienesapresentar={stateNumerosdebienesapresentar}
									stateTotaldelvalorestimado={stateTotaldelvalorestimado}
									stateUbicacion={stateUbicacion}
									stateSuperficieM2={stateSuperficieM2}
									stateDescriciondelinmueble={stateDescriciondelinmueble}
									stateValormanifestado={stateValormanifestado}
									stateValorpredial={stateValorpredial}
									stateDatosderegistro={stateDatosderegistro}
									stateNombredelproducto={stateNombredelproducto}
									stateRegimendelacuentaMancomunadaoIndistinta={stateRegimendelacuentaMancomunadaoIndistinta}
									stateNombredelapoderadomancomunado={stateNombredelapoderadomancomunado}
									stateNombredelapoderadomancomunado2={stateNombredelapoderadomancomunado2}
									stateEstatusFATCACRS={stateEstatusFATCACRS}
									stateCFDI={stateCFDI}
									stateEntregadeCorrespondencia={stateEntregadeCorrespondencia}
									stateMontodeReferenciadelaInversion={stateMontodeReferenciadelaInversion}
									stateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID={stateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID}
									stateRequiereChequera={stateRequiereChequera}
									stateRequiereTarjetadeDebito={stateRequiereTarjetadeDebito}
									stateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca={stateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca}
									stateServiciodeBancaElectronica={stateServiciodeBancaElectronica}
									stateBancaElectronicaBEPoBEM={stateBancaElectronicaBEPoBEM}
									statePlan={statePlan}
									stateTipoCobro={stateTipoCobro}
									stateCuentacargo={stateCuentacargo}
									stateOperacionMancumunadaparaBancaElectronica={stateOperacionMancumunadaparaBancaElectronica}
									stateOperacionMancumunadaparalibramientodecheques={stateOperacionMancumunadaparalibramientodecheques}
									setStateNumerosdebienesapresentar={setStateNumerosdebienesapresentar}
									setStateTotaldelvalorestimado={setStateTotaldelvalorestimado}
									setStateUbicacion={setStateUbicacion}
									setStateSuperficieM2={setStateSuperficieM2}
									setStateDescriciondelinmueble={setStateDescriciondelinmueble}
									setStateValormanifestado={setStateValormanifestado}
									setStateValorpredial={setStateValorpredial}
									setStateDatosderegistro={setStateDatosderegistro}
									setStateNombredelproducto={setStateNombredelproducto}
									setStateRegimendelacuentaMancomunadaoIndistinta={setStateRegimendelacuentaMancomunadaoIndistinta}
									setStateNombredelapoderadomancomunado={setStateNombredelapoderadomancomunado}
									setStateNombredelapoderadomancomunado2={setStateNombredelapoderadomancomunado2}
									setStateEstatusFATCACRS={setStateEstatusFATCACRS}
									setStateCFDI={setStateCFDI}
									setStateEntregadeCorrespondencia={setStateEntregadeCorrespondencia}
									setStateMontodeReferenciadelaInversion={setStateMontodeReferenciadelaInversion}
									setStateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID={setStateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID}
									setStateRequiereChequera={setStateRequiereChequera}
									setStateRequiereTarjetadeDebito={setStateRequiereTarjetadeDebito}
									setStateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca={setStateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca}
									setStateServiciodeBancaElectronica={setStateServiciodeBancaElectronica}
									setStateBancaElectronicaBEPoBEM={setStateBancaElectronicaBEPoBEM}
									setStatePlan={setStatePlan}
									setStateTipoCobro={setStateTipoCobro}
									setStateCuentacargo={setStateCuentacargo}
									setStateOperacionMancumunadaparaBancaElectronica={setStateOperacionMancumunadaparaBancaElectronica}
									setStateOperacionMancumunadaparalibramientodecheques={setStateOperacionMancumunadaparalibramientodecheques}
									tipoPersona={tipoPersona}
									cantidadObligadosSolidarios={cantidadObligadosSolidarios}
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
																<span>Nombre </span>
																<input state="" value={statePFAEGENERALESNombre} onChange={(e) => setStatePFAEGENERALESNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Apellido Paterno </span>
																<input state="" value={statePFAEGENERALESApellidoPaterno} onChange={(e) => setStatePFAEGENERALESApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Apellido Materno</span>
																<input state="" value={statePFAEGENERALESApellidoMaterno} onChange={(e) => setStatePFAEGENERALESApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Fecha de nacimiento </span>
																<input state="" value={statePFAEGENERALESFechadenacimiento} onChange={(e) => setStatePFAEGENERALESFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>País de nacimiento</span>
																<select state="" value={statePFAEGENERALESPaisdenacimiento} onChange={(e) => setStatePFAEGENERALESPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																<span>Estado de Nacimiento</span>
																<select state="" value={statePFAEGENERALESEstadodeNacimiento} onChange={(e) => setStatePFAEGENERALESEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																<span>Género</span>
																<select state="" value={statePFAEGENERALESGenero} onChange={(e) => setStatePFAEGENERALESGenero(e.target.value)} required style={{ width: '55%' }}>
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
																<span>RFC </span>
																<input state="" value={statePFAEGENERALESRFC} onChange={(e) => setStatePFAEGENERALESRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>CURP </span>
																<input state="" value={statePFAEGENERALESCURP} onChange={(e) => setStatePFAEGENERALESCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Folio ID </span>
																<input state="" value={statePFAEGENERALESFolioID} onChange={(e) => setStatePFAEGENERALESFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Nacionalidad </span>
																<select state="" value={statePFAEGENERALESNacionalidad} onChange={(e) => setStatePFAEGENERALESNacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																<span>Correo electrónico </span>
																<input state="" value={statePFAEGENERALESCorreoelectronico} onChange={(e) => setStatePFAEGENERALESCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Teléfono </span>
																<input state="" value={statePFAEGENERALESTelefono} onChange={(e) => setStatePFAEGENERALESTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Celular </span>
																<input state="" value={statePFAEGENERALESCelular} onChange={(e) => setStatePFAEGENERALESCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Estado Civil </span>
																<select state="" value={statePFAEGENERALESEstadoCivil} onChange={(e) => setStatePFAEGENERALESEstadoCivil(e.target.value)} required style={{ width: '55%' }}>
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
																<span>Menores de 23 años que dependen </span>
																<select state="" value={statePFAEGENERALESMenoresde23anosquedependen} onChange={(e) => setStatePFAEGENERALESMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																<span>Total de dependientes </span>
																<select state="" value={statePFAEGENERALESTotaldedependientes} onChange={(e) => setStatePFAEGENERALESTotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																<span>Nivel académico </span>
																<select state="" value={statePFAEGENERALESNivelacademico} onChange={(e) => setStatePFAEGENERALESNivelacademico(e.target.value)} required style={{ width: '55%' }}>
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
																	<input state="" defaultChecked={statePFAEGENERALESRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStatePFAEGENERALESRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																	<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																		Relacionado rama judicial / Gobierno / Legislativa
																	</label>
																</div>
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																<div className="form-check">
																	<input state="" defaultChecked={statePFAEGENERALESTienemasdeunpaisderesidencia} onChange={(e) => setStatePFAEGENERALESTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																	<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																		¿Tiene más de un país de residencia?
																	</label>
																</div>
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																<div className="form-check">
																	<input state="" defaultChecked={statePFAEGENERALESTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStatePFAEGENERALESTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																	<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																		¿Tiene o adquirió la residencia de los EUA?
																	</label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
													<button className="bgc-red" type="submit">Siguiente</button>
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
																<input state="" value={statePFAEDOMICILIOCalle} onChange={(e) => setStatePFAEDOMICILIOCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Número Exterior</span >
																<input state="" value={statePFAEDOMICILIONumeroExterior} onChange={(e) => setStatePFAEDOMICILIONumeroExterior(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Número Interior</span >
																<input state="" value={statePFAEDOMICILIONumeroInterior} onChange={(e) => setStatePFAEDOMICILIONumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Piso</span >
																<input state="" value={statePFAEDOMICILIOPiso} onChange={(e) => setStatePFAEDOMICILIOPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>País</span >
																<select state="" value={statePFAEDOMICILIOPais} onChange={(e) => setStatePFAEDOMICILIOPais(e.target.value)} required style={{ width: '55%' }}>
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
																<input state="" value={statePFAEDOMICILIOCP} onChange={(e) => setStatePFAEDOMICILIOCP(e.target.value)} style={{ width: '55%' }} type="number" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Colonia</span >
																<input state="" value={statePFAEDOMICILIOColonia} onChange={(e) => setStatePFAEDOMICILIOColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Delegación/Municipio</span >
																<select state="" value={statePFAEDOMICILIODelegacionMunicipio} onChange={(e) => setStatePFAEDOMICILIODelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOEstado} onChange={(e) => setStatePFAEDOMICILIOEstado(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOTipodeDomicilio} onChange={(e) => setStatePFAEDOMICILIOTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOTipodevivienda} onChange={(e) => setStatePFAEDOMICILIOTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOAntiguedadeneldomicilioactual} onChange={(e) => setStatePFAEDOMICILIOAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																	<option value="">Seleccione opcion</option>
																	<option value="2">value</option>
																	<option value="1">value</option>
																</select>
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Importe de la renta</span >
																<input state="" value={statePFAEDOMICILIOImportedelarenta} onChange={(e) => setStatePFAEDOMICILIOImportedelarenta(e.target.value)} style={{ width: '55%' }} type="text" required value={importeRenta} onChange={(e) => handlePesos(e, setImporteRenta)} />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Antigüedad en el domicilio anterior</span >
																<select state="" value={statePFAEDOMICILIOAntiguedadeneldomicilioanterior} onChange={(e) => setStatePFAEDOMICILIOAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																	<option value="">Seleccione opcion</option>
																	<option value="2">value</option>
																	<option value="1">value</option>
																</select>
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Entre calle 1</span >
																<input state="" value={statePFAEDOMICILIOEntrecalle1} onChange={(e) => setStatePFAEDOMICILIOEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Entre calle 2</span >
																<input state="" value={statePFAEDOMICILIOEntrecalle2} onChange={(e) => setStatePFAEDOMICILIOEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
													</div>
												</div>
												<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
													<button className="bgc-red" type="submit">Siguiente</button>
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
																<input state="" value={statePFAEDOMICILIOFISCALCalle} onChange={(e) => setStatePFAEDOMICILIOFISCALCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Número Exterior </span >
																<input state="" value={statePFAEDOMICILIOFISCALNumeroExterior} onChange={(e) => setStatePFAEDOMICILIOFISCALNumeroExterior(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Número Interior </span >
																<input state="" value={statePFAEDOMICILIOFISCALNumeroInterior} onChange={(e) => setStatePFAEDOMICILIOFISCALNumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>CP </span >
																<input state="" value={statePFAEDOMICILIOFISCALCP} onChange={(e) => setStatePFAEDOMICILIOFISCALCP(e.target.value)} style={{ width: '55%' }} type="number" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Colonia </span >
																<input state="" value={statePFAEDOMICILIOFISCALColonia} onChange={(e) => setStatePFAEDOMICILIOFISCALColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Delegación/Municipio </span >
																<select state="" value={statePFAEDOMICILIOFISCALDelegacionMunicipio} onChange={(e) => setStatePFAEDOMICILIOFISCALDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOFISCALEstado} onChange={(e) => setStatePFAEDOMICILIOFISCALEstado(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOFISCALSector} onChange={(e) => setStatePFAEDOMICILIOFISCALSector(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOFISCALGiro} onChange={(e) => setStatePFAEDOMICILIOFISCALGiro(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOFISCALActividad} onChange={(e) => setStatePFAEDOMICILIOFISCALActividad(e.target.value)} required style={{ width: '55%' }}>
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
																<input state="" value={statePFAEDOMICILIOFISCALFechaaltadeSHCP} onChange={(e) => setStatePFAEDOMICILIOFISCALFechaaltadeSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Años de experiencia en el sector </span >
																<select state="" value={statePFAEDOMICILIOFISCALAnosdeexperienciaenelsector} onChange={(e) => setStatePFAEDOMICILIOFISCALAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOFISCALImportarExportar} onChange={(e) => setStatePFAEDOMICILIOFISCALImportarExportar(e.target.value)} required style={{ width: '55%' }}>
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
																<input state="" value={statePFAEDOMICILIOFISCALTotaldeempleados} onChange={(e) => setStatePFAEDOMICILIOFISCALTotaldeempleados(e.target.value)} style={{ width: '55%' }} type="number" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Número de sucursales </span >
																<input state="" value={statePFAEDOMICILIOFISCALNumerodesucursales} onChange={(e) => setStatePFAEDOMICILIOFISCALNumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Tipo de local </span >
																<select state="" value={statePFAEDOMICILIOFISCALTipodelocal} onChange={(e) => setStatePFAEDOMICILIOFISCALTipodelocal(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOFISCALAnosqueloharentado} onChange={(e) => setStatePFAEDOMICILIOFISCALAnosqueloharentado(e.target.value)} required style={{ width: '55%' }}>
																	<option value="">Seleccione opcion</option>
																	<option value="2">value</option>
																	<option value="1">value</option>
																</select>
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Importe Renta Mensual</span >
																<input state="" value={statePFAEDOMICILIOFISCALImporteRentaMensual} onChange={(e) => setStatePFAEDOMICILIOFISCALImporteRentaMensual(e.target.value)} style={{ width: '55%' }} type="text" required value={importeRentaFiscal} onChange={(e) => handlePesos(e, setImporteRentaFiscal)} />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Antigüedad de su actividad</span >
																<input state="" value={statePFAEDOMICILIOFISCALAntiguedaddesuactividad} onChange={(e) => setStatePFAEDOMICILIOFISCALAntiguedaddesuactividad(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Total de nómina mensual</span >
																<input state="" value={statePFAEDOMICILIOFISCALTotaldenominamensual} onChange={(e) => setStatePFAEDOMICILIOFISCALTotaldenominamensual(e.target.value)} style={{ width: '55%' }} type="text" required value={totalNominaMensual} onChange={(e) => handlePesos(e, setTotalNominaMensual)} />
															</div>
														</div>
													</div>
												</div>
												<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
													<button className="bgc-red" type="submit">Siguiente</button>
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
																<input state="" value={statePFAEDOMICILIOCOMERCIALCalle} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Número Exterior </span >
																<input state="" value={statePFAEDOMICILIOCOMERCIALNumeroExterior} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALNumeroExterior(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Número Interior </span >
																<input state="" value={statePFAEDOMICILIOCOMERCIALNumeroInterior} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALNumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>CP </span >
																<input state="" value={statePFAEDOMICILIOCOMERCIALCP} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALCP(e.target.value)} style={{ width: '55%' }} type="number" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Colonia </span >
																<input state="" value={statePFAEDOMICILIOCOMERCIALColonia} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Delegación/Municipio </span >
																<select state="" value={statePFAEDOMICILIOCOMERCIALDelegacionMunicipio} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOCOMERCIALEstado} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALEstado(e.target.value)} required style={{ width: '55%' }}>
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
																<select state="" value={statePFAEDOMICILIOCOMERCIALTiempoderesidencia} onChange={(e) => setStatePFAEDOMICILIOCOMERCIALTiempoderesidencia(e.target.value)} required style={{ width: '55%' }}>
																	<option value="">Seleccione opcion</option>
																	<option value="2">value</option>
																	<option value="1">value</option>
																</select>
															</div>
														</div>
													</div>
												</div>
												<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
													<button className="bgc-red" type="submit">Siguiente</button>
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
																<input state="" value={statePFAEECONOMICOSVentasanuales} onChange={(e) => setStatePFAEECONOMICOSVentasanuales(e.target.value)} style={{ width: '55%' }} type="text" required value={ventasAnuales} onChange={(e) => handlePesos(e, setVentasAnuales)} />
															</div>
														</div>
														<div className="col-12">
															<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																<span>Tipo de comprobante de ingresos</span >
																<select state="" value={statePFAEECONOMICOSTipodecomprobantedeingresos} onChange={(e) => setStatePFAEECONOMICOSTipodecomprobantedeingresos(e.target.value)} required style={{ width: '55%' }}>
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
																<input state="" value={statePFAEECONOMICOSFuentedeingresos} onChange={(e) => setStatePFAEECONOMICOSFuentedeingresos(e.target.value)} style={{ width: '55%' }} type="text" required />
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
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input value={bancoOne.mesUno.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesUno', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input value={bancoOne.mesUno.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesUno', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input value={bancoOne.mesUno.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesUno', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input value={bancoOne.mesUno.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesUno', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>

																									<div className="col-12">
																										<h4>Mes 2</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesDos', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesDos', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesDos', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoOne("mesUno")} value={bancoOne.mesDos.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesDos', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 3</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesTres', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesTres', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesTres', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoOne("mesDos")} value={bancoOne.mesTres.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesTres', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>

																									<div className="col-12">
																										<h4>Mes 4</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesCuatro', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesCuatro', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesCuatro', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoOne("mesTres")} value={bancoOne.mesCuatro.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesCuatro', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>

																									<div className="col-12">
																										<h4>Mes 5</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesCinco', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesCinco', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesCinco', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoOne("mesCuatro")} value={bancoOne.mesCinco.fields.totalDepositos} onChange={(e) => modifyBancoOne('mesCinco', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 6</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoOne("mesCinco")} value={bancoOne.mesSeis.fields.saldoPromedio} onChange={(e) => modifyBancoOne('mesSeis', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoOne("mesCinco")} value={bancoOne.mesSeis.fields.saldoInicial} onChange={(e) => modifyBancoOne('mesSeis', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoOne("mesCinco")} value={bancoOne.mesSeis.fields.totalRetiros} onChange={(e) => modifyBancoOne('mesSeis', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
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
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input value={bancoTwo.mesUno.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesUno', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input value={bancoTwo.mesUno.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesUno', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input value={bancoTwo.mesUno.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesUno', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input value={bancoTwo.mesUno.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesUno', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 2</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesDos', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesDos', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesDos', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoTwo("mesUno")} value={bancoTwo.mesDos.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesDos', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 3</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesTres', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesTres', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesTres', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoTwo("mesDos")} value={bancoTwo.mesTres.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesTres', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 4</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesCuatro', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesCuatro', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesCuatro', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoTwo("mesTres")} value={bancoTwo.mesCuatro.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesCuatro', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 5</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesCinco', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesCinco', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesCinco', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoTwo("mesCuatro")} value={bancoTwo.mesCinco.fields.totalDepositos} onChange={(e) => modifyBancoTwo('mesCinco', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 6</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoTwo("mesCinco")} value={bancoTwo.mesSeis.fields.saldoPromedio} onChange={(e) => modifyBancoTwo('mesSeis', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoTwo("mesCinco")} value={bancoTwo.mesSeis.fields.saldoInicial} onChange={(e) => modifyBancoTwo('mesSeis', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoTwo("mesCinco")} value={bancoTwo.mesSeis.fields.totalRetiros} onChange={(e) => modifyBancoTwo('mesSeis', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
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
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input value={bancoThree.mesUno.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesUno', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input value={bancoThree.mesUno.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesUno', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input value={bancoThree.mesUno.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesUno', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input value={bancoThree.mesUno.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesUno', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 2</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesDos', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesDos', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesDos', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoThree("mesUno")} value={bancoThree.mesDos.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesDos', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 3</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesTres', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesTres', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesTres', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoThree("mesDos")} value={bancoThree.mesTres.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesTres', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 4</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesCuatro', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesCuatro', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesCuatro', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoThree("mesTres")} value={bancoThree.mesCuatro.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesCuatro', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 5</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesCinco', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesCinco', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesCinco', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de Depósitos </span >
																											<input disabled={validateMesDisabledBancoThree("mesCuatro")} value={bancoThree.mesCinco.fields.totalDepositos} onChange={(e) => modifyBancoThree('mesCinco', "totalDepositos", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-12">
																										<h4>Mes 6</h4>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo promedio de la cuenta de cheques </span >
																											<input disabled={validateMesDisabledBancoThree("mesCinco")} value={bancoThree.mesSeis.fields.saldoPromedio} onChange={(e) => modifyBancoThree('mesSeis', "saldoPromedio", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Saldo Inicial </span >
																											<input disabled={validateMesDisabledBancoThree("mesCinco")} value={bancoThree.mesSeis.fields.saldoInicial} onChange={(e) => modifyBancoThree('mesSeis', "saldoInicial", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
																										<div style={{ display: 'flex', flexFlow: 'column', marginBottom: '24px' }}>
																											<span style={{ textAlign: 'left' }}>Total de retiros </span >
																											<input disabled={validateMesDisabledBancoThree("mesCinco")} value={bancoThree.mesSeis.fields.totalRetiros} onChange={(e) => modifyBancoThree('mesSeis', "totalRetiros", e.target.value)} type="text" required />
																										</div>
																									</div>
																									<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
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
													<button className="bgc-red" type="submit">Siguiente</button>
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
															<div onClick={() => { setPrimerObligadoSolidario("PF"); handleSeccion(true); handleNextOS(1) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
															</div>
															<span className="text-center">Persona fisica</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setPrimerObligadoSolidario("PFAE"); handleSeccion(true); handleNextOS(1) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
															</div>
															<span className="text-center">Persona fisica con actividad empresarial</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setPrimerObligadoSolidario("PM"); handleSeccion(true); handleNextOS(1) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS1PFNombre} onChange={(e) => setStateOS1PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS1PFApellidoPaterno} onChange={(e) => setStateOS1PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS1PFApellidoMaterno} onChange={(e) => setStateOS1PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS1PFFechadenacimiento} onChange={(e) => setStateOS1PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS1PFPaisdenacimiento} onChange={(e) => setStateOS1PFPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS1PFEstadodeNacimiento} onChange={(e) => setStateOS1PFEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS1PFGenero} onChange={(e) => setStateOS1PFGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS1PFRFC} onChange={(e) => setStateOS1PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS1PFCURP} onChange={(e) => setStateOS1PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS1PFFolioID} onChange={(e) => setStateOS1PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS1PFNacionalidad} onChange={(e) => setStateOS1PFNacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS1PFCalidadmigratoria} onChange={(e) => setStateOS1PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS1PFCorreoelectronico} onChange={(e) => setStateOS1PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS1PFTelefono} onChange={(e) => setStateOS1PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS1PFCelular} onChange={(e) => setStateOS1PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS1PFMenoresde23anosquedependen} onChange={(e) => setStateOS1PFMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS1PFTotaldedependientes} onChange={(e) => setStateOS1PFTotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS1PFRelacionconelsolicitante} onChange={(e) => setStateOS1PFRelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PFRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS1PFRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PFTienemasdeunpaisderesidencia} onChange={(e) => setStateOS1PFTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PFTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS1PFTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS1PFElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS1PFElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS1PFEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS1PFEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS1PFNumeroInterior} onChange={(e) => setStateOS1PFNumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS1PFPiso} onChange={(e) => setStateOS1PFPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS1PFPais} onChange={(e) => setStateOS1PFPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS1PFCP} onChange={(e) => setStateOS1PFCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS1PFColonia} onChange={(e) => setStateOS1PFColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS1PFDelegacionMunicipio} onChange={(e) => setStateOS1PFDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFEstado} onChange={(e) => setStateOS1PFEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFTipodeDomicilio} onChange={(e) => setStateOS1PFTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFTipodevivienda} onChange={(e) => setStateOS1PFTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAntiguedadeneldomicilioactual} onChange={(e) => setStateOS1PFAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS1PFAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS1PFAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS1PFEntrecalle1} onChange={(e) => setStateOS1PFEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS1PFEntrecalle2} onChange={(e) => setStateOS1PFEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>

															</div>
														</div>
														<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS1PFAENombre} onChange={(e) => setStateOS1PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS1PFAEApellidoPaterno} onChange={(e) => setStateOS1PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS1PFAEApellidoMaterno} onChange={(e) => setStateOS1PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS1PFAEFechadenacimiento} onChange={(e) => setStateOS1PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS1PFAEPaisdenacimiento} onChange={(e) => setStateOS1PFAEPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS1PFAEEstadodeNacimiento} onChange={(e) => setStateOS1PFAEEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS1PFAEGenero} onChange={(e) => setStateOS1PFAEGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS1PFAERFC} onChange={(e) => setStateOS1PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS1PFAECURP} onChange={(e) => setStateOS1PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS1PFAEFolioID} onChange={(e) => setStateOS1PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS1PFAENacionalidad} onChange={(e) => setStateOS1PFAENacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS1PFAECalidadmigratoria} onChange={(e) => setStateOS1PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS1PFAECorreoelectronico} onChange={(e) => setStateOS1PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS1PFAETelefono} onChange={(e) => setStateOS1PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS1PFAECelular} onChange={(e) => setStateOS1PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS1PFAEMenoresde23anosquedependen} onChange={(e) => setStateOS1PFAEMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS1PFAETotaldedependientes} onChange={(e) => setStateOS1PFAETotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS1PFAERelacionconelsolicitante} onChange={(e) => setStateOS1PFAERelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PFAERelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS1PFAERelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PFAETienemasdeunpaisderesidencia} onChange={(e) => setStateOS1PFAETienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PFAETieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS1PFAETieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS1PFAEElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS1PFAEElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS1PFAEEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS1PFAEEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS1PFAENumeroInterior} onChange={(e) => setStateOS1PFAENumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS1PFAEPiso} onChange={(e) => setStateOS1PFAEPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS1PFAEPais} onChange={(e) => setStateOS1PFAEPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS1PFAECP} onChange={(e) => setStateOS1PFAECP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS1PFAEColonia} onChange={(e) => setStateOS1PFAEColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS1PFAEDelegacionMunicipio} onChange={(e) => setStateOS1PFAEDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAEEstado} onChange={(e) => setStateOS1PFAEEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAETipodeDomicilio} onChange={(e) => setStateOS1PFAETipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAETipodevivienda} onChange={(e) => setStateOS1PFAETipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAEAntiguedadeneldomicilioactual} onChange={(e) => setStateOS1PFAEAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS1PFAEAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS1PFAEAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS1PFAEEntrecalle1} onChange={(e) => setStateOS1PFAEEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS1PFAEEntrecalle2} onChange={(e) => setStateOS1PFAEEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS1PFAEImportarexportar} onChange={(e) => setStateOS1PFAEImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAESector} onChange={(e) => setStateOS1PFAESector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAEGiro} onChange={(e) => setStateOS1PFAEGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PFAEActividad} onChange={(e) => setStateOS1PFAEActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS1PFAEFechadealtaenSHCP} onChange={(e) => setStateOS1PFAEFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número de sucursales</span >
																		<input state="" value={stateOS1PFAENumerodesucursales} onChange={(e) => setStateOS1PFAENumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS1PFAEAnosdeexperienciaenelsector} onChange={(e) => setStateOS1PFAEAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Razón social </span>
																		<input state="" value={stateOS1PMRazonsocial} onChange={(e) => setStateOS1PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>RFC </span>
																		<input state="" value={stateOS1PMRFC} onChange={(e) => setStateOS1PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS1PMCorreoelectronico} onChange={(e) => setStateOS1PMCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de alta en SHCP</span >
																		<input state="" value={stateOS1PMFechadealtaenSHCP} onChange={(e) => setStateOS1PMFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PMRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS1PMRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PMTienemasdeunpaisderesidencia} onChange={(e) => setStateOS1PMTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS1PMTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS1PMTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS1PMElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS1PMElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS1PMEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS1PMEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Representante legal</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nombre completo</span >
																		<input state="" value={stateOS1PMNombrecompleto} onChange={(e) => setStateOS1PMNombrecompleto(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Cargo</span >
																		<input state="" value={stateOS1PMCargo} onChange={(e) => setStateOS1PMCargo(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS1PMTelefono} onChange={(e) => setStateOS1PMTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Calle</span >
																		<input state="" value={stateOS1PMCalle} onChange={(e) => setStateOS1PMCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número exterior</span >
																		<input state="" value={stateOS1PMNumeroexterior} onChange={(e) => setStateOS1PMNumeroexterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número interior</span >
																		<input state="" value={stateOS1PMNumerointerior} onChange={(e) => setStateOS1PMNumerointerior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS1PMPiso} onChange={(e) => setStateOS1PMPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS1PMPais} onChange={(e) => setStateOS1PMPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS1PMCP} onChange={(e) => setStateOS1PMCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS1PMColonia} onChange={(e) => setStateOS1PMColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS1PMDelegacionMunicipio} onChange={(e) => setStateOS1PMDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PMEstado} onChange={(e) => setStateOS1PMEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PMTipodeDomicilio} onChange={(e) => setStateOS1PMTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PMTipodevivienda} onChange={(e) => setStateOS1PMTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS1PMEntrecalle1} onChange={(e) => setStateOS1PMEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS1PMEntrecalle2} onChange={(e) => setStateOS1PMEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS1PMImportarexportar} onChange={(e) => setStateOS1PMImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PMSector} onChange={(e) => setStateOS1PMSector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PMGiro} onChange={(e) => setStateOS1PMGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS1PMActividad} onChange={(e) => setStateOS1PMActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS1PMNumerodesucursales} onChange={(e) => setStateOS1PMNumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS1PMAnosdeexperienciaenelsector} onChange={(e) => setStateOS1PMAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
															<div onClick={() => { setSegundoObligadoSolidario("PF"); handleSeccion(true); handleNextOS(2) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
															</div>
															<span className="text-center">Persona física</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setSegundoObligadoSolidario("PFAE"); handleSeccion(true); handleNextOS(2) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
															</div>
															<span className="text-center">Persona física con actividad empresarial</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setSegundoObligadoSolidario("PM"); handleSeccion(true); handleNextOS(2) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS2PFNombre} onChange={(e) => setStateOS2PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS2PFApellidoPaterno} onChange={(e) => setStateOS2PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS2PFApellidoMaterno} onChange={(e) => setStateOS2PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS2PFFechadenacimiento} onChange={(e) => setStateOS2PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS2PFPaisdenacimiento} onChange={(e) => setStateOS2PFPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS2PFEstadodeNacimiento} onChange={(e) => setStateOS2PFEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS2PFGenero} onChange={(e) => setStateOS2PFGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS2PFRFC} onChange={(e) => setStateOS2PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS2PFCURP} onChange={(e) => setStateOS2PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS2PFFolioID} onChange={(e) => setStateOS2PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS2PFNacionalidad} onChange={(e) => setStateOS2PFNacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS2PFCalidadmigratoria} onChange={(e) => setStateOS2PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS2PFCorreoelectronico} onChange={(e) => setStateOS2PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS2PFTelefono} onChange={(e) => setStateOS2PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS2PFCelular} onChange={(e) => setStateOS2PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS2PFMenoresde23anosquedependen} onChange={(e) => setStateOS2PFMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS2PFTotaldedependientes} onChange={(e) => setStateOS2PFTotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS2PFRelacionconelsolicitante} onChange={(e) => setStateOS2PFRelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PFRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS2PFRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PFTienemasdeunpaisderesidencia} onChange={(e) => setStateOS2PFTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PFTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS2PFTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS2PFElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS2PFElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS2PFEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS2PFEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS2PFNumeroInterior} onChange={(e) => setStateOS2PFNumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS2PFPiso} onChange={(e) => setStateOS2PFPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS2PFPais} onChange={(e) => setStateOS2PFPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS2PFCP} onChange={(e) => setStateOS2PFCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS2PFColonia} onChange={(e) => setStateOS2PFColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS2PFDelegacionMunicipio} onChange={(e) => setStateOS2PFDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFEstado} onChange={(e) => setStateOS2PFEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFTipodeDomicilio} onChange={(e) => setStateOS2PFTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFTipodevivienda} onChange={(e) => setStateOS2PFTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAntiguedadeneldomicilioactual} onChange={(e) => setStateOS2PFAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS2PFAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS2PFAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS2PFEntrecalle1} onChange={(e) => setStateOS2PFEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS2PFEntrecalle2} onChange={(e) => setStateOS2PFEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>

															</div>
														</div>
														<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS2PFAENombre} onChange={(e) => setStateOS2PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS2PFAEApellidoPaterno} onChange={(e) => setStateOS2PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS2PFAEApellidoMaterno} onChange={(e) => setStateOS2PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS2PFAEFechadenacimiento} onChange={(e) => setStateOS2PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS2PFAEPaisdenacimiento} onChange={(e) => setStateOS2PFAEPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS2PFAEEstadodeNacimiento} onChange={(e) => setStateOS2PFAEEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS2PFAEGenero} onChange={(e) => setStateOS2PFAEGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS2PFAERFC} onChange={(e) => setStateOS2PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS2PFAECURP} onChange={(e) => setStateOS2PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS2PFAEFolioID} onChange={(e) => setStateOS2PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS2PFAENacionalidad} onChange={(e) => setStateOS2PFAENacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS2PFAECalidadmigratoria} onChange={(e) => setStateOS2PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS2PFAECorreoelectronico} onChange={(e) => setStateOS2PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS2PFAETelefono} onChange={(e) => setStateOS2PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS2PFAECelular} onChange={(e) => setStateOS2PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS2PFAEMenoresde23anosquedependen} onChange={(e) => setStateOS2PFAEMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS2PFAETotaldedependientes} onChange={(e) => setStateOS2PFAETotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS2PFAERelacionconelsolicitante} onChange={(e) => setStateOS2PFAERelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PFAERelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS2PFAERelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PFAETienemasdeunpaisderesidencia} onChange={(e) => setStateOS2PFAETienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PFAETieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS2PFAETieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS2PFAEElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS2PFAEElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS2PFAEEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS2PFAEEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS2PFAENumeroInterior} onChange={(e) => setStateOS2PFAENumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS2PFAEPiso} onChange={(e) => setStateOS2PFAEPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS2PFAEPais} onChange={(e) => setStateOS2PFAEPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS2PFAECP} onChange={(e) => setStateOS2PFAECP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS2PFAEColonia} onChange={(e) => setStateOS2PFAEColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS2PFAEDelegacionMunicipio} onChange={(e) => setStateOS2PFAEDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAEEstado} onChange={(e) => setStateOS2PFAEEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAETipodeDomicilio} onChange={(e) => setStateOS2PFAETipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAETipodevivienda} onChange={(e) => setStateOS2PFAETipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAEAntiguedadeneldomicilioactual} onChange={(e) => setStateOS2PFAEAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS2PFAEAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS2PFAEAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS2PFAEEntrecalle1} onChange={(e) => setStateOS2PFAEEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS2PFAEEntrecalle2} onChange={(e) => setStateOS2PFAEEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS2PFAEImportarexportar} onChange={(e) => setStateOS2PFAEImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAESector} onChange={(e) => setStateOS2PFAESector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAEGiro} onChange={(e) => setStateOS2PFAEGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PFAEActividad} onChange={(e) => setStateOS2PFAEActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS2PFAEFechadealtaenSHCP} onChange={(e) => setStateOS2PFAEFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número de sucursales</span >
																		<input state="" value={stateOS2PFAENumerodesucursales} onChange={(e) => setStateOS2PFAENumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS2PFAEAnosdeexperienciaenelsector} onChange={(e) => setStateOS2PFAEAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Razón social </span>
																		<input state="" value={stateOS2PMRazonsocial} onChange={(e) => setStateOS2PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>RFC </span>
																		<input state="" value={stateOS2PMRFC} onChange={(e) => setStateOS2PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS2PMCorreoelectronico} onChange={(e) => setStateOS2PMCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de alta en SHCP</span >
																		<input state="" value={stateOS2PMFechadealtaenSHCP} onChange={(e) => setStateOS2PMFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PMRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS2PMRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PMTienemasdeunpaisderesidencia} onChange={(e) => setStateOS2PMTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS2PMTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS2PMTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS2PMElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS2PMElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS2PMEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS2PMEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Representante legal</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nombre completo</span >
																		<input state="" value={stateOS2PMNombrecompleto} onChange={(e) => setStateOS2PMNombrecompleto(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Cargo</span >
																		<input state="" value={stateOS2PMCargo} onChange={(e) => setStateOS2PMCargo(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS2PMTelefono} onChange={(e) => setStateOS2PMTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Calle</span >
																		<input state="" value={stateOS2PMCalle} onChange={(e) => setStateOS2PMCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número exterior</span >
																		<input state="" value={stateOS2PMNumeroexterior} onChange={(e) => setStateOS2PMNumeroexterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número interior</span >
																		<input state="" value={stateOS2PMNumerointerior} onChange={(e) => setStateOS2PMNumerointerior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS2PMPiso} onChange={(e) => setStateOS2PMPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS2PMPais} onChange={(e) => setStateOS2PMPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS2PMCP} onChange={(e) => setStateOS2PMCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS2PMColonia} onChange={(e) => setStateOS2PMColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS2PMDelegacionMunicipio} onChange={(e) => setStateOS2PMDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PMEstado} onChange={(e) => setStateOS2PMEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PMTipodeDomicilio} onChange={(e) => setStateOS2PMTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PMTipodevivienda} onChange={(e) => setStateOS2PMTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS2PMEntrecalle1} onChange={(e) => setStateOS2PMEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS2PMEntrecalle2} onChange={(e) => setStateOS2PMEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS2PMImportarexportar} onChange={(e) => setStateOS2PMImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PMSector} onChange={(e) => setStateOS2PMSector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PMGiro} onChange={(e) => setStateOS2PMGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS2PMActividad} onChange={(e) => setStateOS2PMActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS2PMNumerodesucursales} onChange={(e) => setStateOS2PMNumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS2PMAnosdeexperienciaenelsector} onChange={(e) => setStateOS2PMAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
															<div onClick={() => { setTercerObligadoSolidario("PF"); handleSeccion(true); handleNextOS(3) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
															</div>
															<span className="text-center">Persona física</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setTercerObligadoSolidario("PFAE"); handleSeccion(true); handleNextOS(3) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
															</div>
															<span className="text-center">Persona física con actividad empresarial</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setTercerObligadoSolidario("PM"); handleSeccion(true); handleNextOS(3) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS3PFNombre} onChange={(e) => setStateOS3PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS3PFApellidoPaterno} onChange={(e) => setStateOS3PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS3PFApellidoMaterno} onChange={(e) => setStateOS3PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS3PFFechadenacimiento} onChange={(e) => setStateOS3PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS3PFPaisdenacimiento} onChange={(e) => setStateOS3PFPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS3PFEstadodeNacimiento} onChange={(e) => setStateOS3PFEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS3PFGenero} onChange={(e) => setStateOS3PFGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS3PFRFC} onChange={(e) => setStateOS3PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS3PFCURP} onChange={(e) => setStateOS3PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS3PFFolioID} onChange={(e) => setStateOS3PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS3PFNacionalidad} onChange={(e) => setStateOS3PFNacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS3PFCalidadmigratoria} onChange={(e) => setStateOS3PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS3PFCorreoelectronico} onChange={(e) => setStateOS3PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS3PFTelefono} onChange={(e) => setStateOS3PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS3PFCelular} onChange={(e) => setStateOS3PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS3PFMenoresde23anosquedependen} onChange={(e) => setStateOS3PFMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS3PFTotaldedependientes} onChange={(e) => setStateOS3PFTotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS3PFRelacionconelsolicitante} onChange={(e) => setStateOS3PFRelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PFRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS3PFRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PFTienemasdeunpaisderesidencia} onChange={(e) => setStateOS3PFTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PFTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS3PFTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS3PFElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS3PFElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS3PFEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS3PFEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS3PFNumeroInterior} onChange={(e) => setStateOS3PFNumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS3PFPiso} onChange={(e) => setStateOS3PFPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS3PFPais} onChange={(e) => setStateOS3PFPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS3PFCP} onChange={(e) => setStateOS3PFCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS3PFColonia} onChange={(e) => setStateOS3PFColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS3PFDelegacionMunicipio} onChange={(e) => setStateOS3PFDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFEstado} onChange={(e) => setStateOS3PFEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFTipodeDomicilio} onChange={(e) => setStateOS3PFTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFTipodevivienda} onChange={(e) => setStateOS3PFTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAntiguedadeneldomicilioactual} onChange={(e) => setStateOS3PFAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS3PFAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS3PFAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS3PFEntrecalle1} onChange={(e) => setStateOS3PFEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS3PFEntrecalle2} onChange={(e) => setStateOS3PFEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>

															</div>
														</div>
														<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS3PFAENombre} onChange={(e) => setStateOS3PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS3PFAEApellidoPaterno} onChange={(e) => setStateOS3PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS3PFAEApellidoMaterno} onChange={(e) => setStateOS3PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS3PFAEFechadenacimiento} onChange={(e) => setStateOS3PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS3PFAEPaisdenacimiento} onChange={(e) => setStateOS3PFAEPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS3PFAEEstadodeNacimiento} onChange={(e) => setStateOS3PFAEEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS3PFAEGenero} onChange={(e) => setStateOS3PFAEGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS3PFAERFC} onChange={(e) => setStateOS3PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS3PFAECURP} onChange={(e) => setStateOS3PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS3PFAEFolioID} onChange={(e) => setStateOS3PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS3PFAENacionalidad} onChange={(e) => setStateOS3PFAENacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS3PFAECalidadmigratoria} onChange={(e) => setStateOS3PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS3PFAECorreoelectronico} onChange={(e) => setStateOS3PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS3PFAETelefono} onChange={(e) => setStateOS3PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS3PFAECelular} onChange={(e) => setStateOS3PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS3PFAEMenoresde23anosquedependen} onChange={(e) => setStateOS3PFAEMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS3PFAETotaldedependientes} onChange={(e) => setStateOS3PFAETotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS3PFAERelacionconelsolicitante} onChange={(e) => setStateOS3PFAERelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PFAERelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS3PFAERelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PFAETienemasdeunpaisderesidencia} onChange={(e) => setStateOS3PFAETienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PFAETieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS3PFAETieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS3PFAEElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS3PFAEElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS3PFAEEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS3PFAEEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS3PFAENumeroInterior} onChange={(e) => setStateOS3PFAENumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS3PFAEPiso} onChange={(e) => setStateOS3PFAEPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS3PFAEPais} onChange={(e) => setStateOS3PFAEPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS3PFAECP} onChange={(e) => setStateOS3PFAECP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS3PFAEColonia} onChange={(e) => setStateOS3PFAEColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS3PFAEDelegacionMunicipio} onChange={(e) => setStateOS3PFAEDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAEEstado} onChange={(e) => setStateOS3PFAEEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAETipodeDomicilio} onChange={(e) => setStateOS3PFAETipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAETipodevivienda} onChange={(e) => setStateOS3PFAETipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAEAntiguedadeneldomicilioactual} onChange={(e) => setStateOS3PFAEAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS3PFAEAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS3PFAEAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS3PFAEEntrecalle1} onChange={(e) => setStateOS3PFAEEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS3PFAEEntrecalle2} onChange={(e) => setStateOS3PFAEEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS3PFAEImportarexportar} onChange={(e) => setStateOS3PFAEImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAESector} onChange={(e) => setStateOS3PFAESector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAEGiro} onChange={(e) => setStateOS3PFAEGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PFAEActividad} onChange={(e) => setStateOS3PFAEActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS3PFAEFechadealtaenSHCP} onChange={(e) => setStateOS3PFAEFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número de sucursales</span >
																		<input state="" value={stateOS3PFAENumerodesucursales} onChange={(e) => setStateOS3PFAENumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS3PFAEAnosdeexperienciaenelsector} onChange={(e) => setStateOS3PFAEAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Razón social </span>
																		<input state="" value={stateOS3PMRazonsocial} onChange={(e) => setStateOS3PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>RFC </span>
																		<input state="" value={stateOS3PMRFC} onChange={(e) => setStateOS3PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS3PMCorreoelectronico} onChange={(e) => setStateOS3PMCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de alta en SHCP</span >
																		<input state="" value={stateOS3PMFechadealtaenSHCP} onChange={(e) => setStateOS3PMFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PMRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS3PMRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PMTienemasdeunpaisderesidencia} onChange={(e) => setStateOS3PMTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS3PMTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS3PMTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS3PMElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS3PMElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS3PMEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS3PMEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Representante legal</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nombre completo</span >
																		<input state="" value={stateOS3PMNombrecompleto} onChange={(e) => setStateOS3PMNombrecompleto(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Cargo</span >
																		<input state="" value={stateOS3PMCargo} onChange={(e) => setStateOS3PMCargo(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS3PMTelefono} onChange={(e) => setStateOS3PMTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Calle</span >
																		<input state="" value={stateOS3PMCalle} onChange={(e) => setStateOS3PMCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número exterior</span >
																		<input state="" value={stateOS3PMNumeroexterior} onChange={(e) => setStateOS3PMNumeroexterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número interior</span >
																		<input state="" value={stateOS3PMNumerointerior} onChange={(e) => setStateOS3PMNumerointerior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS3PMPiso} onChange={(e) => setStateOS3PMPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS3PMPais} onChange={(e) => setStateOS3PMPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS3PMCP} onChange={(e) => setStateOS3PMCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS3PMColonia} onChange={(e) => setStateOS3PMColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS3PMDelegacionMunicipio} onChange={(e) => setStateOS3PMDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PMEstado} onChange={(e) => setStateOS3PMEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PMTipodeDomicilio} onChange={(e) => setStateOS3PMTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PMTipodevivienda} onChange={(e) => setStateOS3PMTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS3PMEntrecalle1} onChange={(e) => setStateOS3PMEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS3PMEntrecalle2} onChange={(e) => setStateOS3PMEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS3PMImportarexportar} onChange={(e) => setStateOS3PMImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PMSector} onChange={(e) => setStateOS3PMSector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PMGiro} onChange={(e) => setStateOS3PMGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS3PMActividad} onChange={(e) => setStateOS3PMActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS3PMNumerodesucursales} onChange={(e) => setStateOS3PMNumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS3PMAnosdeexperienciaenelsector} onChange={(e) => setStateOS3PMAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
															<div onClick={() => { setCuartoObligadoSolidario("PF"); handleSeccion(true); handleNextOS(4) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
															</div>
															<span className="text-center">Persona física</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setCuartoObligadoSolidario("PFAE"); handleSeccion(true); handleNextOS(4) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
															</div>
															<span className="text-center">Persona física con actividad empresarial</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setCuartoObligadoSolidario("PM"); handleSeccion(true); handleNextOS(4) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS4PFNombre} onChange={(e) => setStateOS4PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS4PFApellidoPaterno} onChange={(e) => setStateOS4PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS4PFApellidoMaterno} onChange={(e) => setStateOS4PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS4PFFechadenacimiento} onChange={(e) => setStateOS4PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS4PFPaisdenacimiento} onChange={(e) => setStateOS4PFPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS4PFEstadodeNacimiento} onChange={(e) => setStateOS4PFEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS4PFGenero} onChange={(e) => setStateOS4PFGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS4PFRFC} onChange={(e) => setStateOS4PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS4PFCURP} onChange={(e) => setStateOS4PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS4PFFolioID} onChange={(e) => setStateOS4PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS4PFNacionalidad} onChange={(e) => setStateOS4PFNacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS4PFCalidadmigratoria} onChange={(e) => setStateOS4PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS4PFCorreoelectronico} onChange={(e) => setStateOS4PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS4PFTelefono} onChange={(e) => setStateOS4PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS4PFCelular} onChange={(e) => setStateOS4PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS4PFMenoresde23anosquedependen} onChange={(e) => setStateOS4PFMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS4PFTotaldedependientes} onChange={(e) => setStateOS4PFTotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS4PFRelacionconelsolicitante} onChange={(e) => setStateOS4PFRelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PFRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS4PFRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PFTienemasdeunpaisderesidencia} onChange={(e) => setStateOS4PFTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PFTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS4PFTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS4PFElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS4PFElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS4PFEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS4PFEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS4PFNumeroInterior} onChange={(e) => setStateOS4PFNumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS4PFPiso} onChange={(e) => setStateOS4PFPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS4PFPais} onChange={(e) => setStateOS4PFPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS4PFCP} onChange={(e) => setStateOS4PFCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS4PFColonia} onChange={(e) => setStateOS4PFColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS4PFDelegacionMunicipio} onChange={(e) => setStateOS4PFDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFEstado} onChange={(e) => setStateOS4PFEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFTipodeDomicilio} onChange={(e) => setStateOS4PFTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFTipodevivienda} onChange={(e) => setStateOS4PFTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAntiguedadeneldomicilioactual} onChange={(e) => setStateOS4PFAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS4PFAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS4PFAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS4PFEntrecalle1} onChange={(e) => setStateOS4PFEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS4PFEntrecalle2} onChange={(e) => setStateOS4PFEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>

															</div>
														</div>
														<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS4PFAENombre} onChange={(e) => setStateOS4PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS4PFAEApellidoPaterno} onChange={(e) => setStateOS4PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS4PFAEApellidoMaterno} onChange={(e) => setStateOS4PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS4PFAEFechadenacimiento} onChange={(e) => setStateOS4PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS4PFAEPaisdenacimiento} onChange={(e) => setStateOS4PFAEPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS4PFAEEstadodeNacimiento} onChange={(e) => setStateOS4PFAEEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS4PFAEGenero} onChange={(e) => setStateOS4PFAEGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS4PFAERFC} onChange={(e) => setStateOS4PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS4PFAECURP} onChange={(e) => setStateOS4PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS4PFAEFolioID} onChange={(e) => setStateOS4PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS4PFAENacionalidad} onChange={(e) => setStateOS4PFAENacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS4PFAECalidadmigratoria} onChange={(e) => setStateOS4PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS4PFAECorreoelectronico} onChange={(e) => setStateOS4PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS4PFAETelefono} onChange={(e) => setStateOS4PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS4PFAECelular} onChange={(e) => setStateOS4PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS4PFAEMenoresde23anosquedependen} onChange={(e) => setStateOS4PFAEMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS4PFAETotaldedependientes} onChange={(e) => setStateOS4PFAETotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS4PFAERelacionconelsolicitante} onChange={(e) => setStateOS4PFAERelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PFAERelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS4PFAERelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PFAETienemasdeunpaisderesidencia} onChange={(e) => setStateOS4PFAETienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PFAETieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS4PFAETieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS4PFAEElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS4PFAEElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS4PFAEEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS4PFAEEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS4PFAENumeroInterior} onChange={(e) => setStateOS4PFAENumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS4PFAEPiso} onChange={(e) => setStateOS4PFAEPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS4PFAEPais} onChange={(e) => setStateOS4PFAEPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS4PFAECP} onChange={(e) => setStateOS4PFAECP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS4PFAEColonia} onChange={(e) => setStateOS4PFAEColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS4PFAEDelegacionMunicipio} onChange={(e) => setStateOS4PFAEDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAEEstado} onChange={(e) => setStateOS4PFAEEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAETipodeDomicilio} onChange={(e) => setStateOS4PFAETipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAETipodevivienda} onChange={(e) => setStateOS4PFAETipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAEAntiguedadeneldomicilioactual} onChange={(e) => setStateOS4PFAEAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS4PFAEAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS4PFAEAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS4PFAEEntrecalle1} onChange={(e) => setStateOS4PFAEEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS4PFAEEntrecalle2} onChange={(e) => setStateOS4PFAEEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS4PFAEImportarexportar} onChange={(e) => setStateOS4PFAEImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAESector} onChange={(e) => setStateOS4PFAESector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAEGiro} onChange={(e) => setStateOS4PFAEGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PFAEActividad} onChange={(e) => setStateOS4PFAEActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS4PFAEFechadealtaenSHCP} onChange={(e) => setStateOS4PFAEFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número de sucursales</span >
																		<input state="" value={stateOS4PFAENumerodesucursales} onChange={(e) => setStateOS4PFAENumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS4PFAEAnosdeexperienciaenelsector} onChange={(e) => setStateOS4PFAEAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Razón social </span>
																		<input state="" value={stateOS4PMRazonsocial} onChange={(e) => setStateOS4PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>RFC </span>
																		<input state="" value={stateOS4PMRFC} onChange={(e) => setStateOS4PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS4PMCorreoelectronico} onChange={(e) => setStateOS4PMCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de alta en SHCP</span >
																		<input state="" value={stateOS4PMFechadealtaenSHCP} onChange={(e) => setStateOS4PMFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PMRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS4PMRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PMTienemasdeunpaisderesidencia} onChange={(e) => setStateOS4PMTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS4PMTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS4PMTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS4PMElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS4PMElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS4PMEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS4PMEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Representante legal</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nombre completo</span >
																		<input state="" value={stateOS4PMNombrecompleto} onChange={(e) => setStateOS4PMNombrecompleto(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Cargo</span >
																		<input state="" value={stateOS4PMCargo} onChange={(e) => setStateOS4PMCargo(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS4PMTelefono} onChange={(e) => setStateOS4PMTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Calle</span >
																		<input state="" value={stateOS4PMCalle} onChange={(e) => setStateOS4PMCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número exterior</span >
																		<input state="" value={stateOS4PMNumeroexterior} onChange={(e) => setStateOS4PMNumeroexterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número interior</span >
																		<input state="" value={stateOS4PMNumerointerior} onChange={(e) => setStateOS4PMNumerointerior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS4PMPiso} onChange={(e) => setStateOS4PMPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS4PMPais} onChange={(e) => setStateOS4PMPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS4PMCP} onChange={(e) => setStateOS4PMCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS4PMColonia} onChange={(e) => setStateOS4PMColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS4PMDelegacionMunicipio} onChange={(e) => setStateOS4PMDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PMEstado} onChange={(e) => setStateOS4PMEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PMTipodeDomicilio} onChange={(e) => setStateOS4PMTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PMTipodevivienda} onChange={(e) => setStateOS4PMTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS4PMEntrecalle1} onChange={(e) => setStateOS4PMEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS4PMEntrecalle2} onChange={(e) => setStateOS4PMEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS4PMImportarexportar} onChange={(e) => setStateOS4PMImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PMSector} onChange={(e) => setStateOS4PMSector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PMGiro} onChange={(e) => setStateOS4PMGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS4PMActividad} onChange={(e) => setStateOS4PMActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS4PMNumerodesucursales} onChange={(e) => setStateOS4PMNumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS4PMAnosdeexperienciaenelsector} onChange={(e) => setStateOS4PMAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
															<div onClick={() => { setQuintoObligadoSolidario("PF"); handleSeccion(true); handleNextOS(5) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-fill"></i>
															</div>
															<span className="text-center">Persona física</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setQuintoObligadoSolidario("PFAE"); handleSeccion(true); handleNextOS(5) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
																<i style={{ fontSize: '32px' }} className="ri-user-2-fill"></i>
															</div>
															<span className="text-center">Persona física con actividad empresarial</span>
														</div>
														<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
															<div onClick={() => { setQuintoObligadoSolidario("PM"); handleSeccion(true); handleNextOS(5) }} className='hover-red pointer cool-shadow bgc-white radius' style={{ padding: '8px', width: '80px', height: '80px', display: 'grid', placeContent: 'center' }}>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS5PFNombre} onChange={(e) => setStateOS5PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS5PFApellidoPaterno} onChange={(e) => setStateOS5PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS5PFApellidoMaterno} onChange={(e) => setStateOS5PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS5PFFechadenacimiento} onChange={(e) => setStateOS5PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS5PFPaisdenacimiento} onChange={(e) => setStateOS5PFPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS5PFEstadodeNacimiento} onChange={(e) => setStateOS5PFEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS5PFGenero} onChange={(e) => setStateOS5PFGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS5PFRFC} onChange={(e) => setStateOS5PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS5PFCURP} onChange={(e) => setStateOS5PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS5PFFolioID} onChange={(e) => setStateOS5PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS5PFNacionalidad} onChange={(e) => setStateOS5PFNacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS5PFCalidadmigratoria} onChange={(e) => setStateOS5PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS5PFCorreoelectronico} onChange={(e) => setStateOS5PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS5PFTelefono} onChange={(e) => setStateOS5PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS5PFCelular} onChange={(e) => setStateOS5PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS5PFMenoresde23anosquedependen} onChange={(e) => setStateOS5PFMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS5PFTotaldedependientes} onChange={(e) => setStateOS5PFTotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS5PFRelacionconelsolicitante} onChange={(e) => setStateOS5PFRelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PFRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS5PFRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PFTienemasdeunpaisderesidencia} onChange={(e) => setStateOS5PFTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PFTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS5PFTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS5PFElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS5PFElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS5PFEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS5PFEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS5PFNumeroInterior} onChange={(e) => setStateOS5PFNumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS5PFPiso} onChange={(e) => setStateOS5PFPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS5PFPais} onChange={(e) => setStateOS5PFPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS5PFCP} onChange={(e) => setStateOS5PFCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS5PFColonia} onChange={(e) => setStateOS5PFColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS5PFDelegacionMunicipio} onChange={(e) => setStateOS5PFDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFEstado} onChange={(e) => setStateOS5PFEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFTipodeDomicilio} onChange={(e) => setStateOS5PFTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFTipodevivienda} onChange={(e) => setStateOS5PFTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAntiguedadeneldomicilioactual} onChange={(e) => setStateOS5PFAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS5PFAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS5PFAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS5PFEntrecalle1} onChange={(e) => setStateOS5PFEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS5PFEntrecalle2} onChange={(e) => setStateOS5PFEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>

															</div>
														</div>
														<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Nombre </span>
																		<input state="" value={stateOS5PFAENombre} onChange={(e) => setStateOS5PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Paterno </span>
																		<input state="" value={stateOS5PFAEApellidoPaterno} onChange={(e) => setStateOS5PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Apellido Materno </span>
																		<input state="" value={stateOS5PFAEApellidoMaterno} onChange={(e) => setStateOS5PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de nacimiento </span>
																		<input state="" value={stateOS5PFAEFechadenacimiento} onChange={(e) => setStateOS5PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País de nacimiento </span>
																		<select state="" value={stateOS5PFAEPaisdenacimiento} onChange={(e) => setStateOS5PFAEPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Estado de Nacimiento </span>
																		<select state="" value={stateOS5PFAEEstadodeNacimiento} onChange={(e) => setStateOS5PFAEEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Género </span>
																		<select state="" value={stateOS5PFAEGenero} onChange={(e) => setStateOS5PFAEGenero(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>RFC </span>
																		<input state="" value={stateOS5PFAERFC} onChange={(e) => setStateOS5PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>CURP </span>
																		<input state="" value={stateOS5PFAECURP} onChange={(e) => setStateOS5PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Folio ID </span>
																		<input state="" value={stateOS5PFAEFolioID} onChange={(e) => setStateOS5PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nacionalidad </span>
																		<select state="" value={stateOS5PFAENacionalidad} onChange={(e) => setStateOS5PFAENacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Calidad migratoria </span>
																		<input state="" value={stateOS5PFAECalidadmigratoria} onChange={(e) => setStateOS5PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS5PFAECorreoelectronico} onChange={(e) => setStateOS5PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS5PFAETelefono} onChange={(e) => setStateOS5PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Celular </span>
																		<input state="" value={stateOS5PFAECelular} onChange={(e) => setStateOS5PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Menores de 23 años que dependen </span>
																		<select state="" value={stateOS5PFAEMenoresde23anosquedependen} onChange={(e) => setStateOS5PFAEMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Total de dependientes </span>
																		<select state="" value={stateOS5PFAETotaldedependientes} onChange={(e) => setStateOS5PFAETotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
																		<span>Relación con el solicitante </span>
																		<input state="" value={stateOS5PFAERelacionconelsolicitante} onChange={(e) => setStateOS5PFAERelacionconelsolicitante(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PFAERelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS5PFAERelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PFAETienemasdeunpaisderesidencia} onChange={(e) => setStateOS5PFAETienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PFAETieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS5PFAETieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS5PFAEElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS5PFAEElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS5PFAEEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS5PFAEEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número Interior</span >
																		<input state="" value={stateOS5PFAENumeroInterior} onChange={(e) => setStateOS5PFAENumeroInterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS5PFAEPiso} onChange={(e) => setStateOS5PFAEPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS5PFAEPais} onChange={(e) => setStateOS5PFAEPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS5PFAECP} onChange={(e) => setStateOS5PFAECP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS5PFAEColonia} onChange={(e) => setStateOS5PFAEColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS5PFAEDelegacionMunicipio} onChange={(e) => setStateOS5PFAEDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAEEstado} onChange={(e) => setStateOS5PFAEEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAETipodeDomicilio} onChange={(e) => setStateOS5PFAETipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAETipodevivienda} onChange={(e) => setStateOS5PFAETipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAEAntiguedadeneldomicilioactual} onChange={(e) => setStateOS5PFAEAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Antigüedad en el domicilio anterior</span >
																		<select state="" value={stateOS5PFAEAntiguedadeneldomicilioanterior} onChange={(e) => setStateOS5PFAEAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
																			<option value="">Seleccione opcion</option>
																			<option value="2">value</option>
																			<option value="1">value</option>
																		</select>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 1</span >
																		<input state="" value={stateOS5PFAEEntrecalle1} onChange={(e) => setStateOS5PFAEEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS5PFAEEntrecalle2} onChange={(e) => setStateOS5PFAEEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS5PFAEImportarexportar} onChange={(e) => setStateOS5PFAEImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAESector} onChange={(e) => setStateOS5PFAESector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAEGiro} onChange={(e) => setStateOS5PFAEGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PFAEActividad} onChange={(e) => setStateOS5PFAEActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS5PFAEFechadealtaenSHCP} onChange={(e) => setStateOS5PFAEFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número de sucursales</span >
																		<input state="" value={stateOS5PFAENumerodesucursales} onChange={(e) => setStateOS5PFAENumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS5PFAEAnosdeexperienciaenelsector} onChange={(e) => setStateOS5PFAEAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
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
																		<span>Razón social </span>
																		<input state="" value={stateOS5PMRazonsocial} onChange={(e) => setStateOS5PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>RFC </span>
																		<input state="" value={stateOS5PMRFC} onChange={(e) => setStateOS5PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Correo electrónico </span>
																		<input state="" value={stateOS5PMCorreoelectronico} onChange={(e) => setStateOS5PMCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Fecha de alta en SHCP</span >
																		<input state="" value={stateOS5PMFechadealtaenSHCP} onChange={(e) => setStateOS5PMFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PMRelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStateOS5PMRelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
																				Relacionado rama judicial / Gobierno / Legislativa
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PMTienemasdeunpaisderesidencia} onChange={(e) => setStateOS5PMTienemasdeunpaisderesidencia(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
																				¿Tiene más de un país de residencia?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
																		<div className="form-check">
																			<input state="" defaultChecked={stateOS5PMTieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStateOS5PMTieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
																			<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
																				¿Tiene o adquirió la residencia de los EUA?
																			</label>
																		</div>
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>El obligado es accionista u obligado de otra empresa</span >
																		<input state="" value={stateOS5PMElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStateOS5PMElobligadoesaccionistauobligadodeotraempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Es obligado o fiador de otra empresa o PFAE</span >
																		<input state="" value={stateOS5PMEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStateOS5PMEsobligadoofiadordeotraempresaoPFAE(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Representante legal</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Nombre completo</span >
																		<input state="" value={stateOS5PMNombrecompleto} onChange={(e) => setStateOS5PMNombrecompleto(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Cargo</span >
																		<input state="" value={stateOS5PMCargo} onChange={(e) => setStateOS5PMCargo(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Teléfono </span>
																		<input state="" value={stateOS5PMTelefono} onChange={(e) => setStateOS5PMTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
																	</div>
																</div>
																<hr />
																<h2>Información de domicilio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Calle</span >
																		<input state="" value={stateOS5PMCalle} onChange={(e) => setStateOS5PMCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número exterior</span >
																		<input state="" value={stateOS5PMNumeroexterior} onChange={(e) => setStateOS5PMNumeroexterior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Número interior</span >
																		<input state="" value={stateOS5PMNumerointerior} onChange={(e) => setStateOS5PMNumerointerior(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Piso</span >
																		<input state="" value={stateOS5PMPiso} onChange={(e) => setStateOS5PMPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>País</span >
																		<select state="" value={stateOS5PMPais} onChange={(e) => setStateOS5PMPais(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS5PMCP} onChange={(e) => setStateOS5PMCP(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Colonia</span >
																		<input state="" value={stateOS5PMColonia} onChange={(e) => setStateOS5PMColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Delegación/Municipio</span >
																		<select state="" value={stateOS5PMDelegacionMunicipio} onChange={(e) => setStateOS5PMDelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PMEstado} onChange={(e) => setStateOS5PMEstado(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PMTipodeDomicilio} onChange={(e) => setStateOS5PMTipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PMTipodevivienda} onChange={(e) => setStateOS5PMTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS5PMEntrecalle1} onChange={(e) => setStateOS5PMEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Entre calle 2</span >
																		<input state="" value={stateOS5PMEntrecalle2} onChange={(e) => setStateOS5PMEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
																	</div>
																</div>
																<hr />
																<h2>Información del negocio</h2>
																<hr />
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Importar/exportar</span >
																		<select state="" value={stateOS5PMImportarexportar} onChange={(e) => setStateOS5PMImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PMSector} onChange={(e) => setStateOS5PMSector(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PMGiro} onChange={(e) => setStateOS5PMGiro(e.target.value)} required style={{ width: '55%' }}>
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
																		<select state="" value={stateOS5PMActividad} onChange={(e) => setStateOS5PMActividad(e.target.value)} required style={{ width: '55%' }}>
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
																		<input state="" value={stateOS5PMNumerodesucursales} onChange={(e) => setStateOS5PMNumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
																	</div>
																</div>
																<div className="col-12">
																	<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
																		<span>Años de experiencia en el sector</span >
																		<select state="" value={stateOS5PMAnosdeexperienciaenelsector} onChange={(e) => setStateOS5PMAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
															<button className="bgc-red" type="submit">Siguiente</button>
														</div>
													</>
												}
											</animated.div>
										)
									}
									{
				transitionDiesiseis((style, visible) =>
					visible === true &&
					<animated.div style={style}>
						<div className="container">
							<h2>PATRIMONIO</h2>
							<hr />
							<div className="row" style={{ alignItems: 'flex-end' }}>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Números de bienes a presentar</span >
										<select state="" value={stateNumerosdebienesapresentar} onChange={(e) => setStateNumerosdebienesapresentar(e.target.value)} required style={{ width: '55%' }}>
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
										<span>Total del valor estimado</span >
										<input state="" value={stateTotaldelvalorestimado} onChange={(e) => setStateTotaldelvalorestimado(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Ubicación</span >
										<input state="" value={stateUbicacion} onChange={(e) => setStateUbicacion(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Superficie M2</span >
										<input state="" value={stateSuperficieM2} onChange={(e) => setStateSuperficieM2(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Descripción del inmueble</span >
										<input state="" value={stateDescriciondelinmueble} onChange={(e) => setStateDescriciondelinmueble(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Valor manifestado</span >
										<input state="" value={stateValormanifestado} onChange={(e) => setStateValormanifestado(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Valor predial</span >
										<input state="" value={stateValorpredial} onChange={(e) => setStateValorpredial(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Datos de registro</span >
										<input state="" value={stateDatosderegistro} onChange={(e) => setStateDatosderegistro(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
							</div>
							<h2>CAPACITACIÓN</h2>						
							<hr />							
							<div className="row" style={{ alignItems: 'flex-end' }}>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Nombre del producto </span >
										<input state="" value={stateNombredelproducto} onChange={(e) => setStateNombredelproducto(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Régimen de la cuenta: Mancomunada o Indistinta </span >
										<input state="" value={stateRegimendelacuentaMancomunadaoIndistinta} onChange={(e) => setStateRegimendelacuentaMancomunadaoIndistinta(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Nombre del apoderado mancomunado </span >
										<input state="" value={stateNombredelapoderadomancomunado} onChange={(e) => setStateNombredelapoderadomancomunado(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Nombre del apoderado mancomunado 2 </span >
										<input state="" value={stateNombredelapoderadomancomunado2} onChange={(e) => setStateNombredelapoderadomancomunado2(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Estatus FATCA _CRS </span >
										<input state="" value={stateEstatusFATCACRS} onChange={(e) => setStateEstatusFATCACRS(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>CFDI </span >
										<input state="" value={stateCFDI} onChange={(e) => setStateCFDI(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Entrega de Correspondencia (Correo Electrónico o Domicilio Registrado) </span >
										<input state="" value={stateEntregadeCorrespondencia} onChange={(e) => setStateEntregadeCorrespondencia(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Monto de Referencia de la Inversión </span >
										<input state="" value={stateMontodeReferenciadelaInversion} onChange={(e) => setStateMontodeReferenciadelaInversion(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={stateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID} onChange={(e) => setStateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID(e.target.checked)} className="form-check-input" type="checkbox" value="" id="auno" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="auno">
												¿Se requiere el envío y recepción de transferencias de fondos a través de SPID? 
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={stateRequiereChequera} onChange={(e) => setStateRequiereChequera(e.target.checked)} className="form-check-input" type="checkbox" value="" id="ados" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="ados">
												¿Requiere Chequera?
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={stateRequiereTarjetadeDebito} onChange={(e) => setStateRequiereTarjetadeDebito(e.target.checked)} className="form-check-input" type="checkbox" value="" id="atres" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="atres">
												¿Requiere Tarjeta de Débito?
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Identificador de Banca Electrónica Nuevo, Existente o Sin Banca </span >
										<input state="" value={stateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca} onChange={(e) => setStateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={stateServiciodeBancaElectronica} onChange={(e) => setStateServiciodeBancaElectronica(e.target.checked)} className="form-check-input" type="checkbox" value="" id="acuatro" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="acuatro">
												Servicio de Banca Electrónica
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Banca Electrónica BEP o BEM</span >
										<input state="" value={stateBancaElectronicaBEPoBEM} onChange={(e) => setStateBancaElectronicaBEPoBEM(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Plan</span >
										<input state="" value={statePlan} onChange={(e) => setStatePlan(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Tipo Cobro</span >
										<input state="" value={stateTipoCobro} onChange={(e) => setStateTipoCobro(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Cuenta cargo </span >
										<input state="" value={stateCuentacargo} onChange={(e) => setStateCuentacargo(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Operación Mancomunada para Banca Electrónica</span >
										<input state="" value={stateOperacionMancumunadaparaBancaElectronica} onChange={(e) => setStateOperacionMancumunadaparaBancaElectronica(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Operación Mancomunada para libramiento de cheques</span >
										<input state="" value={stateOperacionMancumunadaparalibramientodecheques} onChange={(e) => setStateOperacionMancumunadaparalibramientodecheques(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
							{/* <button onClick={() => handleSeccion(false)}>Atras</button> */}
							<button className="bgc-red" onClick={() => {setShowResult(true); setSubMenuSelected("");}}>Verificar</button>
						</div>
					</animated.div>
				)
			}
			{
				transitionDiesisiete((style, visible) =>

					visible === true &&
					<animated.div style={style}>
						<HistorialCrediticio 
							stateTieneunatarjetadecredito={stateTieneunatarjetadecredito}
							setStateTieneunatarjetadecredito={setStateTieneunatarjetadecredito}
							stateDigitalosultimos4numeros={stateDigitalosultimos4numeros}
							setStateDigitalosultimos4numeros={setStateDigitalosultimos4numeros}
							stateErestitulardeuncreditohipotecario={stateErestitulardeuncreditohipotecario}
							setStateErestitulardeuncreditohipotecario={setStateErestitulardeuncreditohipotecario}
							setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses={setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
							stateHasidotitulardeuncreditoautomotrizenlosultimos24meses={stateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
							stateHoySiendoDia={stateHoySiendoDia}
							setStateHoySiendoDia={setStateHoySiendoDia}
							setShowResult={setShowResult}
							setSubMenuSelected={setSubMenuSelected}
						/>
					</animated.div>
				)
			}
			{
				transitionDiesiocho((style, visible) =>

					visible === true &&
					<animated.div style={style}>
						<CargaDocumentos 
							setFileOne={setFileOne}
							fileOne={fileOne}
							setFileTwo={setFileTwo}
							fileTwo={fileTwo}
							setFileThree={setFileThree}
							fileThree={fileThree}
							setFileFour={setFileFour}
							fileFour={fileFour}
							setShowResult={setShowResult}
							tipoPersona={tipoPersona}
							cantidadObligadosSolidarios={cantidadObligadosSolidarios}
							primerObligadoSolidario={primerObligadoSolidario}
							segundoObligadoSolidario={segundoObligadoSolidario}
							tercerObligadoSolidario={tercerObligadoSolidario}
							setFileFive={setFileFive}
							fileFive={fileFive}
							cuartoObligadoSolidario={cuartoObligadoSolidario}
							setFileSix={setFileSix}
							fileSix={fileSix}
							quintoObligadoSolidario={quintoObligadoSolidario}
						/>
					</animated.div>
				)
			}
								</>
							}
						</form>
					</div>
				</div>
			</div>

		</>
	);
}


export default Formulario;