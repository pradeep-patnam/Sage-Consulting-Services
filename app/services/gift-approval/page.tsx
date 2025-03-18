"use client"

import type React from "react"

import { useState } from "react"
import { Gift, Upload, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { Calculator, KeyRound, FileCheck, SunSnow } from "lucide-react"


export default function GiftApprovalPage() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const [result, setResult] = useState<{
        status: "approved" | "rejected" | "pending" | null
        message: string
    } | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files))
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries());
        // Add files to form data
        files.forEach((file, index) => {
            formData.append(`file-${index}`, file)
        })

        try {
            // Replace with your actual API endpoint
            const responseToken = await fetch('/api/auth/token');
            const tokenData = await responseToken.json();

            if (!responseToken.ok) {
                throw new Error('Failed to fetch access token');
            }

            const accessToken = tokenData.access_token;

            const response = await fetch('https://complianceapproval-rok5k4-prod.pegalaunchpad.com/dx/api/application/v2/cases', {
              method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    caseTypeID: 'GiftApproval',
                    content: {
                        Channel: 'Web Form',
                        Description: data.giftDescription,
                        Value: data.estimatedValue,
                        RelationshipWithGiftGiver: data.relationship,
                        Justification: data.justification,
                    },
                    processID: 'pyStartCase',
                })
            })

            // Simulate response
             const result = await response.json()
            const caseInfo = result.data.caseInfo;
            console.log('API Response:', result);
            console.log('API Response:', response);
            if (response.ok) {
                // If the response is successful, handle the result
                if(caseInfo.stageID=="Completed") {
                    setResult({
                        status: 'approved', // or 'pending' based on the response
                        message: result.message || 'Gift submitted got approved',
                    });
                }
                if(caseInfo.stageID=="Rejected") {
                    setResult({
                        status: 'rejected', // or 'pending' based on the response
                        message: result.message || 'Gift submitted got rejected',
                    });
                }
            } else {
                throw new Error(result.message || 'Failed to submit request');
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            toast({
                title: "Submission failed",
                description: "There was an error submitting your request. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCancel = () => {
        // Reset form and state
        setFiles([])
        setResult(null)
        // Reset form fields
        const form = document.getElementById("gift-form") as HTMLFormElement
        if (form) form.reset()
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                                Gift Approval Assessment
                            </h1>
                            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                                Submit gifts for compliance review and approval
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                   <div className="mx-auto max-w-2xl">
                        {result ? (
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        {result.status === "approved" ? (
                                            <CheckCircle className="h-6 w-6 text-green-500" />
                                        ) : (
                                            <AlertCircle className="h-6 w-6 text-red-500" />
                                        )}
                                        <CardTitle>{result.status === "approved" ? "Approved" : "Rejected"}</CardTitle>
                                    </div>
                                    <CardDescription>Gift approval assessment result</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Alert>
                                        <AlertTitle>
                                            {result.status === "approved" ? "Gift Approved" : "Rejected"}
                                        </AlertTitle>
                                        <AlertDescription>{result.message}</AlertDescription>
                                    </Alert>
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={() => setResult(null)} className="w-full">
                                        Submit Another Request
                                    </Button>
                                </CardFooter>
                            </Card>
                        ) : (
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Gift className="h-6 w-6 text-primary" />
                                        <CardTitle>Gift Approval Form</CardTitle>
                                    </div>
                                    <CardDescription>Submit details about a gift for compliance review</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form id="gift-form" onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="gift-description">Gift Description</Label>
                                            <Textarea
                                                id="gift-description"
                                                name="giftDescription"
                                                placeholder="Provide a detailed description of the gift"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="estimated-value">Estimated Value in Euro</Label>
                                            <Input
                                                id="estimated-value"
                                                name="estimatedValue"
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                placeholder="0.00"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="relationship">Can you describe your relationship with gift giver?</Label>
                                            <Textarea
                                                id="relationship"
                                                name="relationship"
                                                placeholder="Describe your professional and/or personal relationship"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="justification">Justification for accepting the gift</Label>
                                            <Textarea
                                                id="justification"
                                                name="justification"
                                                placeholder="Explain why accepting this gift is appropriate"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="documents">Supporting documents</Label>
                                            <div className="grid w-full items-center gap-1.5">
                                                <Label
                                                    htmlFor="documents"
                                                    className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input bg-muted/50 px-4 py-5 text-center"
                                                >
                                                    <Upload className="h-8 w-8 text-muted-foreground" />
                                                    <div className="mt-2 text-xs text-muted-foreground">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </div>
                                                    <div className="mt-1 text-xs text-muted-foreground">PDF, JPG, PNG (max 10MB)</div>
                                                </Label>
                                                <Input id="documents" type="file" multiple className="hidden" onChange={handleFileChange} />
                                            </div>
                                            {files.length > 0 && (
                                                <div className="mt-2">
                                                    <p className="text-sm font-medium">Selected files:</p>
                                                    <ul className="mt-1 text-sm text-muted-foreground">
                                                        {files.map((file, index) => (
                                                            <li key={index}>{file.name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        <CardFooter className="flex justify-between px-0">
                                            <Button type="button" variant="outline" onClick={handleCancel}>
                                                Cancel
                                            </Button>
                                            <Button type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? "Submitting..." : "Submit for Approval"}
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

