const jsonString = `
{
	"list": [
	 {
	  "name": "Petr",
	  "age": "20",
	  "prof": "mechanic"
	 },
	 {
	  "name": "Vova",
	  "age": "60",
	  "prof": "pilot"
	 }
	]
   }
   `;
    

	//Получение данных
	let data = JSON.parse(jsonString);
	
    let list = data.list;
	
	let result = {list: []};
	let objList = new Object();
	    
	list.forEach(function(element) {
		objList = element;

        result.list.push(objList);

	});
	console.log(result);
