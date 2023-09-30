'use client'
import { Alert, Container, Grid, Paper, Space, Title, Image, Popover, Tooltip } from "@mantine/core";
import { useSelector } from "react-redux";


const Page = () => {
    const { isDark } = useSelector((state) => state.general)
    return (
        <Container >
            <Alert variant="light" color="blue" title="Note:" >
                I haven't optimized the pages and it would look not so much better in a mobile device so it's better if you view this on a desktop 😆
            </Alert>
            <Space h="lg" />
            <Paper>
                <Grid >
                    <Grid.Col xs={12} sm={9} md={9}>
                        <Title>Hi! I'm Julius,</Title>

                        I'm a passionate Fullstack Developer with a proven track record in building dynamic web applications.
                        <Space h="md" />
                        My skill set includes programming languages such as PHP, Python, JavaScript including their libraries or frameworks like ReactJs and Laravel.
                        <Space h="md" />
                        I thrive on crafting innovative web solutions that deliver exceptional user experiences.
                        <Space h="md" />
                        Let's connect and discuss how I can contribute to your next project.

                    </Grid.Col>
                    <Grid.Col xs={12} sm={3} md={3}>
                        <Tooltip
                            opened={!isDark} label={
                                <div>
                                    Let me put on my glasses, it's bright
                                </div>
                            }>
                            <Image src={isDark ? "/avatar-min.webp" : "/avatar-shades-min.webp"} />


                        </Tooltip>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Container>
    )


}

export default Page;
