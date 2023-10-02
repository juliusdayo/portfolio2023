import { IconArrowAutofitContent, IconArrowBarToRight } from "@tabler/icons-react";
import Link from "next/link";

const { Card, Image, Group, Text } = require("@mantine/core")


const ProjectCard = ({ name, url, description, imageUrl }) => {
    return (
        <Card shadow="sm" w={250} padding="lg">
            <Card.Section>

                <Image
                    src={imageUrl}
                    height={120}
                    alt={name}

                />

            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                {url ?
                    <Link href={url}>
                        <Text fw={500}>{name}</Text>
                    </Link> :
                    <Text fw={500}>{name}</Text>
                }
            </Group>
            <Text size="sm" c="dimmed">
                {description}
            </Text>

        </Card>
    )
}
export default ProjectCard;