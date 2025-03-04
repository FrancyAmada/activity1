import { useState } from "react";
import "./App.css";
import Button from "./components/ButtonComponent";
import Card from "./components/CardComponent";

function App() {
  const [lightState, setLightState] = useState(true);

  const [retrievedPost, setRetrievedPost] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const open_lights = () => {
    setLightState(!lightState);
  };

  const handleRetrievePost = async () => {
    const post = await fetch("http://localhost:3000/api/get/post");
    const data = await post.json();
    setRetrievedPost(true);
    setPostTitle(data.title);
    setPostContent(data.message);
  };

  return (
    <>
      <div className="content">
        <Button label="Open Lights" onClick={() => open_lights()}></Button>
      </div>
      <div className="content">
        <Card
          title="Show the state of the light!"
          description={lightState ? "Light is ON!" : "Light is OFF!"}
        ></Card>
      </div>
      <div className="content">
        <Button
          label="Retrieve Post"
          onClick={() => handleRetrievePost()}
        ></Button>
      </div>
      {retrievedPost ? (
        <div className="content">
          <Card title={postTitle} description={postContent}></Card>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
