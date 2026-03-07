var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

    var projection_Ortofotomapastandardowa_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotomapastandardowa_2 = projection_Ortofotomapastandardowa_2.getExtent();
    var size_Ortofotomapastandardowa_2 = ol.extent.getWidth(projectionExtent_Ortofotomapastandardowa_2) / 256;
    var resolutions_Ortofotomapastandardowa_2 = new Array(14);
    var matrixIds_Ortofotomapastandardowa_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotomapastandardowa_2[z] = size_Ortofotomapastandardowa_2 / Math.pow(2, z);
        matrixIds_Ortofotomapastandardowa_2[z] = z;
    }
    var lyr_Ortofotomapastandardowa_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?service=WMTS&request=getCapabilities",
                                attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotomapastandardowa_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotomapastandardowa_2),
                resolutions: resolutions_Ortofotomapastandardowa_2,
                matrixIds: matrixIds_Ortofotomapastandardowa_2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofotomapa standardowa',
                            opacity: 1.0,
                            
                            
                          });
var format_symbol__SK_3 = new ol.format.GeoJSON();
var features_symbol__SK_3 = format_symbol__SK_3.readFeatures(json_symbol__SK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol__SK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol__SK_3.addFeatures(features_symbol__SK_3);
var lyr_symbol__SK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol__SK_3, 
                style: style_symbol__SK_3,
                popuplayertitle: 'symbol__SK',
                interactive: true,
                title: '<img src="styles/legend/symbol__SK_3.png" /> symbol__SK'
            });
var format_symbol_SO_4 = new ol.format.GeoJSON();
var features_symbol_SO_4 = format_symbol_SO_4.readFeatures(json_symbol_SO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SO_4.addFeatures(features_symbol_SO_4);
var lyr_symbol_SO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SO_4, 
                style: style_symbol_SO_4,
                popuplayertitle: 'symbol_SO',
                interactive: true,
                title: '<img src="styles/legend/symbol_SO_4.png" /> symbol_SO'
            });
var format_symbol_SG_5 = new ol.format.GeoJSON();
var features_symbol_SG_5 = format_symbol_SG_5.readFeatures(json_symbol_SG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SG_5.addFeatures(features_symbol_SG_5);
var lyr_symbol_SG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SG_5, 
                style: style_symbol_SG_5,
                popuplayertitle: 'symbol_SG',
                interactive: true,
                title: '<img src="styles/legend/symbol_SG_5.png" /> symbol_SG'
            });
var format_symbol_SC_6 = new ol.format.GeoJSON();
var features_symbol_SC_6 = format_symbol_SC_6.readFeatures(json_symbol_SC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SC_6.addFeatures(features_symbol_SC_6);
var lyr_symbol_SC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SC_6, 
                style: style_symbol_SC_6,
                popuplayertitle: 'symbol_SC',
                interactive: true,
                title: '<img src="styles/legend/symbol_SC_6.png" /> symbol_SC'
            });
var format_symbol_SN_7 = new ol.format.GeoJSON();
var features_symbol_SN_7 = format_symbol_SN_7.readFeatures(json_symbol_SN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SN_7.addFeatures(features_symbol_SN_7);
var lyr_symbol_SN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SN_7, 
                style: style_symbol_SN_7,
                popuplayertitle: 'symbol_SN',
                interactive: true,
                title: '<img src="styles/legend/symbol_SN_7.png" /> symbol_SN'
            });
var format_symbol_SI_8 = new ol.format.GeoJSON();
var features_symbol_SI_8 = format_symbol_SI_8.readFeatures(json_symbol_SI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SI_8.addFeatures(features_symbol_SI_8);
var lyr_symbol_SI_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SI_8, 
                style: style_symbol_SI_8,
                popuplayertitle: 'symbol_SI',
                interactive: true,
                title: '<img src="styles/legend/symbol_SI_8.png" /> symbol_SI'
            });
var format_symbol_SR_9 = new ol.format.GeoJSON();
var features_symbol_SR_9 = format_symbol_SR_9.readFeatures(json_symbol_SR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SR_9.addFeatures(features_symbol_SR_9);
var lyr_symbol_SR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SR_9, 
                style: style_symbol_SR_9,
                popuplayertitle: 'symbol_SR',
                interactive: true,
                title: '<img src="styles/legend/symbol_SR_9.png" /> symbol_SR'
            });
var format_symbol_SP_10 = new ol.format.GeoJSON();
var features_symbol_SP_10 = format_symbol_SP_10.readFeatures(json_symbol_SP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SP_10.addFeatures(features_symbol_SP_10);
var lyr_symbol_SP_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SP_10, 
                style: style_symbol_SP_10,
                popuplayertitle: 'symbol_SP',
                interactive: true,
                title: '<img src="styles/legend/symbol_SP_10.png" /> symbol_SP'
            });
var format_symbol_SU_11 = new ol.format.GeoJSON();
var features_symbol_SU_11 = format_symbol_SU_11.readFeatures(json_symbol_SU_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SU_11.addFeatures(features_symbol_SU_11);
var lyr_symbol_SU_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SU_11, 
                style: style_symbol_SU_11,
                popuplayertitle: 'symbol_SU',
                interactive: true,
                title: '<img src="styles/legend/symbol_SU_11.png" /> symbol_SU'
            });
var format_symbol_SZ_12 = new ol.format.GeoJSON();
var features_symbol_SZ_12 = format_symbol_SZ_12.readFeatures(json_symbol_SZ_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SZ_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SZ_12.addFeatures(features_symbol_SZ_12);
var lyr_symbol_SZ_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SZ_12, 
                style: style_symbol_SZ_12,
                popuplayertitle: 'symbol_SZ',
                interactive: true,
                title: '<img src="styles/legend/symbol_SZ_12.png" /> symbol_SZ'
            });
var format_symbol_SJ_13 = new ol.format.GeoJSON();
var features_symbol_SJ_13 = format_symbol_SJ_13.readFeatures(json_symbol_SJ_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SJ_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SJ_13.addFeatures(features_symbol_SJ_13);
var lyr_symbol_SJ_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SJ_13, 
                style: style_symbol_SJ_13,
                popuplayertitle: 'symbol_SJ',
                interactive: true,
                title: '<img src="styles/legend/symbol_SJ_13.png" /> symbol_SJ'
            });
var format_symbol_SW_14 = new ol.format.GeoJSON();
var features_symbol_SW_14 = format_symbol_SW_14.readFeatures(json_symbol_SW_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SW_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SW_14.addFeatures(features_symbol_SW_14);
var lyr_symbol_SW_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SW_14, 
                style: style_symbol_SW_14,
                popuplayertitle: 'symbol_SW',
                interactive: true,
                title: '<img src="styles/legend/symbol_SW_14.png" /> symbol_SW'
            });
var format_budynki_BDOT10kbdot_budynki_15 = new ol.format.GeoJSON();
var features_budynki_BDOT10kbdot_budynki_15 = format_budynki_BDOT10kbdot_budynki_15.readFeatures(json_budynki_BDOT10kbdot_budynki_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_budynki_BDOT10kbdot_budynki_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_budynki_BDOT10kbdot_budynki_15.addFeatures(features_budynki_BDOT10kbdot_budynki_15);
var lyr_budynki_BDOT10kbdot_budynki_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_budynki_BDOT10kbdot_budynki_15, 
                style: style_budynki_BDOT10kbdot_budynki_15,
                popuplayertitle: 'budynki_BDOT10k — bdot_budynki',
                interactive: true,
                title: '<img src="styles/legend/budynki_BDOT10kbdot_budynki_15.png" /> budynki_BDOT10k — bdot_budynki'
            });
var format_gmbrzenoEGB_DzialkaEwidencyjna_2_16 = new ol.format.GeoJSON();
var features_gmbrzenoEGB_DzialkaEwidencyjna_2_16 = format_gmbrzenoEGB_DzialkaEwidencyjna_2_16.readFeatures(json_gmbrzenoEGB_DzialkaEwidencyjna_2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gmbrzenoEGB_DzialkaEwidencyjna_2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gmbrzenoEGB_DzialkaEwidencyjna_2_16.addFeatures(features_gmbrzenoEGB_DzialkaEwidencyjna_2_16);
var lyr_gmbrzenoEGB_DzialkaEwidencyjna_2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gmbrzenoEGB_DzialkaEwidencyjna_2_16, 
                style: style_gmbrzenoEGB_DzialkaEwidencyjna_2_16,
                popuplayertitle: 'gm.brzeźno — EGB_DzialkaEwidencyjna_2',
                interactive: true,
                title: '<img src="styles/legend/gmbrzenoEGB_DzialkaEwidencyjna_2_16.png" /> gm.brzeźno — EGB_DzialkaEwidencyjna_2'
            });
var format_AktPlanowaniaPrzestrzennego_1_17 = new ol.format.GeoJSON();
var features_AktPlanowaniaPrzestrzennego_1_17 = format_AktPlanowaniaPrzestrzennego_1_17.readFeatures(json_AktPlanowaniaPrzestrzennego_1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AktPlanowaniaPrzestrzennego_1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AktPlanowaniaPrzestrzennego_1_17.addFeatures(features_AktPlanowaniaPrzestrzennego_1_17);
var lyr_AktPlanowaniaPrzestrzennego_1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AktPlanowaniaPrzestrzennego_1_17, 
                style: style_AktPlanowaniaPrzestrzennego_1_17,
                popuplayertitle: 'AktPlanowaniaPrzestrzennego_1',
                interactive: false,
                title: '<img src="styles/legend/AktPlanowaniaPrzestrzennego_1_17.png" /> AktPlanowaniaPrzestrzennego_1'
            });
var group_PLANOGOLNYprojekt = new ol.layer.Group({
                                layers: [lyr_symbol__SK_3,lyr_symbol_SO_4,lyr_symbol_SG_5,lyr_symbol_SC_6,lyr_symbol_SN_7,lyr_symbol_SI_8,lyr_symbol_SR_9,lyr_symbol_SP_10,lyr_symbol_SU_11,lyr_symbol_SZ_12,lyr_symbol_SJ_13,lyr_symbol_SW_14,],
                                fold: 'close',
                                title: 'PLAN OGOLNY (projekt)'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Ortofotomapastandardowa_2.setVisible(true);lyr_symbol__SK_3.setVisible(true);lyr_symbol_SO_4.setVisible(true);lyr_symbol_SG_5.setVisible(true);lyr_symbol_SC_6.setVisible(true);lyr_symbol_SN_7.setVisible(true);lyr_symbol_SI_8.setVisible(true);lyr_symbol_SR_9.setVisible(true);lyr_symbol_SP_10.setVisible(true);lyr_symbol_SU_11.setVisible(true);lyr_symbol_SZ_12.setVisible(true);lyr_symbol_SJ_13.setVisible(true);lyr_symbol_SW_14.setVisible(true);lyr_budynki_BDOT10kbdot_budynki_15.setVisible(true);lyr_gmbrzenoEGB_DzialkaEwidencyjna_2_16.setVisible(true);lyr_AktPlanowaniaPrzestrzennego_1_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Ortofotomapastandardowa_2,group_PLANOGOLNYprojekt,lyr_budynki_BDOT10kbdot_budynki_15,lyr_gmbrzenoEGB_DzialkaEwidencyjna_2_16,lyr_AktPlanowaniaPrzestrzennego_1_17];
lyr_symbol__SK_3.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SO_4.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SG_5.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SC_6.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SN_7.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SI_8.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SR_9.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SP_10.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SU_11.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SZ_12.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SJ_13.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SW_14.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_budynki_BDOT10kbdot_budynki_15.set('fieldAliases', {'fid': 'fid', 'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'KODKST': 'KODKST', 'FOBUD': 'FOBUD', 'FSBUD': 'FSBUD', 'PFBUD': 'PFBUD', 'LICZ_KONDY': 'LICZ_KONDY', 'NAZWA': 'NAZWA', });
lyr_gmbrzenoEGB_DzialkaEwidencyjna_2_16.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idDzialki': 'idDzialki', 'dokumentWlasnosci': 'dokumentWlasnosci', 'numerKW': 'numerKW', 'poleEwidencyjne': 'poleEwidencyjne', 'poleEwidencyjne_uom': 'poleEwidencyjne_uom', 'dokladnoscReprezentacjiPola': 'dokladnoscReprezentacjiPola', 'OFU': 'OFU', 'OZU': 'OZU', 'OZK': 'OZK', 'powierzchnia': 'powierzchnia', 'powierzchnia_uom': 'powierzchnia_uom', 'dodatkoweInformacje': 'dodatkoweInformacje', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_AktPlanowaniaPrzestrzennego_1_17.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'tytul': 'tytul', 'tytulAlternatywny': 'tytulAlternatywny', 'typPlanu': 'typPlanu', 'poziomHierarchii': 'poziomHierarchii', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'modyfikacja': 'modyfikacja', 'edycja': 'edycja', });
lyr_symbol__SK_3.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SO_4.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SG_5.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SC_6.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SN_7.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SI_8.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SR_9.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SP_10.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SU_11.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SZ_12.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SJ_13.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SW_14.set('fieldImages', {'fid': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'lokalnyId': 'TextEdit', 'wersjaId': 'TextEdit', 'oznaczenie': 'TextEdit', 'symbol': 'TextEdit', 'poczatekWersjiObiektu': 'DateTime', 'koniecWersjiObiektu': 'DateTime', 'obowiazujeOd': 'DateTime', 'obowiazujeDo': 'DateTime', 'status': 'TextEdit', 'charakterUstalenia': 'TextEdit', 'plan': 'TextEdit', 'nazwa': 'TextEdit', 'nazwaAlternatywna': 'TextEdit', 'profilPodstawowy': 'TextEdit', 'profilDodatkowy': 'TextEdit', 'maksNadziemnaIntensywnoscZabudowy': 'TextEdit', 'maksUdzialPowierzchniZabudowy': 'TextEdit', 'maksWysokoscZabudowy': 'TextEdit', 'minUdzialPowierzchniBiologicznieCzynnej': 'TextEdit', 'edycja': 'CheckBox', });
lyr_budynki_BDOT10kbdot_budynki_15.set('fieldImages', {'fid': '', 'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'KODKST': 'TextEdit', 'FOBUD': 'TextEdit', 'FSBUD': 'TextEdit', 'PFBUD': 'TextEdit', 'LICZ_KONDY': 'TextEdit', 'NAZWA': 'TextEdit', });
lyr_gmbrzenoEGB_DzialkaEwidencyjna_2_16.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idDzialki': 'TextEdit', 'dokumentWlasnosci': 'TextEdit', 'numerKW': 'TextEdit', 'poleEwidencyjne': 'TextEdit', 'poleEwidencyjne_uom': 'TextEdit', 'dokladnoscReprezentacjiPola': 'Range', 'OFU': 'TextEdit', 'OZU': 'TextEdit', 'OZK': 'TextEdit', 'powierzchnia': 'TextEdit', 'powierzchnia_uom': 'TextEdit', 'dodatkoweInformacje': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_AktPlanowaniaPrzestrzennego_1_17.set('fieldImages', {'fid': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'lokalnyId': 'TextEdit', 'wersjaId': 'DateTime', 'poczatekWersjiObiektu': 'DateTime', 'koniecWersjiObiektu': 'DateTime', 'tytul': 'TextEdit', 'tytulAlternatywny': 'TextEdit', 'typPlanu': 'ValueMap', 'poziomHierarchii': 'ValueMap', 'obowiazujeOd': 'DateTime', 'obowiazujeDo': 'DateTime', 'status': 'ValueMap', 'modyfikacja': 'CheckBox', 'edycja': '', });
lyr_symbol__SK_3.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SO_4.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SG_5.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SC_6.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SN_7.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SI_8.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SR_9.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SP_10.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SU_11.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SZ_12.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SJ_13.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SW_14.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_budynki_BDOT10kbdot_budynki_15.set('fieldLabels', {'fid': 'hidden field', 'TERYT': 'hidden field', 'LOKALNYID': 'hidden field', 'PRZES_NAZW': 'hidden field', 'WERSJA': 'hidden field', 'POCZ_WERSJ': 'hidden field', 'OZNA_ZMIAN': 'hidden field', 'ZRO_DANYCH': 'hidden field', 'KAT_ISTNIE': 'hidden field', 'UWAGI': 'hidden field', 'INFO_DODAT': 'hidden field', 'KOD10K': 'hidden field', 'SKROT_KART': 'hidden field', 'KODKST': 'inline label - always visible', 'FOBUD': 'hidden field', 'FSBUD': 'hidden field', 'PFBUD': 'no label', 'LICZ_KONDY': 'hidden field', 'NAZWA': 'hidden field', });
lyr_gmbrzenoEGB_DzialkaEwidencyjna_2_16.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idDzialki': 'inline label - always visible', 'dokumentWlasnosci': 'hidden field', 'numerKW': 'hidden field', 'poleEwidencyjne': 'hidden field', 'poleEwidencyjne_uom': 'hidden field', 'dokladnoscReprezentacjiPola': 'hidden field', 'OFU': 'hidden field', 'OZU': 'hidden field', 'OZK': 'hidden field', 'powierzchnia': 'hidden field', 'powierzchnia_uom': 'hidden field', 'dodatkoweInformacje': 'hidden field', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_AktPlanowaniaPrzestrzennego_1_17.set('fieldLabels', {'fid': 'no label', 'przestrzenNazw': 'no label', 'lokalnyId': 'no label', 'wersjaId': 'no label', 'poczatekWersjiObiektu': 'no label', 'koniecWersjiObiektu': 'no label', 'tytul': 'no label', 'tytulAlternatywny': 'no label', 'typPlanu': 'no label', 'poziomHierarchii': 'no label', 'obowiazujeOd': 'no label', 'obowiazujeDo': 'no label', 'status': 'no label', 'modyfikacja': 'no label', 'edycja': 'no label', });
lyr_AktPlanowaniaPrzestrzennego_1_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});