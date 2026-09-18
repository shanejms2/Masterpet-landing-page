'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import PageHero from '@/components/PageHero';
import Container from '@/components/Container';

export default function AccountDeletionPage() {
    const router = useRouter();
    const [contactType, setContactType] = useState<'email' | 'phone'>('email');
    const [contactValue, setContactValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success('Account deletion request submitted successfully');
            router.push('/');
        } catch (error) {
            console.error('Error submitting account deletion request:', error);
            toast.error('Failed to submit account deletion request');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white pb-16">
            <PageHero
                kicker="Account"
                title="Account Deletion"
                description="Please provide your contact information to proceed with account deletion. We will send you a confirmation link to complete the process."
            />
            <Container>
                <Card className="max-w-md mx-auto mt-10">
                    <CardHeader>
                        <CardTitle className="text-brand-blue">Request deletion</CardTitle>
                        <CardDescription>
                            Choose how we should reach you to confirm this request.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <Label>Contact Method</Label>
                                <RadioGroup
                                    value={contactType}
                                    onValueChange={(value: 'email' | 'phone') => setContactType(value)}
                                    className="flex space-x-4"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="email" id="email" />
                                        <Label htmlFor="email">Email</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="phone" id="phone" />
                                        <Label htmlFor="phone">Phone</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contact">
                                    {contactType === 'email' ? 'Email Address' : 'Phone Number'}
                                </Label>
                                <Input
                                    id="contact"
                                    type={contactType === 'email' ? 'email' : 'tel'}
                                    placeholder={
                                        contactType === 'email'
                                            ? 'Enter your email address'
                                            : 'Enter your phone number'
                                    }
                                    value={contactValue}
                                    onChange={(e) => setContactValue(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    By submitting this form, you acknowledge that:
                                </p>
                                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                                    <li>Your account will be permanently deleted</li>
                                    <li>All your data will be removed from our systems</li>
                                    <li>This action cannot be undone</li>
                                </ul>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <Button type="submit" disabled={isLoading} className="rounded-full bg-brand-blue hover:bg-brand-blue/90">
                                    {isLoading ? 'Submitting...' : 'Submit Deletion Request'}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="rounded-full"
                                    onClick={() => router.back()}
                                    disabled={isLoading}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
