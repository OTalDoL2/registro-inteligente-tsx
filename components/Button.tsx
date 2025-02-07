import { View } from "react-native";
import styled from "styled-components/native";

interface Props {
    label: string; // Texto do botão
    func: () => void; // tipagem utilizada para funções
    buttonType?: string; // Propriedade opcional para definir o tipo do botão
}

export default function Button({ label, func, buttonType }: Props) {
    return (
        <View>
            <ButtonComponent buttonClass={buttonType} onPress={func}>
                <Label>
                    {label}
                </Label>
            </ButtonComponent>
        </View>
    );
}

const ButtonComponent = styled.TouchableOpacity<{buttonClass?: string}>`
    height: ${(props:any) => (props.buttonClass == 'Card' ? 40 : 50)};
    width: ${(props:any) => (props.buttonClass == 'Card' ? 60 : 120)};
    marginTop: ${(props:any) => (props.buttonClass == 'Card' ? 30 : 0)};
    marginLeft: ${(props:any) => (props.buttonClass == 'Record' ? 150 : 0)};
    backgroundColor: blue;
    justifyContent: center;
    borderRadius: 5px;
`

const Label = styled.Text`
    textAlign: center;
    color: white 
`