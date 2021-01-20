// leaflet maps
//initiating map
var mymap = L.map('mapid', {
    scrollWheelZoom: false
}).setView([52.44, -4], 8);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3dlYnN0ZXIiLCJhIjoiY2tpeDd2ZWprM3F4cDJ5cWpzZnl5bTFtdyJ9.TkVm9dL3HOFz1F9m7fnaCA' //api key
}).addTo(mymap);


//castle markers
var marker;
var mapMarkerGroup = L.layerGroup().addTo(mymap);

function castleMarker(){ //when user clicks on castle button, add these markers to map to show where the castles are
    marker = new L.marker([51.7696, -4.4620]).addTo(mapMarkerGroup).bindPopup('<p>Laugharne Castle</p>'); //Laugharne Castle
    marker = new L.marker([53.1391, -4.2769]).addTo(mapMarkerGroup).bindPopup('<p>Caernarfon Castle</p>'); //Caernarfon Castle
    marker = new L.marker([51.7702, -2.8499]).addTo(mapMarkerGroup).bindPopup('<p>Raglan Castle</p>'); //Raglan Castle
    marker = new L.marker([51.8766, -4.0181]).addTo(mapMarkerGroup).bindPopup('<p>Dinefwr Park and Castle</p>'); //Dinefwr Park and Castle
    marker = new L.marker([51.5931, -2.7423]).addTo(mapMarkerGroup).bindPopup('<p>Caldicot Castle</p>'); //Caldicot Castle
    marker = new L.marker([53.2801, -3.8256]).addTo(mapMarkerGroup).bindPopup('<p>Conwy Castle</p>'); //Conwy Castle
    marker = new L.marker([52.6499, -3.1613]).addTo(mapMarkerGroup).bindPopup('<p>Powis Castle and Garden</p>'); //Powis Castle and Garden
    marker = new L.marker([52.9354, -3.0894]).addTo(mapMarkerGroup).bindPopup('<p>Chirk Castle</p>'); //Chirk Castle
    marker = new L.marker([52.0572, -4.6342]).addTo(mapMarkerGroup).bindPopup('<p>Cilgerran Castle</p>'); //Cilgerran Castle
    marker = new L.marker([51.5761, -3.2202]).addTo(mapMarkerGroup).bindPopup('<p>Caerphilly Castle</p>'); //Caerphilly Castle
}

//mountain markers
function mountainsMarker(){
    marker = new L.marker([53.0932, -3.8017]).addTo(mapMarkerGroup).bindPopup('<p>Snowdonia</p>'); //Snowdonia
    marker = new L.marker([52.4167, -3.5000]).addTo(mapMarkerGroup).bindPopup('<p>Cambrian Mountains</p>'); //Cambrian Mountains
    marker = new L.marker([51.9667, -3.1167]).addTo(mapMarkerGroup).bindPopup('<p>Black Mountain Range</p>'); //Black Mountain Range
}

//slate mines
function slateMineMarkers(){
    marker = new L.marker([53.0053, -3.9404]).addTo(mapMarkerGroup).bindPopup('<p>Llechwedd Slate Quarry</p>'); //Llechwedd Slate Quarry
}

function activitiesMarkers(){
    marker = new L.marker([53.168348464480935, -4.0634022615385765]).addTo(mapMarkerGroup).bindPopup('<p>Zip World Penrhyn Quarry</p>');//Zip World Penrhyn Quarry
    marker = new L.marker([53.1009796051929, -3.7873194172919087]).addTo(mapMarkerGroup).bindPopup('<p>Zip World Fforest</p>');//Zip World Fforest
    marker = new L.marker([53.00517855612724, -3.9397638154469234]).addTo(mapMarkerGroup).bindPopup('<p>Zip World Slate Caverns</p>');//Zip World Slate Caverns
    marker = new L.marker([53.0660435464048, -3.7765642749642025]).addTo(mapMarkerGroup).bindPopup('<p>Go Below Underground Adventures</p>');//Go Below Underground Adventures
    marker = new L.marker([51.66157092432127, -2.6465997866602313]).addTo(mapMarkerGroup).bindPopup('<p>The Wire Zip Slide</p>');//The Wire Zip Slide
    marker = new L.marker([52.02586535740562, -3.2151408480151207]).addTo(mapMarkerGroup).bindPopup('<p>Black Mountain Activities</p>');//Black Mountain Activities
    marker = new L.marker([51.562531273635976, -3.725332444334805]).addTo(mapMarkerGroup).bindPopup('<p>Go Ape Margam (Treetop Challenge, Zip Lines, High Ropes)</p>');//Go Ape Margam (Treetop Challenge, Zip Lines, High Ropes)
    marker = new L.marker([51.781756229608774, -2.528254388504406]).addTo(mapMarkerGroup).bindPopup('<p>Go Ape Forest of Dean (Mallards Pike - Treetop Challenge and Forest Segways)</p>');//Go Ape Forest of Dean (Mallards Pike - Treetop Challenge and Forest Segways)
    marker = new L.marker([51.44886723863433, -3.181802259680882]).addTo(mapMarkerGroup).bindPopup('<p>Cardiff International White Water</p>');//Cardiff International White Water

}

function zooMarkers(){
    marker = new L.marker([53.294632920074, -3.747760530778277]).addTo(mapMarkerGroup).bindPopup('<p>Welsh Mountain Zoo, Colwyn Bay</p>');//Welsh Mountain Zoo, Colwyn Bay
    marker = new L.marker([51.74394105470533, -4.732843630834783]).addTo(mapMarkerGroup).bindPopup('<p>Folly Farm, Pembrokeshire</p>');//Folly Farm, Pembrokeshire
    marker = new L.marker([51.68709497939757, -4.764698657823819]).addTo(mapMarkerGroup).bindPopup('<p>Manor House Wildlife Park, Tenby</p>');//Manor House Wildlife Park, Tenby
    marker = new L.marker([53.23509272508752, -4.186551273109475]).addTo(mapMarkerGroup).bindPopup('<p>Pili Palas Nature World, Anglesey</p>');//Pili Palas Nature World, Anglesey
    marker = new L.marker([51.41432188514447, -3.3077624731755946]).addTo(mapMarkerGroup).bindPopup('<p>Welsh Hawking Centre</p>');//Welsh Hawking Centre
}

function deleteMarkers(){
    mapMarkerGroup.clearLayers(mymap);
}

//on click functions for each marker section
$('.maps-castle-btn').click(function(){
    deleteMarkers();
    castleMarker();
});

$('.maps-mountain-btn').click(function(){
    deleteMarkers();
    mountainsMarker();
});

$('.maps-slate-btn').click(function(){
    deleteMarkers();
    slateMineMarkers();
});

$('.maps-activities-btn').click(function(){
    deleteMarkers();
    activitiesMarkers();
});

$('.maps-zoos-btn').click(function(){
    deleteMarkers();
    zooMarkers();
});