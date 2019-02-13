var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewTopics = function(req, res) { 
	var name = req.params.name; 
  	console.log("The project name is: " + name);
  	
  	var i, j;
  	for(i = 0; i < data.groups.length; i++){
  		if(data.groups[i].name == name){
  			j = i;
  		}
  	}
  	console.log(data.groups[j].name);

    res.render('topics', data.groups[j]);
};

exports.submitTask = function(req, res) {
  var name = req.params.name;
  var topic = req.query.topic;
  var time = req.query.time;
  
  var newTopic = {
      "topic": topic,
      "time": time,
      "timeLeft": time
  };
  console.log(name);
  console.log(newTopic);
  var i, j;
  for(i = 0; i < data.groups.length; i++){
    if(data.groups[i].name == name) {
      
      data.groups[i].topics.push(newTopic);
      j=i;
    }
  }

  res.render('topics', data.groups[j]);
};
