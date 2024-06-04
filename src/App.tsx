import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>
        Click here
      </Button>
    </div>
  );
}

export default App;
