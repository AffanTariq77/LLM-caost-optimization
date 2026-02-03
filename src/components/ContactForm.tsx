import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";


import React, { useState } from "react";

const ContactForm = ({ onlyForm = false }: { onlyForm?: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    llmProvider: "",
    monthlySpend: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    // Basic validation
    if (!formData.name || !formData.email || !formData.llmProvider || !formData.monthlySpend || !formData.details) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.details,
          company: formData.company,
          llmProvider: formData.llmProvider,
          monthlySpend: formData.monthlySpend,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to book strategy call.");
      }
      setSuccess(true);
      setFormData({ name: "", email: "", company: "", llmProvider: "", monthlySpend: "", details: "" });
    } catch (err: any) {
      setError(err.message || "Failed to book strategy call.");
    } finally {
      setLoading(false);
    }
  };

  const form = (
    <form className="space-y-6 p-8 bg-white rounded-2xl shadow-none border-none" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="space-y-2">
    <label htmlFor="name" className="text-sm font-medium">
      Full Name *
    </label>
    <Input
      id="name"
      placeholder="John Doe"
      required
      value={formData.name}
      onChange={handleChange}
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">
      Work Email *
    </label>
    <Input
      id="email"
      type="email"
      placeholder="john@company.com"
      required
      value={formData.email}
      onChange={handleChange}
    />
  </div>
</div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company Name
        </label>
        <Input id="company" placeholder="Your Company" value={formData.company} onChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="llmProvider" className="text-sm font-medium">
            LLM Provider *
          </label>
          <select
            id="llmProvider"
            required
            value={formData.llmProvider}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Provider</option>
            <option value="OpenAI">OpenAI</option>
            <option value="Anthropic">Anthropic</option>
            <option value="Gemini">Google Gemini</option>
            <option value="Mistral">Mistral</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="monthlySpend" className="text-sm font-medium">
            Approx. Monthly Spend *
          </label>
          <Input
            id="monthlySpend"
            type="text"
            placeholder="e.g., $5,000"
            required
            value={formData.monthlySpend}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="details" className="text-sm font-medium">
          Additional Details
        </label>
        <Textarea
          id="details"
          placeholder="Tell us more about your LLM usage and optimization goals..."
          className="min-h-[120px]"
          required
          value={formData.details}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">Message sent successfully!</div>}
      <Button
        type="submit"
        size="lg"
        className="w-full hover:bg-sky-400 hover:shadow-sky-blue bg-[#192841] text-white text-base font-semibold rounded-lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Run My Audit"}
      </Button>
    </form>
  );
  if (onlyForm) return form;
  return (
    <section id="contact" className="py-10 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You'll Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each deliverable is actionable, transparent, and designed for both your technical and executive stakeholders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Ready to optimize?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Cost per query analysis</h4>
                  <p className="text-muted-foreground">
                    Transparent breakdown of how much you're spending per request
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Token waste percentage</h4>
                  <p className="text-muted-foreground">
                    Exact metrics on wasted tokens and optimization opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Prompt efficiency score</h4>
                  <p className="text-muted-foreground">
                   Data-backed analysis of prompt and context optimization potential
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">ROI projection</h4>
                  <p className="text-muted-foreground">
                   Expected savings timeline with clear impact forecasting
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
            {form}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
