import{ FC } from 'react';;
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    image: string;
    variation: string;
    price: number;
    quantity:number
  }


interface Order {
    id: number;
    customerName: string;
    customerAddress: string;
    orderTotal: number;
    date: Date;
    status: string;
    products: Product[];
  }
  
  interface Props {
    orders: Order[];
  }
  

  
const Myorder: React.FC<Props> = ({ orders }) => {
  const [completedOrders, setCompletedOrders] = useState<Order[]>([]);

  const handleArrangeShipment = (orderId: number) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: 'Completed' };
      }
      return order;
    });
    setCompletedOrders(updatedOrders);
  };

  return (
    <div className="text-[14px] ml-[80px] mt-12 ">
      <h2 className="text-[24px] font-simibold font-general not-italic font-medium md:font-medium mb-4 ">
        My Orders
      </h2>
      {completedOrders.map((order) => (
        <div className=" mb-5  mt-3  max-w-screen-lg " key={order.id}>
          {/* Render order details */}
        </div>
      ))}
      {orders.filter(order => order.status !== 'Completed').map((order) => (
        <div className=" mb-5  mt-3  max-w-screen-lg " key={order.id} > 
          <div className="bg-white shadow-md  p-5 ]">
            <div className="flex justify-between items-center mb-5 ">
              <div className="">
                <h3 className="text-[16px] font-semibold">Order ID {order.id}</h3>
                <div className="flex ">
                  <p className="text-gray-600 ">{order.customerName}</p>
                  <p className="text-gray-600 ml-4">{order.customerAddress}</p>
                </div>
              </div>
              <div className="">
                <p className="text-gray-600 ">
                  Ordered on {order.date.toLocaleString()}
                </p>
                <p className="text-gray-600 text-right ">{order.status}</p>
                {order.status !== 'Completed' && (
                  <button
                    className="text-white bg-[#48466D] rounded px-2 py-1 hover:bg-[#605d91] transition duration-300"
                    onClick={() => handleArrangeShipment(order.id)}
                  >
                    Arrange Shipment
                  </button>
                )}
              </div>
            </div>
              <table className="w-full table-fixed m-1">
                <thead>
                  <tr className="border-b-5 border-gray-200 text-[12px] text-[#94949B] ">
                    <th className="text-left pb-4 ">Product</th>
                    <th className="text-left pb-4">Variation</th>
                    <th className="text-left pb-4">quantity</th>
                    <th className="text-right pb-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product) => (
                    <tr key={product.id} className="border-b border-gray-200">
                      <td className="py-2">
                        <div className="flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 mr-4 object-contain"
                          />
                          <p className="text-[14px]">{product.name}</p>
                        </div>
                      </td>
                      <td className="py-2">{product.variation}</td>
                      <td className="py-2">{product.quantity}</td>
                      <td className="py-2 text-right">{product.price}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-gray-200  ">
                    <td className="py-2"></td>
                    <td className="text-right font-medium"></td>
                    <td className="py-1 text-right font-medium">Total:</td>
                    <td className="text-right font-medium ">
                      {order.orderTotal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Myorder;