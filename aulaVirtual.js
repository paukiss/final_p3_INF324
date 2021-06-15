// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;
var geometry;

function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x34495E  , 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
    
    var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.3, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.3, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.3, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );

	migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria.faces.push( new THREE.Face3( 3, 5, 4 ) );
	//migeometria.faces.push( new THREE.Face3( 0, 5, 3 ) );
	migeometria.faces.push( new THREE.Face3( 2, 5, 0 ) );
	migeometria.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria.faces.push( new THREE.Face3( 3, 4, 6 ) );
	

    
    var material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } ); // Material de color rojo
	var mat2 = new THREE.MeshBasicMaterial( { color: 0xFFDC00 } ); // Material de color rojo
	var crema = new THREE.MeshBasicMaterial( {color: 0xEDD24B , side: THREE.DoubleSide} );
	var crema2 = new THREE.MeshBasicMaterial( {color: 0xEDED64 , side: THREE.DoubleSide} );
	var cafeClaro = new THREE.MeshBasicMaterial( {color: 0xE6EE9C, side: THREE.DoubleSide} );
	var cafe = new THREE.MeshBasicMaterial( {color: 0x40350B, side: THREE.DoubleSide} );
	var cafeOscuro = new THREE.MeshBasicMaterial( {color: 0x1B1A14, side: THREE.DoubleSide} );
	var cafeOscuro2 = new THREE.MeshBasicMaterial( {color: 0x6E2C00, side: THREE.DoubleSide} );
	var blanco = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
	var mostaza = new THREE.MeshBasicMaterial( {color: 0x726D02, side: THREE.DoubleSide} );
	var azul = new THREE.MeshBasicMaterial( {color: 0x7EAFF5, side: THREE.DoubleSide} );
	var amarillo = new THREE.MeshBasicMaterial( {color: 0xFFF000, side: THREE.DoubleSide} );
	var negro = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
	var rojo = new THREE.MeshBasicMaterial( {color: 0xFF0000, side: THREE.DoubleSide} );


	var miobjeto = new THREE.Mesh (migeometria, material	); // Crea el objeto

	geometry = new THREE.PlaneGeometry( 1.5, 1);
	var plane = new THREE.Mesh( geometry, cafeClaro );
	plane.translateZ(-1);

	geometry = new THREE.PlaneGeometry( 1.5, 2);
	var floor = new THREE.Mesh( geometry, crema );
	floor.rotation.x = Math.PI /2;
	floor.translateY(0);
	floor.translateZ(0.5);

	geometry = new THREE.BoxGeometry( 0.03, 0.2, 0.02 );
	var machimbre;
	var group = new THREE.Group();
	for (let index = 0; index < 36; index++) {
		machimbre = new THREE.Mesh( geometry, cafe );
		machimbre.position.set(-0.7 + index/25, -0.39, -0.98);
		group.add(machimbre);
	}

	geometry = new THREE.BoxGeometry( 0.03, 1.95, 0.02 );
	var piso = new THREE.Group();
	for (let i = 0; i < 36; i++)
	{
		machimbre = new THREE.Mesh( geometry, cafeOscuro2 );
		machimbre.position.set(-0.705 + i/25, -0.48, 0)
		machimbre.rotation.set(Math.PI/2, 0,0);
		piso.add(machimbre);
	}
	
	
	var pizarra = new THREE.Group();
	// geometry  = new THREE.PlaneGeometry( 1, 0.5);
	// var pizarra = new THREE.Mesh( geometry, blanco );
	// pizarra.position.set(0,0.1,-0.95);

	geometry  = new THREE.PlaneGeometry( 1, 0.5);
	var fondo = new THREE.Mesh( geometry, blanco );
	fondo.position.set(0,0.1,-0.99);
	
	geometry = new THREE.BoxGeometry( 0.03, 0.50, 0.005 );
	var b1 =  new THREE.Mesh( geometry, negro);
	var b2 = b1.clone();
	b1.position.set(0.5,0.1,-0.99);
	b2.position.set(-0.5,0.1,-0.99);
	
	geometry = new THREE.BoxGeometry( 1, 0.03, 0.005 );
	var b3 =  new THREE.Mesh( geometry, negro);
	var b4 = b3.clone();
	b3.position.set(0,-0.15,-0.99);
	b4.position.set(0,0.35,-0.99);
	
	
	pizarra.add(b3);
	pizarra.add(b4);
	
	
	pizarra.add(fondo);
	pizarra.add(b1);
	pizarra.add(b2);
	

	geometry = new THREE.BoxGeometry( 1, 0.09, 0.3 );
	var parada = new THREE.Mesh( geometry, cafeOscuro );
	parada.position.set(0,-0.45,-0.82);
	
	// righWall.rotation.z = Math.PI /3;
	
	// escritorio

	var escritorio = new THREE.Group();

	geometry = new THREE.BoxGeometry( 0.3, 0.015, 0.2 );
	var mesa = new THREE.Mesh( geometry, crema2 );

	geometry = new THREE.BoxGeometry( 0.3, 0.015, 0.2 );
	var subMesa = new THREE.Mesh( geometry, blanco );
	subMesa.position.set(0,-0.05,0);

	geometry = new THREE.BoxGeometry( 0.5, 0.015, 0.23 );
	var pared = new THREE.Mesh( geometry, blanco );
	pared.position.set(-0.16,-0.15, 0);
	pared.rotation.set(0, 0, Math.PI / 2);
	// pared.scale.set(-0.5);

	var pared2 = pared.clone();
	pared2.position.set(0.16, -0.15, 0);
	pared2.scale.set(1,1,1);
	
	geometry = new THREE.BoxGeometry( 0.14, 0.015, 0.23 );
	var paredCPU = new THREE.Mesh( geometry, blanco );
	paredCPU.position.set(0.08, -0.30, 0);
	paredCPU.scale.set(1,1,1);
	

	// let divi = 10;
	geometry = new THREE.SphereGeometry( 0.02, 32, 32 );
	var rueda1 = new THREE.Mesh( geometry, negro );
	rueda2 = rueda1.clone();
	rueda3 = rueda1.clone();
	rueda4 = rueda1.clone();
	
	rueda1.position.set(-0.16,-0.4, 0.1);
	rueda2.position.set(0.16,-0.4, 0.1);
	rueda3.position.set(-0.16,-0.4, -0.1);
	rueda4.position.set(0.16,-0.4, -0.1);
	
	escritorio.add(paredCPU);
	escritorio.add(rueda1);
	escritorio.add(rueda2);
	escritorio.add(rueda3);
	escritorio.add(rueda4);
	
	escritorio.add(pared2);
	escritorio.add(pared);
	escritorio.add(mesa);
	escritorio.add(subMesa);
	
	escritorio.scale.set(1,1,1);
	
	var aula = new THREE.Group();
	// aula.add();
	aula.add(plane);
	aula.add(floor);
	aula.add(machimbre);
	aula.add(group);
	aula.add(piso);
	aula.add(pizarra);
	aula.add(parada);
	aula.scale.set(2,1,4);

	var monitor = new THREE.Group();

	geometry = new THREE.BoxGeometry( 1, 0.6, 0.05);
	var vidrio = new THREE.Mesh( geometry, azul );
	geometry = new THREE.BoxGeometry( 1, 0.6, 0.01);
	var cubierta = new THREE.Mesh( geometry, negro );
	cubierta.position.set(0,0, -0.025);
	geometry = new THREE.BoxGeometry( 0.02, 0.6, 0.05);
	var borde1  = new THREE.Mesh(geometry, negro);
	var borde2  = borde1.clone();
	borde1.position.set(-0.515, 0, 0);
	borde2.position.set(0.515, 0, 0);
	
	geometry = new THREE.BoxGeometry( 1.05, 0.02, 0.05);
	var borde3  = new THREE.Mesh(geometry, negro);
	var borde4  = borde3.clone();
	borde3.position.set(0,0.31,0);
	borde4.position.set(0,-0.31,0);
	
	geometry = new THREE.CylinderGeometry( 0.1, 0.2, 0.1, 8 );
	var base = new THREE.Mesh( geometry, negro );
	base.position.set(0,-0.35,0)


	monitor.add(base);
	monitor.add(cubierta);
	monitor.add(vidrio);
	monitor.add(borde1);
	monitor.add(borde2);
	monitor.add(borde3);
	monitor.add(borde4);

	monitor.scale.set(0.2,0.2,0.2);
	monitor.position.set(0,0.09,0);

	escritorio.add(monitor);

	var teclado = new THREE.Group();
	
	geometry = new THREE.BoxGeometry( 0.25, 0.0060, 0.1 );
	var base2 = new THREE.Mesh( geometry, negro );
	// base2.position.set(-1,0,0);

	teclado.add(base2);
	
	for (let j = 0; j < 3; j++)
	{
		for (let i = 0; i < 10; i++)
		{
			geometry = new THREE.BoxGeometry( 0.01, 0.01, 0.01 );
			var teclas = new THREE.Mesh( geometry, blanco );
			teclas.position.set(-0.09 + i/50, 0.005, -0.03 + j/50);
			teclado.add(teclas)
		}
	}
	geometry = new THREE.BoxGeometry( 0.1, 0.01, 0.01 );
	var espacio  = new THREE.Mesh( geometry, blanco );
	espacio.position.set(0,0.005,0.035); 
	teclado.add(espacio);

	teclado.position.set(0,-0.03,0.05);

	escritorio.add(teclado);


	var mouse = new THREE.Group();
	geometry = new THREE.CylinderGeometry( 0.04, 0.05, 0.04, 10 );
	var fisicoMouse = new THREE.Mesh( geometry, negro );
	fisicoMouse.scale.set(1,1,1.5);
	
	geometry = new THREE.BoxGeometry( 0.02, 0.02, 0.02 );
	var buttonLeft = new THREE.Mesh( geometry, blanco );
	var buttonRight = buttonLeft.clone();
	buttonLeft.position.set(-0.02,0.02,-0.01);
	buttonRight.position.set(0.02,0.02,-0.01);
	
	mouse.add(fisicoMouse);
	mouse.add(buttonLeft);
	mouse.add(buttonRight);
	
	mouse.scale.set(0.5, 0.5, 0.5);
	mouse.position.set(0.08, 0.009, 0.05);

	escritorio.add(mouse);

	var cpu = new THREE.Group();
	geometry = new THREE.BoxGeometry( 0.09, 0.2, 0.17 );
	var case1 = new THREE.Mesh( geometry, negro );
	case1.position.set(0.08, -0.19, 0);
	cpu.add(case1);

	geometry = new THREE.CircleGeometry( 0.01, 32 );
	var circle = new THREE.Mesh( geometry, rojo );
	circle.position.set(0.1,-0.15, 0.09);
	cpu.add( circle );

	escritorio.add(cpu);

	var computadoras = new THREE.Group();
	for (let j = 0; j < 6; j++)
	{
		var pos = 0;
		for (let i = 0; i < 4; i++)
		{
			geometry = new THREE.BoxGeometry( 0.01, 0.01, 0.01 );
			var copia = escritorio.clone();
			if (i == 2)
				pos = 0.5;
			copia.position.set(-0.09 + i/2 + pos, 0.005, -0.03 + j/1);
			computadoras.add(copia);
		}
	}
	computadoras.position.set(-0.9,0,-1.5);
	// base.position.set(0,-0.35,0)
	// SCENE
	

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	scene.add(aula);
	scene.add(computadoras);

	

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();

} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
