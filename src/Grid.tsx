// import { OrderBook } from "./OrderBook";

export function Grid() {
  return (
    <div className="w-100vw h-100vh grid grid-cols-1 grid-rows-2 gap-1.5">
      <div className="grid grid-cols-6 grid-rows-1 gap-1.5">
        <div className="col-span-4 rounded-sm bg-white">Chart Container</div>
        <div className="col-span-1 grid grid-cols-1 grid-rows-3 gap-1.5 rounded-sm">
          <div className="row-span-2 bg-white">{/* <OrderBook /> */}</div>
          <div className="row-span-1 bg-white">Trades History</div>
        </div>
        <div className="col-span-1 h-[80vh] rounded-sm bg-white text-center">
          Order Form
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1.5">
        <div className="col-span-5 rounded-sm bg-white text-center">
          Positions
        </div>
        <div className="col-span-1 rounded-sm bg-white text-center">
          Account
        </div>
      </div>
    </div>
  );
}
