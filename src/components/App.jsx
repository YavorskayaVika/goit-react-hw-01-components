import { Profile } from "./Profile/Profile";
import friends from '../assets/friends.json'
import { FriendList } from './Friends/Friends'
import data from '../assets/data.json';
import user from '../assets/user.json'
import { Statics, Statistics } from "./Statistics/Statistics";
import  transaction from "../assets/transactions.json";
import Transaction from  '../components/Transactions/Transaction'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title= "Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transaction items={transaction} />
    </div>
  );
};
