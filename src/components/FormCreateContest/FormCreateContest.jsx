import React, { Component } from "react";
import "./estilo.css";
class FormCreateContest extends Component {
  constructor(props) {
    super(props);
    this.contestName = "";
    this.texto = "";
    this.returnedFromServer = "";

  }
  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.contestName = evento.target.value;

  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;

  }

  async  _createContest(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    //this.props.createContest(this.contestName)
    

    let newContestJSON = {
      email_cw: "emailcw@gmail.com",
      email_fm: "emailcw@gmail.com",
      email_mixed: "emailcw@gmail.com",
      email_ssb: "emailcw@gmail.com",
      finish_date: "Mon, 08 Nov 2021 12:46:00 GMT",
      name: this.contestName,
      start_date: "Mon, 01 Nov 2021 20:08:00 GMT",
      url_to_send_cabrillo: "cabrillo-url-via-react"
    }

    console.log(JSON.stringify(newContestJSON));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContestJSON)
  };
  const response = await fetch('https://teelogbr.herokuapp.com/api/1/contests', requestOptions);
  const data = await response.json();
  this.setState({ Id: data.id });
  
  console.log('PRINTING MSG: ' + data.message);
  console.log('PRINTING ID: ' + data.id);

  alert(data.message + '\n ID:' + data.id)
    

  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._createContest.bind(this)}
      >
        <input
          type="text"
          placeholder="Nome do concurso"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)} />

        <button className="form-cadastro_input form-cadastro_submit">
          Salvar nota
        </button>
      </form>
    );
  }
}

export default FormCreateContest;
