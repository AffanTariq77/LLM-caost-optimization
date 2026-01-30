import React, { useState } from 'react';
import {
  Button,
  Section,
  Card,
  AccordionItem,
  FormInput,
  FormSelect,
} from '../components';

interface FormData {
  name: string;
  company: string;
  email: string;
  provider: string;
  monthlySpend: string;
}

export const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    provider: '',
    monthlySpend: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Integrate with backend API for form submission
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', company: '', email: '', provider: '', monthlySpend: '' });
  };

  const llmProviders = [
    { value: 'openai', label: 'OpenAI' },
    { value: 'anthropic', label: 'Anthropic' },
    { value: 'gemini', label: 'Gemini' },
    { value: 'mistral', label: 'Mistral' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Strategic Pathway to Efficient LLM Usage, Get a Free Cost Audit
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Unlock hidden inefficiencies in your language model deployments and reduce token and model costs by up to 80 percent without compromising performance.
            </p>
            <div className="mb-8">
              <p className="text-sm text-gray-600 italic">
                Delivered by disciplined engineering teams, mission ready for your LLM stack.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Run Your Free Audit</h2>
            <FormInput
              label="Name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
            <FormInput
              label="Company"
              name="company"
              placeholder="Your company"
              value={formData.company}
              onChange={handleFormChange}
              required
            />
            <FormInput
              label="Work Email"
              name="email"
              type="email"
              placeholder="your.email@company.com"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <FormSelect
              label="LLM Provider"
              name="provider"
              value={formData.provider}
              onChange={handleFormChange}
              options={llmProviders}
              required
            />
            <FormInput
              label="Approx. Monthly Spend"
              name="monthlySpend"
              placeholder="e.g., $5,000"
              value={formData.monthlySpend}
              onChange={handleFormChange}
              required
            />
            <Button type="submit" variant="primary" className="w-full">
              Run Your Free Audit
            </Button>
          </form>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section className="bg-gray-50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Language model costs are spiraling out of control. Most teams don't realize how much they're wasting through preventable inefficiencies. Without visibility and optimization, your LLM spend becomes a black hole.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600">•</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Long or inflated prompts waste thousands of tokens per query
              </p>
              <p className="text-gray-600">
                Unnecessary context and repetitive instructions add up fast across millions of requests.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600">•</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Inefficient routing sends simple requests into high cost models
              </p>
              <p className="text-gray-600">
                Without proper logic, all queries default to expensive models that aren't necessary.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600">•</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Context bloat and redundant inputs increase usage
              </p>
              <p className="text-gray-600">
                Passing unnecessary data multiplies token costs across every request.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600">•</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Lack of observability hides where money is spent
              </p>
              <p className="text-gray-600">
                Without proper tracking, you're flying blind on your LLM spend.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg font-semibold text-gray-900 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          Many teams overspend by 40 to 80 percent because of preventable inefficiencies.
        </p>
      </Section>

      {/* The Solution Section */}
  <Section>
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      The Solution
    </h2>
    <p className="text-lg text-gray-700 mb-2">
      LLM Costing provides a disciplined engineering approach with an automated optimization funnel. We identify inefficiencies, quantify savings, and implement a roadmap to reduce your LLM costs sustainably.
    </p>
    <p className="text-lg text-gray-700">
      Our process is built on proven strategies: audit, analyze, optimize, and monitor.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-8 mb-8">
    <Card
      title="Step 1: Automated LLM Cost Audit (Free)"
      description="Get instant visibility into your LLM spending without sharing sensitive data."
    >
      <ul className="space-y-2 text-gray-700">
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Token waste percentage analysis</li>
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Model usage breakdown by tier</li>
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Estimated monthly savings potential</li>
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Next step recommendations</li>
      </ul>
    </Card>

    <Card
      title="Step 2: Senior Engineer Audit ($199–$299)"
      description="Deep-dive technical analysis with actionable optimization roadmap."
    >
      <ul className="space-y-2 text-gray-700">
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Prompt and context efficiency analysis</li>
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Model routing and cascading strategy</li>
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Architecture and caching recommendations</li>
        <li className="flex gap-2"><span className="text-blue-600">✓</span>Cost saving roadmap with projected ROI</li>
      </ul>
    </Card>

    <Card
      title="Step 3: Monthly Retainer"
      description="Ongoing optimization, monitoring, and dedicated support."
    >
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-3">Pricing Tiers:</p>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold">Essential:</span> $1,000 / month</li>
          <li><span className="font-semibold">Pro:</span> $2,500 / month</li>
          <li><span className="font-semibold">Enterprise:</span> $5,000+</li>
        </ul>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm font-semibold text-gray-900 mb-2">Includes:</p>
        <ul className="space-y-1 text-gray-700 text-sm">
          <li className="flex gap-2"><span className="text-blue-600">✓</span>Token tracking and anomaly alerts</li>
          <li className="flex gap-2"><span className="text-blue-600">✓</span>Model routing optimization</li>
          <li className="flex gap-2"><span className="text-blue-600">✓</span>Monthly performance reports</li>
          <li className="flex gap-2"><span className="text-blue-600">✓</span>Dedicated AI engineer</li>
        </ul>
      </div>
    </Card>
  </div>

  {/* CTA Buttons */}
  <div className="grid md:grid-cols-3 gap-8">
    <Button variant="secondary" className="w-full">
      Run Free Audit
    </Button>
    <Button variant="secondary" className="w-full">
      Book Engineer Audit
    </Button>
    <Button variant="secondary" className="w-full">
      Join the Retainer
    </Button>
  </div>
</Section>


      {/* How It Works Section */}
     <Section className="bg-gray-50">
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      How It Works
    </h2>
  </div>

  {/* Step Numbers */}
  <div className="grid md:grid-cols-3 gap-8 mb-6">
    {[1, 2, 3].map((step) => (
      <div key={step} className="flex justify-center">
        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
          {step}
        </div>
      </div>
    ))}
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-8 mb-8">
    <Card
      title="Step 1: Run the Free Audit"
      description="Get an instant analysis of your LLM spending and identify key inefficiencies."
    />
    <Card
      title="Step 2: Book the Engineer Audit"
      description="Our senior engineers deep-dive into your systems and create a detailed optimization roadmap."
    />
    <Card
      title="Step 3: Join the Retainer"
      description="Implement and maintain optimizations with ongoing support and monitoring."
    />
  </div>

  <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
    Each step is built on disciplined engineering principles and measurable results. You only move forward when the ROI is clear and the path is strategic.
  </p>
</Section>


      {/* What You'll Get Section */}
      <Section>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You'll Get
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600 flex-shrink-0">✓</div>
            <div>
              <p className="font-semibold text-gray-900">Cost per query analysis</p>
              <p className="text-gray-600 text-sm">Know exactly what each request costs across your system.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600 flex-shrink-0">✓</div>
            <div>
              <p className="font-semibold text-gray-900">Token waste percentage</p>
              <p className="text-gray-600 text-sm">Identify and eliminate unnecessary token consumption.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600 flex-shrink-0">✓</div>
            <div>
              <p className="font-semibold text-gray-900">Prompt and context efficiency score</p>
              <p className="text-gray-600 text-sm">Measure and improve prompt design efficiency.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600 flex-shrink-0">✓</div>
            <div>
              <p className="font-semibold text-gray-900">Caching and routing potential</p>
              <p className="text-gray-600 text-sm">Unlock savings through smarter architecture patterns.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl text-blue-600 flex-shrink-0">✓</div>
            <div>
              <p className="font-semibold text-gray-900">ROI projection with savings timeline</p>
              <p className="text-gray-600 text-sm">See exactly when and how much you'll save.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why LLM Costing Section */}
      <Section className="bg-blue-50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why LLM Costing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <div className="flex gap-4">
            <div className="text-3xl text-blue-600 flex-shrink-0">★</div>
            <div>
              <p className="font-semibold text-gray-900 text-lg mb-1">Proven savings up to 80 percent</p>
              <p className="text-gray-600">Our clients consistently see dramatic cost reductions with zero performance loss.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl text-blue-600 flex-shrink-0">★</div>
            <div>
              <p className="font-semibold text-gray-900 text-lg mb-1">Mission ready engineering teams</p>
              <p className="text-gray-600">We bring disciplined, battle-tested expertise to every optimization.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl text-blue-600 flex-shrink-0">★</div>
            <div>
              <p className="font-semibold text-gray-900 text-lg mb-1">Transparent ROI</p>
              <p className="text-gray-600">Every optimization is tied to measurable cost and performance metrics.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl text-blue-600 flex-shrink-0">★</div>
            <div>
              <p className="font-semibold text-gray-900 text-lg mb-1">Full funnel optimization approach</p>
              <p className="text-gray-600">From audit to implementation to monitoring, we handle it all strategically.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl space-y-4">
          <AccordionItem
            question="Is the free audit really free?"
            answer="Yes, completely free. Our automated audit runs without any cost or obligation. You'll get a detailed report of your current LLM spending and identified inefficiencies. No credit card required, no hidden fees."
          />
          <AccordionItem
            question="What kind of data do you need?"
            answer="For the free audit, we need basic information about your LLM usage patterns and current spend. We don't need access to your actual prompts or sensitive data. Everything is handled securely and confidentially."
          />
          <AccordionItem
            question="How is this different from generic monitoring tools?"
            answer="Most monitoring tools show you what's happening. We show you what's wrong and how to fix it. Our audits are paired with senior engineer expertise to create actionable optimization roadmaps backed by real ROI projections."
          />
          <AccordionItem
            question="How long until we see results?"
            answer="Many teams see immediate savings from quick wins identified in the engineer audit. Full optimization typically takes 2-4 weeks to implement. Our retainer clients benefit from ongoing optimization with results compounding over time."
          />
        </div>
      </Section>

      
    </div>
  );
};
