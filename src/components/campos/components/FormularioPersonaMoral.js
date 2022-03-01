import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import CargaDocumentos from './CargaDocumentos';
import HistorialCrediticio from './HistorialCrediticio';

const FormularioPersonaMoral = ({
	primerObligadoSolidario,
	setFileFive,
	fileFive,
	setFileSix,
	fileSix,
	setSeccion,
	setSubMenuSelected,
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
	aniosSector,
	statePMGENERALESRazonsocial,
	statePMGENERALESRFC,
	statePMGENERALESNumerodeescritura,
	statePMGENERALESFechadealtaenSHCP,
	statePMGENERALESDuraciondelasociedad,
	statePMGENERALESFoliomercantil,
	statePMREPRESENTANTELEGALNombrecompleto,
	statePMREPRESENTANTELEGALCargo,
	statePMREPRESENTANTELEGALTelefono,
	statePMCONTACTOEMPRESANombrecompleto,
	statePMCONTACTOEMPRESACargo,
	statePMCONTACTOEMPRESATelefono,
	statePMDOMICILIONEGOCIOCalle,
	statePMDOMICILIONEGOCIONumeroexterior,
	statePMDOMICILIONEGOCIONumerointerior,
	statePMDOMICILIONEGOCIOPiso,
	statePMDOMICILIONEGOCIOPais,
	statePMDOMICILIONEGOCIOCP,
	statePMDOMICILIONEGOCIOColonia,
	statePMDOMICILIONEGOCIODelegacionMunicipio,
	statePMDOMICILIONEGOCIOEstado,
	statePMDOMICILIONEGOCIOTipodevivienda,
	statePMINFORMACIONNEGOCIOImportarexportar,
	statePMINFORMACIONNEGOCIOSector,
	statePMINFORMACIONNEGOCIOGiro,
	statePMINFORMACIONNEGOCIOActividad,
	statePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector,
	statePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad,
	statePMINFORMACIONNEGOCIOTotaldeempleados,
	statePMINFORMACIONNEGOCIONumerodesucursales,
	statePMINFORMACIONNEGOCIOTipodelocal,
	statePMINFORMACIONNEGOCIOAnosqueloharentado,
	statePMINFORMACIONNEGOCIOImporteRentaMensual,
	statePMINFORMACIONNEGOCIOTotaldenominamensual,
	statePMECONOMICOSVentasanuales,
	statePMECONOMICOSTipodecomprobantedeingresos,
	statePMECONOMICOSFuentedeingresos,
	stateSP1Nombrerazonsocial,
	stateSP1Accionario,
	stateSP1RFC,
	stateSP1Puestoenlaempresa,
	stateSP2Nombrerazonsocial,
	stateSP2Accionario,
	stateSP2RFC,
	stateSP2Puestoenlaempresa,
	stateSP3Nombrerazonsocial,
	stateSP3Accionario,
	stateSP3RFC,
	stateSP3Puestoenlaempresa,
	stateSP4Nombrerazonsocial,
	stateSP4Accionario,
	stateSP4RFC,
	stateSP4Puestoenlaempresa,
	stateSP5Nombrerazonsocial,
	stateSP5Accionario,
	stateSP5RFC,
	stateSP5Puestoenlaempresa,
	statePRINCIPALACCIONISTANombre,
	statePRINCIPALACCIONISTAApellidoPaterno,
	statePRINCIPALACCIONISTAApellidoMaterno,
	statePRINCIPALACCIONISTAFechadenacimiento,
	statePRINCIPALACCIONISTAPaisdenacimiento,
	statePRINCIPALACCIONISTAEstadodeNacimiento,
	statePRINCIPALACCIONISTAGenero,
	statePRINCIPALACCIONISTARFC,
	statePRINCIPALACCIONISTACURP,
	statePRINCIPALACCIONISTAFolioID,
	statePRINCIPALACCIONISTANacionalidad,
	statePRINCIPALACCIONISTACalidadmigratoria,
	statePRINCIPALACCIONISTACorreoelectronico,
	statePRINCIPALACCIONISTATelefono,
	statePRINCIPALACCIONISTACelular,
	statePRINCIPALACCIONISTAEstadocivil,
	statePRINCIPALACCIONISTAMenoresde23anosquedependen,
	statePRINCIPALACCIONISTATotaldedependientes,
	statePRINCIPALACCIONISTANivelacademico,
	statePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa,
	statePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal,
	statePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA,
	statePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa,
	statePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE,
	statePRINCIPALACCIONISTATotaldenominamensual,
	statePRINCIPALACCIONISTAFuentedeingresos,
	statePRINCIPALACCIONISTACalle,
	statePRINCIPALACCIONISTANumerointerior,
	statePRINCIPALACCIONISTANumeroexterior,
	statePRINCIPALACCIONISTAPiso,
	statePRINCIPALACCIONISTAPais,
	statePRINCIPALACCIONISTACP,
	statePRINCIPALACCIONISTAColonia,
	statePRINCIPALACCIONISTADelegacionMunicipio,
	statePRINCIPALACCIONISTAEstado,
	statePRINCIPALACCIONISTATipodeDomicilio,
	statePRINCIPALACCIONISTATipodevivienda,
	statePRINCIPALACCIONISTAAntiguedadeneldomicilioactual,
	statePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior,
	statePRINCIPALACCIONISTAEntrecalle1,
	statePRINCIPALACCIONISTAEntrecalle2,
	stateOS2PFNombre,
	stateOS2PFApellidoPaterno,
	stateOS2PFApellidoMaterno,
	stateOS2PFFechadenacimiento,
	stateOS2PFPaisdenacimiento,
	stateOS2PFEstadodeNacimiento,
	stateOS2PFGenero,
	stateOS2PFRFC,
	stateOS2PFCURP,
	stateOS2PFFolioID,
	stateOS2PFNacionalidad,
	stateOS2PFCalidadmigratoria,
	stateOS2PFCorreoelectronico,
	stateOS2PFTelefono,
	stateOS2PFCelular,
	stateOS2PFMenoresde23anosquedependen,
	stateOS2PFTotaldedependientes,
	stateOS2PFRelacionconelsolicitante,
	stateOS2PFRelacionadoramajudicialGobiernoLegislativa,
	stateOS2PFTienemasdeunpaisderesidencia,
	stateOS2PFTieneoadquiriolaresidenciadelosEUA,
	stateOS2PFElobligadoesaccionistauobligadodeotraempresa,
	stateOS2PFEsobligadoofiadordeotraempresaoPFAE,
	stateOS2PFNumeroInterior,
	stateOS2PFPiso,
	stateOS2PFPais,
	stateOS2PFCP,
	stateOS2PFColonia,
	stateOS2PFDelegacionMunicipio,
	stateOS2PFEstado,
	stateOS2PFTipodeDomicilio,
	stateOS2PFTipodevivienda,
	stateOS2PFAntiguedadeneldomicilioactual,
	stateOS2PFAntiguedadeneldomicilioanterior,
	stateOS2PFEntrecalle1,
	stateOS2PFEntrecalle2,
	stateOS2PFAENombre,
	stateOS2PFAEApellidoPaterno,
	stateOS2PFAEApellidoMaterno,
	stateOS2PFAEFechadenacimiento,
	stateOS2PFAEPaisdenacimiento,
	stateOS2PFAEEstadodeNacimiento,
	stateOS2PFAEGenero,
	stateOS2PFAERFC,
	stateOS2PFAECURP,
	stateOS2PFAEFolioID,
	stateOS2PFAENacionalidad,
	stateOS2PFAECalidadmigratoria,
	stateOS2PFAECorreoelectronico,
	stateOS2PFAETelefono,
	stateOS2PFAECelular,
	stateOS2PFAEMenoresde23anosquedependen,
	stateOS2PFAETotaldedependientes,
	stateOS2PFAERelacionconelsolicitante,
	stateOS2PFAERelacionadoramajudicialGobiernoLegislativa,
	stateOS2PFAETienemasdeunpaisderesidencia,
	stateOS2PFAETieneoadquiriolaresidenciadelosEUA,
	stateOS2PFAEElobligadoesaccionistauobligadodeotraempresa,
	stateOS2PFAEEsobligadoofiadordeotraempresaoPFAE,
	stateOS2PFAENumeroInterior,
	stateOS2PFAEPiso,
	stateOS2PFAEPais,
	stateOS2PFAECP,
	stateOS2PFAEColonia,
	stateOS2PFAEDelegacionMunicipio,
	stateOS2PFAEEstado,
	stateOS2PFAETipodeDomicilio,
	stateOS2PFAETipodevivienda,
	stateOS2PFAEAntiguedadeneldomicilioactual,
	stateOS2PFAEAntiguedadeneldomicilioanterior,
	stateOS2PFAEEntrecalle1,
	stateOS2PFAEEntrecalle2,
	stateOS2PFAEImportarexportar,
	stateOS2PFAESector,
	stateOS2PFAEGiro,
	stateOS2PFAEActividad,
	stateOS2PFAEFechadealtaenSHCP,
	stateOS2PFAENumerodesucursales,
	stateOS2PFAEAnosdeexperienciaenelsector,
	stateOS2PMRazonsocial,
	stateOS2PMRFC,
	stateOS2PMCorreoelectronico,
	stateOS2PMFechadealtaenSHCP,
	stateOS2PMRelacionadoramajudicialGobiernoLegislativa,
	stateOS2PMTienemasdeunpaisderesidencia,
	stateOS2PMTieneoadquiriolaresidenciadelosEUA,
	stateOS2PMElobligadoesaccionistauobligadodeotraempresa,
	stateOS2PMEsobligadoofiadordeotraempresaoPFAE,
	stateOS2PMNombrecompleto,
	stateOS2PMCargo,
	stateOS2PMTelefono,
	stateOS2PMCalle,
	stateOS2PMNumeroexterior,
	stateOS2PMNumerointerior,
	stateOS2PMPiso,
	stateOS2PMPais,
	stateOS2PMCP,
	stateOS2PMColonia,
	stateOS2PMDelegacionMunicipio,
	stateOS2PMEstado,
	stateOS2PMTipodeDomicilio,
	stateOS2PMTipodevivienda,
	stateOS2PMEntrecalle1,
	stateOS2PMEntrecalle2,
	stateOS2PMImportarexportar,
	stateOS2PMSector,
	stateOS2PMGiro,
	stateOS2PMActividad,
	stateOS2PMNumerodesucursales,
	stateOS2PMAnosdeexperienciaenelsector,
	stateOS3PFNombre,
	stateOS3PFApellidoPaterno,
	stateOS3PFApellidoMaterno,
	stateOS3PFFechadenacimiento,
	stateOS3PFPaisdenacimiento,
	stateOS3PFEstadodeNacimiento,
	stateOS3PFGenero,
	stateOS3PFRFC,
	stateOS3PFCURP,
	stateOS3PFFolioID,
	stateOS3PFNacionalidad,
	stateOS3PFCalidadmigratoria,
	stateOS3PFCorreoelectronico,
	stateOS3PFTelefono,
	stateOS3PFCelular,
	stateOS3PFMenoresde23anosquedependen,
	stateOS3PFTotaldedependientes,
	stateOS3PFRelacionconelsolicitante,
	stateOS3PFRelacionadoramajudicialGobiernoLegislativa,
	stateOS3PFTienemasdeunpaisderesidencia,
	stateOS3PFTieneoadquiriolaresidenciadelosEUA,
	stateOS3PFElobligadoesaccionistauobligadodeotraempresa,
	stateOS3PFEsobligadoofiadordeotraempresaoPFAE,
	stateOS3PFNumeroInterior,
	stateOS3PFPiso,
	stateOS3PFPais,
	stateOS3PFCP,
	stateOS3PFColonia,
	stateOS3PFDelegacionMunicipio,
	stateOS3PFEstado,
	stateOS3PFTipodeDomicilio,
	stateOS3PFTipodevivienda,
	stateOS3PFAntiguedadeneldomicilioactual,
	stateOS3PFAntiguedadeneldomicilioanterior,
	stateOS3PFEntrecalle1,
	stateOS3PFEntrecalle2,
	stateOS3PFAENombre,
	stateOS3PFAEApellidoPaterno,
	stateOS3PFAEApellidoMaterno,
	stateOS3PFAEFechadenacimiento,
	stateOS3PFAEPaisdenacimiento,
	stateOS3PFAEEstadodeNacimiento,
	stateOS3PFAEGenero,
	stateOS3PFAERFC,
	stateOS3PFAECURP,
	stateOS3PFAEFolioID,
	stateOS3PFAENacionalidad,
	stateOS3PFAECalidadmigratoria,
	stateOS3PFAECorreoelectronico,
	stateOS3PFAETelefono,
	stateOS3PFAECelular,
	stateOS3PFAEMenoresde23anosquedependen,
	stateOS3PFAETotaldedependientes,
	stateOS3PFAERelacionconelsolicitante,
	stateOS3PFAERelacionadoramajudicialGobiernoLegislativa,
	stateOS3PFAETienemasdeunpaisderesidencia,
	stateOS3PFAETieneoadquiriolaresidenciadelosEUA,
	stateOS3PFAEElobligadoesaccionistauobligadodeotraempresa,
	stateOS3PFAEEsobligadoofiadordeotraempresaoPFAE,
	stateOS3PFAENumeroInterior,
	stateOS3PFAEPiso,
	stateOS3PFAEPais,
	stateOS3PFAECP,
	stateOS3PFAEColonia,
	stateOS3PFAEDelegacionMunicipio,
	stateOS3PFAEEstado,
	stateOS3PFAETipodeDomicilio,
	stateOS3PFAETipodevivienda,
	stateOS3PFAEAntiguedadeneldomicilioactual,
	stateOS3PFAEAntiguedadeneldomicilioanterior,
	stateOS3PFAEEntrecalle1,
	stateOS3PFAEEntrecalle2,
	stateOS3PFAEImportarexportar,
	stateOS3PFAESector,
	stateOS3PFAEGiro,
	stateOS3PFAEActividad,
	stateOS3PFAEFechadealtaenSHCP,
	stateOS3PFAENumerodesucursales,
	stateOS3PFAEAnosdeexperienciaenelsector,
	stateOS3PMRazonsocial,
	stateOS3PMRFC,
	stateOS3PMCorreoelectronico,
	stateOS3PMFechadealtaenSHCP,
	stateOS3PMRelacionadoramajudicialGobiernoLegislativa,
	stateOS3PMTienemasdeunpaisderesidencia,
	stateOS3PMTieneoadquiriolaresidenciadelosEUA,
	stateOS3PMElobligadoesaccionistauobligadodeotraempresa,
	stateOS3PMEsobligadoofiadordeotraempresaoPFAE,
	stateOS3PMNombrecompleto,
	stateOS3PMCargo,
	stateOS3PMTelefono,
	stateOS3PMCalle,
	stateOS3PMNumeroexterior,
	stateOS3PMNumerointerior,
	stateOS3PMPiso,
	stateOS3PMPais,
	stateOS3PMCP,
	stateOS3PMColonia,
	stateOS3PMDelegacionMunicipio,
	stateOS3PMEstado,
	stateOS3PMTipodeDomicilio,
	stateOS3PMTipodevivienda,
	stateOS3PMEntrecalle1,
	stateOS3PMEntrecalle2,
	stateOS3PMImportarexportar,
	stateOS3PMSector,
	stateOS3PMGiro,
	stateOS3PMActividad,
	stateOS3PMNumerodesucursales,
	stateOS3PMAnosdeexperienciaenelsector,
	stateOS4PFNombre,
	stateOS4PFApellidoPaterno,
	stateOS4PFApellidoMaterno,
	stateOS4PFFechadenacimiento,
	stateOS4PFPaisdenacimiento,
	stateOS4PFEstadodeNacimiento,
	stateOS4PFGenero,
	stateOS4PFRFC,
	stateOS4PFCURP,
	stateOS4PFFolioID,
	stateOS4PFNacionalidad,
	stateOS4PFCalidadmigratoria,
	stateOS4PFCorreoelectronico,
	stateOS4PFTelefono,
	stateOS4PFCelular,
	stateOS4PFMenoresde23anosquedependen,
	stateOS4PFTotaldedependientes,
	stateOS4PFRelacionconelsolicitante,
	stateOS4PFRelacionadoramajudicialGobiernoLegislativa,
	stateOS4PFTienemasdeunpaisderesidencia,
	stateOS4PFTieneoadquiriolaresidenciadelosEUA,
	stateOS4PFElobligadoesaccionistauobligadodeotraempresa,
	stateOS4PFEsobligadoofiadordeotraempresaoPFAE,
	stateOS4PFNumeroInterior,
	stateOS4PFPiso,
	stateOS4PFPais,
	stateOS4PFCP,
	stateOS4PFColonia,
	stateOS4PFDelegacionMunicipio,
	stateOS4PFEstado,
	stateOS4PFTipodeDomicilio,
	stateOS4PFTipodevivienda,
	stateOS4PFAntiguedadeneldomicilioactual,
	stateOS4PFAntiguedadeneldomicilioanterior,
	stateOS4PFEntrecalle1,
	stateOS4PFEntrecalle2,
	stateOS4PFAENombre,
	stateOS4PFAEApellidoPaterno,
	stateOS4PFAEApellidoMaterno,
	stateOS4PFAEFechadenacimiento,
	stateOS4PFAEPaisdenacimiento,
	stateOS4PFAEEstadodeNacimiento,
	stateOS4PFAEGenero,
	stateOS4PFAERFC,
	stateOS4PFAECURP,
	stateOS4PFAEFolioID,
	stateOS4PFAENacionalidad,
	stateOS4PFAECalidadmigratoria,
	stateOS4PFAECorreoelectronico,
	stateOS4PFAETelefono,
	stateOS4PFAECelular,
	stateOS4PFAEMenoresde23anosquedependen,
	stateOS4PFAETotaldedependientes,
	stateOS4PFAERelacionconelsolicitante,
	stateOS4PFAERelacionadoramajudicialGobiernoLegislativa,
	stateOS4PFAETienemasdeunpaisderesidencia,
	stateOS4PFAETieneoadquiriolaresidenciadelosEUA,
	stateOS4PFAEElobligadoesaccionistauobligadodeotraempresa,
	stateOS4PFAEEsobligadoofiadordeotraempresaoPFAE,
	stateOS4PFAENumeroInterior,
	stateOS4PFAEPiso,
	stateOS4PFAEPais,
	stateOS4PFAECP,
	stateOS4PFAEColonia,
	stateOS4PFAEDelegacionMunicipio,
	stateOS4PFAEEstado,
	stateOS4PFAETipodeDomicilio,
	stateOS4PFAETipodevivienda,
	stateOS4PFAEAntiguedadeneldomicilioactual,
	stateOS4PFAEAntiguedadeneldomicilioanterior,
	stateOS4PFAEEntrecalle1,
	stateOS4PFAEEntrecalle2,
	stateOS4PFAEImportarexportar,
	stateOS4PFAESector,
	stateOS4PFAEGiro,
	stateOS4PFAEActividad,
	stateOS4PFAEFechadealtaenSHCP,
	stateOS4PFAENumerodesucursales,
	stateOS4PFAEAnosdeexperienciaenelsector,
	stateOS4PMRazonsocial,
	stateOS4PMRFC,
	stateOS4PMCorreoelectronico,
	stateOS4PMFechadealtaenSHCP,
	stateOS4PMRelacionadoramajudicialGobiernoLegislativa,
	stateOS4PMTienemasdeunpaisderesidencia,
	stateOS4PMTieneoadquiriolaresidenciadelosEUA,
	stateOS4PMElobligadoesaccionistauobligadodeotraempresa,
	stateOS4PMEsobligadoofiadordeotraempresaoPFAE,
	stateOS4PMNombrecompleto,
	stateOS4PMCargo,
	stateOS4PMTelefono,
	stateOS4PMCalle,
	stateOS4PMNumeroexterior,
	stateOS4PMNumerointerior,
	stateOS4PMPiso,
	stateOS4PMPais,
	stateOS4PMCP,
	stateOS4PMColonia,
	stateOS4PMDelegacionMunicipio,
	stateOS4PMEstado,
	stateOS4PMTipodeDomicilio,
	stateOS4PMTipodevivienda,
	stateOS4PMEntrecalle1,
	stateOS4PMEntrecalle2,
	stateOS4PMImportarexportar,
	stateOS4PMSector,
	stateOS4PMGiro,
	stateOS4PMActividad,
	stateOS4PMNumerodesucursales,
	stateOS4PMAnosdeexperienciaenelsector,
	stateOS5PFNombre,
	stateOS5PFApellidoPaterno,
	stateOS5PFApellidoMaterno,
	stateOS5PFFechadenacimiento,
	stateOS5PFPaisdenacimiento,
	stateOS5PFEstadodeNacimiento,
	stateOS5PFGenero,
	stateOS5PFRFC,
	stateOS5PFCURP,
	stateOS5PFFolioID,
	stateOS5PFNacionalidad,
	stateOS5PFCalidadmigratoria,
	stateOS5PFCorreoelectronico,
	stateOS5PFTelefono,
	stateOS5PFCelular,
	stateOS5PFMenoresde23anosquedependen,
	stateOS5PFTotaldedependientes,
	stateOS5PFRelacionconelsolicitante,
	stateOS5PFRelacionadoramajudicialGobiernoLegislativa,
	stateOS5PFTienemasdeunpaisderesidencia,
	stateOS5PFTieneoadquiriolaresidenciadelosEUA,
	stateOS5PFElobligadoesaccionistauobligadodeotraempresa,
	stateOS5PFEsobligadoofiadordeotraempresaoPFAE,
	stateOS5PFNumeroInterior,
	stateOS5PFPiso,
	stateOS5PFPais,
	stateOS5PFCP,
	stateOS5PFColonia,
	stateOS5PFDelegacionMunicipio,
	stateOS5PFEstado,
	stateOS5PFTipodeDomicilio,
	stateOS5PFTipodevivienda,
	stateOS5PFAntiguedadeneldomicilioactual,
	stateOS5PFAntiguedadeneldomicilioanterior,
	stateOS5PFEntrecalle1,
	stateOS5PFEntrecalle2,
	stateOS5PFAENombre,
	stateOS5PFAEApellidoPaterno,
	stateOS5PFAEApellidoMaterno,
	stateOS5PFAEFechadenacimiento,
	stateOS5PFAEPaisdenacimiento,
	stateOS5PFAEEstadodeNacimiento,
	stateOS5PFAEGenero,
	stateOS5PFAERFC,
	stateOS5PFAECURP,
	stateOS5PFAEFolioID,
	stateOS5PFAENacionalidad,
	stateOS5PFAECalidadmigratoria,
	stateOS5PFAECorreoelectronico,
	stateOS5PFAETelefono,
	stateOS5PFAECelular,
	stateOS5PFAEMenoresde23anosquedependen,
	stateOS5PFAETotaldedependientes,
	stateOS5PFAERelacionconelsolicitante,
	stateOS5PFAERelacionadoramajudicialGobiernoLegislativa,
	stateOS5PFAETienemasdeunpaisderesidencia,
	stateOS5PFAETieneoadquiriolaresidenciadelosEUA,
	stateOS5PFAEElobligadoesaccionistauobligadodeotraempresa,
	stateOS5PFAEEsobligadoofiadordeotraempresaoPFAE,
	stateOS5PFAENumeroInterior,
	stateOS5PFAEPiso,
	stateOS5PFAEPais,
	stateOS5PFAECP,
	stateOS5PFAEColonia,
	stateOS5PFAEDelegacionMunicipio,
	stateOS5PFAEEstado,
	stateOS5PFAETipodeDomicilio,
	stateOS5PFAETipodevivienda,
	stateOS5PFAEAntiguedadeneldomicilioactual,
	stateOS5PFAEAntiguedadeneldomicilioanterior,
	stateOS5PFAEEntrecalle1,
	stateOS5PFAEEntrecalle2,
	stateOS5PFAEImportarexportar,
	stateOS5PFAESector,
	stateOS5PFAEGiro,
	stateOS5PFAEActividad,
	stateOS5PFAEFechadealtaenSHCP,
	stateOS5PFAENumerodesucursales,
	stateOS5PFAEAnosdeexperienciaenelsector,
	stateOS5PMRazonsocial,
	stateOS5PMRFC,
	stateOS5PMCorreoelectronico,
	stateOS5PMFechadealtaenSHCP,
	stateOS5PMRelacionadoramajudicialGobiernoLegislativa,
	stateOS5PMTienemasdeunpaisderesidencia,
	stateOS5PMTieneoadquiriolaresidenciadelosEUA,
	stateOS5PMElobligadoesaccionistauobligadodeotraempresa,
	stateOS5PMEsobligadoofiadordeotraempresaoPFAE,
	stateOS5PMNombrecompleto,
	stateOS5PMCargo,
	stateOS5PMTelefono,
	stateOS5PMCalle,
	stateOS5PMNumeroexterior,
	stateOS5PMNumerointerior,
	stateOS5PMPiso,
	stateOS5PMPais,
	stateOS5PMCP,
	stateOS5PMColonia,
	stateOS5PMDelegacionMunicipio,
	stateOS5PMEstado,
	stateOS5PMTipodeDomicilio,
	stateOS5PMTipodevivienda,
	stateOS5PMEntrecalle1,
	stateOS5PMEntrecalle2,
	stateOS5PMImportarexportar,
	stateOS5PMSector,
	stateOS5PMGiro,
	stateOS5PMActividad,
	stateOS5PMNumerodesucursales,
	stateOS5PMAnosdeexperienciaenelsector,


	setStatePMGENERALESRazonsocial,
	setStatePMGENERALESRFC,
	setStatePMGENERALESNumerodeescritura,
	setStatePMGENERALESFechadealtaenSHCP,
	setStatePMGENERALESDuraciondelasociedad,
	setStatePMGENERALESFoliomercantil,
	setStatePMREPRESENTANTELEGALNombrecompleto,
	setStatePMREPRESENTANTELEGALCargo,
	setStatePMREPRESENTANTELEGALTelefono,
	setStatePMCONTACTOEMPRESANombrecompleto,
	setStatePMCONTACTOEMPRESACargo,
	setStatePMCONTACTOEMPRESATelefono,
	setStatePMDOMICILIONEGOCIOCalle,
	setStatePMDOMICILIONEGOCIONumeroexterior,
	setStatePMDOMICILIONEGOCIONumerointerior,
	setStatePMDOMICILIONEGOCIOPiso,
	setStatePMDOMICILIONEGOCIOPais,
	setStatePMDOMICILIONEGOCIOCP,
	setStatePMDOMICILIONEGOCIOColonia,
	setStatePMDOMICILIONEGOCIODelegacionMunicipio,
	setStatePMDOMICILIONEGOCIOEstado,
	setStatePMDOMICILIONEGOCIOTipodevivienda,
	setStatePMINFORMACIONNEGOCIOImportarexportar,
	setStatePMINFORMACIONNEGOCIOSector,
	setStatePMINFORMACIONNEGOCIOGiro,
	setStatePMINFORMACIONNEGOCIOActividad,
	setStatePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector,
	setStatePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad,
	setStatePMINFORMACIONNEGOCIOTotaldeempleados,
	setStatePMINFORMACIONNEGOCIONumerodesucursales,
	setStatePMINFORMACIONNEGOCIOTipodelocal,
	setStatePMINFORMACIONNEGOCIOAnosqueloharentado,
	setStatePMINFORMACIONNEGOCIOImporteRentaMensual,
	setStatePMINFORMACIONNEGOCIOTotaldenominamensual,
	setStatePMECONOMICOSVentasanuales,
	setStatePMECONOMICOSTipodecomprobantedeingresos,
	setStatePMECONOMICOSFuentedeingresos,
	setStateSP1Nombrerazonsocial,
	setStateSP1Accionario,
	setStateSP1RFC,
	setStateSP1Puestoenlaempresa,
	setStateSP2Nombrerazonsocial,
	setStateSP2Accionario,
	setStateSP2RFC,
	setStateSP2Puestoenlaempresa,
	setStateSP3Nombrerazonsocial,
	setStateSP3Accionario,
	setStateSP3RFC,
	setStateSP3Puestoenlaempresa,
	setStateSP4Nombrerazonsocial,
	setStateSP4Accionario,
	setStateSP4RFC,
	setStateSP4Puestoenlaempresa,
	setStateSP5Nombrerazonsocial,
	setStateSP5Accionario,
	setStateSP5RFC,
	setStateSP5Puestoenlaempresa,
	setStatePRINCIPALACCIONISTANombre,
	setStatePRINCIPALACCIONISTAApellidoPaterno,
	setStatePRINCIPALACCIONISTAApellidoMaterno,
	setStatePRINCIPALACCIONISTAFechadenacimiento,
	setStatePRINCIPALACCIONISTAPaisdenacimiento,
	setStatePRINCIPALACCIONISTAEstadodeNacimiento,
	setStatePRINCIPALACCIONISTAGenero,
	setStatePRINCIPALACCIONISTARFC,
	setStatePRINCIPALACCIONISTACURP,
	setStatePRINCIPALACCIONISTAFolioID,
	setStatePRINCIPALACCIONISTANacionalidad,
	setStatePRINCIPALACCIONISTACalidadmigratoria,
	setStatePRINCIPALACCIONISTACorreoelectronico,
	setStatePRINCIPALACCIONISTATelefono,
	setStatePRINCIPALACCIONISTACelular,
	setStatePRINCIPALACCIONISTAEstadocivil,
	setStatePRINCIPALACCIONISTAMenoresde23anosquedependen,
	setStatePRINCIPALACCIONISTATotaldedependientes,
	setStatePRINCIPALACCIONISTANivelacademico,
	setStatePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa,
	setStatePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal,
	setStatePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA,
	setStatePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa,
	setStatePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE,
	setStatePRINCIPALACCIONISTATotaldenominamensual,
	setStatePRINCIPALACCIONISTAFuentedeingresos,
	setStatePRINCIPALACCIONISTACalle,
	setStatePRINCIPALACCIONISTANumerointerior,
	setStatePRINCIPALACCIONISTANumeroexterior,
	setStatePRINCIPALACCIONISTAPiso,
	setStatePRINCIPALACCIONISTAPais,
	setStatePRINCIPALACCIONISTACP,
	setStatePRINCIPALACCIONISTAColonia,
	setStatePRINCIPALACCIONISTADelegacionMunicipio,
	setStatePRINCIPALACCIONISTAEstado,
	setStatePRINCIPALACCIONISTATipodeDomicilio,
	setStatePRINCIPALACCIONISTATipodevivienda,
	setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioactual,
	setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior,
	setStatePRINCIPALACCIONISTAEntrecalle1,
	setStatePRINCIPALACCIONISTAEntrecalle2,
	setStateOS2PFNombre,
	setStateOS2PFApellidoPaterno,
	setStateOS2PFApellidoMaterno,
	setStateOS2PFFechadenacimiento,
	setStateOS2PFPaisdenacimiento,
	setStateOS2PFEstadodeNacimiento,
	setStateOS2PFGenero,
	setStateOS2PFRFC,
	setStateOS2PFCURP,
	setStateOS2PFFolioID,
	setStateOS2PFNacionalidad,
	setStateOS2PFCalidadmigratoria,
	setStateOS2PFCorreoelectronico,
	setStateOS2PFTelefono,
	setStateOS2PFCelular,
	setStateOS2PFMenoresde23anosquedependen,
	setStateOS2PFTotaldedependientes,
	setStateOS2PFRelacionconelsolicitante,
	setStateOS2PFRelacionadoramajudicialGobiernoLegislativa,
	setStateOS2PFTienemasdeunpaisderesidencia,
	setStateOS2PFTieneoadquiriolaresidenciadelosEUA,
	setStateOS2PFElobligadoesaccionistauobligadodeotraempresa,
	setStateOS2PFEsobligadoofiadordeotraempresaoPFAE,
	setStateOS2PFNumeroInterior,
	setStateOS2PFPiso,
	setStateOS2PFPais,
	setStateOS2PFCP,
	setStateOS2PFColonia,
	setStateOS2PFDelegacionMunicipio,
	setStateOS2PFEstado,
	setStateOS2PFTipodeDomicilio,
	setStateOS2PFTipodevivienda,
	setStateOS2PFAntiguedadeneldomicilioactual,
	setStateOS2PFAntiguedadeneldomicilioanterior,
	setStateOS2PFEntrecalle1,
	setStateOS2PFEntrecalle2,
	setStateOS2PFAENombre,
	setStateOS2PFAEApellidoPaterno,
	setStateOS2PFAEApellidoMaterno,
	setStateOS2PFAEFechadenacimiento,
	setStateOS2PFAEPaisdenacimiento,
	setStateOS2PFAEEstadodeNacimiento,
	setStateOS2PFAEGenero,
	setStateOS2PFAERFC,
	setStateOS2PFAECURP,
	setStateOS2PFAEFolioID,
	setStateOS2PFAENacionalidad,
	setStateOS2PFAECalidadmigratoria,
	setStateOS2PFAECorreoelectronico,
	setStateOS2PFAETelefono,
	setStateOS2PFAECelular,
	setStateOS2PFAEMenoresde23anosquedependen,
	setStateOS2PFAETotaldedependientes,
	setStateOS2PFAERelacionconelsolicitante,
	setStateOS2PFAERelacionadoramajudicialGobiernoLegislativa,
	setStateOS2PFAETienemasdeunpaisderesidencia,
	setStateOS2PFAETieneoadquiriolaresidenciadelosEUA,
	setStateOS2PFAEElobligadoesaccionistauobligadodeotraempresa,
	setStateOS2PFAEEsobligadoofiadordeotraempresaoPFAE,
	setStateOS2PFAENumeroInterior,
	setStateOS2PFAEPiso,
	setStateOS2PFAEPais,
	setStateOS2PFAECP,
	setStateOS2PFAEColonia,
	setStateOS2PFAEDelegacionMunicipio,
	setStateOS2PFAEEstado,
	setStateOS2PFAETipodeDomicilio,
	setStateOS2PFAETipodevivienda,
	setStateOS2PFAEAntiguedadeneldomicilioactual,
	setStateOS2PFAEAntiguedadeneldomicilioanterior,
	setStateOS2PFAEEntrecalle1,
	setStateOS2PFAEEntrecalle2,
	setStateOS2PFAEImportarexportar,
	setStateOS2PFAESector,
	setStateOS2PFAEGiro,
	setStateOS2PFAEActividad,
	setStateOS2PFAEFechadealtaenSHCP,
	setStateOS2PFAENumerodesucursales,
	setStateOS2PFAEAnosdeexperienciaenelsector,
	setStateOS2PMRazonsocial,
	setStateOS2PMRFC,
	setStateOS2PMCorreoelectronico,
	setStateOS2PMFechadealtaenSHCP,
	setStateOS2PMRelacionadoramajudicialGobiernoLegislativa,
	setStateOS2PMTienemasdeunpaisderesidencia,
	setStateOS2PMTieneoadquiriolaresidenciadelosEUA,
	setStateOS2PMElobligadoesaccionistauobligadodeotraempresa,
	setStateOS2PMEsobligadoofiadordeotraempresaoPFAE,
	setStateOS2PMNombrecompleto,
	setStateOS2PMCargo,
	setStateOS2PMTelefono,
	setStateOS2PMCalle,
	setStateOS2PMNumeroexterior,
	setStateOS2PMNumerointerior,
	setStateOS2PMPiso,
	setStateOS2PMPais,
	setStateOS2PMCP,
	setStateOS2PMColonia,
	setStateOS2PMDelegacionMunicipio,
	setStateOS2PMEstado,
	setStateOS2PMTipodeDomicilio,
	setStateOS2PMTipodevivienda,
	setStateOS2PMEntrecalle1,
	setStateOS2PMEntrecalle2,
	setStateOS2PMImportarexportar,
	setStateOS2PMSector,
	setStateOS2PMGiro,
	setStateOS2PMActividad,
	setStateOS2PMNumerodesucursales,
	setStateOS2PMAnosdeexperienciaenelsector,
	setStateOS3PFNombre,
	setStateOS3PFApellidoPaterno,
	setStateOS3PFApellidoMaterno,
	setStateOS3PFFechadenacimiento,
	setStateOS3PFPaisdenacimiento,
	setStateOS3PFEstadodeNacimiento,
	setStateOS3PFGenero,
	setStateOS3PFRFC,
	setStateOS3PFCURP,
	setStateOS3PFFolioID,
	setStateOS3PFNacionalidad,
	setStateOS3PFCalidadmigratoria,
	setStateOS3PFCorreoelectronico,
	setStateOS3PFTelefono,
	setStateOS3PFCelular,
	setStateOS3PFMenoresde23anosquedependen,
	setStateOS3PFTotaldedependientes,
	setStateOS3PFRelacionconelsolicitante,
	setStateOS3PFRelacionadoramajudicialGobiernoLegislativa,
	setStateOS3PFTienemasdeunpaisderesidencia,
	setStateOS3PFTieneoadquiriolaresidenciadelosEUA,
	setStateOS3PFElobligadoesaccionistauobligadodeotraempresa,
	setStateOS3PFEsobligadoofiadordeotraempresaoPFAE,
	setStateOS3PFNumeroInterior,
	setStateOS3PFPiso,
	setStateOS3PFPais,
	setStateOS3PFCP,
	setStateOS3PFColonia,
	setStateOS3PFDelegacionMunicipio,
	setStateOS3PFEstado,
	setStateOS3PFTipodeDomicilio,
	setStateOS3PFTipodevivienda,
	setStateOS3PFAntiguedadeneldomicilioactual,
	setStateOS3PFAntiguedadeneldomicilioanterior,
	setStateOS3PFEntrecalle1,
	setStateOS3PFEntrecalle2,
	setStateOS3PFAENombre,
	setStateOS3PFAEApellidoPaterno,
	setStateOS3PFAEApellidoMaterno,
	setStateOS3PFAEFechadenacimiento,
	setStateOS3PFAEPaisdenacimiento,
	setStateOS3PFAEEstadodeNacimiento,
	setStateOS3PFAEGenero,
	setStateOS3PFAERFC,
	setStateOS3PFAECURP,
	setStateOS3PFAEFolioID,
	setStateOS3PFAENacionalidad,
	setStateOS3PFAECalidadmigratoria,
	setStateOS3PFAECorreoelectronico,
	setStateOS3PFAETelefono,
	setStateOS3PFAECelular,
	setStateOS3PFAEMenoresde23anosquedependen,
	setStateOS3PFAETotaldedependientes,
	setStateOS3PFAERelacionconelsolicitante,
	setStateOS3PFAERelacionadoramajudicialGobiernoLegislativa,
	setStateOS3PFAETienemasdeunpaisderesidencia,
	setStateOS3PFAETieneoadquiriolaresidenciadelosEUA,
	setStateOS3PFAEElobligadoesaccionistauobligadodeotraempresa,
	setStateOS3PFAEEsobligadoofiadordeotraempresaoPFAE,
	setStateOS3PFAENumeroInterior,
	setStateOS3PFAEPiso,
	setStateOS3PFAEPais,
	setStateOS3PFAECP,
	setStateOS3PFAEColonia,
	setStateOS3PFAEDelegacionMunicipio,
	setStateOS3PFAEEstado,
	setStateOS3PFAETipodeDomicilio,
	setStateOS3PFAETipodevivienda,
	setStateOS3PFAEAntiguedadeneldomicilioactual,
	setStateOS3PFAEAntiguedadeneldomicilioanterior,
	setStateOS3PFAEEntrecalle1,
	setStateOS3PFAEEntrecalle2,
	setStateOS3PFAEImportarexportar,
	setStateOS3PFAESector,
	setStateOS3PFAEGiro,
	setStateOS3PFAEActividad,
	setStateOS3PFAEFechadealtaenSHCP,
	setStateOS3PFAENumerodesucursales,
	setStateOS3PFAEAnosdeexperienciaenelsector,
	setStateOS3PMRazonsocial,
	setStateOS3PMRFC,
	setStateOS3PMCorreoelectronico,
	setStateOS3PMFechadealtaenSHCP,
	setStateOS3PMRelacionadoramajudicialGobiernoLegislativa,
	setStateOS3PMTienemasdeunpaisderesidencia,
	setStateOS3PMTieneoadquiriolaresidenciadelosEUA,
	setStateOS3PMElobligadoesaccionistauobligadodeotraempresa,
	setStateOS3PMEsobligadoofiadordeotraempresaoPFAE,
	setStateOS3PMNombrecompleto,
	setStateOS3PMCargo,
	setStateOS3PMTelefono,
	setStateOS3PMCalle,
	setStateOS3PMNumeroexterior,
	setStateOS3PMNumerointerior,
	setStateOS3PMPiso,
	setStateOS3PMPais,
	setStateOS3PMCP,
	setStateOS3PMColonia,
	setStateOS3PMDelegacionMunicipio,
	setStateOS3PMEstado,
	setStateOS3PMTipodeDomicilio,
	setStateOS3PMTipodevivienda,
	setStateOS3PMEntrecalle1,
	setStateOS3PMEntrecalle2,
	setStateOS3PMImportarexportar,
	setStateOS3PMSector,
	setStateOS3PMGiro,
	setStateOS3PMActividad,
	setStateOS3PMNumerodesucursales,
	setStateOS3PMAnosdeexperienciaenelsector,
	setStateOS4PFNombre,
	setStateOS4PFApellidoPaterno,
	setStateOS4PFApellidoMaterno,
	setStateOS4PFFechadenacimiento,
	setStateOS4PFPaisdenacimiento,
	setStateOS4PFEstadodeNacimiento,
	setStateOS4PFGenero,
	setStateOS4PFRFC,
	setStateOS4PFCURP,
	setStateOS4PFFolioID,
	setStateOS4PFNacionalidad,
	setStateOS4PFCalidadmigratoria,
	setStateOS4PFCorreoelectronico,
	setStateOS4PFTelefono,
	setStateOS4PFCelular,
	setStateOS4PFMenoresde23anosquedependen,
	setStateOS4PFTotaldedependientes,
	setStateOS4PFRelacionconelsolicitante,
	setStateOS4PFRelacionadoramajudicialGobiernoLegislativa,
	setStateOS4PFTienemasdeunpaisderesidencia,
	setStateOS4PFTieneoadquiriolaresidenciadelosEUA,
	setStateOS4PFElobligadoesaccionistauobligadodeotraempresa,
	setStateOS4PFEsobligadoofiadordeotraempresaoPFAE,
	setStateOS4PFNumeroInterior,
	setStateOS4PFPiso,
	setStateOS4PFPais,
	setStateOS4PFCP,
	setStateOS4PFColonia,
	setStateOS4PFDelegacionMunicipio,
	setStateOS4PFEstado,
	setStateOS4PFTipodeDomicilio,
	setStateOS4PFTipodevivienda,
	setStateOS4PFAntiguedadeneldomicilioactual,
	setStateOS4PFAntiguedadeneldomicilioanterior,
	setStateOS4PFEntrecalle1,
	setStateOS4PFEntrecalle2,
	setStateOS4PFAENombre,
	setStateOS4PFAEApellidoPaterno,
	setStateOS4PFAEApellidoMaterno,
	setStateOS4PFAEFechadenacimiento,
	setStateOS4PFAEPaisdenacimiento,
	setStateOS4PFAEEstadodeNacimiento,
	setStateOS4PFAEGenero,
	setStateOS4PFAERFC,
	setStateOS4PFAECURP,
	setStateOS4PFAEFolioID,
	setStateOS4PFAENacionalidad,
	setStateOS4PFAECalidadmigratoria,
	setStateOS4PFAECorreoelectronico,
	setStateOS4PFAETelefono,
	setStateOS4PFAECelular,
	setStateOS4PFAEMenoresde23anosquedependen,
	setStateOS4PFAETotaldedependientes,
	setStateOS4PFAERelacionconelsolicitante,
	setStateOS4PFAERelacionadoramajudicialGobiernoLegislativa,
	setStateOS4PFAETienemasdeunpaisderesidencia,
	setStateOS4PFAETieneoadquiriolaresidenciadelosEUA,
	setStateOS4PFAEElobligadoesaccionistauobligadodeotraempresa,
	setStateOS4PFAEEsobligadoofiadordeotraempresaoPFAE,
	setStateOS4PFAENumeroInterior,
	setStateOS4PFAEPiso,
	setStateOS4PFAEPais,
	setStateOS4PFAECP,
	setStateOS4PFAEColonia,
	setStateOS4PFAEDelegacionMunicipio,
	setStateOS4PFAEEstado,
	setStateOS4PFAETipodeDomicilio,
	setStateOS4PFAETipodevivienda,
	setStateOS4PFAEAntiguedadeneldomicilioactual,
	setStateOS4PFAEAntiguedadeneldomicilioanterior,
	setStateOS4PFAEEntrecalle1,
	setStateOS4PFAEEntrecalle2,
	setStateOS4PFAEImportarexportar,
	setStateOS4PFAESector,
	setStateOS4PFAEGiro,
	setStateOS4PFAEActividad,
	setStateOS4PFAEFechadealtaenSHCP,
	setStateOS4PFAENumerodesucursales,
	setStateOS4PFAEAnosdeexperienciaenelsector,
	setStateOS4PMRazonsocial,
	setStateOS4PMRFC,
	setStateOS4PMCorreoelectronico,
	setStateOS4PMFechadealtaenSHCP,
	setStateOS4PMRelacionadoramajudicialGobiernoLegislativa,
	setStateOS4PMTienemasdeunpaisderesidencia,
	setStateOS4PMTieneoadquiriolaresidenciadelosEUA,
	setStateOS4PMElobligadoesaccionistauobligadodeotraempresa,
	setStateOS4PMEsobligadoofiadordeotraempresaoPFAE,
	setStateOS4PMNombrecompleto,
	setStateOS4PMCargo,
	setStateOS4PMTelefono,
	setStateOS4PMCalle,
	setStateOS4PMNumeroexterior,
	setStateOS4PMNumerointerior,
	setStateOS4PMPiso,
	setStateOS4PMPais,
	setStateOS4PMCP,
	setStateOS4PMColonia,
	setStateOS4PMDelegacionMunicipio,
	setStateOS4PMEstado,
	setStateOS4PMTipodeDomicilio,
	setStateOS4PMTipodevivienda,
	setStateOS4PMEntrecalle1,
	setStateOS4PMEntrecalle2,
	setStateOS4PMImportarexportar,
	setStateOS4PMSector,
	setStateOS4PMGiro,
	setStateOS4PMActividad,
	setStateOS4PMNumerodesucursales,
	setStateOS4PMAnosdeexperienciaenelsector,
	setStateOS5PFNombre,
	setStateOS5PFApellidoPaterno,
	setStateOS5PFApellidoMaterno,
	setStateOS5PFFechadenacimiento,
	setStateOS5PFPaisdenacimiento,
	setStateOS5PFEstadodeNacimiento,
	setStateOS5PFGenero,
	setStateOS5PFRFC,
	setStateOS5PFCURP,
	setStateOS5PFFolioID,
	setStateOS5PFNacionalidad,
	setStateOS5PFCalidadmigratoria,
	setStateOS5PFCorreoelectronico,
	setStateOS5PFTelefono,
	setStateOS5PFCelular,
	setStateOS5PFMenoresde23anosquedependen,
	setStateOS5PFTotaldedependientes,
	setStateOS5PFRelacionconelsolicitante,
	setStateOS5PFRelacionadoramajudicialGobiernoLegislativa,
	setStateOS5PFTienemasdeunpaisderesidencia,
	setStateOS5PFTieneoadquiriolaresidenciadelosEUA,
	setStateOS5PFElobligadoesaccionistauobligadodeotraempresa,
	setStateOS5PFEsobligadoofiadordeotraempresaoPFAE,
	setStateOS5PFNumeroInterior,
	setStateOS5PFPiso,
	setStateOS5PFPais,
	setStateOS5PFCP,
	setStateOS5PFColonia,
	setStateOS5PFDelegacionMunicipio,
	setStateOS5PFEstado,
	setStateOS5PFTipodeDomicilio,
	setStateOS5PFTipodevivienda,
	setStateOS5PFAntiguedadeneldomicilioactual,
	setStateOS5PFAntiguedadeneldomicilioanterior,
	setStateOS5PFEntrecalle1,
	setStateOS5PFEntrecalle2,
	setStateOS5PFAENombre,
	setStateOS5PFAEApellidoPaterno,
	setStateOS5PFAEApellidoMaterno,
	setStateOS5PFAEFechadenacimiento,
	setStateOS5PFAEPaisdenacimiento,
	setStateOS5PFAEEstadodeNacimiento,
	setStateOS5PFAEGenero,
	setStateOS5PFAERFC,
	setStateOS5PFAECURP,
	setStateOS5PFAEFolioID,
	setStateOS5PFAENacionalidad,
	setStateOS5PFAECalidadmigratoria,
	setStateOS5PFAECorreoelectronico,
	setStateOS5PFAETelefono,
	setStateOS5PFAECelular,
	setStateOS5PFAEMenoresde23anosquedependen,
	setStateOS5PFAETotaldedependientes,
	setStateOS5PFAERelacionconelsolicitante,
	setStateOS5PFAERelacionadoramajudicialGobiernoLegislativa,
	setStateOS5PFAETienemasdeunpaisderesidencia,
	setStateOS5PFAETieneoadquiriolaresidenciadelosEUA,
	setStateOS5PFAEElobligadoesaccionistauobligadodeotraempresa,
	setStateOS5PFAEEsobligadoofiadordeotraempresaoPFAE,
	setStateOS5PFAENumeroInterior,
	setStateOS5PFAEPiso,
	setStateOS5PFAEPais,
	setStateOS5PFAECP,
	setStateOS5PFAEColonia,
	setStateOS5PFAEDelegacionMunicipio,
	setStateOS5PFAEEstado,
	setStateOS5PFAETipodeDomicilio,
	setStateOS5PFAETipodevivienda,
	setStateOS5PFAEAntiguedadeneldomicilioactual,
	setStateOS5PFAEAntiguedadeneldomicilioanterior,
	setStateOS5PFAEEntrecalle1,
	setStateOS5PFAEEntrecalle2,
	setStateOS5PFAEImportarexportar,
	setStateOS5PFAESector,
	setStateOS5PFAEGiro,
	setStateOS5PFAEActividad,
	setStateOS5PFAEFechadealtaenSHCP,
	setStateOS5PFAENumerodesucursales,
	setStateOS5PFAEAnosdeexperienciaenelsector,
	setStateOS5PMRazonsocial,
	setStateOS5PMRFC,
	setStateOS5PMCorreoelectronico,
	setStateOS5PMFechadealtaenSHCP,
	setStateOS5PMRelacionadoramajudicialGobiernoLegislativa,
	setStateOS5PMTienemasdeunpaisderesidencia,
	setStateOS5PMTieneoadquiriolaresidenciadelosEUA,
	setStateOS5PMElobligadoesaccionistauobligadodeotraempresa,
	setStateOS5PMEsobligadoofiadordeotraempresaoPFAE,
	setStateOS5PMNombrecompleto,
	setStateOS5PMCargo,
	setStateOS5PMTelefono,
	setStateOS5PMCalle,
	setStateOS5PMNumeroexterior,
	setStateOS5PMNumerointerior,
	setStateOS5PMPiso,
	setStateOS5PMPais,
	setStateOS5PMCP,
	setStateOS5PMColonia,
	setStateOS5PMDelegacionMunicipio,
	setStateOS5PMEstado,
	setStateOS5PMTipodeDomicilio,
	setStateOS5PMTipodevivienda,
	setStateOS5PMEntrecalle1,
	setStateOS5PMEntrecalle2,
	setStateOS5PMImportarexportar,
	setStateOS5PMSector,
	setStateOS5PMGiro,
	setStateOS5PMActividad,
	setStateOS5PMNumerodesucursales,
	setStateOS5PMAnosdeexperienciaenelsector,

	transitionDiesiseis,
	stateTieneunatarjetadecredito,
	setStateTieneunatarjetadecredito,
	stateDigitalosultimos4numeros,
	setStateDigitalosultimos4numeros,
	stateErestitulardeuncreditohipotecario,
	setStateErestitulardeuncreditohipotecario,
	stateHasidotitulardeuncreditoautomotrizenlosultimos24meses,
	setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses,
	stateHoySiendoDia,
	setStateHoySiendoDia,
	setShowResult,
	transitionDiesisiete,
	setFileOne,
	fileOne,
	setFileTwo,
	fileTwo,
	setFileThree,
	fileThree,
	setFileFour,
	fileFour,
	transitionDiesiocho,

	stateNumerosdebienesapresentar,
	stateTotaldelvalorestimado,
	stateUbicacion,
	stateSuperficieM2,
	stateDescriciondelinmueble,
	stateValormanifestado,
	stateValorpredial,
	stateDatosderegistro,
	stateNombredelproducto,
	stateRegimendelacuentaMancomunadaoIndistinta,
	stateNombredelapoderadomancomunado,
	stateNombredelapoderadomancomunado2,
	stateEstatusFATCACRS,
	stateCFDI,
	stateEntregadeCorrespondencia,
	stateMontodeReferenciadelaInversion,
	stateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID,
	stateRequiereChequera,
	stateRequiereTarjetadeDebito,
	stateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca,
	stateServiciodeBancaElectronica,
	stateBancaElectronicaBEPoBEM,
	statePlan,
	stateTipoCobro,
	stateCuentacargo,
	stateOperacionMancumunadaparaBancaElectronica,
	stateOperacionMancumunadaparalibramientodecheques,
	setStateNumerosdebienesapresentar,
	setStateTotaldelvalorestimado,
	setStateUbicacion,
	setStateSuperficieM2,
	setStateDescriciondelinmueble,
	setStateValormanifestado,
	setStateValorpredial,
	setStateDatosderegistro,
	setStateNombredelproducto,
	setStateRegimendelacuentaMancomunadaoIndistinta,
	setStateNombredelapoderadomancomunado,
	setStateNombredelapoderadomancomunado2,
	setStateEstatusFATCACRS,
	setStateCFDI,
	setStateEntregadeCorrespondencia,
	setStateMontodeReferenciadelaInversion,
	setStateSerequiereelenvioyrecepciondetransferenciasdefondosatravesdeSPID,
	setStateRequiereChequera,
	setStateRequiereTarjetadeDebito,
	setStateIdentificadordeBancaElectronicaNuevoExistenteoSinBanca,
	setStateServiciodeBancaElectronica,
	setStateBancaElectronicaBEPoBEM,
	setStatePlan,
	setStateTipoCobro,
	setStateCuentacargo,
	setStateOperacionMancumunadaparaBancaElectronica,
	setStateOperacionMancumunadaparalibramientodecheques,
	tipoPersona,
	cantidadObligadosSolidarios,

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
										<input state="" value={statePMGENERALESRazonsocial} onChange={(e) => setStatePMGENERALESRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" maxLength={40} required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >RFC </span>
										<input state="" value={statePMGENERALESRFC} onChange={(e) => setStatePMGENERALESRFC(e.target.value)} style={{ width: '55%' }} type="text" maxLength={13} required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Número de escritura </span>
										<input state="" value={statePMGENERALESNumerodeescritura} onChange={(e) => setStatePMGENERALESNumerodeescritura(e.target.value)} style={{ width: '55%' }} type="text" maxLength={30} required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Fecha de alta en SHCP</span >
										<input state="" value={statePMGENERALESFechadealtaenSHCP} onChange={(e) => setStatePMGENERALESFechadealtaenSHCP(e.target.value)} style={{ width: '55%' }} type="date" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Duración de la sociedad</span >
										<select state="" value={statePMGENERALESDuraciondelasociedad} onChange={(e) => setStatePMGENERALESDuraciondelasociedad(e.target.value)} required style={{ width: '55%' }}>
											<option value="">Seleccione opcion</option>
											<option value="2">value</option>
											<option value="1">value</option>
										</select>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Folio mercantil</span >
										<input state="" value={statePMGENERALESFoliomercantil} onChange={(e) => setStatePMGENERALESFoliomercantil(e.target.value)} style={{ width: '55%' }} type="number" required />
									</div>
								</div>
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
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
										<input state="" value={statePMREPRESENTANTELEGALNombrecompleto} onChange={(e) => setStatePMREPRESENTANTELEGALNombrecompleto(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Cargo</span >
										<input state="" value={statePMREPRESENTANTELEGALCargo} onChange={(e) => setStatePMREPRESENTANTELEGALCargo(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Teléfono </span>
										<input state="" value={statePMREPRESENTANTELEGALTelefono} onChange={(e) => setStatePMREPRESENTANTELEGALTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
									</div>
								</div>
							</div>
							<h2>Contacto con la empresa</h2>
							<hr />
							<div className="row" style={{ alignItems: 'flex-end' }}>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Nombre completo</span >
										<input state="" value={statePMCONTACTOEMPRESANombrecompleto} onChange={(e) => setStatePMCONTACTOEMPRESANombrecompleto(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Cargo</span >
										<input state="" value={statePMCONTACTOEMPRESACargo} onChange={(e) => setStatePMCONTACTOEMPRESACargo(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Teléfono </span>
										<input state="" value={statePMCONTACTOEMPRESATelefono} onChange={(e) => setStatePMCONTACTOEMPRESATelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
									</div>
								</div>
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
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
										<input state="" value={statePMDOMICILIONEGOCIOCalle} onChange={(e) => setStatePMDOMICILIONEGOCIOCalle(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Número exterior</span >
										<input state="" value={statePMDOMICILIONEGOCIONumeroexterior} onChange={(e) => setStatePMDOMICILIONEGOCIONumeroexterior(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Número interior</span >
										<input state="" value={statePMDOMICILIONEGOCIONumerointerior} onChange={(e) => setStatePMDOMICILIONEGOCIONumerointerior(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Piso</span >
										<input state="" value={statePMDOMICILIONEGOCIOPiso} onChange={(e) => setStatePMDOMICILIONEGOCIOPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>País</span >
										<select state="" value={statePMDOMICILIONEGOCIOPais} onChange={(e) => setStatePMDOMICILIONEGOCIOPais(e.target.value)} required style={{ width: '55%' }}>
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
										<input state="" value={statePMDOMICILIONEGOCIOCP} onChange={(e) => setStatePMDOMICILIONEGOCIOCP(e.target.value)} style={{ width: '55%' }} type="number" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Colonia</span >
										<input state="" value={statePMDOMICILIONEGOCIOColonia} onChange={(e) => setStatePMDOMICILIONEGOCIOColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Delegación/Municipio</span >
										<select state="" value={statePMDOMICILIONEGOCIODelegacionMunicipio} onChange={(e) => setStatePMDOMICILIONEGOCIODelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMDOMICILIONEGOCIOEstado} onChange={(e) => setStatePMDOMICILIONEGOCIOEstado(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMDOMICILIONEGOCIOTipodevivienda} onChange={(e) => setStatePMDOMICILIONEGOCIOTipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMINFORMACIONNEGOCIOImportarexportar} onChange={(e) => setStatePMINFORMACIONNEGOCIOImportarexportar(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMINFORMACIONNEGOCIOSector} onChange={(e) => setStatePMINFORMACIONNEGOCIOSector(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMINFORMACIONNEGOCIOGiro} onChange={(e) => setStatePMINFORMACIONNEGOCIOGiro(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMINFORMACIONNEGOCIOActividad} onChange={(e) => setStatePMINFORMACIONNEGOCIOActividad(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector} onChange={(e) => setStatePMINFORMACIONNEGOCIOAnosdeexperienciaenelsector(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad} onChange={(e) => setStatePMINFORMACIONNEGOCIOAnosdeantiguedadensuactividad(e.target.value)} required style={{ width: '55%' }}>
											<option value="">Seleccione opcion</option>
											<option value="2">value</option>
											<option value="1">value</option>
										</select>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Total de empleados </span >
										<input state="" value={statePMINFORMACIONNEGOCIOTotaldeempleados} onChange={(e) => setStatePMINFORMACIONNEGOCIOTotaldeempleados(e.target.value)} style={{ width: '55%' }} type="number" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Número de sucursales </span >
										<input state="" value={statePMINFORMACIONNEGOCIONumerodesucursales} onChange={(e) => setStatePMINFORMACIONNEGOCIONumerodesucursales(e.target.value)} style={{ width: '55%' }} type="number" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Tipo de local </span >
										<select state="" value={statePMINFORMACIONNEGOCIOTipodelocal} onChange={(e) => setStatePMINFORMACIONNEGOCIOTipodelocal(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePMINFORMACIONNEGOCIOAnosqueloharentado} onChange={(e) => setStatePMINFORMACIONNEGOCIOAnosqueloharentado(e.target.value)} required style={{ width: '55%' }}>
											<option value="">Seleccione opcion</option>
											<option value="2">value</option>
											<option value="1">value</option>
										</select>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Importe Renta Mensual</span >
										<input state="" value={statePMINFORMACIONNEGOCIOImporteRentaMensual} onChange={(e) => setStatePMINFORMACIONNEGOCIOImporteRentaMensual(e.target.value)} style={{ width: '55%' }} type="text" required value={importeRentaFiscal} onChange={(e) => handlePesos(e, setImporteRentaFiscal)} />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Total de nómina mensual</span >
										<input state="" value={statePMINFORMACIONNEGOCIOTotaldenominamensual} onChange={(e) => setStatePMINFORMACIONNEGOCIOTotaldenominamensual(e.target.value)} style={{ width: '55%' }} type="text" required value={totalNominaMensual} onChange={(e) => handlePesos(e, setTotalNominaMensual)} />
									</div>
								</div>
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
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
										<input state="" value={statePMECONOMICOSVentasanuales} onChange={(e) => setStatePMECONOMICOSVentasanuales(e.target.value)} style={{ width: '55%' }} type="text" required value={ventasAnuales} onChange={(e) => handlePesos(e, setVentasAnuales)} />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Tipo de comprobante de ingresos</span >
										<select state="" value={statePMECONOMICOSTipodecomprobantedeingresos} onChange={(e) => setStatePMECONOMICOSTipodecomprobantedeingresos(e.target.value)} required style={{ width: '55%' }}>
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
										<input state="" value={statePMECONOMICOSFuentedeingresos} onChange={(e) => setStatePMECONOMICOSFuentedeingresos(e.target.value)} style={{ width: '55%' }} type="text" required />
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
													<input state="" value={stateSP1Nombrerazonsocial} onChange={(e) => setStateSP1Nombrerazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input state="" value={stateSP1Accionario} onChange={(e) => setStateSP1Accionario(e.target.value)} style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input state="" value={stateSP1RFC} onChange={(e) => setStateSP1RFC(e.target.value)} style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input state="" value={stateSP1Puestoenlaempresa} onChange={(e) => setStateSP1Puestoenlaempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
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
													<input state="" value={stateSP2Nombrerazonsocial} onChange={(e) => setStateSP2Nombrerazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input state="" value={stateSP2Accionario} onChange={(e) => setStateSP2Accionario(e.target.value)} style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input state="" value={stateSP2RFC} onChange={(e) => setStateSP2RFC(e.target.value)} style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input state="" value={stateSP2Puestoenlaempresa} onChange={(e) => setStateSP2Puestoenlaempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
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
													<input state="" value={stateSP3Nombrerazonsocial} onChange={(e) => setStateSP3Nombrerazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input state="" value={stateSP3Accionario} onChange={(e) => setStateSP3Accionario(e.target.value)} style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input state="" value={stateSP3RFC} onChange={(e) => setStateSP3RFC(e.target.value)} style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input state="" value={stateSP3Puestoenlaempresa} onChange={(e) => setStateSP3Puestoenlaempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
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
													<input state="" value={stateSP4Nombrerazonsocial} onChange={(e) => setStateSP4Nombrerazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input state="" value={stateSP4Accionario} onChange={(e) => setStateSP4Accionario(e.target.value)} style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input state="" value={stateSP4RFC} onChange={(e) => setStateSP4RFC(e.target.value)} style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input state="" value={stateSP4Puestoenlaempresa} onChange={(e) => setStateSP4Puestoenlaempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
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
													<input state="" value={stateSP5Nombrerazonsocial} onChange={(e) => setStateSP5Nombrerazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>% Accionario</span >
													<input state="" value={stateSP5Accionario} onChange={(e) => setStateSP5Accionario(e.target.value)} style={{ width: '55%' }} type="number" min={0} max={100} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>RFC</span >
													<input state="" value={stateSP5RFC} onChange={(e) => setStateSP5RFC(e.target.value)} style={{ width: '55%' }} type="text" maxLength={13} required />
												</div>
											</div>
											<div className="col-12">
												<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
													<span>Puesto en la empresa</span >
													<input state="" value={stateSP5Puestoenlaempresa} onChange={(e) => setStateSP5Puestoenlaempresa(e.target.value)} style={{ width: '55%' }} type="text" required />
												</div>
											</div>
										</div>
									</animated.div>
								)
							}
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
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
										<input state="" value={statePRINCIPALACCIONISTANombre} onChange={(e) => setStatePRINCIPALACCIONISTANombre(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Apellido Paterno </span>
										<input state="" value={statePRINCIPALACCIONISTAApellidoPaterno} onChange={(e) => setStatePRINCIPALACCIONISTAApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Apellido Materno </span>
										<input state="" value={statePRINCIPALACCIONISTAApellidoMaterno} onChange={(e) => setStatePRINCIPALACCIONISTAApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Fecha de nacimiento </span>
										<input state="" value={statePRINCIPALACCIONISTAFechadenacimiento} onChange={(e) => setStatePRINCIPALACCIONISTAFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >País de nacimiento </span>
										<select state="" value={statePRINCIPALACCIONISTAPaisdenacimiento} onChange={(e) => setStatePRINCIPALACCIONISTAPaisdenacimiento(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTAEstadodeNacimiento} onChange={(e) => setStatePRINCIPALACCIONISTAEstadodeNacimiento(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTAGenero} onChange={(e) => setStatePRINCIPALACCIONISTAGenero(e.target.value)} required style={{ width: '55%' }}>
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
										<input state="" value={statePRINCIPALACCIONISTARFC} onChange={(e) => setStatePRINCIPALACCIONISTARFC(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >CURP </span>
										<input state="" value={statePRINCIPALACCIONISTACURP} onChange={(e) => setStatePRINCIPALACCIONISTACURP(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Folio ID </span>
										<input state="" value={statePRINCIPALACCIONISTAFolioID} onChange={(e) => setStatePRINCIPALACCIONISTAFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Nacionalidad </span>
										<select state="" value={statePRINCIPALACCIONISTANacionalidad} onChange={(e) => setStatePRINCIPALACCIONISTANacionalidad(e.target.value)} required style={{ width: '55%' }}>
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
										<input state="" value={statePRINCIPALACCIONISTACalidadmigratoria} onChange={(e) => setStatePRINCIPALACCIONISTACalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Correo electrónico </span>
										<input state="" value={statePRINCIPALACCIONISTACorreoelectronico} onChange={(e) => setStatePRINCIPALACCIONISTACorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Teléfono </span>
										<input state="" value={statePRINCIPALACCIONISTATelefono} onChange={(e) => setStatePRINCIPALACCIONISTATelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Celular </span>
										<input state="" value={statePRINCIPALACCIONISTACelular} onChange={(e) => setStatePRINCIPALACCIONISTACelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Estado civil </span>
										<select state="" value={statePRINCIPALACCIONISTAEstadocivil} onChange={(e) => setStatePRINCIPALACCIONISTAEstadocivil(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTAMenoresde23anosquedependen} onChange={(e) => setStatePRINCIPALACCIONISTAMenoresde23anosquedependen(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTATotaldedependientes} onChange={(e) => setStatePRINCIPALACCIONISTATotaldedependientes(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTANivelacademico} onChange={(e) => setStatePRINCIPALACCIONISTANivelacademico(e.target.value)} required style={{ width: '55%' }}>
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
											<input state="" defaultChecked={statePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa} onChange={(e) => setStatePRINCIPALACCIONISTARelacionadoramajudicialGobiernoLegislativa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="rama" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="rama">
												Relacionado rama judicial / Gobierno / Legislativa
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={statePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal} onChange={(e) => setStatePRINCIPALACCIONISTATienemasdeunpaisderesidenciafiscal(e.target.checked)} className="form-check-input" type="checkbox" value="" id="residencia" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="residencia">
												¿Tiene más de un país de residencia fiscal?
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={statePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA} onChange={(e) => setStatePRINCIPALACCIONISTATieneoadquiriolaresidenciadelosEUA(e.target.checked)} className="form-check-input" type="checkbox" value="" id="adiquirioResidencia" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="adiquirioResidencia">
												¿Tiene o adquirió la residencia de los EUA?
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={statePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa} onChange={(e) => setStatePRINCIPALACCIONISTAElobligadoesaccionistauobligadodeotraempresa(e.target.checked)} className="form-check-input" type="checkbox" value="" id="accionistaEmpresa" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="accionistaEmpresa">
												El obligado es accionista u obligado de otra empresa
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', width: '55%', float: 'right', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-start', alignItems: 'center' }}>
										<div className="form-check">
											<input state="" defaultChecked={statePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE} onChange={(e) => setStatePRINCIPALACCIONISTAEsobligadoofiadordeotraempresaoPFAE(e.target.checked)} className="form-check-input" type="checkbox" value="" id="fiadorPFAE" />
											<label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="fiadorPFAE">
												Es obligado o fiador de otra empresa o PFAE
											</label>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Total de nómina mensual </span>
										<input state="" value={statePRINCIPALACCIONISTATotaldenominamensual} onChange={(e) => setStatePRINCIPALACCIONISTATotaldenominamensual(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span >Fuente de ingresos </span>
										<input state="" value={statePRINCIPALACCIONISTAFuentedeingresos} onChange={(e) => setStatePRINCIPALACCIONISTAFuentedeingresos(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<hr />
								<h2>Información de domicilio</h2>
								<hr />
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Calle</span >
										<input state="" value={statePRINCIPALACCIONISTACalle} onChange={(e) => setStatePRINCIPALACCIONISTACalle(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Número interior</span >
										<input state="" value={statePRINCIPALACCIONISTANumerointerior} onChange={(e) => setStatePRINCIPALACCIONISTANumerointerior(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Número exterior</span >
										<input state="" value={statePRINCIPALACCIONISTANumeroexterior} onChange={(e) => setStatePRINCIPALACCIONISTANumeroexterior(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Piso</span >
										<input state="" value={statePRINCIPALACCIONISTAPiso} onChange={(e) => setStatePRINCIPALACCIONISTAPiso(e.target.value)} style={{ width: '55%' }} type="number" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>País</span >
										<select state="" value={statePRINCIPALACCIONISTAPais} onChange={(e) => setStatePRINCIPALACCIONISTAPais(e.target.value)} required style={{ width: '55%' }}>
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
										<input state="" value={statePRINCIPALACCIONISTACP} onChange={(e) => setStatePRINCIPALACCIONISTACP(e.target.value)} style={{ width: '55%' }} type="number" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Colonia</span >
										<input state="" value={statePRINCIPALACCIONISTAColonia} onChange={(e) => setStatePRINCIPALACCIONISTAColonia(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Delegación/Municipio</span >
										<select state="" value={statePRINCIPALACCIONISTADelegacionMunicipio} onChange={(e) => setStatePRINCIPALACCIONISTADelegacionMunicipio(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTAEstado} onChange={(e) => setStatePRINCIPALACCIONISTAEstado(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTATipodeDomicilio} onChange={(e) => setStatePRINCIPALACCIONISTATipodeDomicilio(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTATipodevivienda} onChange={(e) => setStatePRINCIPALACCIONISTATipodevivienda(e.target.value)} required style={{ width: '55%' }}>
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
										<select state="" value={statePRINCIPALACCIONISTAAntiguedadeneldomicilioactual} onChange={(e) => setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioactual(e.target.value)} required style={{ width: '55%' }}>
											<option value="">Seleccione opcion</option>
											<option value="2">value</option>
											<option value="1">value</option>
										</select>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Antigüedad en el domicilio anterior</span >
										<select state="" value={statePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior} onChange={(e) => setStatePRINCIPALACCIONISTAAntiguedadeneldomicilioanterior(e.target.value)} required style={{ width: '55%' }}>
											<option value="">Seleccione opcion</option>
											<option value="2">value</option>
											<option value="1">value</option>
										</select>
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Entre calle 1</span >
										<input state="" value={statePRINCIPALACCIONISTAEntrecalle1} onChange={(e) => setStatePRINCIPALACCIONISTAEntrecalle1(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<div className="col-12">
									<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
										<span>Entre calle 2</span >
										<input state="" value={statePRINCIPALACCIONISTAEntrecalle2} onChange={(e) => setStatePRINCIPALACCIONISTAEntrecalle2(e.target.value)} style={{ width: '55%' }} type="text" required />
									</div>
								</div>
								<hr />
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
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
												<input state="" value={stateOS2PFNombre} onChange={(e) => setStateOS2PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS2PFApellidoPaterno} onChange={(e) => setStateOS2PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS2PFApellidoMaterno} onChange={(e) => setStateOS2PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS2PFFechadenacimiento} onChange={(e) => setStateOS2PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS2PFRFC} onChange={(e) => setStateOS2PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS2PFCURP} onChange={(e) => setStateOS2PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS2PFFolioID} onChange={(e) => setStateOS2PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS2PFCalidadmigratoria} onChange={(e) => setStateOS2PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS2PFCorreoelectronico} onChange={(e) => setStateOS2PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS2PFTelefono} onChange={(e) => setStateOS2PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS2PFCelular} onChange={(e) => setStateOS2PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS2PFAENombre} onChange={(e) => setStateOS2PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS2PFAEApellidoPaterno} onChange={(e) => setStateOS2PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS2PFAEApellidoMaterno} onChange={(e) => setStateOS2PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS2PFAEFechadenacimiento} onChange={(e) => setStateOS2PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS2PFAERFC} onChange={(e) => setStateOS2PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS2PFAECURP} onChange={(e) => setStateOS2PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS2PFAEFolioID} onChange={(e) => setStateOS2PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS2PFAECalidadmigratoria} onChange={(e) => setStateOS2PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS2PFAECorreoelectronico} onChange={(e) => setStateOS2PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS2PFAETelefono} onChange={(e) => setStateOS2PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS2PFAECelular} onChange={(e) => setStateOS2PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS2PMRazonsocial} onChange={(e) => setStateOS2PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >RFC </span>
												<input state="" value={stateOS2PMRFC} onChange={(e) => setStateOS2PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
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
												<span >Teléfono </span>
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
												<input state="" value={stateOS3PFNombre} onChange={(e) => setStateOS3PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS3PFApellidoPaterno} onChange={(e) => setStateOS3PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS3PFApellidoMaterno} onChange={(e) => setStateOS3PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS3PFFechadenacimiento} onChange={(e) => setStateOS3PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS3PFRFC} onChange={(e) => setStateOS3PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS3PFCURP} onChange={(e) => setStateOS3PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS3PFFolioID} onChange={(e) => setStateOS3PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS3PFCalidadmigratoria} onChange={(e) => setStateOS3PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS3PFCorreoelectronico} onChange={(e) => setStateOS3PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS3PFTelefono} onChange={(e) => setStateOS3PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS3PFCelular} onChange={(e) => setStateOS3PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS3PFAENombre} onChange={(e) => setStateOS3PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS3PFAEApellidoPaterno} onChange={(e) => setStateOS3PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS3PFAEApellidoMaterno} onChange={(e) => setStateOS3PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS3PFAEFechadenacimiento} onChange={(e) => setStateOS3PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS3PFAERFC} onChange={(e) => setStateOS3PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS3PFAECURP} onChange={(e) => setStateOS3PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS3PFAEFolioID} onChange={(e) => setStateOS3PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS3PFAECalidadmigratoria} onChange={(e) => setStateOS3PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS3PFAECorreoelectronico} onChange={(e) => setStateOS3PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS3PFAETelefono} onChange={(e) => setStateOS3PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS3PFAECelular} onChange={(e) => setStateOS3PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS3PMRazonsocial} onChange={(e) => setStateOS3PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >RFC </span>
												<input state="" value={stateOS3PMRFC} onChange={(e) => setStateOS3PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
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
												<span >Teléfono </span>
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
												<input state="" value={stateOS4PFNombre} onChange={(e) => setStateOS4PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS4PFApellidoPaterno} onChange={(e) => setStateOS4PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS4PFApellidoMaterno} onChange={(e) => setStateOS4PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS4PFFechadenacimiento} onChange={(e) => setStateOS4PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS4PFRFC} onChange={(e) => setStateOS4PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS4PFCURP} onChange={(e) => setStateOS4PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS4PFFolioID} onChange={(e) => setStateOS4PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS4PFCalidadmigratoria} onChange={(e) => setStateOS4PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS4PFCorreoelectronico} onChange={(e) => setStateOS4PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS4PFTelefono} onChange={(e) => setStateOS4PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS4PFCelular} onChange={(e) => setStateOS4PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS4PFAENombre} onChange={(e) => setStateOS4PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS4PFAEApellidoPaterno} onChange={(e) => setStateOS4PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS4PFAEApellidoMaterno} onChange={(e) => setStateOS4PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS4PFAEFechadenacimiento} onChange={(e) => setStateOS4PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS4PFAERFC} onChange={(e) => setStateOS4PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS4PFAECURP} onChange={(e) => setStateOS4PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS4PFAEFolioID} onChange={(e) => setStateOS4PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS4PFAECalidadmigratoria} onChange={(e) => setStateOS4PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS4PFAECorreoelectronico} onChange={(e) => setStateOS4PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS4PFAETelefono} onChange={(e) => setStateOS4PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS4PFAECelular} onChange={(e) => setStateOS4PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS4PMRazonsocial} onChange={(e) => setStateOS4PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >RFC </span>
												<input state="" value={stateOS4PMRFC} onChange={(e) => setStateOS4PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
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
												<span >Teléfono </span>
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
												<input state="" value={stateOS5PFNombre} onChange={(e) => setStateOS5PFNombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS5PFApellidoPaterno} onChange={(e) => setStateOS5PFApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS5PFApellidoMaterno} onChange={(e) => setStateOS5PFApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS5PFFechadenacimiento} onChange={(e) => setStateOS5PFFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS5PFRFC} onChange={(e) => setStateOS5PFRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS5PFCURP} onChange={(e) => setStateOS5PFCURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS5PFFolioID} onChange={(e) => setStateOS5PFFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS5PFCalidadmigratoria} onChange={(e) => setStateOS5PFCalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS5PFCorreoelectronico} onChange={(e) => setStateOS5PFCorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS5PFTelefono} onChange={(e) => setStateOS5PFTelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS5PFCelular} onChange={(e) => setStateOS5PFCelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS5PFAENombre} onChange={(e) => setStateOS5PFAENombre(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Paterno </span>
												<input state="" value={stateOS5PFAEApellidoPaterno} onChange={(e) => setStateOS5PFAEApellidoPaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Apellido Materno </span>
												<input state="" value={stateOS5PFAEApellidoMaterno} onChange={(e) => setStateOS5PFAEApellidoMaterno(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Fecha de nacimiento </span>
												<input state="" value={stateOS5PFAEFechadenacimiento} onChange={(e) => setStateOS5PFAEFechadenacimiento(e.target.value)} style={{ width: '55%' }} type="date" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >País de nacimiento </span>
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
												<span >Estado de Nacimiento </span>
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
												<span >Género </span>
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
												<span >RFC </span>
												<input state="" value={stateOS5PFAERFC} onChange={(e) => setStateOS5PFAERFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >CURP </span>
												<input state="" value={stateOS5PFAECURP} onChange={(e) => setStateOS5PFAECURP(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Folio ID </span>
												<input state="" value={stateOS5PFAEFolioID} onChange={(e) => setStateOS5PFAEFolioID(e.target.value)} style={{ width: '55%' }} type="" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Nacionalidad </span>
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
												<span >Calidad migratoria </span>
												<input state="" value={stateOS5PFAECalidadmigratoria} onChange={(e) => setStateOS5PFAECalidadmigratoria(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
												<input state="" value={stateOS5PFAECorreoelectronico} onChange={(e) => setStateOS5PFAECorreoelectronico(e.target.value)} style={{ width: '55%' }} type="email" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Teléfono </span>
												<input state="" value={stateOS5PFAETelefono} onChange={(e) => setStateOS5PFAETelefono(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Celular </span>
												<input state="" value={stateOS5PFAECelular} onChange={(e) => setStateOS5PFAECelular(e.target.value)} style={{ width: '55%' }} type="tel" maxLength={10} required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Menores de 23 años que dependen </span>
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
												<span >Total de dependientes </span>
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
												<span >Relación con el solicitante </span>
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
												<input state="" value={stateOS5PMRazonsocial} onChange={(e) => setStateOS5PMRazonsocial(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >RFC </span>
												<input state="" value={stateOS5PMRFC} onChange={(e) => setStateOS5PMRFC(e.target.value)} style={{ width: '55%' }} type="text" required />
											</div>
										</div>
										<div className="col-12">
											<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '24px', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
												<span >Correo electrónico </span>
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
												<span >Teléfono </span>
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
								</div>
							</>
						}
					</animated.div>
				)
			}



{/* Números de bienes a presentar
Total del valor estimado
Ubicación
Superficie M2
Descripción del inmueble
Valor manifestado
Valor predial
Datos de registro */}


			
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
							stateTieneunatarjetadecredito={stateTieneunatarjetadecredito}
							setStateTieneunatarjetadecredito={setStateTieneunatarjetadecredito}
							stateTieneunatarjetadecredito={stateTieneunatarjetadecredito}
							stateDigitalosultimos4numeros={stateDigitalosultimos4numeros}
							setStateDigitalosultimos4numeros={setStateDigitalosultimos4numeros}
							stateErestitulardeuncreditohipotecario={stateErestitulardeuncreditohipotecario}
							setStateErestitulardeuncreditohipotecario={setStateErestitulardeuncreditohipotecario}
							stateErestitulardeuncreditohipotecario={stateErestitulardeuncreditohipotecario}
							setStateErestitulardeuncreditohipotecario={setStateErestitulardeuncreditohipotecario}
							stateHasidotitulardeuncreditoautomotrizenlosultimos24meses={stateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
							setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses={setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
							stateHasidotitulardeuncreditoautomotrizenlosultimos24meses={stateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
							setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses={setStateHasidotitulardeuncreditoautomotrizenlosultimos24meses}
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
							principalAccionista={principalAccionista}
							setPrincipalAccionista={setPrincipalAccionista}
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
	);
}

export default FormularioPersonaMoral;