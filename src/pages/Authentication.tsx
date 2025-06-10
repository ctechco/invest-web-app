
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useAuth';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { LogoLink } from '@/components/Logo';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Authentication = () => {
  const isMobile = useIsMobile();
  const { user, signIn, signUp, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  
  const form = useForm({
    defaultValues: {
      email: '',
    }
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await signIn(email, password);
    
    if (error) {
      toast.error(error.message || 'Failed to sign in');
    } else {
      toast.success('Successfully signed in!');
      navigate('/dashboard');
    }
    
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('registerEmail') as string;
    const password = formData.get('registerPassword') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const fullName = `${firstName} ${lastName}`.trim();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }

    const { error } = await signUp(email, password, fullName);
    
    if (error) {
      toast.error(error.message || 'Failed to create account');
    } else {
      toast.success('Account created successfully! Please check your email for verification.');
    }
    
    setIsLoading(false);
  };

  const handleForgotPassword = async (data: { email: string }) => {
    setIsLoading(true);
    
    const { error } = await resetPassword(data.email);
    
    if (error) {
      toast.error(error.message || 'Failed to send reset email');
    } else {
      toast.success(`Password reset link sent to ${data.email}`);
      setForgotPasswordOpen(false);
    }
    
    setIsLoading(false);
  };

  const ForgotPasswordForm = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForgotPassword)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="name@example.com" 
                  type="email" 
                  {...field} 
                  required 
                />
              </FormControl>
              <FormDescription>
                We'll send you a link to reset your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full bg-[#9b87f5] hover:bg-[#8a74e8]" 
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Reset Password'}
        </Button>
      </form>
    </Form>
  );

  const ForgotPasswordTrigger = 
    <button type="button" className="text-xs text-[#9b87f5] hover:underline">
      Forgot password?
    </button>;

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Account Access" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      {/* Logo Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <LogoLink className="inline-block" size="md" variant="full" />
          </div>
        </div>
      </section>
      
      {/* Page Header */}
      <section className="bg-futurewave-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Account Access</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">
              Welcome to Future Wave
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Access your investment account to track your portfolio, analyze market data, and manage your financial future with our comprehensive platform.
            </p>
          </div>
        </div>
      </section>
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-0'} px-4 py-6 flex items-center justify-center`}>
        <div className="w-full max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Account Login</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        {isMobile ? (
                          <Drawer open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen}>
                            <DrawerTrigger asChild>
                              {ForgotPasswordTrigger}
                            </DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader>
                                <DrawerTitle>Forgot Password</DrawerTitle>
                                <DrawerDescription>
                                  Enter your email address below to receive a password reset link.
                                </DrawerDescription>
                              </DrawerHeader>
                              <div className="p-4">
                                <ForgotPasswordForm />
                              </div>
                            </DrawerContent>
                          </Drawer>
                        ) : (
                          <Dialog open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen}>
                            <DialogTrigger asChild>
                              {ForgotPasswordTrigger}
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Forgot Password</DialogTitle>
                                <DialogDescription>
                                  Enter your email address below to receive a password reset link.
                                </DialogDescription>
                              </DialogHeader>
                              <ForgotPasswordForm />
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                      <Input id="password" name="password" type="password" required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#8a74e8]" disabled={isLoading}>
                      {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Start your investment journey with Future Wave
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <Input id="registerEmail" name="registerEmail" type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <Input id="registerPassword" name="registerPassword" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" name="confirmPassword" type="password" required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the Terms of Service and Privacy Policy
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#8a74e8]" disabled={isLoading}>
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Authentication;
