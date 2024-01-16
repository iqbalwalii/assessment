import Form from "./components/Form";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
