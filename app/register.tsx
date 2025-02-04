import { StyleSheet, Text, View } from "react-native";

export default function Register() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>

  // <Container>
  // <Box>
  //   <InputFields>
  //     <Input label='Carregamento' value={carregamento} setValue={setCarregamento} />
  //     <Input label='Cidades' value={cidade} setValue={setCidade} />
  //     <Input label='Valor do Frete' value={valor} setValue={setValor} />
  //     <Input label='Data da Entrega' value={dataEntrega} setValue={setDataEntrega} />
  //     <Input label='Observações' value={observacao} setValue={setObservacao} />
  //   </InputFields>
  //     <Line>
  //       <Input size={120} label='Mês Inicial' setValue={setMesInicial} />
  //       <Input size={120} label='Mês Final' setValue={setMesFinal} />
  //     </Line>
  //   <Line>
  //     <Button label="Salvar" func={handleRegistra} />
  //     <Button label="Gerar PDF" func={generatePdf} />
  //   </Line>
  // </Box>
  // </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
