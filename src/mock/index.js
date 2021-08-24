import {createServer} from 'miragejs'

const CLASSES = [
  { id: 1, name: "Andorinha"},
  { id: 2, name: "Bem-Te-Vi"},
  { id: 3, name: "Sabiá"},
  { id: 4, name: "Canário" },
];

const RELATIONSHIPS = [
  {id:"parent",       label:"Pais"},
  {id:"uncles",       label:"Tios"},
  {id:"grandparents", label:"Avós"},
  {id:"godparents",   label:"Padrinhos"}
];

let students = [
  { id:1, name:'Rhenato Francsico Baraúna'},
  { id:2, name:'Michelle Barboza da Silva Baraúna'}
]

createServer({
  routes() {
    this.namespace = "api";

    this.get("/classes", (schema, request) => {
      return { CLASSES }
    });

    this.get("/relationships", (schema, request) => {
      return { RELATIONSHIPS }
    });

    this.get("/students", (schema, request) => {
      return { students }
    });

    this.get("/student/:id", (schema, request) => {
      return {
        
      }
    });

    this.post("/student", (schema, request) => {
      console.log(JSON.parse(request.requestBody));
    });

    this.delete("/student/:id", (schema, request) => {

    });
  }
});