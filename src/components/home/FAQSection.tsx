import React from "react";
import { Clock, CreditCard, Truck, Globe, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
type FAQItem = {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
};
const FAQSection = () => {
  const faqItems: FAQItem[] = [{
    id: 'item-1',
    icon: <Clock className="m-auto size-4" />,
    question: 'How long does it take to develop a website or mobile app',
    answer: ' Project timelines vary based on the complexity and requirements. Typically, websites take 4–8 weeks, while mobile apps may take 8–16 weeks. We provide detailed timelines after project assessment.'
  }, {
    id: 'item-2',
    icon: <CreditCard className="m-auto size-4" />,
    question: 'What payment methods does Zynlogic Technologies accept?',
    answer: 'We accept a variety of payment methods including bank transfers, credit/debit cards, and online payment gateways like PayPal. For larger projects, we typically follow a milestone-based payment structure to ensure transparency and mutual trust throughout the development process.'
  }, {
    id: 'item-3',
    icon: <Truck className="m-auto size-4" />,
    question: 'Can I expedite the delivery of my digital project?',
    answer: 'Yes, expedited project delivery options are available depending on the project scope and current scheduling. During the initial consultation, we’ll discuss fast-track possibilities and any associated priority charges if you need a quicker turnaround.'
  }, {
    id: 'item-4',
    icon: <Globe className="m-auto size-4" />,
    question: ' Do you provide localized or region-specific support?',
    answer: 'Absolutely! We offer localized support tailored to your region, timezone, and market requirements. Our global team ensures effective communication and seamless collaboration, no matter where your business is based.'
  }, {
    id: 'item-5',
    icon: <Package className="m-auto size-4" />,
    question: 'How can I monitor the progress of my project?',
    answer: 'Throughout the project, we provide regular updates through scheduled meetings, progress reports, and project management tools. You’ll have full visibility on milestones, timelines, and deliverables to ensure everything stays on track.'
  }];
  return <section className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold text-zinc-950">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link to="/contact" className="text-accent font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {faqItems.map(item => <AccordionItem key={item.id} value={item.id} className="bg-white shadow-sm rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                {item.icon}
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>)}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>;
};
export default FAQSection;