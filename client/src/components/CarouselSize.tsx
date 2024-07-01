import * as React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import Story from "./Story";

const stories = [
    { imageSrc: "https://via.placeholder.com/100x150", name: "Créer une story", isCreateStory: true },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Theodule Cacao Choco" },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Nirina Glène Kassamaly" },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Kéycha Lfrg" },
    { imageSrc: "https://via.placeholder.com/100x150", profileImage: "https://via.placeholder.com/40", name: "Hanitriniana" },
];

export function CarouselSize() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full "
        >
            <CarouselContent>
                {stories.map((story, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Story {...story} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
