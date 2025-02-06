import { View } from "react-native";
import { Text, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

interface Props {
    label: string; // Texto do botão
    func: () => void; // tipagem utilizada para funções
    buttonType?: string; // Propriedade opcional para definir o tipo do botão
}

export default function Button({ label, func, buttonType }: Props) {
    return (
        <View>
            <ButtonComponent primary={buttonType} onPress={func}>
                <Label>
                    {label}
                </Label>
            </ButtonComponent>
        </View>
    );
}


const ButtonComponent = styled.TouchableOpacity<Props>`
    height: ${(props: Props) => (props.buttonType == 'Card' ? '40' : '50')};
    width: ${(props: Props) => (props.buttonType == 'Card' ? '60' : '120')};
    textAlign: center;
    backgroundColor: blue;
    justifyContent: center;
    borderRadius: 5px;
    marginTop: ${(props: Props) => (props.buttonType == 'Card' ? '30' : '0')};
    marginLeft: ${(props: Props) => (props.buttonType == 'RecordButton' ? '150' : '0')};
`

const Label = styled.Text`
    textAlign: center;
    color: white 
`