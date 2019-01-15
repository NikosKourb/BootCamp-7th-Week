/**
 * 
 */

var myCar=new Object();
myCar.brand="KIA";
myCar.model="Picando";
myCar.year=2005;

myCar(brand,model,year) {
	this.brand=brand;
	this.model=model;
	this.year=year;
}

console.log("myCar's brand= "+myCar.brand+"\n"+
		    "        model= "+myCar.model+"\n"+
		    "         year= "+myCar.year+"\n")

alert:alert("myCar's brand= "+myCar.brand+"\n"+
		    "        model= "+myCar.model+"\n"+
		    "         year= "+myCar.year+"\n")

		    
