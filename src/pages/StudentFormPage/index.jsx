import React from 'react';

class StudentFormPage extends React.Component {
  render() {
    return (
      <>
        <header>
          <h2>Formulário de Aluno</h2>
        </header>
        <main>
          {/*
          5. Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos)
          6. Telefone para Emergências
          7. Possui Restrição Alimentar
          8. Descrição das Restrições Alimentares
          9. Autorização de fotos e vídeos da criança para uso escolar
          10. Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia
          11. Turma
          12. Observações adicionais
          */}
          <div>
            <label htmlFor='name'>Nome</label>
            <input id='name' type='text'/>
          </div>
          <div>
            <label htmlFor='bithday'>Data de nascimento</label>
            <input id='birthday' type="date"/>
          </div>
          <div>
            <label htmlFor='parent_name'>Nome do responsável</label>
            <input id='parent_name' type='text'/>
          </div>
          <div>
            <label htmlFor='contact_phone'>Telefone para Contato</label>
            <input id='contact_phone' type="phone"/>
          </div>
          <fieldset>
            <legend>Em Caso de emergência avisar</legend>
            <div>
              <input type="radio" name="emergency_contact" id="parents_rb" />
              <label htmlFor='parents_rb'>Pais</label>

              <input type="radio" name="emergency_contact" id="uncles_rb" />
              <label htmlFor='uncles_rb'>Tios</label>
              
              <input type="radio" name="emergency_contact" id="grandparents_rb" />
              <label htmlFor='grandparents_rb'>Avós</label>

              <input type="radio" name="emergency_contact" id="godparents_rb" />
              <label htmlFor='godparents_rb'>Padrinhos</label>
            </div>

            <label htmlFor='emergency_phone'>Telefone para Emergência</label>
            <input id='emergency_phone' type="phone"/>
          </fieldset>
          <fieldset>
            <legend>Possui restrição alimentar</legend>
            <div>
              <input type="radio" name="food_restriction" id="food_restriction_yes" />
              <label htmlFor='food_restriction_yes'>Sim</label>

              <input type="radio" name="food_restriction" id="food_restriction_no" />
              <label htmlFor='food_restriction_no'>Não</label>
            </div>

            <label htmlFor='food_restriction_desctiption'>Descrição das Restrições Alimentares</label>
            <textarea id='foor_restriction_description'></textarea>
          </fieldset>

          <fieldset>
            <legend>Autorização de fotos e vídeos para uso escolar</legend>
            <input type="radio" name="photo_and_video_authorization" id="photo_and_video_authorization_authorized" />
            <label htmlFor='photo_and_video_authorization_authorized'>Autorizado</label>

            <input type="radio" name="photo_and_video_authorization" id="photo_and_video_authorization_not_authorized" />
            <label htmlFor='photo_and_video_authorization_not_authorized'>Não autorizado</label>
          </fieldset>

          <div>
            <label htmlFor='parent_name'>Nome do responsável</label>
            <input id='parent_name' type='text'/>
          </div>

          <fieldset>
            <legend>Lista de pessoas autorizadas a buscar o aluno</legend>
            <div>
              <label htmlFor='add_authorized'>Adicionar</label>
              <input id='add_authorized' type='text' placeholder="Nova pessoa autorizada"/>
            </div>
            <div id="authorized_list"></div>
          </fieldset>

          <div>
            <label htmlFor='classNumber'>Turma</label>
            <input id='classNumber' type='text'/>
          </div>

          <label htmlFor='observation'>Observações Adicionais</label>
          <textarea id='observations'></textarea>
        </main>
      </>
    )
  }
}

export default StudentFormPage;