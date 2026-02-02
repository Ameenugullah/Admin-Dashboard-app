import './Transaction.css';
import Profile from '../../assets/profile2.jpg';
import Paypal from '../../assets/paypal.png';
import Paystack from '../../assets/paystack.png';
import Flutterwave from '../../assets/Flutterwave.jpg';

const transactions = [
  {
    status: 'success',
    name: 'Abdulmalik',
    image: Profile,
    email: 'abdulmalikaminugullah@gmail.com',
    date: new Date().toLocaleDateString(),
    amount: '$300',
  },
  {
    status: 'processing',
    name: 'Hauwa',
    image: Paypal,
    email: 'hauwaeiman@gmail.com',
    date: new Date().toLocaleDateString(),
    amount: '$500',
  },
  {
    status: 'success',
    name: 'Lukman Aminu',
    image: Paystack,
    email: 'lukkmanagullah@gmail.com',
    date: new Date().toLocaleDateString(),
    amount: '$900',
  },
  {
    status: 'failed',
    name: 'Buhari Sule',
    image: Flutterwave,
    email: 'mbkharee@gmail.com',
    date: new Date().toLocaleDateString(),
    amount: '$150',
  },
];

const shortenText = (text, max = 14) =>
  text.length > max ? `${text.slice(0, max)}…` : text;

const Transactions = () => {
  return (
    <div className="transactions-card">
      <h2 className="title-sm">Recent Transactions</h2>

      <div className="transactions-table-wrapper">
        <table className="transactions-table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="transaction-avatar"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td title={item.email}>{shortenText(item.email)}</td>
                <td className="amount">{item.amount}</td>
                <td>
                  <span className={`status-badge ${item.status}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
