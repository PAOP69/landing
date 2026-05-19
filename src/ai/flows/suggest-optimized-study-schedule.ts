'use server';
/**
 * @fileOverview An AI agent that analyzes student data to suggest an optimized study schedule.
 *
 * - suggestOptimizedStudySchedule - A function that handles the study schedule optimization process.
 * - SuggestOptimizedStudyScheduleInput - The input type for the suggestOptimizedStudySchedule function.
 * - SuggestOptimizedStudyScheduleOutput - The return type for the suggestOptimizedStudySchedule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOptimizedStudyScheduleInputSchema = z.object({
  studyHabits: z
    .array(
      z.object({
        date: z.string().describe('Date of the study session in YYYY-MM-DD format.'),
        durationMinutes: z.number().describe('Duration of the study session in minutes.'),
        subject: z.string().describe('Subject studied during the session.'),
        effectivenessRating: z
          .number()
          .min(1)
          .max(5)
          .describe('Effectiveness of the session (1-5, 5 being most effective).'),
      })
    )
    .describe('Historical data of student study habits.'),
  courseCompletionRates: z
    .array(
      z.object({
        courseName: z.string().describe('Name of the course.'),
        completionPercentage: z
          .number()
          .min(0)
          .max(100)
          .describe('Percentage completion of the course.'),
      })
    )
    .describe('Current completion rates for active courses.'),
  upcomingDeadlines: z
    .array(
      z.object({
        taskName: z.string().describe('Name of the task/assignment.'),
        dueDate: z.string().describe('Due date of the task in YYYY-MM-DD format.'),
        estimatedEffortHours: z.number().describe('Estimated hours required to complete the task.'),
      })
    )
    .describe('List of upcoming assignments and deadlines.'),
  preferences: z
    .object({
      preferredStudyTimes: z
        .array(z.string().describe('User preferred study blocks (e.g., "Morning", "Evening").'))
        .optional(),
      studyEnvironment: z
        .string()
        .describe('Description of the user\u0027s ideal study environment (e.g., "quiet, coffee shop").')
        .optional(),
    })
    .describe('Student preferences for study scheduling.'),
});
export type SuggestOptimizedStudyScheduleInput = z.infer<
  typeof SuggestOptimizedStudyScheduleInputSchema
>;

const SuggestOptimizedStudyScheduleOutputSchema = z.object({
  optimizedSchedule: z
    .array(
      z.object({
        date: z.string().describe('Date for the suggested study block in YYYY-MM-DD format.'),
        startTime: z.string().describe('Start time of the study block (e.g., "09:00").'),
        endTime: z.string().describe('End time of the study block (e.g., "10:30").'),
        subject: z
          .string()
          .describe('Subject or task recommended for this study block (e.g., "Math Homework", "Review Biology").'),
        justification: z.string().describe('Reasoning for this specific study block and subject selection.'),
      })
    )
    .describe('A personalized, optimized study schedule.'),
  generalRecommendations: z
    .array(z.string().describe('General tips and strategies for improving study efficiency.'))
    .describe('Overall recommendations for study habits.'),
});
export type SuggestOptimizedStudyScheduleOutput = z.infer<
  typeof SuggestOptimizedStudyScheduleOutputSchema
>;

export async function suggestOptimizedStudySchedule(
  input: SuggestOptimizedStudyScheduleInput
): Promise<SuggestOptimizedStudyScheduleOutput> {
  return suggestOptimizedStudyScheduleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOptimizedStudySchedulePrompt',
  input: {schema: SuggestOptimizedStudyScheduleInputSchema},
  output: {schema: SuggestOptimizedStudyScheduleOutputSchema},
  prompt: `You are an AI Study Schedule Optimizer. Your goal is to analyze a student's past study habits, course completion rates, and upcoming deadlines to generate a personalized and optimal study schedule, maximizing learning efficiency and retention.

Here is the student's data:

Study Habits:
{{#each studyHabits}}
- On {{this.date}}, studied {{this.subject}} for {{this.durationMinutes}} minutes with effectiveness rating: {{this.effectivenessRating}}/5.
{{/each}}

Course Completion Rates:
{{#each courseCompletionRates}}
- Course: {{this.courseName}}, Completion: {{this.completionPercentage}}%
{{/each}}

Upcoming Deadlines:
{{#each upcomingDeadlines}}
- Task: {{this.taskName}}, Due: {{this.dueDate}}, Estimated Effort: {{this.estimatedEffortHours}} hours.
{{/each}}

Student Preferences:
{{#if preferences.preferredStudyTimes}}
- Preferred Study Times: {{preferences.preferredStudyTimes}}
{{/if}}
{{#if preferences.studyEnvironment}}
- Preferred Study Environment: {{preferences.studyEnvironment}}
{{/if}}

Based on the above information, generate an optimized study schedule for the upcoming days, prioritizing subjects that are lagging or have critical deadlines. Also, provide general recommendations to improve study habits.

Structure your response as a JSON object matching the output schema, focusing on clear, actionable study blocks and insightful justifications.`,
});

const suggestOptimizedStudyScheduleFlow = ai.defineFlow(
  {
    name: 'suggestOptimizedStudyScheduleFlow',
    inputSchema: SuggestOptimizedStudyScheduleInputSchema,
    outputSchema: SuggestOptimizedStudyScheduleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate optimized study schedule.');
    }
    return output;
  }
);
