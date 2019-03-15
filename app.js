 
  var config = {
    apiKey: "zALNdqt4gZDoMRN9oLoL6tPN21VLrAxO",
  
  };

  firebase.initializeApp(config);

  var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = 0;
var frequency = 0;
var currentTime= moment()

setInterval(function(){
        $("#current-time").html(moment(moment()).format("hh:mm:ss"));
    }, 1000);


$("#submit").on("click", function(event) {
  event.preventDefault();


	trainName = $("#trainName").val().trim();

	destination = $("#destination").val().trim();

	firstTrain = $("#firstTrain").val().trim();

	frequency = $("#frequency").val().trim();

  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrain").val("");
  $("#frequency").val("");


  database.ref().push({

	    trainName: trainName,
	    destination: destination,
	    firstTrain: firstTrain,
	    frequency: frequency

	});
});

 

