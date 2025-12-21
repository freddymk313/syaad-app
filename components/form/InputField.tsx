import { TextInput, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface InputFieldProps {
  Icon: React.FC<SvgProps>;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric' | 'decimal-pad' | 'visible-password';
}

const InputField: React.FC<InputFieldProps> = ({
  Icon,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false
}) => (
  <View className="flex-row items-center bg-[#DFEFF8] rounded-3xl px-4 py-2 ios:py-4 mb-4">
    <Icon width={20} height={20} color="#6B7280" className="mr-3" />
    <TextInput
      className="flex-1 text-base text-gray-800"
      placeholder={placeholder}
      placeholderTextColor="#9CA3AF"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  </View>
);

export default InputField;