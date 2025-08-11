import { Footer } from "./Footer";
import { Grid } from "./Grid";
import { Header } from "./Header";

function App() {
  return (
    <div className="flex flex-col gap-1.5 bg-gray-100">
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
