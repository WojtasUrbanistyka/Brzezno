var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_MPZP001_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany001",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 001',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP001_1, 1]);
var lyr_MPZP002_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany002",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 002',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP002_2, 1]);
var lyr_MPZP003_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany003",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 003',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP003_3, 1]);
var lyr_MPZP004_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany004",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 004',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP004_4, 1]);
var lyr_MPZP005_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany005",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 005',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP005_5, 1]);
var lyr_MPZP006_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany006",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 006',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP006_6, 1]);
var lyr_MPZP007_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany007",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 007',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP007_7, 1]);
var lyr_MPZP008_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany008",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 008',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP008_8, 1]);
var lyr_MPZP009_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany009",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 009',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP009_9, 1]);
var lyr_MPZP010_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany010",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 010',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP010_10, 1]);
var lyr_MPZP011_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany011",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 011',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP011_11, 1]);
var lyr_MPZP012_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany012",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 012',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP012_12, 1]);
var lyr_MPZP013_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany013",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 013',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP013_13, 1]);
var lyr_MPZP014_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany014",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 014',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP014_14, 1]);
var lyr_MPZP015_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany015",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 015',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP015_15, 1]);
var lyr_MPZP016_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany016",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 016',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP016_16, 1]);
var lyr_MPZP017_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mpzp.igeomap.pl/cgi-bin/321602",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plany017",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP 017',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP017_17, 1]);
var format_EGB_DzialkaEwidencyjna_18 = new ol.format.GeoJSON();
var features_EGB_DzialkaEwidencyjna_18 = format_EGB_DzialkaEwidencyjna_18.readFeatures(json_EGB_DzialkaEwidencyjna_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGB_DzialkaEwidencyjna_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGB_DzialkaEwidencyjna_18.addFeatures(features_EGB_DzialkaEwidencyjna_18);
var lyr_EGB_DzialkaEwidencyjna_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGB_DzialkaEwidencyjna_18, 
                style: style_EGB_DzialkaEwidencyjna_18,
                popuplayertitle: 'EGB_DzialkaEwidencyjna',
                interactive: true,
                title: '<img src="styles/legend/EGB_DzialkaEwidencyjna_18.png" /> EGB_DzialkaEwidencyjna'
            });
var format_EGB_ObrebEwidencyjny_19 = new ol.format.GeoJSON();
var features_EGB_ObrebEwidencyjny_19 = format_EGB_ObrebEwidencyjny_19.readFeatures(json_EGB_ObrebEwidencyjny_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGB_ObrebEwidencyjny_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGB_ObrebEwidencyjny_19.addFeatures(features_EGB_ObrebEwidencyjny_19);
var lyr_EGB_ObrebEwidencyjny_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGB_ObrebEwidencyjny_19, 
                style: style_EGB_ObrebEwidencyjny_19,
                popuplayertitle: 'EGB_ObrebEwidencyjny',
                interactive: true,
                title: '<img src="styles/legend/EGB_ObrebEwidencyjny_19.png" /> EGB_ObrebEwidencyjny'
            });
var format_wnioski_gmina_Brzezno_20 = new ol.format.GeoJSON();
var features_wnioski_gmina_Brzezno_20 = format_wnioski_gmina_Brzezno_20.readFeatures(json_wnioski_gmina_Brzezno_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_gmina_Brzezno_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_gmina_Brzezno_20.addFeatures(features_wnioski_gmina_Brzezno_20);
var lyr_wnioski_gmina_Brzezno_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_gmina_Brzezno_20, 
                style: style_wnioski_gmina_Brzezno_20,
                popuplayertitle: 'wnioski_gmina_Brzezno',
                interactive: true,
                title: '<img src="styles/legend/wnioski_gmina_Brzezno_20.png" /> wnioski_gmina_Brzezno'
            });
var format_wnioski_przed_terminem_21 = new ol.format.GeoJSON();
var features_wnioski_przed_terminem_21 = format_wnioski_przed_terminem_21.readFeatures(json_wnioski_przed_terminem_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_przed_terminem_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_przed_terminem_21.addFeatures(features_wnioski_przed_terminem_21);
var lyr_wnioski_przed_terminem_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_przed_terminem_21, 
                style: style_wnioski_przed_terminem_21,
                popuplayertitle: 'wnioski_przed_terminem',
                interactive: true,
                title: '<img src="styles/legend/wnioski_przed_terminem_21.png" /> wnioski_przed_terminem'
            });
var format_wnioski_w_terminie_22 = new ol.format.GeoJSON();
var features_wnioski_w_terminie_22 = format_wnioski_w_terminie_22.readFeatures(json_wnioski_w_terminie_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_w_terminie_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_w_terminie_22.addFeatures(features_wnioski_w_terminie_22);
var lyr_wnioski_w_terminie_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_w_terminie_22, 
                style: style_wnioski_w_terminie_22,
                popuplayertitle: 'wnioski_w_terminie',
                interactive: true,
                title: '<img src="styles/legend/wnioski_w_terminie_22.png" /> wnioski_w_terminie'
            });
var format_wnioski_po_terminie_23 = new ol.format.GeoJSON();
var features_wnioski_po_terminie_23 = format_wnioski_po_terminie_23.readFeatures(json_wnioski_po_terminie_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_po_terminie_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_po_terminie_23.addFeatures(features_wnioski_po_terminie_23);
var lyr_wnioski_po_terminie_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_po_terminie_23, 
                style: style_wnioski_po_terminie_23,
                popuplayertitle: 'wnioski_po_terminie',
                interactive: true,
                title: '<img src="styles/legend/wnioski_po_terminie_23.png" /> wnioski_po_terminie'
            });
var format_wyszukiwanie_24 = new ol.format.GeoJSON();
var features_wyszukiwanie_24 = format_wyszukiwanie_24.readFeatures(json_wyszukiwanie_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wyszukiwanie_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wyszukiwanie_24.addFeatures(features_wyszukiwanie_24);
var lyr_wyszukiwanie_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wyszukiwanie_24, 
                style: style_wyszukiwanie_24,
                popuplayertitle: 'wyszukiwanie',
                interactive: false,
                title: '<img src="styles/legend/wyszukiwanie_24.png" /> wyszukiwanie'
            });
var group_MPZP = new ol.layer.Group({
                                layers: [lyr_MPZP001_1,lyr_MPZP002_2,lyr_MPZP003_3,lyr_MPZP004_4,lyr_MPZP005_5,lyr_MPZP006_6,lyr_MPZP007_7,lyr_MPZP008_8,lyr_MPZP009_9,lyr_MPZP010_10,lyr_MPZP011_11,lyr_MPZP012_12,lyr_MPZP013_13,lyr_MPZP014_14,lyr_MPZP015_15,lyr_MPZP016_16,lyr_MPZP017_17,],
                                fold: "open",
                                title: 'MPZP'});

lyr_OSMStandard_0.setVisible(true);lyr_MPZP001_1.setVisible(true);lyr_MPZP002_2.setVisible(true);lyr_MPZP003_3.setVisible(true);lyr_MPZP004_4.setVisible(true);lyr_MPZP005_5.setVisible(true);lyr_MPZP006_6.setVisible(true);lyr_MPZP007_7.setVisible(true);lyr_MPZP008_8.setVisible(true);lyr_MPZP009_9.setVisible(true);lyr_MPZP010_10.setVisible(true);lyr_MPZP011_11.setVisible(true);lyr_MPZP012_12.setVisible(true);lyr_MPZP013_13.setVisible(true);lyr_MPZP014_14.setVisible(true);lyr_MPZP015_15.setVisible(true);lyr_MPZP016_16.setVisible(true);lyr_MPZP017_17.setVisible(true);lyr_EGB_DzialkaEwidencyjna_18.setVisible(true);lyr_EGB_ObrebEwidencyjny_19.setVisible(true);lyr_wnioski_gmina_Brzezno_20.setVisible(true);lyr_wnioski_przed_terminem_21.setVisible(true);lyr_wnioski_w_terminie_22.setVisible(true);lyr_wnioski_po_terminie_23.setVisible(true);lyr_wyszukiwanie_24.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_MPZP,lyr_EGB_DzialkaEwidencyjna_18,lyr_EGB_ObrebEwidencyjny_19,lyr_wnioski_gmina_Brzezno_20,lyr_wnioski_przed_terminem_21,lyr_wnioski_w_terminie_22,lyr_wnioski_po_terminie_23,lyr_wyszukiwanie_24];
lyr_EGB_DzialkaEwidencyjna_18.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idDzialki': 'idDzialki', 'dokumentWlasnosci': 'dokumentWlasnosci', 'numerKW': 'numerKW', 'poleEwidencyjne': 'poleEwidencyjne', 'poleEwidencyjne_uom': 'poleEwidencyjne_uom', 'dokladnoscReprezentacjiPola': 'dokladnoscReprezentacjiPola', 'OFU': 'OFU', 'OZU': 'OZU', 'OZK': 'OZK', 'powierzchnia': 'powierzchnia', 'powierzchnia_uom': 'powierzchnia_uom', 'dodatkoweInformacje': 'dodatkoweInformacje', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_EGB_ObrebEwidencyjny_19.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idObrebu': 'idObrebu', 'nazwaWlasna': 'nazwaWlasna', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_wnioski_gmina_Brzezno_20.set('fieldAliases', {'wn_przezn': 'wn_przezn', });
lyr_wnioski_przed_terminem_21.set('fieldAliases', {'wn_przezn': 'wn_przezn', 'nr_wniosku': 'nr_wniosku', });
lyr_wnioski_w_terminie_22.set('fieldAliases', {'wn_przezn': 'wn_przezn', 'nr_wniosku': 'nr_wniosku', });
lyr_wnioski_po_terminie_23.set('fieldAliases', {'wn_przezn': 'wn_przezn', 'nr_wniosku': 'nr_wniosku', });
lyr_wyszukiwanie_24.set('fieldAliases', {'nr_wniosku': 'nr_wniosku', });
lyr_EGB_DzialkaEwidencyjna_18.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idDzialki': 'TextEdit', 'dokumentWlasnosci': 'TextEdit', 'numerKW': 'TextEdit', 'poleEwidencyjne': 'TextEdit', 'poleEwidencyjne_uom': 'TextEdit', 'dokladnoscReprezentacjiPola': 'Range', 'OFU': 'TextEdit', 'OZU': 'TextEdit', 'OZK': 'TextEdit', 'powierzchnia': 'TextEdit', 'powierzchnia_uom': 'TextEdit', 'dodatkoweInformacje': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_EGB_ObrebEwidencyjny_19.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idObrebu': 'TextEdit', 'nazwaWlasna': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_wnioski_gmina_Brzezno_20.set('fieldImages', {'wn_przezn': 'TextEdit', });
lyr_wnioski_przed_terminem_21.set('fieldImages', {'wn_przezn': 'TextEdit', 'nr_wniosku': 'Range', });
lyr_wnioski_w_terminie_22.set('fieldImages', {'wn_przezn': 'TextEdit', 'nr_wniosku': 'TextEdit', });
lyr_wnioski_po_terminie_23.set('fieldImages', {'wn_przezn': 'TextEdit', 'nr_wniosku': 'TextEdit', });
lyr_wyszukiwanie_24.set('fieldImages', {'nr_wniosku': 'TextEdit', });
lyr_EGB_DzialkaEwidencyjna_18.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idDzialki': 'no label', 'dokumentWlasnosci': 'hidden field', 'numerKW': 'hidden field', 'poleEwidencyjne': 'hidden field', 'poleEwidencyjne_uom': 'hidden field', 'dokladnoscReprezentacjiPola': 'hidden field', 'OFU': 'hidden field', 'OZU': 'hidden field', 'OZK': 'hidden field', 'powierzchnia': 'hidden field', 'powierzchnia_uom': 'hidden field', 'dodatkoweInformacje': 'hidden field', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_EGB_ObrebEwidencyjny_19.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idObrebu': 'hidden field', 'nazwaWlasna': 'no label', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_wnioski_gmina_Brzezno_20.set('fieldLabels', {'wn_przezn': 'no label', });
lyr_wnioski_przed_terminem_21.set('fieldLabels', {'wn_przezn': 'inline label - always visible', 'nr_wniosku': 'inline label - always visible', });
lyr_wnioski_w_terminie_22.set('fieldLabels', {'wn_przezn': 'inline label - always visible', 'nr_wniosku': 'header label - always visible', });
lyr_wnioski_po_terminie_23.set('fieldLabels', {'wn_przezn': 'inline label - always visible', 'nr_wniosku': 'inline label - always visible', });
lyr_wyszukiwanie_24.set('fieldLabels', {'nr_wniosku': 'no label', });
lyr_wyszukiwanie_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});