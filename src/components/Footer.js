import { Footer, Group, Text } from "@mantine/core"
import { IconDeviceMobile, IconMail } from "@tabler/icons-react"


const FooterComponent = () => {
    return (
        <Footer >
            <Group>
                <IconMail />
                <Text>ecaruscoros@gmail.com</Text>
                <IconDeviceMobile />
                <Text>09612176265</Text>
            </Group>
        </Footer>)
}

export default FooterComponent;