import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from 'styled-components/native';
import Button from "@/components/Button";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter()
  // const { registro } = useSelector((rootReducer) => rootReducer.registroReducer);
  const { registro } = useSelector((appReducer : any) => appReducer.register);
  return (

    <Container>
      <Box>
        {/* <List
          data={registro}
          keyExtractor={(item : any) => item.id.toString()}
          renderItem={({ item }) => (
            <Card item={item} />
          )}
        /> */}
        <Button label="Registrar" func={() => router.push('/register')} buttonType />
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
