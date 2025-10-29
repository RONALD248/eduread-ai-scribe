import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "KSh 0",
      period: "forever",
      description: "Perfect for trying out EduRead",
      features: [
        "5 document uploads per month",
        "Basic AI summarization",
        "Text extraction",
        "PDF & TXT support",
        "Community support",
      ],
      cta: "Get Started",
      variant: "outline" as const,
    },
    {
      name: "Student",
      price: "KSh 500",
      period: "per month",
      description: "Best for individual students",
      features: [
        "50 document uploads per month",
        "Advanced AI summarization",
        "Text simplification",
        "All file formats (PDF, DOCX, TXT)",
        "Priority processing",
        "Email support",
        "Study analytics",
      ],
      cta: "Start Free Trial",
      variant: "hero" as const,
      popular: true,
    },
    {
      name: "Professional",
      price: "KSh 1,500",
      period: "per month",
      description: "For researchers & professionals",
      features: [
        "Unlimited document uploads",
        "Premium AI features",
        "Multi-language translation",
        "Document Q&A chat",
        "Batch processing",
        "API access",
        "Priority support",
        "Custom integrations",
      ],
      cta: "Get Started",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your learning needs. All plans include a 7-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`
                  relative transition-all hover:shadow-xl
                  ${plan.popular 
                    ? 'border-2 border-primary shadow-lg scale-105' 
                    : 'border-2 hover:border-primary'
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-glow">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.variant}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Method */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Pay with M-PESA</h3>
                <p className="text-muted-foreground mb-6">
                  We accept M-PESA payments for all subscription plans. 
                  Fast, secure, and convenient payment for Kenyan users.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="px-6 py-3 bg-accent rounded-lg font-semibold text-primary">
                    M-PESA
                  </div>
                  <div className="px-6 py-3 bg-accent rounded-lg font-semibold text-primary">
                    Safaricom
                  </div>
                  <div className="px-6 py-3 bg-accent rounded-lg font-semibold text-primary">
                    Secure Payments
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can cancel your subscription at any time. No questions asked.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-muted-foreground">
                    We currently accept M-PESA payments for all subscription plans.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Is there a free trial?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! All paid plans include a 7-day free trial. No credit card required.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
