import { StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "./RootStackParamList";

interface Props {
  route: any,
  navigation: any
}

type EditScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Edit'>;
type EditScreenRouteProp = RouteProp<RootStackParamList, 'Edit'>;

export default function Edit() {
  const navigation = useNavigation<EditScreenNavigationProp>();
  const route = useRoute<EditScreenRouteProp>();
  const recordProps = route.params['item'];

  const [carregamento, setCarregamento] = useState(recordProps["carregamento"]);
  const [cidade, setCidade] = useState(recordProps["cidade"]);
  const [valor, setValor] = useState(recordProps["valor"]);
  const [dataEntrega, setDataEntrega] = useState(recordProps["dataEntrega"]);
  const [observacao, setObservacao] = useState(recordProps["observacao"]);

  const dispatch = useDispatch();

  const updateRecord = () => {
    dispatch(recordAction.updateRecord({
      id: recordProps['id'],
      carregamento,
      cidade,
      valor,
      dataEntrega,
      observacao
    }));
    navigation.goBack();
  }
  return (
    <View>
      <Container>
        <Box>
          <View>
            <Input label='Carregamento' value={carregamento} setValue={setCarregamento} />
            <Input label='Cidades' value={cidade} setValue={setCidade} />
            <Input label='Valor do Frete' value={valor} setValue={setValor} />
            <Input label='Data da Entrega' value={dataEntrega} setValue={setDataEntrega} />
            <Input label='Observações' value={observacao} setValue={setObservacao} />
          </View>
          <Button label="Salvar" func={updateRecord} />
        </Box>
      </Container>
    </View>



  );
}

import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { recordAction } from "@/store/actions";

export const Container = styled.View`
    alignItems: center;
    justifyContent: center;
    `;

export const Box = styled.View`
    width: 300;
    height: 600;
    alignItems: center;
    justifyContent: space-around;
    `
