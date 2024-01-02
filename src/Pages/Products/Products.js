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
    <div className="bg-[#24204A] h-auto">
      <div className="h-[100%]  justify-evenly flex flex-col  bg-[#24204A]">
        <Items
          img={image1}
          itemName="Sint commodi repudiandae consequuntur voluptatum laborum"
          itemDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
        <Items
          img={image2}
          itemName="Sint commodi repudiandae consequuntur voluptatum laborum"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
      </div>
      <div className="h-[100%] justify-evenly flex flex-col  bg-[#071341]">
        <Items
          img={image3}
          itemName="Sint commodi repudiandae consequuntur voluptatum laborum"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
        <Items
          img={image4}
          itemName="Sint commodi repudiandae consequuntur voluptatum laborum"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
      </div>
      <div className="h-[100%] justify-evenly flex flex-col  bg-[#24204A]">
        <Items
          img={image5}
          itemName="Sint commodi repudiandae consequuntur voluptatum laborum"
          itemDesc="Item Description 2olor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint untur voluptatum laborum
          numquam blanditiis harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint autem. Veritati"
        />
        <Items
          img={image6}
          itemName="Sint commodi repudiandae consequuntur voluptatum laborum"
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
