import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from 'styled-components/native';

export default function Home() {
  const router = useRouter()
  const registro: any = [];
  const item: any = [];
  return (

    <Container>
      <Box>
        {/* <List
          data={registro}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card item={item} />
          )}
        /> */}
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text>
            Registrar
          </Text>
        </TouchableOpacity>

        {/* <Button label="Novo Registro" router.push('/register')} optionalStyle={{ marginLeft: 150 }} /> */}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // box: {
  //   width: 300;
  //   height: 500;
  //   alignItems: center;
  //   justifyContent: center,
  //   justifyContent: space-around,
  // }



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

const Input = styled.TextInput`
  background-color: #c2c4c2;
  border: 1px solid black;
`;


const List = styled.FlatList`
  width: 250;
  height: 420;
  marginBottom: 50;
  alignSelf: center;
`;
