var size = 0;
var placement = 'point';

var style_symbol_SW_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("oznaczenie") !== null && resolution > 0 && resolution < 7) {
        labelText = String(feature.get("oznaczenie"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,124,100,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(83,83,83,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
