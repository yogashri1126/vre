//we are using this to put the jquery and make the ajax call, please put data.js in your html

//put jQuery here
//make ajax request $post here

$('#addVol').on('click', function(event) {
      event.preventDefault();

var volunteer= [
first_name: $("#first_name").val.trim(),
last_name: $("#last_name").val.trim(), 
email: $("#email").val.trim(), 
password: $("#password").val.trim(),
phoneNumber: $("#phoneNumber").val.trim(),
address: $("#address").val.trim(), 
city: $("#city").val.trim(),
state: $("#state").val.trim(),
zip: $("#zip").val.trim(),
emerg: $("#emerg").val.trim(),
relationship: $("#relationship").val.trim(),
ePhone: $("#ePhone").val.trim(),
travel: $("#travel").val.trim(),
jan: $("#jan").val.trim(),
feb: $("#feb").val.trim(),
march: $("#march").val.trim();
april: $("#april").val.trim();
may: $("#may").val.trim();
june: $("#june").val.trim(),
july: $("#july").val.trim(),
aug: $("#aug").val.trim(),
sept: $("#sept").val.trim(),
oct: $("#oct").val.trim(),
nov: $("#nov").val.trim(),
dec: $("#dec").val.trim(),
chainsaw: $("#chainsaw").val.trim(),
roapRescueEquip: $("#roapRescueEquip").val.trim(),
comPumperTruck: $("#comPumperTruck").val.trim(),
backhoe: $("#backhoe").vol.trim(),
veteran: $("#veteran").vol.trim(),
ert: $("#ert").val.trim(),
nurse: $("#nurse").val.trim(),
doc: $("#doc").val.trim(),
veterinarian: $("#veterinarian").val.trim(),
vetTech: $("#vetTech").val.trim(),
animTAB: $("#animTAB").val.trim(),
comDriver: $("#trim").val.trim(),
formTextEquip: $("#formTextEquip").val.trim(),
formTextSkill: $("#formTextSkill").val.trim(),
modalNote: $("#modalNote").val.trim()
]
});

$('#signIn').on('click', function(event) {
      event.preventDefault();
      var singIn = [
      username: $("#username").val.trim(),
      password: $("#password").val.trim(),
      ]
  });



$.post("/api/routes", SignIn)

$.post("/api/api-routes", volunteer);
