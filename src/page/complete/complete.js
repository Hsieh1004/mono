import React from "react";
import "./complete.css";
import { Button, Stack } from "@mui/material";

function App() {
  return (
    <div>
      <div className="Complete">
        <div className="completeArea">
          <img
            className="success"
            src="https://imgur.com/gczuDrA.png"
            alt=""
          ></img>
          <div className="completeTitle">
            <p>登記成功</p>
          </div>
          <div className="completeContent">
            <p>
              鎖櫃抽選時間為
              <br />
              10:00 a.m 12/12
              <br />
              抽籤資訊將會公告至本系統
            </p>
          </div>
        </div>
        <div class="button">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" style={{ width: 380, height: 36 }}>
              完成
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
