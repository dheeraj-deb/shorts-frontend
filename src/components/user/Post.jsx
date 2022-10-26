import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import overlayvdo from "../../assets/overlayvdo.mp4";

function Post() {
  return (
    <>
    <div className="w-100 h-100">
      {/* post header */}
      <section className="w-100 bg-gray-200 flex items-center justify-between p-2">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] mr-2">
            <img
              className="w-[100%] h-[100%] relative object-cover rounded-full"
              src="https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2022/04/17/fleetwood-1694-patricksmith.jpg"
              alt=""
            />
          </div>
          <h4>Username</h4>
        </div>
        <SlOptionsVertical />
      </section>
      <section className="h-[200px] md:h-[400px]">
        <video
          className="w-[100%] h-[100%] object-cover "
          src={overlayvdo}
          type="video/mp4"
          loop={true}
          controls={false}
          muted
          autoPlay={true}
        />
      </section>
      <section className="w-100 border flex items-center justify-between p-2">
        <div className="flex items-center">
          <AiOutlineHeart fontSize={22} className="mr-4" />
          <FaRegComment fontSize={22} className="mr-4" />
          <FiShare2 fontSize={22} className="mr-4" />
        </div>
        <div>
          <p className="text-xs font-thin"> Date: Jun 19</p>
          <p className="text-xs font-thin">Time: 7:14</p>
        </div>
      </section>
    </div>
    <div className="w-100 h-100">
      {/* post header */}
      <section className="w-100 bg-gray-200 flex items-center justify-between p-2">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] mr-2">
            <img
              className="w-[100%] h-[100%] relative object-cover rounded-full"
              src="https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2022/04/17/fleetwood-1694-patricksmith.jpg"
              alt=""
            />
          </div>
          <h4>Username</h4>
        </div>
        <SlOptionsVertical />
      </section>
      <section className="h-[200px] md:h-[400px]">
        <video
          className="w-[100%] h-[100%] object-cover "
          src={overlayvdo}
          type="video/mp4"
          loop={true}
          controls={false}
          muted
          autoPlay={true}
        />
      </section>
      <section className="w-100 border flex items-center justify-between p-2">
        <div className="flex items-center">
          <AiOutlineHeart fontSize={22} className="mr-4" />
          <FaRegComment fontSize={22} className="mr-4" />
          <FiShare2 fontSize={22} className="mr-4" />
        </div>
        <div>
          <p className="text-xs font-thin"> Date: Jun 19</p>
          <p className="text-xs font-thin">Time: 7:14</p>
        </div>
      </section>
    </div>
    </>
  );
}

export default Post;
