import React from 'react'
import Map from '../../../Component/Mainbottom/Map'
import officeBuilding1 from "../../../Assets/OfficeBuilding1.jpg"


function Office() {
  return (
    <div className='officeMain bg-[#071341]  flex flex-col items-center'>
        <div className='office flex w-[1170px] gap-[15px] justify-center mt-[20px] mb-[20px] '>
            <div className='officeImage w-[200px] h-[200px]  '>
                <img className='w-[200px] h-[200px] rounded-[8px]' src={officeBuilding1} alt="" />
            </div>
            <div className="itemborder w-[1px] h-[200px] ml-[15px] border-solid-1px border border-[#8E88C1]"></div>
            <div className='officeDesc flex gap-[70px] w-[660px]'>
                <h1 className='officeName text-[36px] text-center flex items-center mb-[20px] font-bold text-white '>Office Name</h1>
                <div className='w-[550px] flex flex-col gap-[30px] justify-center text-[#847fb6]'>
                    <p className='adress'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid. Sint, quidem.</p>
                    <p className='tel'>+99999999999</p>
                    <p className='email'>email@oneposition.com</p>
                </div>
            </div>
            <div className='officeMap flex items-center justify-center '>
                <Map />
            </div>
        </div>
    </div>
  )
}

export default Office