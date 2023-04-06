//JS-объект
let result = {list: []};

//XML-парсер
const parser = new DOMParser();

//XML
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentsNodes = xmlDOM.querySelectorAll("student");

studentsNodes.forEach((element) => {
	let student = new Object();
	const studentFirstName = element.querySelector("first");
	const studentSecondName = element.querySelector("second");
  const studentProf = element.querySelector("prof");
	const studentAge = element.querySelector("age");
	const nameNode = element.querySelector("name");
	const nameLang = nameNode.getAttribute("lang");
	student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
  student.prof = studentProf.textContent;
	student.age = studentAge.textContent;
	student.lang = nameLang;
	result.list.push(student);
});

console.log(result);