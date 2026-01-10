import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Profile from "../../assets/images/profile.jpeg";
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";


function StarRating({ rating = 5 }: { rating?: number }) {
    return (
        <div className="flex justify-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < rating
                            ? "fill-purple-800 text-purple-800"
                            : "text-gray-700"
                        }`}
                />
            ))}
        </div>
    );
}


const testimonials = [
    {
        name: "John Doe",
        role: "CEO, Company",
        message: "This product changed our workflow completely.",
        rating: 5
    },
    {
        name: "Jane Smith",
        role: "Designer",
        message: "Clean UI, smooth experience, highly recommended.",
        rating: 4
    },
    {
        name: "Michael Lee",
        role: "Developer",
        message: "Integration was fast and painless.",
        rating: 5
    },
];

export default function TestimonialsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000 })]
    );

    return (
        <section className="relative overflow-hidden">
            {/* Left Arrow */}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10
             rounded-full bg-white/80 dark:bg-black/50
             p-2 shadow-md backdrop-blur
             hover:scale-110 transition"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-5 h-5 text-purple-800" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={() => emblaApi?.scrollNext()}
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10
             rounded-full bg-white/80 dark:bg-black/50
             p-2 shadow-md backdrop-blur
             hover:scale-110 transition"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-5 h-5 text-purple-800" />
            </button>
            <div ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full px-4"
                        >
                            <div className="max-w-xl mx-auto text-center p-6 rounded-xl bg-white/70 dark:bg-black/40 shadow-sm">
                                <div className="w-20 h-20 mx-auto py ">
                                    <img src={Profile} alt="PROFILE IMAGE" className="rounded-full" />
                                </div>
                                <p className="text-lg italic pt-2">
                                    “{item.message}”
                                </p>
                                <StarRating rating={item.rating} />
                                <div className="mt-4 font-semibold">
                                    {item.name}
                                </div>
                                <div className="text-sm text-gray-500 font-bold">
                                    {item.role}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
