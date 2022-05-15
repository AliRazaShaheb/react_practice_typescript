import React, { useState } from "react";

const FriendsBill = () => {
  const [bill, setBill] = useState({
    faluda: 500,
    coffee: 300,
    lunch: 700
  });
  const numberOfFriends = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setBill((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <div>
        <div className="billofFriends">
          <div className="numberOfFrineds">
            <label htmlFor=""> Number of friends : </label>
            <input type="number" name="numberOfFriend" id="" />
          </div>

          <div className="particulars">
            <div>
              <label htmlFor="bill_friend">Particulars : </label>
              <input
                type="text"
                name="particulars"
                id=""
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="bill_friend">Price : </label>
              <input
                type="number"
                name="price"
                id=""
                onChange={handleInputChange}
              />
            </div>
            <button>Add</button>
          </div>
        </div>
      </div>
      <BillApp bill={bill} numberOfFriends={numberOfFriends} />
    </div>
  );
};

export default FriendsBill;

interface BillAppType {
  bill: object;
  numberOfFriends: number;
}

export const BillApp = ({ bill, numberOfFriends }: BillAppType) => {
  return (
    <div>
      TOTAL FRIENDS : {numberOfFriends}
      <table id="customers">
        <thead>
          <tr>
            <th>Particulars</th>
            <th>Bill</th>
            <th>Bill Each Person</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(bill).map((objKey: string) => {
            return (
              <tr key={objKey}>
                <td>{objKey}</td>
                <td>{bill[objKey]}</td>
                <td>{bill[objKey] / numberOfFriends}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
