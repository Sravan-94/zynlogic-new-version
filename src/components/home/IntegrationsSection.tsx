
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import * as React from 'react'
import { CloudService, CodeEditor, DesignSystem, DevEnvironment, KnowledgeBase, AIAssistant } from '@/components/logos'

export default function IntegrationsSection() {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-8">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Integrate with your favorite tools</h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <IntegrationCard
                        title="Cloud Infrastructure"
                        description="Deploy and scale your applications with our cloud integration. Seamlessly connect to leading cloud providers.">
                        <CloudService />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Developer IDE"
                        description="Write, test, and debug your code with full integration support for your favorite development environments.">
                        <CodeEditor />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Design Framework"
                        description="Create beautiful interfaces with our design system integrations. Supports popular UI libraries and frameworks.">
                        <DesignSystem />
                    </IntegrationCard>

                    <IntegrationCard
                        title="DevOps Pipeline"
                        description="Streamline your CI/CD workflow with our DevOps integrations. Automate testing and deployment processes.">
                        <DevEnvironment />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Documentation Hub"
                        description="Centralize your technical documentation with our knowledge base integrations. Keep your team informed.">
                        <KnowledgeBase />
                    </IntegrationCard>

                    <IntegrationCard
                        title="AI Productivity Suite"
                        description="Enhance your workflow with AI-powered tools that automate repetitive tasks and provide intelligent suggestions.">
                        <AIAssistant />
                    </IntegrationCard>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = '/showcase' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-white/90">
            <div className="relative">
                <div className="*:size-10 mb-2">{children}</div>

                <div className="space-y-2 py-3">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-3">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none hover:bg-gray-100">
                        <Link to={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}
