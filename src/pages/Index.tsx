import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { BookOpen, Brain, FileText, Sparkles, Upload, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import featureSummary from "@/assets/feature-summary.png";
import featureSimplify from "@/assets/feature-simplify.png";
import featureUpload from "@/assets/feature-upload.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                AI-Powered Learning Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Read Smarter,
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {" "}Learn Faster
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform complex documents into clear, understandable content with AI. 
                Perfect for students, researchers, and lifelong learners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/upload">
                  <Button variant="hero" size="lg">
                    <Upload className="h-5 w-5" />
                    Upload Document
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Documents Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Students learning together" 
                className="relative rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful Features for
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Effective Learning</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered tools help you understand and retain information better
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <img src={featureSummary} alt="AI Summarization" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">AI Summarization</h3>
                <p className="text-muted-foreground">
                  Get concise, accurate summaries of lengthy documents in seconds. 
                  Save time and focus on what matters most.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Brain className="h-4 w-4" />
                  Powered by Advanced AI
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <img src={featureSimplify} alt="Text Simplification" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Text Simplification</h3>
                <p className="text-muted-foreground">
                  Transform complex academic language into easy-to-understand text. 
                  Perfect for any reading level.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Zap className="h-4 w-4" />
                  Instant Simplification
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <img src={featureUpload} alt="Multi-format Support" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Multi-format Support</h3>
                <p className="text-muted-foreground">
                  Upload PDF, DOCX, TXT, and more. Our system handles all your 
                  document formats seamlessly.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <FileText className="h-4 w-4" />
                  All File Types
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Get started in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground shadow-glow">
                1
              </div>
              <h3 className="text-xl font-bold">Upload Document</h3>
              <p className="text-muted-foreground">
                Drag and drop or select your document. We support PDF, DOCX, and TXT files.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground shadow-glow">
                2
              </div>
              <h3 className="text-xl font-bold">AI Processing</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your document and generates summaries and simplified versions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground shadow-glow">
                3
              </div>
              <h3 className="text-xl font-bold">Read & Learn</h3>
              <p className="text-muted-foreground">
                Access your processed documents anytime, anywhere. Learn at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <Card className="border-2 border-primary bg-gradient-subtle">
            <CardContent className="py-16 text-center space-y-6">
              <h2 className="text-4xl font-bold">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students and professionals who are learning smarter with EduRead
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/upload">
                  <Button variant="hero" size="lg">
                    <Upload className="h-5 w-5" />
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">EduRead</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EduRead. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
