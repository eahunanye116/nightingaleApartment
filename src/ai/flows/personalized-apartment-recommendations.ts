'use server';

/**
 * @fileOverview A personalized apartment recommendation AI agent.
 *
 * - personalizedApartmentRecommendations - A function that generates apartment recommendations.
 * - PersonalizedApartmentRecommendationsInput - The input type for the personalizedApartmentRecommendations function.
 * - PersonalizedApartmentRecommendationsOutput - The return type for the personalizedApartmentRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedApartmentRecommendationsInputSchema = z.object({
  searchHistory: z
    .string()
    .describe('The user search history, as a string.'),
  preferences: z
    .string()
    .describe('The user preferences, as a string.'),
  trendingDestinations: z
    .string()
    .optional()
    .describe('The trending destinations, as a string.'),
});

export type PersonalizedApartmentRecommendationsInput = z.infer<
  typeof PersonalizedApartmentRecommendationsInputSchema
>;

const PersonalizedApartmentRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('The personalized apartment recommendations.'),
});

export type PersonalizedApartmentRecommendationsOutput = z.infer<
  typeof PersonalizedApartmentRecommendationsOutputSchema
>;

export async function personalizedApartmentRecommendations(
  input: PersonalizedApartmentRecommendationsInput
): Promise<PersonalizedApartmentRecommendationsOutput> {
  return personalizedApartmentRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedApartmentRecommendationsPrompt',
  input: {
    schema: PersonalizedApartmentRecommendationsInputSchema,
  },
  output: {
    schema: PersonalizedApartmentRecommendationsOutputSchema,
  },
  prompt: `You are an AI expert in recommending apartments based on user preferences, search history, and trending destinations.

  Based on the following information, provide personalized apartment recommendations:

  Search History: {{{searchHistory}}}
  Preferences: {{{preferences}}}
  Trending Destinations: {{#if trendingDestinations}}{{{trendingDestinations}}}{{else}}N/A{{/if}}

  Recommendations:`,
});

const personalizedApartmentRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedApartmentRecommendationsFlow',
    inputSchema: PersonalizedApartmentRecommendationsInputSchema,
    outputSchema: PersonalizedApartmentRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
