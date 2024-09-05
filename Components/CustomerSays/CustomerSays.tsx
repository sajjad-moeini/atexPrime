
import React from "react";
import CustomerSaysBox from "../CustomerSaysBox/CustomerSaysBox";


function CustomerSays() {
  const customers = [
    {
      name:'Jase Cruz',
      role:"user",
      img:'./user1.jpg',
      id:1
    },
    {
      name:'Johan Hobbs',
      role:"user",
      img:'./user2.jpg',
      id:2
    },
    {
      name:'Donald Heath',
      role:"user",
      img:'./user3.jpeg',
      id:3
    },
    
  ]
  return (
    <div className="my-16 px-4 lg:px-20">
      <img src="./review.png" className="mb-8" alt="" />
      <div className="text-white text-lg md:text-2xl lg:text-3xl font-semibold">
        Our Customer Say{" "}
      </div>
      <div className="text-white text-lg md:text-2xl lg:text-3xl font-semibold">
        Something <span className="text-mainYellow">About Us</span>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 my-8 gap-4">
        {
          customers.map(user=>(
            <CustomerSaysBox {...user} key={user.id} />
          ))
        }

      </div>
    </div>
  );
}

export default CustomerSays;
