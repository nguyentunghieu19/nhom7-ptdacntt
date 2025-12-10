import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaShoppingCart, FaTags, FaList } from 'react-icons/fa';

const Dashboard = () => {
  const menuItems = [
    {
      title: 'Quản lý sản phẩm',
      icon: FaBox,
      path: '/admin/products',
      description: 'Thêm, sửa, xóa sản phẩm',
      color: 'bg-blue-500',
    },
    {
      title: 'Quản lý đơn hàng',
      icon: FaShoppingCart,
      path: '/admin/orders',
      description: 'Xem và cập nhật trạng thái đơn hàng',
      color: 'bg-green-500',
    },
    {
      title: 'Quản lý khuyến mãi',
      icon: FaTags,
      path: '/admin/promotions',
      description: 'Tạo và quản lý mã khuyến mãi',
      color: 'bg-purple-500',
    },
    {
      title: 'Quản lý danh mục',
      icon: FaList,
      path: '/admin/categories',
      description: 'Quản lý danh mục sản phẩm',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Quản trị hệ thống</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6"
          >
            <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <item.icon className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

