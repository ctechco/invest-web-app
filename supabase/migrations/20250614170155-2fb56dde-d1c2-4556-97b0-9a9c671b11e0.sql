
-- Create a table to store live support chat conversations
CREATE TABLE public.support_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  visitor_email TEXT NOT NULL,
  messages JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Enable Row Level Security. By not adding any policies, we ensure
-- that this table can only be accessed via the service_role key,
-- which we will use in a secure edge function.
ALTER TABLE public.support_conversations ENABLE ROW LEVEL SECURITY;

-- Create a trigger to automatically update the 'updated_at' column
-- whenever a conversation is modified.
CREATE TRIGGER update_support_conversations_updated_at
  BEFORE UPDATE ON public.support_conversations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
