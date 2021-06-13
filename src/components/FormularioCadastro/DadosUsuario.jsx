import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar({email, senha})
    }}>
      <TextField
        value={email}
        onChange={e => setEmail(e.target.value)}
        id='email'
        label='email'
        type='email'
        required
        variant='outlined'
        margin='normal'
        fullWidth />

      <TextField
        value={senha}
        onChange={e => setSenha(e.target.value)}
        id='senha'
        label='senha'
        type='password'
        required
        variant='outlined'
        margin='normal'
        fullWidth />

      <Button
        type='submit'
        variant='contained'
        color='primary'>
        Próximo
      </Button>

    </form>
  )
}

export default DadosUsuario
