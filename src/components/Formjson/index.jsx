import React from "react";
import ReactDom from "react-dom";
import Form from "react-jsonschema-form";
import "./index.css"

const nameSchema ={
    "title": "receber newsletter",
    "type": "object",
    "required": [
        "name"
    ],
    "properties":{
        "name": {
            "type": "string",
            "title": "Name",
            "default":""
        },
        "email":{
            "type":"string",
            "title":"e-mail",
            "default":""
        },
        "telefono":{
            "type":"number",
            "title":"telefono",
            "default":""
        },
        "datadenascimento":{
            "type":"number",
            "title":"data de nascimento",
            "default":""
        },
    }

};

const NameForm = () => (<Form schema={nameSchema} />);

function Formjson() {
  return (
      <div>
         <h1 class="cen">register</h1>
         <NameForm/> 
      </div>
  );
  }

  export default Formjson;