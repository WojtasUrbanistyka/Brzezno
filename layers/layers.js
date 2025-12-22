var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_Ortofotomapastandardowa_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotomapastandardowa_1 = projection_Ortofotomapastandardowa_1.getExtent();
    var size_Ortofotomapastandardowa_1 = ol.extent.getWidth(projectionExtent_Ortofotomapastandardowa_1) / 256;
    var resolutions_Ortofotomapastandardowa_1 = new Array(14);
    var matrixIds_Ortofotomapastandardowa_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotomapastandardowa_1[z] = size_Ortofotomapastandardowa_1 / Math.pow(2, z);
        matrixIds_Ortofotomapastandardowa_1[z] = z;
    }
    var lyr_Ortofotomapastandardowa_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?service=WMTS&request=getCapabilities",
                                attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotomapastandardowa_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotomapastandardowa_1),
                resolutions: resolutions_Ortofotomapastandardowa_1,
                matrixIds: matrixIds_Ortofotomapastandardowa_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofotomapa standardowa',
                            opacity: 1.0,
                            
                            
                          });
var format_symbol_SK_2 = new ol.format.GeoJSON();
var features_symbol_SK_2 = format_symbol_SK_2.readFeatures(json_symbol_SK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SK_2.addFeatures(features_symbol_SK_2);
var lyr_symbol_SK_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SK_2, 
                style: style_symbol_SK_2,
                popuplayertitle: 'symbol_SK',
                interactive: true,
                title: '<img src="styles/legend/symbol_SK_2.png" /> symbol_SK'
            });
var format_symbol_SO_3 = new ol.format.GeoJSON();
var features_symbol_SO_3 = format_symbol_SO_3.readFeatures(json_symbol_SO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SO_3.addFeatures(features_symbol_SO_3);
var lyr_symbol_SO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SO_3, 
                style: style_symbol_SO_3,
                popuplayertitle: 'symbol_SO',
                interactive: true,
                title: '<img src="styles/legend/symbol_SO_3.png" /> symbol_SO'
            });
var format_symbol_SG_4 = new ol.format.GeoJSON();
var features_symbol_SG_4 = format_symbol_SG_4.readFeatures(json_symbol_SG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SG_4.addFeatures(features_symbol_SG_4);
var lyr_symbol_SG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SG_4, 
                style: style_symbol_SG_4,
                popuplayertitle: 'symbol_SG',
                interactive: true,
                title: '<img src="styles/legend/symbol_SG_4.png" /> symbol_SG'
            });
var format_symbol_SC_5 = new ol.format.GeoJSON();
var features_symbol_SC_5 = format_symbol_SC_5.readFeatures(json_symbol_SC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SC_5.addFeatures(features_symbol_SC_5);
var lyr_symbol_SC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SC_5, 
                style: style_symbol_SC_5,
                popuplayertitle: 'symbol_SC',
                interactive: true,
                title: '<img src="styles/legend/symbol_SC_5.png" /> symbol_SC'
            });
var format_symbol_SN_6 = new ol.format.GeoJSON();
var features_symbol_SN_6 = format_symbol_SN_6.readFeatures(json_symbol_SN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SN_6.addFeatures(features_symbol_SN_6);
var lyr_symbol_SN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SN_6, 
                style: style_symbol_SN_6,
                popuplayertitle: 'symbol_SN',
                interactive: true,
                title: '<img src="styles/legend/symbol_SN_6.png" /> symbol_SN'
            });
var format_symbol_SI_7 = new ol.format.GeoJSON();
var features_symbol_SI_7 = format_symbol_SI_7.readFeatures(json_symbol_SI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SI_7.addFeatures(features_symbol_SI_7);
var lyr_symbol_SI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SI_7, 
                style: style_symbol_SI_7,
                popuplayertitle: 'symbol_SI',
                interactive: true,
                title: '<img src="styles/legend/symbol_SI_7.png" /> symbol_SI'
            });
var format_symbol_SR_8 = new ol.format.GeoJSON();
var features_symbol_SR_8 = format_symbol_SR_8.readFeatures(json_symbol_SR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SR_8.addFeatures(features_symbol_SR_8);
var lyr_symbol_SR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SR_8, 
                style: style_symbol_SR_8,
                popuplayertitle: 'symbol_SR',
                interactive: true,
                title: '<img src="styles/legend/symbol_SR_8.png" /> symbol_SR'
            });
var format_symbol_SP_9 = new ol.format.GeoJSON();
var features_symbol_SP_9 = format_symbol_SP_9.readFeatures(json_symbol_SP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SP_9.addFeatures(features_symbol_SP_9);
var lyr_symbol_SP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SP_9, 
                style: style_symbol_SP_9,
                popuplayertitle: 'symbol_SP',
                interactive: true,
                title: '<img src="styles/legend/symbol_SP_9.png" /> symbol_SP'
            });
var format_symbol_SU_10 = new ol.format.GeoJSON();
var features_symbol_SU_10 = format_symbol_SU_10.readFeatures(json_symbol_SU_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SU_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SU_10.addFeatures(features_symbol_SU_10);
var lyr_symbol_SU_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SU_10, 
                style: style_symbol_SU_10,
                popuplayertitle: 'symbol_SU',
                interactive: true,
                title: '<img src="styles/legend/symbol_SU_10.png" /> symbol_SU'
            });
var format_symbol_SZ_11 = new ol.format.GeoJSON();
var features_symbol_SZ_11 = format_symbol_SZ_11.readFeatures(json_symbol_SZ_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SZ_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SZ_11.addFeatures(features_symbol_SZ_11);
var lyr_symbol_SZ_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SZ_11, 
                style: style_symbol_SZ_11,
                popuplayertitle: 'symbol_SZ',
                interactive: true,
                title: '<img src="styles/legend/symbol_SZ_11.png" /> symbol_SZ'
            });
var format_symbol_SJ_12 = new ol.format.GeoJSON();
var features_symbol_SJ_12 = format_symbol_SJ_12.readFeatures(json_symbol_SJ_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SJ_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SJ_12.addFeatures(features_symbol_SJ_12);
var lyr_symbol_SJ_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SJ_12, 
                style: style_symbol_SJ_12,
                popuplayertitle: 'symbol_SJ',
                interactive: true,
                title: '<img src="styles/legend/symbol_SJ_12.png" /> symbol_SJ'
            });
var format_symbol_SW_13 = new ol.format.GeoJSON();
var features_symbol_SW_13 = format_symbol_SW_13.readFeatures(json_symbol_SW_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SW_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SW_13.addFeatures(features_symbol_SW_13);
var lyr_symbol_SW_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SW_13, 
                style: style_symbol_SW_13,
                popuplayertitle: 'symbol_SW',
                interactive: true,
                title: '<img src="styles/legend/symbol_SW_13.png" /> symbol_SW'
            });
var lyr_MPZP001_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany001",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 001',
                            popuplayertitle: 'MPZP 001',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP001_14, 0]);
var lyr_MPZP002_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany002",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 002',
                            popuplayertitle: 'MPZP 002',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP002_15, 0]);
var lyr_MPZP003_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany003",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 003',
                            popuplayertitle: 'MPZP 003',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP003_16, 0]);
var lyr_MPZP004_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany004",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 004',
                            popuplayertitle: 'MPZP 004',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP004_17, 0]);
var lyr_MPZP005_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany005",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 005',
                            popuplayertitle: 'MPZP 005',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP005_18, 0]);
var lyr_MPZP006_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany006",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 006',
                            popuplayertitle: 'MPZP 006',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP006_19, 0]);
var lyr_MPZP007_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany007",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 007',
                            popuplayertitle: 'MPZP 007',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP007_20, 0]);
var lyr_MPZP008_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany008",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 008',
                            popuplayertitle: 'MPZP 008',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP008_21, 0]);
var lyr_MPZP009_22 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany009",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 009',
                            popuplayertitle: 'MPZP 009',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP009_22, 0]);
var lyr_MPZP010_23 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany010",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 010',
                            popuplayertitle: 'MPZP 010',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP010_23, 0]);
var lyr_MPZP011_24 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany011",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 011',
                            popuplayertitle: 'MPZP 011',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP011_24, 0]);
var lyr_MPZP012_25 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany012",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 012',
                            popuplayertitle: 'MPZP 012',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP012_25, 0]);
var lyr_MPZP013_26 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany013",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 013',
                            popuplayertitle: 'MPZP 013',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP013_26, 0]);
var lyr_MPZP014_27 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany014",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 014',
                            popuplayertitle: 'MPZP 014',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP014_27, 0]);
var lyr_MPZP015_28 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany015",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 015',
                            popuplayertitle: 'MPZP 015',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP015_28, 0]);
var lyr_MPZP016_29 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany016",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 016',
                            popuplayertitle: 'MPZP 016',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP016_29, 0]);
var lyr_MPZP017_30 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany017",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 017',
                            popuplayertitle: 'MPZP 017',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP017_30, 0]);
var format_EGB_DzialkaEwidencyjna_31 = new ol.format.GeoJSON();
var features_EGB_DzialkaEwidencyjna_31 = format_EGB_DzialkaEwidencyjna_31.readFeatures(json_EGB_DzialkaEwidencyjna_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGB_DzialkaEwidencyjna_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGB_DzialkaEwidencyjna_31.addFeatures(features_EGB_DzialkaEwidencyjna_31);
var lyr_EGB_DzialkaEwidencyjna_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGB_DzialkaEwidencyjna_31, 
                style: style_EGB_DzialkaEwidencyjna_31,
                popuplayertitle: 'EGB_DzialkaEwidencyjna',
                interactive: true,
                title: '<img src="styles/legend/EGB_DzialkaEwidencyjna_31.png" /> EGB_DzialkaEwidencyjna'
            });
var format_EGB_ObrebEwidencyjny_32 = new ol.format.GeoJSON();
var features_EGB_ObrebEwidencyjny_32 = format_EGB_ObrebEwidencyjny_32.readFeatures(json_EGB_ObrebEwidencyjny_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGB_ObrebEwidencyjny_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGB_ObrebEwidencyjny_32.addFeatures(features_EGB_ObrebEwidencyjny_32);
var lyr_EGB_ObrebEwidencyjny_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGB_ObrebEwidencyjny_32, 
                style: style_EGB_ObrebEwidencyjny_32,
                popuplayertitle: 'EGB_ObrebEwidencyjny',
                interactive: true,
                title: '<img src="styles/legend/EGB_ObrebEwidencyjny_32.png" /> EGB_ObrebEwidencyjny'
            });
var format_wnioski_razem_33 = new ol.format.GeoJSON();
var features_wnioski_razem_33 = format_wnioski_razem_33.readFeatures(json_wnioski_razem_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_razem_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_razem_33.addFeatures(features_wnioski_razem_33);
var lyr_wnioski_razem_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_razem_33, 
                style: style_wnioski_razem_33,
                popuplayertitle: 'wnioski_razem',
                interactive: true,
                title: '<img src="styles/legend/wnioski_razem_33.png" /> wnioski_razem'
            });
var format_wyszukiwanie_34 = new ol.format.GeoJSON();
var features_wyszukiwanie_34 = format_wyszukiwanie_34.readFeatures(json_wyszukiwanie_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wyszukiwanie_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wyszukiwanie_34.addFeatures(features_wyszukiwanie_34);
var lyr_wyszukiwanie_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wyszukiwanie_34, 
                style: style_wyszukiwanie_34,
                popuplayertitle: 'wyszukiwanie',
                interactive: false,
                title: '<img src="styles/legend/wyszukiwanie_34.png" /> wyszukiwanie'
            });
var format_przypisy_35 = new ol.format.GeoJSON();
var features_przypisy_35 = format_przypisy_35.readFeatures(json_przypisy_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_przypisy_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_przypisy_35.addFeatures(features_przypisy_35);
var lyr_przypisy_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_przypisy_35, 
                style: style_przypisy_35,
                popuplayertitle: 'przypisy',
                interactive: true,
                title: '<img src="styles/legend/przypisy_35.png" /> przypisy'
            });
var format_Mask_36 = new ol.format.GeoJSON();
var features_Mask_36 = format_Mask_36.readFeatures(json_Mask_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mask_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mask_36.addFeatures(features_Mask_36);
var lyr_Mask_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mask_36, 
                style: style_Mask_36,
                popuplayertitle: 'Mask',
                interactive: false,
                title: 'Mask'
            });
var group_MPZP = new ol.layer.Group({
                                layers: [lyr_MPZP001_14,lyr_MPZP002_15,lyr_MPZP003_16,lyr_MPZP004_17,lyr_MPZP005_18,lyr_MPZP006_19,lyr_MPZP007_20,lyr_MPZP008_21,lyr_MPZP009_22,lyr_MPZP010_23,lyr_MPZP011_24,lyr_MPZP012_25,lyr_MPZP013_26,lyr_MPZP014_27,lyr_MPZP015_28,lyr_MPZP016_29,lyr_MPZP017_30,],
                                fold: 'open',
                                title: 'MPZP'});
var group_PLANOGOLNYprojekt = new ol.layer.Group({
                                layers: [lyr_symbol_SK_2,lyr_symbol_SO_3,lyr_symbol_SG_4,lyr_symbol_SC_5,lyr_symbol_SN_6,lyr_symbol_SI_7,lyr_symbol_SR_8,lyr_symbol_SP_9,lyr_symbol_SU_10,lyr_symbol_SZ_11,lyr_symbol_SJ_12,lyr_symbol_SW_13,],
                                fold: 'close',
                                title: 'PLAN OGOLNY (projekt)'});

lyr_OSMStandard_0.setVisible(true);lyr_Ortofotomapastandardowa_1.setVisible(true);lyr_symbol_SK_2.setVisible(true);lyr_symbol_SO_3.setVisible(true);lyr_symbol_SG_4.setVisible(true);lyr_symbol_SC_5.setVisible(true);lyr_symbol_SN_6.setVisible(true);lyr_symbol_SI_7.setVisible(true);lyr_symbol_SR_8.setVisible(true);lyr_symbol_SP_9.setVisible(true);lyr_symbol_SU_10.setVisible(true);lyr_symbol_SZ_11.setVisible(true);lyr_symbol_SJ_12.setVisible(true);lyr_symbol_SW_13.setVisible(true);lyr_MPZP001_14.setVisible(true);lyr_MPZP002_15.setVisible(true);lyr_MPZP003_16.setVisible(true);lyr_MPZP004_17.setVisible(true);lyr_MPZP005_18.setVisible(true);lyr_MPZP006_19.setVisible(true);lyr_MPZP007_20.setVisible(true);lyr_MPZP008_21.setVisible(true);lyr_MPZP009_22.setVisible(true);lyr_MPZP010_23.setVisible(true);lyr_MPZP011_24.setVisible(true);lyr_MPZP012_25.setVisible(true);lyr_MPZP013_26.setVisible(true);lyr_MPZP014_27.setVisible(true);lyr_MPZP015_28.setVisible(true);lyr_MPZP016_29.setVisible(true);lyr_MPZP017_30.setVisible(true);lyr_EGB_DzialkaEwidencyjna_31.setVisible(true);lyr_EGB_ObrebEwidencyjny_32.setVisible(true);lyr_wnioski_razem_33.setVisible(true);lyr_wyszukiwanie_34.setVisible(true);lyr_przypisy_35.setVisible(true);lyr_Mask_36.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ortofotomapastandardowa_1,group_PLANOGOLNYprojekt,group_MPZP,lyr_EGB_DzialkaEwidencyjna_31,lyr_EGB_ObrebEwidencyjny_32,lyr_wnioski_razem_33,lyr_wyszukiwanie_34,lyr_przypisy_35,lyr_Mask_36];
lyr_symbol_SK_2.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SO_3.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SG_4.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SC_5.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SN_6.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SI_7.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SR_8.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SP_9.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SU_10.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SZ_11.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SJ_12.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SW_13.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_EGB_DzialkaEwidencyjna_31.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idDzialki': 'idDzialki', 'dokumentWlasnosci': 'dokumentWlasnosci', 'numerKW': 'numerKW', 'poleEwidencyjne': 'poleEwidencyjne', 'poleEwidencyjne_uom': 'poleEwidencyjne_uom', 'dokladnoscReprezentacjiPola': 'dokladnoscReprezentacjiPola', 'OFU': 'OFU', 'OZU': 'OZU', 'OZK': 'OZK', 'powierzchnia': 'powierzchnia', 'powierzchnia_uom': 'powierzchnia_uom', 'dodatkoweInformacje': 'dodatkoweInformacje', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_EGB_ObrebEwidencyjny_32.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idObrebu': 'idObrebu', 'nazwaWlasna': 'nazwaWlasna', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_wnioski_razem_33.set('fieldAliases', {'wn_przezn': 'wn_przezn', 'nr_wniosku': 'nr_wniosku', 'layer': 'layer', 'path': 'path', });
lyr_wyszukiwanie_34.set('fieldAliases', {'nr_wniosku': 'nr_wniosku', });
lyr_przypisy_35.set('fieldAliases', {'opis': 'opis', });
lyr_Mask_36.set('fieldAliases', {'params': 'params', });
lyr_symbol_SK_2.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SO_3.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SG_4.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SC_5.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SN_6.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SI_7.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SR_8.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SP_9.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SU_10.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SZ_11.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SJ_12.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SW_13.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_EGB_DzialkaEwidencyjna_31.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idDzialki': 'TextEdit', 'dokumentWlasnosci': 'TextEdit', 'numerKW': 'TextEdit', 'poleEwidencyjne': 'TextEdit', 'poleEwidencyjne_uom': 'TextEdit', 'dokladnoscReprezentacjiPola': 'Range', 'OFU': 'TextEdit', 'OZU': 'TextEdit', 'OZK': 'TextEdit', 'powierzchnia': 'TextEdit', 'powierzchnia_uom': 'TextEdit', 'dodatkoweInformacje': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_EGB_ObrebEwidencyjny_32.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idObrebu': 'TextEdit', 'nazwaWlasna': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_wnioski_razem_33.set('fieldImages', {'wn_przezn': 'TextEdit', 'nr_wniosku': 'TextEdit', 'layer': '', 'path': '', });
lyr_wyszukiwanie_34.set('fieldImages', {'nr_wniosku': 'TextEdit', });
lyr_przypisy_35.set('fieldImages', {'opis': 'TextEdit', });
lyr_Mask_36.set('fieldImages', {'params': 'TextEdit', });
lyr_symbol_SK_2.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SO_3.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SG_4.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SC_5.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SN_6.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SI_7.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SR_8.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SP_9.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SU_10.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SZ_11.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SJ_12.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SW_13.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'inline label - always visible', 'symbol': 'inline label - always visible', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'inline label - always visible', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_EGB_DzialkaEwidencyjna_31.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idDzialki': 'inline label - always visible', 'dokumentWlasnosci': 'hidden field', 'numerKW': 'hidden field', 'poleEwidencyjne': 'hidden field', 'poleEwidencyjne_uom': 'hidden field', 'dokladnoscReprezentacjiPola': 'hidden field', 'OFU': 'hidden field', 'OZU': 'hidden field', 'OZK': 'hidden field', 'powierzchnia': 'hidden field', 'powierzchnia_uom': 'hidden field', 'dodatkoweInformacje': 'hidden field', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_EGB_ObrebEwidencyjny_32.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idObrebu': 'hidden field', 'nazwaWlasna': 'no label', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_wnioski_razem_33.set('fieldLabels', {'wn_przezn': 'inline label - always visible', 'nr_wniosku': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_wyszukiwanie_34.set('fieldLabels', {'nr_wniosku': 'hidden field', });
lyr_przypisy_35.set('fieldLabels', {'opis': 'inline label - always visible', });
lyr_Mask_36.set('fieldLabels', {'params': 'hidden field', });
lyr_Mask_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});