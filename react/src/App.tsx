import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
