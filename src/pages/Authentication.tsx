
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
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
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Authentication = () => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  
  const form = useForm({
    defaultValues: {
      email: '',
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleForgotPassword = (data: { email: string }) => {
    setIsLoading(true);
    // Simulate password reset email
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Password reset link sent to ${data.email}`);
      setForgotPasswordOpen(false);
    }, 1500);
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
    <button className="text-xs text-[#9b87f5] hover:underline">
      Forgot password?
    </button>;

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Account Access" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6 flex items-center justify-center`}>
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <LogoLink className="inline-block" size="md" />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">Welcome to Future Wave</h2>
            <p className="text-gray-600">Access your investment account</p>
          </div>

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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" required />
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
                      <Input id="password" type="password" required />
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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <Input id="registerEmail" type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <Input id="registerPassword" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the <Link to="/terms" className="text-[#9b87f5] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#9b87f5] hover:underline">Privacy Policy</Link>
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
