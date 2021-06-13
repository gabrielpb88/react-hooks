import React, { useEffect, useState } from 'react'

import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'

function FormularioCadastro({ aoEnviar, validarCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(()=>{
    console.log(dadosColetados)
  })

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados})
    proximo()
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />
  ]

  return (
    <>{formularios[etapaAtual]}</>
  )
}

export default FormularioCadastro
