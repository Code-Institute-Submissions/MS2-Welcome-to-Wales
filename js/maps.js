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
var marker; //= new Array();

/* var castles = [{'lat':'51.7696', 'long':'-4.4620'},{'lat':'53.1391', 'long':'-4.2769'},{'lat':'51.7702', 'long':'-2.8499'},{'lat':'51.8766', 'long':'-4.0181'},{'lat':'51.5931', 'long':'-2.7423'},{'lat':'53.2801', 'long':'-3.8256'},{'lat':'52.6499', 'long':'-3.1613'},{'lat':'52.9354', 'long':'-3.0894'},{'lat':'52.0572', 'long':'-4.6342'},{'lat':'51.5761', 'long':'-3.2202'}];
var castlePopups = ['Laugharne Castle'];
function castleWrap() {
    for(i=0;i<castles.length;i++){
        var castleMarker = new L.marker([castles[i].lat, castles[i].long]);
        var castlePopupMessage = new L.bindPopup(castlePopups[i]);
        marker.push(castleMarker);
        marker.bindPopup(castlePopupMessage);
        mymap.addLayer(marker[i]);
    }
}

function markerDelAgain() {
    for(i=0;i<castles.length;i++) {
        mymap.removeLayer(marker[i]);
    }  
} */

function castleMarker(){ //when user clicks on castle button, add these markers to map to show where the castles are
    marker = new L.marker([51.7696, -4.4620]).addTo(mymap).bindPopup('<p>Laugharne Castle</p>'); //Laugharne Castle
    marker = new L.marker([53.1391, -4.2769]).addTo(mymap).bindPopup('<p>Caernarfon Castle</p>'); //Caernarfon Castle
    marker = new L.marker([51.7702, -2.8499]).addTo(mymap).bindPopup('<p>Raglan Castle</p>'); //Raglan Castle
    marker = new L.marker([51.8766, -4.0181]).addTo(mymap).bindPopup('<p>Dinefwr Park and Castle</p>'); //Dinefwr Park and Castle
    marker = new L.marker([51.5931, -2.7423]).addTo(mymap).bindPopup('<p>Caldicot Castle</p>'); //Caldicot Castle
    marker = new L.marker([53.2801, -3.8256]).addTo(mymap).bindPopup('<p>Conwy Castle</p>'); //Conwy Castle
    marker = new L.marker([52.6499, -3.1613]).addTo(mymap).bindPopup('<p>Powis Castle and Garden</p>'); //Powis Castle and Garden
    marker = new L.marker([52.9354, -3.0894]).addTo(mymap).bindPopup('<p>Chirk Castle</p>'); //Chirk Castle
    marker = new L.marker([52.0572, -4.6342]).addTo(mymap).bindPopup('<p>Cilgerran Castle</p>'); //Cilgerran Castle
    marker = new L.marker([51.5761, -3.2202]).addTo(mymap).bindPopup('<p>Caerphilly Castle</p>'); //Caerphilly Castle
}

//mountain markers
function mountainsMarker(){
    marker = new L.marker([53.0932, -3.8017]).addTo(mymap).bindPopup('<p>Snowdonia</p>'); //Snowdonia
    marker = new L.marker([52.4167, -3.5000]).addTo(mymap).bindPopup('<p>Cambrian Mountains</p>'); //Cambrian Mountains
    marker = new L.marker([51.9667, -3.1167]).addTo(mymap).bindPopup('<p>Black Mountain Range</p>'); //Black Mountain Range
}

//slate mines
function slateMineMarkers(){
    marker = new L.marker([53.1676, -4.0656]).addTo(mymap).bindPopup('<p>Welsh slate penrhyn quarry</p>');
    marker = new L.marker([52.9976, -3.9693]).addTo(mymap).bindPopup('<p>Cwmorthin Slate Mine</p>');
}

function activitiesMarkers(){
    marker = new L.marker([53.168348464480935, -4.0634022615385765]).addTo(mymap).bindPopup('<p>Zip World Penrhyn Quarry</p>');
    marker = new L.marker([53.1009796051929, -3.7873194172919087]).addTo(mymap).bindPopup('<p>Zip World Fforest</p>');
    marker = new L.marker([53.00517855612724, -3.9397638154469234]).addTo(mymap).bindPopup('<p>Zip World Slate Caverns</p>');
    marker = new L.marker([53.0660435464048, -3.7765642749642025]).addTo(mymap).bindPopup('<p>Go Below Underground Adventures</p>');
    marker = new L.marker([51.66157092432127, -2.6465997866602313]).addTo(mymap).bindPopup('<p>The Wire Zip Slide</p>');
    marker = new L.marker([52.02586535740562, -3.2151408480151207]).addTo(mymap).bindPopup('<p>Black Mountain Activities</p>');
    marker = new L.marker([51.562531273635976, -3.725332444334805]).addTo(mymap).bindPopup('<p>Go Ape Margam (Treetop Challenge, Zip Lines, High Ropes)</p>');
    marker = new L.marker([51.781756229608774, -2.528254388504406]).addTo(mymap).bindPopup('<p>Go Ape Forest of Dean (Mallards Pike - Treetop Challenge and Forest Segways)</p>');
    marker = new L.marker([51.44886723863433, -3.181802259680882]).addTo(mymap).bindPopup('<p>Cardiff International White Water</p>');

}

function zooMarkers(){
    marker = new L.marker([53.294632920074, -3.747760530778277]).addTo(mymap).bindPopup('<p>Welsh Mountain Zoo, Colwyn Bay</p>');
    marker = new L.marker([51.74394105470533, -4.732843630834783]).addTo(mymap).bindPopup('<p>Folly Farm, Pembrokeshire</p>');
    marker = new L.marker([51.68709497939757, -4.764698657823819]).addTo(mymap).bindPopup('<p>Manor House Wildlife Park, Tenby</p>');
    marker = new L.marker([53.23509272508752, -4.186551273109475]).addTo(mymap).bindPopup('<p>Pili Palas Nature World, Anglesey</p>');
    marker = new L.marker([51.41432188514447, -3.3077624731755946]).addTo(mymap).bindPopup('<p>Welsh Hawking Centre</p>');
}

//on clikc functions for each marker section
$('.maps-castle-btn').click(function(){
   castleMarker();
});

$('.maps-mountain-btn').click(function(){
    mountainsMarker();
})

$('.maps-slate-btn').click(function(){
    slateMineMarkers();
})

$('.maps-activities-btn').click(function(){
    activitiesMarkers();
})

$('.maps-zoos-btn').click(function(){
    zooMarkers();
})