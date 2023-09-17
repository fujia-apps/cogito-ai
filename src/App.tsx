import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';


import { rootRouter } from './router';
import { useStore } from './store';

function App() {
  return (
    <section className="container">
      <RouterProvider router={rootRouter} />
    </section>
  );
}

function ThemeApp() {
  const theme = useStore(state => state.theme);

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: theme,
      },
    }}>
      <App />
    </ConfigProvider>
  )
}

export default ThemeApp;
