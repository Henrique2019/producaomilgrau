import React, { Component } from 'react';
import Prod from '../service/Prod';
import TextField from '@mui/material/TextField';
import {  styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';




const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'blue',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});
export default class CreateUser extends Component<any, any> {

    constructor(props: any) {
        super(props)

        this.onChangeUserCidade = this.onChangeUserCidade.bind(this);
        this.onChangeUserQuadricula = this.onChangeUserQuadricula.bind(this);
        this.onChangeUserFinalizada = this.onChangeUserFinalizada.bind(this);
        this.onChangeUserProduçao = this.onChangeUserProduçao.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Cidade: '',
            Quadricula: '',
            Finalizada: '',
            Produçao: ''
        }
    }

    onChangeUserCidade(e: { target: { value: any; }; }) {
        this.setState({ Cidade: e.target.value })
    }

    onChangeUserQuadricula(e: { target: { value: any; }; }) {
      this.setState({ Quadricula: e.target.value })
  }

    onChangeUserFinalizada(e: { target: { value: any; }; }) {
    this.setState({ Finalizada: e.target.value })
}

    onChangeUserProduçao(e: { target: { value: any; }; }) {
        this.setState({ Produçao: e.target.value })
    }

    async onSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()

        const userObject = {
          
            "Cidade": this.state.Cidade,
            "Quadricula": this.state.Quadricula,
            "Finalizada": this.state.DataFinalizada,
            "Produçao": this.state.Produçao,
            
        };
 

       Prod.post('/estoque/cadastro', userObject ).then((res) => { console.log(res.data); alert(`sucess`)}).catch((error) => { console.log(error); alert(`error`)})
        this.setState({ Cidade: '', Quadricula: '', Finalizada: '', Produçao: '' })
    }
    
    

    render() {
        return (
          <div className="grid justify-items-center">
          <div className="text-medra-100 mt-3 w-64 text-center" >
            <h1><b> Preencha o Formulario Abaixo e Clique em Enviar </b> </h1>
          </div>
           <Box
        
        sx={{
          
          display: 'flex',
          gridTemplateColumns: { sm: 'fr 2fr' },
          gap: 2,
          m: 5,
        }}
      >
          
       
            <div className="wrapper grid justify-items-center px-1 ">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group px-1">
                        
                        <CssTextField label="Qual Cidade Voce está" type="text" value={this.state.Cidade} onChange={this.onChangeUserCidade} className="form-control px-1 mt-2" />
                  
                       
                        <CssTextField label="N° Quadricula" value={this.state.Quadricula} placeholder="0" onChange={this.onChangeUserQuadricula} className="form-control px-1 mt-2" />
                    </div>
                    <div className="form-group mt-0.5 px-1">
                        
                        <CssTextField label="Insira a Data" value={this.state.Finalizada} onChange={this.onChangeUserFinalizada} className="form-control px-1 mt-2" />
                    
                        
                        <ValidationTextField label="Adicione a Produção" type="Number"  value={this.state.Produçao} placeholder="0" onChange={this.onChangeUserProduçao} className="form-control px-1 mt-2" />
                    </div>
                    <div className=" form-control px-1 ml-1 mt-2">
                    <Button type="submit" className="btn bg-medra-100 btn-block" variant="contained" endIcon={<SendIcon />}> Adicionar</Button>
                    
                    </div>
                </form>
            </div>
            </Box>
            </div>
        )
    }
}