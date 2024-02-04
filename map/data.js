var AndraPradesh = ["Guntur", "Kadapa", "Krishna", "Prakasam"];
var Assam = ["Biswanath"];
var Bihar = ["Begusarai", "Bhagalpur", "Buxar", "Katihar"];
var Chhattisgarh = ["Bijapur", "Bilaspur", "Durg", "Korba", "Koriya",];
var Gujarat = ["Ahmedabad", "Rajkot", "Surat", "Vadodara"];
var Haryana = ["Faridabad", "Rohtak", "Panipat", "Hisar"];
var HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
var JammuKashmir = ["Jammu"];
var Jharkhand = ["Bokaro", "Dhanbad", "Ranchi", "Jamshedpur"];
var Karnataka = ["Bangalore", "Mysore", "Mangalore", "Gulbarga", "Hubballi-Dharwad"];
var Kerala = ["Kollam", "Thrissur", "Kochi", "Thiruvananthapuram"];
var Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
var Manipur = ["Imphal"];
var Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
var Mizoram = ["Aizawl"];
var Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
var Odisha = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
var Punjab = ["Patiala", "Bathinda", "Jalandhar", "Ludhiana"]
var TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
var Telangana = ["Nizamabad", "Hyderabad", "Khammam", "Karimnagar",];
var Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
var UttarPradesh = ["Kanpur", "Ghaziabad", "Lucknow"];
var Uttarakhand  = ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
var WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
var AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
var Chandigarh = ["Chandigarh"];
var DadraHaveli = ["Dadra Nagar Haveli"];
var DamanDiu = ["Daman","Diu"];
var Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
var Lakshadweep = ["Lakshadweep"];
var Puducherry = ["Karaikal","Mahe","Puducherry","Yanam"];

console.log("WORKING");

var inputState = document.getElementById('inputState')

inputState.addEventListener("change", function(){

    var StateSelected = $(this).val();
  var optionsList;
  var htmlString = "";

  switch (StateSelected) {
    case "Andra Pradesh":
        optionsList = AndraPradesh;
        break;
    case "Arunachal Pradesh":
        optionsList = ArunachalPradesh;
        break;
    case "Assam":
        optionsList = Assam;
        break;
    case "Bihar":
        optionsList = Bihar;
        break;
    case "Chhattisgarh":
        optionsList = Chhattisgarh;
        break;
    case "Goa":
        optionsList = Goa;
        break;
    case  "Gujarat":
        optionsList = Gujarat;
        break;
    case "Haryana":
        optionsList = Haryana;
        break;
    case "Himachal Pradesh":
        optionsList = HimachalPradesh;
        break;
    case "Jammu and Kashmir":
        optionsList = JammuKashmir;
        break;
    case "Jharkhand":
        optionsList = Jharkhand;
        break;
    case  "Karnataka":
        optionsList = Karnataka;
        break;
    case "Kerala":
        optionsList = Kerala;
        break;
    case  "Madya Pradesh":
        optionsList = MadhyaPradesh;
        break;
    case "Maharashtra":
        optionsList = Maharashtra;
        break;
    case  "Manipur":
        optionsList = Manipur;
        break;
    case "Meghalaya":
        optionsList = Meghalaya ;
        break;
    case  "Mizoram":
        optionsList = Mizoram;
        break;
    case "Nagaland":
        optionsList = Nagaland;
        break;
    case  "Orissa":
        optionsList = Orissa;
        break;
    case "Punjab":
        optionsList = Punjab;
        break;
    case  "Rajasthan":
        optionsList = Rajasthan;
        break;
    case "Sikkim":
        optionsList = Sikkim;
        break;
    case  "Tamil Nadu":
        optionsList = TamilNadu;
        break;
    case  "Telangana":
        optionsList = Telangana;
        break;
    case "Tripura":
        optionsList = Tripura ;
        break;
    case  "Uttaranchal":
        optionsList = Uttaranchal;
        break;
    case  "Uttar Pradesh":
        optionsList = UttarPradesh;
        break;
    case "West Bengal":
        optionsList = WestBengal;
        break;
    case  "Andaman and Nicobar Islands":
        optionsList = AndamanNicobar;
        break;
    case "Chandigarh":
        optionsList = Chandigarh;
        break;
    case  "Dadar and Nagar Haveli":
        optionsList = DadraHaveli;
        break;
    case "Daman and Diu":
        optionsList = DamanDiu;
        break;
    case  "Delhi":
        optionsList = Delhi;
        break;
    case "Lakshadeep":
        optionsList = Lakshadeep ;
        break;
    case  "Pondicherry":
        optionsList = Pondicherry;
        break;
}


  for(var i = 0; i < optionsList.length; i++){
    htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
  }
  var districts = document.getElementById('inputDistrict')
  districts.innerHTML = htmlString;

})

// $("#inputState").change(function(){
//   var StateSelected = $(this).val();
//   var optionsList;
//   var htmlString = "";

//   switch (StateSelected) {
//     case "Andra Pradesh":
//         optionsList = AndraPradesh;
//         break;
//     case "Arunachal Pradesh":
//         optionsList = ArunachalPradesh;
//         break;
//     case "Assam":
//         optionsList = Assam;
//         break;
//     case "Bihar":
//         optionsList = Bihar;
//         break;
//     case "Chhattisgarh":
//         optionsList = Chhattisgarh;
//         break;
//     case "Goa":
//         optionsList = Goa;
//         break;
//     case  "Gujarat":
//         optionsList = Gujarat;
//         break;
//     case "Haryana":
//         optionsList = Haryana;
//         break;
//     case "Himachal Pradesh":
//         optionsList = HimachalPradesh;
//         break;
//     case "Jammu and Kashmir":
//         optionsList = JammuKashmir;
//         break;
//     case "Jharkhand":
//         optionsList = Jharkhand;
//         break;
//     case  "Karnataka":
//         optionsList = Karnataka;
//         break;
//     case "Kerala":
//         optionsList = Kerala;
//         break;
//     case  "Madya Pradesh":
//         optionsList = MadhyaPradesh;
//         break;
//     case "Maharashtra":
//         optionsList = Maharashtra;
//         break;
//     case  "Manipur":
//         optionsList = Manipur;
//         break;
//     case "Meghalaya":
//         optionsList = Meghalaya ;
//         break;
//     case  "Mizoram":
//         optionsList = Mizoram;
//         break;
//     case "Nagaland":
//         optionsList = Nagaland;
//         break;
//     case  "Orissa":
//         optionsList = Orissa;
//         break;
//     case "Punjab":
//         optionsList = Punjab;
//         break;
//     case  "Rajasthan":
//         optionsList = Rajasthan;
//         break;
//     case "Sikkim":
//         optionsList = Sikkim;
//         break;
//     case  "Tamil Nadu":
//         optionsList = TamilNadu;
//         break;
//     case  "Telangana":
//         optionsList = Telangana;
//         break;
//     case "Tripura":
//         optionsList = Tripura ;
//         break;
//     case  "Uttaranchal":
//         optionsList = Uttaranchal;
//         break;
//     case  "Uttar Pradesh":
//         optionsList = UttarPradesh;
//         break;
//     case "West Bengal":
//         optionsList = WestBengal;
//         break;
//     case  "Andaman and Nicobar Islands":
//         optionsList = AndamanNicobar;
//         break;
//     case "Chandigarh":
//         optionsList = Chandigarh;
//         break;
//     case  "Dadar and Nagar Haveli":
//         optionsList = DadraHaveli;
//         break;
//     case "Daman and Diu":
//         optionsList = DamanDiu;
//         break;
//     case  "Delhi":
//         optionsList = Delhi;
//         break;
//     case "Lakshadeep":
//         optionsList = Lakshadeep ;
//         break;
//     case  "Pondicherry":
//         optionsList = Pondicherry;
//         break;
// }


//   for(var i = 0; i < optionsList.length; i++){
//     htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
//   }
//   var districts = document.getElementById('inputDistrict')
//   districts.innerHTML = htmlString;

// });