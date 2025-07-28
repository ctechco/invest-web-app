import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { Bot, Send, TrendingUp, DollarSign, PieChart } from 'lucide-react';

const AIAdvisor = () => {
  const [question, setQuestion] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const quickQuestions = [
    "What's a good investment strategy for beginners?",
    "How should I diversify my portfolio?",
    "What are the current market trends?",
    "Should I invest in ETFs or individual stocks?",
    "How much should I allocate to bonds vs stocks?"
  ];

  const askAI = async (questionText?: string) => {
    const queryText = questionText || question;
    if (!queryText.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-investment-advisor', {
        body: {
          question: queryText,
          context: `User email: ${user?.email}, Portfolio context: Beginner investor`
        },
      });

      if (error) throw error;

      setAdvice(data.advice);
      if (!questionText) setQuestion(''); // Clear input only if not from quick question
      
      toast({
        title: "AI Advice Received",
        description: "Your investment advice is ready!",
      });
    } catch (error) {
      console.error('Error getting AI advice:', error);
      toast({
        title: "Error",
        description: "Failed to get AI advice. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-primary" />
          <span>AI Investment Advisor</span>
          <Badge variant="secondary">Powered by GPT-4</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Questions */}
        <div>
          <h3 className="text-sm font-medium mb-2">Quick Questions:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {quickQuestions.map((q, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-left justify-start h-auto py-2 px-3"
                onClick={() => askAI(q)}
                disabled={isLoading}
              >
                <div className="flex items-start space-x-2">
                  {index === 0 && <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />}
                  {index === 1 && <PieChart className="w-3 h-3 mt-0.5 flex-shrink-0" />}
                  {index === 2 && <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />}
                  {index === 3 && <DollarSign className="w-3 h-3 mt-0.5 flex-shrink-0" />}
                  {index === 4 && <PieChart className="w-3 h-3 mt-0.5 flex-shrink-0" />}
                  <span className="text-xs">{q}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Question Input */}
        <div>
          <h3 className="text-sm font-medium mb-2">Ask Your Own Question:</h3>
          <div className="flex space-x-2">
            <Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about investment strategies, market analysis, portfolio allocation..."
              className="flex-1"
              rows={3}
            />
            <Button 
              onClick={() => askAI()}
              disabled={isLoading || !question.trim()}
              size="sm"
              className="self-end"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* AI Response */}
        {advice && (
          <div className="border rounded-lg p-4 bg-muted/50">
            <h3 className="font-medium mb-2 flex items-center space-x-2">
              <Bot className="w-4 h-4 text-primary" />
              <span>AI Investment Advice:</span>
            </h3>
            <p className="text-sm whitespace-pre-wrap">{advice}</p>
            <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
              <strong>Disclaimer:</strong> This is educational content only. Please consult with qualified financial professionals for personalized investment advice.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIAdvisor;