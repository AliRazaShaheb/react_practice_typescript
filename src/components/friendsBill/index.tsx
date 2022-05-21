import React, { useEffect, useState } from "react";

type Obj = {
  particulars: string;
  price: string;
};

const FriendsBill = () => {
  const [bill, setBill] = useState<Obj[]>([]);
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
    setItemInput({
      particulars: "",
      price: ""
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
  const btnStyle = {
    cursor: "pointer",
    backgroundColor: "teal",
    color: "white",
    border: "none",
    outline: "none",
    padding: "0.2rem 0.5rem",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "blue"
    }
  };
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
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  {item.price && item.price / numberOfFriends}
                  <span
                    style={{
                      display: "flex",
                      gap: "0.5rem"
                    }}
                  >
                    <button style={btnStyle}>edit</button>
                    <button style={btnStyle}>delete</button>
                  </span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
