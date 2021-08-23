import {createServer} from 'miragejs'

let students = [
  { id:1, name:'Rhenato Francsico Baraúna'},
  { id:2, name:'Michelle Barboza da Silva Baraúna'}
]

createServer({
  routes() {
    this.namespace = "api";

    this.get("/students", (schema, request) => {
      return { students }
    });

    this.get("/student/:id", (schema, request) => {
      return {
        
      }
    });

    this.post("/student", (schema, request) => {

    });

    this.delete("/student/:id", (schema, request) => {

    });
  }
});