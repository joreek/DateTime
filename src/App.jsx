
import './App.css'
import DateTimeRange from "./DateTimeRange";
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

function App() {
  

  return (
    <>
      <div>пипа</div>

      <ConfigProvider locale={ruRU}>
        <DateTimeRange />
      </ConfigProvider>
      
</>
  )
}

export default App
