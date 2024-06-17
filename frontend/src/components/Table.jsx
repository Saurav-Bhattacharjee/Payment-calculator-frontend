import React,{ useState } from "react"



    export  const Table = () => {
        const [rows, setRows] = useState([]);
        const [formData, setFormData] = useState({ name: '', amount: '' });
        const [total,setTotal]=useState(0);
      
        const addRow = () => {
          const newAmount= parseFloat(formData.amount);
          if(isNaN(newAmount)){
            alert("Please enter a valid amount");
            return;
          }
          setRows([...rows, { id: rows.length + 1, ...formData }]);
          setTotal(total + newAmount);
          setFormData({ name: '', amount: '' }); // Clear form after submission
        };
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        return (
          <div className="container mx-auto mt-10">
            <form className="mb-4">
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Expense Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="button"
                onClick={addRow}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Expense
              </button>
            </form>
            <table className="min-w-full border-collapse block md:table">
              <thead className="block md:table-header-group">
                <tr className="border border-gray-200 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                  <th className="bg-gray-100 p-2 text-gray-700 text-left block md:table-cell">ID</th>
                  <th className="bg-gray-100 p-2 text-gray-700 text-left block md:table-cell">Expense Name</th>
                  <th className="bg-gray-100 p-2 text-gray-700 text-left block md:table-cell">Amount</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {rows.map((row, index) => (
                  <tr key={index} className="bg-white border border-gray-200 md:border-none block md:table-row">
                    <td className="p-2 text-gray-700 block md:table-cell">{row.id}</td>
                    <td className="p-2 text-gray-700 block md:table-cell">{row.name}</td>
                    <td className="p-2 text-gray-700 block md:table-cell">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <h2 className="text-x1 font-bold">Total Amount:Rs{total.toFixed(2)}</h2>

            </div>
          </div>
        );
      };
    
    
    