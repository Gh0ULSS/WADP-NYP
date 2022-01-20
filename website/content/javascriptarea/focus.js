

//add row 

function addRow() {
	
	var table = document.getElementById('myTable');
	var lastRow = table.rows.length; 
	var iteration = lastRow;
	var row = table.insertRow(lastRow);
	
	var cellLeft = row.insertCell(0);
	var el = document.createElement('input');
	el.type = 'text'; 
	el.className = 'module' ;
	
	
	cellLeft.appendChild(el); 
	
	
	var cellRight = row.insertCell(1);
	var el2 = document.createElement('input'); 
	el2.type = 'number';
	el2.className ='credithours';
	
	el2.min ="1";
	el2.max="30";
	
	cellRight.appendChild(el2);
	
	
	var cellSelect = row.insertCell(2); 
	var sel = document.createElement('select');
	sel.className = 'grade';
	sel.options[0] = new Option('Select' , '0');
	sel.options[1] = new Option('A' , 4.0); 
	sel.options[2] = new Option ('B+' , 3.5);
	sel.options[3] = new Option ('B' , 3.0 );
	sel.options[4] = new Option ('C+' , 2.5 );
	sel.options[5] = new Option ('C' , 2.0 );
	sel.options[6] = new Option ('D+' , 1.5 );
	sel.options[7] = new Option ('D' , 1.0 );
	sel.options[8] = new Option ('F' , 0.0 );
	
	
	cellSelect.appendChild(sel);
	
}

//remove row
function removeRow() {
	
	var tbl = document.getElementById('myTable');
	var lastRow = tbl.rows.length;
	if (lastRow > 2) { 
		tbl.deleteRow(lastRow - 1);
	}
}
	
//GPA calc
function GPACal(){
	var a = document.getElementById("myForm"); 
	var b = document.getElementById("myTable").rows.length; //Get how many rows(how many modules)
	var c = 0; //Total (Module Grade Point x Module Credit Value) 
	var z = 0; // Total Module Credit 

	var e= 0; //the index for each cells
	
	for (var i =0;i<b-1;i++){ 
		
		for(var d=0;d<2;d++){
			e=e+1;
				
			
		}
		z = parseFloat(z)+parseFloat(a.elements[e].value);
		c=parseFloat(c)+(a.elements[e].value * a.elements[e].value);
		
		
		e=e+1; //add index each time it loops, so can get the next index. 

	}
	var totalscore= parseFloat(c)/parseFloat(z);
	totalscore = totalscore.toFixed(2);
	
	
	document.getElementById("cGPAs").innerHTML = totalscore;
	
	document.getElementById("myModalz").style.display="block";//get div to pop up over page
	var x = window.screen.availWidth/2 - 150;
	var y = window.screen.availHeight/2 - 150;
	
}

// Function to find module that affects GPA the most. 

function affectGPA() {
	
	var numrows = document.getElementById("myTable").rows.length;
	var formm = document.getElementById("myForm");
	var tableee = document.getElementById("myTable");
	var modules = document.getElementsByClassName("module");
	var grades = document.getElementsByClassName("grade").value;
	var creditHour = document.getElementsByClassName("credithours").value;
	
	var moduleArr = new Array();
	var gradesArr = new Array();
	var hoursArr = new Array();
	
	var firstcol = 0; //index of cells
	var secondcol = 1;
	var thirdcol= 2;
	
	
	
	// adding the first rows values to the respective arrays */
	moduleArr.push(formm.elements[firstcol].value);
	hoursArr.push(formm.elements[secondcol].value);
	gradesArr.push(formm.elements[thirdcol].value);
	
	// this will add the values starting from the second row to the
	// respective arrays 
	for(var i=1;i<numrows;i++){
		firstcol += 3;
		moduleArr.push(formm.elements[firstcol].value);
		secondcol += 3;
		hoursArr.push(formm.elements[secondcol].value);
		thirdcol += 3;
		gradesArr.push(formm.elements[thirdcol].value);
		
	}
	
	var lowestGrade = gradesArr[0];
	var highestHour = hoursArr[0];
	var highestModule = moduleArr[0];
	
	var z = 0;    //Number of modules with the lowest grade. 
	var x = 0;    //Lowest Grade
	var d = 0;
	var g; //what will be displayed.
	 
	// This loop finds lowest grade and the number of modules with the lowest grade. 
	for(var a = 0; a<gradesArr.length; a++) {
		
		
		if (lowestGrade >= gradesArr[a]) {
				lowestGrade = gradesArr[a];
				x = lowestGrade;
				z++;
			}	
		
	}

	
	//This loop finds the module with the most hours(thus affecting GPA),
	//that has the lowest grade. 
	for(a = 0; a<gradesArr.length; a++) {
		
		for(d = 0; d < z ; d++ ) {
			
			if (lowestGrade === gradesArr[a]) {
				
				if (highestHour <= hoursArr[a]) {
					highestHour = hoursArr[a];
					g = moduleArr[a];
				}
				
				else {
					g = highestModule;
					
				}
			}
		
		}
	}
	
	document.getElementById("affectGPAz").innerHTML = g;
	
	document.getElementById("myModal").style.display="block";//get div to pop up over page
	var x = window.screen.availWidth/2 - 150;
	var y = window.screen.availHeight/2 - 150;
}

function closeModal() {
	document.getElementById("myModal").style.display="none";
	modal.style.display = "none";
}

function closeModalz() {
	document.getElementById("myModalz").style.display="none";
	modal.style.display = "none";
}


