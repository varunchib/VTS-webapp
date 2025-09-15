// src/components/CRMDashboard.tsx
import React from "react";
import { FaSearch } from "react-icons/fa";

const companies = [
  {
    initials: "TS",
    name: "Tech Solutions Ltd",
    email: "contact@techsolutions.com",
    contact: "John Doe",
    phone: "+1-234-567-8901",
    address: "123 Business St, City",
    quotations: 3,
    created: "2025-01-15",
    website: "www.techsolutions.com",
    revenue: "$120,000",
    profit: "$45,000",
  },
  {
    initials: "GE",
    name: "Global Enterprises",
    email: "info@globalent.com",
    contact: "Jane Smith",
    phone: "+1-234-567-8902",
    address: "456 Corporate Ave",
    quotations: 2,
    created: "2025-02-10",
    website: "www.globalent.com",
    revenue: "$90,000",
    profit: "$30,000",
  },
  {
    initials: "DS",
    name: "Digital Systems Inc",
    email: "hello@digitalsys.com",
    contact: "Mike Johnson",
    phone: "+1-234-567-8903",
    address: "789 Tech Plaza",
    quotations: 2,
    created: "2025-03-05",
    website: "www.digitalsys.com",
    revenue: "$150,000",
    profit: "$55,000",
  },
  {
    initials: "IS",
    name: "Innovation Studios",
    email: "team@innovationstudios.com",
    contact: "Sarah Wilson",
    phone: "+1-234-567-8904",
    address: "321 Innovation Drive",
    quotations: 1,
    created: "2025-03-12",
    website: "www.innovationstudios.com",
    revenue: "$75,000",
    profit: "$20,000",
  },
];

const CRMDashboard = () => {
  return (
    <div className="min-h-screen bg-[#7373E3] flex justify-center items-start p-4 sm:p-6">
      <div className="w-full max-w-7xl space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-[#7373E3]">CRM Dashboard</h1>
          <p className="text-gray-700">
            Manage companies and create quotations seamlessly
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-[#7373E3] rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Companies */}
            <div className="text-[#7373E3] bg-white rounded-xl p-4 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">4</p>
              <p className="font-medium">Total Companies</p>
            </div>

            {/* New This Week */}
            <div className="text-[#7373E3] bg-white rounded-xl p-4 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">2</p>
              <p className="font-medium">New This Week</p>
            </div>

            {/* New This Month */}
            <div className="text-[#7373E3] bg-white rounded-xl p-4 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">2</p>
              <p className="font-medium">New This Month</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search companies..."
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#7373E3] text-gray-800 placeholder-gray-500"
            />
            <button className="px-4 py-2 bg-[#7373E3] text-white rounded-lg hover:bg-[#5c5cd1] flex items-center gap-2">
              <FaSearch />
              Search
            </button>
          </div>
        </div>

        {/* Companies Table */}
        <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Companies (4)
          </h2>
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="text-left text-gray-700 border-b">
                <th className="p-2">Company</th>
                <th className="p-2">Contact</th>
                <th className="p-2">Details</th>
                <th className="p-2">Quotations</th>
                <th className="p-2">Created</th>
                <th className="p-2">Website</th>
                <th className="p-2">Revenue</th>
                <th className="p-2">Profit</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-[#7373E3]/10 transition-colors"
                >
                  <td className="p-2 flex items-center gap-3">
                    {/* Square profile with rounded corners */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#7373E3] text-white font-bold">
                      {c.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{c.name}</p>
                      <p className="text-sm text-gray-600">{c.email}</p>
                    </div>
                  </td>
                  <td className="p-2 text-gray-800">{c.contact}</td>
                  <td className="p-2">
                    <p className="text-gray-800">{c.phone}</p>
                    <p className="text-sm text-gray-600">{c.address}</p>
                  </td>
                  <td className="p-2">
                    <span className="px-3 py-1 text-sm bg-[#055C9D] text-white rounded-full">
                      {c.quotations} quotation
                      {c.quotations > 1 ? "s" : ""}
                    </span>
                  </td>
                  <td className="p-2 text-gray-800">{c.created}</td>
                  <td className="p-2 text-blue-600 underline cursor-pointer">
                    {c.website}
                  </td>
                  <td className="p-2 text-gray-800">{c.revenue}</td>
                  <td className="p-2 text-gray-800">{c.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;
