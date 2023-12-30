import React from "react";
import Items from "../../Pages/Products/Items";
import image1 from "../../Assets/item_img1.svg";
import image2 from "../../Assets/item_img2.svg";
import image3 from "../../Assets/item_img3.svg";
import image4 from "../../Assets/item_img4.svg";
import image5 from "../../Assets/item_img5.svg";
import image6 from "../../Assets/item_img6.svg";

function Products() {
  return (
    <div className="bg-[#24204A]">
      <div className="h-[662px] justify-evenly flex flex-col items-center bg-[#24204A]">
        <Items
          img={image1}
          itemName="sint commodi repudiandae consequuntur voluptatum laborum"
          itemDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
        <Items
          img={image2}
          itemName="Item Name 2"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
      </div>
      <div className="h-[662px] justify-evenly flex flex-col items-center bg-[#071341]">
        <Items
          img={image3}
          itemName="Item Name 3"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
        <Items
          img={image4}
          itemName="Item Name 4"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
      </div>
      <div className="h-[662px] justify-evenly flex flex-col items-center bg-[#24204A]">
        <Items
          img={image5}
          itemName="Item Name 5"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
        <Items
          img={image6}
          itemName="Item Name 6"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
      </div>
    </div>
  );
}

export default Products;
