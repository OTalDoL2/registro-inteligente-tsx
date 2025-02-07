import styled from 'styled-components/native';
import Button from "@/components/Button";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";
import Card from "@/components/Card";

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const records = useSelector((state: any) => state.record.records);

  return (
    <Container>
      <Box>
        <List
          data={records}
          keyExtractor={(item : any) => item.id.toString()}
          renderItem={({ item }: { item: any }) => (
            <Card item={item} />
          )}
        />
        <Button label="Registrar" func={() => navigation.navigate('Register')} buttonType="Record" />
      </Box>
    </Container>
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