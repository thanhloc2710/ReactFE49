import React from 'react';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import BaiTapThucHanhLayout from './BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  // chứa trong return
  return (
    <div className="App">
      {/* <BaiTapLayout1 /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <BaiTapThucHanhLayout /> */}
      {/* <Styling /> */}
      {/* <RenderWithState /> */}
      {/* <BaiTapChonXe /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;
