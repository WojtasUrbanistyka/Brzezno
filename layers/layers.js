var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
var lyr_MPZP001_2 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP001_2, 0]);
var lyr_MPZP002_3 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP002_3, 0]);
var lyr_MPZP003_4 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP003_4, 0]);
var lyr_MPZP004_5 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP004_5, 0]);
var lyr_MPZP005_6 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP005_6, 0]);
var lyr_MPZP006_7 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP006_7, 0]);
var lyr_MPZP007_8 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP007_8, 0]);
var lyr_MPZP008_9 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP008_9, 0]);
var lyr_MPZP009_10 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP009_10, 0]);
var lyr_MPZP010_11 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP010_11, 0]);
var lyr_MPZP011_12 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP011_12, 0]);
var lyr_MPZP012_13 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP012_13, 0]);
var lyr_MPZP013_14 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP013_14, 0]);
var lyr_MPZP014_15 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP014_15, 0]);
var lyr_MPZP015_16 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP015_16, 0]);
var lyr_MPZP016_17 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP016_17, 0]);
var lyr_MPZP017_18 = new ol.layer.Tile({
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP017_18, 0]);
var lyr_MPZP018_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany018",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 018',
                            popuplayertitle: 'MPZP 018',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP018_19, 0]);
var lyr_MPZP019_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany019",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 019',
                            popuplayertitle: 'MPZP 019',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP019_20, 0]);
var format_SK_21 = new ol.format.GeoJSON();
var features_SK_21 = format_SK_21.readFeatures(json_SK_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SK_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SK_21.addFeatures(features_SK_21);
var lyr_SK_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SK_21, 
                style: style_SK_21,
                popuplayertitle: 'SK',
                interactive: true,
                title: '<img src="styles/legend/SK_21.png" /> SK'
            });
var format_SO_22 = new ol.format.GeoJSON();
var features_SO_22 = format_SO_22.readFeatures(json_SO_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SO_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SO_22.addFeatures(features_SO_22);
var lyr_SO_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SO_22, 
                style: style_SO_22,
                popuplayertitle: 'SO',
                interactive: true,
                title: '<img src="styles/legend/SO_22.png" /> SO'
            });
var format_SG_23 = new ol.format.GeoJSON();
var features_SG_23 = format_SG_23.readFeatures(json_SG_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SG_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SG_23.addFeatures(features_SG_23);
var lyr_SG_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SG_23, 
                style: style_SG_23,
                popuplayertitle: 'SG',
                interactive: true,
                title: '<img src="styles/legend/SG_23.png" /> SG'
            });
var format_SC_24 = new ol.format.GeoJSON();
var features_SC_24 = format_SC_24.readFeatures(json_SC_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SC_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SC_24.addFeatures(features_SC_24);
var lyr_SC_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SC_24, 
                style: style_SC_24,
                popuplayertitle: 'SC',
                interactive: true,
                title: '<img src="styles/legend/SC_24.png" /> SC'
            });
var format_SN_25 = new ol.format.GeoJSON();
var features_SN_25 = format_SN_25.readFeatures(json_SN_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SN_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SN_25.addFeatures(features_SN_25);
var lyr_SN_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SN_25, 
                style: style_SN_25,
                popuplayertitle: 'SN',
                interactive: true,
                title: '<img src="styles/legend/SN_25.png" /> SN'
            });
var format_SI_26 = new ol.format.GeoJSON();
var features_SI_26 = format_SI_26.readFeatures(json_SI_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_26.addFeatures(features_SI_26);
var lyr_SI_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_26, 
                style: style_SI_26,
                popuplayertitle: 'SI',
                interactive: true,
                title: '<img src="styles/legend/SI_26.png" /> SI'
            });
var format_SR_27 = new ol.format.GeoJSON();
var features_SR_27 = format_SR_27.readFeatures(json_SR_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SR_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SR_27.addFeatures(features_SR_27);
var lyr_SR_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SR_27, 
                style: style_SR_27,
                popuplayertitle: 'SR',
                interactive: true,
                title: '<img src="styles/legend/SR_27.png" /> SR'
            });
var format_SP_28 = new ol.format.GeoJSON();
var features_SP_28 = format_SP_28.readFeatures(json_SP_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_28.addFeatures(features_SP_28);
var lyr_SP_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_28, 
                style: style_SP_28,
                popuplayertitle: 'SP',
                interactive: true,
                title: '<img src="styles/legend/SP_28.png" /> SP'
            });
var format_SU_29 = new ol.format.GeoJSON();
var features_SU_29 = format_SU_29.readFeatures(json_SU_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SU_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SU_29.addFeatures(features_SU_29);
var lyr_SU_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SU_29, 
                style: style_SU_29,
                popuplayertitle: 'SU',
                interactive: true,
                title: '<img src="styles/legend/SU_29.png" /> SU'
            });
var format_SZ_30 = new ol.format.GeoJSON();
var features_SZ_30 = format_SZ_30.readFeatures(json_SZ_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SZ_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SZ_30.addFeatures(features_SZ_30);
var lyr_SZ_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SZ_30, 
                style: style_SZ_30,
                popuplayertitle: 'SZ',
                interactive: true,
                title: '<img src="styles/legend/SZ_30.png" /> SZ'
            });
var format_SJ_31 = new ol.format.GeoJSON();
var features_SJ_31 = format_SJ_31.readFeatures(json_SJ_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJ_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJ_31.addFeatures(features_SJ_31);
var lyr_SJ_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJ_31, 
                style: style_SJ_31,
                popuplayertitle: 'SJ',
                interactive: true,
                title: '<img src="styles/legend/SJ_31.png" /> SJ'
            });
var format_SW_32 = new ol.format.GeoJSON();
var features_SW_32 = format_SW_32.readFeatures(json_SW_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SW_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SW_32.addFeatures(features_SW_32);
var lyr_SW_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SW_32, 
                style: style_SW_32,
                popuplayertitle: 'SW',
                interactive: true,
                title: '<img src="styles/legend/SW_32.png" /> SW'
            });
var format_Dziakiewidencyjne_33 = new ol.format.GeoJSON();
var features_Dziakiewidencyjne_33 = format_Dziakiewidencyjne_33.readFeatures(json_Dziakiewidencyjne_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dziakiewidencyjne_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dziakiewidencyjne_33.addFeatures(features_Dziakiewidencyjne_33);
var lyr_Dziakiewidencyjne_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dziakiewidencyjne_33, 
                style: style_Dziakiewidencyjne_33,
                popuplayertitle: 'Działki ewidencyjne',
                interactive: true,
                title: '<img src="styles/legend/Dziakiewidencyjne_33.png" /> Działki ewidencyjne'
            });
var format_Budynki_34 = new ol.format.GeoJSON();
var features_Budynki_34 = format_Budynki_34.readFeatures(json_Budynki_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Budynki_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Budynki_34.addFeatures(features_Budynki_34);
var lyr_Budynki_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Budynki_34, 
                style: style_Budynki_34,
                popuplayertitle: 'Budynki',
                interactive: false,
                title: '<img src="styles/legend/Budynki_34.png" /> Budynki'
            });
var format_AktPlanowaniaPrzestrzennego_4_35 = new ol.format.GeoJSON();
var features_AktPlanowaniaPrzestrzennego_4_35 = format_AktPlanowaniaPrzestrzennego_4_35.readFeatures(json_AktPlanowaniaPrzestrzennego_4_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AktPlanowaniaPrzestrzennego_4_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AktPlanowaniaPrzestrzennego_4_35.addFeatures(features_AktPlanowaniaPrzestrzennego_4_35);
var lyr_AktPlanowaniaPrzestrzennego_4_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AktPlanowaniaPrzestrzennego_4_35, 
                style: style_AktPlanowaniaPrzestrzennego_4_35,
                popuplayertitle: 'AktPlanowaniaPrzestrzennego_4',
                interactive: false,
                title: '<img src="styles/legend/AktPlanowaniaPrzestrzennego_4_35.png" /> AktPlanowaniaPrzestrzennego_4'
            });
var group_Strefyplanistyczne = new ol.layer.Group({
                                layers: [lyr_SK_21,lyr_SO_22,lyr_SG_23,lyr_SC_24,lyr_SN_25,lyr_SI_26,lyr_SR_27,lyr_SP_28,lyr_SU_29,lyr_SZ_30,lyr_SJ_31,lyr_SW_32,],
                                fold: 'open',
                                title: 'Strefy planistyczne'});
var group_MPZP = new ol.layer.Group({
                                layers: [lyr_MPZP001_2,lyr_MPZP002_3,lyr_MPZP003_4,lyr_MPZP004_5,lyr_MPZP005_6,lyr_MPZP006_7,lyr_MPZP007_8,lyr_MPZP008_9,lyr_MPZP009_10,lyr_MPZP010_11,lyr_MPZP011_12,lyr_MPZP012_13,lyr_MPZP013_14,lyr_MPZP014_15,lyr_MPZP015_16,lyr_MPZP016_17,lyr_MPZP017_18,lyr_MPZP018_19,lyr_MPZP019_20,],
                                fold: 'close',
                                title: 'MPZP'});

lyr_OSMStandard_0.setVisible(true);lyr_Ortofotomapastandardowa_1.setVisible(true);lyr_MPZP001_2.setVisible(true);lyr_MPZP002_3.setVisible(true);lyr_MPZP003_4.setVisible(true);lyr_MPZP004_5.setVisible(true);lyr_MPZP005_6.setVisible(true);lyr_MPZP006_7.setVisible(true);lyr_MPZP007_8.setVisible(true);lyr_MPZP008_9.setVisible(true);lyr_MPZP009_10.setVisible(true);lyr_MPZP010_11.setVisible(true);lyr_MPZP011_12.setVisible(true);lyr_MPZP012_13.setVisible(true);lyr_MPZP013_14.setVisible(true);lyr_MPZP014_15.setVisible(true);lyr_MPZP015_16.setVisible(true);lyr_MPZP016_17.setVisible(true);lyr_MPZP017_18.setVisible(true);lyr_MPZP018_19.setVisible(true);lyr_MPZP019_20.setVisible(true);lyr_SK_21.setVisible(true);lyr_SO_22.setVisible(true);lyr_SG_23.setVisible(true);lyr_SC_24.setVisible(true);lyr_SN_25.setVisible(true);lyr_SI_26.setVisible(true);lyr_SR_27.setVisible(true);lyr_SP_28.setVisible(true);lyr_SU_29.setVisible(true);lyr_SZ_30.setVisible(true);lyr_SJ_31.setVisible(true);lyr_SW_32.setVisible(true);lyr_Dziakiewidencyjne_33.setVisible(true);lyr_Budynki_34.setVisible(true);lyr_AktPlanowaniaPrzestrzennego_4_35.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ortofotomapastandardowa_1,group_MPZP,group_Strefyplanistyczne,lyr_Dziakiewidencyjne_33,lyr_Budynki_34,lyr_AktPlanowaniaPrzestrzennego_4_35];
lyr_SK_21.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SO_22.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SG_23.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SC_24.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SN_25.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SI_26.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SR_27.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SP_28.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SU_29.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SZ_30.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SJ_31.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_SW_32.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Dziakiewidencyjne_33.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idDzialki': 'idDzialki', 'dokumentWlasnosci': 'dokumentWlasnosci', 'numerKW': 'numerKW', 'poleEwidencyjne': 'poleEwidencyjne', 'poleEwidencyjne_uom': 'poleEwidencyjne_uom', 'dokladnoscReprezentacjiPola': 'dokladnoscReprezentacjiPola', 'OFU': 'OFU', 'OZU': 'OZU', 'OZK': 'OZK', 'powierzchnia': 'powierzchnia', 'powierzchnia_uom': 'powierzchnia_uom', 'dodatkoweInformacje': 'dodatkoweInformacje', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_Budynki_34.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idBudynku': 'idBudynku', 'rodzajWgKST': 'rodzajWgKST', 'liczbaKondygnacjiNadziemnych': 'liczbaKondygnacjiNadziemnych', 'liczbaKondygnacjiPodziemnych': 'liczbaKondygnacjiPodziemnych', 'powZabudowy_uom': 'powZabudowy_uom', 'lacznaPowUzytkowaLokaliWyodrebnionych': 'lacznaPowUzytkowaLokaliWyodrebnionych', 'lacznaPowUzytkowaLokaliWyodrebnionych_uom': 'lacznaPowUzytkowaLokaliWyodrebnionych_uom', 'lacznaPowUzytkowaPomieszczenPrzynaleznych': 'lacznaPowUzytkowaPomieszczenPrzynaleznych', 'lacznaPowUzytkowaPomieszczenPrzynaleznych_uom': 'lacznaPowUzytkowaPomieszczenPrzynaleznych_uom', 'dokumentWlasnosci': 'dokumentWlasnosci', 'dodatkoweInformacje': 'dodatkoweInformacje', 'powZabudowy': 'powZabudowy', 'numerKW': 'numerKW', 'lacznaPowUzytkowaLokaliNiewyodrebnionych': 'lacznaPowUzytkowaLokaliNiewyodrebnionych', 'lacznaPowUzytkowaLokaliNiewyodrebnionych_uom': 'lacznaPowUzytkowaLokaliNiewyodrebnionych_uom', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_AktPlanowaniaPrzestrzennego_4_35.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'tytul': 'tytul', 'tytulAlternatywny': 'tytulAlternatywny', 'typPlanu': 'typPlanu', 'poziomHierarchii': 'poziomHierarchii', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'modyfikacja': 'modyfikacja', 'edycja': 'edycja', });
lyr_SK_21.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SO_22.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SG_23.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SC_24.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SN_25.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SI_26.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SR_27.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SP_28.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SU_29.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SZ_30.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SJ_31.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_SW_32.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', 'auxiliary_storage_labeling_positionx': '', 'auxiliary_storage_labeling_positiony': '', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Dziakiewidencyjne_33.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idDzialki': 'TextEdit', 'dokumentWlasnosci': 'TextEdit', 'numerKW': 'TextEdit', 'poleEwidencyjne': 'TextEdit', 'poleEwidencyjne_uom': 'TextEdit', 'dokladnoscReprezentacjiPola': 'Range', 'OFU': 'TextEdit', 'OZU': 'TextEdit', 'OZK': 'TextEdit', 'powierzchnia': 'TextEdit', 'powierzchnia_uom': 'TextEdit', 'dodatkoweInformacje': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_Budynki_34.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idBudynku': 'TextEdit', 'rodzajWgKST': 'TextEdit', 'liczbaKondygnacjiNadziemnych': 'Range', 'liczbaKondygnacjiPodziemnych': 'Range', 'powZabudowy_uom': 'TextEdit', 'lacznaPowUzytkowaLokaliWyodrebnionych': 'TextEdit', 'lacznaPowUzytkowaLokaliWyodrebnionych_uom': 'TextEdit', 'lacznaPowUzytkowaPomieszczenPrzynaleznych': 'TextEdit', 'lacznaPowUzytkowaPomieszczenPrzynaleznych_uom': 'TextEdit', 'dokumentWlasnosci': 'TextEdit', 'dodatkoweInformacje': 'TextEdit', 'powZabudowy': 'TextEdit', 'numerKW': 'TextEdit', 'lacznaPowUzytkowaLokaliNiewyodrebnionych': 'TextEdit', 'lacznaPowUzytkowaLokaliNiewyodrebnionych_uom': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_AktPlanowaniaPrzestrzennego_4_35.set('fieldImages', {'fid': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'lokalnyId': 'TextEdit', 'wersjaId': 'DateTime', 'poczatekWersjiObiektu': 'DateTime', 'koniecWersjiObiektu': 'DateTime', 'tytul': 'TextEdit', 'tytulAlternatywny': 'TextEdit', 'typPlanu': 'ValueMap', 'poziomHierarchii': 'ValueMap', 'obowiazujeOd': 'DateTime', 'obowiazujeDo': 'DateTime', 'status': 'ValueMap', 'modyfikacja': 'CheckBox', 'edycja': '', });
lyr_SK_21.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SO_22.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SG_23.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'hidden field', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SC_24.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SN_25.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SI_26.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SR_27.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SP_28.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SU_29.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SZ_30.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SJ_31.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_SW_32.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', 'auxiliary_storage_labeling_positionx': 'hidden field', 'auxiliary_storage_labeling_positiony': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_Dziakiewidencyjne_33.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idDzialki': 'inline label - always visible', 'dokumentWlasnosci': 'hidden field', 'numerKW': 'hidden field', 'poleEwidencyjne': 'hidden field', 'poleEwidencyjne_uom': 'hidden field', 'dokladnoscReprezentacjiPola': 'hidden field', 'OFU': 'hidden field', 'OZU': 'hidden field', 'OZK': 'hidden field', 'powierzchnia': 'hidden field', 'powierzchnia_uom': 'hidden field', 'dodatkoweInformacje': 'hidden field', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_Budynki_34.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idBudynku': 'hidden field', 'rodzajWgKST': 'hidden field', 'liczbaKondygnacjiNadziemnych': 'hidden field', 'liczbaKondygnacjiPodziemnych': 'hidden field', 'powZabudowy_uom': 'hidden field', 'lacznaPowUzytkowaLokaliWyodrebnionych': 'hidden field', 'lacznaPowUzytkowaLokaliWyodrebnionych_uom': 'hidden field', 'lacznaPowUzytkowaPomieszczenPrzynaleznych': 'hidden field', 'lacznaPowUzytkowaPomieszczenPrzynaleznych_uom': 'hidden field', 'dokumentWlasnosci': 'hidden field', 'dodatkoweInformacje': 'hidden field', 'powZabudowy': 'hidden field', 'numerKW': 'hidden field', 'lacznaPowUzytkowaLokaliNiewyodrebnionych': 'hidden field', 'lacznaPowUzytkowaLokaliNiewyodrebnionych_uom': 'hidden field', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_AktPlanowaniaPrzestrzennego_4_35.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'tytul': 'hidden field', 'tytulAlternatywny': 'hidden field', 'typPlanu': 'hidden field', 'poziomHierarchii': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'modyfikacja': 'hidden field', 'edycja': 'hidden field', });
lyr_AktPlanowaniaPrzestrzennego_4_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});