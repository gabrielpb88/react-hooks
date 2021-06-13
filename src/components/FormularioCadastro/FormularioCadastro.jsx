import React, {useState} from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {Typography} from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {

    const [etapaAtual, setEtapaAtual] = useState(0)

    function formularioAtual(estadoAtual) {
        switch (estadoAtual) {
            case 0:
                return <DadosUsuario aoEnviar={aoEnviar} validarCPF={validarCPF}/>;
            case 1:
                return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>;
            case 2:
                return <DadosEntrega/>;
            default:
                return <Typography>Erro ao selecionar formulário</Typography>
        }
    }

    return (
        <>
            {
                formularioAtual(etapaAtual)
            }
        </>
    );
}

export default FormularioCadastro;
