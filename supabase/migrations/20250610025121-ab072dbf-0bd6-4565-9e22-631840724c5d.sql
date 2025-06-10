
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  date_of_birth DATE,
  risk_tolerance TEXT CHECK (risk_tolerance IN ('conservative', 'moderate', 'aggressive')),
  investment_experience TEXT CHECK (investment_experience IN ('beginner', 'intermediate', 'advanced')),
  annual_income DECIMAL(12,2),
  net_worth DECIMAL(12,2),
  investment_goals TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create user portfolios table
CREATE TABLE public.portfolios (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  total_value DECIMAL(12,2) DEFAULT 0,
  currency TEXT DEFAULT 'USD',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create portfolio holdings table
CREATE TABLE public.portfolio_holdings (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  portfolio_id UUID NOT NULL REFERENCES public.portfolios(id) ON DELETE CASCADE,
  symbol TEXT NOT NULL,
  name TEXT NOT NULL,
  quantity DECIMAL(18,8) NOT NULL,
  purchase_price DECIMAL(12,2) NOT NULL,
  current_price DECIMAL(12,2),
  purchase_date DATE NOT NULL,
  asset_type TEXT CHECK (asset_type IN ('stock', 'bond', 'etf', 'mutual_fund', 'crypto', 'commodity', 'other')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create transactions table
CREATE TABLE public.transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  portfolio_id UUID REFERENCES public.portfolios(id) ON DELETE SET NULL,
  symbol TEXT NOT NULL,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('buy', 'sell', 'dividend', 'deposit', 'withdrawal')),
  quantity DECIMAL(18,8),
  price DECIMAL(12,2),
  total_amount DECIMAL(12,2) NOT NULL,
  fees DECIMAL(12,2) DEFAULT 0,
  transaction_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create watchlists table
CREATE TABLE public.watchlists (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create watchlist items table
CREATE TABLE public.watchlist_items (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  watchlist_id UUID NOT NULL REFERENCES public.watchlists(id) ON DELETE CASCADE,
  symbol TEXT NOT NULL,
  name TEXT NOT NULL,
  added_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  notes TEXT,
  PRIMARY KEY (id),
  UNIQUE(watchlist_id, symbol)
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_holdings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.watchlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.watchlist_items ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Create RLS policies for portfolios
CREATE POLICY "Users can view their own portfolios" 
  ON public.portfolios 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own portfolios" 
  ON public.portfolios 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own portfolios" 
  ON public.portfolios 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own portfolios" 
  ON public.portfolios 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for portfolio holdings
CREATE POLICY "Users can view their own portfolio holdings" 
  ON public.portfolio_holdings 
  FOR SELECT 
  USING (auth.uid() = (SELECT user_id FROM public.portfolios WHERE id = portfolio_id));

CREATE POLICY "Users can insert their own portfolio holdings" 
  ON public.portfolio_holdings 
  FOR INSERT 
  WITH CHECK (auth.uid() = (SELECT user_id FROM public.portfolios WHERE id = portfolio_id));

CREATE POLICY "Users can update their own portfolio holdings" 
  ON public.portfolio_holdings 
  FOR UPDATE 
  USING (auth.uid() = (SELECT user_id FROM public.portfolios WHERE id = portfolio_id));

CREATE POLICY "Users can delete their own portfolio holdings" 
  ON public.portfolio_holdings 
  FOR DELETE 
  USING (auth.uid() = (SELECT user_id FROM public.portfolios WHERE id = portfolio_id));

-- Create RLS policies for transactions
CREATE POLICY "Users can view their own transactions" 
  ON public.transactions 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own transactions" 
  ON public.transactions 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own transactions" 
  ON public.transactions 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own transactions" 
  ON public.transactions 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for watchlists
CREATE POLICY "Users can view their own watchlists" 
  ON public.watchlists 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own watchlists" 
  ON public.watchlists 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own watchlists" 
  ON public.watchlists 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own watchlists" 
  ON public.watchlists 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for watchlist items
CREATE POLICY "Users can view their own watchlist items" 
  ON public.watchlist_items 
  FOR SELECT 
  USING (auth.uid() = (SELECT user_id FROM public.watchlists WHERE id = watchlist_id));

CREATE POLICY "Users can insert their own watchlist items" 
  ON public.watchlist_items 
  FOR INSERT 
  WITH CHECK (auth.uid() = (SELECT user_id FROM public.watchlists WHERE id = watchlist_id));

CREATE POLICY "Users can update their own watchlist items" 
  ON public.watchlist_items 
  FOR UPDATE 
  USING (auth.uid() = (SELECT user_id FROM public.watchlists WHERE id = watchlist_id));

CREATE POLICY "Users can delete their own watchlist items" 
  ON public.watchlist_items 
  FOR DELETE 
  USING (auth.uid() = (SELECT user_id FROM public.watchlists WHERE id = watchlist_id));

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1))
  );
  
  -- Create a default portfolio for the new user
  INSERT INTO public.portfolios (user_id, name, description, is_active)
  VALUES (
    NEW.id,
    'My Portfolio',
    'Default investment portfolio',
    true
  );
  
  -- Create a default watchlist for the new user
  INSERT INTO public.watchlists (user_id, name, description, is_default)
  VALUES (
    NEW.id,
    'My Watchlist',
    'Default watchlist for tracking investments',
    true
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_profiles_updated_at 
  BEFORE UPDATE ON public.profiles 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_portfolios_updated_at 
  BEFORE UPDATE ON public.portfolios 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_portfolio_holdings_updated_at 
  BEFORE UPDATE ON public.portfolio_holdings 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_watchlists_updated_at 
  BEFORE UPDATE ON public.watchlists 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
