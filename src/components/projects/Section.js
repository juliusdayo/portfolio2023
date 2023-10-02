import { Group, Flex } from "@mantine/core";
import ProjectCard from "./ProjectCard";




const Section = () => {
    const projectData = [
        {
            name: "Spotify Profile",
            url: "/spotify",
            description: "This is a project where you can see your top tracks in spotify. I plan on adding more features but this about page should be the priority I guess",
            imageUrl: "/spotify-logo.webp"
        },
        {
            name: "CodeRPG",
            url: "",
            description: "This is a web base game that me and my friends are working on.",
            imageUrl: "/under-construction.webp"
        },
        {
            name: "Data Scraping",
            url: "",
            description: "This is a cron job I also started working on to scrape data in the internet because I got bored.",
            imageUrl: "/under-construction.webp"
        }
    ]

    return (
        <Flex bg="rgba(25, 113, 194, 0.2)" justify="center" p="lg">
            <Group justify="space-between" >
                {
                    projectData.map((project, i) =>

                        <ProjectCard {...project} key={i} />
                    )
                }
            </Group>
        </Flex>

    )
}

export default Section;