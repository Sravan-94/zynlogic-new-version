
import React from "react";

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Projects Delivered</h2>
                    <p>Our journey is defined by the impact we've created. With a growing portfolio of projects delivered across industries, Zynlogics  has enabled teams to move faster, build smarter, and solve real-world challenges.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">1200+</div>
                        <p>Projects Delivered</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">800+</div>
                        <p>Clients</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">10+</div>
                        <p>Counties</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
