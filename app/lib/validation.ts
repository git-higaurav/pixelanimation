import { z } from 'zod';

export const formSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  
  email: z.string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[0-9+\-\s()]*$/, 'Phone number can only contain numbers, +, -, (), and spaces'),
  
  course: z.string()
    .min(1, 'Please select a course')
    .refine((val) => ['graphic-design', 'motion-design', 'video-editing'].includes(val), {
      message: 'Please select a valid course'
    }),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

export type FormData = z.infer<typeof formSchema>; 