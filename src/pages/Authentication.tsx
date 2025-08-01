
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff } from 'lucide-react';
import { useAuthForm } from '@/hooks/useAuthForm';

const Authentication = () => {
  const isMobile = useIsMobile();
  const [showPassword, setShowPassword] = useState(false);
  const {
    isLoading,
    message,
    loginData,
    setLoginData,
    signupData,
    setSignupData,
    resetEmail,
    setResetEmail,
    handleLogin,
    handleSignup,
    handleResetPassword,
  } = useAuthForm();


  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Authentication" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-futurewave-purple mb-4">Welcome to Future Wave Investments</h2>
              <p className="text-lg text-gray-600">
                Sign in to your account or create a new one to get started.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Get Started</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="login">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="reset">Reset</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input
                          type="email"
                          value={loginData.email}
                          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            placeholder="Your password"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-futurewave-purple hover:bg-futurewave-purple/90" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="signup">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <Input
                          type="text"
                          value={signupData.fullName}
                          onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input
                          type="email"
                          value={signupData.email}
                          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <Input
                          type="password"
                          value={signupData.password}
                          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                          placeholder="Choose a password"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <Input
                          type="password"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                          placeholder="Confirm your password"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-futurewave-purple hover:bg-futurewave-purple/90" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="reset">
                    <form onSubmit={handleResetPassword} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input
                          type="email"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-futurewave-purple hover:bg-futurewave-purple/90" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Reset Password'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
                
                {message && (
                  <div className={`mt-4 p-3 rounded text-sm ${
                    message.includes('Check your email') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {message}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                By continuing, you agree to our{' '}
                <Link to="/terms" className="text-futurewave-purple hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-futurewave-purple hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
