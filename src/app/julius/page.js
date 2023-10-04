'use client'
import { Alert, Container, Grid, Paper, Flex, Tooltip, Skeleton, Stack, Title, Affix, Timeline, Text, Space, Group } from "@mantine/core";
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
                        <a href="https://github.com/juliusdayo" target="_blank"><IconBrandGithub href="" /></a>
                        <a href="https://www.linkedin.com/in/juliuscoros10/" target="_blank"><IconBrandLinkedin /></a>
                    </Stack>
                </Paper>
            </Affix>
            <Container mb={120} mt={40}>
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
            <Container mb={100} mt={40}>
                <Title mb={20}>Experience</Title>
                <Group>
                    <Timeline active={0} color="blue">
                        <Timeline.Item >
                            Software Developer
                            <Text c="dimmed" size="sm">Glyph Studios Inc.</Text>
                            <Text size="xs" mt={4}>November 2022 -  Present</Text>
                        </Timeline.Item>
                        <Timeline.Item >
                            Jr. Software Engineer
                            <Text c="dimmed" size="sm">Volenday</Text>
                            <Text size="xs" mt={4}>Oct 2021 -  November 2022</Text>
                        </Timeline.Item>
                        <Timeline.Item >
                            Freelance Web Developer | QA Tester
                            <Text c="dimmed" size="sm">Teksquad Institute of Information Technology</Text>
                            <Text size="xs" mt={4}>Sep 2020 -  Oct 2021</Text>
                        </Timeline.Item>
                    </Timeline>
                    <Timeline active={0} color="blue" >
                        <Timeline.Item lineVariant="dashed">
                            No freelancing project as of the moment
                            <Text size="xs" mt={4}>Present</Text>
                        </Timeline.Item>

                        <Timeline.Item >
                            Freelance

                            <Text size="xs" mt={4}>Sep 2020</Text>
                        </Timeline.Item>
                    </Timeline>
                </Group>
            </Container>
            <Container>
                <Title>Personal Projects</Title>
            </Container>

            <ProjectSection />
        </>
    )


}

export default Page;
