import React, { useEffect, useState } from "react";

const FriendsBill = () => {
  const [bill, setBill] = useState<{}[]>([]);

  useEffect(() => {
    const prevSavedData = JSON.parse(localStorage.getItem("billData") || "[]");
    setBill((prev) => {
      return [...prev, prevSavedData];
    });
  }, []);

  const [itemInput, setItemInput] = useState({
    particulars: "",
    price: ""
  });
  const numberOfFriends = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setItemInput((prev) => ({
      ...prev,
      [name]: value
    }));
    localStorage.setItem("billData", JSON.stringify(itemInput));
  };

  const addItemHandle = () => {
    setBill((prev) => {
      return [...prev, itemInput];
    });
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
                value={itemInput.particulars}
                name="particulars"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="bill_friend">Price : </label>
              <input
                type="number"
                name="price"
                value={itemInput.price}
                onChange={handleInputChange}
              />
            </div>

            <button onClick={addItemHandle}>Add</button>
          </div>
        </div>
      </div>

      <BillApp bill={bill} numberOfFriends={numberOfFriends} />
    </div>
  );
};

export default FriendsBill;

interface BillAppType {
  bill: {
    particulars: string;
    price: any;
  }[];
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
        {bill.map((item, idx) => {
          return (
            <tbody key={idx}>
              <tr>
                <td>{item.particulars}</td>
                <td>{item.price}</td>
                <td>{item.price && item.price / numberOfFriends}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
