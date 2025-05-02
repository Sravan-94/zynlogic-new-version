
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  return (
    <Layout>
      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ready to discuss your project? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
                  <a href="mailto:hello@lander.studio" className="text-accent hover:underline">
                    hello@lander.studio
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Call Us</h3>
                  <a href="tel:+15551234567" className="text-accent hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Visit Us</h3>
                  <address className="text-gray-600 not-italic">
                    123 Design Avenue<br />
                    San Francisco, CA 94103<br />
                    United States
                  </address>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-primary hover:text-accent">Twitter</a>
                  <a href="#" className="text-primary hover:text-accent">LinkedIn</a>
                  <a href="#" className="text-primary hover:text-accent">Instagram</a>
                  <a href="#" className="text-primary hover:text-accent">Dribbble</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary mb-6">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("service", value)}
                      value={formData.service}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Design & Development</SelectItem>
                        <SelectItem value="mobile">Mobile App Development</SelectItem>
                        <SelectItem value="branding">Brand Identity</SelectItem>
                        <SelectItem value="ux">UX Strategy</SelectItem>
                        <SelectItem value="creative">Creative Tech</SelectItem>
                        <SelectItem value="ai">AI Integration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("budget", value)}
                      value={formData.budget}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k">Under $10,000</SelectItem>
                        <SelectItem value="25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
