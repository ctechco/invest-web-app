
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

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
      text: 'Hello! Welcome to Future Wave Investments. How can I help you today?',
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Make chat accessible globally
    window.liveSupportChat = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen(!isOpen)
    };

    return () => {
      delete window.liveSupportChat;
    };
  }, [isOpen]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');

      // Simulate support response
      setTimeout(() => {
        const supportMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for your message. One of our advisors will assist you shortly. In the meantime, feel free to ask any questions about our investment services.',
          sender: 'support',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, supportMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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

        {!isMinimized && (
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
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="h-8 w-8 bg-futurewave-purple hover:bg-[#8a74e8]"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default LiveSupportChat;
