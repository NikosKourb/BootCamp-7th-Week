/**
 * 
 */

var c1=new Object();
Car.brand="KIA";
Car.model="Picando";
Car.year=2005;

function Car(brand,model,year) {
	this.brand=brand;
	this.model=model;
	this.year=year;
	
	this.details=function() {
		return this.brand+", "+this.model+", "+this.year;
	};
}

var c2=new Car("KIA","Picando",2005);
console.log(c2)
alert:alert(c2.brand+" "+c2.model+" "+c2.year);


