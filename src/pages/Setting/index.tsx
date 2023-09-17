import { ColorPicker, Divider } from "antd";
import { Link } from 'react-router-dom';

import { useStore } from "store/index";

export const SettingPage = () => {
  const [theme, configTheme] = useStore(state => [state.theme, state.configTheme])

  return (
    <div>
      <ColorPicker showText value={theme} onChangeComplete={(color) => configTheme(color.toHexString())} />
      <Divider />
      <Link to="/">Home</Link>
    </div>
  )
};