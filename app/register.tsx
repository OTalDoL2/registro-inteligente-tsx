import Button from "@/components/Button";
import Input from "@/components/Input";
import { recordAction } from "@/store/actions";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

export default function Register() {
  const [carregamento, setCarregamento] = useState<String>('');
  const [cidade, setCidade] = useState<String>('');
  const [valor, setValor] = useState<String>('');
  const [dataEntrega, setDataEntrega] = useState<String>('');
  const [observacao, setObservacao] = useState<String>('');
  const [mesInicial, setMesInicial] = useState<String>('');
  const [mesFinal, setMesFinal] = useState<String>('');

  const dispatch = useDispatch();

  function cleanInputs() {
    setCarregamento('')
    setCidade('')
    setDataEntrega('')
    setObservacao('')
    setValor('')
  }

  const showData = () => {
    console.log(dispatch(recordAction.readRecords()))
  }

  const saveRecords = () => {
    dispatch(recordAction.setRecord({
      id: Math.random().toString(36).substring(2, 15),
      carregamento,
      cidade,
      valor,
      dataEntrega,
      observacao
    }));
    cleanInputs()
  }

  return (
    <Container>
      <Box>
        <InputFields>
          <Input label='Carregamento' value={carregamento} setValue={setCarregamento} />
          <Input label='Cidades' value={cidade} setValue={setCidade} />
          <Input label='Valor do Frete' value={valor} setValue={setValor} />
          <Input label='Data da Entrega' value={dataEntrega} setValue={setDataEntrega} />
          <Input label='Observações' value={observacao} setValue={setObservacao} />
        </InputFields>
        <Line>
          <Input size={120} label='Mês Inicial' value={mesInicial} setValue={setMesInicial} />
          <Input size={120} label='Mês Final' value={mesFinal} setValue={setMesFinal} />
        </Line>
        <Button label="Salvar" func={saveRecords} />
        <Button label="Mostra" func={showData} />
        {/* <Line>
      <Button label="Gerar PDF" func={generatePdf} />
    </Line> */}
      </Box>
    </Container>
  );
}


export const Container = styled.View`
    flex: 1;
    backgroundColor: 'aliceblue';
    alignItems: center;
    justifyContent: center;
`

export const Box = styled.View`
    width: 300;
    height: 500;
    alignItems: center;
    justifyContent: center;
    justifyContent: space-around;
`

export const Line = styled.View`
    flexDirection: row;
    justifyContent: space-around;
    paddingTop: 10;
    paddingBottom: 10;
    width: 300;
`

export const InputFields = styled.View`
    justifyContent: space-around;
    paddingTop: 2;
    paddingBottom: 2;
`

