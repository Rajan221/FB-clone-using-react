import "./App.css";
import React from "react";
import Navbar from "./MyComponents/Navbar";
// import AddPost from "./MyComponents/AddPost";
import Details from "./MyComponents/Details";
import Posts from "./MyComponents/Posts";
import Story from "./MyComponents/Story";

function App() {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#222", color: "#ccc" }}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Details />
          <div style={{ margin: "20px" }}>
            <Story />
            <Posts />
          </div>
          <div style={{ maxWidth: "300px", overflowY: "scroll" }}>
            i am side pannel Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis impedit necessitatibus expedita eum et aperiam nisi,
            earum exercitationem mollitia possimus tempora assumenda, dolor
            blanditiis! Suscipit quis quisquam enim iste quos. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Unde exercitationem omnis
            corrupti modi pariatur, vero incidunt sed expedita impedit nam nobis
            repellat alias fugit deserunt recusandae atque magni dolorum autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            impedit necessitatibus expedita eum et aperiam nisi, earum
            exercitationem mollitia possimus tempora assumenda, dolor
            blanditiis! Suscipit quis quisquam enim iste quos. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Unde exercitationem omnis
            corrupti modi pariatur, vero incidunt sed expedita impedit nam nobis
            repellat alias fugit deserunt recusandae atque magni dolorum autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            impedit necessitatibus expedita eum et aperiam nisi, earum
            exercitationem mollitia possimus tempora assumenda, dolor
            blanditiis! Suscipit quis quisquam enim iste quos. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Unde exercitationem omnis
            corrupti modi pariatur, vero incidunt sed expedita impedit nam nobis
            repellat alias fugit deserunt recusandae atque magni dolorum autem.
            i am side pannel Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis impedit necessitatibus expedita eum et aperiam nisi,
            earum exercitationem mollitia possimus tempora assumenda, dolor
            blanditiis! Suscipit quis quisquam enim iste quos. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Unde exercitationem omnis
            corrupti modi pariatur, vero incidunt sed expedita impedit nam nobis
            repellat alias fugit deserunt recusandae atque magni dolorum autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            impedit necessitatibus expedita eum et aperiam nisi, earum
            exercitationem mollitia possimus tempora assumenda, dolor
            blanditiis! Suscipit quis quisquam enim iste quos. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Unde exercitationem omnis
            corrupti modi pariatur, vero incidunt sed expedita impedit nam nobis
            repellat alias fugit deserunt recusandae atque magni dolorum autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            impedit necessitatibus expedita eum et aperiam nisi, earum
            exercitationem mollitia possimus tempora assumenda, dolor
            blanditiis! Suscipit quis quisquam enim iste quos. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Unde exercitationem omnis
            corrupti modi pariatur, vero incidunt sed expedita impedit nam nobis
            repellat alias fugit deserunt recusandae atque magni dolorum autem.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
