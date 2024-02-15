import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const Nav = createNativeStackNavigator();
const TabBar = () => {
  return (
    <Nav.Navigator initialRouteName="Todo" screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
    </Nav.Navigator>
  );
};
export default TabBar;
