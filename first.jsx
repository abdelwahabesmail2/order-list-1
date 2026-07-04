import React from 'react';

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
