import React from 'react';

import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      123
    </ConfigProvider>
  );
}

export default App;
