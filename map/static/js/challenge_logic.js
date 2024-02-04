// const { response } = require("express");

var url = './js/data.json';
var datac = [{ "name": "Mumbai City", "state": "Maharashtra", "lat": "19.022200000000055", "lon": "72.86630000000008" }, { "name": "Delhi", "state": "Delhi", "lat": "28.666667", "lon": "77.216667" }, { "name": "Bangalore", "state": "Karnataka", "lat": "12.983333", "lon": "77.583333" }, { "name": "Hyderabad", "state": "Telangana", "lat": "17.375278", "lon": "78.474444" }, { "name": "Ahmedabad", "state": "Gujarat", "lat": "23.033333", "lon": "72.616667" }, { "name": "Chennai", "state": "Tamil Nadu", "lat": "13.083333", "lon": "80.283333" }, { "name": "Kolkata", "state": "West Bengal", "lat": "22.569722", "lon": "88.369722" }, { "name": "Surat", "state": "Gujarat", "lat": "20.966667", "lon": "72.9" }, { "name": "Pune", "state": "Maharashtra", "lat": "18.533333", "lon": "73.866667" }, { "name": "Jaipur", "state": "Rajasthan", "lat": "24.583333", "lon": "86.85" }, { "name": "Lucknow", "state": "Uttar Pradesh", "lat": "26.85", "lon": "80.916667" }, { "name": "Kanpur", "state": "Uttar Pradesh", "lat": "26.466667", "lon": "80.35" }, { "name": "Nagpur", "state": "Maharashtra", "lat": "23.3", "lon": "82.3" }, { "name": "Indore", "state": "Madhya Pradesh", "lat": "22.716667", "lon": "75.833333" }, { "name": "Thane", "state": "Maharashtra", "lat": "19.2", "lon": "72.966667" }, { "name": "Bhopal", "state": "Madhya Pradesh", "lat": "23.266667", "lon": "77.4" }, { "name": "Visakhapatnam", "state": "Andhra Pradesh", "lat": "17.7", "lon": "83.3" }, { "name": "Pimpri-Chinchwad", "state": "Maharashtra", "lat": "18.6279288", "lon": "73.8009829" }, { "name": "Patna", "state": "Bihar", "lat": "23.3", "lon": "82.666667" }, { "name": "Vadodara", "state": "Gujarat", "lat": "22.3", "lon": "73.2" }, { "name": "Ghaziabad", "state": "Uttar Pradesh", "lat": "28.666667", "lon": "77.433333" }, { "name": "Ludhiana", "state": "Punjab", "lat": "30.9", "lon": "75.85" }, { "name": "Agra", "state": "Uttar Pradesh", "lat": "27.183333", "lon": "78.016667" }, { "name": "Nashik", "state": "Maharashtra", "lat": "20.0110224", "lon": "73.7903373" }, { "name": "Faridabad", "state": "Haryana", "lat": "28.433333", "lon": "77.316667" }, { "name": "Meerut", "state": "Uttar Pradesh", "lat": "28.983333", "lon": "77.7" }, { "name": "Rajkot", "state": "Gujarat", "lat": "25.731111", "lon": "75.5925" }, { "name": "Kalyan-Dombivali", "state": "Maharashtra", "lat": "19.235433", "lon": "73.129889" }, { "name": "Vasai-Virar", "state": "Maharashtra", "lat": "19.4258788", "lon": "72.8224901" }, { "name": "Varanasi", "state": "Uttar Pradesh", "lat": "25.333333", "lon": "83" }, { "name": "Srinagar", "state": "Jammu and Kashmir", "lat": "30.216667", "lon": "78.783333" }, { "name": "Aurangabad", "state": "Maharashtra", "lat": "26.596", "lon": "79.9701" }, { "name": "Dhanbad", "state": "Jharkhand", "lat": "23.8", "lon": "86.45" }, { "name": "Amritsar", "state": "Punjab", "lat": "31.633056", "lon": "74.865556" }, { "name": "Navi Mumbai", "state": "Maharashtra", "lat": "19.033049", "lon": "73.029662" }, { "name": "Allahabad", "state": "Uttar Pradesh", "lat": "25.45", "lon": "81.85" }, { "name": "Ranchi", "state": "Jharkhand", "lat": "23.35", "lon": "85.333333" }, { "name": "Howrah", "state": "West Bengal", "lat": "22.589167", "lon": "88.310278" }, { "name": "Coimbatore", "state": "Tamil Nadu", "lat": "10.9925", "lon": "76.961389" }, { "name": "Jabalpur", "state": "Madhya Pradesh", "lat": "23.166667", "lon": "79.95" }, { "name": "Gwalior", "state": "Madhya Pradesh", "lat": "26.223611", "lon": "78.179167" }, { "name": "Vijayawada", "state": "Andhra Pradesh", "lat": "16.516667", "lon": "80.616667" }, { "name": "Jodhpur", "state": "Rajasthan", "lat": "26.286667", "lon": "73.03" }, { "name": "Madurai", "state": "Tamil Nadu", "lat": "9.933333", "lon": "78.116667" }, { "name": "Raipur", "state": "Chhattisgarh", "lat": "30.316667", "lon": "78.1" }, { "name": "Kota", "state": "Rajasthan", "lat": "29.825278", "lon": "78.671389" }, { "name": "Biswanath", "state": "Assam", "lat": "26.183333", "lon": "91.733333" }, { "name": "Chandigarh", "state": "Chandigarh", "lat": "30.7343", "lon": "76.7933" }, { "name": "Solapur", "state": "Maharashtra", "lat": "17.683333", "lon": "75.916667" }, { "name": "Hubballi-Dharwad", "state": "Karnataka", "lat": "15.364708", "lon": "75.123955" }, { "name": "Bareilly", "state": "Uttar Pradesh", "lat": "28.35", "lon": "79.416667" }, { "name": "Moradabad", "state": "Uttar Pradesh", "lat": "28.833333", "lon": "78.783333" }, { "name": "Mysore", "state": "Karnataka", "lat": "12.307222", "lon": "76.649722" }, { "name": "Gurgaon", "state": "Haryana", "lat": "27.6928", "lon": "79.6766" }, { "name": "Aligarh", "state": "Uttar Pradesh", "lat": "27.883333", "lon": "78.083333" }, { "name": "Jalandhar", "state": "Punjab", "lat": "23.9", "lon": "78.433333" }, { "name": "Tiruchirappalli", "state": "Tamil Nadu", "lat": "10.805", "lon": "78.685556" }, { "name": "Bhubaneswar", "state": "Orissa", "lat": "20.233333", "lon": "85.833333" }, { "name": "Salem", "state": "Tamil Nadu", "lat": "15.7", "lon": "73.916667" }, { "name": "Mira-Bhayandar", "state": "Maharashtra", "lat": "19.295233", "lon": "72.854390\t" }, { "name": "Warangal", "state": "Telangana", "lat": "18", "lon": "79.583333" }, { "name": "Thiruvananthapuram", "state": "Kerala", "lat": "8.506944", "lon": "76.956944" }, { "name": "Guntur", "state": "Andhra Pradesh", "lat": "16.3", "lon": "80.45" }, { "name": "Bhiwandi", "state": "Maharashtra", "lat": "19.3", "lon": "73.066667" }, { "name": "Saharanpur", "state": "Uttar Pradesh", "lat": "29.966667", "lon": "77.55" }, { "name": "Gorakhpur", "state": "Uttar Pradesh", "lat": "26.755", "lon": "83.373889" }, { "name": "Bikaner", "state": "Rajasthan", "lat": "28.016667", "lon": "73.3" }, { "name": "Amravati", "state": "Maharashtra", "lat": "20.933333", "lon": "77.75" }, { "name": "Noida", "state": "Uttar Pradesh", "lat": "28.5726442", "lon": "77.3547609" }, { "name": "Jamshedpur", "state": "Jharkhand", "lat": "22.8", "lon": "86.183333" }, { "name": "Bhilai", "state": "Chhattisgarh", "lat": "21.216667", "lon": "81.433333" }, { "name": "Cuttack", "state": "Orissa", "lat": "20.5", "lon": "85.833333" }, { "name": "Firozabad", "state": "Uttar Pradesh", "lat": "27.15", "lon": "78.416667" }, { "name": "Kochi", "state": "Kerala", "lat": "9.966667", "lon": "76.233333" }, { "name": "Bhavnagar", "state": "Gujarat", "lat": "21.766667", "lon": "72.15" }, { "name": "Dehradun", "state": "Uttarakhand", "lat": "30.3255646", "lon": "78.0436813" }, { "name": "Durgapur", "state": "West Bengal", "lat": "24.75", "lon": "87.733333" }, { "name": "Asansol", "state": "West Bengal", "lat": "24.233333", "lon": "87.283333" }, { "name": "Nanded", "state": "Maharashtra", "lat": "19.15", "lon": "77.333333" }, { "name": "Kolhapur", "state": "Maharashtra", "lat": "16.7", "lon": "74.216667" }, { "name": "Ajmer", "state": "Rajasthan", "lat": "26.45", "lon": "74.633333" }, { "name": "Gulbarga", "state": "Karnataka", "lat": "17.333333", "lon": "76.833333" }, { "name": "Jamnagar", "state": "Gujarat", "lat": "22.466667", "lon": "70.066667" }, { "name": "Ujjain", "state": "Madhya Pradesh", "lat": "23.183333", "lon": "75.766667" }, { "name": "Loni", "state": "Uttar Pradesh", "lat": "28.75", "lon": "77.283333" }, { "name": "Siliguri", "state": "West Bengal", "lat": "26.716111", "lon": "88.423611" }, { "name": "Jhansi", "state": "Uttar Pradesh", "lat": "25.433333", "lon": "78.583333" }, { "name": "Ulhasnagar", "state": "Maharashtra", "lat": "19.216667", "lon": "73.15" }, { "name": "Nellore", "state": "Andhra Pradesh", "lat": "14.433333", "lon": "79.966667" }, { "name": "Jammu", "state": "Jammu and Kashmir", "lat": "32.733333", "lon": "74.866667" }, { "name": "Sangli-Miraj & Kupwad", "state": "Maharashtra", "lat": "16.860446", "lon": "74.565518" }, { "name": "Belgaum", "state": "Karnataka", "lat": "15.866667", "lon": "74.5" }, { "name": "Mangalore", "state": "Karnataka", "lat": "12.863889", "lon": "74.835278" }, { "name": "Ambattur", "state": "Tamil Nadu", "lat": "13.076667", "lon": "80.088611" }, { "name": "Tirunelveli", "state": "Tamil Nadu", "lat": "8.733333", "lon": "77.7" }, { "name": "Malegaon", "state": "Maharashtra", "lat": "20.55", "lon": "74.533333" }, { "name": "Gaya", "state": "Bihar", "lat": "24.783333", "lon": "85" }, { "name": "Jalgaon", "state": "Maharashtra", "lat": "21.048611", "lon": "76.534444" }, { "name": "Udaipur", "state": "Rajasthan", "lat": "26.6978", "lon": "79.9216" }, { "name": "Maheshtala", "state": "West Bengal", "lat": "22.508621", "lon": "88.2532182" }, { "name": "Tirupur", "state": "Tamil Nadu", "lat": "11.1", "lon": "77.35" }, { "name": "Davanagere", "state": "Karnataka", "lat": "14.4596984", "lon": "75.9289654951128" }, { "name": "Kozhikode", "state": "Kerala", "lat": "11.25", "lon": "75.766667" }, { "name": "Akola", "state": "Maharashtra", "lat": "24.766667", "lon": "74.2" }, { "name": "Kurnool", "state": "Andhra Pradesh", "lat": "15.833333", "lon": "78.05" }, { "name": "Rajpur Sonarpur", "state": "West Bengal", "lat": "22.449089", "lon": "88.391473" }, { "name": "Bokaro", "state": "Jharkhand", "lat": "23.783333", "lon": "85.966667" }, { "name": "South Dumdum", "state": "West Bengal", "lat": "22.610000", "lon": "88.400000" }, { "name": "Bellary", "state": "Karnataka", "lat": "15.15", "lon": "76.933333" }, { "name": "Patiala", "state": "Punjab", "lat": "30.326667", "lon": "76.400278" }, { "name": "Gopalpur", "state": "West Bengal", "lat": "24.833333", "lon": "87.8" }, { "name": "Agartala", "state": "Tripura", "lat": "23.836389", "lon": "91.275" }, { "name": "Bhagalpur", "state": "Bihar", "lat": "26.169722", "lon": "83.872778" }, { "name": "Muzaffarnagar", "state": "Uttar Pradesh", "lat": "29.466667", "lon": "77.683333" }, { "name": "Bhatpara", "state": "West Bengal", "lat": "22.871389", "lon": "88.408889" }, { "name": "Panihati", "state": "West Bengal", "lat": "22.694167", "lon": "88.374444" }, { "name": "Latur", "state": "Maharashtra", "lat": "18.4", "lon": "76.583333" }, { "name": "Dhule", "state": "Maharashtra", "lat": "20.9", "lon": "74.783333" }, { "name": "Rohtak", "state": "Haryana", "lat": "28.9", "lon": "76.566667" }, { "name": "Korba", "state": "Chhattisgarh", "lat": "22.35", "lon": "82.683333" }, { "name": "Bhilwara", "state": "Rajasthan", "lat": "25.35", "lon": "74.633333" }, { "name": "Brahmapur", "state": "Orissa", "lat": "19.316667", "lon": "84.783333" }, { "name": "Muzaffarpur", "state": "Bihar", "lat": "26.116667", "lon": "85.4" }, { "name": "Ahmednagar", "state": "Maharashtra", "lat": "19.083333", "lon": "74.733333" }, { "name": "Mathura", "state": "Uttar Pradesh", "lat": "27.5", "lon": "77.683333" }, { "name": "Kollam", "state": "Kerala", "lat": "8.880556", "lon": "76.591667" }, { "name": "Avadi", "state": "Tamil Nadu", "lat": "13.115556", "lon": "80.101667" }, { "name": "Rajahmundry", "state": "Andhra Pradesh", "lat": "16.983333", "lon": "81.783333" }, { "name": "Kadapa", "state": "Andhra Pradesh", "lat": "14.466667", "lon": "78.816667" }, { "name": "Kamarhati", "state": "West Bengal", "lat": "22.671111", "lon": "88.374722" }, { "name": "Bilaspur", "state": "Chhattisgarh", "lat": "22.083333", "lon": "82.15" }, { "name": "Shahjahanpur", "state": "Uttar Pradesh", "lat": "27.883333", "lon": "79.916667" }, { "name": "Bijapur", "state": "Karnataka", "lat": "18.8", "lon": "80.816667" }, { "name": "Rampur", "state": "Uttar Pradesh", "lat": "23.283333", "lon": "85.433333" }, { "name": "Shivamogga (Shimoga)", "state": "Karnataka", "lat": "13.929930", "lon": "75.568101" }, { "name": "Chandrapur", "state": "Maharashtra", "lat": "19.6", "lon": "83.883333" }, { "name": "Junagadh", "state": "Gujarat", "lat": "21.516667", "lon": "70.466667" }, { "name": "Thrissur", "state": "Kerala", "lat": "10.516667", "lon": "76.216667" }, { "name": "Alwar", "state": "Rajasthan", "lat": "27.566667", "lon": "76.6" }, { "name": "Bardhaman", "state": "West Bengal", "lat": "23.240556", "lon": "87.869444" }, { "name": "Kulti", "state": "West Bengal", "lat": "23.733333", "lon": "86.85" }, { "name": "Kakinada", "state": "Andhra Pradesh", "lat": "16.933333", "lon": "82.216667" }, { "name": "Nizamabad", "state": "Telangana", "lat": "26.050556", "lon": "83.058889" }, { "name": "Parbhani", "state": "Maharashtra", "lat": "19.266667", "lon": "76.783333" }, { "name": "Tumkur", "state": "Karnataka", "lat": "13.342222", "lon": "77.101667" }, { "name": "Hisar", "state": "Haryana", "lat": "29.166667", "lon": "75.716667" }, { "name": "Ozhukarai", "state": "Puducherry", "lat": "11.948880", "lon": "79.712141" }, { "name": "Bihar Sharif", "state": "Bihar", "lat": "25.183333", "lon": "85.516667" }, { "name": "Panipat", "state": "Haryana", "lat": "29.388889", "lon": "76.968056" }, { "name": "Darbhanga", "state": "Bihar", "lat": "26.166667", "lon": "85.9" }, { "name": "Bally", "state": "West Bengal", "lat": "15.166667", "lon": "74.033333" }, { "name": "Aizawl", "state": "Mizoram", "lat": "23.724444", "lon": "92.7175" }, { "name": "Dewas", "state": "Madhya Pradesh", "lat": "22.966667", "lon": "76.066667" }, { "name": "Ichalkaranji", "state": "Maharashtra", "lat": "16.7", "lon": "74.466667" }, { "name": "Tirupati", "state": "Andhra Pradesh", "lat": "13.65", "lon": "79.416667" }, { "name": "Karnal", "state": "Haryana", "lat": "29.683333", "lon": "76.983333" }, { "name": "Bathinda", "state": "Punjab", "lat": "30.2081076", "lon": "74.9485371" }, { "name": "Jalna", "state": "Maharashtra", "lat": "24.0988", "lon": "79.2137" }, { "name": "Barasat", "state": "West Bengal", "lat": "22.684167", "lon": "88.441111" }, { "name": "Kirari Suleman Nagar", "state": "Delhi", "lat": "28.701638", "lon": "77.047811" }, { "name": "Purnia", "state": "Bihar", "lat": "24.516667", "lon": "87.133333" }, { "name": "Satna", "state": "Madhya Pradesh", "lat": "24.583333", "lon": "80.833333" }, { "name": "Mau", "state": "Uttar Pradesh", "lat": "25.941667", "lon": "83.561111" }, { "name": "Sonipat", "state": "Haryana", "lat": "28.983333", "lon": "77.016667" }, { "name": "Farrukhabad", "state": "Uttar Pradesh", "lat": "27.4", "lon": "79.566667" }, { "name": "Sagar", "state": "Madhya Pradesh", "lat": "22.066667", "lon": "82" }, { "name": "Rourkela", "state": "Orissa", "lat": "22.2", "lon": "84.883333" }, { "name": "Durg", "state": "Chhattisgarh", "lat": "21.183333", "lon": "81.283333" }, { "name": "Imphal", "state": "Manipur", "lat": "24.79920000000004", "lon": "93.94800000000004" }, { "name": "Ratlam", "state": "Madhya Pradesh", "lat": "23.316667", "lon": "75.066667" }, { "name": "Hapur", "state": "Uttar Pradesh", "lat": "28.716667", "lon": "77.783333" }, { "name": "Anantapur", "state": "Andhra Pradesh", "lat": "26.829", "lon": "79.5342" }, { "name": "Arrah", "state": "Bihar", "lat": "25.566667", "lon": "84.666667" }, { "name": "Karimnagar", "state": "Telangana", "lat": "27.7974", "lon": "79.2581" }, { "name": "Etawah", "state": "Uttar Pradesh", "lat": "26.7769", "lon": "79.0239" }, { "name": "Ambernath", "state": "Maharashtra", "lat": "19.2015607", "lon": "73.2004771" }, { "name": "North Dumdum", "state": "West Bengal", "lat": "22.652080", "lon": "88.419070" }, { "name": "Bharatpur", "state": "Rajasthan", "lat": "27.1268", "lon": "79.3921" }, { "name": "Begusarai", "state": "Bihar", "lat": "25.416667", "lon": "86.133333" }, { "name": "New Delhi", "state": "Delhi", "lat": "28.6", "lon": "77.2" }, { "name": "Gandhidham", "state": "Gujarat", "lat": "23.083333", "lon": "70.133333" }, { "name": "Baranagar", "state": "West Bengal", "lat": "22.643333", "lon": "88.365278" }, { "name": "Tiruvottiyur", "state": "Tamil Nadu", "lat": "13.157778", "lon": "80.304167" }, { "name": "Puducherry", "state": "Puducherry", "lat": "11.93", "lon": "79.83" }, { "name": "Sikar", "state": "Rajasthan", "lat": "27.616667", "lon": "75.15" }, { "name": "Thoothukudi", "state": "Tamil Nadu", "lat": "8.783333", "lon": "78.133333" }, { "name": "Rewa", "state": "Madhya Pradesh", "lat": "27.9161", "lon": "79.0231" }, { "name": "Mirzapur", "state": "Uttar Pradesh", "lat": "25.15", "lon": "82.583333" }, { "name": "Raichur", "state": "Karnataka", "lat": "16.2", "lon": "77.366667" }, { "name": "Pali", "state": "Rajasthan", "lat": "29.85", "lon": "78.543889" }, { "name": "Khammam", "state": "Telangana", "lat": "17.25", "lon": "80.15" }, { "name": "Vizianagaram", "state": "Andhra Pradesh", "lat": "18.116667", "lon": "83.416667" }, { "name": "Katihar", "state": "Bihar", "lat": "25.533333", "lon": "87.583333" }, { "name": "Haridwar", "state": "Uttarakhand", "lat": "29.966667", "lon": "78.166667" }, { "name": "Sri Ganganagar", "state": "Rajasthan", "lat": "29.916667", "lon": "73.883333" }, { "name": "Karawal Nagar", "state": "Delhi", "lat": "28.728310", "lon": "77.276926" }, { "name": "Nagercoil", "state": "Tamil Nadu", "lat": "8.193889", "lon": "77.431389" }, { "name": "Mango", "state": "Jharkhand", "lat": "13.22526165", "lon": "79.1055442299247" }, { "name": "Bulandshahr", "state": "Uttar Pradesh", "lat": "28.4", "lon": "77.85" }, { "name": "Thanjavur", "state": "Tamil Nadu", "lat": "10.8", "lon": "79.15" }]



var inputDistrict = document.getElementById('inputDistrict');
var longitude = 72.86630000000008;
// var longitude;
var latitude = 19.022200000000055;
// var latitude;

window.onload = function () {
  latilong();
};

inputDistrict.addEventListener('change', function () {
  var val = inputDistrict.value;
  var flag = 0;
  for (i = 0; i <= datac.length; i++) {
    if (val == datac[i].name) {
      longitude = datac[i].lon;
      latitude = datac[i].lat;
      flag = 1;
      break;
    }
  }
  if (flag == 0) {

    console.log("Not Found");
  }

})


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  accessToken: API_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  accessToken: API_KEY
});

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets,
  "Light": light
};


// var greenIcon = L.icon({
//   iconUrl: 'https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.png',

//   iconSize: [38, 38], // size of the icon
//   shadowSize: [50, 64], // size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });


// var greenIcon = L.icon({
//   iconUrl: 'https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.png',
//   iconSize: [38, 38],
//   shadowSize: [50, 64],
//   // iconAnchor: [22, 94],
//   iconAnchor: [20, 90],
//   shadowAnchor: [4, 62],
//   popupAnchor: [-3, -76],
//   // Set zIndexOffset to ensure the icon appears above other layers
//   zIndexOffset: 1000
// });

var greenIcon = L.icon({
  iconUrl: 'https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.png',
  iconSize: [38, 38],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
  zIndexOffset: 10000  // Set higher zIndex
});

// Create the three layers for the map
let earthquakes = new L.layerGroup();
let tectonicPlates = new L.layerGroup();
let majorEarthquakes = new L.layerGroup();

let overlays = {
  // "Earthquakes": earthquakes, 
  "Tectonic Plates": tectonicPlates,
  // "Major Earthquakes": majorEarthquakes
};
var nearby_calamities = [];
var j = 0;



L.Circle.include({
  contains: function (latLng) {
    return this.getLatLng().distanceTo(latLng) < this.getRadius();
  }
});

let map;
var circle;

function latilong() {

  if (map) {
    map.remove();
  }


  console.log("+++++++++++++++++++++++");
  console.log(latitude);
  console.log(longitude);
  console.log(inputDistrict.value);

  document.getElementById("region1").innerHTML = inputDistrict.value;

  map = L.map("mapid", {
    center: [latitude, longitude],
    zoom: 10,
    layers: [streets]
  });

  // circle = L.circle([latitude, longitude], 5000).addTo(map);
  circle = L.circle([latitude, longitude], 5000, { interactive: true, zIndex: 1 }).addTo(map);
  

  map.fitBounds(circle.getBounds())
  L.control.layers(baseMaps, overlays).addTo(map);


  majorQuakeData = '/map/landslide.json'

  d3.json(majorQuakeData).then(function (data) {

    function styleInfo(feature) {
      return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.properties.mag),
        color: "#ff0000",
        border: "#000000",
        radius: 5,
        stroke: true,
        weight: 0.1
      };
    }

    function getColor(magnitude) {
      if (magnitude >= 4) {
        return "red";
      }
      if (magnitude < 4) {
        return "red";
      }
    };

    for (let i = 0; i < data.features.length; i++) {
      var result = (circle.contains([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]])) ? 'inside' : 'outside';

      if (result == 'inside') {
        var near = []
        near['latitude'] = data.features[i].geometry.coordinates[1];
        near['longitude'] = data.features[i].geometry.coordinates[0];
        near['city'] = inputDistrict.value
        near['calamity'] = "landslide";
        nearby_calamities[j] = near;
        j++;

      }

    }
    L.geoJson(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
      },
      style: styleInfo,
      zIndex: 500,
      onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>Title:</b> " + feature.properties.event_title + "<br><b>Location:</b> " + feature.properties.Shape + "<br><b>Description:</b> " + feature.properties.event_description + "<br><b>Landslide Trigger:</b> " + feature.properties.landslide_trigger + "<br><b>Source Link:</b> " + feature.properties.source_link);
      }

    }).addTo(majorEarthquakes);

  });
  majorEarthquakes.addTo(map);


  var nmajorQuakeData = '/map/flood.json'

  d3.json(nmajorQuakeData).then(function (data) {
    function styleInfo(feature) {
      return {
        opacity: 1,
        fillOpacity: 1,
        color: "#000000",
        border: "#000000",
        radius: 5,
        stroke: true,
        weight: 0.1
      };
    }

    for (let i = 0; i < data.features.length; i++) {
      var result = (circle.contains([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]])) ? 'inside' : 'outside';

      if (result == 'inside') {
        var near = []
        near['latitude'] = data.features[i].geometry.coordinates[1];
        near['longitude'] = data.features[i].geometry.coordinates[0];
        near['calamity'] = "flood";
        near['city'] = inputDistrict.value
        nearby_calamities[j] = near;
        j++;

      }
    }

    L.geoJson(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
      },
      zIndex: 500,
      style: styleInfo,
      onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>Title:</b> " + feature.properties.event_title + "<br><b>Location:</b> " + feature.properties.Shape + "<br><b>Description:</b> " + feature.properties.event_description + "<br><b>Landslide Trigger:</b> " + feature.properties.landslide_trigger + "<br><b>Source Link:</b> " + feature.properties.source_link);
      }

    }).addTo(majorEarthquakes);

  });
  majorEarthquakes.addTo(map);



  majorQuakeData = '/map/map.json'

  d3.json(majorQuakeData).then(function (data) {

    function styleInfo(feature) {
      return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.properties.mag),
        color: "#000fff",
        radius: 5,
        stroke: true,
        weight: 0.5
      };
    }

    function getColor(magnitude) {

      if (magnitude >= 4) {
        return "blue";
      }
      if (magnitude < 4) {
        return "blue";
      }
    };

    function getRadius(magnitude) {
      if (magnitude === 0) {
        return 1;
      }
      return magnitude * 4;
    }



    const geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    };

    var circleERT = L.circle([latitude, longitude], 5000).addTo(map);

    for (let i = 0; i < data.length; i++) {
      var result = (circle.contains([data[i].geometry.coordinates[1], data[i].geometry.coordinates[0]])) ? 'inside' : 'outside';

      if (result == 'inside') {
        var near = []
        near['latitude'] = data[i].geometry.coordinates[1];
        near['longitude'] = data[i].geometry.coordinates[0];
        near['city'] = inputDistrict.value
        near['calamity'] = "EarthQuake";
        nearby_calamities[j] = near;
        j++;

      }
    }

    L.geoJson(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      },
      zIndex: 1000,
      style: styleInfo,
      onEachFeature: function (feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.Shape);
      }

    }).addTo(majorEarthquakes);

  });
  majorEarthquakes.addTo(map);



  var legend = L.control({
    position: "bottomright"
  });

  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend"),
      magnitudes = [
        "EarthQuake", "Landslides", "Floods"],
      colors = [
        "#0000ff",
        "#ff0000",
        "#000000",

      ];
    for (var i = 0; i < magnitudes.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> " +
        magnitudes[i] + "<br>";
    }
    return div;
  };

  legend.addTo(map);

  plateData = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"

  d3.json(plateData).then(function (data) {
    L.geoJson(data, {
      fillOpacity: 1,
      color: "blue",
      fillColor: "blue",
      weight: 2
    }).addTo(tectonicPlates);
  });

  tectonicPlates.addTo(map);


  console.log(nearby_calamities);


  fetch('/map/PREVENTION.json')           //api for the get request
    .then(response => response.json())
    .then(function (data) {

      for (let i = 0; i < data.preventions.length; i++) {
        // console.log(data);

        if (data.preventions[i].region == nearby_calamities[0].city) {
          var precaution = document.getElementById('precaution1')
          precaution.innerHTML = data.preventions[i].prevention;
        }
      }
    });


}