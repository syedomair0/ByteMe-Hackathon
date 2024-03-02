import React from "react"
import "./styles.css"
import { Stack } from "./components/stack"
import styled from "@emotion/styled"



export default function App() {
  const Wrapper = styled(Stack)`
    background: #1f2937;
    position: relative;
  `;

  const Item = styled.div`
    background: #f9fafb;
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: ${() => {
      let rotation = Math.random() * (5 - -5) + -5;
      return `rotate(${rotation}deg)`;
    }};
  `;

  const handleSwipeLeft = () => {
    // Logic to swipe left
    console.log("Swiped left");
  };

  // Event handler for swiping right
  const handleSwipeRight = () => {
    // Logic to swipe right
    console.log("Swiped right");
  };

   return (
    <div className="App">
      <Wrapper onVote={(item, vote) => console.log(item.props, vote)}>
        <Item data-value="waffles" whileTap={{ scale: 1.15 }}>
          🧇
        </Item>
        <Item data-value="pancakes" whileTap={{ scale: 1.15 }}>
          🥞
        </Item>
        <Item data-value="donuts" whileTap={{ scale: 1.15 }}>
          🍩
        </Item>
      </Wrapper>

      <button onClick={handleSwipeLeft} style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>Swipe Left</button>

      {/* Swipe right button */}
      <button onClick={handleSwipeRight} style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>Swipe Right</button>
    </div>
  );
}