import { Header, Grid, Flex, Button } from "@mantine/core"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"
import { setIsDark } from "../app/generalSlice"

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const { isDark } = useSelector((state) => state.general)

    return (
        <Header height={80} p="xs">
            <Grid style={{ margin: "0 20% 0 20%" }}>
                <Grid.Col span={6} p={0}>
                    <Image src={isDark ? "/header-icon-white.png" : "/header-icon.png"} width="70" height="70" alt="header-image" />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Flex justify="flex-end" direction="row">
                        <Button onClick={() => dispatch(setIsDark(!isDark))} variant="outline" color="gray" leftIcon={isDark ? <IconMoonFilled /> : <IconSunFilled />} radius="xl" >
                            {isDark ? "Light Mode" : "Dark Mode"}
                        </Button>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Header>
    )
}

export default HeaderComponent;