import { View } from "react-native";
import Button from "./Button";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { recordAction } from "@/store/actions";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/RootStackParamList";

// import { ButtonsRow, CardInfo, Container, Text } from "./styles";

interface Props {
    item: any;
}

export default function Card({ item }: Props) {
    const dispatch = useDispatch();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleRemove = (id: string) => {
        dispatch(recordAction.removeRecord(id));
    };
    return (
        <Container>
            <CardInfo>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Text style={{ fontSize: 16 }}>
                        {item.carregamento}
                    </Text>
                    <Text style={{ fontSize: 28 }}>
                        {item.cidade}
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        {item.dataEntrega}
                    </Text>
                </View>




                <Text style={{ fontSize: 18 }}>{item.valor}</Text>

                <Text style={{ width: '50%' }}>{item.observacao}</Text>

            </CardInfo>
            <ButtonsRow >
                <Button buttonType="Card" func={() => navigation.navigate("Edit", { item })} label="Editar" />
                <Button buttonType="Card" label='Deletar' func={() => handleRemove(item.id)} />
            </ButtonsRow>
        </Container>
    );
}



export const Text = styled.Text`
    justifyContent: center;
    alignItems: center;
    `
    
export const Container = styled.View`
    backgroundColor: #ffffff;
    borderWidth: 1.5px;
    borderColor: blue;
    width: 250;
    height: 180;
    marginTop: 10;
    padding: 16px;
    borderRadius: 24px;
    `
    
    

export const ButtonsRow = styled.View`
    justifyContent: center;
    alignItems: center;
    width: 100%;
    flexDirection: row;
    justifyContent: space-around;
    `

export const CardInfo = styled.View`
    width: 100%;
    justifyContent: center;
    alignItems: center;
    `