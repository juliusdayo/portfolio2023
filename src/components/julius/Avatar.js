import { Tooltip } from "@mantine/core";
import Image from "next/image";

const AvatarComponent = () => {
    return (
        <Tooltip
            opened={!isDark} label={
                <div>
                    Let me put on my glasses, it's bright
                </div>
            }>
            {<Image alt="avatar-image" src={isDark ? "/avatar-min.webp" : "/avatar-shades-min.webp"} width={400} height={400} sizes="100vw" style={{
                width: '100%',
                maxHeight: '300px',
            }} />}


        </Tooltip>
    )
}
export default AvatarComponent