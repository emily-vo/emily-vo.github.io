
function populate() {			
	var body = document.body;
	var html = document.documentElement;
	var canvasWidth = window.innerWidth;
	// var height = Math.max(body.scrollHeight, body.offsetHeight, 
 //               html.clientHeight, html.scrollHeight, html.offsetHeight); 

	var canvasHeight = body.scrollHeight;

	console.log(canvasHeight);
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, canvasWidth/canvasHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer( {antialias: true});
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xffffff, 1);
	renderer.domElement.setAttribute("id", "polys");
	var rend = document.getElementById("polys"); 
	var background = document.getElementById("background"); 
	if (background && rend) { background.removeChild(rend); }
	if (background) background.appendChild( renderer.domElement );
	renderer.domElement.style.position = 'absolute';
	var lights = [];
	lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
	lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
	lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

	lights[ 0 ].position.set( 0, 200, 0 );
	lights[ 1 ].position.set( 100, 0, 100 );
	lights[ 1 ].position.set( -100, -100, 100 );
	//lights[ 2 ].position.set( - 100, - 200, - 100 );

	scene.add( lights[ 0 ] );
	scene.add( lights[ 1 ] );
	scene.add( lights[ 2 ] );


	var rotVel = [];
	var meshes = [];
	var flatMat = new THREE.MeshPhongMaterial( { color: 0xedeff2, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1});
	flatMat.shading = THREE.FlatShading;
	var lineMat = new THREE.LineBasicMaterial( { color: 0x5c5d5e, linewidth: 2 } );
	var range = 100;
	var heightRange = 20;
	var xRange = 5;
	var scale = 0.2;
	var i = 0;
 	for (var x = -xRange; x < xRange; x += scale * 3) {
 		for (var y = -heightRange; y < heightRange; y += 1.5) {
 			for (var z = -7.5; z < -5; z += 4) {
 				if (Math.random() < 0.8) {
 					var geometry = new THREE.IcosahedronGeometry( Math.random()*scale + .1, 0);
					meshes[i] = new THREE.Mesh( geometry, flatMat );
					var geo = new THREE.EdgesGeometry( meshes[i].geometry ); // or 	WireframeGeometry
					var wireframe = new THREE.LineSegments( geo, lineMat );
					meshes[i].add(wireframe);
					meshes[i].position.x = x + 3*Math.random() - 0.5;
					meshes[i].position.y = y + 3*Math.random() - 0.5;
					meshes[i].position.z = Math.random();
					rotVel[i] = new THREE.Vector3(Math.random() / range - 1/range/2, Math.random()	 / 	range	- 1/range/2, Math.random() / range - 1/range/2);
					scene.add( meshes[i]);
					i++;
 				}
			}
 		}	
	}
	
	

	camera.position.z = 10;

	var render = function () {
		for (var i = 0; i < meshes.length; i++) {
			meshes[i].rotation.x += rotVel[i].x;
			meshes[i].rotation.y += rotVel[i].y;
			meshes[i].rotation.z += rotVel[i].z;
		}
		requestAnimationFrame( render );

		renderer.render(scene, camera);
	};

	render();
}
populate();
window.addEventListener("resize", populate);