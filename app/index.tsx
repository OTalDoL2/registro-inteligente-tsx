import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from 'styled-components/native';
import Button from "@/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";
import Card from "@/components/Card";
import { AppState } from "@/store";
// import <AppState></AppState>

interface Item {
  id: string;
  carregamento: string;
  cidade: string;
  dataEntrega: string;
  observacao: string;
  valor: string;
}

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // const { registro } = useSelector((rootReducer) => rootReducer.registroReducer);
  // const record = useSelector((appReducer : any) => appReducer.register);

  // const record = dispatch(recordAction.readRecords());

  // const { record } = useSelector((state: any) => state.record)
  const records = useSelector((state: any) => state.record.records);
  // const recordData: Item[] = record;

  return (

    <Container>
      <Box>
      {/* <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    /> */}

        <List
          data={records}
          keyExtractor={(item : any) => item.id.toString()}
          renderItem={({ item }: { item: any }) => (
            <Card item={item} />
          )}
        />
        <Button label="Registrar" func={() => navigation.navigate('Register')} buttonType="RecordButton" />
      </Box>
    </Container>


    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Edit app/index.tsx to edit this screen.</Text>
    //   <TouchableOpacity onPress={() => router.push('/register')}>
    //       <Text>
    //         Go to Details
    //       </Text>
    //     </TouchableOpacity>
    // </View>
  );
}



const Container = styled.View`
  flex: 1;
  backgroundColor: 'aliceblue';
  alignItems: center;
  justifyContent: center;
`;

const Box = styled.View`
  width: 300;
  height: 600;
`;


const List = styled.FlatList`
  width: 250;
  height: 420;
  marginBottom: 50;
  alignSelf: center;
`;
