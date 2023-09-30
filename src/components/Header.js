import { Header, Title, Grid, Flex, Button, Image, Group } from "@mantine/core"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"

import { useDispatch, useSelector } from "react-redux"
import { setIsDark } from "../app/generalSlice"

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const { isDark } = useSelector((state) => state.general)

    return (
        <Header height={80} p="xs">
            <Group justify="space-between" grow style={{ margin: "0 20% 0 20%" }}>
                <Image src={isDark ? "/header-icon-white.png" : "/header-icon.png"} width="64" />

                <Flex justify="flex-end" direction="row">
                    <Button onClick={() => dispatch(setIsDark(!isDark))} variant="outline" color="gray" leftIcon={isDark ? <IconMoonFilled /> : <IconSunFilled />} radius="xl" >
                        {isDark ? "Light Mode" : "Dark Mode"}
                    </Button>
                </Flex>
            </Group>
        </Header>
    )
}

export default HeaderComponent;