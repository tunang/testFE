import { FaAngleDoubleUp } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
const RightSideIcons = () => {
    return ( <div className="fixed flex flex-col items-end gap-[10px] bottom-[85px] right-[20px]">
        <div className="">
            <FaAngleDoubleUp className="w-[50px] h-[50px] bg-secondary rounded-full text-primary p-4"/>
        </div>

        <div className="">
            <HiOutlineChatBubbleLeftRight className="w-[60px] h-[60px] bg-[#26A66A] rounded-full text-primary p-4"/>
        </div>
    </div> );
}
 
export default RightSideIcons;