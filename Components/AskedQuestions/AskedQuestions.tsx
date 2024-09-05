import React, { useState } from "react";
import AskedQuestionsBoxItem from "../AskedQuestionsBoxItem/AskedQuestionsBoxItem";


function AskedQuestions() {
  const [selectedBox, setSelectedBox] = useState<number>(1);
  return (
    <div className="my-16 px-4 lg:px-20">
      <div className="text-lg md:text-2xl lg:text-4xl text-white border-b-2  w-fit py-2 font-semibold  border-customBlue">
        FREQUENTLY ASKED QUESTIONS
      </div>
      <div className="text-gray-500">Your happiness in our priority</div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <div className=" flex flex-col justify-center items-center mt-10 xl:mt-24 ">
            <AskedQuestionsBoxItem
              selectedBox={selectedBox}
              setSelectedBox={setSelectedBox}
              item={1}
              title="What industries do you serve with your raw materials and industrial machinery?"
              desc="Atex is always focused on customer satisfaction and finding the most efficient ways to transfer products. This commitment is backed by several years of experience"
            />
            <AskedQuestionsBoxItem
              selectedBox={selectedBox}
              setSelectedBox={setSelectedBox}
              item={2}
              title="How can I place an order for products on your website?"
              desc="Placing an order with Atex Trading Limited is simple. First, browse our product catalogue to find the items you need. Once you’ve selected your products, please submit a request through our website or contact our sales team directly. We will then confirm your order details and provide you with the necessary information to complete the purchase."
            />
            <AskedQuestionsBoxItem
              selectedBox={selectedBox}
              setSelectedBox={setSelectedBox}
              item={3}
              title="Do you offer customization services for industrial machinery?"
              desc="Yes, we offer customization services for our industrial machinery. Our team of experienced engineers can work with you to tailor the machinery to your specific requirements. Please contact us with your customization needs, and we will provide you with a detailed proposal and timeline"
            />
            <AskedQuestionsBoxItem
              selectedBox={selectedBox}
              setSelectedBox={setSelectedBox}
              item={4}
              title="What are your shipping and delivery policies?"
              desc="Atex Trading Limited offers international shipping for all our products. We partner with reliable logistics companies to ensure timely and safe delivery. Shipping costs and delivery times vary based on the destination and order size. Once your order is confirmed, we will provide you with tracking information and an estimated delivery date."
            />
          </div>
        </div>

        <div className="hidden lg:flex col-span-1 justify-center items-center">
          <img src="./quiz.png" className="w-[60%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AskedQuestions;
