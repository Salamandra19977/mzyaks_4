Calculation();
Number.MAX_VALUE
function SetFirstData() {
	let n = [60, 50, 7, Number.MAX_VALUE, 10, Number.MAX_VALUE,
	Number.MAX_VALUE, 40, Number.MAX_VALUE, 20, Number.MAX_VALUE,
	10, Number.MAX_VALUE, 30, 30, 100, Number.MAX_VALUE, 80, 90,
	Number.MAX_VALUE];
	console.log("Вхідні дані");
	for (let i = 0; i < n.length; i++) {
		console.log("Номер об'єкту: " + Number(i+1) + " Час до відновлення: " + n[i]);
	}

	return n;
}

function Calculation() {
	let t = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
	let Count = 11;
	let n = SetFirstData();
	let k = [];
	let p1 = [];
	let q1 = [];
	let p = [];
	let q = [];
	let l = [];
	let l2 = [];

	for (let i = 0; i < Count; i++) {
		let K = 0;
		for (let j = 0; j < 20; j++) { 
			if (n[j] <= t[i])
				K++;
				k[i] = K;
		}
	}

	let Tavg = 0;
	let Lsum = 0;
	let Lsum2 = 0;

	for (let i = 0; i < Count; i++) {
		p1[i] = k[i] / 20;
		q1[i] = 1 - p1[i];
		if (i == 0) {
			l[i] = 0;
			l2[i] = 0;
		}
		else {
			l[i] = -Math.log(q1[i]) / t[i];
			l2[i] = -Math.log(p1[i]) / t[i];
			Tavg = Tavg + p1[i] * 10;
		}
		Lsum = Lsum + l[i];
		Lsum2 = Lsum2 + l2[i];
	}
	let Lavg = Lsum / Count;
	let Lavg2 = Lsum2 / Count;

	for (let i = 0; i < Count; i++) {
		q[i] = Math.exp(-(Lavg * t[i]));
		p[i] = 1 - q[i];
	} 

	console.log("Резульати розрахунків");
	 for(let i = 0; i < Count; i++) {
	 	console.log("Місяць: " + t[i] +  " Кількість: " + k[i] + " P*: " + p1[i]
	 		+ " Q*: " + q1[i].toFixed(3) + " P: " + p[i].toFixed(3)
	 		+ " Інтенсивність відновлення: " + l[i].toFixed(3));
	 }

	console.log("Середній час відновлення: " + Math.round(Tavg, 3) + " місяців");
}
