import "./App.css";
import VirtualScroller, {
  DefaultSettingsType,
  Item,
} from "./components/VirtualScroller";

const defaultSettings: DefaultSettingsType = {
  minIndex: -5000,
  maxIndex: 5000,
  startIndex: 0,
  // should be equal to the height in the css .item height
  itemHeightPx: 40,
  amount: 12,
  tolerance: 4,
};

const getData = (offset: number, amount: number): Item[] => {
  const data = [];
  const start = Math.max(defaultSettings.minIndex, offset);
  const end = Math.min(offset + amount - 1, defaultSettings.maxIndex);

  if (start <= end) {
    for (let i = start; i <= end; i++) {
      data.push({ i, content: `I am data no. ${i}` });
    }
  }

  return data;
};

const App = () => {
  return (
    <div className="App">
      <VirtualScroller
        getData={getData}
        defaultSettings={defaultSettings}
      ></VirtualScroller>
    </div>
  );
};

export default App;
