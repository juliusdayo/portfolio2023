'use client'
import { Alert, Container, Grid, Paper, Flex, Tooltip, Skeleton, Stack, Title, Affix, Timeline, TimelineItem } from "@mantine/core";
import { useSelector } from "react-redux";
import Image from "next/image";
import dynamic from "next/dynamic";
import { IconBrandGithub, IconBrandLinkedin, IconBrandMessenger } from "@tabler/icons-react";


const IntroComponent = dynamic(() => import('../../components/julius/Intro'),
    {
        ssr: false,
        loading: () =>
            <>
                <Skeleton height={300} mt={6} radius="sm" >
                </Skeleton>
            </>
    })
const ProjectSection = dynamic(() => import('../../components/projects/Section'),
    {
        ssr: false,
        loading: () =>
            <>
                <Flex bg="rgba(25, 113, 194, 0.2)" justify="center" p="lg" h={280}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </Flex>
            </>
    })



const Page = () => {
    const { isDark } = useSelector((state) => state.general)
    return (
        <>
            <Affix position={{ left: 10, top: "30vh" }}>
                <Paper bg="blue" p={5}>
                    <Stack>
                        <IconBrandGithub />
                        <IconBrandLinkedin />
                        <IconBrandMessenger />
                    </Stack>
                </Paper>
            </Affix>
            <Container mb={50}>
                <Stack >
                    <Alert variant="light" color="blue" title="Note:" >
                        I haven't optimized the pages and it would look not so much better in a mobile device so it's better if you view this on a desktop 😆
                    </Alert>
                    <Paper>
                        <Grid >
                            <Grid.Col xs={12} sm={9} md={9}>
                                <IntroComponent />
                            </Grid.Col>
                            <Grid.Col xs={12} sm={3} md={3}>
                                <Tooltip
                                    opened={!isDark} label={
                                        <div>
                                            Let me put on my glasses, it's bright
                                        </div>
                                    }>
                                    <Image alt="avatar-image" src={isDark ? "/avatar-min.webp" : "/avatar-shades-min.webp"} width={200} height={200} />


                                </Tooltip>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Stack>

            </Container>
            <Container>
                <Title>Personal Projects</Title>
            </Container>

            <ProjectSection />
        </>
    )


}

export default Page;
