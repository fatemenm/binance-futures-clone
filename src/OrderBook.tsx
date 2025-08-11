import { useEffect, useState } from "react";

interface OrderBook {
  lastUpdateId: number; // Last update ID
  bids: [string, string][]; // Bids to be updated
  asks: [string, string][]; // Asks to be updated
}

export function OrderBook() {
  const [orderBook, setOrderBook] = useState<OrderBook | null>(null);
  const [connectionStatus, setConnectionStatus] =
    useState<string>("connecting...");

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@depth5@100ms",
    );

    ws.onopen = () => {
      setConnectionStatus("connected");
    };
    ws.onmessage = (event) => {
      const data: OrderBook = JSON.parse(event.data);
      setOrderBook(data);
    };
    ws.onclose = () => {
      setConnectionStatus("disconnected");
    };
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setConnectionStatus("error");
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto font-normal">
      <h3>Order Book</h3>

      <table className="w-full table-auto font-normal">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-0.5 text-left font-normal">Price</th>
            <th className="px-4 py-0.5 text-left font-normal">Size</th>
            <th className="px-4 py-0.5 text-left font-normal">Sum</th>
          </tr>
        </thead>
        <tbody>
          {orderBook && orderBook.bids && orderBook.asks ? (
            <>
              {orderBook.bids.map((bid, index) => (
                <tr key={`bid-${index}`} className="bg-red-50 text-xs">
                  <td className="px-4 py-0.5 text-left">
                    {Number(bid[0]).toLocaleString("en-US", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </td>
                  <td className="px-4 py-0.5 text-left">
                    {Number(bid[1]).toFixed(3)}
                  </td>
                  <td className="px-4 py-0.5 text-left">
                    {orderBook.bids
                      .reduce((acc, curr) => acc + Number(curr[1]), 0)
                      .toFixed(3)}
                  </td>
                </tr>
              ))}
              {orderBook.asks.map((ask, index) => (
                <tr key={`ask-${index}`} className="bg-green-50 text-xs">
                  <td className="px-4 py-0.5 text-left">
                    {Number(ask[0]).toLocaleString("en-US", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </td>
                  <td className="px-4 py-0.5 text-left">
                    {Number(ask[1]).toFixed(3)}
                  </td>
                  <td className="px-4 py-0.5 text-left">
                    {orderBook.asks
                      .reduce((acc, curr) => acc + Number(curr[1]), 0)
                      .toFixed(3)}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan={3} className="px-4 py-0.5 text-center">
                {connectionStatus}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
