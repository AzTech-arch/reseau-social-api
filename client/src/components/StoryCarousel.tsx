
import Story from "./Story";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel";

const stories = [
    { imageSrc: "https://via.placeholder.com/100x150", name: "Créer une story", isCreateStory: true },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Theodule Cacao Choco" },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Nirina Glène Kassamaly" },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Kéycha Lfrg" },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Hanitriniana" },
];

export function StoryCarousel() {
    return (
        <Carousel opts={{ align: "start", }} className="w-full shadow-card">

            <CarouselContent>
                {stories.map((story, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                        <Card className="p-0 ">
                            <CardContent className="flex aspect-square items-center justify-center px-0 ">
                                <Story {...story} />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ms-14" />
            <CarouselNext className="me-14" />
        </Carousel>
    );
}
