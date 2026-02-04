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
    <form className="space-y-5 md:space-y-6 p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-none border-none" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
  <div className="space-y-2">
    <label htmlFor="name" className="text-sm md:text-sm font-medium">
      Full Name *
    </label>
    <Input
      id="name"
      placeholder="John Doe"
      required
      value={formData.name}
      onChange={handleChange}
      className="h-11 md:h-10 text-base"
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="email" className="text-sm md:text-sm font-medium">
      Work Email *
    </label>
    <Input
      id="email"
      type="email"
      placeholder="john@company.com"
      required
      value={formData.email}
      onChange={handleChange}
      className="h-11 md:h-10 text-base"
    />
  </div>
</div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm md:text-sm font-medium">
          Company Name
        </label>
        <Input id="company" placeholder="Your Company" value={formData.company} onChange={handleChange} className="h-11 md:h-10 text-base" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
        <div className="space-y-2">
          <label htmlFor="llmProvider" className="text-sm md:text-sm font-medium">
            LLM Provider *
          </label>
          <select
            id="llmProvider"
            required
            value={formData.llmProvider}
            onChange={handleChange}
            className="w-full h-11 md:h-10 px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          <label htmlFor="monthlySpend" className="text-sm md:text-sm font-medium">
            Approx. Monthly Spend *
          </label>
          <Input
            id="monthlySpend"
            type="text"
            placeholder="e.g., $5,000"
            required
            value={formData.monthlySpend}
            onChange={handleChange}
            className="h-11 md:h-10 text-base"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="details" className="text-sm md:text-sm font-medium">
          Additional Details
        </label>
        <Textarea
          id="details"
          placeholder="Tell us more about your LLM usage and optimization goals..."
          className="min-h-[120px] text-base"
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
    <section id="contact" className="py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 bg-muted/30 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 break-words px-2">
            What You'll Get
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto break-words px-2">
            Each deliverable is actionable, transparent, and designed for both your technical and executive stakeholders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center w-full">
          {/* Left Side - Benefits */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold break-words">Ready to optimize?</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg break-words">Cost per query analysis</h4>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">
                    Transparent breakdown of how much you're spending per request
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg break-words">Token waste percentage</h4>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">
                    Exact metrics on wasted tokens and optimization opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg break-words">Prompt efficiency score</h4>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">
                   Data-backed analysis of prompt and context optimization potential
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg break-words">ROI projection</h4>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">
                   Expected savings timeline with clear impact forecasting
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg max-w-full overflow-hidden">
            {form}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
