
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Minimize2, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const LiveSupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Future Wave Investments. Please provide your email to get started.',
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Make chat accessible globally
    (window as any).liveSupportChat = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen(!isOpen)
    };

    return () => {
      delete (window as any).liveSupportChat;
    };
  }, []);

  const saveConversation = async (currentMessages: Message[]) => {
    setIsSending(true);
    try {
      const { data, error } = await supabase.functions.invoke('save-support-conversation', {
        body: {
          conversationId,
          visitorEmail,
          messages: currentMessages,
        },
      });

      if (error) throw error;
      
      if (data && !conversationId) {
        setConversationId(data.id);
      }
    } catch (error) {
      console.error('Error saving conversation:', error);
      // Optionally show an error message to the user in a toast
    } finally {
      setIsSending(false);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setNewMessage('');
      
      await saveConversation(updatedMessages);

      // Simulate support response and save it
      setTimeout(async () => {
        const supportMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for your message. We have received it and one of our advisors will respond to your email shortly.',
          sender: 'support',
          timestamp: new Date()
        };
        const finalMessages = [...updatedMessages, supportMessage];
        setMessages(finalMessages);
        await saveConversation(finalMessages);
      }, 1000);
    }
  };
  
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (visitorEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visitorEmail)) {
      setEmailSubmitted(true);
      const initialMessages = [
        {
          id: '1',
          text: 'Hello! Welcome to Future Wave Investments. How can I help you today?',
          sender: 'support',
          timestamp: new Date()
        }
      ]
      setMessages(initialMessages);
      saveConversation(initialMessages);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSending) {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 h-12 w-12 rounded-full bg-futurewave-purple hover:bg-[#8a74e8] shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    );
  }

  const renderEmailForm = () => (
    <CardContent className="p-4 flex flex-col justify-center items-center h-full">
        <Mail className="h-12 w-12 text-futurewave-purple mb-4" />
        <h3 className="text-lg font-semibold text-center mb-2">Live Support</h3>
        <p className="text-sm text-gray-600 text-center mb-4">Please provide your email so we can get back to you.</p>
        <form onSubmit={handleEmailSubmit} className="w-full space-y-3">
          <Input
            type="email"
            value={visitorEmail}
            onChange={(e) => setVisitorEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="text-sm"
          />
          <Button type="submit" className="w-full bg-futurewave-purple hover:bg-[#8a74e8]">
            Start Chat
          </Button>
        </form>
      </CardContent>
  );

  const renderChat = () => (
    <CardContent className="p-0 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-64">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-2 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-futurewave-purple text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 text-sm"
            disabled={isSending}
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="h-8 w-8 bg-futurewave-purple hover:bg-[#8a74e8]"
            disabled={isSending}
          >
            <Send className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </CardContent>
  );

  return (
    <div className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${isMinimized ? 'h-12' : 'h-96'} w-80`}>
      <Card className="h-full shadow-xl border-2 border-futurewave-purple">
        <CardHeader className="bg-futurewave-purple text-white p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Live Support</CardTitle>
            <div className="flex gap-1">
              <Button
                onClick={() => setIsMinimized(!isMinimized)}
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
              >
                <Minimize2 className="h-3 w-3" />
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (emailSubmitted ? renderChat() : renderEmailForm())}
      </Card>
    </div>
  );
};

export default LiveSupportChat;
