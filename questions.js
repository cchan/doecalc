const g = 9.8;
let questions = [
{
	tags: ["circuits"],
	strs: ["What is the total capacitance in farads of a {n1} farad capacitor and a {n2} farad capacitor in series?",
	       "What is the total resistance in ohms of a {n1} ohm resistor and a {n2} ohm resistor in parallel?",
	       "What is the total inductance in henries of a {n1} henry inductor and a {n2} henry inductor in parallel, but well separated?"],
	ans: (n1, n2) => n1 * n2 / (n1 + n2),
	n1: [1,10], n2: [1,10]
},
{
	tags: ["circuits"],
	strs: ["What is the total capacitance in farads of a {n1} farad capacitor and a {n2} farad capacitor in parallel?",
	       "What is the total resistance in ohms of a {n1} ohm resistor and a {n2} ohm resistor in series?",
	       "What is the total inductance in henries of a {n1} henry inductor and a {n2} henry inductor in series?"],
	ans: (n1, n2) => n1 + n2,
	n1: [1,10], n2: [1,10]
},
{
	tags: ["circuits"],
	strs: ["What is the voltage in volts across a resistor of {n1} ohms with {n2} amperes flowing across it?",
	       "What is the electromotive force in volts driving {n1} amperes through a circuit if its total resistance is {n2} ohms?",
	       "What is the power in watts dissipated by a resistor when {n1} volts drive {n2} amperes of current through it?"],
	ans: (n1, n2) => n1 * n2,
	n1: [1,10], n2: [1,10]
},
{
	tags: ["circuits"],
	strs: ["What is the resistance in ohms of a circuit if {n1} volts drives {n2} amperes through the circuit?",
	       "What is the current in amperes through a resistor of {n2} ohms when a voltage of {n1} volts is placed across it?",
	       "What is the voltage in volts necessary to dissipate {n1} watts with a current of {n2} amperes?",
	       "What is the current in amperes flowing through a circuit connected to a battery of {n2} volts when it is dissipating {n1} watts of power?"],
	ans: (n1, n2) => n1 / n2,
	n1: [1,10], n2: [1,10]
},
{
	tags: ["circuits"],
	strs: ["What is the power in watts dissipated if {V} volts are placed across a resistor of {R} ohms?"],
	ans: (V, R) => V * V / R,
	V: [1,10], R: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the centripetal acceleration in meters per second squared of an object moving around a circle of radius {r} at a velocity of {v} m/s?"],
	ans: (v, r) => v * v / r,
	v: [1,10], r: [1,10]
},
{
	tags: ["circuits"],
	strs: ["What is the power in watts dissipated if {n1} amps are flowing through a resistor of {n2} ohms?"],
	ans: (n1, n2) => n1 * n1 * n2,
	n1: [1,10], n2: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the centripetal acceleration in meters per second squared of an object moving around a circle of radius {n2} meters at an angular velocity of {n1} radians per second?",
	       "What is the moment of inertia in kg&middot;m<sup>2</sup> of a thin hoop of radius {n1} meters and mass {n2} kg?"],
	ans: (n1, n2) => n1 * n1 * n2,
	n1: [1,10], n2: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the kinetic energy in joules of an object of mass {n1} kg moving at {n2} m/s?",
	       "What is the moment of inertia in kg&middot;m<sup>2</sup> around the cylindrical axis of a cylinder of mass {n1} kg, radius {n2} meters, and height {n3} meters?"],
	ans: (n1, n2, n3) => n1 * n2 * n2 / 2,
	n1: [1,10], n2: [1,10], n3: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the gravitational potential energy in joules with respect to the ground of a {m} kg object {h} meters above the ground?"],
	ans: (m, h) => m * g * h,
	m: [1,10], h: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the speed in meters per second of a {m} kg object after falling {h} meters from rest?"],
	ans: (m, h) => sqrt(2 * g * h),
	m: [1,10], h: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["How long in seconds does it take for an object of mass {m} kg to fall {h} meters?"],
	ans: (m, h) => sqrt(2 * h / g),
	m: [1,10], h: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["How many meters does an object of mass {m} kg fall in {t} seconds?"],
	ans: (m, t) => 0.5 * g * t * t,
	m: [1,10], t: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What force of friction in newtons is exerted on a sliding {n2} N object given that the coefficient of kinetic friction is 0.{n1}?"],
	ans: (n1, n2) => n1 * n2 / 10,
	n1: [1,9], n2: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the power in watts of an engine exerting a constant {F}000 N on a car moving at {v} m/s?"],
	ans: (F, v) => F*1000 * v,
	F: [1,10], v: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the force in newtons required to keep an object of mass {m} kg moving at a velocity of {v} m/s in a circle of radius {r} meters?"],
	ans: (m, v, r) => m * v * v / r,
	m: [1,10], v: [1,10], r: [1,10]
},
{
	tags: ["mechanics"],
	strs: ["What is the moment of inertia of a thick cylindrical shell of mass {m} kg with inner radius {r1} meters and outer radius {r2} meters?"],
	ans: (r1, r2, m) => m * (r1*r1 + r2*r2) / 2,
	r1: [1,5], r2: [6,10], m: [1,10]
},
{
	tags: ["quadratics"],
	strs: ["Find the larger root of the quadratic {a}x<sup>2</sup> + {b}x + {c}."],
	init: function(){
		var p1 = rand(-10,10,[0]),//r = p/q, (qx - p) = 0
				q1 = rand(-10,10,[0]),
				p2 = rand(-10,10,[0]),
				q2 = rand(-10,10,[0]);
		
		return {
			a: q1 * q2,
			b: - q1 * p2 - q2 * p1,
			c: p1 * p2,
			ans: Math.max(p1/q1, p2/q2)
		};
	},
},
{
	tags: ["trig"],
	strs: ["Find the {func} of the angle {angle}."],
	init: function() {
		const funcs = ["sine", "cosine", "tangent", "secant", "cosecant", "cotangent"];
		const funcsEval = [Math.sin, Math.cos, Math.tan, x=>1/Math.cos(x), x=>1/Math.sin(x), x=>1/Math.tan(x)];
		const angleDegrees = 15 * Math.floor(Math.random() * 49) - 360;
		let angle = "";
		
		if (Math.random() > 0.5) {
			angle = angleDegrees + "°";
		} else {
			const frac = reduceFraction(angleDegrees, 180);
			if (frac[0] == 0)
				angle = "0";
			else if (frac[0] == 1)
				angle = "π";
			else if (frac[0] == -1)
				angle = "-π";
			else
				angle = frac[0] + "π";
			
			if (frac[1] != 1)
				angle += "/" + frac[1];
		}
		
		const funcIndex = Math.floor(Math.random() * 6);
		
		return {
			func: funcs[funcIndex],
			angle: angle,
			ans: funcsEval[funcIndex](angleDegrees * Math.PI / 180)
		};
	},
},
{
	tags: ["relativity"],
	strs: ["If two spaceships move in opposite directions at 0.{n1}c and 0.{n2}c in the rest frame, what is the relative velocity of one as measured from the other, as a multiple of c?"],
	ans: (n1, n2) => (n1 + n2) / 10 / (1 + n1 * n2 / 100),
	n1: [1,9], n2: [1,9]
},
{
	tags: ["optics.geometric"],
	strs: ["If an object is placed {o} centimeters in front of a converging lens of focal length {f} cm, what is the (signed) image distance?",
	       "If an object is placed {o} centimeters in front of a concave mirror of focal length {f} cm, what is the (signed) image distance?"],
	ans: (o, f) => 1/(1/f - 1/o),
	o: [1,10], f: [1,10]
},
{
	tags: ["optics.geometric"],
	strs: ["How far in front of a converging lens of focal length {f} cm is an object if it produces an image {i} centimeters behind it?",
	       "How far in front of a concave mirror of focal length {f} cm is an object if it produces an image {i} centimeters in front of it?"],
	ans: (i, f) => 1/(1/f - 1/i),
	i: [6,10], f: [1,5]
},
{
	tags: ["optics.geometric"],
	strs: ["What is the focal length of a lens if an object placed {o} centimeters in front of it produces an image {i} centimeters behind it?",
	       "What is the focal length of a concave mirror if an object placed {o} centimeters in front of it produces an image {i} centimeters in front of it?"],
	ans: (o, i) => 1/(1/o + 1/i),
	o: [1,10], i: [1,10]
},
{
	tags: ["optics.geometric"],
	strs: ["What is the (signed) focal length of a lens if an object placed {o} centimeters in front of it produces an image {i} centimeters in front of it?",
	       "What is the (signed) focal length of a mirror if an object placed {o} centimeters in front of it produces an image {i} centimeters behind it?"],
	ans: (o, i) => 1/(1/o - 1/i),
	o: [1,10], i: [1,10]
},
{
	tags: ["optics.geometric"],
	strs: ["What is the magnification of a converging lens with a focal length of {f} cm when an object is placed {o} cm from the lens?"],
	ans: (o, f) => f / (f - o),
	o: [1, 10], f: [1, 10]
},
// Thanks ChatGPT!
{
	tags: ["mechanics"],
	strs: ["A ball of mass {m} kg is thrown vertically upwards with a speed of {v} m/s. What is the maximum height it reaches?"],
	ans: (m, v) => 0.5 * v*v / g,
	m: [1, 10], v: [1, 10]
},
{
	tags: ["thermodynamics"],
	strs: ["A gas with a volume of {V1} m<sup>3</sup> and a pressure of {P}0 kPa undergoes an isothermal expansion to a volume of {V2} m<sup>3</sup>. What is the final pressure of the gas in kPa?"],
	ans: (P, V1, V2) => P*10 * (V1/V2),
	P: [1, 10], V1: [1, 5], V2: [6, 10]
},
{
	tags: ["circuits"],
	strs: ["A wire of length {L1} mm has a resistance of {R} ohms. What is the resistance of a wire of the same material and volume, but of length {L2} mm?"],
	ans: (L1, L2, R) => (L2 / L1)*(L2 / L1) * R,
	L1: [1, 5], L2: [6, 10], R: [1, 10]
},
{
	tags: ["thermodynamics"],
	strs: ["What is the maximum possible efficiency of a heat engine operating between a hot reservoir at a temperature of {Th}00 K and a cold reservoir at a temperature of {Tc}00 K?"],
	ans: (Th, Tc) => 1 - (Tc / Th),
	Th: [6, 10], Tc: [1, 5]
},
{
	tags: ["optics.physical"],
	strs: ["A laser beam with a wavelength of {lambda}0 nm is incident on two slits separated by {d} mm. If the distance between the slits and the screen is {D} m, what is the distance between adjacent bright spots near the center of the interference pattern, in cm?"],
	ans: (lambda, d, D) => lambda * D / d / 1000,
	lambda: [40, 70], d: [1, 10], D: [1, 10]
},
{
	tags: ["mechanics"],
	strs: ["A block of mass {m} kg is attached to a spring with spring constant {k}0 N/m. If the spring is compressed by {x} m and released, what is the maximum speed of the block in m/s?"],
	ans: (m, k, x) => sqrt(k*10 * x*x / m),
	m: [1, 10], k: [1, 10], x: [1, 5]
}
/*,{
	tags: [],
	strs: ["?"],
	ans: (n1, n2) => n1 + n2,
	n1: [1,10], n2: [1,10]
}*/
];