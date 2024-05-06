import { NavigationContainer } from "@react-navigation/native";
import Login from "./compoment/Login";
import Register from "./compoment/Register";
import MyStack from "./routers/MyStack";
import ToDoApp from "./compoment/TodosApp";
import HOME from "./compoment/Home";
const App =()=>{
  return(
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  )
}
export default App