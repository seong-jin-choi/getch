import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

const StackNavigator = createNativeStackNavigator();

const Main = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
    <TouchableOpacity onPress={() => navigate("MyCD")}>
      <Text>MY CD</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("PrivateTerms")}>
      <Text>개인정보 처리약관</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("ServiceTerms")}>
      <Text>서비스 약관</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("GetchInfo")}>
      <Text>Getch 정보</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("MagageAccount")}>
      <Text>계정 관리</Text>
    </TouchableOpacity>
  </View>
);
const MyCD = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <View>
      <Text>MyCD</Text>
    </View>
  </View>
);
const PrivateTerms = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <View>
      <Text>PrivateTerms</Text>
    </View>
  </View>
);
const ServiceTerms = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <View>
      <Text>ServiceTerms</Text>
    </View>
  </View>
);
const GetchInfo = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <View>
      <Text>GetchInfo</Text>
    </View>
  </View>
);

const MagageAccount = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <View>
      <Text>MagageAccount</Text>
    </View>
  </View>
);

const MyInfo = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Main" component={Main} options={{ headerShown: false, title: "돌아가기" }} />
      <StackNavigator.Screen name="MyCD" component={MyCD} options={{ title: "MY CD" }} />
      <StackNavigator.Screen name="PrivateTerms" component={PrivateTerms} options={{ title: "개인정보 처리약관" }} />
      <StackNavigator.Screen name="ServiceTerms" component={ServiceTerms} options={{ title: "서비스 약관" }} />
      <StackNavigator.Screen name="GetchInfo" component={GetchInfo} options={{ title: "Getch 정보" }} />
      <StackNavigator.Screen name="MagageAccount" component={MagageAccount} options={{ title: "계정 관리" }} />
    </StackNavigator.Navigator>
  );
};

export default MyInfo;
