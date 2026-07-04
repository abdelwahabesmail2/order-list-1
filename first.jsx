import React from 'react';

const orderBook = {
  buy: [ // أوامر الشراء
    { direction: "شراء", price: 106.86, quantity: 2.01 },
    { direction: "شراء", price: 105.4, quantity: 3.01 },
    { direction: "شراء", price: 102.1, quantity: 3.51 },
    { direction: "شراء", price: 109.4, quantity: 5.51 },
  ],
  sell: [ // أوامر البيع
    { direction: "بيع", price: 106.7, quantity: 0.51 },
    { direction: "بيع", price: 106.9, quantity: 0.91 },
    { direction: "بيع", price: 107.2, quantity: 1.83 },
    { direction: "بيع", price: 110.0, quantity: 3.85 },
  ],
};


const OrderBook = ({ data }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* أوامر الشراء */}
      <div>
        <h3>شراء</h3>
        <table>
          <thead>
            <tr>
              <th>السعر</th>
              <th>الكمية</th>
              <th>الفرق</th>
            </tr>
          </thead>
          <tbody>
            {data.buy.map((order, index) => (
              <tr key={index}>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.difference || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* أوامر البيع */}
      <div>
        <h3>بيع</h3>
        <table>
          <thead>
            <tr>
              <th>السعر</th>
              <th>الكمية</th>
              <th>الفرق</th>
            </tr>
          </thead>
          <tbody>
            {data.sell.map((order, index) => (
              <tr key={index}>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.difference || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
