import React from 'react';
import Restriction from '../../components/Restriction'
import AddAuthorizedPerson from '../AddAuthorizedPerson';
import { Checkbox, InputDate, InputPhone, InputText, InputTextarea, RadioButton, Select } from '../Form';

const availableClasses = [
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
]

class StudentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  handleFormInputChange(e) {
    const inputName = e.name;
    const inputValue = e.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  saveData(e){
    e.preventDefault();
    //TODO - send to a mock api
    console.log(this.state)
  }

  handleExcludeAuthorizedPerson(e){}
  handleAddAuthorizedPerson(e){}

  render() {
    return (
      <form style={{paddingLeft: 50}}>
        <div>
          <div>
            <InputText      
              id="name"
              name="name"
              label="Nome"
              onChange={this.handleFormInputChange.bind(this)}
            />
          </div>
          <div>
            <InputText      
              id="parent_name"    
              name="parentName"   
              label="Nome do Responsável"     
              onChange={this.handleFormInputChange.bind(this)}
            />
          </div>
          <div>
            <InputTextarea  
              id="observations"   
              name="observations" 
              label="Observações Adicionais"  
              onChange={this.handleFormInputChange.bind(this)}
            />
          </div>
        </div>
        
        <div>
          <Restriction 
            hasFoodRestriction={this.state.hasFoodRestriction}
            foodRestrictionDescription={this.state.foodRestrictionDescription}
            onChange={this.handleFormInputChange.bind(this)}
          />
          <div>
            <Checkbox 
              id="photo_and_video_authorized" 
              name="photoAndVideoAuthorization" 
              label="Autorização de fotos e vídeos para uso escolar"
              onChange={this.handleFormInputChange.bind(this)}/>
          </div>
        </div>

        <div>
          <fieldset>
            <legend>Em Caso de emergência avisar</legend>
            <div>
            {
              RELATIONSHIPS.map(relationship => {
                return (
                  <RadioButton  
                    key={relationship.id}
                    id={relationship.id}
                    name="emergencyContact"
                    label={relationship.label}
                    onChange={this.handleFormInputChange.bind(this)}/>
                )
              })
            }
            </div>
            <div>
              <Select 
                id="clazz" 
                name="classNumber" 
                label="Turma" 
                onChange={this.handleFormInputChange.bind(this)}
                options={availableClasses.map(opt => {return {value: opt.id, label: opt.name}})}/>
            </div>
          </fieldset>
        </div>
        
        <div>
          <div>
            <InputDate  
              id="birthday"        
              name="birthday"       
              label="Data de Nascimento"    
              onChange={this.handleFormInputChange.bind(this)}
              value={this.state.birthday}
            />
          </div>
          <div>
            <InputPhone 
              id="contact_phone"   
              name="phone"          
              label="Telefone para Contato" 
              onChange={this.handleFormInputChange.bind(this)}
            />
          </div>
          <div>
            <InputPhone 
              id="emergency_phone" 
              name="emercencyPhone" 
              label="Telefone para Emergências" 
              onChange={this.handleFormInputChange.bind(this)}
            />
          </div>
        </div>

        <fieldset>
          <legend>Lista de pessoas autorizadas a buscar o aluno</legend>
          <div> 
            <AddAuthorizedPerson  
              id="new_authorized_person"
              name="newAuthorizedPerson"
              label="Nova pessoa autorizada"
              onAddition={this.handleAddAuthorizedPerson.bind(this)}
              onExclusion={this.handleExcludeAuthorizedPerson.bind(this)}
              relationshipOptions={RELATIONSHIPS}
            />
          </div>
          <div id="authorized_list"></div>
        </fieldset>
        <input type="submit" value="SALVAR DADOS" onClick={this.saveData.bind(this)}/>
      </form>
    )
  }
}

export default StudentForm;