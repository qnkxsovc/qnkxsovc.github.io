var nodes = new vis.DataSet();
var edges = new vis.DataSet();
var gephiImported;

function loadJSON(path, success, error) {
	// Created by alex
	// Taken from vis.js documentation
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      }
      else {
        error(xhr);
      }
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
}

loadJSON('/assets/college/CollegeGraph.json', redrawAll, function(err) {console.log('error')});

// create a network
var container = document.getElementById('CollegeGraph');
var data = {
	nodes: nodes,
	edges: edges
};
var options = {
nodes: {
  font: {
    face: 'Euclid',
    size: 24
  },
  shape: "box"
},
edges: {
  width: 0.15,
  smooth: {
    type: 'continuous'
  }
},
interaction: {
  tooltipDelay: 200
},
physics: {
  stabilization: false,
  barnesHut: {
    gravitationalConstant: -10000,
    springConstant: 0.001,
    springLength: 400
  }
}
};
var network = new vis.Network(container, data, options);

function redrawAll(gephiJSON) {
	if (gephiJSON.nodes === undefined) {
		gephiJSON = gephiImported;
	}
	else {
		gephiImported = gephiJSON;
	}

	nodes.clear();
	edges.clear();

	var parsed = vis.network.gephiParser.parseGephi(gephiJSON);

// add the parsed data to the DataSets.
nodes.add(parsed.nodes);
edges.add(parsed.edges);
var moveOptions = {
  position: {x:0, y:0},
  scale: 0.2,
  animation: true
}

network.moveTo(moveOptions); // zoom to fit
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1
});