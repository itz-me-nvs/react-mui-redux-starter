import { Avatar, Button } from "@mui/material";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state: any) => state.todo).todos;
  console.log(counter);

  return (
    <>
      <div className="bg-red-600 w-full">
        {counter.map((item: any) => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </div>

      <h3>Material Components</h3>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </>
  );
}

export default App;
