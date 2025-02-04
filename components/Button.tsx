import { View } from "react-native";
import { Text, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

interface Props {
    label: string; // Texto do botão
    buttonType?: boolean; // Propriedade opcional para definir o tipo do botão
}

export default function Button({ label, buttonType }: Props) {
    return (
        <View>
            <ButtonComponent primary={buttonType}>
                <Label>
                    {label}
                </Label>
            </ButtonComponent>
        </View>
    );
}


const ButtonComponent = styled.TouchableOpacity<Props>`
    height: 50;
    width: 120;
    textAlign: center;
    backgroundColor: blue;
    justifyContent: center;
    borderRadius: 5px;
    marginLeft: ${(props: Props) => (props.buttonType ? '150' : '0')};
`

const Label = styled.Text`
    textAlign: center;
    color: white 
`