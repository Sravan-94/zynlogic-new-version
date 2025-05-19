import React from "react";

export default function StatsSection() {
    return (
        <section className="py-12 md:py-10">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Projects Delivered</h2>
                    <p className="text-balance text-lg font-medium text-gray-600">Our journey is defined by the impact we've created. With a growing portfolio of projects delivered across industries, Zynlogics has enabled teams to move faster, build smarter, and solve real-world challenges.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-2">
                        <div className="text-6xl font-bold">10+</div>
                        <p className="text-lg font-medium text-gray-600">Countries</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-6xl font-bold">800+</div>
                        <p className="text-lg font-medium text-gray-600">Clients</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-6xl font-bold">1200+</div>
                        <p className="text-lg font-medium text-gray-600">Projects Delivered</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
