import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { FileText, Download, Share2, Loader2 } from "lucide-react";
import { useState } from "react";

const Reader = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample content for demonstration
  const originalText = `Artificial Intelligence and Machine Learning in Education

Artificial intelligence (AI) and machine learning (ML) are rapidly transforming the educational landscape. These technologies are being integrated into various aspects of education, from personalized learning experiences to automated grading systems and intelligent tutoring systems.

Machine learning algorithms can analyze vast amounts of student data to identify patterns in learning behaviors, predict academic performance, and recommend personalized learning paths. This level of customization was previously impossible to achieve at scale with traditional teaching methods.

Natural language processing (NLP), a subset of AI, enables computers to understand, interpret, and generate human language. In educational contexts, NLP powers chatbots that can answer student questions, provide feedback on written assignments, and facilitate language learning through conversational interfaces.

Furthermore, AI-driven adaptive learning platforms can adjust the difficulty and pace of content delivery based on individual student performance and engagement levels. This ensures that each student receives instruction tailored to their specific needs and learning style.`;

  const summaryText = `AI and ML are transforming education through:

• Personalized learning experiences using ML algorithms
• Analysis of student data to predict performance
• Automated grading and intelligent tutoring systems
• NLP-powered chatbots for student support
• Adaptive learning platforms that adjust to individual needs

These technologies enable scalable customization that was previously impossible with traditional teaching methods.`;

  const simplifiedText = `AI and Machine Learning in Schools

Artificial Intelligence (AI) and Machine Learning (ML) are changing how we learn and teach.

What can these technologies do?
- They create learning plans that fit each student
- They can predict how well students will do
- They help grade homework automatically
- They provide smart tutoring help

Chatbots (computer helpers) can:
- Answer student questions
- Give feedback on homework
- Help students learn new languages

The best part? Learning platforms can now change based on how each student learns. If something is too hard, the system makes it easier. If it's too easy, it makes it harder. This helps every student learn at their own speed.`;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">AI and Machine Learning in Education.pdf</h1>
              <p className="text-muted-foreground">Uploaded 2 minutes ago • 4 pages</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Document Reader */}
          <Card className="shadow-lg">
            <CardContent className="p-0">
              <Tabs defaultValue="original" className="w-full">
                <div className="border-b border-border bg-muted/30 px-6 py-3">
                  <TabsList className="bg-background">
                    <TabsTrigger value="original" className="gap-2">
                      <FileText className="h-4 w-4" />
                      Original
                    </TabsTrigger>
                    <TabsTrigger value="summary" className="gap-2">
                      <FileText className="h-4 w-4" />
                      Summary
                    </TabsTrigger>
                    <TabsTrigger value="simplified" className="gap-2">
                      <FileText className="h-4 w-4" />
                      Simplified
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="original" className="m-0 p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="whitespace-pre-line text-foreground leading-relaxed">
                      {originalText}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="summary" className="m-0 p-8">
                  {isProcessing ? (
                    <div className="flex flex-col items-center justify-center py-20 space-y-4">
                      <Loader2 className="h-12 w-12 animate-spin text-primary" />
                      <p className="text-muted-foreground">Generating summary...</p>
                    </div>
                  ) : (
                    <div className="prose prose-lg max-w-none">
                      <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                        <p className="text-sm text-muted-foreground mb-2">AI-Generated Summary</p>
                        <p className="text-xs text-muted-foreground">Processed in 2.3 seconds</p>
                      </div>
                      <div className="whitespace-pre-line text-foreground leading-relaxed">
                        {summaryText}
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="simplified" className="m-0 p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
                      <p className="text-sm text-foreground mb-2">Simplified for Easy Reading</p>
                      <p className="text-xs text-muted-foreground">Reading Level: Grade 6-8</p>
                    </div>
                    <div className="whitespace-pre-line text-foreground leading-relaxed">
                      {simplifiedText}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Features Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2 text-primary">Original Text</h4>
                <p className="text-sm text-muted-foreground">
                  View the complete, unmodified document as uploaded
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2 text-primary">AI Summary</h4>
                <p className="text-sm text-muted-foreground">
                  Get key points and main ideas in seconds
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2 text-secondary">Simplified Version</h4>
                <p className="text-sm text-muted-foreground">
                  Easy-to-understand language for faster learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
